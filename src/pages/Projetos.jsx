import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const PROJETOS = [
  {
    id: 1,
    num: '01',
    titulo: 'Drible Certo 3×3',
    subtitulo: 'DC3X3 — Basquete 3×3 Olímpico',
    descricao: 'O projeto mais importante de desenvolvimento de atletas de basquete 3×3 do país. Com ~250 milhões de adeptos no mundo, o IFC forma talentos para a Seleção Brasileira e projeta o Brasil como potência na modalidade.',
    publico: 'Crianças, adolescentes e atletas de alto rendimento',
    beneficiados: '50+ atletas revelados para seleções',
    status: 'Em andamento',
    categoria: 'basquete',
    cor: '#16a34a',
    url: 'https://www.futuroscraques.org/blank-3-1',
  },
  {
    id: 2,
    num: '02',
    titulo: 'Centro de Treinamento 3×3',
    subtitulo: 'Formação de Alto Nível desde 2014',
    descricao: 'Escolinha de basquete do IFC dedicada à formação de atletas de alto nível na modalidade olímpica. Desde 2014 promove inclusão social com treinamentos regulares e competições nacionais e internacionais.',
    publico: 'Crianças e jovens atletas',
    beneficiados: '50+ atletas nas seleções brasileiras',
    status: 'Em andamento',
    categoria: 'basquete',
    cor: '#0ea5e9',
    url: 'https://www.futuroscraques.org/ct3x3oficial',
  },
  {
    id: 3,
    num: '03',
    titulo: 'Circuitos IFC',
    subtitulo: 'Corridas de Rua em Todo o Brasil',
    descricao: 'Corridas de rua democráticas e acessíveis com mais de 27 etapas realizadas em todo o Brasil. Eventos com área kids, shows ao vivo, ativações de marcas e premiações especiais para idosos.',
    publico: 'Pessoas de todas as idades',
    beneficiados: '27+ etapas realizadas',
    status: 'Em andamento',
    categoria: 'corridas',
    cor: '#f97316',
    url: 'https://www.futuroscraques.org/circuitosifc',
  },
  {
    id: 4,
    num: '04',
    titulo: 'Projeto Clube Escola',
    subtitulo: 'Contraturno Escolar com Esportes de Areia',
    descricao: 'Atendimento de crianças e adolescentes no contraturno escolar com atividades físicas nas modalidades de Futevôlei, Beach Vôlei, Beach Tênis, Beach Soccer e Futebol de Campo.',
    publico: 'Crianças e adolescentes em contraturno',
    beneficiados: 'Centenas de alunos atendidos',
    status: 'Em andamento',
    categoria: 'praia',
    cor: '#eab308',
    url: 'https://www.futuroscraques.org/clubeescola2023',
  },
  {
    id: 5,
    num: '05',
    titulo: 'Verão Para Todos',
    subtitulo: 'Baixada Santista desde 2017',
    descricao: 'Desde 2017 com 10 edições na Baixada Santista e São Paulo. Beach tennis, vôlei de praia, futevôlei e frescobol, além de atividades recreativas. Participação em duas edições da Virada Esportiva.',
    publico: 'Pessoas de todas as idades',
    beneficiados: '10 edições realizadas',
    status: 'Em andamento',
    categoria: 'praia',
    cor: '#06b6d4',
    url: 'https://www.futuroscraques.org/veraooficial',
  },
  {
    id: 6,
    num: '06',
    titulo: 'Festival Beach Games 2025',
    subtitulo: 'Santos/SP — Praia do Gonzaga',
    descricao: 'Evento 100% gratuito na Praia do Gonzaga, Santos/SP. Quatro dias com Beach Tênis, Futevôlei e Futmesa. Escolinhas gratuitas para crianças em vulnerabilidade social, estrutura de +3.000 m².',
    publico: 'Crianças, adolescentes e comunidade',
    beneficiados: '700 diretos / 3.000 indiretos',
    status: 'Em andamento',
    categoria: 'praia',
    cor: '#8b5cf6',
    url: 'https://www.futuroscraques.org/festivalbeachsports',
  },
  {
    id: 7,
    num: '07',
    titulo: 'Escola do Dinheiro',
    subtitulo: 'Educação Financeira em 12 Cidades',
    descricao: 'Projeto que leva educação financeira de forma didática e interativa para 12 cidades do estado de São Paulo, com aulas e recursos que tornam o aprendizado mais leve e eficiente.',
    publico: 'Jovens e comunidade em geral',
    beneficiados: '12 cidades atendidas',
    status: 'Em andamento',
    categoria: 'social',
    cor: '#10b981',
    url: 'https://www.futuroscraques.org/projetos',
  },
]

const CATEGORIAS = [
  { id: 'todos', nome: 'Todos' },
  { id: 'basquete', nome: 'Basquete 3×3' },
  { id: 'corridas', nome: 'Corridas' },
  { id: 'praia', nome: 'Esportes de Praia' },
  { id: 'social', nome: 'Social' },
]

const STATUS_COR = {
  'Em andamento': { bg: 'rgba(22,163,74,0.12)', text: '#16a34a', border: 'rgba(22,163,74,0.3)' },
  'Captação':     { bg: 'rgba(234,179,8,0.1)',  text: '#ca8a04', border: 'rgba(234,179,8,0.3)'  },
}

function ProjetoCard({ projeto, index }) {
  const sc = STATUS_COR[projeto.status] ?? STATUS_COR['Captação']

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '2px',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
        cursor: 'default',
      }}
      whileHover={{ borderColor: `${projeto.cor}44` }}
    >
      {/* linha de cor superior */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px', background: projeto.cor,
        transformOrigin: 'left',
      }} />

      {/* número + status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.6rem', letterSpacing: '0.16em',
          color: projeto.cor, fontWeight: 500,
        }}>
          {projeto.num}
        </span>
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: sc.text, background: sc.bg,
          border: `1px solid ${sc.border}`,
          padding: '3px 10px', borderRadius: '2px',
        }}>
          {projeto.status}
        </span>
      </div>

      {/* título */}
      <div>
        <h3 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
          fontWeight: 400, color: '#111827',
          lineHeight: 1.1, marginBottom: '0.3rem',
        }}>
          {projeto.titulo}
        </h3>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.65rem', letterSpacing: '0.1em',
          color: '#6b7280', textTransform: 'uppercase',
        }}>
          {projeto.subtitulo}
        </p>
      </div>

      {/* descrição */}
      <p style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: '0.82rem', color: '#374151',
        lineHeight: 1.75, fontWeight: 300,
        flex: 1,
      }}>
        {projeto.descricao}
      </p>

      {/* detalhes */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        paddingTop: '1.2rem',
        borderTop: '1px solid #e5e7eb',
      }}>
        <div>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Outfit', sans-serif" }}>Público</div>
          <div style={{ fontSize: '0.72rem', color: '#374151', fontFamily: "'Outfit', sans-serif", lineHeight: 1.5 }}>{projeto.publico}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Outfit', sans-serif" }}>Beneficiados</div>
          <div style={{ fontSize: '0.72rem', color: projeto.cor, fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}>{projeto.beneficiados}</div>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Link to="/comoapoiar" style={{ textDecoration: 'none', flex: 1 }}>
          <button style={{
            width: '100%',
            background: 'transparent',
            border: `1px solid #d1d5db`,
            color: '#6b7280',
            padding: '10px',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            cursor: 'pointer', borderRadius: '2px',
            transition: 'background 0.2s, color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = projeto.cor + '18'
            e.currentTarget.style.color = projeto.cor
            e.currentTarget.style.borderColor = projeto.cor + '55'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#6b7280'
            e.currentTarget.style.borderColor = '#d1d5db'
          }}
          >
            Apoie →
          </button>
        </Link>
        <a href={projeto.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            background: 'transparent',
            border: `1px solid #d1d5db`,
            color: '#6b7280',
            padding: '10px 14px',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.7rem',
            cursor: 'pointer', borderRadius: '2px',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#374151'
            e.currentTarget.style.borderColor = '#9ca3af'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#6b7280'
            e.currentTarget.style.borderColor = '#d1d5db'
          }}
          title="Ver no site oficial"
          >
            ↗
          </button>
        </a>
      </div>
    </motion.div>
  )
}

export default function Projetos() {
  const [filtro, setFiltro] = useState('todos')

  const filtrados = filtro === 'todos'
    ? PROJETOS
    : PROJETOS.filter(p => p.categoria === filtro)

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>

      {/* Header da página */}
      <div style={{ padding: '4rem clamp(1.5rem, 6vw, 6rem) 0' }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.6rem', letterSpacing: '0.22em',
          color: '#16a34a', textTransform: 'uppercase', marginBottom: '1.2rem',
        }}>
          Iniciativas
        </p>
        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2.8rem, 7vw, 6rem)',
          fontWeight: 400, color: '#111827',
          lineHeight: 1, marginBottom: '1.5rem',
        }}>
          Nossos <em style={{ fontStyle: 'italic', color: '#4b5563' }}>projetos</em>
        </h1>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(0.85rem, 1vw, 1rem)',
          color: '#4b5563', maxWidth: '520px',
          lineHeight: 1.75, fontWeight: 300,
        }}>
          Programas socioeducativos que unem esporte, formação e cidadania para transformar a vida de jovens em todo o Brasil.
        </p>
      </div>

      {/* Filtros */}
      <div style={{
        padding: '2.5rem clamp(1.5rem, 6vw, 6rem)',
        display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
        borderBottom: '1px solid #e5e7eb',
      }}>
        {CATEGORIAS.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFiltro(cat.id)}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '7px 16px', borderRadius: '2px', cursor: 'pointer',
              border: filtro === cat.id ? '1px solid #16a34a' : '1px solid #d1d5db',
              background: filtro === cat.id ? 'rgba(22,163,74,0.1)' : 'transparent',
              color: filtro === cat.id ? '#16a34a' : '#374151',
              transition: 'all 0.2s',
            }}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      {/* Grid de projetos */}
      <div style={{ padding: '3rem clamp(1.5rem, 6vw, 6rem) 6rem' }}>
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '1px',
            background: '#e5e7eb',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtrados.map((projeto, i) => (
              <ProjetoCard key={projeto.id} projeto={projeto} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtrados.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '5rem',
            color: '#9ca3af',
            fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem',
          }}>
            Nenhum projeto nesta categoria.
          </div>
        )}
      </div>

      {/* CTA */}
      <div style={{
        borderTop: '1px solid #e5e7eb',
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
          <button className="liquid-glass" style={{
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

    </div>
  )
}
