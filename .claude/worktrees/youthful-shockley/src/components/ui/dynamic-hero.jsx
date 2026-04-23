import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5V19L19 12L8 5Z" />
  </svg>
)

/**
 * DynamicHero — seta animada seguindo o mouse apontando para o botão CTA.
 * Aparece apenas quando o componente entra na viewport (IntersectionObserver).
 *
 * Props:
 *   heading, tagline, buttonText, buttonTo, imageUrl, videoUrl, active
 */
export function DynamicHero({
  heading = 'Junte-se a Esta Transformação',
  tagline = 'Seja um parceiro, voluntário ou apoiador. Cada contribuição cria oportunidades reais para jovens talentos e comunidades inteiras.',
  buttonText = 'Quero Contribuir Agora 💚',
  buttonTo = '/comoapoiar',
  imageUrl,
  videoUrl,
  active = true,
}) {
  const canvasRef    = useRef(null)
  const targetRef    = useRef(null)
  const mousePosRef  = useRef({ x: null, y: null })
  const ctxRef       = useRef(null)
  const rafRef       = useRef(null)
  const videoRef     = useRef(null)
  const [showVideo, setShowVideo] = useState(false)

  // Cor da seta — usa o branco (seção tem fundo escuro)
  const arrowColor = { r: 255, g: 255, b: 255 }

  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !targetRef.current || !ctxRef.current) return
    const ctx = ctxRef.current
    const { x: x0, y: y0 } = mousePosRef.current
    if (x0 === null || y0 === null) return

    const rect = targetRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    const a  = Math.atan2(cy - y0, cx - x0)
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 12)
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 12)

    const midX    = (x0 + x1) / 2
    const midY    = (y0 + y1) / 2
    const offset  = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5)
    const t       = Math.max(-1, Math.min(1, (y0 - y1) / 200))
    const controlX = midX
    const controlY = midY + offset * t

    const r = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2)
    const opacity = Math.min(1.0, (r - Math.max(rect.width, rect.height) / 2) / 500)

    ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`
    ctx.lineWidth = 2

    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.quadraticCurveTo(controlX, controlY, x1, y1)
    ctx.setLineDash([10, 5])
    ctx.stroke()
    ctx.restore()

    // arrowhead
    const angle = Math.atan2(y1 - controlY, x1 - controlX)
    const headLength = 13
    ctx.beginPath()
    ctx.setLineDash([])
    ctx.moveTo(x1, y1)
    ctx.lineTo(x1 - headLength * Math.cos(angle - Math.PI / 6), y1 - headLength * Math.sin(angle - Math.PI / 6))
    ctx.moveTo(x1, y1)
    ctx.lineTo(x1 - headLength * Math.cos(angle + Math.PI / 6), y1 - headLength * Math.sin(angle + Math.PI / 6))
    ctx.stroke()
  }, [])

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    ctxRef.current = canvas.getContext('2d')

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    const onMove = (e) => { mousePosRef.current = { x: e.clientX, y: e.clientY } }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    resize()

    const loop = () => {
      const ctx = ctxRef.current
      if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawArrow()
      rafRef.current = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [active, drawArrow])

  // vídeo
  useEffect(() => {
    const el = videoRef.current
    if (!el || !videoUrl) return
    const onEnd = () => { setShowVideo(false); el.currentTime = 0 }
    if (showVideo) {
      el.play().catch(() => setShowVideo(false))
      el.addEventListener('ended', onEnd)
    } else {
      el.pause()
    }
    return () => el.removeEventListener('ended', onEnd)
  }, [showVideo, videoUrl])

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Conteúdo textual */}
      <div style={{ textAlign: 'center', padding: '0 1rem' }}>
        <h2 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
          fontWeight: 900,
          color: '#ffffff',
          marginBottom: '1rem',
          position: 'relative', zIndex: 2,
        }}>
          {heading}
        </h2>

        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
          color: 'rgba(255,255,255,0.75)',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.75,
          position: 'relative', zIndex: 2,
        }}>
          {tagline}
        </p>

        <Link to={buttonTo} style={{ textDecoration: 'none', position: 'relative', zIndex: 2 }}>
          <button
            ref={targetRef}
            style={{
              padding: '14px 48px',
              borderRadius: '9999px',
              border: '2px solid rgba(255,255,255,0.8)',
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(0.78rem, 0.9vw, 0.88rem)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              transition: 'background 0.25s, border-color 0.25s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Preview de imagem/vídeo (opcional) */}
      {(imageUrl || videoUrl) && (
        <div style={{ marginTop: '3rem', maxWidth: '600px', margin: '3rem auto 0', padding: '0 1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '2rem', padding: '4px' }}>
            <div style={{
              position: 'relative', height: '280px', borderRadius: '1.75rem',
              background: 'rgba(0,0,0,0.3)', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Preview"
                  style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', opacity: showVideo ? 0 : 1, transition: 'opacity 0.3s',
                  }}
                />
              )}
              {videoUrl && (
                <video
                  ref={videoRef}
                  src={videoUrl}
                  muted
                  playsInline
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    opacity: showVideo ? 1 : 0, transition: 'opacity 0.3s',
                  }}
                />
              )}
              {!showVideo && videoUrl && (
                <button
                  onClick={() => setShowVideo(true)}
                  style={{
                    position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 20,
                    padding: '10px', background: 'rgba(255,255,255,0.2)',
                    border: 'none', borderRadius: '50%', cursor: 'pointer',
                    color: '#fff', backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  aria-label="Play video"
                >
                  <PlayIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Canvas da seta — só renderiza quando active */}
      {active && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed', inset: 0,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />
      )}
    </div>
  )
}

export default DynamicHero
