import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ways = [
  {
    icon: '💰',
    title: 'Doação',
    desc: 'Escolha um valor (R$ 50, 150, 300 ou outro) e um projeto. Você pode fazer uma doação única ou mensal. Pagamento via PIX ou WhatsApp.',
    link: '/doacao-direta',
  },
  {
    icon: '🏢',
    title: 'Parceria Corporativa',
    desc: 'Sua empresa pode se tornar parceira oficial do Instituto, com visibilidade de marca, relatórios de impacto e benefícios fiscais via Lei de Incentivo ao Esporte.',
    link: '/contato',
  },
  {
    icon: '📋',
    title: 'Lei de Incentivo ao Esporte',
    desc: 'Pessoas jurídicas podem destinar até 2% do IR e pessoas físicas até 7% para projetos aprovados pelo Ministério do Esporte.',
    link: '/projetos',
  },
  {
    icon: '🤝',
    title: 'Voluntariado',
    desc: 'Doe seu tempo e talento. Precisamos de profissionais de diversas áreas para apoiar nossos programas e eventos.',
    link: '/recrutamento',
  },
  {
    icon: '📦',
    title: 'Doação de Materiais',
    desc: 'Equipamentos esportivos, materiais escolares, uniformes e outros itens que fazem diferença no dia a dia dos nossos jovens.',
    link: '/doacao-materiais',
  },
  {
    icon: '📣',
    title: 'Divulgação',
    desc: 'Compartilhe nossa causa nas redes sociais, indique para amigos e empresas. A visibilidade também transforma vidas.',
    link: 'https://www.instagram.com/institutofuturoscraques/',
    external: true,
  },
]

export default function ComoApoiar() {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const handleCopyPix = () => {
    navigator.clipboard.writeText('08584691000120')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-pretitle">Faça Parte</span>
          <h1>Como Apoiar</h1>
          <p>
            Existem diversas formas de contribuir com o Instituto Futuros Craques.
            Escolha a que mais combina com você e ajude a transformar a vida de
            milhares de jovens através do esporte e da educação.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <div className="support-grid">
          {ways.map((w, i) => (
            <motion.div
              key={w.title}
              className="support-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
              onClick={() => {
                if (!w.link) return
                if (w.external) window.open(w.link, '_blank')
                else navigate(w.link)
              }}
              style={{ cursor: w.link ? 'pointer' : 'default' }}
            >
              <span className="support-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              {w.link && <span style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600 }}>Clique para conhecer →</span>}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <motion.div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="pix-box" style={{ margin: 0 }}>
            <h2>Doe via PIX</h2>
            <p>Chave PIX (CNPJ):</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <div className="pix-key" style={{ margin: 0 }}>08584691000120</div>
              <motion.button
                onClick={handleCopyPix}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                title={copied ? 'Copiado!' : 'Copiar chave PIX'}
              >
                {copied ? '✅' : '📋'}
              </motion.button>
            </div>
            <p className="pix-note">Instituto Futuros Craques — CNPJ: 08.584.691/0001-20</p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
