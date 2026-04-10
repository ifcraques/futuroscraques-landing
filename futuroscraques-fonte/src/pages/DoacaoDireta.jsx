import { useState } from 'react'
import { motion } from 'framer-motion'

const opcoesDoacoes = [
  { valor: 50, label: 'Doação R$ 50' },
  { valor: 150, label: 'Doação R$ 150' },
  { valor: 300, label: 'Doação R$ 300' },
  { valor: null, label: 'Outro Valor' }
]

const projetos = [
  {
    id: 1,
    titulo: 'Futuros Craques',
    descricao: 'Futebol e múltiplas modalidades esportivas para crianças da rede pública.',
    cor: '#003366',
    icon: '⚽'
  },
  {
    id: 2,
    titulo: 'Circuitos IFC',
    descricao: 'Corridas de rua inclusivas em todo o Brasil com eventos massivos.',
    cor: '#00a2e8',
    icon: '🏃'
  },
  {
    id: 3,
    titulo: 'Centro de Treinamento 3x3',
    descricao: 'Basquete educacional para mais de 300 crianças e jovens.',
    cor: '#22a347',
    icon: '🏀'
  },
  {
    id: 4,
    titulo: 'Escola do Dinheiro',
    descricao: 'Educação financeira consciente para 10.800 jovens.',
    cor: '#0066cc',
    icon: '💰'
  },
  {
    id: 5,
    titulo: 'Programa de Capacitação 3x3',
    descricao: 'Alto rendimento em Basquete 3x3 - modalidade olímpica.',
    cor: '#ff6b35',
    icon: '🎯'
  }
]

export default function DoacaoDireta() {
  const [valorSelecionado, setValorSelecionado] = useState(50)
  const [valorCustomizado, setValorCustomizado] = useState('')
  const [projetoSelecionado, setProjetoSelecionado] = useState(1)
  const [tipoDoacao, setTipoDoacao] = useState('unica') // 'unica' ou 'mensal'

  const valor = valorSelecionado === null ? (valorCustomizado ? parseFloat(valorCustomizado) : 0) : valorSelecionado
  const projetoAtual = projetos.find(p => p.id === projetoSelecionado)

  return (
    <>
      <div className="page-wrapper">
        <section className="page-hero">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="page-pretitle">Transforme Vidas</span>
            <h1>Doação Direta</h1>
            <p>
              Escolha um valor e um projeto. Você pode fazer uma doação única ou
              se tornar um doador mensal. O mais importante é impactar vidas.
            </p>
          </motion.div>
        </section>

        <section className="section">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Tipo de Doação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '3rem' }}
            >
              <h2 style={{ color: 'var(--primary-dark)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                1. Escolha o Tipo de Doação
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}
              >
                <motion.button
                  onClick={() => setTipoDoacao('unica')}
                  style={{
                    padding: '1.5rem',
                    border: tipoDoacao === 'unica' ? '2px solid var(--accent)' : '2px solid #ddd',
                    background: tipoDoacao === 'unica' ? 'rgba(0,162,232,0.1)' : '#fff',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: tipoDoacao === 'unica' ? 700 : 600,
                    color: tipoDoacao === 'unica' ? 'var(--primary-dark)' : '#666',
                    transition: 'all 0.2s',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💙</div>
                  <div style={{ fontWeight: 700 }}>Doação Única</div>
                  <div style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.25rem' }}>Contribua uma vez</div>
                </motion.button>

                <motion.button
                  onClick={() => setTipoDoacao('mensal')}
                  style={{
                    padding: '1.5rem',
                    border: tipoDoacao === 'mensal' ? '2px solid var(--accent)' : '2px solid #ddd',
                    background: tipoDoacao === 'mensal' ? 'rgba(0,162,232,0.1)' : '#fff',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: tipoDoacao === 'mensal' ? 700 : 600,
                    color: tipoDoacao === 'mensal' ? 'var(--primary-dark)' : '#666',
                    transition: 'all 0.2s',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>♻️</div>
                  <div style={{ fontWeight: 700 }}>Doação Mensal</div>
                  <div style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.25rem' }}>Impacto contínuo</div>
                </motion.button>
              </div>
            </motion.div>

            {/* Escolher Valor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '3rem' }}
            >
              <h2 style={{ color: 'var(--primary-dark)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                2. Escolha o Valor da Doação
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                {opcoesDoacoes.map((opt) => (
                  <motion.button
                    key={opt.label}
                    onClick={() => {
                      setValorSelecionado(opt.valor)
                      setValorCustomizado('')
                    }}
                    style={{
                      padding: '1.25rem',
                      border: valorSelecionado === opt.valor ? '2px solid var(--accent)' : '2px solid #ddd',
                      background: valorSelecionado === opt.valor ? 'rgba(0,162,232,0.1)' : '#fff',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: valorSelecionado === opt.valor ? 700 : 600,
                      color: valorSelecionado === opt.valor ? 'var(--primary-dark)' : '#666',
                      transition: 'all 0.2s',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {opt.label}
                  </motion.button>
                ))}
              </div>

              {valorSelecionado === null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#666' }}>R$</span>
                  <input
                    type="number"
                    placeholder="Digite o valor"
                    value={valorCustomizado}
                    onChange={(e) => setValorCustomizado(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.875rem 1rem',
                      border: '2px solid var(--accent)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  />
                </motion.div>
              )}
            </motion.div>

            {/* Escolher Projeto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginBottom: '3rem' }}
            >
              <h2 style={{ color: 'var(--primary-dark)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                3. Escolha um Projeto para Apoiar
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1rem',
                }}
              >
                {projetos.map((proj) => (
                  <motion.button
                    key={proj.id}
                    onClick={() => setProjetoSelecionado(proj.id)}
                    style={{
                      padding: '1.5rem',
                      border: projetoSelecionado === proj.id ? `2px solid ${proj.cor}` : '2px solid #ddd',
                      background: projetoSelecionado === proj.id ? `${proj.cor}15` : '#fff',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                    }}
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{proj.icon}</div>
                    <h3 style={{ margin: '0.5rem 0 0.5rem 0', color: proj.cor, fontWeight: 700 }}>
                      {proj.titulo}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
                      {proj.descricao}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Resumo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: `${projetoAtual?.cor}15`,
                border: `2px solid ${projetoAtual?.cor}`,
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '2rem',
              }}
            >
              <h3 style={{ color: 'var(--primary-dark)', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
                📊 Resumo da sua Doação
              </h3>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>Valor</p>
                  <p style={{ margin: 0, fontSize: '2.2rem', fontWeight: 800, color: projetoAtual?.cor }}>
                    R$ {valor.toFixed(2).replace('.', ',')}
                  </p>
                </div>
                <div style={{ color: '#999', fontSize: '1.5rem' }}>→</div>
                <div>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>Tipo</p>
                  <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: projetoAtual?.cor }}>
                    {tipoDoacao === 'unica' ? 'Doação Única' : 'Doação Mensal'}
                  </p>
                </div>
                <div style={{ color: '#999', fontSize: '1.5rem' }}>→</div>
                <div>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>Projeto</p>
                  <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: projetoAtual?.cor }}>
                    {projetoAtual?.titulo}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Confirmar Doação */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                background: '#fff',
                border: '2px solid var(--accent)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                marginBottom: '2rem',
              }}
            >
              <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                4. Confirme sua Doação
              </h3>

              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Clique no botão abaixo para abrir WhatsApp e confirmar sua doação {tipoDoacao === 'unica' ? 'única' : 'mensal'} de <strong>R$ {valor.toFixed(2).replace('.', ',')}</strong> para <strong>{projetoAtual?.titulo}</strong>.
              </p>

              <motion.a
                href={`https://wa.me/5511939515008?text=Quero%20fazer%20uma%20doação%20${tipoDoacao === 'unica' ? 'única' : 'mensal'}%20de%20R$${valor.toFixed(2).replace('.', '%2C')}%20para%20o%20projeto%20${projetoAtual?.titulo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginTop: '1rem',
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                💬 Confirmar via WhatsApp
              </motion.a>

              <div style={{
                background: 'rgba(0,162,232,0.08)',
                border: '1px solid var(--accent)',
                borderRadius: '8px',
                padding: '1rem',
                marginTop: '1.5rem'
              }}>
                <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', color: '#666' }}>
                  <strong>Ou envie {tipoDoacao === 'unica' ? 'uma doação' : 'suas doações'} via PIX para:</strong>
                </p>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--primary-dark)', wordBreak: 'break-all' }}>
                  08.584.691/0001-20 (CNPJ)
                </p>
              </div>

              <div style={{
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '8px',
                padding: '1.25rem',
                marginTop: '1.5rem'
              }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#666', lineHeight: 1.7 }}>
                  <strong>📄 Recibo:</strong> Forneceremos recibo oficial para sua doação direta, caso solicitado. Entre em contato conosco via WhatsApp ou email para solicitar o comprovante, que pode ser utilizado para benefícios fiscais conforme a Lei de Incentivo ao Esporte.
                </p>
              </div>
            </motion.div>

            {/* Benefícios */}
            {tipoDoacao === 'mensal' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(0,162,232,0.05))',
                  border: '1px solid rgba(34,197,94,0.2)',
                  borderRadius: '12px',
                  padding: '2rem',
                }}
              >
                <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                  ✅ Benefícios de Ser um Doador Mensal
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666', lineHeight: 2 }}>
                  <li>Impacto contínuo na vida de milhares de jovens</li>
                  <li>Lembretes mensais via email para não esquecer de contribuir</li>
                  <li>Recebimento de relatórios mensais sobre seu projeto</li>
                  <li>Depoimentos e histórias de transformação</li>
                  <li>Certificado de Doador Mensal</li>
                  <li>Benefícios fiscais (Lei de Incentivo ao Esporte)</li>
                  <li>Participação em eventos e ações especiais do Instituto</li>
                </ul>
              </motion.div>
            )}

            {tipoDoacao === 'unica' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(0,162,232,0.05))',
                  border: '1px solid rgba(34,197,94,0.2)',
                  borderRadius: '12px',
                  padding: '2rem',
                }}
              >
                <h3 style={{ color: 'var(--primary-dark)', marginBottom: '1rem' }}>
                  ✅ Sua Doação Faz Diferença
                </h3>
                <p style={{ margin: 0, color: '#666', lineHeight: 1.8 }}>
                  Cada contribuição, independente do valor ou frequência, transforma vidas e cria oportunidades reais para jovens talentos em todo o Brasil. Sua doação será documentada para benefícios fiscais (Lei de Incentivo ao Esporte) e você receberá comprovante de sua contribuição.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
