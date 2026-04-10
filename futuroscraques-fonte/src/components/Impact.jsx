import { motion } from 'framer-motion'

const IconBook = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <line x1="8" y1="7" x2="16" y2="7"/>
    <line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
)

const IconBriefcase = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12"/>
    <path d="M2 12h20"/>
  </svg>
)

const IconStar = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const IconHeart = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const cards = [
  {
    Icon: IconBook,
    color: '#00a2e8',
    bg: 'rgba(0,162,232,0.12)',
    title: '76% Retenção Escolar',
    desc: 'Nossos participantes têm maior permanência na escola, melhor desempenho acadêmico e taxa de absenteísmo reduzida significativamente.',
  },
  {
    Icon: IconBriefcase,
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.12)',
    title: 'Trajetória Profissional',
    desc: 'Conexões diretas com 50+ empresas parceiras para trilhas de carreira, estágios e oportunidades reais de desenvolvimento profissional.',
  },
  {
    Icon: IconStar,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    title: 'Liderança & Propósito',
    desc: 'Desenvolvemos não só atletas, mas líderes preparados para transformar suas comunidades com propósito, ética e responsabilidade social.',
  },
  {
    Icon: IconHeart,
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    title: 'Bem-Estar Holístico',
    desc: 'Saúde física, saúde mental e desenvolvimento socioemocional integrados em cada programa. Acompanhamento psicológico e nutricional.',
  },
]

export default function Impact() {
  return (
    <div id="impact-section">
      <div className="section">
        <div className="impact-blob" />

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Nosso Impacto Mensurável
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Cada projeto é medido, avaliado e otimizado para máximo impacto social. Transparência total em nossos resultados.
        </motion.p>

        <div className="impact-grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="impact-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -12,
                borderColor: card.color,
                boxShadow: `0 30px 80px ${card.bg.replace('0.12', '0.25')}`,
              }}
            >
              <motion.div
                className="impact-icon-wrap"
                style={{ background: card.bg, color: card.color }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              >
                <card.Icon />
              </motion.div>
              <h3 style={{ color: card.color }}>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
