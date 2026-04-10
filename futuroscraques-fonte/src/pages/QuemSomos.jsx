import { motion } from 'framer-motion'

const values = [
  {
    icon: '🎯',
    title: 'Missão',
    desc: 'Transformar vidas de jovens em situação de vulnerabilidade social por meio do esporte, da educação e da cultura, promovendo inclusão, cidadania e desenvolvimento humano integral.',
  },
  {
    icon: '🔭',
    title: 'Visão',
    desc: 'Ser referência nacional e internacional em projetos sociais que utilizam o esporte como ferramenta de transformação social, formando cidadãos preparados para o futuro.',
  },
  {
    icon: '💎',
    title: 'Valores',
    desc: 'Ética, transparência, inclusão, excelência, comprometimento social, respeito à diversidade e valorização do potencial humano em cada jovem que atendemos.',
  },
]

const team = [
  { role: 'Professores de Educação Física', icon: '🏃' },
  { role: 'Advogados', icon: '⚖️' },
  { role: 'Médicos e Nutricionistas', icon: '🩺' },
  { role: 'Engenheiros e Administradores', icon: '📐' },
  { role: 'Psicólogos', icon: '🧠' },
  { role: 'Comunicadores e Designers', icon: '🎨' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function QuemSomos() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-pretitle">Conheça o Instituto</span>
          <h1>Quem Somos</h1>
          <p>
            O Instituto Futuros Craques é uma organização sem fins lucrativos que atua
            na transformação de vidas através do esporte e da educação desde 2005.
            Com uma equipe multidisciplinar de especialistas, levamos oportunidades
            reais a jovens em situação de vulnerabilidade social.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <h2 className="section-title">Missão, Visão e Valores</h2>
        <div className="values-grid">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="value-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
            >
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Nossa Equipe</h2>
        <p className="section-subtitle">
          Uma equipe multidisciplinar de profissionais comprometidos com a transformação social.
        </p>
        <div className="team-grid">
          {team.map((t, i) => (
            <motion.div
              key={t.role}
              className="team-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <span className="team-icon">{t.icon}</span>
              <span className="team-role">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
