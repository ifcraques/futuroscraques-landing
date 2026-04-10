import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Recrutamento() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    profissao: '',
    experiencia: '',
    curriculo: null
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [showModal, setShowModal] = useState(false)
  const [fileName, setFileName] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Por favor, envie um arquivo PDF')
        return
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('O arquivo não pode ser maior que 10MB')
        return
      }
      setForm({ ...form, curriculo: file })
      setFileName(file.name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.nome || !form.email || !form.telefone || !form.profissao || !form.curriculo) {
      alert('Por favor, preencha todos os campos e anexe seu currículo')
      return
    }

    setStatus('loading')

    try {
      const formData = new FormData()
      formData.append('nome', form.nome)
      formData.append('email', form.email)
      formData.append('telefone', form.telefone)
      formData.append('profissao', form.profissao)
      formData.append('experiencia', form.experiencia)
      formData.append('curriculo', form.curriculo)
      formData.append('_subject', `[Recrutamento] Candidatura de ${form.nome}`)
      formData.append('_template', 'table')

      const res = await fetch('https://formsubmit.co/ajax/contato@futuroscraques.org', {
        method: 'POST',
        body: formData
      })

      const data = await res.json()

      if (data.success === 'true' || data.success === true) {
        setStatus('idle')
        setShowModal(true)
        setForm({ nome: '', email: '', telefone: '', profissao: '', experiencia: '', curriculo: null })
        setFileName('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const SuccessModal = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowModal(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 15, 40, 0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
          <button
            onClick={() => setShowModal(false)}
            style={{
              position: 'absolute',
              top: '1.2rem',
              right: '1.2rem',
              background: 'rgba(0,0,0,0.06)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              color: '#666',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.06)'}
          >
            ✕
          </button>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.15 }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 12px 40px rgba(34,197,94,0.35)',
            }}
          >
            <motion.svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.7rem',
              fontWeight: 800,
              color: 'var(--primary-dark)',
              marginBottom: '0.75rem',
            }}
          >
            Candidatura Recebida!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{
              color: '#555',
              lineHeight: 1.7,
              marginBottom: '2rem',
              fontSize: '1rem',
            }}
          >
            Obrigado por se candidatar! Analisaremos seu currículo e entraremos em contato em breve.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            onClick={() => setShowModal(false)}
            className="cta-btn"
            style={{ margin: '0 auto' }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Fechar
          </motion.button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <>
      {showModal && <SuccessModal />}
      <div className="page-wrapper">
        <section className="page-hero">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="page-pretitle">Faça Parte do Time</span>
            <h1>Venha Trabalhar Conosco</h1>
            <p>
              O Instituto Futuros Craques está sempre em busca de profissionais apaixonados
              por transformação social e desenvolvimento através do esporte.
            </p>
          </motion.div>
        </section>

        <section className="section">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, rgba(0,162,232,0.08), rgba(34,197,94,0.08))',
                border: '1px solid rgba(0,162,232,0.2)',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem',
              }}
            >
              <p style={{ color: '#555', lineHeight: 1.8, margin: 0 }}>
                Preencha o formulário abaixo com seus dados e anexe seu currículo em PDF.
                Nossa equipe de RH analisará sua candidatura e entrará em contato conforme
                surgirem oportunidades adequadas ao seu perfil.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="(11) 99999-9999"
                  value={form.telefone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Profissão / Cargo Desejado *
                </label>
                <input
                  type="text"
                  name="profissao"
                  placeholder="Ex: Gestor de Projetos, Professor, Coordenador..."
                  value={form.profissao}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Experiência Profissional
                </label>
                <textarea
                  name="experiencia"
                  placeholder="Descreva sua experiência profissional (opcional)"
                  value={form.experiencia}
                  onChange={handleChange}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                    resize: 'vertical',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = '#ddd'}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Currículo (PDF) *
                </label>
                <div
                  style={{
                    border: '2px dashed var(--accent)',
                    borderRadius: '8px',
                    padding: '2rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    background: fileName ? 'rgba(0,162,232,0.05)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.background = 'rgba(0,162,232,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.background = fileName ? 'rgba(0,162,232,0.05)' : 'transparent';
                  }}
                  onClick={() => document.getElementById('curriculo-input').click()}
                >
                  <input
                    id="curriculo-input"
                    type="file"
                    name="curriculo"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    style={{ display: 'none' }}
                  />
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
                  <p style={{ margin: '0.5rem 0', fontWeight: 600, color: '#333' }}>
                    {fileName || 'Clique para selecionar ou arraste seu PDF'}
                  </p>
                  <p style={{ margin: '0.5rem 0', fontSize: '0.85rem', color: '#999' }}>
                    Máximo 10MB
                  </p>
                </div>
              </div>

              {status === 'error' && (
                <p
                  style={{
                    color: '#ef4444',
                    fontSize: '0.88rem',
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.2)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    marginBottom: '1rem',
                  }}
                >
                  ⚠️ Erro ao enviar candidatura. Tente novamente ou envie para contato@futuroscraques.org
                </p>
              )}

              <motion.button
                type="submit"
                className="cta-btn"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: status === 'loading' ? 0.7 : 1,
                  marginTop: '1rem',
                }}
                whileHover={status !== 'loading' ? { y: -3 } : {}}
                whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ animation: 'spin 1s linear infinite' }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Candidatura'
                )}
              </motion.button>

              <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </motion.form>
          </div>
        </section>
      </div>
    </>
  )
}
