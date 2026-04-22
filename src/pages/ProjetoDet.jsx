import { useParams, Link, useNavigate } from 'react-router-dom'
import { Globe } from '../components/ui/Globe'
import { motion } from 'framer-motion'

/* ─────────────────────────────────────────────
   BANCO DE DADOS DOS PROJETOS
   Cada projeto tem: slug, todos os dados do card
   + seções extras para a página completa
───────────────────────────────────────────── */
export const PROJETOS_DB = [
  {
    id: 1,
    slug: 'drible-certo-3x3',
    num: '01',
    titulo: 'Drible Certo 3×3',
    subtitulo: 'DC3X3 — Basquete 3×3 Olímpico',
    descricao: 'O projeto mais importante de desenvolvimento de atletas de basquete 3×3 do país. Com ~250 milhões de adeptos no mundo, o IFC forma talentos para a Seleção Brasileira e projeta o Brasil como potência na modalidade.',
    descricaoLonga: 'O Drible Certo 3×3 é o maior e mais tradicional projeto de custeio de equipes de base e adultas no rendimento do basquete 3×3 do Brasil. Aprovado pelo Ministério do Esporte via Lei de Incentivo ao Esporte (LIE), o projeto financia a participação de atletas brasileiros em competições nacionais e internacionais, levando o nome do Brasil ao cenário mundial da modalidade olímpica.\n\nSob a presidência de Gustavo Bracco — ex-atleta da Seleção Brasileira de Basquete 3×3 e participante de Campeonato Mundial pelo Brasil —, o IFC acompanha pessoalmente os atletas em mais de 30 viagens internacionais, garantindo suporte técnico, logístico e emocional fora do país.\n\nO projeto forma talentos desde a base até o alto rendimento, com foco em revelar atletas para as seleções brasileiras e posicionar o Brasil como referência mundial no basquete 3×3.',
    publico: 'Crianças, adolescentes e atletas de alto rendimento',
    beneficiados: '50+ atletas revelados para seleções',
    fonte: 'Lei de Incentivo ao Esporte — Ministério do Esporte',
    abrangencia: 'Nacional e Internacional',
    status: 'Em andamento',
    categoria: 'basquete',
    cor: '#16a34a',
    numeros: [
      { valor: '50+', label: 'Atletas revelados para seleções' },
      { valor: '30+', label: 'Viagens internacionais' },
      { valor: '2014', label: 'Ano de fundação' },
      { valor: 'LIE', label: 'Aprovado pelo Ministério do Esporte' },
    ],
    destaques: [
      'Único projeto do Brasil que leva equipes de base ao exterior',
      'Presidente com histórico real na Seleção Brasileira',
      'Aprovado pelo Ministério do Esporte via Lei de Incentivo ao Esporte',
      'Atletas com passagem por competições em múltiplos continentes',
    ],
    comoFunciona: [
      { titulo: 'Seleção e perfil dos atletas', texto: 'Os atletas são selecionados com base em critérios técnicos e ranking da modalidade, integrando um ambiente profissional com suporte completo de comissão técnica multidisciplinar — treinadores, preparadores físicos, fisioterapeutas, nutricionistas e equipe de gestão.' },
      { titulo: 'Estrutura de preparação', texto: 'O programa prepara atletas adultos e sub-23 em todas as etapas do alto rendimento: treinamento técnico e físico intensivo, competições nacionais e etapas internacionais da modalidade olímpica.' },
      { titulo: 'Suporte e manutenção', texto: 'Ao longo de um ciclo contínuo, os atletas recebem bolsas auxílio, participam de competições estratégicas no Brasil e no exterior, acumulando experiência e pontuação no ranking internacional.' },
      { titulo: 'Resultados e legado', texto: 'O modelo permite formação de equipes altamente competitivas que representam o Brasil no mundo. Com histórico consolidado, o programa revelou dezenas de atletas com passagem por seleções brasileiras.' },
    ],
  },
  {
    id: 2,
    slug: 'centro-treinamento-3x3',
    num: '02',
    titulo: 'Centro de Treinamento 3×3',
    subtitulo: 'Formação de Alto Nível desde 2014',
    descricao: 'Escolinha de basquete do IFC dedicada à formação de atletas de alto nível na modalidade olímpica. Desde 2014 promove inclusão social com treinamentos regulares e competições nacionais e internacionais.',
    descricaoLonga: 'O Centro de Treinamento 3×3 é a primeira escolinha de basquete 3×3 do país — um marco histórico no desenvolvimento da modalidade olímpica no Brasil. Fundada em 2014, muito antes do basquete 3×3 se tornar modalidade olímpica oficial nos Jogos de Tóquio 2020, o CT já apostava no potencial dessa disciplina e formava atletas com metodologia específica para o jogo de rua.\n\nFinanciado pela Secretaria de Esportes do Estado de SP (SEESP), o projeto oferece treinamentos regulares com professores especializados, participação em competições nacionais e internacionais, e acompanhamento técnico e físico de cada atleta.\n\nO CT 3×3 é a porta de entrada para jovens que sonham em defender o Brasil em competições mundiais.',
    publico: 'Crianças e jovens atletas',
    beneficiados: '50+ atletas nas seleções brasileiras',
    fonte: 'SEESP — Secretaria de Esportes do Estado de SP',
    abrangencia: 'Estado de São Paulo',
    status: 'Em andamento',
    categoria: 'basquete',
    cor: '#0ea5e9',
    numeros: [
      { valor: '1ª', label: 'Escolinha de basquete 3×3 do Brasil' },
      { valor: '2014', label: 'Ano de fundação' },
      { valor: '50+', label: 'Atletas nas seleções brasileiras' },
      { valor: 'SEESP', label: 'Parceria com governo estadual' },
    ],
    destaques: [
      'Pioneirismo absoluto: primeira escolinha de basquete 3×3 do país',
      'Metodologia específica para o jogo 3×3 olímpico',
      'Treinamentos regulares com professores especializados',
      'Atletas formados competem em nível nacional e internacional',
    ],
  },
  {
    id: 3,
    slug: 'circuitos-ifc',
    num: '03',
    titulo: 'Circuitos IFC',
    subtitulo: 'Corridas de Rua em Todo o Brasil',
    descricao: 'Corridas de rua democráticas e acessíveis com mais de 27 etapas realizadas em todo o Brasil. Eventos com área kids, shows ao vivo, ativações de marcas e premiações especiais para idosos.',
    descricaoLonga: 'Os Circuitos IFC são a maior iniciativa de corridas de rua do Instituto Futuros Craques, aprovados pela Lei de Incentivo ao Esporte do Ministério do Esporte em nível federal. Com mais de 27 etapas realizadas em todo o Brasil, o circuito leva saúde, lazer e comunidade para pessoas de todas as idades.\n\nCada etapa do circuito conta com percursos para diferentes níveis (5km, 10km e 21km), área kids com atividades para crianças, shows ao vivo, ativações de marcas patrocinadoras e premiações especiais para idosos — reforçando o caráter inclusivo e democrático do projeto.\n\nO Circuito IFC já percorreu cidades de Norte a Sul do Brasil, consolidando-se como um evento de referência no calendário esportivo nacional.',
    publico: 'Pessoas de todas as idades',
    beneficiados: '27+ etapas realizadas',
    fonte: 'Lei de Incentivo ao Esporte — Ministério do Esporte',
    abrangencia: 'Nacional',
    status: 'Em andamento',
    categoria: 'corridas',
    cor: '#f97316',
    numeros: [
      { valor: '27+', label: 'Etapas realizadas no Brasil' },
      { valor: 'LIE', label: 'Aprovado pelo Ministério do Esporte' },
      { valor: '3', label: 'Percursos: 5km, 10km e 21km' },
      { valor: '∞', label: 'Idades atendidas' },
    ],
    destaques: [
      'Mais de 27 etapas realizadas em todo o Brasil',
      'Aprovado pela Lei de Incentivo ao Esporte (LIE Federal)',
      'Premiação especial para idosos em todas as etapas',
      'Área kids com atividades gratuitas para crianças',
    ],
  },
  {
    id: 4,
    slug: 'clube-escola',
    num: '04',
    titulo: 'Projeto Clube Escola',
    subtitulo: 'Contraturno Escolar com Esportes de Areia',
    descricao: 'Atendimento de crianças e adolescentes no contraturno escolar com atividades físicas nas modalidades de Futevôlei, Beach Vôlei, Beach Tênis, Beach Soccer e Futebol de Campo.',
    descricaoLonga: 'O Projeto Clube Escola é uma das maiores operações do Instituto Futuros Craques, realizado em parceria com a Secretaria Municipal de Esportes de São Paulo (SEME). O projeto atende crianças e adolescentes no contraturno escolar, oferecendo atividades esportivas gratuitas nas modalidades de Futevôlei, Beach Vôlei, Beach Tênis, Beach Soccer e Futebol de Campo.\n\nCom capacidade operacional comprovada de gestão de 16 escolinhas simultâneas nas quatro regiões da cidade de São Paulo — Norte, Sul, Leste e Oeste — o IFC já atendeu mais de 4.000 alunos matriculados e ativos, tornando o Clube Escola uma referência em gestão de esporte social em grande escala.\n\nEssa expertise acumulada na gestão do Clube Escola é a base técnica e operacional que sustenta todos os novos projetos do IFC.',
    publico: 'Crianças e adolescentes em contraturno escolar',
    beneficiados: 'Centenas de alunos atendidos',
    fonte: 'SEME — Secretaria Municipal de Esportes de SP',
    abrangencia: 'Município de São Paulo',
    status: 'Em andamento',
    categoria: 'praia',
    cor: '#eab308',
    numeros: [
      { valor: '16', label: 'Escolinhas simultâneas em SP' },
      { valor: '4.000+', label: 'Alunos matriculados e ativos' },
      { valor: '4', label: 'Regiões da cidade de SP' },
      { valor: '5', label: 'Modalidades esportivas' },
    ],
    destaques: [
      'Gestão comprovada de 16 escolinhas simultâneas em São Paulo',
      'Mais de 4.000 alunos atendidos — maior operação do IFC',
      'Presente nas 4 regiões da capital: Norte, Sul, Leste e Oeste',
      'Base técnica para todos os novos projetos do Instituto',
    ],
  },
  {
    id: 5,
    slug: 'verao-para-todos',
    num: '05',
    titulo: 'Verão Para Todos',
    subtitulo: 'Baixada Santista desde 2017',
    descricao: 'Desde 2017 com 10 edições na Baixada Santista e São Paulo. Beach tennis, vôlei de praia, futevôlei e frescobol, além de atividades recreativas. Participação em duas edições da Virada Esportiva.',
    descricaoLonga: 'O Verão Para Todos é um projeto de esporte e lazer que acontece anualmente na Baixada Santista e em São Paulo desde 2017. Com 10 edições realizadas, o projeto já se tornou uma tradição no verão paulista, levando beach tennis, vôlei de praia, futevôlei e frescobol para populações de baixa renda de forma gratuita.\n\nFinanciado por emendas parlamentares via SEME, o Verão Para Todos integrou por duas edições a programação oficial da Virada Esportiva — um dos maiores eventos esportivos do Brasil, organizado pela Prefeitura de São Paulo.\n\nO projeto reforça o compromisso do IFC com a democratização do acesso ao esporte, especialmente em épocas do ano em que o lazer ativo é mais necessário para as famílias.',
    publico: 'Pessoas de todas as idades',
    beneficiados: '10 edições realizadas',
    fonte: 'SEME — Emenda Parlamentar',
    abrangencia: 'Baixada Santista e São Paulo',
    status: 'Em andamento',
    categoria: 'praia',
    cor: '#06b6d4',
    numeros: [
      { valor: '10', label: 'Edições realizadas desde 2017' },
      { valor: '2017', label: 'Ano de fundação' },
      { valor: '2×', label: 'Participação na Virada Esportiva' },
      { valor: '4', label: 'Modalidades de esportes de praia' },
    ],
    destaques: [
      '10 edições ininterruptas desde 2017',
      'Participação em duas edições da Virada Esportiva SP',
      'Acesso gratuito a esportes de praia para populações vulneráveis',
      'Presença consolidada na Baixada Santista e capital',
    ],
  },
  {
    id: 6,
    slug: 'festival-beach-games',
    num: '06',
    titulo: 'Festival Beach Games 2025',
    subtitulo: 'Santos/SP — Praia do Gonzaga',
    descricao: 'Evento 100% gratuito na Praia do Gonzaga, Santos/SP. Quatro dias com Beach Tênis, Futevôlei e Futmesa. Escolinhas gratuitas para crianças em vulnerabilidade social, estrutura de +3.000 m².',
    descricaoLonga: 'O Festival Beach Games 2025 é o maior evento de esportes de praia realizado pelo Instituto Futuros Craques. Totalmente gratuito, o festival acontece na Praia do Gonzaga, em Santos/SP, durante quatro dias de competições, escolinhas e atividades para a família.\n\nCom estrutura de mais de 3.000 m², o evento oferece torneios de Beach Tênis, Futevôlei e Futmesa, além de escolinhas esportivas gratuitas para crianças em situação de vulnerabilidade social. O impacto direto do festival alcança 700 pessoas, com um raio de impacto indireto de mais de 3.000 participantes.\n\nO Beach Games reforça o posicionamento do IFC como organizador de grandes eventos esportivos gratuitos e democráticos no litoral paulista.',
    publico: 'Crianças, adolescentes e comunidade',
    beneficiados: '700 diretos / 3.000 indiretos',
    fonte: 'SEESP — Secretaria de Esportes do Estado de SP',
    abrangencia: 'Santos/SP',
    status: 'Em andamento',
    categoria: 'praia',
    cor: '#8b5cf6',
    numeros: [
      { valor: '700', label: 'Participantes diretos' },
      { valor: '3.000', label: 'Impacto indireto' },
      { valor: '3.000m²', label: 'Estrutura do evento' },
      { valor: '4', label: 'Dias de festival' },
    ],
    destaques: [
      'Evento 100% gratuito aberto a toda a comunidade',
      'Escolinhas gratuitas para crianças em vulnerabilidade social',
      'Estrutura de mais de 3.000 m² na Praia do Gonzaga',
      '3 modalidades: Beach Tênis, Futevôlei e Futmesa',
    ],
  },
  {
    id: 7,
    slug: 'escola-do-dinheiro',
    num: '07',
    titulo: 'Escola do Dinheiro',
    subtitulo: 'Educação Financeira em 12 Cidades',
    descricao: 'Projeto que leva educação financeira de forma didática e interativa para 12 cidades do estado de São Paulo, com aulas e recursos que tornam o aprendizado mais leve e eficiente.',
    descricaoLonga: 'A Escola do Dinheiro é uma iniciativa social do Instituto Futuros Craques que vai além do esporte: leva educação financeira de forma didática e interativa para jovens e comunidades em 12 cidades do Estado de São Paulo, financiada pelo CONDECA.\n\nO projeto parte de uma premissa simples: o conhecimento financeiro é um instrumento de emancipação social tão poderoso quanto o esporte. Jovens que entendem de dinheiro têm mais ferramentas para sair de ciclos de vulnerabilidade.\n\nCom aulas presenciais e recursos didáticos desenvolvidos especialmente para o público jovem, a Escola do Dinheiro já impactou centenas de alunos em diferentes cidades paulistas, complementando a formação integral promovida pelo IFC.',
    publico: 'Jovens e comunidade em geral',
    beneficiados: '12 cidades atendidas',
    fonte: 'CONDECA — Conselho Estadual dos Direitos da Criança',
    abrangencia: 'Estado de São Paulo — 12 cidades',
    status: 'Em andamento',
    categoria: 'social',
    cor: '#10b981',
    numeros: [
      { valor: '12', label: 'Cidades atendidas no estado de SP' },
      { valor: 'CONDECA', label: 'Financiado pelo Conselho Estadual' },
      { valor: '100%', label: 'Gratuito para os participantes' },
      { valor: '2', label: 'Frentes: esporte + educação' },
    ],
    destaques: [
      'Educação financeira como ferramenta de emancipação social',
      'Presente em 12 cidades do Estado de São Paulo',
      'Financiado pelo CONDECA — Conselho Estadual dos Direitos da Criança',
      'Complementa a formação integral promovida pelo IFC',
    ],
  },
  {
    id: 8,
    slug: 'bike-conectando-historias',
    num: '08',
    titulo: 'Bike Conectando Histórias',
    subtitulo: 'Maior Projeto de Mountain Bike do País',
    descricao: 'O maior projeto de Mountain Bike do Brasil. Conecta comunidades através do esporte, promovendo saúde, lazer e integração social em todo o território nacional. Aprovado pelo Ministério do Esporte via Lei de Incentivo ao Esporte.',
    descricaoLonga: 'Bike Conectando Histórias é o maior projeto de Mountain Bike do Brasil. Aprovado pelo Ministério do Esporte via Lei de Incentivo ao Esporte (LIE Federal), o projeto vai muito além da competição: conecta comunidades, preserva o meio ambiente e transforma a bicicleta em instrumento de inclusão social.\n\nCom alcance nacional, o projeto reúne ciclistas de diferentes regiões do Brasil em torno de uma causa comum: a democratização do Mountain Bike, modalidade historicamente elitizada e distante das populações de menor renda.\n\nCada edição do projeto conecta histórias reais de superação, natureza e comunidade — provando que a bike é muito mais que um esporte.',
    publico: 'Ciclistas e comunidades de todo o Brasil',
    beneficiados: 'Alcance nacional',
    fonte: 'MESp — Ministério do Esporte (LIE Federal)',
    abrangencia: 'Nacional',
    status: 'Em andamento',
    categoria: 'bike',
    cor: '#84cc16',
    numeros: [
      { valor: '1º', label: 'Maior projeto de Mountain Bike do Brasil' },
      { valor: 'LIE', label: 'Aprovado pelo Ministério do Esporte' },
      { valor: 'Nacional', label: 'Alcance em todo o Brasil' },
      { valor: '2025', label: 'Edição atual' },
    ],
    destaques: [
      'Maior projeto de Mountain Bike do país',
      'Aprovado pelo Ministério do Esporte via LIE Federal',
      'Democratiza modalidade historicamente elitizada',
      'Conecta comunidades através do esporte e da natureza',
    ],
  },
  {
    id: 9,
    slug: 'virada-esportiva',
    num: '09',
    titulo: 'Virada Esportiva',
    subtitulo: 'SEME — São Paulo/SP',
    descricao: 'Participação na Virada Esportiva de São Paulo com atividades de beach tennis, futevôlei e vôlei de praia. Evento gratuito e acessível com área kids e atividades para toda a família.',
    descricaoLonga: 'A Virada Esportiva é um dos maiores eventos esportivos do Brasil, realizado pela Prefeitura de São Paulo com entrada gratuita em dezenas de pontos da capital. O Instituto Futuros Craques integra a programação oficial com ações de beach tennis, futevôlei e vôlei de praia.\n\nNas edições de 2025, o IFC atuou no Centro Esportivo Joerg Bruder (Santo Amaro) e no Parque Praia do Sol (Jardim Três Marias), com professores e monitores especializados conduzindo atividades recreativas, torneios e uma completa Área Kids com brinquedos infláveis, pipoca, algodão doce, pintura facial, contação de histórias e brincadeiras inclusivas.\n\nA participação na Virada Esportiva reforça o papel do IFC como parceiro estratégico da Prefeitura de São Paulo na democratização do acesso ao esporte.',
    publico: 'Crianças, adolescentes, adultos e idosos',
    beneficiados: 'Milhares de participantes por edição',
    fonte: 'SEME — Secretaria Municipal de Esportes de SP',
    abrangencia: 'São Paulo/SP',
    status: 'Em andamento',
    categoria: 'praia',
    cor: '#06b6d4',
    numeros: [
      { valor: '2+', label: 'Edições com o IFC' },
      { valor: '2', label: 'Locais simultâneos em SP' },
      { valor: 'Grátis', label: 'Entrada gratuita para todos' },
      { valor: 'SEME', label: 'Parceria com Prefeitura de SP' },
    ],
    destaques: [
      'Participação na programação oficial da Prefeitura de São Paulo',
      'Atuação em dois locais simultâneos na capital',
      'Área Kids com atividades inclusivas para crianças',
      'Evento 100% gratuito e acessível para toda a família',
    ],
  },
  {
    id: 10,
    slug: 'copa-sp-jiu-jitsu',
    num: '10',
    titulo: 'Copa SP de Jiu Jitsu',
    subtitulo: 'Emenda Parlamentar — SEME',
    descricao: 'Competição de Jiu Jitsu realizada em São Paulo com apoio de emenda parlamentar via Secretaria Municipal de Esportes. Fomenta a modalidade olímpica e promove a cultura das artes marciais entre jovens paulistanos.',
    descricaoLonga: 'A Copa SP de Jiu Jitsu é um projeto do Instituto Futuros Craques realizado com emenda parlamentar via Secretaria Municipal de Esportes de São Paulo (SEME). O projeto fomenta a prática do Jiu Jitsu — modalidade que integrou os Jogos Olímpicos de Paris 2024 — entre jovens e atletas de São Paulo.\n\nA competição reúne atletas de todas as faixas etárias e graduações, promovendo a cultura das artes marciais como ferramenta de disciplina, respeito e desenvolvimento pessoal. O projeto contribui para o fortalecimento do ecossistema esportivo municipal e para a formação de novos atletas na modalidade.\n\nO IFC amplia seu portfólio esportivo com as artes marciais, reforçando seu compromisso com a pluralidade esportiva e o desenvolvimento integral dos jovens paulistanos.',
    publico: 'Atletas de jiu jitsu de todas as idades',
    beneficiados: 'Centenas de atletas competidores',
    fonte: 'SEME — Emenda Parlamentar',
    abrangencia: 'São Paulo/SP',
    status: 'Em andamento',
    categoria: 'artes-marciais',
    cor: '#dc2626',
    numeros: [
      { valor: 'SEME', label: 'Apoio da Secretaria Municipal' },
      { valor: 'Olímpico', label: 'Jiu Jitsu nos Jogos de Paris 2024' },
      { valor: 'Todas', label: 'Faixas etárias e graduações' },
      { valor: 'SP', label: 'Realizado na capital' },
    ],
    destaques: [
      'Modalidade olímpica desde os Jogos de Paris 2024',
      'Financiado por emenda parlamentar via SEME',
      'Competição aberta a todas as faixas etárias e graduações',
      'Promove disciplina, respeito e desenvolvimento pessoal',
    ],
  },
  {
    id: 11,
    slug: 'oficina-do-codigo',
    num: '11',
    titulo: 'Oficina do Código',
    subtitulo: 'Educação Digital — CONDECA',
    descricao: 'Projeto de inclusão digital e educação tecnológica para crianças e adolescentes, financiado pelo CONDECA. Oficinas de programação e pensamento computacional que preparam jovens para o mercado de trabalho digital.',
    descricaoLonga: 'A Oficina do Código é uma iniciativa de inclusão digital do Instituto Futuros Craques, financiada pelo CONDECA (Conselho Estadual dos Direitos da Criança e do Adolescente). O projeto oferece oficinas de programação e pensamento computacional para crianças e adolescentes em situação de vulnerabilidade social.\n\nNum mundo cada vez mais digital, o acesso ao conhecimento tecnológico é um direito básico. A Oficina do Código parte dessa premissa para oferecer, de forma gratuita e lúdica, os fundamentos da programação, da lógica computacional e do pensamento criativo através da tecnologia.\n\nO projeto prepara jovens para o mercado de trabalho digital — um dos mais aquecidos e acessíveis para quem tem qualificação — ampliando as possibilidades de futuro para crianças que, sem o IFC, talvez nunca tivessem contato com uma linha de código.',
    publico: 'Crianças e adolescentes',
    beneficiados: 'Centenas de jovens atendidos',
    fonte: 'CONDECA — Conselho Estadual dos Direitos da Criança',
    abrangencia: 'Estado de São Paulo',
    status: 'Em andamento',
    categoria: 'social',
    cor: '#7c3aed',
    numeros: [
      { valor: 'CONDECA', label: 'Financiado pelo Conselho Estadual' },
      { valor: '100%', label: 'Gratuito para os participantes' },
      { valor: 'Digital', label: 'Inclusão tecnológica' },
      { valor: 'SP', label: 'Estado de São Paulo' },
    ],
    destaques: [
      'Inclusão digital como ferramenta de emancipação social',
      'Financiado pelo CONDECA — direitos da criança e do adolescente',
      'Oficinas de programação e pensamento computacional',
      'Prepara jovens para o mercado de trabalho digital',
    ],
  },
  {
    id: 12,
    slug: 'festival-aberto-sp-judo',
    num: '12',
    titulo: 'Festival Aberto SP de Judô',
    subtitulo: 'Emenda Parlamentar — SEME',
    descricao: 'Festival de judô aberto ao público paulistano, realizado com emenda parlamentar via SEME. Promove a prática da modalidade olímpica, com categorias para todas as faixas etárias e níveis técnicos.',
    descricaoLonga: 'O Festival Aberto SP de Judô é um projeto do Instituto Futuros Craques realizado com emenda parlamentar via Secretaria Municipal de Esportes de São Paulo (SEME). O festival promove a prática do judô — modalidade olímpica consolidada — com categorias para todas as faixas etárias e níveis técnicos, do iniciante ao avançado.\n\nO judô é muito mais que um esporte de combate: é uma filosofia de vida baseada na disciplina, no respeito ao adversário e no aperfeiçoamento contínuo. O Festival Aberto SP de Judô leva esses valores para a juventude paulistana por meio da competição saudável e do espírito esportivo.\n\nCom o Festival de Judô, o IFC amplia seu portfólio de artes marciais e reforça sua atuação como organizador de grandes eventos esportivos na cidade de São Paulo.',
    publico: 'Atletas e praticantes de judô de SP',
    beneficiados: 'Centenas de atletas por edição',
    fonte: 'SEME — Emenda Parlamentar',
    abrangencia: 'São Paulo/SP',
    status: 'Em andamento',
    categoria: 'artes-marciais',
    cor: '#b45309',
    numeros: [
      { valor: 'SEME', label: 'Apoio da Secretaria Municipal' },
      { valor: 'Olímpico', label: 'Judô é modalidade olímpica' },
      { valor: 'Aberto', label: 'Para todos os níveis técnicos' },
      { valor: 'SP', label: 'Realizado na capital' },
    ],
    destaques: [
      'Modalidade olímpica com tradição no Brasil',
      'Financiado por emenda parlamentar via SEME',
      'Categorias para todas as faixas etárias e níveis técnicos',
      'Festival aberto — da iniciação ao alto rendimento',
    ],
  },
]

/* ─────────────────────────────────────────────
   UTILITÁRIOS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─────────────────────────────────────────────
   PÁGINA INDIVIDUAL DO PROJETO
───────────────────────────────────────────── */

const DC3X3_CIDADES = [
  { id: 'saopaulo', location: [-23.55, -46.63], label: 'São Paulo' },
  { id: 'rio', location: [-22.90, -43.17], label: 'Rio de Janeiro' },
  { id: 'salvador', location: [-12.97, -38.50], label: 'Salvador' },
  { id: 'uberlandia', location: [-18.92, -48.28], label: 'Uberlândia' },
  { id: 'floripa', location: [-27.60, -48.55], label: 'Florianópolis' },
  { id: 'belohorizonte', location: [-19.92, -43.94], label: 'Belo Horizonte' },
  { id: 'brasilia', location: [-15.78, -47.93], label: 'Brasília' },
  { id: 'maceio', location: [-9.67, -35.74], label: 'Maceió' },
  { id: 'buenosaires', location: [-34.60, -58.38], label: 'Buenos Aires' },
  { id: 'santiago', location: [-33.46, -70.65], label: 'Santiago' },
  { id: 'montevideo', location: [-34.90, -56.19], label: 'Montevideo' },
  { id: 'neuquen', location: [-38.95, -68.06], label: 'Neuquén' },
  { id: 'cidademex', location: [19.43, -99.13], label: 'Cidade do México' },
  { id: 'miami', location: [25.77, -80.19], label: 'Miami' },
  { id: 'losangeles', location: [34.05, -118.24], label: 'Los Angeles' },
  { id: 'novayork', location: [40.71, -74.01], label: 'Nova Iorque' },
  { id: 'sanjuan', location: [18.47, -66.12], label: 'San Juan' },
  { id: 'lausanne', location: [46.52, 6.63], label: 'Lausanne' },
  { id: 'ruth', location: [47.37, 8.54], label: 'Ruth (Suíça)' },
  { id: 'zurich', location: [47.38, 8.54], label: 'Zurique' },
  { id: 'berlim', location: [52.52, 13.40], label: 'Berlim' },
  { id: 'roma', location: [41.90, 12.50], label: 'Roma' },
  { id: 'novisad', location: [45.25, 19.83], label: 'Novi Sad' },
  { id: 'belgrado', location: [44.82, 20.46], label: 'Belgrado' },
  { id: 'barcelona', location: [41.39, 2.15], label: 'Barcelona' },
  { id: 'moscou', location: [55.75, 37.62], label: 'Moscou' },
  { id: 'stpete', location: [59.93, 30.32], label: 'St. Petersburgo' },
  { id: 'bucareste', location: [44.43, 26.10], label: 'Bucareste' },
  { id: 'haya', location: [52.08, 4.31], label: 'A Haya' },
  { id: 'limassol', location: [34.68, 33.04], label: 'Limassol' },
  { id: 'xangai', location: [31.23, 121.47], label: 'Xangai' },
  { id: 'novadeli', location: [28.61, 77.23], label: 'Nova Déli' },
  { id: 'ulanbator', location: [47.90, 106.91], label: 'Ulan Bator' },
]

const DC3X3_ARCS = [
  { id: 'sp-lausanne', from: [-23.55, -46.63], to: [46.52, 6.63] },
  { id: 'sp-berlim', from: [-23.55, -46.63], to: [52.52, 13.40] },
  { id: 'sp-xangai', from: [-23.55, -46.63], to: [31.23, 121.47] },
  { id: 'sp-novayork', from: [-23.55, -46.63], to: [40.71, -74.01] },
  { id: 'sp-belgrado', from: [-23.55, -46.63], to: [44.82, 20.46] },
]

export default function ProjetoDet() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const projeto = PROJETOS_DB.find(p => p.slug === slug)

  // Projeto não encontrado
  if (!projeto) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#f8f9fa', paddingTop: '100px',
        fontFamily: "'Outfit', sans-serif",
      }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '1rem' }}>404</p>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '3rem', color: '#111827', marginBottom: '1.5rem' }}>
          Projeto não encontrado
        </h1>
        <Link to="/projetos" style={{ textDecoration: 'none', color: '#16a34a', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
          ← Ver todos os projetos
        </Link>
      </div>
    )
  }

  // Próximo e anterior
  const idx = PROJETOS_DB.findIndex(p => p.slug === slug)
  const anterior = PROJETOS_DB[idx - 1]
  const proximo  = PROJETOS_DB[idx + 1]

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', paddingTop: '100px' }}>

      {/* ── Breadcrumb ── */}
      <div style={{ padding: '2rem clamp(1.5rem, 6vw, 6rem) 0' }}>
        <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Link to="/projetos" style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.65rem', letterSpacing: '0.14em',
            color: '#6b7280', textDecoration: 'none', textTransform: 'uppercase',
          }}>
            Projetos
          </Link>
          <span style={{ color: '#d1d5db', fontSize: '0.65rem' }}>›</span>
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.65rem', letterSpacing: '0.14em',
            color: projeto.cor, textTransform: 'uppercase',
          }}>
            {projeto.num}
          </span>
        </nav>
      </div>

      {/* ── Hero ── */}
      <div style={{ padding: '3rem clamp(1.5rem, 6vw, 6rem) 0', position: 'relative' }}>

        {/* linha de cor lateral */}
        <div style={{
          position: 'absolute', left: 0, top: '3rem', bottom: 0,
          width: '3px', background: projeto.cor,
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* status */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#16a34a',
              background: 'rgba(22,163,74,0.1)',
              border: '1px solid rgba(22,163,74,0.3)',
              padding: '4px 12px', borderRadius: '2px',
            }}>
              {projeto.status}
            </span>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#9ca3af',
            }}>
              {projeto.abrangencia}
            </span>
          </div>

          {/* título */}
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 400, color: '#111827',
            lineHeight: 1, marginBottom: '0.75rem',
          }}>
            {projeto.titulo}
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.12em',
            color: '#6b7280', textTransform: 'uppercase',
            marginBottom: '2rem',
          }}>
            {projeto.subtitulo}
          </p>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
            color: '#4b5563', maxWidth: '620px',
            lineHeight: 1.8, fontWeight: 300,
          }}>
            {projeto.descricao}
          </p>
        </motion.div>
      </div>

      {/* ── Divisor ── */}
      <div style={{ margin: '4rem clamp(1.5rem, 6vw, 6rem) 0', height: '1px', background: '#e5e7eb' }} />

      {/* ── Números ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.65rem', letterSpacing: '0.22em',
          color: '#6b7280', textTransform: 'uppercase', marginBottom: '2.5rem',
        }}>
          Impacto
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
          gap: '1px', background: '#e5e7eb',
        }}>
          {projeto.numeros.map((n, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                background: '#fff',
                padding: '2rem 1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.5rem',
              }}
            >
              <span style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontStyle: 'italic',
                color: projeto.cor,
                lineHeight: 1,
              }}>
                {n.valor}
              </span>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.72rem', color: '#6b7280',
                lineHeight: 1.4, fontWeight: 300,
              }}>
                {n.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Divisor ── */}
      <div style={{ margin: '5rem clamp(1.5rem, 6vw, 6rem) 0', height: '1px', background: '#e5e7eb' }} />

      {/* ── Descrição completa ── */}
      <div style={{
        padding: '0 clamp(1.5rem, 6vw, 6rem)',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '4rem',
        alignItems: 'start',
      }}
        className="projeto-desc-grid"
      >
        <div>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.65rem', letterSpacing: '0.22em',
            color: '#6b7280', textTransform: 'uppercase', marginBottom: '1.2rem',
          }}>
            Sobre o projeto
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
            fontWeight: 400, color: '#111827', lineHeight: 1.1,
          }}>
            Como <em style={{ fontStyle: 'italic', color: '#4b5563' }}>funciona</em>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {projeto.descricaoLonga.split('\n\n').map((paragrafo, i) => (
            <p key={i} style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1rem', color: '#374151',
              lineHeight: 1.85, fontWeight: 300,
              marginBottom: i < projeto.descricaoLonga.split('\n\n').length - 1 ? '1.5rem' : 0,
            }}>
              {paragrafo}
            </p>
          ))}
        </motion.div>
      </div>

      {/* ── Divisor ── */}
      <div style={{ margin: '5rem clamp(1.5rem, 6vw, 6rem) 0', height: '1px', background: '#e5e7eb' }} />

      {/* ── Destaques ── */}
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.65rem', letterSpacing: '0.22em',
          color: '#6b7280', textTransform: 'uppercase', marginBottom: '2.5rem',
        }}>
          Diferenciais
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {projeto.destaques.map((d, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: '2rem 1fr',
                gap: '1.5rem',
                padding: '1.5rem 0',
                borderBottom: '1px solid #e5e7eb',
                alignItems: 'start',
              }}
            >
              <span style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '1rem', fontStyle: 'italic',
                color: projeto.cor, paddingTop: '2px',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1rem', color: '#374151',
                lineHeight: 1.6, fontWeight: 300,
              }}>
                {d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Divisor ── */}
      <div style={{ margin: '5rem clamp(1.5rem, 6vw, 6rem) 0', height: '1px', background: '#e5e7eb' }} />

      {/* ── Info institucional ── */}
      <div style={{
        padding: '0 clamp(1.5rem, 6vw, 6rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
        gap: '1px', background: '#e5e7eb',
      }}>
        {[
          { label: 'Público-alvo', valor: projeto.publico },
          { label: 'Beneficiados', valor: projeto.beneficiados },
          { label: 'Fonte de recurso', valor: projeto.fonte },
          { label: 'Abrangência', valor: projeto.abrangencia },
        ].map((item, i) => (
          <div key={i} style={{
            background: '#fff', padding: '1.8rem 1.5rem',
            display: 'flex', flexDirection: 'column', gap: '0.5rem',
          }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.55rem', letterSpacing: '0.14em',
              color: '#9ca3af', textTransform: 'uppercase',
            }}>
              {item.label}
            </span>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.85rem', color: '#374151',
              lineHeight: 1.5, fontWeight: 400,
            }}>
              {item.valor}
            </span>
          </div>
        ))}
      </div>



      {/* ── Como Funciona (se tiver dados) ── */}
      {projeto.comoFunciona && (
        <div style={{
          padding: '5rem clamp(1.5rem, 6vw, 6rem)',
          borderTop: '1px solid #e5e7eb',
        }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.22em', color: '#16a34a', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Estrutura do programa
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#111827', marginBottom: '0.75rem' }}>
            Como Funciona
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', color: '#6b7280', maxWidth: '680px', lineHeight: 1.8, marginBottom: '3.5rem' }}>
            O programa de Basquete 3×3 do Instituto Futuros Craques reúne projetos de alto rendimento que atuam de forma integrada na formação, desenvolvimento e manutenção de equipes competitivas no cenário nacional e internacional.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
            {projeto.comoFunciona.map((item, i) => (
              <div key={i} style={{
                padding: '2rem',
                border: '1px solid #e5e7eb',
                borderRadius: '2px',
                background: '#fff',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: projeto.cor + '18',
                    color: projeto.cor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.7rem', fontWeight: 700, flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#111827', letterSpacing: '0.01em' }}>
                    {item.titulo}
                  </h3>
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.75, margin: 0 }}>
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Presença Global (apenas Drible Certo 3x3) ── */}
      {projeto.slug === 'drible-certo-3x3' && (
        <div style={{
          margin: '5rem 0 0',
          padding: '5rem clamp(1.5rem, 6vw, 6rem)',
          background: '#f8faf9',
          borderTop: '1px solid #e5e7eb',
          borderBottom: '1px solid #e5e7eb',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.22em', color: '#16a34a', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Alcance Internacional
            </p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#111827', marginBottom: '1rem' }}>
              Presença <em style={{ fontStyle: 'italic', color: '#16a34a' }}>Global</em>
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', color: '#6b7280', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              O DC3×3 já marcou presença em mais de 30 cidades ao redor do mundo, levando atletas brasileiros a competições em 5 continentes.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ width: 'min(480px, 90vw)', flexShrink: 0 }}>
              <Globe
                markers={DC3X3_CIDADES}
                arcs={DC3X3_ARCS}
                markerColor={[0.09, 0.64, 0.29]}
                baseColor={[1, 1, 1]}
                arcColor={[0.09, 0.64, 0.29]}
                glowColor={[0.94, 0.97, 0.95]}
                dark={0}
                mapBrightness={8}
                markerSize={0.03}
                speed={0.0025}
              />
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.18em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Cidades visitadas
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {DC3X3_CIDADES.map((c) => (
                  <span key={c.id} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    padding: '0.3rem 0.7rem',
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '4px',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.72rem',
                    color: '#374151',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a', flexShrink: 0 }} />
                    {c.label}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.62rem', letterSpacing: '0.18em', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Documentos oficiais
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { label: 'Projeto Técnico IFC 2024', href: '#' },
                    { label: 'Publicação D.O. Federal', href: '#' },
                    { label: 'Aprovação Estadual (PDF)', href: '#' },
                    { label: 'Edital LIE', href: '#' },
                  ].map((doc) => (
                    <a key={doc.label} href={doc.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.55rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        background: '#fff',
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '0.78rem',
                        color: '#374151',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#16a34a'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#d1d5db'}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        {doc.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Navegação entre projetos ── */}
      <div style={{
        padding: '4rem clamp(1.5rem, 6vw, 6rem) 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: '1rem',
      }}>
        {anterior ? (
          <Link to={`/projetos/${anterior.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '0.4rem',
              padding: '1.5rem',
              border: '1px solid #e5e7eb',
              borderRadius: '2px',
              background: '#fff',
              transition: 'border-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = anterior.cor + '66'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e7eb'}
            >
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.58rem', letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase' }}>← Anterior</span>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '1.1rem', color: '#111827' }}>{anterior.titulo}</span>
            </div>
          </Link>
        ) : <div style={{ flex: 1 }} />}

        {proximo ? (
          <Link to={`/projetos/${proximo.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '0.4rem',
              padding: '1.5rem',
              border: '1px solid #e5e7eb',
              borderRadius: '2px',
              background: '#fff',
              textAlign: 'right',
              transition: 'border-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = proximo.cor + '66'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#e5e7eb'}
            >
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.58rem', letterSpacing: '0.14em', color: '#9ca3af', textTransform: 'uppercase' }}>Próximo →</span>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '1.1rem', color: '#111827' }}>{proximo.titulo}</span>
            </div>
          </Link>
        ) : <div style={{ flex: 1 }} />}
      </div>

      {/* ── CTA ── */}
      <div style={{
        marginTop: '4rem',
        borderTop: '1px solid #e5e7eb',
        padding: '5rem clamp(1.5rem, 6vw, 6rem)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.65rem', letterSpacing: '0.22em',
          color: '#16a34a', textTransform: 'uppercase', marginBottom: '1.5rem',
        }}>
          Faça a diferença
        </p>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 400, color: '#111827', marginBottom: '1rem',
        }}>
          Apoie o <em style={{ fontStyle: 'italic', color: projeto.cor }}>{projeto.titulo}</em>
        </h2>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.9rem', color: '#6b7280',
          marginBottom: '2.5rem', lineHeight: 1.7,
        }}>
          Cada contribuição chega diretamente a um jovem em situação de vulnerabilidade.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/comoapoiar" style={{ textDecoration: 'none' }}>
            <button style={{
              background: projeto.cor,
              color: '#fff', border: 'none',
              padding: '14px 48px', borderRadius: '4px',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Apoiar este projeto
            </button>
          </Link>
          <Link to="/projetos" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'transparent',
              color: '#374151',
              border: '1px solid #d1d5db',
              padding: '14px 32px', borderRadius: '4px',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#9ca3af'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#d1d5db'}
            >
              Ver todos os projetos
            </button>
          </Link>
        </div>
      </div>

      {/* responsive */}
      <style>{`
        @media (max-width: 768px) {
          .projeto-desc-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>

    </div>
  )
}
