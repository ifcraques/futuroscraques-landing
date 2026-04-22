import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { PROJETOS_DB } from './ProjetoDet'
import '../styles/Projetos.css'

const PROJETOS = PROJETOS_DB

// Fotos de impacto full-bleed por projeto
const FOTOS = {
  'drible-certo-3x3':
    'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1080&q=80',
  'centro-treinamento-3x3':
    'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1080&q=80',
  'circuitos-ifc':
    'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1080&q=80',
  'clube-escola':
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1080&q=80',
  'verao-para-todos':
    'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1080&q=80',
  'festival-beach-games':
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1080&q=80',
  'escola-do-dinheiro':
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1080&q=80',
  'bike-conectando-historias':
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080&q=80',
  'virada-esportiva':
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1080&q=80',
  'copa-sp-jiu-jitsu':
    'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1080&q=80',
  'oficina-do-codigo':
    'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1080&q=80',
  'festival-aberto-sp-judo':
    'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=1080&q=80',
}

const CATEGORIAS = [
  { id: 'todos', nome: 'Todos' },
  { id: 'basquete', nome: 'Basquete 3×3' },
  { id: 'corridas', nome: 'Corridas' },
  { id: 'praia', nome: 'Esportes de Praia' },
  { id: 'bike', nome: 'Mountain Bike' },
  { id: 'artes-marciais', nome: 'Artes Marciais' },
  { id: 'social', nome: 'Social' },
]

// ─── Ícone seta ───────────────────────────────────────────
function ArrowLeft({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  )
}
function ArrowRight({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// ─── Carrossel de projetos estilo Gallery4 ─────────────────
function ProjetosCarousel({ projetos }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    containScroll: 'trimSnaps',
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setCurrentSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div>
      {/* Header do carrossel */}
      <div style={{
        padding: '0 clamp(1.5rem, 6vw, 6rem)',
        marginBottom: '2.5rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '2rem',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.6rem', letterSpacing: '0.22em',
            color: '#16a34a', textTransform: 'uppercase',
          }}>
            Iniciativas
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 400, color: '#111827',
            lineHeight: 1.05, margin: 0,
          }}>
            Nossos <em style={{ fontStyle: 'italic', color: '#4b5563' }}>projetos</em>
          </h2>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(0.82rem, 1vw, 0.95rem)',
            color: '#6b7280', maxWidth: '480px',
            lineHeight: 1.7, fontWeight: 300, margin: 0,
          }}>
            Programas socioeducativos que unem esporte, formação e cidadania para transformar a vida de jovens em todo o Brasil.
          </p>
        </div>

        {/* Setas — apenas desktop */}
        <div className="carousel-arrows" style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Anterior"
            style={{
              width: '44px', height: '44px',
              borderRadius: '50%',
              border: '1px solid #d1d5db',
              background: 'transparent',
              color: canScrollPrev ? '#111827' : '#d1d5db',
              cursor: canScrollPrev ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { if (canScrollPrev) { e.currentTarget.style.background = '#111827'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#111827' } }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = canScrollPrev ? '#111827' : '#d1d5db'; e.currentTarget.style.borderColor = '#d1d5db' }}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Próximo"
            style={{
              width: '44px', height: '44px',
              borderRadius: '50%',
              border: '1px solid #d1d5db',
              background: 'transparent',
              color: canScrollNext ? '#111827' : '#d1d5db',
              cursor: canScrollNext ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { if (canScrollNext) { e.currentTarget.style.background = '#111827'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#111827' } }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = canScrollNext ? '#111827' : '#d1d5db'; e.currentTarget.style.borderColor = '#d1d5db' }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Embla viewport — sem padding lateral para cards chegarem na borda */}
      <div ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          marginLeft: 'clamp(1.5rem, 6vw, 6rem)',
        }}>
          {projetos.map((projeto) => {
            const foto = FOTOS[projeto.slug] || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1080&q=80'
            return (
              <div
                key={projeto.id}
                style={{
                  flexShrink: 0,
                  width: 'clamp(280px, 32vw, 380px)',
                  paddingRight: '20px',
                }}
              >
                <Link to={`/projetos/${projeto.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    className="gallery4-card"
                    style={{
                      position: 'relative',
                      height: '27rem',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Foto full-bleed */}
                    <img
                      src={foto}
                      alt={projeto.titulo}
                      className="gallery4-img"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                      }}
                    />

                    {/* Gradiente de cor do projeto */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 0%, transparent 35%, ${projeto.cor}88 70%, ${projeto.cor}dd 100%)`,
                      mixBlendMode: 'multiply',
                    }} />

                    {/* Gradiente escuro para legibilidade */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)',
                    }} />

                    {/* Conteúdo sobreposto */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1.75rem',
                      color: '#fff',
                    }}>
                      {/* Número + status */}
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        marginBottom: '0.75rem',
                      }}>
                        <span style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: '0.58rem', letterSpacing: '0.2em',
                          color: 'rgba(255,255,255,0.6)', fontWeight: 500,
                        }}>
                          {projeto.num}
                        </span>
                        <span style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                          color: '#fff',
                          background: 'rgba(255,255,255,0.18)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          backdropFilter: 'blur(8px)',
                          padding: '3px 10px', borderRadius: '20px',
                        }}>
                          {projeto.status}
                        </span>
                      </div>

                      {/* Título */}
                      <h3 style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: 'clamp(1.3rem, 2.2vw, 1.6rem)',
                        fontWeight: 400,
                        color: '#fff',
                        lineHeight: 1.15,
                        marginBottom: '0.5rem',
                        margin: '0 0 0.5rem 0',
                      }}>
                        {projeto.titulo}
                      </h3>

                      {/* Subtítulo */}
                      <p style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.68rem',
                        color: 'rgba(255,255,255,0.65)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        margin: '0 0 1rem 0',
                      }}>
                        {projeto.subtitulo}
                      </p>

                      {/* Descrição (2 linhas) */}
                      <p style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: 1.65,
                        fontWeight: 300,
                        marginBottom: '1.25rem',
                        margin: '0 0 1.25rem 0',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {projeto.descricao}
                      </p>

                      {/* Ver mais */}
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.72rem', fontWeight: 600,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: '#fff',
                      }}>
                        Ver projeto
                        <span className="gallery4-arrow" style={{
                          display: 'inline-flex',
                          transition: 'transform 0.3s ease',
                        }}>
                          <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots de navegação */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '6px',
        marginTop: '2rem',
        padding: '0 clamp(1.5rem, 6vw, 6rem)',
      }}>
        {projetos.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Projeto ${index + 1}`}
            style={{
              width: currentSlide === index ? '20px' : '6px',
              height: '6px',
              borderRadius: '3px',
              border: 'none',
              background: currentSlide === index ? '#111827' : '#d1d5db',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Página principal ──────────────────────────────────────
export default function Projetos() {
  const [filtro, setFiltro] = useState('todos')

  const filtrados = filtro === 'todos'
    ? PROJETOS
    : PROJETOS.filter(p => p.categoria === filtro)

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>

      {/* Filtros */}
      <div style={{
        padding: '4rem clamp(1.5rem, 6vw, 6rem) 3rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
        borderBottom: '1px solid #e5e7eb',
      }}>
        {CATEGORIAS.map(cat => (
          <motion.button
            key={cat.id}
            onClick={() => setFiltro(cat.id)}
            whileTap={{ scale: 0.96 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '7px 16px', borderRadius: '20px', cursor: 'pointer',
              border: filtro === cat.id ? '1px solid #111827' : '1px solid #d1d5db',
              background: filtro === cat.id ? '#111827' : 'transparent',
              color: filtro === cat.id ? '#fff' : '#374151',
              transition: 'all 0.2s',
            }}
          >
            {cat.nome}
          </motion.button>
        ))}
      </div>

      {/* Carrossel */}
      <div style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <ProjetosCarousel key={filtro} projetos={filtrados} />
      </div>

      {filtrados.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '5rem',
          color: '#9ca3af',
          fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem',
        }}>
          Nenhum projeto nesta categoria.
        </div>
      )}

      {/* CTA */}
      <div style={{
        borderTop: '1px solid #e5e7eb',
        marginTop: '3rem',
        padding: '5rem clamp(1.5rem, 6vw, 6rem)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.6rem', letterSpacing: '0.22em',
          color: '#16a34a', textTransform: 'uppercase', marginBottom: '1.5rem',
        }}>
          Faça a diferença
        </p>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 400, color: '#111827',
          marginBottom: '1rem',
        }}>
          Apoie um projeto <em style={{ fontStyle: 'italic', color: '#4b5563' }}>agora.</em>
        </h2>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.85rem', color: '#6b7280',
          marginBottom: '2.5rem', lineHeight: 1.7,
        }}>
          Cada contribuição financia diretamente um jovem em situação de vulnerabilidade.
        </p>
        <Link to="/comoapoiar" style={{ textDecoration: 'none' }}>
          <button
            className="liquid-glass"
            style={{
              borderRadius: '9999px',
              padding: '14px 48px',
              fontSize: '0.8rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#111827', cursor: 'pointer',
              background: 'rgba(22,163,74,0.2)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Apoie Agora
          </button>
        </Link>
      </div>

      {/* CSS do carrossel */}
      <style>{`
        .gallery4-card:hover .gallery4-img {
          transform: scale(1.06);
        }
        .gallery4-card:hover .gallery4-arrow {
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .carousel-arrows { display: none !important; }
        }
      `}</style>
    </div>
  )
}
