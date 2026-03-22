import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Quem Somos', href: '/quemsomos', type: 'page' },
  { label: 'Projetos', href: '/projetos', type: 'page' },
  { label: 'Impacto', href: '#impact-section', type: 'scroll' },
  { label: 'Transparência', href: '/transparencia', type: 'page' },
  { label: 'Parceiros', href: '#sponsors-section', type: 'scroll' },
  { label: 'Contato', href: '/contato', type: 'page' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (item) => {
    if (item.type === 'page') {
      navigate(item.href)
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(item.href)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      } else {
        const el = document.querySelector(item.href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <motion.header
      className="header"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.7)',
        boxShadow: scrolled ? '0 20px 60px rgba(0,0,0,0.12)' : 'none',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            className="logo"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src="https://static.wixstatic.com/media/3db4e0_27f9403394064b069d5a94a0cec86f23~mv2.png" alt="Instituto Futuros Craques Logo" style={{ height: '48px', objectFit: 'contain', marginRight: '12px' }} />
            Instituto Futuros Craques
          </motion.div>
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              className="nav-link"
              onClick={() => handleNav(item)}
              whileHover={{ y: -2, color: 'var(--primary)' }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.button>
          ))}

          <Link to="/comoapoiar" style={{ textDecoration: 'none' }}>
            <motion.button
              className="cta-btn"
              whileHover={{ y: -5, boxShadow: '0 25px 60px rgba(22,163,74,0.4)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              Contribua
            </motion.button>
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
