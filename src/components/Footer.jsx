import { motion } from 'framer-motion'

const columns = [
  {
    title: 'Instituto',
    links: [
      { label: 'Quem Somos', url: '#' },
      { label: 'Missão & Visão', url: '#' },
      { label: 'Transparência Financeira', url: '#' },
      { label: 'Equipe & Carreiras', url: '#' }
    ],
  },
  {
    title: 'Programas',
    links: [
      { label: 'Drible Certo 3x3', url: '#' },
      { label: 'Circuitos IFC', url: '#' },
      { label: 'Trilhas de Aprendizagem', url: '#' },
      { label: 'Mentorias Profissionais', url: '#' }
    ],
  },
  {
    title: 'Conecte-se',
    links: [
      { label: '📘 Facebook', url: 'https://www.facebook.com/futuroscraquesoficial' },
      { label: '📷 Instagram', url: 'https://www.instagram.com/institutofuturoscraques/' },
      { label: '🎬 YouTube', url: 'https://www.youtube.com/@institutofuturoscraques' },
      { label: '💌 Newsletter', url: '#' }
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: '✉️ contato@futuroscraques.org', url: 'mailto:contato@futuroscraques.org' },
      { label: '📱 (11) 2532-5697', url: 'tel:+551125325697' },
      { label: '📍 Av. Tiradentes, 960 – Luz, SP', url: 'https://www.google.com/maps/search/Avenida+Tiradentes+960+Luz+São+Paulo+SP' },
      { label: '📅 Agendar Reunião', url: '#' }
    ],
  },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        {columns.map((col, i) => (
          <motion.div
            key={col.title}
            className="footer-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h4>{col.title}</h4>
            {col.links.map((item) => (
              <a key={item.label} href={item.url} target={item.url.startsWith('http') ? "_blank" : "_self"} rel="noreferrer">{item.label}</a>
            ))}
          </motion.div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2026 Instituto Futuros Craques. Transformando vidas através do esporte e educação. 💚⚽ | Desenvolvido com 💫 para um futuro melhor</p>
      </div>
    </motion.footer>
  )
}
