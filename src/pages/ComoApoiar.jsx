import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handle = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handle}
      style={{
        marginTop: '0.5rem',
        padding: '6px 18px',
        fontSize: '0.75rem',
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        border: '1px solid rgba(0,162,232,0.4)',
        borderRadius: '50px',
        background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(0,162,232,0.07)',
        color: copied ? '#16a34a' : '#00a2e8',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
    >
      {copied ? '✓ Copiado!' : 'Copiar'}
    </button>
  )
}

export default function ComoApoiar() {
  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>

      {/* ── Hero ── */}
      <div style={{ padding: '4rem clamp(1.5rem, 6vw, 6rem) 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.75rem', letterSpacing: '0.22em',
            color: '#16a34a', textTransform: 'uppercase', marginBottom: '1.2rem',
          }}>
            Faça Parte
          </p>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 400, color: '#111827',
            lineHeight: 1, marginBottom: '1.5rem',
          }}>
            Como{' '}
            <em style={{ fontStyle: 'italic', color: '#4b5563' }}>apoiar</em>
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            color: '#4b5563', maxWidth: '600px',
            lineHeight: 1.8, fontWeight: 300,
          }}>
            Você pode contribuir para as ações do Instituto Futuros Craques através de
            contribuições financeiras, patrocínio via Lei de Incentivo ao Esporte ou
            doação de materiais. Além disso, compartilhar nosso trabalho nas redes sociais
            também faz enorme diferença.
          </p>
        </motion.div>
      </div>

      <div style={{ margin: '4rem clamp(1.5rem, 6vw, 6rem) 0', height: '1px', background: '#e5e7eb' }} />

      {/* ── Doação Direta ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', letterSpacing: '0.22em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          Doação Direta
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>

          {/* PIX */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              background: '#fff', borderRadius: '20px', padding: '2rem',
              border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              borderLeft: '3px solid #00a2e8',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0,162,232,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                💳
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#111827', margin: 0 }}>PIX</h3>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem', lineHeight: 1.6 }}>
              Chave PIX (e-mail):
            </p>
            <div style={{
              background: '#f8f9fa', borderRadius: '10px', padding: '0.9rem 1rem',
              fontFamily: 'monospace', fontSize: '1rem', fontWeight: 700,
              color: '#111827', letterSpacing: '0.02em', textAlign: 'center',
              border: '1px dashed #d1d5db',
            }}>
              contato@futuroscraques.org
            </div>
            <div style={{ textAlign: 'center' }}>
              <CopyButton text="contato@futuroscraques.org" />
            </div>
          </motion.div>

          {/* Banco do Brasil */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              background: '#fff', borderRadius: '20px', padding: '2rem',
              border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              borderLeft: '3px solid #f59e0b',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                🏦
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#111827', margin: 0 }}>Banco do Brasil</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Agência', value: '7016-5' },
                { label: 'Conta Corrente', value: '7473-X' },
                { label: 'Titular', value: 'Instituto Futuros Craques' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid #f3f4f6' }}>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', color: '#6b7280' }}>{item.label}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.95rem', fontWeight: 700, color: '#111827' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div style={{ margin: '5rem clamp(1.5rem, 6vw, 6rem) 0', height: '1px', background: '#e5e7eb' }} />

      {/* ── Renúncia Fiscal ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', letterSpacing: '0.22em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          Pessoa Física e Jurídica — Renúncia Fiscal
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>

          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              background: '#fff', borderRadius: '20px', padding: '2rem',
              border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              borderLeft: '3px solid #16a34a',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(22,163,74,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                👤
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#111827', margin: 0 }}>Pessoa Física</h3>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.78rem', color: '#16a34a', fontWeight: 600 }}>Até 6% do IR</span>
              </div>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.93rem', color: '#374151', lineHeight: 1.75, fontWeight: 300 }}>
              É possível contribuir com até <strong style={{ fontWeight: 700, color: '#16a34a' }}>6% do seu Imposto de Renda</strong> a pagar nos projetos do IFC aprovados pela Comissão da Lei de Incentivo ao Esporte. É fácil: basta depositar na conta do projeto e guardar seu comprovante bancário — ele valerá como declaração no ano seguinte.
            </p>
          </motion.div>

          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              background: '#fff', borderRadius: '20px', padding: '2rem',
              border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              borderLeft: '3px solid #2563eb',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                🏢
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#111827', margin: 0 }}>Pessoa Jurídica</h3>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.78rem', color: '#2563eb', fontWeight: 600 }}>Até 1% do IR</span>
              </div>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.93rem', color: '#374151', lineHeight: 1.75, fontWeight: 300 }}>
              Empresas podem contribuir com até <strong style={{ fontWeight: 700, color: '#2563eb' }}>1% do Imposto de Renda</strong> a pagar nos projetos do IFC aprovados pela Comissão da Lei de Incentivo ao Esporte. Basta depositar na conta do projeto e guardar o comprovante — ele valerá como declaração no ano seguinte.
            </p>
          </motion.div>

        </div>
      </div>

      <div style={{ margin: '5rem clamp(1.5rem, 6vw, 6rem) 0', height: '1px', background: '#e5e7eb' }} />

      {/* ── Doação de Materiais / Divulgação ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', letterSpacing: '0.22em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          Outras formas de contribuir
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1px', background: '#e5e7eb' }}>
          {[
            { icon: '📦', title: 'Doação de Materiais', desc: 'Equipamentos esportivos, materiais escolares e uniformes para nossa sede e núcleos.' },
            { icon: '📣', title: 'Divulgação', desc: 'Compartilhe nosso trabalho nas redes sociais. A visibilidade também transforma vidas.' },
            { icon: '🤝', title: 'Voluntariado', desc: 'Doe seu tempo e talento. Precisamos de profissionais de diversas áreas.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ background: '#fff', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#111827', margin: 0 }}>{item.title}</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.65, margin: 0, fontWeight: 300 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA contato ── */}
      <div style={{
        marginTop: '6rem',
        borderTop: '1px solid #e5e7eb',
        padding: '5rem clamp(1.5rem, 6vw, 6rem)',
        textAlign: 'center',
        background: '#fff',
      }}>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', letterSpacing: '0.22em', color: '#16a34a', textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          Dúvidas?
        </motion.p>
        <motion.h2
          custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, color: '#111827', marginBottom: '1rem' }}
        >
          Fale com a gente
        </motion.h2>
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: '#6b7280', marginBottom: '2rem', lineHeight: 1.7 }}
        >
          Ligue <strong style={{ color: '#111827' }}>(11) 2532-5697</strong> ou escreva para{' '}
          <a href="mailto:contato@futuroscraques.org" style={{ color: '#00a2e8', textDecoration: 'none', fontWeight: 600 }}>
            contato@futuroscraques.org
          </a>
        </motion.p>
        <motion.a
          custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          href="mailto:contato@futuroscraques.org"
          style={{
            display: 'inline-block', textDecoration: 'none',
            background: 'linear-gradient(135deg, #16a34a, #22c55e)',
            color: '#fff', borderRadius: '9999px',
            padding: '14px 48px',
            fontSize: '0.82rem', fontFamily: "'Outfit', sans-serif",
            fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
            boxShadow: '0 8px 32px rgba(22,163,74,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(22,163,74,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(22,163,74,0.3)' }}
        >
          Entrar em Contato
        </motion.a>
      </div>

    </div>
  )
}
