import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Infografias() {
  const [expandido, setExpandido] = useState(null)

  const infografias = [
    {
      id: 1,
      titulo: 'Escola do Dinheiro',
      descricao: 'Educação Financeira Consciente - Impacto direto em 10.800 jovens de 11 a 17 anos com mentalidade financeira e consumo consciente.',
      arquivo: '/apresentacoes/Escola_do_Dinheiro_Impact_Report.pptx',
      cor: '#0066cc',
      destaque: '10.800 jovens impactados',
      imagem: '/infografias/escola-dinheiro.png'
    },
    {
      id: 2,
      titulo: 'Centro de Treinamento 3x3',
      descricao: 'Basquete educacional para mais de 300 crianças e jovens, com suporte assistencial e acompanhamento integral das famílias.',
      arquivo: '/apresentacoes/CENTRO DE TREINAMENTO 3X3 - 2026.pdf',
      cor: '#22a347',
      destaque: '300+ crianças atendidas',
      imagem: '/infografias/programa-capacitacao-3x3.png'
    },
    {
      id: 3,
      titulo: 'Circuitos IFC',
      descricao: 'Mais de 30 etapas anuais de corridas de rua em todo o Brasil, com eventos massivos, inclusivos e programação familiar.',
      arquivo: '/apresentacoes/Circuitos IFC_NeoRunning2026.pdf',
      cor: '#00a2e8',
      destaque: '30+ etapas por ano',
      imagem: '/infografias/circuitos-ifc.png'
    },
    {
      id: 4,
      titulo: 'Futuros Craques no Futebol',
      descricao: 'Futebol e múltiplas modalidades esportivas para crianças da rede pública, com professores experientes em didática esportiva.',
      arquivo: null,
      cor: '#003366',
      destaque: 'Múltiplos núcleos em SP',
      imagem: '/infografias/escola-dinheiro.png'
    },
    {
      id: 5,
      titulo: 'Programa de Capacitação 3x3',
      descricao: 'Programa vitorioso de desenvolvimento em Basquete 3x3 - modalidade olímpica. Alto rendimento e formação esportiva especializada.',
      arquivo: '/apresentacoes/Programa de Capacitação 3x3.pptx',
      cor: '#ff6b35',
      destaque: 'Programa mais vitorioso do país',
      imagem: '/infografias/programa-capacitacao-3x3.png'
    },
    {
      id: 6,
      titulo: 'Drible Certo no Mundo',
      descricao: 'Programa de capacitação em Basquete 3x3 — modalidade olímpica. Desenvolvimento de equipes de alto rendimento com presença internacional.',
      arquivo: '/apresentacoes/Drible_Certo_2026_Investment_Prospectus (1).pdf',
      cor: '#0052a3',
      destaque: '50+ atletas revelados',
      imagem: '/infografias/drible-certo.png'
    }
  ]

  return (
    <section className="infografias-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="infografias-header"
        >
          <h1 className="section-title">Infografias dos Projetos</h1>
          <p className="section-subtitle">
            Resumo visual dos programas — clique para ver os detalhes ou abra a apresentação completa
          </p>
        </motion.div>

        <motion.div
          className="infografias-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {infografias.map((infografia, index) => (
            <motion.div
              key={infografia.id}
              className="infografia-card-novo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Imagem Infográfica */}
              <motion.div
                className="infografia-imagem-container"
                onClick={() => setExpandido(expandido === infografia.id ? null : infografia.id)}
                style={{ cursor: 'pointer', position: 'relative' }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={infografia.imagem}
                  alt={infografia.titulo}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    border: `2px solid ${infografia.cor}`,
                    display: 'block'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  className="infografia-overlay"
                >
                  <span style={{
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    Clique para expandir
                  </span>
                </div>
              </motion.div>

              {/* Título e Info */}
              <div style={{ padding: '1.5rem 0', borderTopColor: infografia.cor, borderTopWidth: '3px', borderTopStyle: 'solid' }}>
                <h3 style={{ margin: '0.5rem 0', color: 'var(--primary-dark)', fontSize: '1.2rem', fontWeight: 700 }}>
                  {infografia.titulo}
                </h3>

                <div style={{
                  background: `${infografia.cor}15`,
                  borderLeft: `4px solid ${infografia.cor}`,
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  margin: '0.75rem 0',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: infografia.cor
                }}>
                  {infografia.destaque}
                </div>

                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, margin: '0.75rem 0' }}>
                  {infografia.descricao}
                </p>

                {/* Botões */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <motion.button
                    onClick={() => setExpandido(expandido === infografia.id ? null : infografia.id)}
                    style={{
                      flex: 1,
                      minWidth: '140px',
                      padding: '0.7rem 1rem',
                      background: infografia.cor,
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {expandido === infografia.id ? '✕ Fechar' : '📊 Ver Resumo'}
                  </motion.button>

                  {infografia.arquivo && (
                    <motion.a
                      href={`/visualizar.html?file=${encodeURIComponent(infografia.arquivo)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        minWidth: '140px',
                        padding: '0.7rem 1rem',
                        border: `2px solid ${infografia.cor}`,
                        color: infografia.cor,
                        background: 'transparent',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textDecoration: 'none',
                        textAlign: 'center',
                        transition: 'all 0.2s'
                      }}
                      whileHover={{ backgroundColor: `${infografia.cor}15`, scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      📂 Apresentação
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Fullscreen Expandido */}
              <AnimatePresence>
                {expandido === infografia.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: 'fixed',
                      inset: 0,
                      background: 'rgba(0,0,0,0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 9999,
                      padding: '2rem',
                    }}
                    onClick={() => setExpandido(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        position: 'relative',
                        background: 'white',
                        borderRadius: '16px',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        overflow: 'auto',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
                      }}
                    >
                      <button
                        onClick={() => setExpandido(null)}
                        style={{
                          position: 'absolute',
                          top: '1.5rem',
                          right: '1.5rem',
                          background: '#fff',
                          border: 'none',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          fontSize: '1.5rem',
                          cursor: 'pointer',
                          zIndex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                        onMouseLeave={(e) => e.target.style.background = '#fff'}
                      >
                        ✕
                      </button>

                      <img
                        src={infografia.imagem}
                        alt={infografia.titulo}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="infografias-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            background: 'rgba(0,162,232,0.08)',
            border: '1px solid rgba(0,162,232,0.2)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginTop: '3rem',
            textAlign: 'center',
            color: '#555'
          }}
        >
          <p style={{ margin: 0 }}>
            💡 <strong>Dica:</strong> Clique em "Ver Resumo" para expandir a infografia em tela cheia, ou "Apresentação" para abrir a apresentação completa com mais detalhes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
