import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import './StaggeredMenu.css'

const MENU_ITEMS = [
  { label: 'Início',        href: '/' },
  { label: 'Projetos',      href: '/projetos' },
  { label: 'Notícias',      href: '/noticias' },
  { label: 'Quem Somos',    href: '/quemsomos' },
  { label: 'Como Apoiar',   href: '/comoapoiar' },
  { label: 'Transparência', href: '/transparencia' },
  { label: 'Contato',       href: '/contato' },
]

const SOCIAL_ITEMS = [
  { label: 'Instagram', url: 'https://instagram.com/futuroscraques' },
  { label: 'Facebook',  url: 'https://facebook.com/futuroscraques' },
  { label: 'YouTube',   url: 'https://youtube.com/@futuroscraques' },
]

const PRE_LAYERS = [
  { color: '#0a0a0a' },
  { color: '#14532d' },
  { color: '#16a34a' },
]

export default function StaggeredMenu({ isOpen, onToggle }) {
  const navigate  = useNavigate()
  const location  = useLocation()
  const itemSpansRef  = useRef([])
  const menuLabelRef  = useRef(null)
  const closeLabelRef = useRef(null)
  const iconRef       = useRef(null)
  const itemsTl       = useRef(null)

  const [panelWidth, setPanelWidth] = useState(() =>
    window.innerWidth <= 1024 ? '100vw' : 'clamp(280px, 38vw, 440px)'
  )

  // Fecha menu ao mudar de rota
  useEffect(() => { if (isOpen) onToggle() }, [location.pathname])

  // Responsive
  useEffect(() => {
    const onResize = () =>
      setPanelWidth(window.innerWidth <= 1024 ? '100vw' : 'clamp(280px, 38vw, 440px)')
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Estado inicial do CLOSE
  useEffect(() => {
    if (closeLabelRef.current) gsap.set(closeLabelRef.current, { y: '100%' })
  }, [])

  // Animações GSAP
  useEffect(() => {
    if (!menuLabelRef.current || !closeLabelRef.current || !iconRef.current) return

    if (isOpen) {
      gsap.to(menuLabelRef.current,  { y: '-100%', duration: 0.32, ease: 'power3.in' })
      gsap.to(closeLabelRef.current, { y: '0%',    duration: 0.38, ease: 'power3.out', delay: 0.08 })
      gsap.to(iconRef.current, { rotation: 225, duration: 0.5, ease: 'power3.inOut' })

      if (itemsTl.current) itemsTl.current.kill()
      const spans = itemSpansRef.current.filter(Boolean)
      gsap.set(spans, { yPercent: 140, rotation: 10 })
      itemsTl.current = gsap.timeline({ delay: 0.25 })
      itemsTl.current.to(spans, {
        yPercent: 0,
        rotation: 0,
        duration: 1,
        stagger: 0.07,
        ease: 'power4.out',
      })
    } else {
      gsap.to(menuLabelRef.current,  { y: '0%',    duration: 0.38, ease: 'power3.out', delay: 0.06 })
      gsap.to(closeLabelRef.current, { y: '100%',  duration: 0.32, ease: 'power3.in' })
      gsap.to(iconRef.current, { rotation: 0, duration: 0.5, ease: 'power3.inOut' })

      if (itemsTl.current) itemsTl.current.kill()
      gsap.to(itemSpansRef.current.filter(Boolean), {
        yPercent: 140,
        duration: 0.3,
        stagger: 0.03,
        ease: 'power2.out',
      })
    }
  }, [isOpen])

  const panelTransform  = isOpen ? 'translateX(0)' : 'translateX(100%)'
  const toggleTransform = isOpen ? `translateX(calc(-1 * ${panelWidth}))` : 'translateX(0)'
  const panelTransition = 'transform 0.72s cubic-bezier(0.16, 1, 0.3, 1)'

  return (
    <>
      {/* Overlay click outside */}
      {isOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 38 }}
          onClick={onToggle}
        />
      )}

      {/* Pre-layers coloridos */}
      {PRE_LAYERS.map(({ color }, i) => (
        <div
          key={i}
          className="sm-layer"
          style={{
            background: color,
            zIndex: 39 + i,
            transform: panelTransform,
            transition: `${panelTransition} ${isOpen ? i * 0.05 : (PRE_LAYERS.length - 1 - i) * 0.05}s`,
          }}
        />
      ))}

      {/* Painel branco */}
      <div
        className="sm-panel"
        style={{
          transform: panelTransform,
          transition: `${panelTransition} ${isOpen ? '0.14s' : '0s'}`,
        }}
      >
        {/* Logo do IFC */}
        <div style={{ position: 'absolute', top: '1.8rem', left: '2.5rem' }}>
          <img
            src="https://static.wixstatic.com/media/3db4e0_27f9403394064b069d5a94a0cec86f23~mv2.png"
            alt="IFC"
            style={{ height: '40px', objectFit: 'contain' }}
          />
        </div>

        {/* Links de navegação */}
        <nav>
          <ul className="sm-list">
            {MENU_ITEMS.map((item, i) => (
              <li key={item.href}>
                <button
                  className="sm-item-wrap"
                  onClick={() => navigate(item.href)}
                >
                  <span
                    ref={el => { itemSpansRef.current[i] = el }}
                    className="sm-item-text"
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes sociais */}
        <div>
          <p className="sm-socials-label">Redes Sociais</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {SOCIAL_ITEMS.map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sm-social-link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Botão toggle MENU / CLOSE */}
      <button
        className="sm-toggle"
        onClick={onToggle}
      >
        <div style={{ overflow: 'hidden', height: '1.1em', position: 'relative', minWidth: '3.4rem' }}>
          <span ref={menuLabelRef} style={{ display: 'block', position: 'absolute', inset: 0 }}>
            MENU
          </span>
          <span ref={closeLabelRef} style={{ display: 'block', position: 'absolute', inset: 0 }}>
            CLOSE
          </span>
        </div>
        <span
          ref={iconRef}
          style={{ fontSize: '1.2rem', lineHeight: 1, fontWeight: 300, display: 'inline-block' }}
        >
          +
        </span>
      </button>
    </>
  )
}
