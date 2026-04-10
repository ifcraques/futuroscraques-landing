import { motion } from 'framer-motion'

export default function Sponsors() {
  // Todos os patrocinadores e apoiadores em uma única lista
  const patrocinadores = [
    { src: 'https://www.uol.com.br/favicon.ico', alt: 'UOL', h: 38, url: 'https://www.uol.com.br', fallback: '🌐 UOL' },
    { src: 'https://www.ecolab.com/favicon.ico', alt: 'Ecolab', h: 34, url: 'https://www.ecolab.com', fallback: '🌐 Ecolab' },
    { src: 'https://www.unipar.com/favicon.ico', alt: 'Unipar', h: 38, url: 'https://www.unipar.com', fallback: '🌐 Unipar' },
    { src: 'https://www.ntsinlogistica.com.br/favicon.ico', alt: 'NTS', h: 38, url: 'https://www.ntsinlogistica.com.br', fallback: '🌐 NTS' },
    { src: 'https://www.havan.com.br/favicon.ico', alt: 'Havan', h: 38, url: 'https://www.havan.com.br', fallback: '🌐 Havan' },
    { src: 'https://www.b3.com.br/favicon.ico', alt: 'B3', h: 38, url: 'https://www.b3.com.br', fallback: '🌐 B3' },
    { src: 'https://www.caixa.gov.br/favicon.ico', alt: 'Caixa Residencial', h: 38, url: 'https://www.caixa.gov.br', fallback: '🌐 Caixa' },
    { src: 'https://www.sankofort.com.br/favicon.ico', alt: 'Sankonfort', h: 38, url: 'https://www.sankofort.com.br', fallback: '🌐 Sankonfort' },
    { src: 'https://www.engemet.com.br/favicon.ico', alt: 'Engemet', h: 34, url: 'https://www.engemet.com.br', fallback: '🌐 Engemet' },
    { src: 'https://www.estacio.br/favicon.ico', alt: 'Estácio', h: 38, url: 'https://www.estacio.br', fallback: '🌐 Estácio' },
    { src: 'https://www.freixenet.com/favicon.ico', alt: 'Freixenet', h: 38, url: 'https://www.freixenet.com', fallback: '🌐 Freixenet' },
    { src: 'https://www.metalinox.com.br/favicon.ico', alt: 'Metalinox', h: 38, url: 'https://www.metalinox.com.br', fallback: '🌐 Metalinox' },
    { src: 'https://www.sonda.com.br/favicon.ico', alt: 'Sonda Supermercados', h: 38, url: 'https://www.sonda.com.br', fallback: '🌐 Sonda' },
    { src: 'https://www.altre.com.br/favicon.ico', alt: 'Altre', h: 38, url: 'https://www.altre.com.br', fallback: '🌐 Altre' },
    { src: 'https://www.drogaraia.com.br/favicon.ico', alt: 'Droga Raia', h: 38, url: 'https://www.drogaraia.com.br', fallback: '🌐 Droga Raia' },
    { src: 'https://www.panco.com.br/favicon.ico', alt: 'Panco', h: 38, url: 'https://www.panco.com.br', fallback: '🌐 Panco' },
    { src: 'https://www.coca-colabrasil.com.br/favicon.ico', alt: 'Coca-Cola', h: 48, url: 'https://www.coca-colabrasil.com.br', fallback: '🌐 Coca-Cola' },
    { src: 'https://www.votorantim.com.br/favicon.ico', alt: 'Grupo Votorantim', h: 34, url: 'https://www.votorantim.com.br', fallback: '🌐 Votorantim' },
    { src: 'https://www.pagbank.com.br/favicon.ico', alt: 'PagBank', h: 34, url: 'https://www.pagbank.com.br', fallback: '🌐 PagBank' },
    { src: 'https://www.passeidireto.com/favicon.ico', alt: 'Passei Direto', h: 34, url: 'https://www.passeidireto.com', fallback: '🌐 Passei Direto' },
    { src: 'https://www.ingresso.com/favicon.ico', alt: 'Ingresso.com', h: 34, url: 'https://www.ingresso.com', fallback: '🌐 Ingresso.com' },
  ]

  const realizacao = [
    { src: 'https://www.unip.br/favicon.ico', alt: 'UNIP', h: 90, url: 'https://www.unip.br', fallback: '🎓 UNIP' },
    { src: 'https://www.narnet.com.br/favicon.ico', alt: 'NAR', h: 65, url: 'https://www.narnet.com.br', fallback: '🌐 NAR' },
    { src: '/logos/lei-incentivo-esporte.svg', alt: 'Lei de Incentivo ao Esporte SP', h: 65, url: 'https://www.lei-incentivo-esporte-sp.sp.gov.br', noGrayscale: true },
    { src: 'https://www.saopaulo.sp.gov.br/favicon.ico', alt: 'Governo do Estado de São Paulo', h: 65, url: 'https://www.saopaulo.sp.gov.br', fallback: '🏛️ SP' },
    { src: 'https://www.gov.br/favicon.ico', alt: 'Ministério do Esporte', h: 65, url: 'https://www.gov.br/esporte', fallback: '🏛️ Brasil' },
    { src: '/logos/cbc.svg', alt: 'CBC - Comitê Brasileiro de Clubes', h: 75, url: 'https://www.cbclubes.org.br', noGrayscale: true },
  ]

  const LogoItem = ({ l }) => (
    <motion.a
      href={l.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={l.src}
        alt={l.alt}
        loading="lazy"
        title={`Clique para visitar ${l.alt}`}
        style={{
          height: l.h + 'px',
          maxWidth: '130px',
          objectFit: 'contain',
          filter: l.noGrayscale ? 'none' : 'grayscale(100%)',
          opacity: l.noGrayscale ? 1 : 0.65,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.filter = 'grayscale(0%)'
          e.target.style.opacity = '1'
        }}
        onMouseLeave={(e) => {
          if (!l.noGrayscale) {
            e.target.style.filter = 'grayscale(100%)'
            e.target.style.opacity = '0.65'
          }
        }}
      />
    </motion.a>
  )

  return (
    <section id="sponsors-section" className="section" style={{ padding: '4rem 2rem' }}>
      <motion.h2
        className="section-title"
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Patrocinadores & Apoio
      </motion.h2>
      <motion.p
        className="section-subtitle"
        style={{ textAlign: 'center', margin: '0 auto 3rem' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Empresas e instituições que acreditam e investem na transformação através do esporte
      </motion.p>

      <motion.div
        style={{
          background: 'white', padding: '3rem 2rem', borderRadius: '25px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', gap: '2.5rem',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h4 style={{ textAlign: 'center', color: 'var(--accent)', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>PATROCINADORES</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            {patrocinadores.map((l) => <LogoItem key={l.alt} l={l} />)}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0' }} />

        <div>
          <h4 style={{ textAlign: 'center', color: 'var(--accent)', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>REALIZAÇÃO</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            {realizacao.map((l) => <LogoItem key={l.alt} l={l} />)}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
