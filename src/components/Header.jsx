import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Projetos', href: '#projects-section' },
  { label: 'Impacto', href: '#impact-section' },
  { label: 'Histórias', href: '#testimonials-section' },
  { label: 'Parceiros', href: '#sponsors-section' },
  { label: 'Sobre', href: '#' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    if (href === '#') return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
        <motion.div
          className="logo"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src="https://static.wixstatic.com/media/3db4e0_27f9403394064b069d5a94a0cec86f23~mv2.png" alt="Instituto Futuros Craques Logo" style={{ height: '48px', objectFit: 'contain', marginRight: '12px' }} />
          Instituto Futuros Craques
        </motion.div>

        <nav className="nav">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              className="nav-link"
              onClick={() => scrollTo(item.href)}
              whileHover={{ y: -2, color: 'var(--primary)' }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.button
            className="cta-btn"
            whileHover={{ y: -5, boxShadow: '0 25px 60px rgba(22,163,74,0.4)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            Contribua 💚
          </motion.button>
        </nav>
      </div>
    </motion.header>
  )
}
