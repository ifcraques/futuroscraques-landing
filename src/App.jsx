import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './index.css'
import StaggeredMenu from './components/StaggeredMenu'
import Footer from './components/Footer'
import Home from './pages/Home'
import Transparencia from './pages/Transparencia'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'
import ComoApoiar from './pages/ComoApoiar'
import Projetos from './pages/Projetos'
import Noticias from './pages/Noticias'
import Post from './pages/Post'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'

const textVariants = {
  hidden: { opacity: 0, y: 16, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function AppShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', position: 'relative' }}>

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
        <AnimatePresence>
          <motion.div
            key="cta"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={isMenuOpen ? 'hidden-mobile' : ''}
            style={{
              transform: isMenuOpen
                ? 'translateX(calc(-1 * clamp(280px, 38vw, 440px)))'
                : 'translateX(0)',
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <Link to="/comoapoiar" style={{ textDecoration: 'none' }}>
              <button style={{
                background: isMenuOpen ? '#16a34a' : '#fff',
                color: '#000',
                border: 'none',
                padding: 'clamp(10px, 1.1vw, 16px) clamp(20px, 2.5vw, 40px)',
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(11px, 0.9vw, 15px)',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                pointerEvents: 'auto',
                transition: 'background 0.25s, color 0.25s',
                borderRadius: '4px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = isMenuOpen ? '#16a34a' : '#fff'; e.currentTarget.style.color = '#000' }}
              >
                APOIE AGORA
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Páginas */}
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/quemsomos"    element={<QuemSomos />} />
          <Route path="/contato"      element={<Contato />} />
          <Route path="/comoapoiar"   element={<ComoApoiar />} />
          <Route path="/projetos"     element={<Projetos />} />
          <Route path="/noticias"          element={<Noticias />} />
          <Route path="/noticias/:slug"    element={<Post />} />
          <Route path="/login"             element={<Login />} />
        </Routes>
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
    <HashRouter>
      <ScrollToTop />
      <AppShell />
    </HashRouter>
  )
}
