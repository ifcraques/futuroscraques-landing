import { motion } from 'framer-motion'

export default function Sponsors() {
  const patrocinadores = [
    { src: 'https://static.wixstatic.com/media/3db4e0_86d9fd9c0a11465185aeafc0f45a065d~mv2.png', alt: 'UOL', h: 40 },
    { src: 'https://static.wixstatic.com/media/3db4e0_67795eb103bc476394c574d9730d8927~mv2.png', alt: 'Ecolab', h: 35 },
    { src: 'https://static.wixstatic.com/media/3db4e0_e8d60162782e4761b0fac759cba92253~mv2.png', alt: 'Unipar', h: 40 },
    { src: 'https://static.wixstatic.com/media/3db4e0_3ecf2be0005b42d4bb3085936c38642d~mv2.png', alt: 'NTS', h: 45 },
    { src: 'https://static.wixstatic.com/media/3db4e0_7b7cc8a1c643471e99efd1b64566530d~mv2.png', alt: 'Havan', h: 50 },
    { src: 'https://static.wixstatic.com/media/3db4e0_b10051667bf1426e8719343ac4077425~mv2.png', alt: 'B3', h: 55 },
    { src: 'https://static.wixstatic.com/media/3db4e0_74d9990a96f44997bf1f425127a6903a~mv2.png', alt: 'Caixa Residencial', h: 40 },
    { src: 'https://static.wixstatic.com/media/3db4e0_d60554e671f549cbb6a4923c1340f36a~mv2.png', alt: 'Sanko Fort', h: 30 },
  ]

  const apoio = [
    { src: 'https://static.wixstatic.com/media/3db4e0_ea833626b9fe46dcb0563d75c1c6b4ae~mv2.png', alt: 'Engemet', h: 30 },
    { src: 'https://static.wixstatic.com/media/3db4e0_d6335b16580843d18500e8c273798df6~mv2.png', alt: 'Estacio', h: 35 },
    { src: 'https://static.wixstatic.com/media/3db4e0_50fe5c87999f44b6b1a91f5b40542c83~mv2.png', alt: 'Freixenet', h: 40 },
    { src: 'https://static.wixstatic.com/media/3db4e0_0e9a97c6636045e8be8691a391cfa800~mv2.png', alt: 'Metalinox', h: 30 },
  ]

  const realizacao = [
    { src: 'https://static.wixstatic.com/media/3db4e0_d578d1f74d7a4359b0538b7f39675ff9~mv2.png', alt: 'UNIP', h: 55 },
    { src: 'https://static.wixstatic.com/media/3db4e0_5fe5770dcad441b68737d1965df7103f~mv2.png', alt: 'NAR', h: 60 },
    { src: 'https://static.wixstatic.com/media/3db4e0_dde79d0977e74950ab62f5cb548afff6~mv2.png', alt: 'Lei de Incentivo ao Esporte SP', h: 55 },
    { src: 'https://static.wixstatic.com/media/3db4e0_856fd146bbb34d86bd1d96f7c6c857fd~mv2.png', alt: 'Governo do Estado de Sao Paulo', h: 55 },
    { src: 'https://static.wixstatic.com/media/3db4e0_92507f369a564c27a6c93e2c199dbd4b~mv2.jpg', alt: 'Ministerio do Esporte', h: 40 },
  ]

  const LogoRow = ({ items }) => (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', alignItems: 'center',
    }}>
      {items.map((l) => (
        <motion.img
          key={l.alt}
          src={l.src}
          alt={l.alt}
          loading="lazy"
          style={{ height: l.h + 'px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }}
          whileHover={{ filter: 'grayscale(0%)', opacity: 1, scale: 1.08 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
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
        Empresas e instituicoes que acreditam e investem na transformacao atraves do esporte
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
          <LogoRow items={patrocinadores} />
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0' }} />

        <div>
          <h4 style={{ textAlign: 'center', color: 'var(--accent)', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>APOIO</h4>
          <LogoRow items={apoio} />
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0' }} />

        <div>
          <h4 style={{ textAlign: 'center', color: 'var(--accent)', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>REALIZACAO</h4>
          <LogoRow items={realizacao} />
        </div>
      </motion.div>
    </section>
  )
}
