import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * CardStack — componente de cards empilhados com auto-avanço.
 *
 * Props:
 *   items: Array<{ id, title, description, icon? }>
 *   showDots?: boolean
 *   autoAdvance?: boolean
 *   intervalMs?: number
 *   pauseOnHover?: boolean
 */
export function CardStack({
  items = [],
  showDots = true,
  autoAdvance = true,
  intervalMs = 3000,
  pauseOnHover = true,
}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const advance = () => setActive(prev => (prev + 1) % items.length)

  useEffect(() => {
    if (!autoAdvance || paused || items.length <= 1) return
    timerRef.current = setInterval(advance, intervalMs)
    return () => clearInterval(timerRef.current)
  }, [autoAdvance, paused, intervalMs, items.length])

  if (!items.length) return null

  return (
    <div
      style={{ maxWidth: '640px', margin: '0 auto', userSelect: 'none' }}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {/* Stack visual — cartas de baixo visíveis */}
      <div style={{ position: 'relative', height: '220px' }}>
        {/* Cartas "fantasma" atrás */}
        {items.map((item, i) => {
          const offset = (i - active + items.length) % items.length
          if (offset === 0 || offset > 3) return null
          return (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                inset: 0,
                background: '#fff',
                borderRadius: '20px',
                border: '1px solid rgba(0,0,0,0.07)',
                transform: `translateY(${offset * 10}px) scale(${1 - offset * 0.04})`,
                opacity: Math.max(0, 1 - offset * 0.3),
                zIndex: 10 - offset,
                transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            />
          )
        })}

        {/* Carta ativa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={items[active].id}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              background: '#fff',
              borderRadius: '20px',
              border: '1px solid rgba(0,162,232,0.18)',
              boxShadow: '0 12px 48px rgba(0,162,232,0.12), 0 2px 8px rgba(0,0,0,0.06)',
              zIndex: 20,
              padding: '2rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            {items[active].icon && (
              <div style={{
                width: '44px', height: '44px',
                background: 'rgba(0,162,232,0.1)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent, #00a2e8)',
                marginBottom: '0.25rem',
              }}>
                {items[active].icon}
              </div>
            )}
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#0d1f2d',
              margin: 0,
            }}>
              {items[active].title}
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#5a6a75',
              lineHeight: 1.65,
              margin: 0,
            }}>
              {items[active].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots + contador */}
      {showDots && items.length > 1 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1.5rem',
        }}>
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: active === i ? 'var(--accent, #00a2e8)' : 'rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
              aria-label={`Ir para card ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CardStack
