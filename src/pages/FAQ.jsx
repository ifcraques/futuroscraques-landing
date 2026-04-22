import { motion } from 'framer-motion'
import FAQ from '../components/FAQ'

export default function FAQPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-pretitle">Tire suas dúvidas</span>
          <h1>Perguntas Frequentes</h1>
          <p>
            Respondemos as dúvidas mais comuns sobre participação,
            inscrições, doações e voluntariado.
          </p>
        </motion.div>
      </section>

      <FAQ />
    </div>
  )
}
