import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

/**
 * IFC Timeline - Nossa História
 * Glassmorphism vertical timeline alinhado com o design do site.
 */

const events = [
  {
    year: '2005',
    title: 'A origem',
    tag: null,
    description:
      'Fundação em São Paulo com foco em basquete de base — esporte como ferramenta real de transformação social, muito antes de isso virar discurso.',
  },
  {
    year: '2012',
    title: 'Competindo na cidade',
    tag: null,
    description:
      'Participação oficial na Taça Cidade de São Paulo. O Instituto começa a mostrar resultado dentro de quadra — e presença institucional fora dela.',
  },
  {
    year: '2014',
    title: 'Centro de Treinamento 3x3',
    tag: null,
    description:
      'Lançamento do CT3x3, estrutura pioneira de alto rendimento no basquete olímpico. Uma aposta no futuro que a história provaria certíssima.',
  },
  {
    year: '2017',
    title: 'Nasce o Instituto Futuros Craques',
    tag: 'Marco institucional',
    description:
      'O rebatismo não foi só de nome: foi a afirmação de uma identidade. Deixamos de ser um grêmio esportivo para nos tornar um projeto de vida — com metodologia, propósito e ambição nacional.',
  },
  {
    year: '2019',
    title: 'Parceria UNIP — Campeões Mundiais',
    tag: 'Conquista mundial',
    description:
      'Em janeiro, firmamos parceria com a Universidade Paulista (UNIP). O impacto foi imediato: título mundial universitário FISU, conquistas pan-americanas e vice-campeonato mundial. O IFC chegou ao topo do basquete 3x3 — e ainda não tinha terminado.',
  },
  {
    year: '2019',
    title: 'Certificado CONDECA',
    tag: 'Reconhecimento público',
    description:
      'Primeira aprovação pelo Conselho Estadual dos Direitos da Criança e do Adolescente (CONDECA) para captação de recursos — reconhecimento formal da seriedade dos nossos projetos.',
  },
  {
    year: '2021',
    title: 'Registro no CMDCA-SP',
    tag: 'Reconhecimento público',
    description:
      'Publicação em Diário Oficial do registro no Conselho Municipal dos Direitos da Criança e do Adolescente de São Paulo — mais uma chancela institucional que valida nossa atuação.',
  },
  {
    year: '2022',
    title: 'Bicampeões Mundiais — FISU',
    tag: 'Conquista mundial',
    description:
      'De volta ao palco mundial, o IFC confirmou que 2019 não foi sorte. Com a UNIP, conquistamos o segundo título mundial universitário FISU — tornando-nos bicampeões mundiais. Uma conquista que pouquíssimas instituições brasileiras podem reivindicar.',
  },
  {
    year: '2022',
    title: 'Lei Paulista de Incentivo ao Esporte',
    tag: 'Reconhecimento público',
    description:
      'Aprovação de três projetos na Lei Paulista de Incentivo ao Esporte: Circuito Neo Running, CT 3x3 e Drible Certo. Uma conquista que vai além do recurso — é validação pública da nossa excelência técnica.',
  },
  {
    year: '2022',
    title: 'Clube Escola — parceria com a Prefeitura',
    tag: 'Parceria pública',
    description:
      'Início formal da parceria com a Prefeitura de São Paulo para execução do Clube Escola. O IFC entra na política pública municipal — e leva consigo o que sabe fazer de melhor.',
  },
  {
    year: '2024',
    title: 'Alto rendimento além do basquete',
    tag: null,
    description:
      'Execução do projeto de Preparação Olímpica na vela (Classe 49er) e publicação do relatório circunstanciado do Instituto — transparência e diversificação andando juntas.',
  },
  {
    year: '2025',
    title: 'Presença nacional e internacional',
    tag: 'Conquista esportiva',
    description:
      'Resultados no Campeonato Brasileiro CBB 3x3 e participação na UCL 3x3 na Rússia. Captação federal aprovada via Lei de Incentivo ao Esporte — Fase 4 do Neo Running e Capacitação 3x3.',
  },
  {
    year: '2026',
    title: 'Novos horizontes',
    tag: null,
    description:
      'Expansão para o vôlei de praia competitivo. Duas décadas de impacto real, e o Instituto segue crescendo.',
  },
]

const TAG_COLORS = {
  'Marco institucional': { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
  'Conquista mundial':   { bg: 'bg-amber-50',  text: 'text-amber-600',  border: 'border-amber-100' },
  'Reconhecimento público': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-100' },
  'Parceria pública':    { bg: 'bg-teal-50',   text: 'text-teal-700',   border: 'border-teal-100' },
  'Conquista esportiva': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const IFCTimeline = () => {
  return (
    <div className="relative max-w-3xl py-4 px-0">
      {/* Linha vertical */}
      <div className="absolute left-[7px] top-0 h-full w-[2px] bg-gradient-to-b from-green-400/70 via-green-500/40 to-green-200/20" />

      <div className="space-y-8">
        {events.map((event, idx) => {
          const tagStyle = event.tag ? TAG_COLORS[event.tag] : null

          return (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-32px' }}
              className="relative flex gap-5 items-start"
            >
              {/* Nó da timeline */}
              <div className="relative z-10 mt-1.5 flex-shrink-0">
                <div
                  className={cn(
                    'h-4 w-4 rounded-full border-2 border-white',
                    event.tag === 'Conquista mundial'
                      ? 'bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_12px_rgba(217,119,6,0.5)]'
                      : event.tag === 'Marco institucional'
                      ? 'bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.45)]'
                      : 'bg-gradient-to-br from-green-400 to-green-600 shadow-[0_0_10px_rgba(22,163,74,0.4)]',
                    'transition-transform duration-200 hover:scale-110'
                  )}
                />
              </div>

              {/* Card */}
              <div
                className={cn(
                  'flex-1 rounded-xl p-5',
                  'bg-white/85 backdrop-blur-md',
                  'border border-gray-100',
                  'shadow-[0_2px_16px_rgba(0,0,0,0.05)]',
                  'hover:shadow-[0_6px_28px_rgba(0,0,0,0.09)] transition-all duration-300'
                )}
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-base italic text-green-600 font-normal"
                  >
                    {event.year}
                  </span>
                  {tagStyle && (
                    <span
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className={cn(
                        'text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border',
                        tagStyle.bg, tagStyle.text, tagStyle.border
                      )}
                    >
                      {event.tag}
                    </span>
                  )}
                </div>
                <h3
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-[0.95rem] font-semibold text-gray-900 tracking-tight leading-snug"
                >
                  {event.title}
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="mt-2 text-sm text-gray-600 leading-relaxed font-light"
                >
                  {event.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
