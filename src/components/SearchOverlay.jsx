/**
 * SearchOverlay — busca local por conteúdo do site IFC
 * Abre ao clicar na lupa no Header. Fecha com Escape ou clique fora.
 */
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// ── Índice de conteúdo do site ────────────────────────────────────────────────
const SEARCH_INDEX = [
  // Páginas principais
  { title: 'Quem Somos', excerpt: 'Conheça o Instituto Futuros Craques — história, missão, visão e valores.', path: '/quemsomos', category: 'Página' },
  { title: 'Projetos', excerpt: 'Todos os programas e projetos socioesportivos do IFC.', path: '/projetos', category: 'Página' },
  { title: 'Transparência', excerpt: 'Documentos institucionais, relatórios financeiros, certificados e editais.', path: '/transparencia', category: 'Página' },
  { title: 'Como Apoiar', excerpt: 'Saiba como contribuir, fazer doações e se tornar parceiro do IFC.', path: '/comoapoiar', category: 'Página' },
  { title: 'Notícias', excerpt: 'Últimas notícias e novidades do Instituto Futuros Craques.', path: '/noticias', category: 'Página' },
  { title: 'Contato', excerpt: 'Entre em contato com o IFC pelo formulário, telefone ou e-mail.', path: '/contato', category: 'Página' },
  // Projetos
  { title: 'Drible Certo 3×3', excerpt: 'Projeto de basquete 3×3 olímpico. Maior projeto do país na modalidade.', path: '/projetos/drible-certo-3x3', category: 'Projeto' },
  { title: 'Centro de Treinamento 3×3', excerpt: 'Primeira escolinha de basquete 3×3 do Brasil, desde 2014.', path: '/projetos/centro-treinamento-3x3', category: 'Projeto' },
  { title: 'Circuitos IFC', excerpt: 'Corridas de rua democráticas. Mais de 27 etapas em todo o Brasil.', path: '/projetos/circuitos-ifc', category: 'Projeto' },
  { title: 'Projeto Clube Escola', excerpt: 'Contraturno escolar com esportes de areia para crianças e adolescentes.', path: '/projetos/clube-escola', category: 'Projeto' },
  { title: 'Verão Para Todos', excerpt: 'Esportes de praia gratuitos para toda a família durante o verão.', path: '/projetos/verao-para-todos', category: 'Projeto' },
  { title: 'Festival Beach Games', excerpt: 'Festival de esportes de praia com beach tennis, futevôlei e mais.', path: '/projetos/festival-beach-games', category: 'Projeto' },
  { title: 'Escola do Dinheiro', excerpt: 'Educação financeira para crianças e adolescentes — CONDECA.', path: '/projetos/escola-do-dinheiro', category: 'Projeto' },
  { title: 'Bike Conectando Histórias', excerpt: 'Maior projeto de Mountain Bike do Brasil. Aprovado pelo Ministério do Esporte.', path: '/projetos/bike-conectando-historias', category: 'Projeto' },
  { title: 'Virada Esportiva', excerpt: 'Participação na Virada Esportiva de São Paulo com atividades gratuitas.', path: '/projetos/virada-esportiva', category: 'Projeto' },
  { title: 'Copa SP de Jiu Jitsu', excerpt: 'Competição de Jiu Jitsu apoiada por emenda parlamentar via SEME.', path: '/projetos/copa-sp-jiu-jitsu', category: 'Projeto' },
  { title: 'Oficina do Código', excerpt: 'Inclusão digital e programação para jovens — financiado pelo CONDECA.', path: '/projetos/oficina-do-codigo', category: 'Projeto' },
  { title: 'Festival Aberto SP de Judô', excerpt: 'Festival de judô aberto ao público paulistano via emenda parlamentar.', path: '/projetos/festival-aberto-sp-judo', category: 'Projeto' },
  // Programas
  { title: 'Formação Esportiva', excerpt: 'Crianças e adolescentes. Desenvolvimento integral sem seletividade.', path: '/#projects-section', category: 'Programa' },
  { title: 'Esporte para Toda a Vida', excerpt: 'Saúde e bem-estar para jovens, adultos e idosos.', path: '/#projects-section', category: 'Programa' },
  { title: 'Excelência Esportiva', excerpt: 'Formação de atletas de alto rendimento em competições nacionais e internacionais.', path: '/#projects-section', category: 'Programa' },
  // Transparência
  { title: 'Documentos Institucionais', excerpt: 'Atas, estatutos e registros oficiais do Instituto.', path: '/transparencia', category: 'Documentos' },
  { title: 'Relatórios e Certificações', excerpt: 'Relatórios de atividades, código de conduta e certificações.', path: '/transparencia', category: 'Documentos' },
  { title: 'Demonstrações Contábeis', excerpt: 'Balanços patrimoniais e demonstrações financeiras anuais.', path: '/transparencia', category: 'Documentos' },
  { title: 'Editais', excerpt: 'Editais de contratação, chamamentos e resultados.', path: '/transparencia', category: 'Documentos' },
  { title: 'Certificados', excerpt: 'Certificados, registros e reconhecimentos oficiais do IFC.', path: '/transparencia', category: 'Documentos' },
  // FAQ
  { title: 'Inscrição nos projetos', excerpt: 'Como me inscrever em um projeto do IFC? A inscrição é gratuita e online.', path: '/projetos', category: 'FAQ' },
  { title: 'Doações para o IFC', excerpt: 'Como posso me tornar um doador? Contato: contato@futuroscraques.org', path: '/comoapoiar', category: 'FAQ' },
  { title: 'Voluntariado', excerpt: 'O IFC aceita voluntários em diversas áreas — treinadores, educadores, saúde.', path: '/contato', category: 'FAQ' },
]

const CATEGORY_COLORS = {
  'Página':      { bg: '#eff6ff', text: '#1d4ed8' },
  'Projeto':     { bg: '#f0fdf4', text: '#15803d' },
  'Programa':    { bg: '#fdf4ff', text: '#7e22ce' },
  'Documentos':  { bg: '#fff7ed', text: '#c2410c' },
  'FAQ':         { bg: '#f0f9ff', text: '#0369a1' },
}

function highlight(text, query) {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part)
      ? <mark key={i} style={{ background: '#fef08a', color: '#111', borderRadius: '2px', padding: '0 1px' }}>{part}</mark>
      : part
  )
}

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const results = query.trim().length >= 2
    ? SEARCH_INDEX.filter(item => {
        const q = query.toLowerCase()
        return item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      }).slice(0, 8)
    : []

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80)
      setQuery('')
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSelect = (item) => {
    onClose()
    if (item.path.startsWith('/#')) {
      navigate('/')
      setTimeout(() => {
        document.querySelector(item.path.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 320)
    } else {
      navigate(item.path)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 1100,
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />

          {/* Search panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '6rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1200,
              width: 'min(680px, 92vw)',
              background: '#ffffff',
              borderRadius: '18px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06)',
              overflow: 'hidden',
            }}
          >
            {/* Input row */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '1rem 1.2rem',
              borderBottom: '1px solid #f3f4f6',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Buscar projetos, documentos, perguntas..."
                style={{
                  flex: 1, border: 'none', outline: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1rem', fontWeight: 400,
                  color: '#111827', background: 'transparent',
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{ background: '#f3f4f6', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#6b7280', fontSize: '0.85rem' }}
                >×</button>
              )}
              <kbd style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.7rem', color: '#9ca3af', border: '1px solid #e5e7eb', borderRadius: '4px', padding: '2px 6px', flexShrink: 0 }}>Esc</kbd>
            </div>

            {/* Results */}
            {query.trim().length >= 2 && (
              <div style={{ maxHeight: '420px', overflowY: 'auto' }}>
                {results.length === 0 ? (
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af', fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem' }}>
                    Nenhum resultado para <strong style={{ color: '#374151' }}>"{query}"</strong>
                  </div>
                ) : (
                  results.map((item, i) => {
                    const colors = CATEGORY_COLORS[item.category] || { bg: '#f9fafb', text: '#374151' }
                    return (
                      <motion.button
                        key={i}
                        onClick={() => handleSelect(item)}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.22 }}
                        style={{
                          width: '100%', display: 'flex', alignItems: 'flex-start',
                          gap: '0.9rem', padding: '0.9rem 1.2rem',
                          background: 'none', border: 'none', cursor: 'pointer',
                          textAlign: 'left', borderBottom: i < results.length - 1 ? '1px solid #f9fafb' : 'none',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
                        onMouseLeave={e => e.currentTarget.style.background = 'none'}
                      >
                        <div style={{ flexShrink: 0, marginTop: '2px' }}>
                          <span style={{
                            display: 'inline-block', padding: '2px 8px', borderRadius: '20px',
                            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                            fontFamily: "'Outfit', sans-serif",
                            background: colors.bg, color: colors.text,
                          }}>
                            {item.category}
                          </span>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.92rem', fontWeight: 600, color: '#111827', margin: '0 0 3px', lineHeight: 1.3 }}>
                            {highlight(item.title, query)}
                          </p>
                          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem', color: '#6b7280', margin: 0, lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {highlight(item.excerpt, query)}
                          </p>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}>
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </motion.button>
                    )
                  })
                )}
              </div>
            )}

            {/* Hint when empty */}
            {query.trim().length < 2 && (
              <div style={{ padding: '1.2rem 1.2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {['projetos', 'documentos', 'doação', 'basquete', 'corrida'].map(hint => (
                  <button key={hint} onClick={() => setQuery(hint)} style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: '0.78rem', color: '#6b7280',
                    background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '20px',
                    padding: '4px 12px', cursor: 'pointer', transition: 'all 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f0fdf4'; e.currentTarget.style.color = '#16a34a'; e.currentTarget.style.borderColor = '#bbf7d0' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#f9fafb'; e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = '#e5e7eb' }}
                  >
                    {hint}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
