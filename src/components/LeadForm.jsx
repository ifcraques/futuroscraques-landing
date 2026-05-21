import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LeadForm() {
  useEffect(() => {
    if (document.querySelector('script[src*="vismeforms-embed"]')) return
    const script = document.createElement('script')
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#f0fdf4',
        borderTop: '1px solid #bbf7d0',
        borderBottom: '1px solid #bbf7d0',
        padding: '4rem clamp(1.5rem, 6vw, 6rem)',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.9rem', letterSpacing: '0.22em',
            color: '#16a34a', textTransform: 'uppercase',
            marginBottom: '0.8rem',
          }}>
            Fique por dentro
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2rem, 3.6vw, 3rem)',
            fontWeight: 400, color: '#111827',
            lineHeight: 1.1, marginBottom: '0.8rem',
          }}>
            Cadastre-se e{' '}
            <em style={{ fontStyle: 'italic', color: '#4b5563' }}>receba novidades</em>
          </h2>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1rem', color: '#6b7280',
            lineHeight: 1.7, fontWeight: 300,
          }}>
            Projetos, eventos, oportunidades de apoio e muito mais — direto no seu e-mail.
          </p>
        </div>

        {/* Formulário Visme inline */}
        <div
          className="visme_d"
          data-title="Website Subscription Form"
          data-url="wpe7k77o-untitled-project"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="176852"
        />
      </div>
    </motion.section>
  )
}
