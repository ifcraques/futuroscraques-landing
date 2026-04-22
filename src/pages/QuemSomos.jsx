import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IFCTimeline } from '@/components/ui/timeline-component'
import TeamShowcase from '@/components/ui/team-showcase'
import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack'
import Organograma from '@/components/ui/Organograma'

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
            fontSize: '0.9rem', letterSpacing: '0.22em',
            color: '#16a34a', textTransform: 'uppercase', marginBottom: '1.2rem',
          }}>
            Conheça o Instituto
          </p>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(3.36rem, 8.4vw, 7.2rem)',
            fontWeight: 400, color: '#111827',
            lineHeight: 1, marginBottom: '1.5rem',
          }}>
            Quem{' '}
            <em style={{ fontStyle: 'italic', color: '#4b5563' }}>somos</em>
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.2rem, 1.44vw, 1.38rem)',
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

      {/* ── Texto Institucional ── */}
      <motion.div
        style={{ padding: '3rem clamp(1.5rem, 6vw, 6rem) 0' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="texto-institucional-cols">
          <p className="texto-p">
            O Instituto Futuros Craques acredita que esporte e cultura são caminhos reais de transformação. Desde 2005, trabalhamos diretamente com crianças e adolescentes em situação de vulnerabilidade, construindo junto a eles uma base de valores — respeito, colaboração e pertencimento.
          </p>

          <p className="texto-p">
            Nossos projetos cobrem o desenvolvimento em múltiplas dimensões — do esporte ao reforço educacional — e são conduzidos por uma equipe multidisciplinar de professores, psicólogos, médicos e educadores. Acreditamos que dar acesso de qualidade é o primeiro passo para mudar uma trajetória.
          </p>

          <p className="texto-p" style={{ marginBottom: '2.5rem' }}>
            Mais do que aulas e treinos, o IFC promove experiências que formam cidadãos. Atividades esportivas, culturais e de lazer são planejadas para desenvolver autonomia, saúde e senso de comunidade — porque jovem que se sente pertencendo a algo tem mais razões para crescer.
          </p>

          {/* Caixa de informação legal — itálico */}
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderLeft: '4px solid #16a34a',
            borderRadius: '8px',
            padding: '1.5rem 2rem',
          }}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(0.85rem, 1vw, 0.96rem)',
              color: '#374151',
              lineHeight: 1.85,
              fontStyle: 'italic',
              marginBottom: '1rem',
            }}>
              Conforme previsão da Lei Pelé, os membros eleitos para o corpo diretivo da entidade não recebem
              nenhuma espécie de remuneração ou salário.
            </p>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(0.85rem, 1vw, 0.96rem)',
              color: '#374151',
              lineHeight: 1.85,
              fontStyle: 'italic',
              margin: 0,
            }}>
              É vedada a eleição de cônjuge e os parentes consanguíneos ou afins, até segundo grau, ou por
              adoção, do presidente ou dirigente máximo da entidade, na eleição que o suceder, conforme o
              disposto no parágrafo 3º, II, do Art 18A da Lei 9.605/98.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Divisor ── */}
      <div style={{
        margin: '4rem clamp(1.5rem, 6vw, 6rem) 0',
        height: '1px',
        background: '#e5e7eb',
      }} />

      {/* ── Missão, Visão, Valores ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr)',
          gap: '3rem',
        }}
          className="mvv-grid"
        >
          {/* Coluna esquerda: sticky */}
          <div style={{
            position: 'sticky',
            top: '100px',
            alignSelf: 'start',
          }}
            className="mvv-left"
          >
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.9rem', letterSpacing: '0.22em',
              color: '#6b7280', textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}>
              Princípios
            </p>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(2.4rem, 3.6vw, 3.6rem)',
              fontWeight: 400, color: '#111827',
              lineHeight: 1.1, marginBottom: '1.5rem',
            }}>
              O que nos{' '}
              <em style={{ fontStyle: 'italic', color: '#4b5563' }}>guia</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.2rem',
              color: '#6b7280', lineHeight: 1.8, fontWeight: 300,
              maxWidth: '38ch',
            }}>
              Nossos princípios orientam cada projeto, cada jovem atendido
              e cada parceria construída — desde 2005.
            </p>
          </div>

          {/* Coluna direita: scroll com cards sticky */}
          <ContainerScroll className="mvv-right" style={{ minHeight: '260vh', paddingBottom: '4rem' }}>
            {MVV.map((item, i) => (
              <CardSticky
                key={item.num}
                index={i + 2}
                incrementY={64}
                incrementZ={8}
                className="mvv-card"
                style={{
                  background: '#ffffff',
                  borderLeft: '3px solid #16a34a',
                  borderRadius: '0.75rem',
                  boxShadow: '0 4px 24px 0 rgba(17,24,39,0.07)',
                  padding: 'clamp(2rem, 3vw, 3rem)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.9rem', letterSpacing: '0.16em',
                  color: '#16a34a', fontWeight: 600,
                }}>
                  {item.num}
                </span>
                <h3 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 'clamp(2.16rem, 3vw, 2.88rem)',
                  fontWeight: 400, color: '#111827',
                  lineHeight: 1,
                }}>
                  {item.titulo}
                </h3>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1.2rem', color: '#374151',
                  lineHeight: 1.85, fontWeight: 300,
                }}>
                  {item.corpo}
                </p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>

      {/* ── Organograma ── */}
      <motion.div
        style={{ padding: '5rem clamp(1.5rem, 6vw, 6rem) 0' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.9rem', letterSpacing: '0.22em',
          color: '#6b7280', textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Estrutura
        </p>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2rem, 3vw, 2.8rem)',
          fontWeight: 400, color: '#111827',
          lineHeight: 1.1, marginBottom: '2.5rem',
        }}>
          Organograma
        </h2>
        <div style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '2rem 1rem',
          boxShadow: '0 4px 24px rgba(17,24,39,0.05)',
        }}>
          <Organograma />
        </div>
      </motion.div>

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
          fontSize: '0.9rem', letterSpacing: '0.22em',
          color: '#6b7280', textTransform: 'uppercase',
          marginBottom: '3rem',
        }}>
          Nossa história
        </p>

        <IFCTimeline />
      </div>

      {/* ── Divisor ── */}
      <div style={{
        margin: '5rem clamp(1.5rem, 6vw, 6rem) 0',
        height: '1px',
        background: '#e5e7eb',
      }} />

      {/* ── Equipe ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.9rem', letterSpacing: '0.22em',
          color: '#6b7280', textTransform: 'uppercase',
          marginBottom: '0.8rem',
        }}>
          Time
        </p>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2.16rem, 3.6vw, 3.36rem)',
          fontWeight: 400, color: '#111827',
          lineHeight: 1.1, marginBottom: '3rem',
        }}>
          Uma equipe{' '}
          <em style={{ fontStyle: 'italic', color: '#4b5563' }}>
            multidisciplinar
          </em>
        </h2>
        <TeamShowcase />
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
          fontSize: '0.9rem', letterSpacing: '0.22em',
          color: '#16a34a', textTransform: 'uppercase', marginBottom: '1.5rem',
        }}>
          Faça parte
        </p>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
          fontWeight: 400, color: '#111827', marginBottom: '1rem',
        }}>
          Apoie quem transforma{' '}
          <em style={{ fontStyle: 'italic', color: '#4b5563' }}>vidas.</em>
        </h2>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '1.2rem', color: '#6b7280',
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
              fontSize: '0.96rem',
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

      <style>{`
        /* ── Texto institucional: 2 colunas editoriais no desktop ── */
        .texto-institucional-cols {
          columns: 1;
          column-gap: 3.5rem;
        }
        .texto-p {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.05rem, 1.3vw, 1.2rem);
          color: #374151;
          line-height: 1.85;
          font-weight: 300;
          margin-bottom: 1.5rem;
          break-inside: avoid;
        }
        @media (min-width: 900px) {
          .texto-institucional-cols {
            columns: 2;
          }
        }

        /* MVV grid: 2 cols no desktop */
        @media (min-width: 768px) {
          .mvv-grid {
            grid-template-columns: 1fr 1fr !important;
            align-items: start;
          }
        }
        /* responsive: colapsa grid da equipe no mobile */
        @media (max-width: 768px) {
          .quem-equipe-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .mvv-left {
            position: static !important;
          }
        }
      `}</style>

    </div>
  )
}
