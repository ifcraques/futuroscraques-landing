import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Modal elegante para visualização de PDFs embutidos (iframe).
 * - Overlay escuro com blur, animação framer-motion
 * - Fecha com Esc, clique no overlay ou botão fechar
 * - Botão secundário "Abrir em nova aba"
 * - Acessível: role="dialog", aria-modal, foco gerenciado e restaurado
 */
export default function PdfViewerModal({ open, url, title, onClose }) {
  const closeBtnRef = useRef(null)
  const dialogRef = useRef(null)
  const lastFocusedRef = useRef(null)

  // Esc fecha + trava scroll do body enquanto aberto
  useEffect(() => {
    if (!open) return
    lastFocusedRef.current = document.activeElement

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      // Focus trap simples (Tab cicla dentro do modal)
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, a[href], iframe, [tabindex]:not([tabindex="-1"])'
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Foco inicial no botão fechar
    const t = setTimeout(() => closeBtnRef.current?.focus(), 60)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      clearTimeout(t)
      // Restaura o foco no elemento que abriu o modal
      if (lastFocusedRef.current instanceof HTMLElement) {
        lastFocusedRef.current.focus()
      }
    }
  }, [open, onClose])

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose]
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="pdf-overlay"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(10, 14, 20, 0.78)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(0.75rem, 3vw, 2.5rem)',
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={title ? `Documento: ${title}` : 'Visualizador de documento'}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.45, ease: EASE }}
            style={{
              width: 'min(1100px, 100%)',
              height: 'min(86vh, 100%)',
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 32px 80px rgba(0, 0, 0, 0.45)',
            }}
          >
            {/* Cabeçalho */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.9rem 1.1rem 0.9rem 1.4rem',
                borderBottom: '1px solid #e5e7eb',
                background: '#fafafa',
                flexShrink: 0,
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(22, 163, 74, 0.1)',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>

              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#111827',
                  margin: 0,
                  flex: 1,
                  minWidth: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {title || 'Documento'}
              </h2>

              {/* Abrir em nova aba */}
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir documento em nova aba"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#16a34a',
                  background: 'rgba(22, 163, 74, 0.08)',
                  border: '1px solid rgba(22, 163, 74, 0.25)',
                  borderRadius: '9999px',
                  padding: '7px 14px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s, color 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#16a34a'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(22, 163, 74, 0.08)'
                  e.currentTarget.style.color = '#16a34a'
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span className="pdf-modal-newtab-label">Abrir em nova aba</span>
              </a>

              {/* Fechar */}
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Fechar visualizador"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #e5e7eb',
                  background: '#fff',
                  color: '#374151',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#111827'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = '#111827'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.color = '#374151'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Iframe do PDF */}
            <div style={{ flex: 1, minHeight: 0, background: '#525659' }}>
              <iframe
                src={url}
                title={title ? `PDF: ${title}` : 'Documento PDF'}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>

          <style>{`
            @media (max-width: 560px) {
              .pdf-modal-newtab-label { display: none; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
