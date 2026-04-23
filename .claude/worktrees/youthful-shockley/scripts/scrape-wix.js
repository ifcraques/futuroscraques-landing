/**
 * scrape-wix.js
 * Migra posts do blog Wix para arquivos locais JSON + imagens baixadas.
 *
 * Uso:
 *   node scripts/scrape-wix.js
 *
 * Resultado:
 *   public/posts/[slug].json   — conteúdo completo de cada post
 *   public/fotos/[slug]/       — imagens do post baixadas
 *   noticias.json              — índice regenerado com slugs reais
 */

import { chromium } from 'playwright'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT      = path.join(__dirname, '..')
const POSTS_DIR = path.join(ROOT, 'public', 'posts')
const FOTOS_DIR = path.join(ROOT, 'public', 'fotos')
const BASE_URL  = 'https://www.futuroscraques.org'
const DELAY_MS  = 1500   // pausa entre requests para não sobrecarregar o servidor

// ─── helpers ────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

function slugFromUrl(url) {
  const m = url.match(/\/post\/([^/?#]+)/)
  return m ? m[1] : null
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function descricaoFromHtml(html) {
  const texto = stripHtml(html)
  return texto.length > 160 ? texto.substring(0, 160).trimEnd() + '…' : texto
}

async function downloadFile(url, destPath) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    await fs.writeFile(destPath, buf)
    return true
  } catch (err) {
    console.warn(`    ⚠ imagem falhou: ${url.slice(0, 80)} — ${err.message}`)
    return false
  }
}

function extFromUrl(url) {
  const clean = url.split('?')[0].split('#')[0]
  const ext = clean.split('.').pop().toLowerCase()
  return /^(jpg|jpeg|png|gif|webp|svg)$/.test(ext) ? ext : 'jpg'
}

// ─── coleta lista de posts ───────────────────────────────────────────────────

async function getPostUrls(page) {
  // Tentativa 1: RSS feed
  console.log('📋 Buscando posts via RSS...')
  try {
    const res = await fetch(`${BASE_URL}/blog-feed.xml`, { signal: AbortSignal.timeout(10000) })
    const xml = await res.text()
    const urls = []
    // <link>https://.../ post/slug</link>  (pode ter espaços)
    const re = /<link>\s*(https?:\/\/[^<]+\/post\/[^<\s]+)\s*<\/link>/g
    let m
    while ((m = re.exec(xml)) !== null) {
      urls.push(m[1].trim())
    }
    if (urls.length > 0) {
      console.log(`✅ ${urls.length} posts via RSS`)
      return [...new Set(urls)]
    }
  } catch {
    console.warn('   RSS não respondeu, tentando via página do blog...')
  }

  // Tentativa 2: navegar /blog e coletar links
  await page.goto(`${BASE_URL}/blog`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await sleep(2000)

  // scroll para carregar posts com lazy load
  for (let i = 0; i < 8; i++) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await sleep(800)
  }

  const urls = await page.$$eval('a[href*="/post/"]', links =>
    [...new Set(links.map(l => l.href).filter(h => /\/post\/[^/?#]+/.test(h)))]
  )

  console.log(`✅ ${urls.length} posts via página /blog`)
  return urls
}

// ─── extrai dados de um post ─────────────────────────────────────────────────

async function scrapePost(page, url) {
  const slug = slugFromUrl(url)
  if (!slug) return null

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  // aguarda o conteúdo principal aparecer
  await page.waitForSelector('h1, article, [data-hook="post-title"]', { timeout: 15000 }).catch(() => {})
  await sleep(1500)

  const data = await page.evaluate(() => {
    // ── título ──
    const titulo =
      document.querySelector('[data-hook="post-title"]')?.textContent?.trim() ||
      document.querySelector('h1[class*="title"]')?.textContent?.trim() ||
      document.querySelector('h1')?.textContent?.trim() || '(sem título)'

    // ── data de publicação ──
    const dateEl =
      document.querySelector('[data-hook="post-publish-date"]') ||
      document.querySelector('time') ||
      document.querySelector('[class*="publish-date"]') ||
      document.querySelector('[class*="PublishDate"]')
    const data = dateEl?.textContent?.trim() || ''

    // ── categoria ──
    const catEl =
      document.querySelector('[data-hook="category-link"]') ||
      document.querySelector('[class*="category"] a') ||
      document.querySelector('[class*="Category"] a')
    const categoria = catEl?.textContent?.trim() || 'Geral'

    // ── tags ──
    const tagEls = document.querySelectorAll('[data-hook="tag-list"] a, [class*="tag-list"] a, [class*="TagsList"] a')
    const tags = [...tagEls].map(el => el.textContent?.trim()).filter(Boolean)

    // ── conteúdo HTML ──
    // Wix Blog usa vários wrappers dependendo da versão; tentamos do mais específico ao mais genérico
    const contentEl =
      document.querySelector('[data-hook="post-description"]') ||
      document.querySelector('[class*="post-content"]') ||
      document.querySelector('[class*="PostContent"]') ||
      document.querySelector('[class*="blog-post-content"]') ||
      document.querySelector('article .entry-content') ||
      document.querySelector('article') ||
      document.querySelector('[role="main"]')

    const conteudoHtml = contentEl?.innerHTML || ''

    // ── imagem de capa ──
    const capaEl =
      document.querySelector('[data-hook="post-cover-image"] img') ||
      document.querySelector('[class*="cover-image"] img') ||
      document.querySelector('[class*="CoverImage"] img') ||
      document.querySelector('article img') ||
      document.querySelector('meta[property="og:image"]')

    const fotoCapa = capaEl?.src || capaEl?.content || ''

    // ── todas as imagens da página ──
    const imagens = [...document.querySelectorAll('img')]
      .map(img => img.src || img.getAttribute('data-src') || '')
      .filter(src => src.startsWith('http') && !src.includes('data:') && !src.includes('favicon'))

    return { titulo, data, categoria, tags, conteudoHtml, fotoCapa, imagens: [...new Set(imagens)] }
  })

  return { slug, url, ...data }
}

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
  await fs.mkdir(POSTS_DIR, { recursive: true })
  await fs.mkdir(FOTOS_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    locale: 'pt-BR',
  })
  const page = await context.newPage()

  const noticiasIndex = []
  const erros = []
  let ok = 0

  try {
    const postUrls = await getPostUrls(page)
    const total = postUrls.length

    for (let i = 0; i < postUrls.length; i++) {
      const postUrl = postUrls[i]
      const progresso = `[${i + 1}/${total}]`

      try {
        await sleep(DELAY_MS)
        console.log(`\n${progresso} Scraping: ${postUrl}`)

        const post = await scrapePost(page, postUrl)
        if (!post?.slug) { console.warn('  slug não encontrado, pulando'); continue }

        // pasta de fotos do post
        const postFotosDir = path.join(FOTOS_DIR, post.slug)
        await fs.mkdir(postFotosDir, { recursive: true })

        // baixar imagens e construir mapa URL → caminho local
        const imageMap = {}
        let imgIdx = 0

        for (const imgUrl of post.imagens) {
          const ext = extFromUrl(imgUrl)
          const filename = `foto-${imgIdx}.${ext}`
          const localPath = path.join(postFotosDir, filename)
          const publicPath = `/fotos/${post.slug}/${filename}`

          const baixou = await downloadFile(imgUrl, localPath)
          if (baixou) {
            imageMap[imgUrl] = publicPath
            imgIdx++
          }
        }

        // substituir URLs no HTML
        let html = post.conteudoHtml
        for (const [orig, local] of Object.entries(imageMap)) {
          // escapar caracteres especiais de regex
          const escaped = orig.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          html = html.replace(new RegExp(escaped, 'g'), local)
        }

        // foto de capa local
        const fotoCapa = imageMap[post.fotoCapa] || post.fotoCapa || ''

        // descrição curta
        const descricao = descricaoFromHtml(html)

        // objeto do post completo
        const postJson = {
          slug: post.slug,
          titulo: post.titulo,
          data: post.data,
          categoria: post.categoria,
          tags: post.tags.slice(0, 5),
          fotoCapa,
          descricao,
          url: post.url,
          conteudoHtml: html,
        }

        await fs.writeFile(
          path.join(POSTS_DIR, `${post.slug}.json`),
          JSON.stringify(postJson, null, 2),
          'utf8'
        )

        // entrada no índice
        noticiasIndex.push({
          id: ok + 1,
          slug: post.slug,
          titulo: post.titulo,
          url: post.url,
          descricao,
          foto: fotoCapa,
          data: post.data,
          categoria: post.categoria,
          tags: post.tags.slice(0, 3),
        })

        ok++
        console.log(`  ✅ OK — ${imgIdx} imagens baixadas`)

      } catch (err) {
        console.error(`  ❌ Erro: ${err.message}`)
        erros.push({ url: postUrl, erro: err.message })
      }
    }

  } finally {
    await browser.close()
  }

  // salvar noticias.json atualizado
  if (noticiasIndex.length > 0) {
    await fs.writeFile(
      path.join(ROOT, 'noticias.json'),
      JSON.stringify(noticiasIndex, null, 2),
      'utf8'
    )
    console.log(`\n📄 noticias.json atualizado com ${noticiasIndex.length} entradas`)
  }

  // relatório final
  console.log('\n══════════════════════════════════════')
  console.log(`✅ ${ok} posts migrados com sucesso`)
  if (erros.length > 0) {
    console.log(`❌ ${erros.length} erros:`)
    erros.forEach(e => console.log(`   • ${e.url}\n     ${e.erro}`))
  }
  console.log('══════════════════════════════════════')
  console.log('\nPróximo passo: npm run dev  para ver o resultado')
}

main().catch(err => {
  console.error('Erro fatal:', err)
  process.exit(1)
})
