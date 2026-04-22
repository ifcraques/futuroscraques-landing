import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ_ITEMS = [
  {
    q: 'O IFC cobra alguma taxa de seus participantes?',
    a: 'Não. Todos os nossos projetos são 100% gratuitos. Acreditamos que o esporte deve ser acessível a todas as crianças e jovens, independentemente de condição financeira.',
  },
  {
    q: 'Como posso me inscrever em um projeto do IFC?',
    a: 'A inscrição é feita online, por meio de formulário disponível em nosso site ou nos canais de atendimento. Qualquer pessoa que atenda aos critérios do programa pode se inscrever.',
  },
  {
    q: 'Com que idade posso começar a participar?',
    a: 'Os projetos de iniciação esportiva começam a partir dos 6 anos. Meninos e meninas são igualmente bem-vindos. Para programas de alto rendimento, há faixas etárias específicas (Sub-15, Sub-18, Sub-23 e Adulto).',
  },
  {
    q: 'O IFC trabalha apenas com futebol?',
    a: 'Não. Embora o futebol seja uma das modalidades mais praticadas, o IFC também atua com basquete 3×3, corridas de rua, iatismo, mountain bike, esportes de praia e mais, sempre com foco em inclusão e desenvolvimento.',
  },
  {
    q: 'Onde ficam os polos de atendimento?',
    a: 'O IFC possui polos em Santo André (dois) e em São Paulo (Zona Sul). A sede administrativa fica em São Paulo, na Av. Tiradentes, 960 – Luz.',
  },
  {
    q: 'Como posso me tornar um doador ou patrocinador?',
    a: 'Entre em contato pelo e-mail contato@futuroscraques.org ou acesse a página "Como Apoiar". Todas as contribuições são utilizadas diretamente para manter os programas gratuitos e ampliar o atendimento.',
  },
  {
    q: 'O IFC aceita voluntários?',
    a: 'Sim! Atuamos com voluntários em diversas frentes — treinadores, educadores, profissionais de saúde e apoio administrativo. Acesse a página de Contato para se candidatar.',
  },
  {
    q: 'O IFC organiza competições?',
    a: 'Sim. O IFC participa e organiza competições nacionais e internacionais, além de torneios internos e eventos esportivos abertos ao público — como corridas de rua, Beach Games e festivais esportivos.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="faq-section" style={{ padding: '4rem 2rem 7rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* accordion */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1px solid ${isOpen ? '#bbf7d0' : '#e5e7eb'}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 4px 20px rgba(22,163,74,0.08)' : 'none',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.1rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#111827',
                    lineHeight: 1.45,
                  }}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      flexShrink: 0,
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: isOpen ? '#16a34a' : '#f3f4f6',
                      color: isOpen ? '#fff' : '#6b7280',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.15rem',
                      fontWeight: 300,
                      transition: 'background 0.22s, color 0.22s',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 1.5rem 1.3rem',
                        borderTop: '1px solid #f0fdf4',
                      }}>
                        <p style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: '0.9rem',
                          color: '#6b7280',
                          lineHeight: 1.8,
                          margin: '0.9rem 0 0',
                        }}>
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        {/* CTA below */}
        <motion.div
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.9rem',
            color: '#9ca3af',
            marginBottom: '1rem',
          }}>
            Ainda tem dúvidas?
          </p>
          <a
            href="mailto:contato@futuroscraques.org"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.4rem',
              borderRadius: '8px',
              background: '#16a34a',
              color: '#fff',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,163,74,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Fale conosco
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
