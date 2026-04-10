import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const videos = [
  {
    id: 'x6h-pm5QO9w',
    title: 'Circuito Neo Running — Cerét 2024',
    tag: 'Circuitos IFC',
  },
  {
    id: 'Vtf8VXgFtmk',
    title: 'Verão Para Todos — Virada Esportiva 2024',
    tag: 'Verão Para Todos',
  },
  {
    id: '5DPPrt07x4s',
    title: 'Drible Certo 3x3 — Mida Day',
    tag: 'Drible Certo 3x3',
  },
  {
    id: '9HewFUYXEwU',
    title: 'Circuito Neo Running — Belo Horizonte',
    tag: 'Circuitos IFC',
  },
  {
    id: 'Mk35qEwGHQI',
    title: 'Neo Running — Tapiraí 2022',
    tag: 'Circuitos IFC',
  },
]

const tagColors = {
  'Circuitos IFC': 'var(--accent)',
  'Verão Para Todos': '#f59e0b',
  'Drible Certo 3x3': '#22c55e',
}

export default function VideoSection() {
  // Inicializa diretamente com índice aleatório — muda a cada visita/reload
  const [active, setActive] = useState(() => Math.floor(Math.random() * videos.length))

  const current = videos[active]

  return (
    <section id="video-section" style={{ background: 'var(--primary-dark)', padding: '6rem 0' }}>
      <div className="section" style={{ padding: '0 2rem' }}>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: '#ffffff' }}
        >
          Nosso Trabalho em Ação
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem' }}
        >
          Acompanhe a energia e a transformação que levamos para as quadras e pistas do Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}
        >
          {/* Main player */}
          <div style={{ flex: '1 1 600px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: '#000',
                }}
              >
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  src={`https://www.youtube.com/embed/${current.id}?rel=0&modestbranding=1`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </AnimatePresence>

            {/* Current video info */}
            <motion.div
              key={current.id + '-info'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <span style={{
                background: tagColors[current.tag] || 'var(--accent)',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '3px 10px',
                borderRadius: '50px',
              }}>
                {current.tag}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', fontWeight: 500 }}>
                {current.title}
              </span>
            </motion.div>
          </div>

          {/* Thumbnail list */}
          <div style={{ flex: '0 0 260px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {videos.map((v, i) => (
              <motion.button
                key={v.id}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  gap: '0.9rem',
                  alignItems: 'center',
                  background: active === i ? 'rgba(0,162,232,0.15)' : 'rgba(255,255,255,0.04)',
                  border: active === i ? '1px solid rgba(0,162,232,0.5)' : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  width: '80px', height: '54px', borderRadius: '8px',
                  overflow: 'hidden', flexShrink: 0, position: 'relative', background: '#000',
                }}>
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {active === i && (
                    <div style={{
                      position: 'absolute', inset: 0, background: 'rgba(0,162,232,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                </div>

                <div style={{ minWidth: 0 }}>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.5px', color: tagColors[v.tag] || 'var(--accent)',
                    display: 'block', marginBottom: '3px',
                  }}>
                    {v.tag}
                  </span>
                  <span style={{
                    fontSize: '0.8rem', color: active === i ? '#fff' : 'rgba(255,255,255,0.65)',
                    fontWeight: active === i ? 600 : 400,
                    display: '-webkit-box', WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    lineHeight: 1.4,
                  }}>
                    {v.title}
                  </span>
                </div>
              </motion.button>
            ))}

            <motion.a
              href="https://www.youtube.com/@institutofuturoscraques/videos"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                marginTop: '0.5rem', padding: '0.75rem',
                color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', fontWeight: 600,
                textDecoration: 'none', borderRadius: '10px',
                border: '1px dashed rgba(255,255,255,0.12)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Ver todos os vídeos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
