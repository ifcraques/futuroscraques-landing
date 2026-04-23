import { motion } from 'framer-motion'
import { HandWrittenTitle } from './ui/hand-writing-text'

// Fotos reais do Instituto Futuros Craques
const row1 = [
  { src: '/gallery/web/_DSC2840.jpg', alt: 'Escola de Basquete CT3x3 — IFC' },
  { src: '/gallery/web/_DSC2820.jpg', alt: 'Atletas IFC em ação' },
  { src: '/gallery/web/Time Drible Certo 3x3.jpg', alt: 'Time Drible Certo 3x3' },
  { src: '/gallery/web/_DSC3045.jpg', alt: 'Treinamento IFC' },
  { src: '/gallery/web/GALERA CT.jpg', alt: 'Galera do Centro de Treinamento' },
  { src: '/gallery/web/_DSC3418.jpg', alt: 'Competição IFC' },
  { src: '/gallery/web/IFC_CraquesdoFutebol.jpg', alt: 'IFC — Craques do Futebol' },
  { src: '/gallery/web/_DSC3059.jpg', alt: 'Jovens atletas IFC' },
  { src: '/gallery/web/IMG_3667.jpg', alt: 'Atletas de destaque IFC' },
  { src: '/gallery/web/IMG_7733.jpg', alt: 'Evento esportivo IFC' },
]

const row2 = [
  { src: '/gallery/web/Corrida Neo Running.jpg', alt: 'Corrida Neo Running — IFC' },
  { src: '/gallery/web/_DSC2947.jpg', alt: 'Basquete 3x3 IFC' },
  { src: '/gallery/web/GALERA CT (1).jpg', alt: 'Turma do CT — IFC' },
  { src: '/gallery/web/_DSC3057.jpg', alt: 'Atletas em quadra' },
  { src: '/gallery/web/240305_se_49erworlds_0569_3611.jpg', alt: 'IFC no campeonato mundial' },
  { src: '/gallery/web/_DSC3496.jpg', alt: 'Jogo oficial IFC' },
  { src: '/gallery/web/20240428_claudiocapucho_neo_running_10625_1144601_95879.jpg', alt: 'Neo Running IFC' },
  { src: '/gallery/web/IMG_9377.jpg', alt: 'Celebração IFC' },
  { src: '/gallery/web/183-IMG_3024.jpg', alt: 'Jovens IFC' },
  { src: '/gallery/web/_DSC2972.jpg', alt: 'Treino coletivo IFC' },
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
