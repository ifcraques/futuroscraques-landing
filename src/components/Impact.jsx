import { motion } from 'framer-motion'

const programas = [
  {
    numero: '01',
    tag: 'Crianças & Adolescentes',
    titulo: 'Formação Esportiva',
    foco: 'Acesso inclusivo, educativo e lúdico à prática esportiva desde os primeiros anos de vida.',
    publico: 'Crianças e adolescentes',
    objetivo: 'Desenvolvimento integral do indivíduo e formação para o exercício da cidadania.',
    caracteristica: 'Praticado preferencialmente no contraturno escolar, sem seletividade ou hipercompetitividade.',
    cor: '#1a7a5e',
    corFundo: 'rgba(26,122,94,0.06)',
    icone: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="#1a7a5e" strokeWidth="2"/>
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#1a7a5e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 18l2 4h8l2-4" stroke="#1a7a5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    numero: '02',
    tag: 'Jovens, Adultos & Idosos',
    titulo: 'Esporte para Toda a Vida',
    foco: 'Consolidação de hábitos saudáveis e promoção da saúde, lazer e bem-estar.',
    publico: 'Jovens, adultos e pessoas idosas',
    objetivo: 'Integrar os praticantes à vida social e preservar o meio ambiente pela prática voluntária.',
    caracteristica: 'Modalidades como lazer ou atividade física. Permite esporte competitivo para adultos sem foco em rendimento profissional.',
    cor: '#0078ab',
    corFundo: 'rgba(0,120,171,0.06)',
    icone: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#0078ab" strokeWidth="2"/>
        <path d="M16 6c0 0 4 4 4 10s-4 10-4 10" stroke="#0078ab" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 6c0 0-4 4-4 10s4 10 4 10" stroke="#0078ab" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 16h20" stroke="#0078ab" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    numero: '03',
    tag: 'Atletas de Alto Rendimento',
    titulo: 'Excelência Esportiva',
    foco: 'Treinamento sistemático, especialização esportiva e resultados expressivos em competições.',
    publico: 'Atletas em formação técnica ou de alto rendimento',
    objetivo: 'Obter resultados expressivos e promover a integração entre nações pelo esporte de performance.',
    caracteristica: 'Seguindo regras nacionais e internacionais. Foco no aperfeiçoamento qualitativo e quantitativo da prática desportiva.',
    cor: '#c4922a',
    corFundo: 'rgba(196,146,42,0.06)',
    icone: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l2.5 7.5H26l-6.5 4.5 2.5 7.5L16 19l-6 4.5 2.5-7.5L6 11.5h7.5L16 4z" stroke="#c4922a" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Impact() {
  return (
    <section id="impact-section" style={{ padding: '7rem 0', background: '#f8f7f4' }}>
      <div className="section">

        {/* Header */}
        <motion.p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1a7a5e',
            marginBottom: '0.75rem',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          O que defendemos
        </motion.p>

        <motion.h2
          className="section-title"
          style={{ color: '#0d1f2d', textAlign: 'left', marginBottom: '0.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Nossos Programas
        </motion.h2>

        <motion.p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.05rem',
            color: '#5a6a75',
            marginBottom: '3.5rem',
            maxWidth: '560px',
            lineHeight: 1.7,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Três pilares que estruturam nossa atuação — do primeiro contato com o esporte até o alto rendimento competitivo.
        </motion.p>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem',
        }}>
          {programas.map((p, i) => (
            <motion.div
              key={p.numero}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '2.25rem',
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Número decorativo de fundo */}
              <span style={{
                position: 'absolute',
                top: '-0.5rem',
                right: '1.5rem',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '7rem',
                color: p.cor,
                opacity: 0.06,
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {p.numero}
              </span>

              {/* Topo: ícone + tag */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: p.corFundo,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {p.icone}
                </div>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: p.cor,
                  background: p.corFundo,
                  padding: '0.3rem 0.75rem',
                  borderRadius: '20px',
                }}>
                  {p.tag}
                </span>
              </div>

              {/* Título */}
              <div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.9rem',
                  fontWeight: 400,
                  color: '#0d1f2d',
                  letterSpacing: '0.03em',
                  marginBottom: '0.5rem',
                  lineHeight: 1.1,
                }}>
                  {p.titulo}
                </h3>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.97rem',
                  color: '#4b5563',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {p.foco}
                </p>
              </div>

              {/* Divisor */}
              <div style={{ height: '1px', background: 'rgba(0,0,0,0.07)' }} />

              {/* Detalhes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <Detail cor={p.cor} label="Público-alvo" value={p.publico} />
                <Detail cor={p.cor} label="Objetivo" value={p.objetivo} />
                <Detail cor={p.cor} label="Característica" value={p.caracteristica} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Detail({ cor, label, value }) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: cor,
        marginTop: '0.45rem',
        flexShrink: 0,
      }} />
      <div>
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: cor,
          display: 'block',
          marginBottom: '0.15rem',
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.9rem',
          color: '#4b5563',
          lineHeight: 1.55,
        }}>
          {value}
        </span>
      </div>
    </div>
  )
}
