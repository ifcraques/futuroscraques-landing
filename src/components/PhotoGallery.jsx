import { motion } from 'framer-motion'

// Duas fileiras com fotos temáticas: esporte, jovens, comunidade, basquete, corrida, impacto social
const row1 = [
  {
    src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop',
    alt: 'Jovens jogando basquete',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    alt: 'Grupo de jovens unidos',
  },
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    alt: 'Atleta em corrida',
  },
  {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    alt: 'Basquete em quadra',
  },
  {
    src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&h=400&fit=crop',
    alt: 'Jovem atleta',
  },
  {
    src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&h=400&fit=crop',
    alt: 'Crianças em atividade esportiva',
  },
  {
    src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=400&fit=crop',
    alt: 'Treinamento esportivo',
  },
  {
    src: 'https://images.unsplash.com/photo-1543357480-c60d40d6b772?w=600&h=400&fit=crop',
    alt: 'Celebração em equipe',
  },
]

const row2 = [
  {
    src: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600&h=400&fit=crop',
    alt: 'Corrida de rua',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    alt: 'Corrida e atletismo',
  },
  {
    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
    alt: 'Ciclismo e esporte',
  },
  {
    src: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=600&h=400&fit=crop',
    alt: 'Jovens em comunidade',
  },
  {
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
    alt: 'Evento esportivo com público',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    alt: 'Educação e esporte',
  },
  {
    src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&h=400&fit=crop',
    alt: 'Skate e esporte urbano',
  },
  {
    src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&h=400&fit=crop',
    alt: 'Jovens em ação',
  },
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
