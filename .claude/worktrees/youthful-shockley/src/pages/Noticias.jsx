import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import noticias from '../../noticias.json'

const CATEGORIAS = ['Todas', ...Array.from(new Set(noticias.map(n => n.categoria)))]

const CATEGORY_COLORS = {
  'Institucional':  '#16a34a',
  'Eventos':        '#2563eb',
  'Competições':    '#dc2626',
  'Conquistas':     '#d97706',
  'Programas':      '#7c3aed',
  'Destaques':      '#0891b2',
  'Preparação':     '#6d28d9',
  'Parcerias':      '#059669',
}

function NewsCard({ noticia, index }) {
  const cor = CATEGORY_COLORS[noticia.categoria] || '#16a34a'
  const navigate = useNavigate()
  const slug = noticia.slug || noticia.url.split('/post/').pop()

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      layout
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
      whileHover={{
        borderColor: `${cor}60`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.1)`,
      }}
      onClick={() => navigate(`/noticias/${slug}`)}
    >
      {/* imagem */}
      <div style={{ position: 'relative', paddingTop: '58%', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={noticia.foto}
          alt={noticia.titulo}
          loading="lazy"
          onError={e => { e.currentTarget.src = 'https://placehold.co/600x400/111/333?text=IFC' }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
        />
        {/* categoria badge */}
        <span style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: cor,
          color: '#fff',
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '3px 10px',
          borderRadius: '20px',
        }}>
          {noticia.categoria}
        </span>
      </div>

      {/* conteúdo */}
      <div style={{ padding: '1.25rem 1.4rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.72rem',
          color: '#6b7280',
          letterSpacing: '0.04em',
        }}>
          {noticia.data}
        </p>

        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
          fontWeight: 600,
          color: '#111827',
          lineHeight: 1.45,
          margin: 0,
          flex: 1,
        }}>
          {noticia.titulo}
        </h3>

        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.82rem',
          fontWeight: 400,
          color: '#4b5563',
          lineHeight: 1.6,
          margin: 0,
        }}>
          {noticia.descricao}
        </p>

        {/* tags */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
          {noticia.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 400,
              color: '#6b7280',
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              padding: '2px 8px',
              borderRadius: '20px',
              letterSpacing: '0.03em',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* link */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginTop: '0.5rem',
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.78rem',
          fontWeight: 500,
          color: cor,
          letterSpacing: '0.02em',
        }}>
          Ler matéria
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </motion.article>
  )
}

export default function Noticias() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')

  const filtradas = categoriaAtiva === 'Todas'
    ? noticias
    : noticias.filter(n => n.categoria === categoriaAtiva)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      paddingTop: '100px',
    }}>

      {/* hero da página */}
      <div style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 5rem) 0',
        maxWidth: '1300px',
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#6b7280',
            display: 'block',
            marginBottom: '1rem',
          }}>
            ● Instituto Futuros Craques
          </span>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            lineHeight: 0.92,
            letterSpacing: '0.015em',
            color: '#111827',
            margin: '0 0 1.5rem',
          }}>
            Notícias
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
            fontWeight: 400,
            color: '#4b5563',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: 0,
          }}>
            Acompanhe as últimas novidades, resultados e conquistas do Instituto Futuros Craques.
          </p>
        </motion.div>

        {/* linha decorativa */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, #16a34a 0%, rgba(22,163,74,0.3) 50%, transparent 100%)',
          margin: '2.5rem 0',
        }} />

        {/* filtros por categoria */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {CATEGORIAS.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.78rem',
                fontWeight: categoriaAtiva === cat ? 600 : 400,
                color: categoriaAtiva === cat ? '#fff' : '#374151',
                background: categoriaAtiva === cat ? '#16a34a' : '#ffffff',
                border: `1px solid ${categoriaAtiva === cat ? '#16a34a' : '#d1d5db'}`,
                borderRadius: '20px',
                padding: '0.4rem 1rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* grade de notícias */}
      <div style={{
        padding: '0 clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 6rem)',
        maxWidth: '1300px',
        margin: '0 auto',
      }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={categoriaAtiva}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {filtradas.map((noticia, i) => (
              <NewsCard key={noticia.id} noticia={noticia} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtradas.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 0',
            color: '#9ca3af',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Nenhuma notícia nesta categoria.
          </div>
        )}
      </div>
    </div>
  )
}
