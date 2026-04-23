# 🗺️ ROADMAP DETALHADO - Instituto Futuros Craques
## Transformação de Website para Nível Premium 2026

---

## 📅 TIMELINE EXECUTIVA

```
FASE 1: CORREÇÕES CRÍTICAS
├─ Semana 1-2: Fixes estruturais
├─ Semana 2-3: Multilíngue MVP
└─ Semana 3: Deploy e validação

FASE 2: NOVAS FUNCIONALIDADES
├─ Semana 4-5: Sistema atletas
├─ Semana 5-6: Tradução completa
└─ Semana 6-7: UX refinements

FASE 3: EXPANSÃO
├─ Semana 8-10: Integrações sociais
├─ Semana 10-12: Analytics e blog
└─ Semana 12+: Mobile app
```

---

## 🔴 FASE 1: CORREÇÕES CRÍTICAS (Semanas 1-3)

### Task 1.1: Corrigir Logo do Header
**Status**: 🔴 BLOQUEADOR
**Effort**: 1-2 horas
**Owner**: Frontend Dev

**Checklist**:
- [ ] Usar logo SVG local ou otimizado
- [ ] Adicionar fallback PNG em alta resolução
- [ ] Testar em todos os breakpoints
- [ ] Validar em todos navegadores

**Arquivo afetado**: `src/components/Header.jsx`

```jsx
// ANTES (quebrado)
<img src="https://static.wixstatic.com/media/3db4e0_27f..." />

// DEPOIS (corrigido)
<img src="/logos/ifc-logo.svg" alt="Instituto Futuros Craques" />
```

---

### Task 1.2: Implementar PDF Viewer Protegido
**Status**: 🔴 CRÍTICO
**Effort**: 20-25 horas
**Owner**: Full-stack Dev

#### 1.2.1 Frontend - PDFjs Integration
```bash
npm install pdfjs-dist
```

**Components a criar**:
- `PdfViewer.jsx` - Componente de visualização
- `PdfControls.jsx` - Botões (next, prev, zoom, etc)
- `PdfWatermark.jsx` - Overlay com watermark dinâmico

**Features**:
- ✅ Zoom in/out
- ✅ Navegação de páginas
- ✅ Busca dentro do PDF
- ✅ Fullscreen (sem print)
- ❌ Download (desabilitado)
- ❌ Print (desabilitado)
- ✅ Watermark: "Visualizado por [email] em [timestamp]"

**Código estrutura**:
```jsx
// src/components/PdfViewer.jsx
import * as pdfjsLib from 'pdfjs-dist'

export default function PdfViewer({ url, title, userEmail }) {
  const [page, setPage] = useState(1)
  const [numPages, setNumPages] = useState(null)

  const handleContextMenu = (e) => e.preventDefault() // Bloqueia right-click

  return (
    <div onContextMenu={handleContextMenu}>
      {/* PDFjs canvas renderizado aqui */}
      {/* Watermark overlay */}
    </div>
  )
}
```

#### 1.2.2 Backend - Autenticação e Logging
**Stack**: Node.js + Express + MongoDB

```javascript
// api/routes/pdfs.js
app.get('/api/pdf/:id', authenticateUser, async (req, res) => {
  // 1. Validar user autenticado
  // 2. Log de visualização em DB
  // 3. Retornar PDF com headers de segurança
  // 4. Bloquear download direto

  res.set({
    'Content-Disposition': 'inline', // não attachment
    'Content-Security-Policy': "default-src 'self'",
    'X-Content-Type-Options': 'nosniff'
  })
})
```

#### 1.2.3 Migração de PDFs atuais
**Localização atual**: `src/pages/Transparencia.jsx` (~40 PDFs)

**Novo fluxo**:
```
futuroscraques.org/transparencia
  ↓
Modal clica "Visualizar"
  ↓
Autentica usuário (guest temporário ok)
  ↓
Componente <PdfViewer />
  ↓
Log: user + timestamp + documento
```

---

### Task 1.3: Setup i18n (Internationalization)
**Status**: 🟡 CRÍTICO
**Effort**: 12-15 horas
**Owner**: Frontend + DevOps

#### 1.3.1 Instalação e Setup
```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

#### 1.3.2 Estrutura de arquivos
```
src/
├── i18n/
│   ├── locales/
│   │   ├── pt.json  (Português)
│   │   ├── en.json  (Inglês)
│   │   └── es.json  (Espanhol - opcional)
│   └── config.js
└── components/
    └── LanguageSwitcher.jsx
```

#### 1.3.3 Estrutura de tradução (exemplo)
```json
// src/i18n/locales/en.json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "projects": "Projects",
    "contact": "Contact"
  },
  "hero": {
    "title": "Transform lives through sport",
    "subtitle": "Bringing opportunities to young athletes"
  },
  "cta": {
    "donate": "Support Now",
    "signup": "Join Us"
  }
}

// src/i18n/locales/pt.json
{
  "navigation": {
    "home": "Início",
    "about": "Quem Somos",
    "projects": "Projetos",
    "contact": "Contato"
  },
  ...
}
```

#### 1.3.4 Hook customizado
```javascript
// src/hooks/useTranslation.js
import { useTranslation as useI18nTranslation } from 'react-i18next'

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation()
  return { t, language: i18n.language, changeLanguage: i18n.changeLanguage }
}
```

#### 1.3.5 Language Switcher Component
```jsx
// src/components/LanguageSwitcher.jsx
import { useTranslation } from '../hooks/useTranslation'

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslation()

  return (
    <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="pt">🇧🇷 Português</option>
      <option value="en">🇺🇸 English</option>
      <option value="es">🇪🇸 Español</option>
    </select>
  )
}
```

**Integração no Header**:
```jsx
// src/components/Header.jsx
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  return (
    <header>
      <nav>
        {/* nav items */}
        <LanguageSwitcher />
      </nav>
    </header>
  )
}
```

#### 1.3.6 Uso nos componentes
```jsx
// ANTES - hardcoded
<h1>Quem Somos</h1>

// DEPOIS - i18n
import { useTranslation } from 'react-i18next'

export default function QuemSomos() {
  const { t } = useTranslation()
  return <h1>{t('about.title')}</h1>
}
```

---

## 🟡 FASE 2: NOVAS FUNCIONALIDADES (Semanas 4-7)

### Task 2.1: Sistema de Cadastro de Atletas
**Status**: 🟡 IMPORTANTE
**Effort**: 40-50 horas
**Owner**: Full-stack team (2 devs)

#### 2.1.1 Database Schema (Firebase Firestore)
```javascript
// Collections structure
athletes: {
  [athleteId]: {
    // Personal Info
    name: string,
    email: string,
    phone: string,
    birthDate: timestamp,
    cpf: string (encrypted),

    // Contact & Social
    instagram: string,
    tiktok: string,
    whatsapp: string,
    linkedin: string,

    // Sport Profile
    sportCategories: array, // [3x3, futsal, etc]
    position: string,
    level: enum, // iniciante, intermediário, avançado
    height: number,
    weight: number,

    // Performance Metrics
    stats: {
      pointsAverage: number,
      gamesParticipated: number,
      achievements: array
    },

    // Media
    profilePhoto: url,
    badges: array,

    // Metadata
    createdAt: timestamp,
    updatedAt: timestamp,
    status: enum // active, inactive, banned
  }
}

// Relationships
events: {
  participations: [athleteId] // Quem participou
}

achievements: {
  earnedBy: [athleteId]
}
```

#### 2.1.2 Frontend - Pages & Components

**New Routes**:
```jsx
// src/App.jsx
<Route path="/atletas" element={<AtletasGaleria />} />
<Route path="/atleta/:id" element={<AletaPerfil />} />
<Route path="/cadastro" element={<CadastroAtleta />} />
<Route path="/dashboard-atleta" element={<DashboardAtleta />} />
```

**Files to create**:
- `src/pages/CadastroAtleta.jsx` - Formulário inscrição
- `src/pages/AtletasGaleria.jsx` - Grid de atletas
- `src/pages/AtletaPerfil.jsx` - Página individual
- `src/pages/DashboardAtleta.jsx` - Painel privado
- `src/components/AtletaCard.jsx` - Card reutilizável

#### 2.1.3 Formulário de Cadastro
```jsx
// src/pages/CadastroAtleta.jsx
export default function CadastroAtleta() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    categories: [],
    profilePhoto: null,
    // ... outros campos
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // 1. Validar dados
    // 2. Upload foto para Firebase Storage
    // 3. Criar documento Firestore
    // 4. Enviar email confirmação
    // 5. Redirecionar para perfil
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos do formulário */}
    </form>
  )
}
```

#### 2.1.4 Social Media Integration
```javascript
// src/utils/socialIntegration.js
export const shareAchievement = async (athleteData, achievement) => {
  // 1. Gerar imagem com achievement
  // 2. Postar no Instagram (via API)
  // 3. Compartilhar no TikTok
  // 4. Post no LinkedIn
  // 5. Notificar atleta
}

// Integração com APIs:
// - Instagram Graph API
// - TikTok API
// - LinkedIn API
// - Firebase Cloud Functions como middleware
```

---

### Task 2.2: Tradução Completa do Conteúdo
**Status**: 🟡 IMPORTANTE
**Effort**: 20-25 horas
**Owner**: Content + Dev

**Páginas a traduzir** (EN + ES):
- [x] Home
- [x] Quem Somos
- [x] Projetos
- [x] Transparência
- [x] Como Apoiar
- [x] Doação Direta
- [x] Doação Materiais
- [x] Infografias
- [x] Recrutamento
- [x] Contato

**Processo**:
1. Extrair textos hardcoded
2. Criar JSON translation files
3. Implementar em componentes
4. QA: verificar cada página
5. Deploy com feature flag

---

### Task 2.3: UX/Design Refinements
**Status**: 🟡 IMPORTANTE
**Effort**: 15-20 horas
**Owner**: UX/UI Designer + Frontend

**Melhorias específicas**:

1. **Hero Section**
   - Adicionar vídeo background ao invés de estático
   - Maior contraste no CTA
   - Movimento parallax ao scroll

2. **Projetos Section**
   - Galeria com lightbox interativo
   - Hover effect mais sofisticado
   - Filtros por categoria

3. **Impacto Section**
   - Números com contador animado
   - Gráficos interativos (chart.js)
   - Timeline de evolução

4. **Testimonials**
   - Carousel automático com pause on hover
   - Imagens de atletas em círculo
   - Rating stars animadas

5. **Footer**
   - Newsletter subscription
   - Social media icons com hover
   - Mapa do site em colunas

---

## 🟢 FASE 3: EXPANSÃO PREMIUM (Semanas 8-12+)

### Task 3.1: Integrações Sociais Avançadas
- [ ] Automação de posts (Instagram, TikTok, LinkedIn)
- [ ] Tagging inteligente de atletas
- [ ] Hashtag strategy automática
- [ ] Performance analytics dos posts
- [ ] Stories automáticas

### Task 3.2: Blog & News
- [ ] CMS integrado (Contentful ou Strapi)
- [ ] Posts sobre projetos
- [ ] Success stories de atletas
- [ ] Dicas de treinamento
- [ ] Newsletter automática

### Task 3.3: Analytics Avançado
- [ ] Google Analytics 4
- [ ] Hotmap de cliques (Hotjar)
- [ ] Funil de conversão
- [ ] Dashboards executivos
- [ ] Relatórios automáticos

### Task 3.4: Mobile App MVP
- [ ] React Native app
- [ ] Login do atleta
- [ ] Ver eventos próximos
- [ ] Notificações push
- [ ] Funcionamento offline

---

## 📊 ESTIMATIVA DE ESFORÇO COMPLETO

| Fase | Horas | Dias (8h/dia) | Custo Est.* |
|------|-------|---------------|-----------|
| Fase 1 | 35-40 | 4-5 dias | R$ 3.500-4.000 |
| Fase 2 | 75-90 | 9-11 dias | R$ 7.500-9.000 |
| Fase 3 | 100-120 | 12-15 dias | R$ 10.000-12.000 |
| **Total** | **210-250** | **26-31 dias** | **R$ 21.000-25.000** |

*Valores estimados para Brasil (Sp, senior dev R$150-200/hora)

---

## 🎯 SUCCESS METRICS

### Fase 1 (Go-live)
- ✅ Logo exibindo corretamente (100%)
- ✅ PDFs com visualização protegida (100%)
- ✅ Idioma seletor funcional (EN/PT/ES)
- ✅ Sem erros 404 ou quebrados
- ✅ Lighthouse score ≥ 85

### Fase 2 (Soft-launch)
- ✅ 500+ atletas cadastrados
- ✅ Todas páginas traduzidas
- ✅ UX score ≥ 90 (user testing)
- ✅ Social media integration ativo

### Fase 3 (Premium)
- ✅ 2.000+ atletas ativos
- ✅ Blog com 20+ artigos
- ✅ App mobile com 1.000+ downloads
- ✅ Newsletter com 5.000+ inscritos

---

## 🛠️ TECH STACK RECOMENDADO

### Frontend
```json
{
  "core": ["React 19", "Vite 8", "React Router 7"],
  "styling": ["CSS Modules", "Framer Motion"],
  "i18n": ["i18next", "react-i18next"],
  "forms": ["React Hook Form", "Zod"],
  "pdf": ["pdfjs-dist"],
  "charts": ["Chart.js", "Recharts"],
  "ui": ["Lucide Icons"],
  "state": ["TanStack Query", "Zustand"]
}
```

### Backend
```json
{
  "runtime": ["Node.js 20"],
  "framework": ["Express.js", "Firebase"],
  "database": ["Firestore", "Firebase Realtime"],
  "auth": ["Firebase Auth"],
  "storage": ["Firebase Storage", "CloudFront CDN"],
  "email": ["SendGrid", "Firebase Cloud Functions"],
  "social": ["axios", "social-media-apis"]
}
```

### DevOps
```json
{
  "hosting": ["Netlify", "Firebase Hosting"],
  "cdn": ["Cloudflare"],
  "analytics": ["Google Analytics 4", "Posthog"],
  "monitoring": ["Sentry", "LogRocket"],
  "ci-cd": ["GitHub Actions"]
}
```

---

## 👥 TEAM COMPOSITION

| Role | Count | Horas/Semana | Custo |
|------|-------|--------------|-------|
| Senior Frontend Dev | 1 | 40 | R$ 8.000 |
| Full-stack Dev | 1 | 40 | R$ 7.000 |
| UX/UI Designer | 1 | 20 | R$ 4.000 |
| QA Tester | 1 | 20 | R$ 2.500 |
| Product Manager | 1 | 10 | R$ 2.000 |
| **Total** | **5** | **130/week** | **R$ 23.500/week** |

---

## 🚀 PRÓXIMAS AÇÕES

### Imediato (Esta semana)
1. [ ] Aprovar roadmap
2. [ ] Contratar/alocar team
3. [ ] Setup repositórios e infra
4. [ ] Iniciar Task 1.1 (logo)

### Semana 1
1. [ ] Completar Task 1.1
2. [ ] Iniciar Task 1.2 (PDF viewer)
3. [ ] Iniciar Task 1.3 (i18n)

### Semana 3
1. [ ] Deploy Fase 1 em staging
2. [ ] User testing
3. [ ] Feedback loop
4. [ ] Deploy em produção

---

## 📞 CONTACT & QUESTIONS

**Arquivo**: ROADMAP_DETALHADO.md
**Versão**: 1.0
**Última atualização**: 26 de Março de 2026
**Status**: Pronto para aprovação e implementação

---

**Próxima reunião**: Discussão de timeline e alocação de recursos
