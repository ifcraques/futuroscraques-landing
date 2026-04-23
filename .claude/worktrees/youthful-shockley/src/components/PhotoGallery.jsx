import { motion } from 'framer-motion'

// Fotos reais do Instituto Futuros Craques
const row1 = [
  { src: '/gallery/Escola de Basquete CT3x3.jpeg', alt: 'Escola de Basquete CT3x3 — IFC' },
  { src: '/gallery/_DSC2820.jpg', alt: 'Atletas IFC em ação' },
  { src: '/gallery/Time Drible Certo 3x3.jpg', alt: 'Time Drible Certo 3x3' },
  { src: '/gallery/_DSC3045.jpg', alt: 'Treinamento IFC' },
  { src: '/gallery/GALERA CT.jpg', alt: 'Galera do Centro de Treinamento' },
  { src: '/gallery/_DSC3418.jpg', alt: 'Competição IFC' },
  { src: '/gallery/IFC_CraquesdoFutebol.jpg', alt: 'IFC — Craques do Futebol' },
  { src: '/gallery/_DSC3569.jpg', alt: 'Jovens atletas IFC' },
  { src: '/gallery/nico-guga-011-cropped.jpeg', alt: 'Atletas de destaque IFC' },
  { src: '/gallery/_DSC3690.jpg', alt: 'Evento esportivo IFC' },
]

const row2 = [
  { src: '/gallery/Corrida Neo Running.jpg', alt: 'Corrida Neo Running — IFC' },
  { src: '/gallery/_DSC2947.jpg', alt: 'Basquete 3x3 IFC' },
  { src: '/gallery/GALERA CT (1).jpg', alt: 'Turma do CT — IFC' },
  { src: '/gallery/_DSC3057.jpg', alt: 'Atletas em quadra' },
  { src: '/gallery/240305_se_49erworlds_0569_3611.jpg', alt: 'IFC no campeonato mundial' },
  { src: '/gallery/_DSC3496.jpg', alt: 'Jogo oficial IFC' },
  { src: '/gallery/20240428_claudiocapucho_neo_running_10625_1144601_95879.jpg', alt: 'Neo Running IFC' },
  { src: '/gallery/_DSC3691.jpg', alt: 'Celebração IFC' },
  { src: '/gallery/183-IMG_3024.jpg', alt: 'Jovens IFC' },
  { src: '/gallery/_DSC2972.jpg', alt: 'Treino coletivo IFC' },
]

function MarqueeRow({ items, reverse = false, speed = 35 }) {
  return (
    <div
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
          }}
        >
          {items.map((img, i) => (
            <div
              key={i}
              style={{
                width: '320px',
                height: '200px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                position: 'relative',
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
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function PhotoGallery() {
  return (
    <section id="gallery-section" style={{ padding: '6rem 0', overflow: 'hidden' }}>

      {/* Cabeçalho */}
      <div style={{ padding: '0 clamp(1.5rem, 4vw, 4rem)', marginBottom: '3rem' }}>
        <motion.p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1a7a5e',
            marginBottom: '0.75rem',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Momentos que transformam
        </motion.p>

        <motion.h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 400,
            color: '#0d1f2d',
            lineHeight: 1.1,
            maxWidth: '540px',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Fotos que contam <em style={{ fontStyle: 'italic', color: '#4b5563' }}>histórias reais</em>
        </motion.h2>
      </div>

      {/* Fileira 1 — esquerda para direita */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '1.5rem' }}
      >
        <MarqueeRow items={row1} reverse={false} speed={40} />
      </motion.div>

      {/* Fileira 2 — direita para esquerda */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <MarqueeRow items={row2} reverse={true} speed={35} />
      </motion.div>

    </section>
  )
}
