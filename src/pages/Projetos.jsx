import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Projetos() {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const projetos = [
    {
      id: 1,
      titulo: 'Projeto Saque Certo',
      subtitulo: 'Formação de Atletas de Tênis de Alto Rendimento',
      descricao: 'Iniciativa de elite focada na transição de jovens tenistas para o circuito profissional.',
      objetivo: 'Identificar e preparar talentos de destaque para 14 grandes torneios nacionais e internacionais anuais.',
      publico: 'Jovens atletas masculinos de 15 a 17 anos',
      status: 'Captação',
      duracao: '12 meses',
      impacto: 'Elevação do nível competitivo e desenvolvimento de resiliência mental',
      beneficiados: '3 atletas selecionados',
      categoria: 'alto-rendimento',
      cores: { primaria: '#FFD700', secundaria: 'rgba(255, 215, 0, 0.1)' }
    },
    {
      id: 2,
      titulo: 'Futuros Craques no Futebol',
      descricao: 'Escolinha de futebol de salão para crianças e adolescentes em regiões de vulnerabilidade social.',
      objetivo: 'Propiciar desenvolvimento integral através de metodologias de boas práticas desportivas.',
      publico: 'Crianças e adolescentes de 6 a 18 anos',
      status: 'Captação',
      duracao: '12 meses',
      impacto: 'Melhoria na qualidade de vida e inclusão social',
      beneficiados: '200 beneficiários diretos',
      categoria: 'social',
      cores: { primaria: '#FF6B35', secundaria: 'rgba(255, 107, 53, 0.1)' }
    },
    {
      id: 3,
      titulo: 'Basquete 3x3',
      subtitulo: 'Drible Certo 3x3 - Fase 5',
      descricao: 'Projeto que une alto rendimento e formação de base em basquete 3x3.',
      objetivo: 'Fomentar basquete 3x3 e revelar talentos para a Seleção Brasileira.',
      publico: 'Crianças 6-14 anos e atletas de alto rendimento',
      status: 'Em Andamento',
      duracao: '12 meses por fase',
      impacto: 'Brasil consolidado como potência mundial universitária',
      beneficiados: '~300 crianças + 24 atletas bolsistas',
      categoria: 'misto',
      cores: { primaria: '#16A34A', secundaria: 'rgba(22, 163, 74, 0.1)' }
    },
    {
      id: 4,
      titulo: 'Centro de Treinamento 3x3',
      descricao: 'Programa estruturado de formação de atletas de basquete 3x3.',
      objetivo: 'Desenvolver talentos através de treinamento sistematizado.',
      publico: 'Crianças, adolescentes e jovens atletas',
      status: 'Em Andamento',
      duracao: 'Contínuo',
      impacto: 'Formação de atletas competitivos',
      beneficiados: '300+ beneficiários',
      categoria: 'formacao',
      cores: { primaria: '#0EA5E9', secundaria: 'rgba(14, 165, 233, 0.1)' }
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'alto-rendimento', nome: 'Alto Rendimento' },
    { id: 'social', nome: 'Social' },
    { id: 'misto', nome: 'Misto' },
    { id: 'formacao', nome: 'Formação' }
  ];

  const projetosFiltrados = filtroAtivo === 'todos'
    ? projetos
    : projetos.filter(p => p.categoria === filtroAtivo);

  return (
    <div className="projetos-page">
      <section className="projetos-hero">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Nossos Projetos</h1>
          <p>Transformando vidas através do esporte e da educação</p>
        </motion.div>
      </section>

      <section className="projetos-filtros">
        <div className="filtros-container">
          {categorias.map((cat) => (
            <motion.button
              key={cat.id}
              className={`filtro-btn ${filtroAtivo === cat.id ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.nome}
            </motion.button>
          ))}
        </div>
      </section>

      <section className="projetos-container">
        <div className="projetos-grid">
          {projetosFiltrados.map((projeto) => (
            <motion.div
              key={projeto.id}
              className="project-card"
              whileHover={{ y: -12 }}
              style={{
                '--card-primary': projeto.cores.primaria,
                '--card-secondary': projeto.cores.secundaria,
              }}
            >
              <div className="card-header">
                <div className="card-color-bar" style={{ backgroundColor: projeto.cores.primaria }}></div>
                <h3>{projeto.titulo}</h3>
                {projeto.subtitulo && (
                  <p className="card-subtitulo">{projeto.subtitulo}</p>
                )}
              </div>

              <div className="card-body">
                <div className="info-section">
                  <p className="card-descricao">{projeto.descricao}</p>
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <label>Status</label>
                    <span className={`badge badge-${projeto.status.toLowerCase().replace(' ', '-')}`}>
                      {projeto.status}
                    </span>
                  </div>
                  <div className="info-item">
                    <label>Duração</label>
                    <span>{projeto.duracao}</span>
                  </div>
                  <div className="info-item">
                    <label>Público</label>
                    <span>{projeto.publico}</span>
                  </div>
                  <div className="info-item">
                    <label>Beneficiados</label>
                    <span className="beneficiados">{projeto.beneficiados}</span>
                  </div>
                </div>

                <div className="info-section">
                  <label className="section-label">Objetivo</label>
                  <p className="objetivo">{projeto.objetivo}</p>
                </div>

                <div className="info-section">
                  <label className="section-label">Impacto Esperado</label>
                  <p className="impacto">{projeto.impacto}</p>
                </div>
              </div>

              <div className="card-footer">
                <motion.a
                  href="#contato"
                  className="saiba-mais-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba Mais
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="projetos-cta">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <h2>Quer fazer parte dessa transformação?</h2>
          <p>Apoie nossos projetos e ajude a transformar vidas através do esporte</p>
          <motion.button className="cta-btn">
            Contribuir Agora
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}