import { motion } from 'framer-motion'

export default function Sponsors() {
  const logos = [
    { src: 'https://static.wixstatic.com/media/3db4e0_86d9fd9c0a11465185aeafc0f45a065d~mv2.png', alt: 'UOL', h: 35 },
    { src: 'https://static.wixstatic.com/media/3db4e0_67795eb103bc476394c574d9730d8927~mv2.png', alt: 'Ecolab', h: 35 },
    { src: 'https://static.wixstatic.com/media/3db4e0_e8d60162782e4761b0fac759cba92253~mv2.png', alt: 'Unipar', h: 35 },
    { src: 'https://static.wixstatic.com/media/3db4e0_3ecf2be0005b42d4bb3085936c38642d~mv2.png', alt: 'NTS', h: 45 },
    { src: 'https://static.wixstatic.com/media/3db4e0_7b7cc8a1c643471e99efd1b64566530d~mv2.png', alt: 'Havan', h: 45 },
    { src: 'https://static.wixstatic.com/media/3db4e0_b10051667bf1426e8719343ac4077425~mv2.png', alt: 'B3', h: 55 },
    { src: 'https://static.wixstatic.com/media/3db4e0_74d9990a96f44997bf1f425127a6903a~mv2.png', alt: 'Caixa Residencial', h: 35 },
    { src: 'https://static.wixstatic.com/media/3db4e0_d6335b16580843d18500e8c273798df6~mv2.png', alt: 'Estácio', h: 35 },
    { src: 'https://static.wixstatic.com/media/3db4e0_d578d1f74d7a4359b0538b7f39675ff9~mv2.png', alt: 'UNIP', h: 55 },
    { src: 'https://static.wixstatic.com/media/3db4e0_dde79d0977e74950ab62f5cb548afff6~mv2.png', alt: 'Lei de Incentivo ao Esporte SP', h: 55 }
  ]

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
          display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'center',
          background: 'white', padding: '3.5rem 2rem', borderRadius: '25px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border)'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {logos.map((l) => (
          <motion.img 
            key={l.alt}
            src={l.src} 
            alt={l.alt} 
            style={{ height: l.h + 'px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }}
            whileHover={{ filter: 'grayscale(0%)', opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </section>
  )
}
