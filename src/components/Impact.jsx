import { motion } from 'framer-motion'
import { CardStack } from './ui/card-stack'

const impactoItems = [
  {
    id: 1,
    title: '76% Retenção Escolar',
    description: 'Nossos participantes têm maior permanência na escola, melhor desempenho acadêmico e taxa de absenteísmo reduzida significativamente.',
  },
  {
    id: 2,
    title: 'Trajetória Profissional',
    description: 'Conexões diretas com 50+ empresas parceiras para trilhas de carreira, estágios e oportunidades reais de desenvolvimento profissional.',
  },
  {
    id: 3,
    title: 'Liderança & Propósito',
    description: 'Desenvolvemos não só atletas, mas líderes preparados para transformar suas comunidades com propósito, ética e responsabilidade social.',
  },
  {
    id: 4,
    title: 'Bem-Estar Holístico',
    description: 'Saúde física, saúde mental e desenvolvimento socioemocional integrados em cada programa. Acompanhamento psicológico e nutricional.',
  },
]

export default function Impact() {
  return (
    <section id="impact-section" style={{ padding: '6rem 0' }}>
      <div className="section">
        <motion.p
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1a7a5e',
            marginBottom: '0.75rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Nosso Impacto Mensurável
        </motion.p>

        <motion.h2
          className="section-title"
          style={{ color: '#0d1f2d', textAlign: 'left', marginBottom: '0.5rem' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Resultados reais,<br />vidas transformadas
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ color: '#5a6a75', textAlign: 'left', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Cada projeto é medido, avaliado e otimizado para máximo impacto social. Transparência total em nossos resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <CardStack
            items={impactoItems}
            showDots
            autoAdvance
            intervalMs={3000}
            pauseOnHover
          />
        </motion.div>
      </div>
    </section>
  )
}
