import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'

// Estrutura hierárquica: Leis > Subcategorias > Projetos
// Movida para fora do componente pra evitar recálculo
const leisEstrutura = {
    municipal: {
      nome: 'Secretaria Municipal de Esportes',
      icon: '🏫',
      logo: '/logos/seme.svg',
      cor: '#C41E3A',
      descricao: 'Projetos da SEME - Secretaria Municipal de Esportes',
      projetos: [
        {
          id: 6,
          titulo: 'Clube Escola',
          subtitulo: 'Educação e Inclusão Através do Esporte',
          descricao: 'Programa de acesso a atividades esportivas e recreativas em unidades municipais, promovendo inclusão social e qualidade de vida para crianças e adolescentes da rede pública.',
          detalhes: [
            'Acesso gratuito a atividades esportivas',
            'Múltiplas modalidades oferecidas',
            'Inclusão social e comunitária',
            'Professores especializados',
            'Foco em desenvolvimento integral'
          ],
          apresentacao: '/apresentacoes/Clube_Escola.pptx',
          infografico: null
        },
        {
          id: 7,
          titulo: 'Virada Esportiva - Verão para Todos',
          subtitulo: 'Atividades de Verão Inclusivas',
          descricao: 'Programação de atividades esportivas e recreativas durante o período de férias escolares, democratizando o acesso ao esporte para todas as crianças da cidade.',
          detalhes: [
            'Atividades gratuitas durante o verão',
            'Diversas modalidades esportivas',
            'Programação em diversos bairros',
            'Acesso democrático para todas as crianças',
            'Foco em bem-estar e inclusão'
          ],
          apresentacao: '/apresentacoes/Virada_Esportiva.pptx',
          infografico: null
        }
      ]
    },
    estadual: {
      nome: 'Lei de Incentivo ao Esporte',
      icon: '⚽',
      logo: '/logos/lei-estadual.svg',
      cor: '#0052a3',
      descricao: 'Projetos aprovados pela Secretaria de Esportes do Estado de São Paulo',
      projetos: [
        {
          id: 5,
          titulo: 'Drible Certo no Mundo',
          subtitulo: 'Excelência e Impacto no Basquete 3x3',
          descricao: 'Programa vitorioso de capacitação em Basquete 3x3 - modalidade olímpica. Desenvolvimento de equipes de alto rendimento e formação esportiva estruturada com presença internacional.',
          detalhes: [
            '50+ atletas revelados',
            'Referência no ranking mundial FIBA',
            'Presença em competições internacionais',
            'Metodologia especializada em Basquete 3x3',
            'Parcerias com competições olímpicas'
          ],
          apresentacao: '/apresentacoes/Drible_Certo_2026_Investment_Prospectus (1).pdf',
          infografico: '/infografias/drible-certo.png'
        },
        {
          id: 3,
          titulo: 'Centro de Treinamento 3x3',
          subtitulo: 'Basquete Educacional - Polos Educacionais',
          descricao: 'Centro de Treinamento de Basquete 3x3 - modalidade olímpica que mais cresce no mundo. Formação esportiva educacional de crianças e adolescentes em múltiplos polos.',
          detalhes: [
            'Mais de 300 crianças e jovens atendidas',
            'Atividades de segunda a sexta-feira',
            'Contato com atletas da seleção brasileira',
            'Suporte assistencial com assistentes sociais',
            'Acompanhamento integral das famílias'
          ],
          apresentacao: '/apresentacoes/CENTRO DE TREINAMENTO 3X3 - 2026.pdf',
          infografico: null
        },
        {
          id: 2,
          titulo: 'Circuitos IFC',
          subtitulo: 'Corridas de Rua Inclusivas',
          descricao: 'Mais de 30 etapas anuais de corridas de rua em todo o Brasil. Eventos massivos e inclusivos com área kids, shows ao vivo, ativações e premiações.',
          detalhes: [
            '30+ etapas por ano em todo Brasil',
            'Eventos massivos e inclusivos',
            'Área kids e programação familiar',
            'Shows ao vivo e ativações',
            'Foco em saúde preventiva para todas as idades'
          ],
          apresentacao: '/apresentacoes/Circuitos IFC_NeoRunning2026.pdf',
          infografico: '/infografias/circuitos-ifc.png'
        }
      ]
    },
    federal: {
      nome: 'Lei Federal',
      icon: '🇧🇷',
      logo: '/logos/lei-federal.svg',
      cor: '#22a347',
      descricao: 'Projetos apoiados por Leis Federais',
      subcategorias: [
        {
          id: 'lei-incentivo-esporte',
          nome: 'Lei de Incentivo ao Esporte',
          icon: '🏆',
          cor: '#22a347',
          descricao: 'Projetos aprovados pelo Ministério do Esporte',
          projetos: [
            {
              id: 5,
              titulo: 'Programa de Capacitação 3x3',
              subtitulo: 'Alto Rendimento e Formação Esportiva',
              descricao: 'Programa vitorioso de capacitação em Basquete 3x3 - modalidade olímpica. Desenvolvimento de equipes de alto rendimento e formação esportiva estruturada.',
              detalhes: [
                'Programa mais vitorioso do país em 3x3',
                'Formação de equipes de alto rendimento',
                'Desenvolvimento de atletas para competições olímpicas',
                'Metodologia especializada em Basquete 3x3',
                'Parcerias com competições internacionais'
              ],
              apresentacao: '/apresentacoes/Programa de Capacitação 3x3.pptx',
              infografico: '/infografias/programa-capacitacao-3x3.png'
            },
            {
              id: 8,
              titulo: 'Centro de Treinamento 3x3 — Federal',
              subtitulo: 'Basquete Educacional via Lei Federal de Incentivo',
              descricao: 'Centro de Treinamento de Basquete 3x3 com captação pela Lei Federal de Incentivo ao Esporte. Formação esportiva educacional de crianças e adolescentes em múltiplos polos, com financiamento federal.',
              detalhes: [
                'Captação via Lei Federal de Incentivo ao Esporte',
                'Mais de 300 crianças e jovens atendidas',
                'Atividades de segunda a sexta-feira',
                'Contato com atletas da seleção brasileira',
                'Suporte assistencial com assistentes sociais'
              ],
              apresentacao: '/apresentacoes/CENTRO DE TREINAMENTO 3X3 - 2026.pdf',
              infografico: null
            },
            {
              id: 9,
              titulo: 'Circuitos IFC - Neo Running — Federal',
              subtitulo: 'Corridas de Rua via Lei Federal de Incentivo',
              descricao: 'Mais de 30 etapas anuais de corridas de rua em todo o Brasil, com captação pela Lei Federal de Incentivo ao Esporte. Eventos massivos e inclusivos com área kids, shows ao vivo e premiações.',
              detalhes: [
                'Captação via Lei Federal de Incentivo ao Esporte',
                '30+ etapas por ano em todo Brasil',
                'Eventos massivos e inclusivos',
                'Área kids e programação familiar',
                'Foco em saúde preventiva para todas as idades'
              ],
              apresentacao: '/apresentacoes/Circuitos IFC_NeoRunning2026.pdf',
              infografico: '/infografias/circuitos-ifc.png'
            },
            {
              id: 10,
              titulo: 'Bike Conectando Histórias',
              subtitulo: 'Ciclismo, Inclusão e Cidadania',
              descricao: 'Projeto de ciclismo social que conecta jovens, comunidades e histórias através do esporte. Promoção da mobilidade sustentável e inclusão social por meio da bicicleta.',
              detalhes: [
                'Inclusão social através do ciclismo',
                'Conexão entre comunidades e jovens talentos',
                'Promoção da mobilidade sustentável',
                'Desenvolvimento de cidadania e valores esportivos',
                'Atendimento em múltiplos bairros e cidades'
              ],
              apresentacao: null,
              infografico: null
            },
            {
              id: 11,
              titulo: 'Futuros Craques no Futebol',
              subtitulo: 'Formação Esportiva e Social pelo Futebol',
              descricao: 'Programa de formação esportiva e social através do futebol, revelando talentos e promovendo valores como trabalho em equipe, disciplina e respeito entre crianças e jovens.',
              detalhes: [
                'Formação esportiva estruturada no futebol',
                'Desenvolvimento de valores e cidadania',
                'Revelação de talentos esportivos',
                'Acompanhamento escolar e social dos atletas',
                'Parcerias com clubes e federações de futebol'
              ],
              apresentacao: null,
              infografico: null
            }
          ]
        },
        {
          id: 'condeca',
          nome: 'CONDECA',
          icon: '📜',
          cor: '#d4af37',
          descricao: 'Projeto de Utilidade Pública reconhecido pela CONDECA',
          projetos: [
            {
              id: 4,
              titulo: 'Escola do Dinheiro',
              subtitulo: 'Educação Financeira Consciente',
              descricao: 'Programa de educação financeira e mentalidade consciente para jovens. Carreta pedagógica itinerante que atende 10.800 jovens de 11 a 17 anos.',
              detalhes: [
                '10.800 jovens impactados diretamente',
                'Atendimento em 12 cidades de São Paulo',
                'Carreta pedagógica itinerante com capacidade para 35 alunos',
                'Aulas de 60 minutos sobre mentalidade financeira',
                'Clínicas financeiras aos fins de semana para comunidade'
              ],
              apresentacao: '/apresentacoes/Escola_do_Dinheiro_Impact_Report.pptx',
              infografico: '/infografias/escola-dinheiro.png'
            }
          ]
        }
      ]
    }
}

const LEI_KEYS = ['municipal', 'estadual', 'federal']

export default function Projetos() {
  const [selectedLei, setSelectedLei] = useState(null)
  const [selectedSubcategoria, setSelectedSubcategoria] = useState(null)
  const [selectedProjeto, setSelectedProjeto] = useState(null)

  const leiAtual = useMemo(() => selectedLei ? leisEstrutura[selectedLei] : null, [selectedLei])
  const temSubcategorias = useMemo(() => leiAtual && leiAtual.subcategorias, [leiAtual])
  const subcategoriasAtual = useMemo(() => temSubcategorias ? leiAtual.subcategorias : [], [temSubcategorias, leiAtual])
  const subcategoriaAtual = useMemo(() => selectedSubcategoria && temSubcategorias ? subcategoriasAtual.find(s => s.id === selectedSubcategoria) : null, [selectedSubcategoria, temSubcategorias, subcategoriasAtual])
  const projetos = useMemo(() => subcategoriaAtual ? subcategoriaAtual.projetos : (leiAtual && leiAtual.projetos ? leiAtual.projetos : []), [subcategoriaAtual, leiAtual])
  const projetoAtual = useMemo(() => selectedProjeto ? projetos.find(p => p.id === selectedProjeto) : null, [selectedProjeto, projetos])

  return (
    <section className="projetos-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projetos-header"
        >
          <h1 className="section-title">Nossos Projetos</h1>
          <p className="section-subtitle">
            Conheça as iniciativas que transformam vidas através do esporte e da educação
          </p>
        </motion.div>

        {/* Organograma de Leis */}
        {!selectedLei && (
          <motion.div
            className="organo-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666', fontSize: '1.05rem' }}>
              Selecione a categoria de lei para ver os projetos disponíveis:
            </p>
            <div className="leis-grid">
              {LEI_KEYS.map((key, index) => {
                const lei = leisEstrutura[key]
                return (
                  <motion.button
                    key={key}
                    className="lei-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ boxShadow: `0 12px 40px ${lei.cor}25` }}
                    onClick={() => setSelectedLei(key)}
                    style={{
                      borderTopColor: lei.cor,
                      borderTopWidth: '4px'
                    }}
                  >
                    {lei.logo ? (
                      <img src={lei.logo} alt={lei.nome} className="lei-logo" style={{ height: '90px', maxWidth: '200px', objectFit: 'contain' }} />
                    ) : (
                      <span className="lei-icon">{lei.icon}</span>
                    )}
                    <h3>{lei.nome}</h3>
                    <p>{lei.descricao}</p>
                    <span className="lei-count">
                      {lei.projetos ? lei.projetos.length : lei.subcategorias?.reduce((acc, sub) => acc + (sub.projetos?.length || 0), 0) || 0} projeto{
                        (lei.projetos ? lei.projetos.length : lei.subcategorias?.reduce((acc, sub) => acc + (sub.projetos?.length || 0), 0) || 0) !== 1 ? 's' : ''
                      }
                    </span>
                    <ChevronDown size={20} style={{ marginTop: '0.5rem', color: lei.cor }} />
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Listagem de Subcategorias (apenas Lei Federal) */}
        {selectedLei && temSubcategorias && !selectedSubcategoria && !selectedProjeto && (
          <motion.div
            className="projetos-list-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="btn-voltar"
              onClick={() => setSelectedLei(null)}
              whileHover={{ x: -4 }}
            >
              ← Voltar ao Menu
            </motion.button>

            <div className="lei-info" style={{ borderTopColor: leiAtual.cor }}>
              <span className="lei-icon-grande">{leiAtual.icon}</span>
              <h2>{leiAtual.nome}</h2>
              <p>{leiAtual.descricao}</p>
            </div>

            <div className="projetos-lista">
              {subcategoriasAtual.map((subcategoria, index) => (
                <motion.div
                  key={subcategoria.id}
                  className="projeto-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  onClick={() => setSelectedSubcategoria(subcategoria.id)}
                  whileHover={{ boxShadow: `0 10px 30px ${subcategoria.cor}20` }}
                  style={{ borderLeftColor: subcategoria.cor }}
                >
                  <div className="projeto-item-info">
                    <h3>{subcategoria.nome}</h3>
                    <p className="projeto-item-subtitulo">{subcategoria.icon}</p>
                    <p className="projeto-item-descricao">{subcategoria.descricao}</p>
                  </div>
                  <ChevronDown size={20} style={{ color: subcategoria.cor, transform: 'rotate(-90deg)' }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Listagem de Projetos de uma Lei ou Subcategoria */}
        {selectedLei && !selectedProjeto && (!temSubcategorias || selectedSubcategoria) && (
          <motion.div
            className="projetos-list-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="btn-voltar"
              onClick={() => {
                if (selectedSubcategoria) {
                  setSelectedSubcategoria(null)
                } else {
                  setSelectedLei(null)
                }
              }}
              whileHover={{ x: -4 }}
            >
              ← Voltar {selectedSubcategoria ? 'às Categorias' : 'ao Menu'}
            </motion.button>

            <div className="lei-info" style={{ borderTopColor: subcategoriaAtual ? subcategoriaAtual.cor : leiAtual.cor }}>
              <span className="lei-icon-grande">{subcategoriaAtual ? subcategoriaAtual.icon : leiAtual.icon}</span>
              <h2>{subcategoriaAtual ? subcategoriaAtual.nome : leiAtual.nome}</h2>
              <p>{subcategoriaAtual ? subcategoriaAtual.descricao : leiAtual.descricao}</p>
            </div>

            <div className="projetos-lista">
              {projetos.map((projeto, index) => (
                <motion.div
                  key={projeto.id}
                  className="projeto-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  onClick={() => setSelectedProjeto(projeto.id)}
                  whileHover={{ boxShadow: `0 10px 30px ${(subcategoriaAtual || leiAtual).cor}20` }}
                  style={{ borderLeftColor: (subcategoriaAtual || leiAtual).cor }}
                >
                  <div className="projeto-item-info">
                    <h3>{projeto.titulo}</h3>
                    <p className="projeto-item-subtitulo">{projeto.subtitulo}</p>
                    <p className="projeto-item-descricao">{projeto.descricao}</p>
                  </div>
                  <ChevronDown size={20} style={{ color: (subcategoriaAtual || leiAtual).cor, transform: 'rotate(-90deg)' }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Detalhe de um Projeto */}
        {selectedProjeto && projetoAtual && (
          <motion.div
            className="projeto-detalhe-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="btn-voltar"
              onClick={() => setSelectedProjeto(null)}
              whileHover={{ x: -4 }}
            >
              ← Voltar aos Projetos
            </motion.button>

            <motion.div
              className="projeto-detalhe-card"
              style={{ borderTopColor: subcategoriaAtual ? subcategoriaAtual.cor : leiAtual.cor, borderTopWidth: '6px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="projeto-detalhe-header">
                <h1>{projetoAtual.titulo}</h1>
                <p className="detalhe-subtitulo">{projetoAtual.subtitulo}</p>
                <span className="detalhe-lei" style={{ backgroundColor: subcategoriaAtual ? subcategoriaAtual.cor : leiAtual.cor }}>
                  {subcategoriaAtual ? subcategoriaAtual.nome : leiAtual.nome}
                </span>
              </div>

              <div className="projeto-detalhe-conteudo">
                <p className="detalhe-descricao">{projetoAtual.descricao}</p>

                {projetoAtual.infografico && (
                  <div className="infografico-container">
                    <img src={projetoAtual.infografico} alt={projetoAtual.titulo} />
                  </div>
                )}

                <div className="projeto-detalhe-detalhes">
                  <h3>Características Principais:</h3>
                  <ul>
                    {projetoAtual.detalhes.map((detalhe, i) => (
                      <li key={i}>{detalhe}</li>
                    ))}
                  </ul>
                </div>

                {projetoAtual.apresentacao && (
                  <motion.button
                    className="btn-conhecer"
                    style={{ backgroundColor: subcategoriaAtual ? subcategoriaAtual.cor : leiAtual.cor }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const url = `/visualizar.html?file=${encodeURIComponent(projetoAtual.apresentacao)}`
                      window.open(url, '_blank')
                    }}
                  >
                    Conheça o Programa Completo →
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
