import { motion } from 'framer-motion'

const cards = [
  {
    icon: '📚',
    title: '76% Retenção Escolar',
    desc: 'Nossos participantes têm maior permanência na escola, melhor desempenho acadêmico e taxa de absenteísmo reduzida significativamente.',
  },
  {
    icon: '🎓',
    title: 'Trajetória Profissional',
    desc: 'Conexões diretas com 50+ empresas parceiras para trilhas de carreira, estágios e oportunidades reais de desenvolvimento profissional.',
  },
  {
    icon: '🌱',
    title: 'Liderança & Propósito',
    desc: 'Desenvolvemos não só atletas, mas líderes preparados para transformar suas comunidades com propósito, ética e responsabilidade social.',
  },
  {
    icon: '❤️',
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
                y: -15,
                background: 'rgba(255,255,255,0.2)',
                borderColor: 'rgba(22,163,74,0.5)',
                boxShadow: '0 30px 80px rgba(22,163,74,0.2)',
              }}
            >
              <motion.span
                className="impact-icon"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              >
                {card.icon}
              </motion.span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
