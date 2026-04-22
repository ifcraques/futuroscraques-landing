import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ─── Ícones inline ────────────────────────────────────────────────────────────

// Ícones em estilo "logo oficial" — filled, reconhecíveis
const InstagramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)
const YouTubeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)
const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)
const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const HeartIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#16a34a" stroke="none" style={{ display: 'inline', verticalAlign: 'middle', marginBottom: '1px' }}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
)

// ─── Dados ────────────────────────────────────────────────────────────────────

const columns = [
  {
    title: 'Instituto',
    links: [
      { label: 'Quem Somos', to: '/quemsomos' },
      { label: 'Missão & Visão', to: '/quemsomos' },
      { label: 'Transparência', to: '/transparencia' },
      { label: 'Equipe & Carreiras', to: '/contato' },
    ],
  },
  {
    title: 'Programas',
    links: [
      { label: 'Formação Esportiva', to: '/projetos' },
      { label: 'Esporte para Toda a Vida', to: '/projetos' },
      { label: 'Excelência Esportiva', to: '/projetos' },
      { label: 'Ver Todos os Projetos', to: '/projetos' },
    ],
  },
  {
    title: 'Apoie',
    links: [
      { label: 'Como Apoiar', to: '/comoapoiar' },
      { label: 'Seja Parceiro', to: '/comoapoiar' },
      { label: 'Doações', to: '/comoapoiar' },
      { label: 'Voluntariado', to: '/contato' },
    ],
  },
  {
    title: 'Conteúdo',
    links: [
      { label: 'Notícias', to: '/noticias' },
      { label: 'Projetos', to: '/projetos' },
      { label: 'Contato', to: '/contato' },
      { label: 'Newsletter', to: '/contato' },
    ],
  },
]

// Ícones sociais (apenas redes) — com cores de marca
const socialIcons = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/institutofuturoscraques/',
    icon: <InstagramIcon />,
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.12)',
    border: 'rgba(225,48,108,0.35)',
    external: true,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/futuroscraquesoficial',
    icon: <FacebookIcon />,
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.12)',
    border: 'rgba(24,119,242,0.35)',
    external: true,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@institutofuturoscraques',
    icon: <YouTubeIcon />,
    color: '#FF0000',
    bg: 'rgba(255,0,0,0.12)',
    border: 'rgba(255,0,0,0.35)',
    external: true,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511939515008',
    icon: <WhatsAppIcon />,
    color: '#25d366',
    bg: 'rgba(37,211,102,0.12)',
    border: 'rgba(37,211,102,0.35)',
    external: true,
  },
  {
    label: 'E-mail',
    href: 'mailto:contato@futuroscraques.org',
    icon: <MailIcon />,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.12)',
    border: 'rgba(14,165,233,0.35)',
    external: false,
  },
]

// ─── Estilos inline (igual ao padrão do projeto) ─────────────────────────────

const S = {
  footer: {
    background: '#0f172a',
    color: '#ffffff',
    padding: '5rem 2rem 2rem',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Outfit', sans-serif",
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(22,163,74,0.6), rgba(0,162,232,0.4), transparent)',
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  brand: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.2rem',
    marginBottom: '3.5rem',
  },
  logo: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #16a34a, #0ea5e9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 900,
    fontSize: '14px',
    color: 'white',
    letterSpacing: '0.05em',
    flexShrink: 0,
    marginTop: '2px',
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  brandName: {
    fontWeight: 800,
    fontSize: '1.05rem',
    color: '#ffffff',
    lineHeight: 1,
  },
  brandDesc: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.5)',
    lineHeight: 1.6,
    maxWidth: '460px',
  },
  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.08)',
    margin: '0 0 3rem 0',
  },
  nav: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '2.5rem',
    marginBottom: '3.5rem',
  },
  colTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 800,
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '1.2rem',
    background: 'linear-gradient(135deg, #16a34a, #0ea5e9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  colLink: {
    color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.75rem',
    fontSize: '0.88rem',
    transition: 'color 0.25s ease, padding-left 0.25s ease',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.6rem',
    color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none',
    fontSize: '0.82rem',
    marginBottom: '0.85rem',
    lineHeight: 1.5,
    transition: 'color 0.2s ease',
  },
  contactIcon: {
    flexShrink: 0,
    marginTop: '1px',
    opacity: 0.7,
  },
  bottomDivider: {
    height: '1px',
    background: 'rgba(255,255,255,0.08)',
    margin: '0 0 2.5rem 0',
  },
  socialBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
  },
  copyright: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.35)',
    fontSize: '0.8rem',
    lineHeight: 1.8,
  },
}

// ─── Componente ───────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <motion.footer
      style={S.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
    >
      {/* linha decorativa no topo */}
      <div style={S.topLine} aria-hidden="true" />

      <div style={S.inner}>

        {/* ── Marca + descrição ── */}
        <motion.div
          style={S.brand}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link to="/">
            <img
              src="/ifc-logo.jpeg"
              alt="Instituto Futuros Craques"
              style={{ height: '72px', width: 'auto', display: 'block', flexShrink: 0 }}
            />
          </Link>
          <div style={S.brandText}>
            <span style={S.brandName}>Instituto Futuros Craques</span>
            <span style={S.brandDesc}>
              Transformamos vidas através do esporte. Trabalhamos para garantir que crianças
              e jovens tenham acesso à formação esportiva de qualidade, ao desenvolvimento
              humano e às ferramentas para exercer sua cidadania com dignidade.
            </span>
          </div>
        </motion.div>

        <div style={S.divider} />

        {/* ── Colunas de navegação + contato ── */}
        <motion.div
          style={S.nav}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {columns.map((col) => (
            <div key={col.title}>
              <p style={S.colTitle}>{col.title}</p>
              {col.links.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  style={S.colLink}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.paddingLeft = '0' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Coluna de contato */}
          <div>
            <p style={S.colTitle}>Contato</p>
            <a
              href="mailto:contato@futuroscraques.org"
              style={S.contactItem}
              onMouseEnter={e => e.currentTarget.style.color = '#0ea5e9'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >
              <span style={S.contactIcon}><MailIcon /></span>
              contato@futuroscraques.org
            </a>
            <a
              href="https://wa.me/5511939515008"
              target="_blank"
              rel="noreferrer"
              style={S.contactItem}
              onMouseEnter={e => e.currentTarget.style.color = '#25d366'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >
              <span style={S.contactIcon}><WhatsAppIcon /></span>
              (11) 9 3951-5008
            </a>
            <a
              href="https://www.google.com/maps/search/Avenida+Tiradentes+960+Luz+São+Paulo+SP"
              target="_blank"
              rel="noreferrer"
              style={S.contactItem}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >
              <span style={S.contactIcon}><PinIcon /></span>
              Av. Tiradentes, 960 – Luz, São Paulo/SP
            </a>
          </div>
        </motion.div>

        <div style={S.bottomDivider} />

        {/* ── Redes sociais — 5 ícones em linha única ── */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                style={{
                  ...S.socialBtn,
                  color: s.color,
                  borderColor: s.border,
                  background: s.bg,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = s.color
                  e.currentTarget.style.background = s.color
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}55`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = s.color
                  e.currentTarget.style.borderColor = s.border
                  e.currentTarget.style.background = s.bg
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Copyright ── */}
        <div style={S.copyright}>
          <p>© {new Date().getFullYear()} Instituto Futuros Craques. Transformando vidas através do esporte e educação. 💚⚽</p>
          <p style={{ marginTop: '0.3rem' }}>
            Desenvolvido com <HeartIcon /> para um futuro melhor
          </p>
        </div>

      </div>
    </motion.footer>
  )
}
