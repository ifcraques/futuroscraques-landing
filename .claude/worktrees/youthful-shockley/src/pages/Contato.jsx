import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'contato@futuroscraques.org', href: 'mailto:contato@futuroscraques.org' },
  { icon: '📱', label: 'Telefone', value: '(11) 2532-5697', href: 'tel:+551125325697' },
  { icon: '📍', label: 'Endereço', value: 'Av. Tiradentes, 960 – 4º andar – Luz – São Paulo/SP – CEP 01102-000', href: 'https://www.google.com/maps/search/Avenida+Tiradentes+960+Luz+São+Paulo+SP' },
]

function SuccessModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0, 15, 40, 0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            maxWidth: '460px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 40px 100px rgba(0,0,0,0.25)',
            position: 'relative',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1.2rem', right: '1.2rem',
              background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '50%',
              width: '32px', height: '32px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', color: '#666', transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.06)'}
          >
            ✕
          </button>

          {/* Animated check icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.15 }}
            style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 12px 40px rgba(34,197,94,0.35)',
            }}
          >
            <motion.svg
              width="36" height="36" viewBox="0 0 24 24"
              fill="none" stroke="white" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '1.7rem',
              fontWeight: 800, color: 'var(--primary-dark)',
              marginBottom: '0.75rem',
            }}
          >
            Mensagem Enviada!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{ color: '#555', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}
          >
            Recebemos seu contato com sucesso. Nossa equipe responderá em breve para o seu email.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            onClick={onClose}
            className="cta-btn"
            style={{ margin: '0 auto' }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Fechar
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Contato() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formsubmit.co/ajax/contato@futuroscraques.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          assunto: form.assunto,
          mensagem: form.mensagem,
          _subject: `[Site IFC] ${form.assunto || 'Nova mensagem'} — ${form.nome}`,
          _template: 'table',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('idle')
        setShowModal(true)
        setForm({ nome: '', email: '', assunto: '', mensagem: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
    {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
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
            onSubmit={handleSubmit}
          >
            <h2>Envie sua Mensagem</h2>

            <div className="form-group">
              <input
                type="text" name="nome" placeholder="Seu Nome"
                value={form.nome} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                type="email" name="email" placeholder="Seu Email"
                value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <input
                type="text" name="assunto" placeholder="Assunto"
                value={form.assunto} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="mensagem" placeholder="Sua Mensagem" rows="6"
                value={form.mensagem} onChange={handleChange} required
              />
            </div>

            {status === 'error' && (
              <p style={{
                color: '#ef4444', fontSize: '0.88rem',
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: '8px', padding: '0.75rem 1rem',
                marginBottom: '1rem',
              }}>
                ⚠️ Erro ao enviar. Tente novamente ou escreva para contato@futuroscraques.org
              </p>
            )}

            <motion.button
              type="submit"
              className="cta-btn"
              style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
              whileHover={status !== 'loading' ? { y: -3 } : {}}
              whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                  Enviando...
                </span>
              ) : 'Enviar Mensagem'}
            </motion.button>

            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </motion.form>
        </div>
      </section>
    </div>
    </>
  )
}
