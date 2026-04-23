import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CATEGORY_COLORS = {
  'Institucional': '#16a34a',
  'Eventos':       '#2563eb',
  'Competições':   '#dc2626',
  'Conquistas':    '#d97706',
  'Programas':     '#7c3aed',
  'Destaques':     '#0891b2',
  'Preparação':    '#6d28d9',
  'Parcerias':     '#059669',
  'Geral':         '#6b7280',
}

function Spinner() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ width: 36, height: 36, border: '3px solid #e5e7eb', borderTopColor: '#16a34a', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function Post() {
  const { slug } = useParams()
  const [post, setPost]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro]       = useState(false)

  useEffect(() => {
    setLoading(true)
    setErro(false)
    setPost(null)

    fetch(`/posts/${slug}.json`)
      .then(r => {
        if (!r.ok) throw new Error('not found')
        return r.json()
      })
      .then(data => { setPost(data); setLoading(false) })
      .catch(() => { setErro(true); setLoading(false) })
  }, [slug])

  if (loading) return <Spinner />

  if (erro) return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>
      <p style={{ color: '#6b7280' }}>Post não encontrado.</p>
      <Link to="/noticias" style={{ color: '#16a34a', textDecoration: 'none', fontSize: '0.9rem' }}>← Voltar para Notícias</Link>
    </div>
  )

  const cor = CATEGORY_COLORS[post.categoria] || '#16a34a'

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', paddingTop: '100px', fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 2rem)' }}>

        {/* Voltar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link
            to="/noticias"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6b7280', textDecoration: 'none', fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.95rem', letterSpacing: '0.1em', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#111827'}
            onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
          >
            ← Notícias
          </Link>
        </motion.div>

        {/* Cabeçalho do post */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span style={{ background: cor, color: '#fff', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '20px' }}>
              {post.categoria}
            </span>
            {post.data && (
              <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>{post.data}</span>
            )}
          </div>

          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '0.02em', color: '#111827', marginBottom: '0' }}>
            {post.titulo}
          </h1>
        </motion.div>

        {/* Linha decorativa */}
        <div style={{ height: '1px', background: `linear-gradient(90deg, ${cor}60, transparent)`, margin: '1.75rem 0' }} />

        {/* Foto de capa */}
        {post.fotoCapa && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', marginBottom: '2.5rem' }}
          >
            <img
              src={post.fotoCapa}
              alt={post.titulo}
              style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
            />
          </motion.div>
        )}

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.conteudoHtml }}
        />

        {/* Tags */}
        {post.tags?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}
          >
            {post.tags.map(tag => (
              <span key={tag} style={{ fontSize: '0.72rem', color: '#6b7280', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '3px 10px', borderRadius: '20px' }}>
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Rodapé navegação */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} style={{ marginTop: '3rem' }}>
          <Link
            to="/noticias"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: cor, textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            ← Ver todas as notícias
          </Link>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .post-content {
          color: #374151;
          font-size: 1.05rem;
          line-height: 1.85;
          font-weight: 400;
        }
        .post-content p      { margin-bottom: 1.4rem; }
        .post-content h2     { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; color: #111827; margin: 2.5rem 0 1rem; letter-spacing: 0.03em; line-height: 1; }
        .post-content h3     { font-family: 'Bebas Neue', sans-serif; font-size: 1.35rem; color: #111827; margin: 2rem 0 0.75rem; }
        .post-content img    { width: 100%; border-radius: 10px; margin: 1.8rem 0; border: 1px solid #e5e7eb; display: block; object-fit: cover; }
        .post-content a      { color: #16a34a; text-decoration: none; }
        .post-content a:hover { text-decoration: underline; }
        .post-content strong { color: #111827; font-weight: 600; }
        .post-content em     { color: #4b5563; }
        .post-content ul, .post-content ol { padding-left: 1.5rem; margin-bottom: 1.4rem; }
        .post-content li     { margin-bottom: 0.45rem; }
        .post-content blockquote {
          border-left: 3px solid #16a34a;
          padding: 0.5rem 0 0.5rem 1.25rem;
          margin: 1.75rem 0;
          color: #6b7280;
          font-style: italic;
          background: #f0fdf4;
          border-radius: 0 8px 8px 0;
        }
        .post-content figure  { margin: 1.5rem 0; }
        .post-content figcaption { text-align: center; font-size: 0.78rem; color: #9ca3af; margin-top: -1rem; }
      `}</style>
    </div>
  )
}
