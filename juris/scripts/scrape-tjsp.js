/**
 * TJSP Jurisprudence Scraper
 * Searches esaj.tjsp.jus.br/cjsg for decisions related to
 * residential financing (imóveis acima de R$ 1 milhão) in the last 5 years.
 *
 * Usage: node scripts/scrape-tjsp.js
 * Output: src/data/jurisprudencias.json
 */

import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// ─── Config ──────────────────────────────────────────────────────────────────
const SEARCH_TERMS =
  '"financiamento imobiliário" "imóvel" "um milhão" OR "1.000.000" OR "alto padrão"'
const MAX_PAGES = 10        // max result pages to scrape (20 results each)
const DELAY_MS  = 1500      // ms between requests

const today = new Date()
const fiveYearsAgo = new Date(today)
fiveYearsAgo.setFullYear(today.getFullYear() - 5)
const fmt = (d) =>
  `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
const DATE_START = fmt(fiveYearsAgo)
const DATE_END   = fmt(today)

// ─── Outcome classification ───────────────────────────────────────────────────
const OUTCOMES = {
  procedente: [
    'procedente', 'procedeu', 'provido', 'acolhido', 'deferido',
    'parcialmente procedente', 'parcialmente provido',
  ],
  improcedente: [
    'improcedente', 'não provido', 'negado provimento', 'rejeitado',
    'indeferido', 'improvido', 'não acolhido',
  ],
}

function classifyOutcome(text) {
  const lower = text.toLowerCase()
  // check partial first
  if (lower.includes('parcialmente procedente') || lower.includes('parcialmente provido')) {
    return 'parcial'
  }
  for (const kw of OUTCOMES.procedente) {
    if (lower.includes(kw)) return 'procedente'
  }
  for (const kw of OUTCOMES.improcedente) {
    if (lower.includes(kw)) return 'improcedente'
  }
  return 'indeterminado'
}

// ─── Rights / themes detection ────────────────────────────────────────────────
const RIGHTS_MAP = [
  { label: 'Rescisão contratual',       keywords: ['rescisão', 'resolução do contrato'] },
  { label: 'Revisão de cláusulas',      keywords: ['revisão', 'revisional', 'cláusula abusiva'] },
  { label: 'Repetição de indébito',     keywords: ['repetição de indébito', 'devolução em dobro'] },
  { label: 'Danos morais',              keywords: ['dano moral', 'danos morais'] },
  { label: 'Danos materiais',           keywords: ['dano material', 'danos materiais', 'lucros cessantes'] },
  { label: 'Restituição de valores',    keywords: ['restituição', 'reembolso'] },
  { label: 'Cumprimento de contrato',   keywords: ['cumprimento', 'obrigação de fazer'] },
  { label: 'Nulidade de cláusula',      keywords: ['nulidade', 'nula de pleno direito'] },
  { label: 'Taxa de juros',             keywords: ['taxa de juros', 'juros abusivos', 'anatocismo'] },
  { label: 'Habite-se / entrega do imóvel', keywords: ['habite-se', 'entrega', 'atraso na entrega'] },
]

function extractRights(text) {
  const lower = text.toLowerCase()
  return RIGHTS_MAP.filter((r) => r.keywords.some((kw) => lower.includes(kw))).map((r) => r.label)
}

// ─── Delay helper ─────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// ─── Main scraper ─────────────────────────────────────────────────────────────
async function scrape() {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    locale: 'pt-BR',
  })
  const page = await context.newPage()

  console.log('🔍 Acessando TJSP ESAJ...')
  await page.goto('https://esaj.tjsp.jus.br/cjsg/consultaCompleta.do', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  })

  // Fill search form
  console.log('📝 Preenchendo formulário de busca...')
  await page.fill('#dados\\.buscaInteiroTeor', SEARCH_TERMS)
  await page.fill('#dados\\.dtJulgamentoInicio', DATE_START)
  await page.fill('#dados\\.dtJulgamentoFim', DATE_END)

  // Submit
  await page.click('button[type="submit"], input[type="submit"]')
  await page.waitForSelector('.esajTableLine, .fundoAzulClaro, #tabelaTodasDecisoes', {
    timeout: 20000,
  }).catch(() => console.warn('⚠️  Tabela de resultados não encontrada — verificar seletor.'))

  const results = []
  let currentPage = 1

  while (currentPage <= MAX_PAGES) {
    console.log(`📄 Página ${currentPage}...`)

    const rows = await page.$$('.esajTableLine, .fundoAzulClaro')
    if (!rows.length) break

    for (const row of rows) {
      try {
        const text = await row.innerText()
        const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)

        // Try to extract structured fields
        const numero   = lines.find((l) => /^\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}/.test(l)) ?? ''
        const relator  = lines.find((l) => l.toLowerCase().includes('relator'))?.replace(/relator[a]?:/i, '').trim() ?? ''
        const orgao    = lines.find((l) => l.toLowerCase().includes('câmara') || l.toLowerCase().includes('vara')) ?? ''
        const dataLine = lines.find((l) => /\d{2}\/\d{2}\/\d{4}/.test(l)) ?? ''
        const data     = dataLine.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] ?? ''
        const ementa   = lines.slice(lines.indexOf(data) + 1 > 0 ? lines.indexOf(data) + 1 : 3).join(' ').slice(0, 800)

        const outcome = classifyOutcome(ementa || text)
        const rights  = extractRights(ementa || text)

        results.push({ numero, relator, orgao, data, ementa, outcome, rights })
      } catch (e) {
        // skip malformed row
      }
    }

    // Try next page
    const nextBtn = await page.$('a[title="Próxima página"], a:has-text("Próximo"), a:has-text("›")')
    if (!nextBtn) break
    await nextBtn.click()
    await sleep(DELAY_MS)
    currentPage++
  }

  await browser.close()
  console.log(`✅ ${results.length} decisões coletadas.`)

  // ─── Stats ────────────────────────────────────────────────────────────────
  const stats = {
    total: results.length,
    procedente: results.filter((r) => r.outcome === 'procedente').length,
    improcedente: results.filter((r) => r.outcome === 'improcedente').length,
    parcial: results.filter((r) => r.outcome === 'parcial').length,
    indeterminado: results.filter((r) => r.outcome === 'indeterminado').length,
    rightsCounts: {},
  }
  for (const r of results) {
    for (const right of r.rights) {
      stats.rightsCounts[right] = (stats.rightsCounts[right] ?? 0) + 1
    }
  }

  const output = {
    meta: {
      query: SEARCH_TERMS,
      dateStart: DATE_START,
      dateEnd: DATE_END,
      scrapedAt: new Date().toISOString(),
    },
    stats,
    decisions: results,
  }

  const outDir = path.resolve(__dirname, '../src/data')
  fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'jurisprudencias.json')
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8')
  console.log(`💾 Salvo em ${outPath}`)
}

scrape().catch((err) => {
  console.error('❌ Erro no scraper:', err)
  process.exit(1)
})
