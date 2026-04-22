import { useEffect, useRef, useState } from 'react'
import SearchOverlay from './SearchOverlay'
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
  { label: 'FAQ',           href: '/faq' },
]

const PRE_LAYERS = [
  { color: '#0a0a0a' },
  { color: '#14532d' },
  { color: '#16a34a' },
]

export default function StaggeredMenu({ isOpen, onToggle }) {
  const [searchOpen, setSearchOpen] = useState(false)
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
            src="/ifc-logo.jpeg"
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

        {/* Rodapé do menu — vazio para espaçamento */}
        <div />
      </div>

      {/* Botão busca */}
      <button
        onClick={() => setSearchOpen(true)}
        aria-label="Buscar no site"
        title="Buscar (Ctrl+K)"
        style={{
          position: 'fixed',
          top: '24px',
          right: '130px',
          zIndex: 55,
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '8px',
          width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#fff',
          backdropFilter: 'blur(8px)',
          transition: 'background 0.2s, transform 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; e.currentTarget.style.transform = 'scale(1.06)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'scale(1)' }}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
      </button>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Botão toggle MENU / CLOSE */}
      <button
        className="sm-toggle"
        onClick={onToggle}
      >
        <div style={{ overflow: 'hidden', height: '1.4em', position: 'relative', minWidth: '3.4rem' }}>
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
