import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STYLES = `
  .proj-grain {
    position: absolute; inset: 0; pointer-events: none; z-index: 5;
    opacity: 0.04; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>');
  }
  .proj-premium-card {
    background: linear-gradient(145deg, #162C6D 0%, #0A101D 100%);
    box-shadow:
      0 60px 120px -20px rgba(0,0,0,0.95),
      0 30px 60px -20px rgba(0,0,0,0.8),
      inset 0 1px 2px rgba(255,255,255,0.18),
      inset 0 -2px 4px rgba(0,0,0,0.8);
    border: 1px solid rgba(255,255,255,0.05);
  }
  .proj-card-sheen {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 2;
    background: radial-gradient(600px circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(255,255,255,0.05) 0%, transparent 40%);
    mix-blend-mode: screen;
  }
  .proj-silver-text {
    background: linear-gradient(180deg, #FFF 0%, #A1A1AA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.8)) drop-shadow(0 4px 8px rgba(0,0,0,0.5));
  }
  .proj-outer-title {
    color: #111827;
    text-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
  .proj-grid-bg {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }
`

const programs = [
  {
    img: 'https://static.wixstatic.com/media/3db4e0_4cf34c41f2774e429703a7b5e9756124~mv2.jpg',
    emoji: '🏀',
    badge: 'Reconhecido pela FIBA',
    title: 'Drible Certo 3x3',
    desc: 'Reconhecido internacionalmente pela FIBA. O maior projeto de basquete 3x3 do Brasil com vitórias em torneios nacionais e internacionais, levando esperança e disciplina a milhares de jovens nas comunidades.',
    metric: '40.000+',
    metricLabel: 'Jovens Impactados',
    accent: '#3B82F6',
  },
  {
    img: 'https://static.wixstatic.com/media/3db4e0_4beea58f86504c6889e7cc86814b91da~mv2.jpg',
    emoji: '🏃',
    badge: '+30 etapas por ano',
    title: 'Os Circuitos IFC',
    desc: 'Mais de 30 etapas anuais de corridas de rua em todo o Brasil. Eventos massivos e inclusivos com área kids, shows ao vivo e premiações, promovendo saúde preventiva para todas as idades.',
    metric: '30+',
    metricLabel: 'Etapas Anuais',
    accent: '#10B981',
  },
  {
    img: 'https://static.wixstatic.com/media/3db4e0_7d1d002f79f049658ddf41cff2a01a02~mv2.jpg',
    emoji: '🌱',
    badge: 'Formação de líderes',
    title: 'Trilhas de Cidadania',
    desc: 'Workshops em colaboração, comunicação e liderança ética comunitária, preparando jovens talentos para o mercado de trabalho moderno e formando verdadeiros cidadãos multiplicadores.',
    metric: '500+',
    metricLabel: 'Líderes Formados',
    accent: '#8B5CF6',
  },
]

export default function Projects() {
  const containerRef = useRef(null)
  const cardRef = useRef(null)
  const rafRef = useRef(0)

  // Mouse sheen effect on the card
  useEffect(() => {
    const onMove = (e) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return
        const r = cardRef.current.getBoundingClientRect()
        cardRef.current.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
        cardRef.current.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Cinematic scroll timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states — everything hidden
      gsap.set('.proj-heading', { autoAlpha: 0, y: 50 })
      gsap.set('.proj-card', { autoAlpha: 0, y: 100, scale: 0.94 })
      gsap.set('.proj-slide', { autoAlpha: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=4500',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      })

      // 1. Section heading fades in
      tl.to('.proj-heading', { autoAlpha: 1, y: 0, duration: 1.5, ease: 'expo.out' })

      // 2. Heading exits, card rises from below
      tl.to('.proj-heading', { autoAlpha: 0, y: -40, duration: 1, ease: 'power2.in' }, '+=0.8')
      tl.to('.proj-card', { autoAlpha: 1, y: 0, scale: 1, duration: 2, ease: 'expo.out' }, '<0.4')

      // 3. Program 1 slides in from right
      tl.fromTo(
        '.proj-slide-0',
        { autoAlpha: 0, x: 80, scale: 0.97 },
        { autoAlpha: 1, x: 0, scale: 1, duration: 1.5, ease: 'expo.out' },
        '-=0.6'
      )

      // 4. Hold → slide 1 exits left, slide 2 enters right
      tl.to({}, { duration: 2 })
      tl.to('.proj-slide-0', { autoAlpha: 0, x: -80, duration: 0.8, ease: 'power3.in' })
      tl.fromTo(
        '.proj-slide-1',
        { autoAlpha: 0, x: 80, scale: 0.97 },
        { autoAlpha: 1, x: 0, scale: 1, duration: 1.5, ease: 'expo.out' },
        '<0.2'
      )

      // 5. Hold → slide 2 exits left, slide 3 enters right
      tl.to({}, { duration: 2 })
      tl.to('.proj-slide-1', { autoAlpha: 0, x: -80, duration: 0.8, ease: 'power3.in' })
      tl.fromTo(
        '.proj-slide-2',
        { autoAlpha: 0, x: 80, scale: 0.97 },
        { autoAlpha: 1, x: 0, scale: 1, duration: 1.5, ease: 'expo.out' },
        '<0.2'
      )

      // 6. Hold → card exits upward
      tl.to({}, { duration: 2 })
      tl.to('.proj-slide-2', { autoAlpha: 0, scale: 0.95, duration: 0.8, ease: 'power2.in' })
      tl.to('.proj-card', { y: -(window.innerHeight + 300), duration: 1.5, ease: 'power3.in' }, '<0.3')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      id="projects-section"
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[#f8f7f4]"
    >
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Subtle grid background */}
      <div className="proj-grid-bg absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />

      {/* Section heading (background layer, fades out when card rises) */}
      <div className="proj-heading absolute z-10 flex flex-col items-center text-center px-6 pointer-events-none">
        <p className="text-sm font-bold tracking-[0.25em] uppercase text-blue-600 mb-4">
          O Que Fazemos
        </p>
        <h2 className="proj-outer-title text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-5">
          Nossos<br />Programas
        </h2>
        <p className="text-neutral-500 text-lg max-w-md leading-relaxed">
          Iniciativas que impactam de verdade, com resultados comprovados e histórias que mudam vidas.
        </p>
      </div>

      {/* Premium deep-blue card (foreground layer) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div
          ref={cardRef}
          className="proj-card proj-premium-card relative overflow-hidden w-[92vw] md:w-[88vw] h-[88vh] md:h-[82vh] rounded-[28px] md:rounded-[40px]"
        >
          <div className="proj-card-sheen" aria-hidden="true" />
          <div className="proj-grain" aria-hidden="true" />

          {/* Three program slides, stacked on top of each other */}
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={`proj-slide proj-slide-${i} absolute inset-0 flex flex-col lg:flex-row`}
            >
              {/* LEFT: Photo */}
              <div className="relative w-full lg:w-[46%] h-[38%] lg:h-full flex-shrink-0">
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gradient fade into the card background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A101D] lg:hidden" />
                <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-transparent to-[#0A101D]" />
                {/* Photo badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20">
                  <span className="text-base" aria-hidden="true">{prog.emoji}</span>
                  <span className="text-white text-xs font-bold tracking-wide">{prog.badge}</span>
                </div>
              </div>

              {/* RIGHT: Text content */}
              <div className="flex-1 flex flex-col justify-center px-6 py-4 lg:py-0 lg:pr-14 lg:pl-8 z-10">
                {/* Program counter */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl" aria-hidden="true">{prog.emoji}</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span
                    className="text-[11px] font-black tracking-[0.2em] uppercase"
                    style={{ color: prog.accent }}
                  >
                    {String(i + 1).padStart(2, '0')} / {programs.length}
                  </span>
                </div>

                {/* Title */}
                <h3 className="proj-silver-text text-3xl md:text-4xl lg:text-[3.2rem] font-black tracking-tight leading-none mb-4">
                  {prog.title}
                </h3>

                {/* Description */}
                <p className="text-blue-100/60 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                  {prog.desc}
                </p>

                {/* Impact metric */}
                <div className="flex items-baseline gap-3 mb-7">
                  <span className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none">
                    {prog.metric}
                  </span>
                  <span className="text-blue-200/50 text-[11px] font-black uppercase tracking-[0.15em]">
                    {prog.metricLabel}
                  </span>
                </div>

                {/* Progress dots */}
                <div className="flex gap-2 mb-7">
                  {programs.map((_, idx) => (
                    <div
                      key={idx}
                      className="h-[3px] rounded-full transition-all duration-300"
                      style={{
                        width: idx === i ? '2rem' : '0.5rem',
                        background: idx === i ? prog.accent : 'rgba(255,255,255,0.15)',
                      }}
                    />
                  ))}
                </div>

                {/* CTA button */}
                <button
                  className="self-start flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white/30"
                  style={{
                    background: `linear-gradient(135deg, ${prog.accent}30, ${prog.accent}10)`,
                    border: `1px solid ${prog.accent}44`,
                  }}
                >
                  Conheça o Programa
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
