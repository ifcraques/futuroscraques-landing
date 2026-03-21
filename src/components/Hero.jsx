import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
}

function useCounter(target, duration = 2500, active = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const increment = target / (duration / 16)
    let current = 0
    const tick = () => {
      current += increment
      if (current >= target) {
        setValue(target)
      } else {
        setValue(Math.floor(current))
        requestAnimationFrame(tick)
      }
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return value
}

const stats = [
  { count: 1200, label: 'Jovens Impactados', suffix: '' },
  { count: 48, label: 'Projetos Entregues', suffix: '' },
  { count: 30, label: 'Cidades Alcançadas', suffix: '+' },
]

function StatItem({ count, label, suffix, active }) {
  const val = useCounter(count, 2500, active)
  return (
    <motion.div
      className="stat-item"
      whileHover={{ y: -5, borderColor: 'var(--primary)', boxShadow: '0 15px 40px rgba(22,163,74,0.15)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="stat-number">
        {val.toLocaleString('pt-BR')}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const [counterActive, setCounterActive] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  useEffect(() => {
    const timer = setTimeout(() => setCounterActive(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <section className="hero" ref={ref} id="hero">
        <motion.div
          className="hero-container"
          style={{ y: bgY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content">
            <motion.span className="hero-pretitle" variants={fadeUp}>
              Conheça o Instituto
            </motion.span>
            <motion.h1 variants={fadeUp}>
              Transformando<br/>Vidas Através<br/>do Esporte e da<br/>Educação
            </motion.h1>
            <motion.p variants={fadeUp}>
              Inspiramos e preparamos jovens talentos. Muito mais que projetos sociais, construímos caminhos sólidos para o futuro, levando esportes e cidadania a quem mais precisa.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <motion.button
                className="cta-btn"
                whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.96 }}
              >
                Faça uma Doação
              </motion.button>
              <motion.a
                href="#projects"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects-section')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
              >
                Nossos Projetos
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="stats-bar">
        <div className="stats-row">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={counterActive} />
          ))}
        </div>
      </section>
    </>
  )
}
