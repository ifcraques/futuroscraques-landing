import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <motion.div
      className="cta-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Junte-se a Esta Transformação
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        Seja um parceiro, voluntário ou apoiador. Cada contribuição cria oportunidades reais para jovens talentos e comunidades inteiras. Sua doação impacta vidas.
      </motion.p>

      <motion.button
        className="cta-btn-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05, y: -8, boxShadow: '0 30px 80px rgba(255,255,255,0.4)' }}
        whileTap={{ scale: 0.96 }}
      >
        Quero Contribuir Agora 💚
      </motion.button>
    </motion.div>
  )
}
