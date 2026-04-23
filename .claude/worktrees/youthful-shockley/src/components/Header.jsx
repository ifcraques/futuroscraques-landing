import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Quem Somos',   href: '/quemsomos', type: 'page' },
  { label: 'Projetos',     href: '/projetos',  type: 'page' },
  { label: 'Notícias',     href: '/noticias',  type: 'page' },
  { label: 'Impacto',      href: '#impact-section', type: 'scroll' },
  { label: 'Transparência',href: '/transparencia', type: 'page' },
  { label: 'Contato',      href: '/contato',   type: 'page' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [logoExpanded, setLogoExpanded] = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // fecha menu ao mudar de rota
  useEffect(() => setMenuOpen(false), [location.pathname])

  // fecha overlay com Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLogoExpanded(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleNav = (item) => {
    setMenuOpen(false)
    if (item.type === 'page') {
      navigate(item.href)
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
        }, 320)
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1.1rem clamp(1.2rem, 4vw, 3rem)',
        }}
      >
        {/* pill container */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled
            ? 'rgba(255,255,255,0.96)'
            : 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '16px',
          padding: '0.75rem 1.2rem 0.75rem 1.4rem',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)'
            : '0 2px 12px rgba(0,0,0,0.06)',
          transition: 'background 0.35s, box-shadow 0.35s',
        }}>

          {/* logo — clique para expandir */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.button
              onClick={() => setLogoExpanded(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              title="Ver logo"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/ifc-logo.jpeg"
                alt="IFC"
                style={{
                  height: '38px',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  background: '#fff',
                  padding: '2px',
                }}
              />
            </motion.button>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#111827',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}>
                Instituto Futuros Craques
              </span>
            </Link>
          </div>

          {/* nav links — desktop */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }} className="desktop-nav">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNav(item)}
                whileHover={{ color: '#fff' }}
                transition={{ duration: 0.15 }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: '#374151',
                  cursor: 'pointer',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = '#111827' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#374151' }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Link to="/comoapoiar" style={{ textDecoration: 'none' }} className="desktop-nav">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(22,163,74,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: '#16a34a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  fontFamily: "'Outfit', sans-serif",
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                }}
              >
                Contribua
              </motion.button>
            </Link>

            {/* hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className="mobile-menu-btn"
              style={{
                background: 'rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={menuOpen ? {
                    rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                    y:      i === 0 ? 6  : i === 2 ? -6  : 0,
                    opacity: i === 1 ? 0 : 1,
                  } : { rotate: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: 'block',
                    width: '18px',
                    height: '1.5px',
                    background: '#374151',
                    borderRadius: '2px',
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '80px',
              left: 'clamp(1.2rem, 4vw, 3rem)',
              right: 'clamp(1.2rem, 4vw, 3rem)',
              zIndex: 999,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '14px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                onClick={() => handleNav(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#374151',
                  cursor: 'pointer',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  textAlign: 'left',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.05)'; e.currentTarget.style.color = '#111827' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#374151' }}
              >
                {item.label}
              </motion.button>
            ))}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', marginTop: '0.5rem', paddingTop: '0.75rem' }}>
              <Link to="/comoapoiar" style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  background: '#16a34a',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.8rem',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.03em',
                }}>
                  Contribua
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── logo overlay ── */}
      <AnimatePresence>
        {logoExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLogoExpanded(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0,0,0,0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              gap: '1.5rem',
            }}
          >
            <motion.img
              src="/ifc-logo.jpeg"
              alt="Instituto Futuros Craques"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.8 }}
              style={{
                width: 'min(420px, 80vw)',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 60px rgba(22,163,74,0.25))',
                pointerEvents: 'none',
              }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.56)',
              }}
            >
              Clique em qualquer lugar para fechar · Esc
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* responsive rules */}
      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
