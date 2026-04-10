import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: '"O Drible Certo 3x3 me abriu portas que nunca pensei existir. Não era só basquete, era disciplina, amizade, liderança e hoje sou atleta profissional."',
    author: '— João Silva, 19 anos · Atleta Profissional',
  },
  {
    quote: '"Minha filha está mais confiante, feliz, melhorou drasticamente na escola e agora sonha em grande. Estamos eternamente gratos ao Instituto!"',
    author: '— Maria Santos · Mãe da Participante',
  },
  {
    quote: '"Como empresa Fortune 500, apoiamos porque vemos resultados concretos, mensuráveis e transformadores. Impacto real que faz diferença."',
    author: '— CEO de Empresa Parceira · São Paulo',
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials-section">
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Histórias que Inspiram
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Vidas transformadas através do esporte, educação e oportunidade genuína de mudança social
        </motion.p>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, boxShadow: '0 30px 80px rgba(22,163,74,0.15)' }}
            >
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">{t.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
