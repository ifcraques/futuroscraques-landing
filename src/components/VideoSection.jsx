import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section id="video-section" className="section" style={{ padding: '6rem 2rem 2rem', textAlign: 'center' }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Nosso Trabalho em Ação
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ margin: '0 auto 3rem' }}
      >
        Acompanhe a energia e a transformação que levamos para as quadras e pistas do Brasil.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
          height: 0,
          borderRadius: '25px',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
          border: '1px solid var(--border)',
          background: '#000'
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src="https://www.youtube.com/embed/oHg5SJYRHA0?rel=0&modestbranding=1"
          title="Instituto Futuros Craques Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  )
}
