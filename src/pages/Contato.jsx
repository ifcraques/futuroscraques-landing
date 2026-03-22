import { motion } from 'framer-motion'

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'contato@futuroscraques.org', href: 'mailto:contato@futuroscraques.org' },
  { icon: '📱', label: 'Telefone', value: '(11) 2532-5697', href: 'tel:+551125325697' },
  { icon: '📍', label: 'Localização', value: 'São Paulo, SP', href: '#' },
]

export default function Contato() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-pretitle">Fale Conosco</span>
          <h1>Contato</h1>
          <p>
            Entre em contato com o Instituto Futuros Craques. Estamos sempre abertos
            para parcerias, colaborações e novas oportunidades de transformação social.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <div className="contact-layout">
          <motion.div
            className="contact-info-cards"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                className="contact-info-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
              >
                <span className="contact-icon">{c.icon}</span>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-value">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="contact-social">
              <h3>Redes Sociais</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/futuroscraquesoficial" target="_blank" rel="noreferrer">📘 Facebook</a>
                <a href="https://www.instagram.com/institutofuturoscraques/" target="_blank" rel="noreferrer">📷 Instagram</a>
                <a href="https://www.youtube.com/@institutofuturoscraques" target="_blank" rel="noreferrer">🎬 YouTube</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h2>Envie sua Mensagem</h2>
            <div className="form-group">
              <input type="text" placeholder="Seu Nome" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Seu Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Assunto" />
            </div>
            <div className="form-group">
              <textarea placeholder="Sua Mensagem" rows="6" required />
            </div>
            <motion.button
              type="submit"
              className="cta-btn"
              style={{ width: '100%', justifyContent: 'center' }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}
