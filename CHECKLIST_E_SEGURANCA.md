# Checklist do Site + Verificação de Segurança

**Projeto**: Instituto Futuros Craques — landing (Vite + React 19)
**Data**: 29/04/2026
**Branch**: workspace mounted em `D:\projetos\futuroscraques-landing`

---

## 1. Checklist — pendências técnicas / bugs

### 1.1 Bloqueadores (alta prioridade)

- [ ] **Login real (Login.jsx)** — atualmente é só mock (`await new Promise(setTimeout, 1800)` e redireciona). Não há backend, hash de senha, nem proteção de rota. Decidir: remover a rota `/login`, ou plugar Firebase Auth / Supabase / backend próprio. Hoje qualquer pessoa "loga" sem credenciais.
- [ ] **PDFs de transparência sem proteção** — `src/pages/Transparencia.jsx` referencia ~127 ocorrências de `.pdf` apontando direto para `https://www.futuroscraques.org/_files/ugd/...`. Qualquer um baixa/copia. Implementar PDF viewer (PDF.js) com watermark + bloqueio de download/print, conforme `ROADMAP_DETALHADO.md` Task 1.2.
- [ ] **i18n não implementado** — não existe nenhum import de `i18next`/`react-i18next` em `src/`. Roadmap previa pt/en/es. Conteúdo todo hardcoded em PT-BR.
- [ ] **`<html lang="en">`** — em `index.html` o atributo `lang` está como `en` mas o site é PT-BR. Corrigir para `lang="pt-BR"` (afeta SEO e acessibilidade).
- [ ] **`<title>app</title>`** em `index.html` — está com o placeholder do Vite. Trocar por título real, ex.: `Instituto Futuros Craques — Transformando vidas pelo esporte`.
- [ ] **Sem meta tags SEO/OG** — `index.html` não tem `description`, `og:title`, `og:image`, `twitter:card`, canonical, robots. Sem isso o link compartilhado em redes sociais aparece sem prévia.

### 1.2 Pendências do Roadmap (média prioridade)

- [ ] Sistema de cadastro de atletas (Task 2.1 do roadmap) — rotas `/atletas`, `/cadastro`, `/dashboard-atleta` ainda não existem em `src/App.jsx`.
- [ ] Tradução completa das páginas (Task 2.2).
- [ ] Galeria interativa em `Projetos.jsx` / lightbox em `PhotoGallery.jsx`.
- [ ] Newsletter (captura de e-mail) — não existe componente.
- [ ] Blog/News — `src/pages/Noticias.jsx` e `Post.jsx` existem; verificar se estão alimentados (há `noticias.json` na raiz, 16 KB).
- [ ] Mapa de impacto / leaderboard de atletas / calendário de eventos (oportunidades não exploradas listadas na auditoria).

### 1.3 Qualidade de código

- [ ] **`dangerouslySetInnerHTML` em `src/pages/Post.jsx:114`** rendendo `post.conteudoHtml`. Se a fonte do HTML for um JSON do próprio repo é aceitável, mas qualquer fonte externa precisa ser sanitizada (DOMPurify) — XSS armazenado.
- [ ] `dangerouslySetInnerHTML` em `Projects.jsx:189` e `cinematic-landing-hero.jsx:275` injetam apenas CSS estático literal — ok, mas vale comentário explicando.
- [ ] **`react-router-dom` v7 com `HashRouter`** — funciona, mas URLs ficam com `/#/...`, ruim para SEO. Considerar `BrowserRouter` (config de redirect já existe em `_redirects`/`vercel.json`).
- [ ] **`playwright` como dependência de produção** no `package.json` — deveria estar em `devDependencies` (acrescenta ~300 MB ao deploy se chegar a ser empacotado). Mover.
- [ ] **`framer-motion` e `motion` ambos instalados** — são o mesmo pacote em versões diferentes. Manter só `framer-motion` ou só `motion`.
- [ ] Não há testes (`vitest`/`playwright e2e`) ativos. ESLint configurado mas `npm run lint` precisa rodar limpo (não verificado nesta sessão — pendente).

### 1.4 Performance / SEO / acessibilidade

- [ ] Lighthouse audit nunca rodou — meta no roadmap.
- [ ] Imagens em `public/fotos`, `public/gallery`, `public/posts` — verificar se estão otimizadas (webp/avif) e com `loading="lazy"`.
- [ ] Faltam `aria-label` em botões só com ícone (verificar `Header.jsx`, `SearchOverlay.jsx`, `StaggeredMenu.jsx`).
- [ ] `alt=""` — busca não encontrou `<img>` sem `alt`, bom sinal; manter regra.
- [ ] Adicionar `sitemap.xml` e `robots.txt` em `public/` (não existem).

### 1.5 Deploy

- [ ] **`netlify.toml` com `Cache-Control: no-cache, no-store, must-revalidate` em `/*`** — isso desabilita cache para todos os assets (JS/CSS/imagens com hash). Penaliza performance pesadamente. Recomendado: `no-cache` apenas em `/index.html`, e `public, max-age=31536000, immutable` para `/assets/*`.
- [ ] Definir mesmo padrão de cache no `vercel.json` (hoje sem headers).
- [ ] Decidir plataforma única de deploy (`netlify.toml`, `vercel.json`, `gh-pages` no `package.json` — três configs convivendo).
- [ ] `start-dev.ps1` e `buildar.bat` — ok manter para dev local Windows, mas documentar em `README.md` (atualmente o README tem só 1 KB).

---

## 2. Verificação de Segurança

### 2.1 Dependências (`npm audit`)

**Resultado: 4 vulnerabilidades — 2 high, 2 moderate.**

| Pacote | Severidade | Resumo | Caminho |
|---|---|---|---|
| `vite` 8.0.0–8.0.4 | **HIGH** | Path traversal em `.map`, bypass de `server.fs.deny`, leitura arbitrária via WebSocket (`GHSA-4w7w-66w2-5vf9`, `GHSA-v2wj-q39q-566r`, `GHSA-p9ff-h696-f583`) | direto |
| `picomatch` <2.3.2 e 4.0.0–4.0.3 | **HIGH** | ReDoS via extglob + method injection (`GHSA-c2c7-rcm5-vvqj`, `GHSA-3v7f-55p6-f55p`) | transitivo |
| `postcss` <8.5.10 | moderate | XSS via `</style>` no Stringify (`GHSA-qx2v-qp2m-jg93`) | transitivo |
| `brace-expansion` <1.1.13 | moderate | DoS por loop infinito (`GHSA-f886-m6hf-6m8v`) | transitivo |

**Ação imediata**: `npm audit fix` (todas têm fix disponível). Se `npm audit fix` quebrar algo, rodar com `--force` apenas após testar build. As falhas do `vite` são as mais críticas pois afetam o dev server em rede local — qualquer pessoa na mesma rede consegue ler arquivos do projeto.

### 2.2 Segredos / credenciais expostas

- ✅ Nenhuma chave de API, token ou senha hardcoded encontrada em `src/`, `public/`, `scripts/`, `index.html`, `netlify.toml`, `vercel.json` (regex amplo: `API_KEY`, `SECRET`, `apiKey`, `AIzaSy*`, `sk_live`, `sk_test`, `ghp_`, `Bearer`).
- ✅ Nenhum arquivo `.env*` no working tree (nem rastreado no git).
- ✅ Nenhum arquivo `.key`, `.pem`, `credentials*` rastreado.
- ⚠️ **`.env` não está listado no `.gitignore`**. Hoje não há `.env` no repo, mas se alguém criar um amanhã ele vira candidato a commit acidental. Adicionar:
  ```
  .env
  .env.*
  !.env.example
  ```

### 2.3 Headers de segurança no deploy

**Resultado: nenhum header de segurança configurado em `netlify.toml` nem em `vercel.json`.** O único bloco `[[headers]]` do Netlify só configura cache.

Recomendado adicionar (Netlify):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
    Content-Security-Policy = "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; frame-src https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self' https:"
```

> Cuidado: `script-src 'self'` quebra se você usar inline scripts; ajustar conforme necessidade. Para o Vercel, o equivalente é a chave `headers` no `vercel.json`.

### 2.4 Riscos no código React

| Item | Onde | Risco | Mitigação |
|---|---|---|---|
| Login mock que sempre aceita | `src/pages/Login.jsx:141` | Falsa sensação de área restrita. Se houver rota protegida assumindo que login = autorizado, vira bypass. | Plugar auth real OU desabilitar `/login` até existir backend. |
| `dangerouslySetInnerHTML={{ __html: post.conteudoHtml }}` | `src/pages/Post.jsx:114` | XSS se `noticias.json` algum dia for editado por terceiros / vier de CMS. | Sanitizar com DOMPurify antes de injetar, mesmo que a fonte hoje seja confiável. |
| 127 links `https://www.futuroscraques.org/_files/ugd/*.pdf` em `Transparencia.jsx` | `src/pages/Transparencia.jsx` | Não é vulnerabilidade web, mas é exposição de documentos institucionais sem auditoria de acesso. | Implementar viewer PDF com log de visualização (já no roadmap). |
| Links externos em `<a>` | global | Sem `rel="noopener noreferrer"` em alguns casos pode dar tabnabbing | Auditar `target="_blank"` e garantir `rel="noopener noreferrer"`. |
| Sem CSP | servidor | Reduz custo de qualquer XSS pra atacante | ver §2.3. |

---

## 3. Plano de ação recomendado (ordem)

1. `npm audit fix` e revalidar build (`npm run build`).
2. Atualizar `.gitignore` com `.env*`.
3. Corrigir `<html lang>` e `<title>` + meta tags em `index.html`.
4. Adicionar bloco de headers de segurança em `netlify.toml`.
5. Ajustar política de cache do Netlify (não cachear só `/index.html`, cachear assets).
6. Sanitizar `dangerouslySetInnerHTML` em `Post.jsx` (DOMPurify).
7. Decidir destino de `/login` (remover ou implementar auth real).
8. Iniciar implementação do PDF viewer protegido (Task 1.2 do roadmap).
9. Subir i18n (Task 1.3 do roadmap).
10. Cadastro de atletas + traduções completas (Fase 2 do roadmap).

---

*Gerado a partir de leitura de `package.json`, `src/`, `public/`, `netlify.toml`, `vercel.json`, `index.html`, `ROADMAP_DETALHADO.md`, `AUDITORIA_COMPLETA.md` e execução de `npm audit`.*
