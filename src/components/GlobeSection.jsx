import { motion } from 'framer-motion'
import { Globe } from './ui/Globe'

/* Cidades atendidas pelo IFC (lat, lng) */
const CIDADES = [
  { id: 'sao-paulo',  location: [-23.55, -46.63] },
  { id: 'campinas',   location: [-22.90, -47.06] },
  { id: 'sorocaba',   location: [-23.50, -47.45] },
  { id: 'santos',     location: [-23.96, -46.33] },
  { id: 'ribeirao',   location: [-21.17, -47.81] },
  { id: 'sjcampos',   location: [-23.18, -45.88] },
  { id: 'bauru',      location: [-22.31, -49.06] },
  { id: 'prudente',   location: [-22.12, -51.39] },
]

const STATS = [
  { numero: '40.000+', label: 'crianças e adolescentes atendidos' },
  { numero: '30+',     label: 'cidades alcançadas' },
  { numero: '100%',    label: 'gratuito para as famílias' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function GlobeSection() {
  return (
    <section
      id="onde-estamos"
      aria-labelledby="onde-estamos-titulo"
      style={{ padding: '6rem 0', overflow: 'hidden' }}
    >
      <div
        className="globe-section-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* Texto + estatísticas */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={item}
            style={{
              color: '#16a34a',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              margin: '0 0 1rem',
            }}
          >
            Onde estamos
          </motion.p>

          <motion.h2
            id="onde-estamos-titulo"
            variants={item}
            className="section-title"
            style={{ color: 'var(--text, #0d1f2d)', margin: '0 0 1.25rem' }}
          >
            Um movimento que cresce por todo o estado
          </motion.h2>

          <motion.p
            variants={item}
            style={{
              color: 'var(--muted, #5a6a75)',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.05rem',
              lineHeight: 1.7,
              margin: '0 0 2.5rem',
              maxWidth: '46ch',
            }}
          >
            Do litoral ao interior de São Paulo, o Instituto Futuros Craques leva
            esporte, educação e oportunidade para onde elas mais fazem diferença.
            Gire o globo e veja nosso alcance.
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {STATS.map((s) => (
              <motion.div key={s.label} variants={item}>
                <span style={{
                  display: 'block',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2rem, 3.4vw, 2.8rem)',
                  color: '#16a34a',
                  lineHeight: 1,
                }}>
                  {s.numero}
                </span>
                <span style={{
                  display: 'block',
                  marginTop: '0.4rem',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.82rem',
                  color: 'var(--muted, #5a6a75)',
                  lineHeight: 1.45,
                }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Globo interativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: '520px', width: '100%', margin: '0 auto' }}
        >
          <Globe
            markers={CIDADES}
            phiStart={5.53}
            theta={-0.32}
            speed={0.0016}
            markerSize={0.05}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .globe-section-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .globe-section-grid > div:last-child {
            max-width: 380px !important;
          }
          #onde-estamos {
            padding: 4rem 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
