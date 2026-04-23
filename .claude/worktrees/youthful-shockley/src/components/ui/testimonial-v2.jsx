import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: "O Drible Certo 3x3 me abriu portas que nunca pensei existir. Não era só basquete, era disciplina, amizade, liderança — e hoje sou atleta profissional.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    name: "João Silva, 19 anos",
    role: "Atleta Profissional",
  },
  {
    text: "Minha filha está mais confiante, feliz, melhorou drasticamente na escola e agora sonha em grande. Estamos eternamente gratos ao Instituto!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Maria Santos",
    role: "Mãe da Participante",
  },
  {
    text: "Como empresa Fortune 500, apoiamos porque vemos resultados concretos, mensuráveis e transformadores. Impacto real que faz diferença.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    name: "CEO de Empresa Parceira",
    role: "São Paulo",
  },
  {
    text: "O programa mudou completamente minha relação com a escola. Aprendi que disciplina no esporte é a mesma que preciso nos estudos.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Carlos Eduardo, 17 anos",
    role: "Participante",
  },
  {
    text: "Ver meu filho acordar cedo com vontade de ir treinar, sem que eu precise pedir, foi a maior transformação que já testemunhei.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Roberto Alves",
    role: "Pai de Participante",
  },
  {
    text: "Investimos no Instituto porque o modelo é sólido, os números são reais e o impacto na comunidade é mensurável. É ESG de verdade.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Diretora de Sustentabilidade",
    role: "Empresa Patrocinadora",
  },
  {
    text: "Não tinha objetivo na vida. O basquete me deu estrutura, amigos e um sonho. Hoje treino para representar o Brasil.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Letícia Moura, 21 anos",
    role: "Atleta em Formação",
  },
  {
    text: "A comunidade mudou. As crianças que antes ficavam na rua agora têm um lugar seguro, com propósito e acompanhamento real.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Ana Beatriz Costa",
    role: "Líder Comunitária",
  },
  {
    text: "O suporte da equipe é excepcional. Cada detalhe do programa reflete cuidado genuíno com o desenvolvimento humano dos jovens.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    name: "Prof. Marcos Vieira",
    role: "Parceiro Educacional",
  },
]

// Divide em grupos de 3 para o grid
function chunk(arr, size) {
  const result = []
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size))
  return result
}

const INTERVAL_MS = 4500
const groups = chunk(testimonials, 3)

export default function TestimonialV2() {
  const [groupIndex, setGroupIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setGroupIndex(prev => (prev + 1) % groups.length)
    }, INTERVAL_MS)
    return () => clearInterval(timerRef.current)
  }, [paused])

  const currentGroup = groups[groupIndex]

  return (
    <div
      id="testimonials-section"
      style={{ padding: '6rem 0' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="section">
        <motion.p
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1a7a5e',
            marginBottom: '0.75rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Histórias que Inspiram
        </motion.p>

        <motion.h2
          className="section-title"
          style={{ color: '#0d1f2d', textAlign: 'left', marginBottom: '0.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Vidas transformadas,<br />histórias reais
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ color: '#5a6a75', textAlign: 'left', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Vidas transformadas através do esporte, educação e oportunidade genuína de mudança social
        </motion.p>

        {/* Grid de depoimentos com rotação */}
        <AnimatePresence mode="wait">
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {currentGroup.map((t, i) => (
              <div
                key={t.name}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Quote mark */}
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M0 20V12.5C0 5.596 4.148 1.404 12.444 0L13.333 2.5C10.37 3.132 8.37 4.456 7.333 6.472 6.667 7.82 6.37 9.208 6.444 10.638H12.444V20H0ZM15.556 20V12.5C15.556 5.596 19.704 1.404 28 0L28.889 2.5C25.926 3.132 23.926 4.456 22.889 6.472 22.222 7.82 21.926 9.208 22 10.638H28V20H15.556Z" fill="#00a2e8" fillOpacity="0.18"/>
                </svg>

                <p style={{
                  fontSize: '0.95rem',
                  color: '#3a4a55',
                  lineHeight: 1.7,
                  flexGrow: 1,
                  margin: 0,
                }}>
                  {t.text}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                      border: '2px solid rgba(0,162,232,0.15)',
                    }}
                    onError={e => { e.target.style.display = 'none' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0d1f2d' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#1a7a5e', fontWeight: 600 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots de navegação */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2rem',
        }}>
          {groups.map((_, i) => (
            <button
              key={i}
              onClick={() => setGroupIndex(i)}
              style={{
                width: groupIndex === i ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: groupIndex === i ? '#00a2e8' : 'rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
              aria-label={`Grupo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
