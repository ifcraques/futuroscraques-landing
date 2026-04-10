import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const projects = [
  {
    img: 'https://static.wixstatic.com/media/3db4e0_4cf34c41f2774e429703a7b5e9756124~mv2.jpg',
    alt: 'Drible Certo 3x3',
    title: 'Drible Certo 3x3',
    desc: 'Reconhecido internacionalmente pela FIBA. O maior projeto de basquete 3x3 do Brasil com vitórias em torneios nacionais e internacionais, levando esperança e disciplina a milhares de jovens nas comunidades.',
  },
  {
    img: 'https://static.wixstatic.com/media/3db4e0_4beea58f86504c6889e7cc86814b91da~mv2.jpg',
    alt: 'Os Circuitos IFC',
    title: 'Os Circuitos IFC',
    desc: 'Mais de 30 etapas anuais de corridas de rua em todo o Brasil. Eventos massivos e inclusivos com área kids, shows ao vivo, ativações e premiações, promovendo saúde preventiva para todas as idades.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  const navigate = useNavigate()

  return (
    <div id="projects-section">
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Nossos Programas Principais
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Iniciativas que impactam de verdade, com resultados comprovados e histórias transformadoras que mudam vidas todos os dias.
        </motion.p>

        <motion.div
          className="projects-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="project-row"
              variants={cardVariants}
            >
              <div className="project-image">
                <img src={p.img} alt={p.alt} />
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <motion.button
                  className="project-link"
                  onClick={() => navigate('/projetos')}
                  whileHover={{ gap: '1.2rem', color: 'var(--accent-dark)' }}
                  transition={{ duration: 0.2 }}
                >
                  Conheça o Programa →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
