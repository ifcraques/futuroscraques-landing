import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HandWrittenTitle } from './ui/hand-writing-text'

const EASE = [0.22, 1, 0.36, 1] // easing padrão do site

// Fotos reais do Instituto Futuros Craques
const row1 = [
  { src: '/gallery/_DSC2840.jpg', alt: 'Escola de Basquete CT3x3 — IFC' },
  { src: '/gallery/_DSC2820.jpg', alt: 'Atletas IFC em ação' },
  { src: '/gallery/Time Drible Certo 3x3.jpg', alt: 'Time Drible Certo 3x3' },
  { src: '/gallery/_DSC3045.jpg', alt: 'Treinamento IFC' },
  { src: '/gallery/GALERA CT.jpg', alt: 'Galera do Centro de Treinamento' },
  { src: '/gallery/_DSC3418.jpg', alt: 'Competição IFC' },
  { src: '/gallery/IFC_CraquesdoFutebol.jpg', alt: 'IFC — Craques do Futebol' },
  { src: '/gallery/_DSC3059.jpg', alt: 'Jovens atletas IFC' },
  { src: '/gallery/IMG_3667.jpg', alt: 'Atletas de destaque IFC' },
  { src: '/gallery/IMG_7733.jpg', alt: 'Evento esportivo IFC' },
]

const row2 = [
  { src: '/gallery/Corrida Neo Running.jpg', alt: 'Corrida Neo Running — IFC' },
  { src: '/gallery/_DSC2947.jpg', alt: 'Basquete 3x3 IFC' },
  { src: '/gallery/GALERA CT (1).jpg', alt: 'Turma do CT — IFC' },
  { src: '/gallery/_DSC3057.jpg', alt: 'Atletas em quadra' },
  { src: '/gallery/240305_se_49erworlds_0569_3611.jpg', alt: 'IFC no campeonato mundial' },
  { src: '/gallery/_DSC3496.jpg', alt: 'Jogo oficial IFC' },
  { src: '/gallery/20240428_claudiocapucho_neo_running_10625_1144601_95879.jpg', alt: 'Neo Running IFC' },
  { src: '/gallery/IMG_9377.jpg', alt: 'Celebração IFC' },
  { src: '/gallery/183-IMG_3024.jpg', alt: 'Jovens IFC' },
  { src: '/gallery/_DSC2972.jpg', alt: 'Treino coletivo IFC' },
]

// Lista única para navegação do lightbox (row1 seguido de row2)
const ALL_PHOTOS = [...row1, ...row2]

function MarqueeRow({ items, offset = 0, reverse = false, speed = 35, onPhotoClick }) {
  const [paused, setPaused] = useState(false)

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        display: 'flex',
        overflow: 'hidden',
        gap: '1.5rem',
        '--gap': '1.5rem',
        '--duration': `${speed}s`,
      }}
    >
      {/* Fileira duplicada para loop contínuo */}
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className="animate-marquee"
          aria-hidden={copy === 1}
          style={{
            display: 'flex',
            minWidth: '100%',
            flexShrink: 0,
            alignItems: 'center',
            gap: '1.5rem',
            animationDirection: reverse ? 'reverse' : 'normal',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {items.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onPhotoClick(offset + i)}
              aria-label={`Ampliar foto: ${img.alt}`}
              aria-haspopup="dialog"
              tabIndex={copy === 1 ? -1 : 0}
              style={{
                width: '320px',
                height: '200px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'relative',
                padding: 0,
                border: 'none',
                background: '#f3f4f6',
                cursor: 'zoom-in',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

function LightboxArrow({ direction, onClick }) {
  const isPrev = direction === 'prev'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? 'Foto anterior' : 'Próxima foto'}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [isPrev ? 'left' : 'right']: 'clamp(0.5rem, 2.5vw, 2rem)',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.25)',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
        zIndex: 2,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isPrev
          ? <path d="M15 18l-6-6 6-6" />
          : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  )
}

function Lightbox({ index, onClose, onNavigate }) {
  const photo = ALL_PHOTOS[index]

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length)
  }, [index, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % ALL_PHOTOS.length)
  }, [index, onNavigate])

  // Teclado: Esc fecha, setas navegam. Trava scroll do body.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, goPrev, goNext])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ampliada: ${photo.alt}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(8, 11, 16, 0.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Fechar */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar galeria"
        autoFocus
        style={{
          position: 'absolute',
          top: 'clamp(0.75rem, 3vw, 1.5rem)',
          right: 'clamp(0.75rem, 3vw, 1.5rem)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
          zIndex: 2,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <LightboxArrow direction="prev" onClick={goPrev} />
      <LightboxArrow direction="next" onClick={goNext} />

      {/* Imagem ampliada */}
      <div
        style={{
          maxWidth: 'min(1080px, 88vw)',
          maxHeight: '82vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{
              maxWidth: '100%',
              maxHeight: '72vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
              display: 'block',
            }}
          />
        </AnimatePresence>

        {/* Legenda + contador */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: 'rgba(255,255,255,0.85)',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 300 }}>{photo.alt}</span>
          <span
            aria-live="polite"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '9999px',
              padding: '3px 12px',
              whiteSpace: 'nowrap',
            }}
          >
            {index + 1} / {ALL_PHOTOS.length}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <section id="gallery-section" style={{ padding: '6rem 0', overflow: 'hidden' }}>

      {/* Cabeçalho */}
      <div style={{ marginBottom: '3rem' }}>
        <HandWrittenTitle
          eyebrow="Momentos que transformam"
          title="Fotos que contam"
          subtitle="histórias reais"
        />
      </div>

      {/* Fileira 1 — esquerda para direita */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '1.5rem' }}
      >
        <MarqueeRow
          items={row1}
          offset={0}
          reverse={false}
          speed={40}
          onPhotoClick={setLightboxIndex}
        />
      </motion.div>

      {/* Fileira 2 — direita para esquerda */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <MarqueeRow
          items={row2}
          offset={row1.length}
          reverse={true}
          speed={35}
          onPhotoClick={setLightboxIndex}
        />
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>

    </section>
  )
}
