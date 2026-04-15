import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { DynamicHero } from './ui/dynamic-hero'

export default function CTA() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Ativa o canvas da seta só quando a seção está na viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={sectionRef}
      className="cta-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <DynamicHero
        heading="Junte-se a Esta Transformação"
        tagline="Seja um parceiro, voluntário ou apoiador. Cada contribuição cria oportunidades reais para jovens talentos e comunidades inteiras. Sua doação impacta vidas."
        buttonText="Quero Contribuir Agora 💚"
        buttonTo="/comoapoiar"
        active={isVisible}
      />
    </motion.div>
  )
}
