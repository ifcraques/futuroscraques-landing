import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

/* ── contador animado ── */
function useCounter(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])
  return count
}

function StatCounter({ value, label, suffix = '' }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const count = useCounter(value, 1800, started)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const display = value >= 1000
    ? count.toLocaleString('pt-BR')
    : count.toString()

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
        fontStyle: 'italic',
        color: 'rgba(255,255,255,0.9)',
        lineHeight: 1, marginBottom: '4px',
      }}>
        {display}{suffix}
      </div>
      <div style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: '0.6rem', letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.58)',
      }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '640px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* ── Vídeo fullscreen ── */}
      <video
        src={VIDEO_URL}
        autoPlay loop muted playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* ── Overlay escuro suave ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.2) 50%, rgba(8,8,8,0.55) 100%)',
        zIndex: 1,
      }} />

      {/* ── Conteúdo centrado ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(3rem,8vw,8rem) clamp(1.5rem,5vw,5rem)',
        paddingTop: '90px',
        paddingBottom: '90px',
      }}>

        {/* eyebrow */}
        <p
          className="animate-fade-rise"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(0.55rem,0.75vw,0.7rem)',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.70)',
            marginBottom: '1.8rem',
          }}
        >
          Instituto Futuros Craques — Brasil, 2026
        </p>

        {/* heading principal */}
        <h1
          className="animate-fade-rise"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.8rem,7.5vw,7.4rem)',
            lineHeight: 1,
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            maxWidth: '900px',
            marginBottom: '2rem',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>Formando </span>
          <span style={{ color: '#ffffff' }}>futuros</span>
          <br />
          <span style={{ color: '#ffffff' }}>craques </span>
          <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.35)' }}>do Brasil.</em>
        </h1>

        {/* subtexto */}
        <p
          className="animate-fade-rise-delay"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(0.85rem,1.1vw,1rem)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.42)',
            lineHeight: 1.8,
            maxWidth: '520px',
            marginBottom: '3rem',
          }}
        >
          <strong style={{ fontWeight: 700, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase' }}>Esporte</strong>
          {' e '}
          <strong style={{ fontWeight: 700, color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase' }}>Educação</strong>
          {' como ferramentas de transformação social. Mais de 40.000 crianças e jovens impactados em 30+ cidades do Brasil.'}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-rise-delay-2"
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link to="/comoapoiar" style={{ textDecoration: 'none' }}>
            <button
              className="liquid-glass"
              style={{
                borderRadius: '9999px',
                padding: '14px 48px',
                fontSize: '0.8rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#fff',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                background: 'rgba(22,163,74,0.25)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Apoie Agora
            </button>
          </Link>

          <Link to="/projetos" style={{ textDecoration: 'none' }}>
            <button
              className="liquid-glass"
              style={{
                borderRadius: '9999px',
                padding: '14px 36px',
                fontSize: '0.8rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Ver Projetos
            </button>
          </Link>
        </div>

        {/* stats row */}
        <div
          className="animate-fade-rise-delay-3"
          style={{
            marginTop: '4rem',
            display: 'flex',
            gap: 'clamp(2rem,5vw,4rem)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <StatCounter value={40000} suffix="+" label="jovens impactados" />
          <StatCounter value={30}    suffix="+" label="cidades alcançadas" />
          <StatCounter value={10}    suffix="+" label="anos de atuação" />
        </div>

      </div>

      {/* ── Indicador de scroll ── */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}>
        <div style={{
          width: '1px',
          height: '44px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25))',
          animation: 'fade-rise 2s ease-in-out infinite alternate',
        }} />
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.5rem',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.48)',
          textTransform: 'uppercase',
        }}>
          Scroll
        </span>
      </div>

    </section>
  )
}
