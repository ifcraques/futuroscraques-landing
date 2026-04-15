import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const PARTICLE_COUNT = 40

export default function Particles() {
  const particles = useRef(
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 18,
      xRange: (Math.random() - 0.5) * 80,
      yRange: -(Math.random() * 60 + 20),
    }))
  ).current

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{
            y: [0, p.yRange, 0],
            x: [0, p.xRange, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
