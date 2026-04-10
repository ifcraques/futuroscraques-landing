import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DoacaoMateriais() {
  const [formData, setFormData] = useState({
    nomeProduto: '',
    descricao: '',
    tamanho: '',
    emCaixa: '',
    perecivel: '',
    contato: '',
    email: ''
  })

  const [donativos, setDonativos] = useState([])
  const [filtro, setFiltro] = useState('')
  const [formularioAberto, setFormularioAberto] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.nomeProduto.trim()) {
      alert('Por favor, preencha o nome do produto.')
      return
    }

    const novoDonativo = {
      id: Date.now(),
      nomeProduto: formData.nomeProduto.trim(),
      descricao: formData.descricao,
      tamanho: formData.tamanho,
      emCaixa: formData.emCaixa,
      perecivel: formData.perecivel,
      contato: formData.contato,
      email: formData.email
    }

    setDonativos(prev => [...prev, novoDonativo].sort((a, b) =>
      a.nomeProduto.localeCompare(b.nomeProduto)
    ))

    setFormData({
      nomeProduto: '',
      descricao: '',
      tamanho: '',
      emCaixa: '',
      perecivel: '',
      contato: '',
      email: ''
    })

    alert('Doação registrada com sucesso! Obrigado por contribuir.')
  }

  const donativosFiltrados = donativos.filter(d =>
    d.nomeProduto.toLowerCase().includes(filtro.toLowerCase())
  )

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
            <span className="page-pretitle">Compartilhe</span>
            <h1>Doação de Materiais</h1>
            <p>
              Equipamentos esportivos, materiais escolares, uniformes e outros itens
              que fazem diferença no dia a dia dos nossos jovens.
            </p>
          </motion.div>
        </section>

        <section className="section">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Seção de Formulário */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '3rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h2 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', margin: 0 }}>
                  📦 Registre seu Donativo
                </h2>
                <motion.button
                  onClick={() => setFormularioAberto(!formularioAberto)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: formularioAberto ? 'var(--accent)' : '#f0f0f0',
                    color: formularioAberto ? '#fff' : 'var(--primary-dark)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.3s'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {formularioAberto ? 'Fechar Formulário' : 'Abrir Formulário'}
                </motion.button>
              </div>

              {formularioAberto && (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: '#f9f9f9',
                    border: '2px solid var(--accent)',
                    borderRadius: '16px',
                    padding: '2rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem',
                  }}
                >
                  {/* Nome do Produto */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
                      📌 Nome do Produto *
                    </label>
                    <input
                      type="text"
                      name="nomeProduto"
                      value={formData.nomeProduto}
                      onChange={handleChange}
                      placeholder="Ex: Coletes de Basquete, Chuteiras Infantis, Notebooks"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit'
                      }}
                    />
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#999' }}>
                      Este nome será abreviado e aparecerá na barra de busca
                    </p>
                  </div>

                  {/* Descrição */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
                      📝 Descrição do Produto
                    </label>
                    <textarea
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleChange}
                      placeholder="Ex: Coletes marca Nike, tamanho P, em bom estado, cores azul e branco"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        minHeight: '100px',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Tamanho */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
                      📏 Tamanho
                    </label>
                    <input
                      type="text"
                      name="tamanho"
                      value={formData.tamanho}
                      onChange={handleChange}
                      placeholder="Ex: P, M, G, ou dimensões"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  {/* Em Caixa */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
                      📦 Em Caixa Original?
                    </label>
                    <select
                      name="emCaixa"
                      value={formData.emCaixa}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="">Selecione...</option>
                      <option value="sim">Sim, em caixa original</option>
                      <option value="nao">Não, sem caixa</option>
                      <option value="parcial">Parcialmente embalado</option>
                    </select>
                  </div>

                  {/* Perecível */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
                      ⏰ É Perecível?
                    </label>
                    <select
                      name="perecivel"
                      value={formData.perecivel}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="">Selecione...</option>
                      <option value="nao">Não, não é perecível</option>
                      <option value="sim">Sim, é perecível</option>
                      <option value="data">Sim, com data de validade</option>
                    </select>
                  </div>

                  {/* Contato */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
                      📞 Seu Nome
                    </label>
                    <input
                      type="text"
                      name="contato"
                      value={formData.contato}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--primary-dark)' }}>
                      📧 Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  {/* Botão Submit */}
                  <motion.button
                    type="submit"
                    style={{
                      gridColumn: '1 / -1',
                      padding: '1rem',
                      background: 'var(--accent)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    ✅ Registrar Donativo
                  </motion.button>
                </motion.form>
              )}
            </motion.div>

            {/* Seção de Buscas */}
            {donativos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ marginBottom: '2rem' }}
              >
                <h2 style={{ color: 'var(--primary-dark)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                  🔍 Procurar Donativos ({donativos.length})
                </h2>

                <input
                  type="text"
                  placeholder="Digite o nome do produto (busca alfabética)..."
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid var(--accent)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    marginBottom: '1.5rem',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    maxHeight: '600px',
                    overflowY: 'auto',
                    paddingRight: '1rem'
                  }}
                >
                  {donativosFiltrados.length > 0 ? (
                    donativosFiltrados.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: '#fff',
                          border: '2px solid #e0e0e0',
                          borderRadius: '12px',
                          padding: '1.25rem',
                          transition: 'all 0.3s',
                        }}
                        whileHover={{ boxShadow: '0 8px 20px rgba(0,0,0,0.1)', y: -4 }}
                      >
                        <h3 style={{ color: 'var(--primary-dark)', margin: '0 0 0.75rem 0', fontSize: '1.1rem' }}>
                          {item.nomeProduto}
                        </h3>

                        {item.descricao && (
                          <p style={{ margin: '0.5rem 0', color: '#666', fontSize: '0.9rem', lineHeight: 1.5 }}>
                            {item.descricao}
                          </p>
                        )}

                        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee', fontSize: '0.9rem', color: '#666' }}>
                          {item.tamanho && <p style={{ margin: '0.25rem 0' }}>📏 Tamanho: {item.tamanho}</p>}
                          {item.emCaixa && <p style={{ margin: '0.25rem 0' }}>📦 {item.emCaixa === 'sim' ? 'Em caixa original' : item.emCaixa === 'nao' ? 'Sem caixa' : 'Parcialmente embalado'}</p>}
                          {item.perecivel && <p style={{ margin: '0.25rem 0' }}>⏰ {item.perecivel === 'nao' ? 'Não perecível' : 'Perecível'}</p>}
                        </div>

                        {item.contato && (
                          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                            <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#999' }}>
                              <strong>Doador:</strong> {item.contato}
                            </p>
                            {item.email && (
                              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#999' }}>
                                <strong>Email:</strong> {item.email}
                              </p>
                            )}
                          </div>
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: '#999' }}>
                      <p>Nenhum produto encontrado com "{filtro}"</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {donativos.length === 0 && !formularioAberto && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(0,162,232,0.05))',
                  border: '1px solid rgba(34,197,94,0.2)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                  color: '#666'
                }}
              >
                <p style={{ fontSize: '1.1rem', margin: 0 }}>
                  Abra o formulário acima para registrar um donativo e ajudar nossos jovens.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Informações Adicionais */}
        <section className="section" style={{ background: 'rgba(0,162,232,0.05)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ color: 'var(--primary-dark)', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
                ✅ Como Funciona
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>1. Registre</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    Preencha o formulário com detalhes do produto que deseja doar.
                  </p>
                </div>
                <div>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>2. Visualize</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    Seu donativo aparece na barra de busca organizado alfabeticamente.
                  </p>
                </div>
                <div>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>3. Entre em Contato</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    Outras pessoas podem contatá-lo diretamente para combinar a doação.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', background: '#fff', borderLeft: '4px solid var(--accent)', padding: '1.5rem', borderRadius: '8px' }}>
                <p style={{ color: '#666', lineHeight: 1.8, margin: 0 }}>
                  <strong>📌 Dúvidas?</strong> Entre em contato conosco via WhatsApp ou email para mais informações sobre doações de materiais e como agendar a entrega.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
