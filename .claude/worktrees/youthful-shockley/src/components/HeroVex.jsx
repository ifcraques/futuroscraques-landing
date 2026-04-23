import { useState, useEffect } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

const CHAR_DELAY = 30 // ms per character
const HEADING_START = 200 // ms before animation begins
const HEADING_LINES = ['Shaping tomorrow', 'with vision and action.']

/* ── FadeIn wrapper ── */
function FadeIn({ delay = 0, duration = 1000, children, className = '' }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ── Animated heading — character by character ── */
function AnimatedHeading({ lines, className = '' }) {
  const [visibleChars, setVisibleChars] = useState(0)

  // count total chars across all lines
  const totalChars = lines.reduce((acc, l) => acc + l.length, 0)

  useEffect(() => {
    const start = setTimeout(() => {
      let idx = 0
      const tick = () => {
        idx += 1
        setVisibleChars(idx)
        if (idx < totalChars) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, HEADING_START)
    return () => clearTimeout(start)
  }, [totalChars])

  let globalIdx = 0
  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIdx) => {
        const lineStart = globalIdx
        globalIdx += line.length
        return (
          <span key={lineIdx} style={{ display: 'block' }}>
            {line.split('').map((char, charIdx) => {
              const absoluteIdx = lineStart + charIdx
              const delay = HEADING_START + absoluteIdx * CHAR_DELAY
              const shown = visibleChars > absoluteIdx
              return (
                <span
                  key={charIdx}
                  style={{
                    display: 'inline-block',
                    opacity: shown ? 1 : 0,
                    transform: shown ? 'translateX(0)' : 'translateX(-18px)',
                    transition: `opacity 500ms ${delay}ms, transform 500ms ${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}

/* ── Main hero ── */
export default function HeroVex() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col overflow-hidden">
      {/* ── video background ── */}
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* ── content layer ── */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ── navbar ── */}
        <div className="px-6 md:px-12 lg:px-16 pt-6">
          <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
            {/* logo */}
            <span className="text-2xl font-semibold tracking-tight text-white">VEX</span>

            {/* center links */}
            <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
              {['Story', 'Investing', 'Building', 'Advisory'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* cta */}
            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
              Start a Chat
            </button>
          </nav>
        </div>

        {/* ── hero content ── */}
        <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">

            {/* left column */}
            <div>
              <AnimatedHeading
                lines={HEADING_LINES}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white"
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                    Start a Chat
                  </button>
                  <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200">
                    Explore Now
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* right column — tag */}
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Investing. Building. Advisory.
                </span>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  )
}
