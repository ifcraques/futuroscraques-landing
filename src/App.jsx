import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import StaggeredMenu from './components/StaggeredMenu'
import Footer from './components/Footer'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import AccessibilityWidget from './components/AccessibilityWidget'

/* Code-splitting: páginas secundárias carregam sob demanda */
const Transparencia = lazy(() => import('./pages/Transparencia'))
const QuemSomos     = lazy(() => import('./pages/QuemSomos'))
const Contato       = lazy(() => import('./pages/Contato'))
const ComoApoiar    = lazy(() => import('./pages/ComoApoiar'))
const Projetos      = lazy(() => import('./pages/Projetos'))
const Noticias      = lazy(() => import('./pages/Noticias'))
const Post          = lazy(() => import('./pages/Post'))
const ProjetoDet    = lazy(() => import('./pages/ProjetoDet'))
const FAQ           = lazy(() => import('./pages/FAQ'))

function PageFallback() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Outfit', sans-serif",
      color: 'var(--muted, #5a6a75)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontSize: '0.8rem',
    }}>
      Carregando…
    </div>
  )
}

function AppShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--page-bg, #ffffff)', position: 'relative' }}>

      {/* Menu GSAP */}
      <StaggeredMenu
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(v => !v)}
      />

      {/* Botão fixo APOIE AGORA — bottom-right, some quando menu abre no mobile */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 45,
        pointerEvents: 'none',
      }}>
        <Link to="/comoapoiar" style={{ textDecoration: 'none', pointerEvents: 'auto' }}>
          <button style={{
            background: '#16a34a',
            color: '#fff',
            border: 'none',
            padding: 'clamp(10px, 1.1vw, 16px) clamp(20px, 2.5vw, 40px)',
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(11px, 0.9vw, 15px)',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            pointerEvents: 'auto',
            transition: 'background 0.25s, transform 0.2s',
            borderRadius: '4px',
            boxShadow: '0 4px 20px rgba(22,163,74,0.35)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#15803d'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            APOIE AGORA
          </button>
        </Link>
      </div>

      <AccessibilityWidget />

      {/* Páginas */}
      <main id="main-content">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/quemsomos"     element={<QuemSomos />} />
            <Route path="/contato"       element={<Contato />} />
            <Route path="/comoapoiar"    element={<ComoApoiar />} />
            <Route path="/projetos"          element={<Projetos />} />
            <Route path="/projetos/:slug"    element={<ProjetoDet />} />
            <Route path="/noticias"          element={<Noticias />} />
            <Route path="/noticias/:slug"    element={<Post />} />
            <Route path="/faq"               element={<FAQ />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  )
}
