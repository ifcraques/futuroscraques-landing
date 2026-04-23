import { motion } from 'framer-motion'

export default function Sponsors() {

  /* ── TIER 1 — 4 principais ───────────────────────────────── */
  const tier1 = [
    { src: '/logos/uol_logo.png',    alt: 'UOL',    url: 'https://www.uol.com.br' },
    { src: '/logos/ecolab_logo.png', alt: 'Ecolab', url: 'https://www.ecolab.com.br' },
    { src: '/logos/havan_logo.png',  alt: 'Havan',  url: 'https://www.havan.com.br' },
    { src: '/logos/unipar_logo.png', alt: 'Unipar', url: 'https://www.unipar.com' },
  ]

  /* ── TIER 2 ──────────────────────────────────────────────── */
  const tier2 = [
    { src: '/logos/NTS_logo.png',       alt: 'NTS',              url: 'https://www.nts-br.com.br' },
    { src: '/logos/B3_Logo.png',        alt: 'B3',               url: 'https://www.b3.com.br' },
    { src: '/logos/caixa_logo.png',     alt: 'Caixa Residencial',url: 'https://www.caixaresidencial.com.br' },
    { src: '/logos/sankofort_logo.png', alt: 'Sankonfort', url: 'https://www.sankonfort.com.br/' },
    { src: '/logos/estácio_logo.png',   alt: 'Estácio',    url: 'https://www.estacio.br' },
    { src: '/logos/engemet_logo.png',   alt: 'Engemet',    url: 'https://www.engemet.com.br/' },
    { src: '/logos/freixenet_logo.png', alt: 'Freixenet',  url: 'https://www.freixenet.com.br/' },
    { src: '/logos/metalinox_logo.png', alt: 'Metalinox',        url: 'https://www.metalinox.com.br' },
  ]

  /* ── TIER 3 ──────────────────────────────────────────────── */
  const tier3 = [
    { src: '/logos/cocacola_logo.png',  alt: 'Coca-Cola',       url: 'https://www.coca-cola.com.br' },
    { src: '/logos/caedu_logo.png',     alt: 'Caedu',           url: 'https://www.caedu.com.br' },
    { src: '/logos/citrosuco_logo.png', alt: 'Citrosuco',       url: 'https://www.citrosuco.com.br' },
    { src: '/logos/gtech_logo.png',     alt: 'GTech',           url: 'https://accumed.com.br/' },
    { src: '/logos/panco_logo.png',     alt: 'Panco',           url: 'https://www.panco.com.br' },
    { src: '/logos/SABESP_logo.png',    alt: 'Sabesp',          url: 'https://www.sabesp.com.br' },
    { src: '/logos/stella_logo.png',    alt: 'Stella Artois',   url: null },
    { src: '/logos/tirol_logo.png',     alt: 'Tirol',           url: 'https://www.tirol.com.br' },
    { src: '/logos/aes_logo.png',       alt: 'AES Eletropaulo', url: 'https://www.aesbrasil.com.br' },
    { src: '/logos/decathlon_logo.png', alt: 'Decathlon',       url: 'https://www.decathlon.com.br' },
    { src: '/logos/guarani_logo.png',   alt: 'Guarani',         url: 'https://guaranimaisqueacucar.com.br/' },
  ]

  /* ── APOIO ───────────────────────────────────────────────── */
  const apoio = [
    { src: '/logos/unip_logo.png',     alt: 'UNIP', url: 'https://www.unip.br/' },
    { src: '/logos/NAR_logo_dark.png', alt: 'NAR',  url: 'https://www.narsp.com.br/', noGrayscale: true },
  ]

  /* ── REALIZAÇÃO ──────────────────────────────────────────── */
  const realizacao = [
    { src: '/logos/realizacao/sec-esporte-lazer.png', alt: 'SEME — Secretaria de Esportes e Lazer de SP', url: 'https://www.capital.sp.gov.br/esportes' },
    { src: '/logos/realizacao/SEESP.png',             alt: 'Governo do Estado de São Paulo',              url: 'https://www.saopaulo.sp.gov.br' },
    { src: '/logos/realizacao/seesp-lei.png',         alt: 'Secretaria de Esportes + Lei',                url: 'https://www.gov.br/esporte' },
    { src: '/logos/realizacao/CBC.png',               alt: 'CBC — Comitê Brasileiro de Clubes',           url: 'https://www.cbb.com.br' },
  ]

  /* ── MINISTÉRIO (destaque rodapé) ───────────────────────── */
  const ministerio = { src: '/logos/realizacao/mesp-e-lei.png', alt: 'Ministério do Esporte + Lei de Incentivo', url: 'https://www.gov.br/esporte' }

  /* ── Componente de logo ──────────────────────────────────── */
  const LogoItem = ({ src, alt, url, h = 70, noGrayscale = false }) => {
    const img = (
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          height: h + 'px',
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
          filter: noGrayscale ? 'none' : 'grayscale(100%)',
          opacity: noGrayscale ? 1 : 0.65,
        }}
        whileHover={{ filter: 'grayscale(0%)', opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    )
    const wrapper = (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '28px 42px',
      }}>
        {img}
      </div>
    )
    return url
      ? <a href={url} target="_blank" rel="noopener noreferrer" title={alt} style={{ display: 'flex' }}>{wrapper}</a>
      : wrapper
  }

  /* ── Linha de logos sem linhas ──────────────────────────── */
  const LogoRow = ({ items, h = 70, cols }) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: cols
        ? `repeat(${cols}, 1fr)`
        : `repeat(${items.length}, 1fr)`,
    }}>
      {items.map((l) => (
        <div key={l.alt} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 0,
          overflow: 'hidden',
        }}>
          <LogoItem {...l} h={h} />
        </div>
      ))}
    </div>
  )

  const SectionLabel = ({ label }) => (
    <p style={{
      textAlign: 'center',
      color: 'var(--accent)',
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      fontSize: '0.7rem',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      margin: '2.5rem 0 0',
    }}>{label}</p>
  )

  return (
    <section id="sponsors-section" className="section" style={{ padding: '7rem 0' }}>
      <motion.h2
        className="section-title"
        style={{ textAlign: 'center', color: '#0d1f2d' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nossos Parceiros
      </motion.h2>
      <motion.p
        className="section-subtitle"
        style={{ textAlign: 'center', margin: '0 auto 3.5rem', color: '#5a6a75' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Empresas e instituições que acreditam e investem na transformação através do esporte.
      </motion.p>

      <motion.div
        style={{
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.07)',
          border: '1px solid var(--border)',
          maxWidth: '1400px',
          width: 'calc(100% - 4rem)',
          margin: '0 auto',
          overflow: 'hidden',
          paddingBottom: '3rem',
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        {/* ── PATROCINADORES ── */}
        <SectionLabel label="Patrocinadores" />
        <LogoRow items={tier1}             h={110} />
        <LogoRow items={tier2.slice(0, 4)} h={88} />
        <LogoRow items={tier2.slice(4, 8)} h={88} />
        <LogoRow items={tier3.slice(0, 4)} h={75} />
        <LogoRow items={tier3.slice(4, 8)} h={90} />
        <LogoRow items={tier3.slice(8)}    h={75} />

        {/* ── APOIO — centralizado ── */}
        <SectionLabel label="Apoio" />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0', flexWrap: 'wrap', padding: '0 2rem' }}>
          {apoio.map((l) => (
            <div key={l.alt} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LogoItem {...l} h={70} />
            </div>
          ))}
        </div>

        {/* ── REALIZAÇÃO — 4 logos ── */}
        <SectionLabel label="Realização" />
        <LogoRow items={realizacao} cols={4} h={210} />

        {/* ── MINISTÉRIO — destaque ── */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 4rem 2rem' }}>
          {ministerio.url
            ? <a href={ministerio.url} target="_blank" rel="noopener noreferrer" title={ministerio.alt}>
                <motion.img
                  src={ministerio.src}
                  alt={ministerio.alt}
                  loading="lazy"
                  style={{ height: '140px', width: 'auto', maxWidth: '900px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.65, display: 'block' }}
                  whileHover={{ filter: 'grayscale(0%)', opacity: 1, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            : <motion.img
                src={ministerio.src}
                alt={ministerio.alt}
                loading="lazy"
                style={{ height: '140px', width: 'auto', maxWidth: '900px', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.65, display: 'block' }}
                whileHover={{ filter: 'grayscale(0%)', opacity: 1, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
          }
        </div>

      </motion.div>
    </section>
  )
}
