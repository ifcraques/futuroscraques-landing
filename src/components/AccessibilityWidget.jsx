import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'ifc-a11y'

const defaultSettings = {
  contrast: false,
  highlightLinks: false,
  biggerText: false,
  textSpacing: false,
  pauseAnimations: false,
  hideImages: false,
  dyslexia: false,
  bigCursor: false,
  lineHeight: false,
  textAlign: false,
  saturation: false,
}

const A11Y_CSS = `
  body.a11y-contrast *:not(.a11y-widget-root):not(.a11y-widget-root *) {
    background-color: #000 !important;
    color: #fff !important;
    border-color: #fff !important;
  }
  body.a11y-links a,
  body.a11y-links [role="link"] {
    text-decoration: underline !important;
    text-underline-offset: 3px !important;
    outline: 2px solid #2563eb !important;
    outline-offset: 2px !important;
  }
  body.a11y-bigtext { font-size: 120% !important; }
  body.a11y-spacing * {
    letter-spacing: 0.12em !important;
    word-spacing: 0.25em !important;
  }
  body.a11y-noanim *,
  body.a11y-noanim *::before,
  body.a11y-noanim *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
  body.a11y-noimages img:not(.a11y-widget-root img) {
    visibility: hidden !important;
  }
  body.a11y-dyslexia,
  body.a11y-dyslexia * {
    font-family: Arial, Helvetica, sans-serif !important;
    letter-spacing: 0.05em !important;
    word-spacing: 0.2em !important;
    line-height: 1.9 !important;
  }
  body.a11y-bigcursor,
  body.a11y-bigcursor * {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='black' stroke='white' stroke-width='2' d='M8 4 L8 28 L14 22 L20 32 L23 30 L17 20 L25 20 Z'/%3E%3C/svg%3E") 0 0, auto !important;
  }
  body.a11y-lineheight * { line-height: 2.2 !important; }
  body.a11y-textalign p,
  body.a11y-textalign h1,
  body.a11y-textalign h2,
  body.a11y-textalign h3,
  body.a11y-textalign h4,
  body.a11y-textalign span,
  body.a11y-textalign li { text-align: left !important; }
  body.a11y-saturation { filter: grayscale(1) !important; }
  body.a11y-contrast.a11y-saturation { filter: grayscale(1) contrast(2) !important; }

  .a11y-skip-link {
    position: fixed;
    top: -100px;
    left: 1rem;
    z-index: 9999;
    background: #2563eb;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: top 0.2s;
  }
  .a11y-skip-link:focus { top: 1rem; }

  a:focus-visible,
  button:focus-visible,
  [tabindex]:focus-visible {
    outline: 3px solid #2563eb !important;
    outline-offset: 3px !important;
  }
`

function applySettings(settings) {
  const map = {
    contrast: 'a11y-contrast',
    highlightLinks: 'a11y-links',
    biggerText: 'a11y-bigtext',
    textSpacing: 'a11y-spacing',
    pauseAnimations: 'a11y-noanim',
    hideImages: 'a11y-noimages',
    dyslexia: 'a11y-dyslexia',
    bigCursor: 'a11y-bigcursor',
    lineHeight: 'a11y-lineheight',
    textAlign: 'a11y-textalign',
    saturation: 'a11y-saturation',
  }
  Object.entries(map).forEach(([key, cls]) => {
    document.body.classList.toggle(cls, !!settings[key])
  })
}

const icons = {
  contrast: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20V2z" fill="currentColor" stroke="none"/></svg>,
  highlightLinks: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  biggerText: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>,
  textSpacing: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="8" y2="6"/><line x1="16" y1="6" x2="20" y2="6"/><polyline points="8 9 5 6 8 3"/><polyline points="16 9 19 6 16 3"/></svg>,
  pauseAnimations: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>,
  hideImages: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
  dyslexia: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5l8 7 8-7v14"/><line x1="4" y1="12" x2="12" y2="12"/></svg>,
  bigCursor: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l14 9-7 1-4 7-3-17z"/></svg>,
  lineHeight: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/><polyline points="3 8 3 4"/><polyline points="3 20 3 16"/></svg>,
  textAlign: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>,
  saturation: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="6"/></svg>,
  reset: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>,
}

const features = [
  { key: 'contrast',        label: 'Contraste +',      icon: icons.contrast },
  { key: 'highlightLinks',  label: 'Destacar Links',   icon: icons.highlightLinks },
  { key: 'biggerText',      label: 'Texto Maior',      icon: icons.biggerText },
  { key: 'textSpacing',     label: 'Espaçamento',      icon: icons.textSpacing },
  { key: 'pauseAnimations', label: 'Pausar Animações', icon: icons.pauseAnimations },
  { key: 'hideImages',      label: 'Ocultar Imagens',  icon: icons.hideImages },
  { key: 'dyslexia',        label: 'Dislexia',         icon: icons.dyslexia },
  { key: 'bigCursor',       label: 'Cursor Grande',    icon: icons.bigCursor },
  { key: 'lineHeight',      label: 'Altura da Linha',  icon: icons.lineHeight },
  { key: 'textAlign',       label: 'Alinhar Texto',    icon: icons.textAlign },
  { key: 'saturation',      label: 'Saturação',        icon: icons.saturation },
]

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings
    } catch {
      return defaultSettings
    }
  })

  useEffect(() => {
    if (!document.getElementById('a11y-global-styles')) {
      const style = document.createElement('style')
      style.id = 'a11y-global-styles'
      style.textContent = A11Y_CSS
      document.head.appendChild(style)
    }
  }, [])

  useEffect(() => {
    applySettings(settings)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') { e.preventDefault(); setOpen(v => !v) }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggle = useCallback((key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const reset = useCallback(() => setSettings(defaultSettings), [])

  const activeCount = Object.values(settings).filter(Boolean).length

  return (
    <div className="a11y-widget-root" style={{ position: 'fixed', bottom: '2rem', left: '1.5rem', zIndex: 9998 }}>
      <a href="#main-content" className="a11y-skip-link">Ir para o conteúdo principal</a>

      <button
        onClick={() => setOpen(v => !v)}
        aria-label={`Menu de acessibilidade${activeCount > 0 ? ` (${activeCount} ativo${activeCount > 1 ? 's' : ''})` : ''}. Atalho: Ctrl+U`}
        aria-expanded={open}
        aria-haspopup="dialog"
        title="Acessibilidade (Ctrl+U)"
        style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,99,235,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          position: 'relative', fontSize: '22px',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,99,235,0.6)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.45)' }}
      >
        ♿
        {activeCount > 0 && (
          <span style={{
            position: 'absolute', top: '-4px', right: '-4px',
            background: '#ef4444', color: '#fff', borderRadius: '50%',
            width: '18px', height: '18px', fontSize: '11px', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'sans-serif', border: '2px solid #fff',
          }}>
            {activeCount}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Menu de Acessibilidade"
          aria-modal="true"
          style={{
            position: 'absolute', bottom: '64px', left: 0, width: '340px',
            background: '#fff', borderRadius: '12px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
            overflow: 'hidden', fontFamily: "'Outfit', 'Arial', sans-serif",
            animation: 'a11ySlideUp 0.22s ease',
          }}
        >
          <style>{`
            @keyframes a11ySlideUp {
              from { opacity: 0; transform: translateY(12px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <div style={{
            background: '#2563eb', padding: '0.9rem 1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>
              Menu de Acessibilidade{' '}
              <span style={{ opacity: 0.7, fontSize: '0.75rem', fontWeight: 400 }}>(CTRL+U)</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              style={{
                background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%',
                width: '28px', height: '28px', color: '#fff', cursor: 'pointer',
                fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >✕</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e5e7eb', padding: '1px' }}>
            {features.map(({ key, label, icon }) => {
              const active = settings[key]
              return (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  aria-pressed={active}
                  style={{
                    background: active ? '#eff6ff' : '#fff', border: 'none',
                    padding: '1.1rem 0.6rem', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.55rem',
                    color: active ? '#2563eb' : '#374151',
                    transition: 'background 0.15s, color 0.15s', position: 'relative',
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.background = '#f9fafb' } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.background = '#fff' } }}
                >
                  {active && (
                    <span style={{
                      position: 'absolute', top: '6px', right: '6px',
                      width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb',
                    }} />
                  )}
                  <span style={{ opacity: active ? 1 : 0.65, lineHeight: 0 }}>{icon}</span>
                  <span style={{ fontSize: '0.73rem', fontWeight: active ? 600 : 400, textAlign: 'center', lineHeight: 1.3 }}>
                    {label}
                  </span>
                </button>
              )
            })}
          </div>

          <div style={{ padding: '0.75rem 1rem' }}>
            <button
              onClick={reset}
              style={{
                width: '100%', background: '#2563eb', color: '#fff', border: 'none',
                borderRadius: '8px', padding: '0.75rem',
                fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', fontWeight: 600,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.5rem', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
              onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
            >
              {icons.reset}
              Redefinir Configurações de Acessibilidade
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
