import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MVV = [
  {
    num: '01',
    titulo: 'Missão',
    corpo: 'Transformar vidas de jovens em situação de vulnerabilidade social por meio do esporte, da educação e da cultura — promovendo inclusão, cidadania e desenvolvimento humano integral.',
  },
  {
    num: '02',
    titulo: 'Visão',
    corpo: 'Ser referência nacional e internacional em projetos sociais que utilizam o esporte como ferramenta de transformação, formando cidadãos preparados para o futuro.',
  },
  {
    num: '03',
    titulo: 'Valores',
    corpo: 'Ética e transparência. Inclusão radical. Excelência na execução. Comprometimento social. Respeito à diversidade. Fé no potencial de cada jovem que atendemos.',
  },
]

const EQUIPE = [
  'Professores de Educação Física',
  'Advogados',
  'Médicos e Nutricionistas',
  'Engenheiros e Administradores',
  'Psicólogos',
  'Comunicadores e Designers',
]

const MARCOS = [
  { ano: '2005', desc: 'Fundação do Instituto em Brasília com foco em basquete de base.' },
  { ano: '2010', desc: 'Expansão para 10 cidades. Primeiros atletas revelados para seleções estaduais.' },
  { ano: '2015', desc: 'Lançamento do programa Drible Certo 3×3, precursor do basquete olímpico no Brasil.' },
  { ano: '2020', desc: 'Adaptação digital durante a pandemia. Atendimento continuado para mais de 800 famílias.' },
  { ano: '2026', desc: 'Presença em 30+ cidades. Mais de 40.000 jovens impactados em duas décadas.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function QuemSomos() {
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
            Conheça o Instituto
          </p>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            fontWeight: 400, color: '#111827',
            lineHeight: 1, marginBottom: '1.5rem',
          }}>
            Quem{' '}
            <em style={{ fontStyle: 'italic', color: '#4b5563' }}>somos</em>
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            color: '#4b5563', maxWidth: '560px',
            lineHeight: 1.8, fontWeight: 300,
          }}>
            Uma organização sem fins lucrativos que, desde 2005, usa o esporte
            como ferramenta real de transformação social — com metodologia,
            rigor e presença em todo o Brasil.
          </p>
        </motion.div>
      </div>

      {/* ── Divisor ── */}
      <div style={{
        margin: '4rem clamp(1.5rem, 6vw, 6rem) 0',
        height: '1px',
        background: '#e5e7eb',
      }} />

      {/* ── Missão, Visão, Valores ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.75rem', letterSpacing: '0.22em',
          color: '#6b7280', textTransform: 'uppercase',
          marginBottom: '3rem',
        }}>
          Princípios
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '1px',
          background: '#e5e7eb',
        }}>
          {MVV.map((item, i) => (
            <motion.div
              key={item.num}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                background: '#ffffff',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                borderLeft: '2px solid #16a34a',
              }}
            >
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.75rem', letterSpacing: '0.16em',
                color: '#16a34a', fontWeight: 500,
              }}>
                {item.num}
              </span>
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                fontWeight: 400, color: '#111827',
                lineHeight: 1,
              }}>
                {item.titulo}
              </h3>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1rem', color: '#374151',
                lineHeight: 1.8, fontWeight: 300,
              }}>
                {item.corpo}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Divisor ── */}
      <div style={{
        margin: '5rem clamp(1.5rem, 6vw, 6rem) 0',
        height: '1px',
        background: '#e5e7eb',
      }} />

      {/* ── Linha do tempo ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.75rem', letterSpacing: '0.22em',
          color: '#6b7280', textTransform: 'uppercase',
          marginBottom: '3rem',
        }}>
          Nossa história
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {MARCOS.map((marco, i) => (
            <motion.div
              key={marco.ano}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(3rem, 8vw, 6rem) 1fr',
                gap: '2rem',
                alignItems: 'start',
                padding: '1.8rem 0',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <span style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                fontStyle: 'italic',
                color: '#16a34a',
                lineHeight: 1.4,
              }}>
                {marco.ano}
              </span>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1rem',
                color: '#374151',
                lineHeight: 1.8,
                fontWeight: 300,
                paddingTop: '2px',
              }}>
                {marco.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Divisor ── */}
      <div style={{
        margin: '5rem clamp(1.5rem, 6vw, 6rem) 0',
        height: '1px',
        background: '#e5e7eb',
      }} />

      {/* ── Equipe ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          alignItems: 'start',
        }}
          className="quem-equipe-grid"
        >
          <div>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.75rem', letterSpacing: '0.22em',
              color: '#6b7280', textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}>
              Time
            </p>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 400, color: '#111827',
              lineHeight: 1.1,
            }}>
              Uma equipe{' '}
              <em style={{ fontStyle: 'italic', color: '#4b5563' }}>
                multidisciplinar
              </em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {EQUIPE.map((role, i) => (
              <motion.div
                key={role}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  padding: '1.2rem 0',
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                  color: '#374151',
                  fontWeight: 300,
                }}>
                  {role}
                </span>
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.7rem', letterSpacing: '0.16em',
                  color: '#9ca3af',
                  textTransform: 'uppercase',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{
        marginTop: '6rem',
        borderTop: '1px solid #e5e7eb',
        padding: '5rem clamp(1.5rem, 6vw, 6rem)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.75rem', letterSpacing: '0.22em',
          color: '#16a34a', textTransform: 'uppercase', marginBottom: '1.5rem',
        }}>
          Faça parte
        </p>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 400, color: '#111827', marginBottom: '1rem',
        }}>
          Apoie quem transforma{' '}
          <em style={{ fontStyle: 'italic', color: '#4b5563' }}>vidas.</em>
        </h2>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '1rem', color: '#6b7280',
          marginBottom: '2.5rem', lineHeight: 1.7,
        }}>
          Cada contribuição chega diretamente a um jovem em situação de vulnerabilidade.
        </p>
        <Link to="/comoapoiar" style={{ textDecoration: 'none' }}>
          <button
            className="liquid-glass"
            style={{
              borderRadius: '9999px',
              padding: '14px 48px',
              fontSize: '0.8rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#fff', cursor: 'pointer',
              background: 'rgba(22,163,74,0.9)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Apoie Agora
          </button>
        </Link>
      </div>

      {/* responsive: colapsa grid da equipe no mobile */}
      <style>{`
        @media (max-width: 768px) {
          .quem-equipe-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>

    </div>
  )
}
