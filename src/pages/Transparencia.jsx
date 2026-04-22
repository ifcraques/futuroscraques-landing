import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── FAQ data (from futuroscraques.org/perguntasrespostas) ──────────────────────
const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'O IFC cobra alguma taxa de seus participantes?',
    answer: 'Não cobramos absolutamente nada dos participantes! Todos os nossos projetos são gratuitos, garantindo que crianças e jovens em situação de vulnerabilidade possam participar sem qualquer custo. Acreditamos que o esporte deve ser acessível a todos.',
  },
  {
    id: 'faq-2',
    question: 'Como posso me inscrever em um projeto do IFC?',
    answer: 'Qualquer interessado pode se inscrever, desde que atenda aos critérios do projeto. A inscrição é feita online, por meio do preenchimento de um formulário disponível em nosso site ou em nossos canais de atendimento.',
  },
  {
    id: 'faq-3',
    question: 'O que preciso apresentar para participar de um projeto?',
    answer: 'Os documentos necessários incluem: formulário de inscrição preenchido, foto 3×4, concordância com as normas e regulamentos do IFC. Para atletas: seguro contra acidentes pessoais, atestado médico de aptidão para prática esportiva e inscrição no sistema da Confederação correspondente, caso o projeto exija.',
  },
  {
    id: 'faq-4',
    question: 'O IFC organiza eventos de corrida de rua?',
    answer: 'Sim! O IFC também realiza corridas de rua, como parte de nossos projetos voltados à promoção de hábitos saudáveis e à inclusão social. As corridas são gratuitas e abertas a todos, com o objetivo de incentivar a prática de atividades físicas e oferecer uma experiência esportiva inclusiva para diferentes idades e capacidades.',
  },
  {
    id: 'faq-5',
    question: 'Como posso me tornar um doador do IFC?',
    answer: 'Se você acredita no impacto transformador do esporte e deseja contribuir com nossos projetos, pode se tornar um doador do IFC. Todas as doações são utilizadas para manter nossos programas gratuitos e ampliar o atendimento a mais crianças e jovens. Para mais informações, entre em contato pelo e-mail contato@futuroscraques.org ou visite nosso site.',
  },
  {
    id: 'faq-6',
    question: 'Quais são as categorias oferecidas pelo IFC?',
    answer: 'O IFC oferece categorias para diferentes faixas etárias e níveis: Infantil (Sub-10) para iniciação esportiva a partir de 6 anos; Juvenil (Sub-15 e Sub-18) para desenvolvimento técnico e físico; e Adulto (Sub-23 e Adulto) para preparação de competições de alto rendimento.',
  },
  {
    id: 'faq-7',
    question: 'Preciso ser atleta para participar?',
    answer: 'Não. O IFC é aberto a todos que desejam participar, sejam atletas ou pessoas interessadas em contribuir com os projetos. Oferecemos programas tanto para iniciantes quanto para atletas de alto rendimento.',
  },
  {
    id: 'faq-8',
    question: 'Onde ficam os polos de atendimento do IFC?',
    answer: 'Atualmente, o IFC possui dois polos de atendimento em Santo André e um em São Paulo (Zona Sul), onde são realizadas as atividades e treinamentos. A sede administrativa está localizada em São Paulo.',
  },
  {
    id: 'faq-9',
    question: 'Existe atendimento presencial?',
    answer: 'Sim, mas o atendimento presencial ocorre nos polos de atendimento durante os horários de treino. Para questões administrativas, recomendamos o contato via e-mail ou formulário disponível em nosso site.',
  },
  {
    id: 'faq-10',
    question: 'Com que idade posso começar a participar dos projetos?',
    answer: 'Os projetos de iniciação esportiva do IFC começam a partir dos 6 anos de idade. Tanto meninos quanto meninas podem participar.',
  },
  {
    id: 'faq-11',
    question: 'O IFC trabalha apenas com futebol?',
    answer: 'Não. Embora o futebol seja uma das modalidades mais praticadas no IFC, também oferecemos projetos em outras modalidades, como basquete 3x3, iatismo e corridas de rua, sempre com foco na inclusão social e no desenvolvimento esportivo.',
  },
  {
    id: 'faq-12',
    question: 'O IFC organiza competições ou apenas treinamentos?',
    answer: 'O IFC organiza e participa de competições nacionais e internacionais, além de promover torneios internos e eventos esportivos para que os atletas possam aplicar o que aprendem nos treinamentos em um ambiente competitivo.',
  },
  {
    id: 'faq-13',
    question: 'O IFC aceita voluntários?',
    answer: 'Sim, o IFC conta com voluntários em diversas áreas, como treinadores, educadores e profissionais de saúde. Interessados em contribuir podem se inscrever através de nosso site.',
  },
  {
    id: 'faq-14',
    question: 'Como posso obter mais informações?',
    answer: 'Se você ainda tem dúvidas ou deseja mais informações, entre em contato conosco por meio do formulário de contato em nosso site ou pelo e-mail: contato@futuroscraques.org.',
  },
]

function FAQAccordion() {
  const [openId, setOpenId] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: isOpen ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
              transition: 'box-shadow 0.25s',
            }}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.1rem 1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1rem',
              }}
            >
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#111827',
                lineHeight: 1.4,
              }}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  flexShrink: 0,
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: isOpen ? '#16a34a' : '#f3f4f6',
                  color: isOpen ? '#fff' : '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 300,
                  transition: 'background 0.25s',
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
                    padding: '0 1.5rem 1.25rem 1.5rem',
                    borderTop: '1px solid #f3f4f6',
                  }}>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: '0.9rem',
                      color: '#6b7280',
                      lineHeight: 1.75,
                      margin: '0.85rem 0 0',
                    }}>
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

const tabs = [
  {
    id: 'docs',
    label: 'Documentos Institucionais',
    icon: '📋',
    description: 'Atas, estatutos e registros oficiais do Instituto',
    subsections: [
      {
        title: '2026–2030',
        items: [
          { label: 'Termo de Posse IFC 2026', url: 'https://www.futuroscraques.org/_files/ugd/168440_b3f65279594941fa8fb624143f155854.pdf', type: 'pdf' },
          { label: 'Estatuto IFC 2026', url: 'https://www.futuroscraques.org/_files/ugd/168440_8c912ab2a2104f458c21d9717bc52431.pdf', type: 'pdf' },
          { label: 'Ata Assembleia Extra IFC 2026', url: 'https://www.futuroscraques.org/_files/ugd/168440_7644db41ce43446fa1dabda2a22aeca3.pdf', type: 'pdf' },
          { label: 'Edital Convocação Assembleia Extra IFC 2026', url: 'https://www.futuroscraques.org/_files/ugd/168440_8a12a55de91445b5a22fa82056038091.pdf', type: 'pdf' },
          { label: 'Edital 05/12/2025', url: 'https://www.futuroscraques.org/_files/ugd/168440_ca654457f70b4484ba768d257002475d.pdf', type: 'pdf' },
          { label: 'Edital 12/12/2025', url: 'https://www.futuroscraques.org/_files/ugd/168440_26f43b4265ba4ed3983ffbd7f4e7168d.pdf', type: 'pdf' },
          { label: 'Edital 05/12/2025 (2)', url: 'https://www.futuroscraques.org/_files/ugd/168440_49953e3ce5f043b29d558e77de0f0192.pdf', type: 'pdf' },
        ],
      },
      {
        title: '2022–2026',
        items: [
          { label: 'Relatório Eleitoral', url: 'https://www.futuroscraques.org/_files/ugd/168440_17567cf98698454eba20cdaaf1028924.pdf', type: 'pdf' },
          { label: 'Edital + Ata 2022–2026 + Lista de Presença e Termo de Posse', url: 'https://www.futuroscraques.org/_files/ugd/168440_012a3799a8ec437eb3af954ad8344d38.pdf', type: 'pdf' },
          { label: 'IFC Estatuto', url: 'https://www.futuroscraques.org/_files/ugd/168440_698e599bb575434f8f61d7ec687c88d7.pdf', type: 'pdf' },
          { label: 'Publicação Jornal - 17/12/2021', url: 'https://www.futuroscraques.org/_files/ugd/168440_dabeb44712cb472b9e89ac3f2227acc9.pdf', type: 'pdf' },
          { label: 'Publicação Jornal - 24/12/2021', url: 'https://www.futuroscraques.org/_files/ugd/168440_3c526a4e96c84f76add349c5e1ae7e45.pdf', type: 'pdf' },
          { label: 'Publicação Jornal - 30/12/2021', url: 'https://www.futuroscraques.org/_files/ugd/168440_56c214d6f3f94b10ba48868bda45be20.pdf', type: 'pdf' },
        ],
      },
      {
        title: '2018–2022',
        items: [
          { label: 'Jornal IFC 2018', url: 'https://www.futuroscraques.org/_files/ugd/168440_411b7faf07fd4515958b494883bcc1d1.pdf', type: 'pdf' },
          { label: 'Estatuto 2018', url: 'https://www.futuroscraques.org/_files/ugd/168440_667cfddcf7334a52a2cf3b47c4429c12.pdf', type: 'pdf' },
          { label: 'Ata Eleição Diretoria', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_74d53b8b7349459c918449aeb89e3fd1.pdf', type: 'pdf' },
        ],
      },
      {
        title: '2005–2017',
        items: [
          { label: 'Ata Eleição e Estatuto - Amigos do Guima (2005–2009)', url: 'https://www.futuroscraques.org/_files/ugd/168440_62b108eaeb954ea59d9f7f105805c8e2.pdf', type: 'pdf' },
          { label: 'Ata de Fundação - Amigos do Guima (2005–2009)', url: 'https://www.futuroscraques.org/_files/ugd/168440_98e98149814145eeb7b260e11ea05f6b.pdf', type: 'pdf' },
          { label: 'Ata Eleição e Estatuto - Amigos do Guima (2010–2013)', url: 'https://www.futuroscraques.org/_files/ugd/168440_8289408732b048a1871519ab5c89cf41.pdf', type: 'pdf' },
          { label: 'Ata de Fundação - Amigos do Guima (2010–2013)', url: 'https://www.futuroscraques.org/_files/ugd/168440_0caf84f0a7514bd4858958a1d4375129.pdf', type: 'pdf' },
          { label: 'Ata Eleição e Estatuto - Amigos do GUIMA (2014–2016)', url: 'https://www.futuroscraques.org/_files/ugd/168440_0eb9312c41384c2999b2e535c2a43474.pdf', type: 'pdf' },
          { label: 'Jornal Zona Sul - Fev 2017', url: 'https://www.futuroscraques.org/_files/ugd/168440_306ad8fdd4e4464e971c0f9ee1e7b33d.pdf', type: 'pdf' },
        ],
      },
    ],
  },
  {
    id: 'relatorios',
    label: 'Relatórios e Certificações',
    icon: '📊',
    description: 'Relatórios, código de conduta e certificações de associações',
    items: [
      { label: 'Relatório Circunstanciado 2024–2025', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_7d2960713d2c400e8cad1e1478fdbe5e.pdf', type: 'pdf' },
      { label: 'Código de Conduta', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_57f89245012e4ed087fb58dd5c6bfe2a.pdf', type: 'pdf' },
      { label: 'Associação de Surf da Grande São Paulo - 2023', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_f8940bd101004a62acbd4f2ebda6e090.pdf', type: 'pdf' },
      { label: 'Federação Paulista de Atletismo - 2025', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_57ca8106baaf41d4a808de4088d2d861.pdf', type: 'pdf' },
      { label: 'Secretaria de Esportes - 2023', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_68ef8700525e4c4a8ae6efee0b20ea56.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'contabil',
    label: 'Demonstrações Contábeis',
    icon: '💰',
    description: 'Balanços patrimoniais e demonstrações financeiras',
    subsections: [
      {
        title: '2024',
        items: [
          { label: 'Balancete 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_3cce1d0c46d14f2ea7dfed8f3735eb72.pdf', type: 'pdf' },
          { label: 'Balanço Patrimonial 2024', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_efb88f109bc04411bf9dc7da09195dd4.pdf', type: 'pdf' },
          { label: 'Composição de Índices 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_614e2f4ba15d438aa0e8229f9b0b33ce.pdf', type: 'pdf' },
          { label: 'Parecer Aprovação Contas 2024', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_96cf7e9cec9540ee84c16ff3eb23cc17.pdf', type: 'pdf' },
          { label: 'Relatório Financeiro 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_82808ff5130647faa70e95f0b30679fa.pdf', type: 'pdf' },
          { label: 'ECD 2024/2025 Recibo', url: 'https://www.futuroscraques.org/_files/ugd/168440_7c07ac78f7994f53846ef358128ac362.pdf', type: 'pdf' },
          { label: 'DRE 2024', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_5fed18ba43e54818a0973663bb3ef9d4.pdf', type: 'pdf' },
          { label: 'AGO Contas 2024', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_50bc41e7e4884ec08ff00602eebba6b6.pdf', type: 'pdf' },
        ],
      },
      {
        title: '2023',
        items: [
          { label: 'DRE 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_1ddddd115945437f87b3872e36734b42.pdf', type: 'pdf' },
          { label: 'ECT Recibo 2023 Retificado', url: 'https://www.futuroscraques.org/_files/ugd/168440_f8699df1486a470292e7712367ee4504.pdf', type: 'pdf' },
          { label: 'Balanço 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_0675f83742dc457295a6980e88e90d5a.pdf', type: 'pdf' },
          { label: 'Balancete 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_72d43b8564854c0dae541daac543e7bb.pdf', type: 'pdf' },
          { label: 'AGO - Aprovação Contas 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_cd053fd8d98a4befb58a008d3cd2bff5.pdf', type: 'pdf' },
          { label: 'Diário 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_c50d3e92287f4e0099e5d9def85594e8.pdf', type: 'pdf' },
          { label: 'Relatório Financeiro 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_50a48d20f74e454fab8a39610ba07a8f.pdf', type: 'pdf' },
          { label: 'Composição de Índices 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_ee933811f7bc420fae6630e259c3aa3c.pdf', type: 'pdf' },
          { label: 'Parecer Conselho Fiscal 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_caec3ed9d6f947dab96225d7e4765019.pdf', type: 'pdf' },
          { label: 'Recibo ECD 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_35308fc351a94a73847c9b12e3c58b90.pdf', type: 'pdf' },
          { label: 'ECD 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_d15392eca6164367a9924a9bf7150a0d.pdf', type: 'pdf' },
        ],
      },
      {
        title: '2022',
        items: [
          { label: 'Composição de Índices 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_655911f9f2774981b28357d3e1e43a06.pdf', type: 'pdf' },
          { label: 'ATA AGO 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_67ba080996154c2b8f82c99a16de0069.pdf', type: 'pdf' },
          { label: 'AGO - Aprovação Contas 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_c799cad1454645b4a438ac39f67a9a31.pdf', type: 'pdf' },
          { label: 'Diário 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_32e0bafff1c74527817c2b9822de6897.pdf', type: 'pdf' },
          { label: 'Parecer Contas 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_06d0a05ac322434ab31a79fce262475c.pdf', type: 'pdf' },
          { label: 'Relatório Eleitoral 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_24ccb8e10133431c9db5484505beb673.pdf', type: 'pdf' },
          { label: 'DRE 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_812ee30727324e6e8dd539ae0a7960b4.pdf', type: 'pdf' },
          { label: 'Balanço 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_bd23ea812cb945efb2baac320f8a0f6c.pdf', type: 'pdf' },
          { label: 'Relatório Financeiro 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_8e4e95e23b2a4acd8a7d5c807befb5fa.pdf', type: 'pdf' },
          { label: 'Balancete 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_379a809e94714efb8e87105d7fce75f5.pdf', type: 'pdf' },
          { label: 'ECD 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_9596cf859c094efcbdf367543d25aad9.pdf', type: 'pdf' },
        ],
      },
      {
        title: '2020',
        items: [
          { label: 'Declaração Contabilidade 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_84710eec64fe46baad78279679023cee.pdf', type: 'pdf' },
          { label: 'Participação de Atletas na Diretoria', url: 'https://www.futuroscraques.org/_files/ugd/168440_e10ce993fa054ee58cb0dff05960ccbf.pdf', type: 'pdf' },
          { label: 'Relatório Financeiro 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_34b32efcdb1b457caf94af959b0481f6.pdf', type: 'pdf' },
          { label: 'DRE 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_94fa65786a7047fc92e61fc79851762e.pdf', type: 'pdf' },
          { label: 'Parecer Conselho Fiscal 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_250a4468d31a469f967918ad7742974c.pdf', type: 'pdf' },
          { label: 'Adendo Balanço - Memorial de Cálculo', url: 'https://www.futuroscraques.org/_files/ugd/168440_b98e297b17b54125a1605015ba483d46.pdf', type: 'pdf' },
          { label: 'Balanço 2020 + Balancete + DRE', url: 'https://www.futuroscraques.org/_files/ugd/168440_1c42032707ae44e5b000ec7f0fdd0023.pdf', type: 'pdf' },
          { label: 'Composição de Índices 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_e6736ff79d284e5f8df037143fa87228.pdf', type: 'pdf' },
          { label: 'AGO - Aprovação Contas 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_aad6d81a0e224e73bc1bb31e27c4388e.pdf', type: 'pdf' },
          { label: 'Parecer Conselho Fiscal - Exercício 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_30bb4690d9934bc9a79679ba8ded2872.pdf', type: 'pdf' },
          { label: 'Declaração de Comprometimento 2021', url: 'https://www.futuroscraques.org/_files/ugd/168440_f4b2eac5edbe429fb7d82aa222dcb51a.pdf', type: 'pdf' },
          { label: 'Edital - Aprovação de Contas 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_dbcd4d9b3f314dd9aa71b2eeb1b61bad.pdf', type: 'pdf' },
          { label: 'Jornal - Edital - AGO Contas', url: 'https://www.futuroscraques.org/_files/ugd/168440_8635239d65c24d7098b44af1fdac0c43.pdf', type: 'pdf' },
        ],
      },
      {
        title: '2019',
        items: [
          { label: 'AGO - Aprovação Contas 2018', url: 'https://www.futuroscraques.org/_files/ugd/168440_c656a6a41c2c47c89bd9c18f9dfc2d16.pdf', type: 'pdf' },
          { label: 'Recibo Declaração de Débitos e Créditos Tributários', url: 'https://www.futuroscraques.org/_files/ugd/168440_c0c76a27fa6e427eb5bd4135bae875b7.pdf', type: 'pdf' },
          { label: 'Relatório 2019', url: 'https://www.futuroscraques.org/_files/ugd/168440_fc125879865044b38d9e8865073f60a9.pdf', type: 'pdf' },
          { label: 'Edital e AGO - Aprovação Contas 2019', url: 'https://www.futuroscraques.org/_files/ugd/168440_64f6a3457e2e4855a1cb3cf4f70f2544.pdf', type: 'pdf' },
          { label: 'DCTF 01-2019 Declaração', url: 'https://www.futuroscraques.org/_files/ugd/168440_d7320974696c4b87a6fb422b4a8bce98.pdf', type: 'pdf' },
          { label: 'Composição de Índices 2019', url: 'https://www.futuroscraques.org/_files/ugd/168440_07e5fc19f2654deda6c22cf917fb4b97.pdf', type: 'pdf' },
          { label: 'Declaração Xavantes IFC 2018–2019', url: 'https://www.futuroscraques.org/_files/ugd/168440_de285b9c1ba340a2b7dc1cdf24fd5140.pdf', type: 'pdf' },
          { label: 'Recibo Balanço 2018 Sem Movimentação', url: 'https://www.futuroscraques.org/_files/ugd/168440_d00877280ec444e785d06cf7fa039084.pdf', type: 'pdf' },
          { label: 'Recibo de Entrega IR IFC 2019', url: 'https://www.futuroscraques.org/_files/ugd/168440_26cddd3ad4064ac5ba2475696645bb06.pdf', type: 'pdf' },
          { label: 'Balanço IFC 2019', url: 'https://www.futuroscraques.org/_files/ugd/168440_63adf7c9e28d4e37b573839eeafc62fd.pdf', type: 'pdf' },
          { label: 'DRE IFC 2019', url: 'https://www.futuroscraques.org/_files/ugd/168440_8567b22942ab41e18263b4c1c20bfb73.pdf', type: 'pdf' },
          { label: 'Parecer Conselho Fiscal 2019', url: 'https://www.futuroscraques.org/_files/ugd/168440_39f1d05b51c146a2a10ccd0a13e96e57.pdf', type: 'pdf' },
          { label: 'Declaração Contabilidade 2020', url: 'https://www.futuroscraques.org/_files/ugd/168440_17eeff74a42143a28ed6d0d6eaf263af.pdf', type: 'pdf' },
        ],
      },
      {
        title: '2017–2018',
        items: [
          { label: 'Parecer Conselho Fiscal 2017', url: 'https://www.futuroscraques.org/_files/ugd/168440_7972c3aa0eb54158a6d91f653e1a84a5.pdf', type: 'pdf' },
          { label: 'Parecer Conselho Fiscal - Contas 2017', url: 'https://www.futuroscraques.org/_files/ugd/168440_b9e005eb0a264400979e1345bde73eee.pdf', type: 'pdf' },
          { label: 'Parecer Conselho Fiscal - Contas 2018', url: 'https://www.futuroscraques.org/_files/ugd/168440_f5154dab10a647ee83cdf1ad0ff106b4.pdf', type: 'pdf' },
          { label: 'Parecer Conselho Fiscal 2018', url: 'https://www.futuroscraques.org/_files/ugd/168440_52a7f7b5d33f4b55be8ac129def83137.pdf', type: 'pdf' },
          { label: 'Relatório Financeiro 2018', url: 'https://www.futuroscraques.org/_files/ugd/168440_4906bd617e794f98b49a362d43386f57.pdf', type: 'pdf' },
          { label: 'ATA AGO 10/04/2018 - Contas 2017', url: 'https://www.futuroscraques.org/_files/ugd/168440_940ef8689dbe46d09d6e0e4d4d0f6134.pdf', type: 'pdf' },
          { label: 'DCTF 01-2018 Declaração', url: 'https://www.futuroscraques.org/_files/ugd/168440_5d6915853b3949338cfbb5cb86bcf902.pdf', type: 'pdf' },
          { label: 'DCTF 2018', url: 'https://www.futuroscraques.org/_files/ugd/168440_6e461b9e488a4dbaaadf74e347d99d1f.pdf', type: 'pdf' },
          { label: 'Balanço 2018 IFC Sem Movimento', url: 'https://www.futuroscraques.org/_files/ugd/168440_f966702bc76945b6b32bb30f6a3170c3.pdf', type: 'pdf' },
        ],
      },
    ],
  },
  {
    id: 'editais',
    label: 'Editais',
    icon: '📢',
    description: 'Editais de contratação, chamamentos e resultados',
    subsections: [
      {
        title: 'Convocações de Assembléia',
        items: [
          { label: 'Convocação Assembléia - Jornal 30/12/2021', url: 'https://www.futuroscraques.org/_files/ugd/168440_a2fcaf5b8ca643c6a915d922e6060afb.pdf', type: 'pdf' },
          { label: 'Convocação Assembléia - Jornal 23/12/2021', url: 'https://www.futuroscraques.org/_files/ugd/168440_e285ccec9d9d4385b527bab869d43ddc.pdf', type: 'pdf' },
          { label: 'Convocação Assembléia - Jornal 07/12/2021', url: 'https://www.futuroscraques.org/_files/ugd/168440_0146eb84907a415fa90c5064f0dd886f.pdf', type: 'pdf' },
        ],
      },
      {
        title: 'Chamamentos SEME',
        items: [
          { label: 'Chamamento SEME - Virada Esportiva 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_893b2e25e3eb42c8a28ea1732b440bac.pdf', type: 'pdf' },
          { label: 'Chamamento SEME - Virada Esportiva 2025', url: 'https://www.futuroscraques.org/_files/ugd/168440_e3454a1ba7a04b85b664f59c396ec811.pdf', type: 'pdf' },
        ],
      },
      {
        title: 'Chamamentos LPIE',
        items: [
          { label: 'Chamamento LPIE 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_59acc4cd1d234104b0d28c27b0112475.pdf', type: 'pdf' },
          { label: 'Chamamento LPIE 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_b9ebd88f4dde42d79cab1da9130be51f.pdf', type: 'pdf' },
          { label: 'Chamamento LPIE SP 2024', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_371eec7c59904c659fa698b7731f8c7e.pdf', type: 'pdf' },
          { label: 'Chamamento LPIE 2025', url: 'https://www.futuroscraques.org/_files/ugd/168440_bb0b076a1cef42a58a3a7bae0ace2570.pdf', type: 'pdf' },
          { label: 'Chamamento LPIE 2026', url: 'https://www.futuroscraques.org/_files/ugd/168440_e2a28e75ce0e424cafd42fa7e2d9dd5e.pdf', type: 'pdf' },
        ],
      },
      {
        title: 'Chamamentos LIE',
        items: [
          { label: 'Chamamento LIE 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_8328c62feb674fad9bd738d9655d2235.pdf', type: 'pdf' },
          { label: 'Chamamento LIE 2023', url: 'https://www.futuroscraques.org/_files/ugd/168440_065457ad79934dd2bfb73b18afb17d6f.pdf', type: 'pdf' },
          { label: 'Chamamento LIE 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_02a736b485084063a723d79f3a8fe78a.pdf', type: 'pdf' },
          { label: 'Chamamento LIE 2025', url: 'https://www.futuroscraques.org/_files/ugd/168440_702b171b85424a8e9283edcc83c695ba.pdf', type: 'pdf' },
        ],
      },
      {
        title: 'Beach Sports & Verão',
        items: [
          { label: 'Edital Verão Para Todos 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_5f6a6ff5ffd54e278efccec48dd85d15.pdf', type: 'pdf' },
          { label: 'Resultado Edital Verão Para Todos 2022', url: 'https://www.futuroscraques.org/_files/ugd/168440_7387a7b5144440f98697b77a7b630ab1.pdf', type: 'pdf' },
          { label: 'Chamamento Beach Sports 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_bf16b10b42cc4debbd30fdc56214a816.pdf', type: 'pdf' },
          { label: 'Edital Beach Sports 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_184521b4c6ca4387ba095e085f815c02.pdf', type: 'pdf' },
          { label: 'Resultado Edital Beach Sports 2024', url: 'https://www.futuroscraques.org/_files/ugd/168440_7e04a9db7df04a259003252b25c2e861.pdf', type: 'pdf' },
        ],
      },
    ],
  },
  {
    id: 'certificados',
    label: 'Certificados',
    icon: '🏅',
    description: 'Certificados, registros e reconhecimentos oficiais',
    items: [
      { label: 'Certificação Ministério 2025', url: 'https://www.futuroscraques.org/_files/ugd/168440_a4c5fb38b52f4c37b2093f9d44de1546.pdf', type: 'pdf' },
      { label: 'CRCE 2025', url: 'https://www.futuroscraques.org/_files/ugd/168440_86b21e97f5cb4128a13f07acc3425211.pdf', type: 'pdf' },
      { label: 'CENTS-SP - Certificado', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_3538029f9cf14ef086e0628cdc2b63cd.pdf', type: 'pdf' },
      { label: 'CMDCA-SP - Certificado de Registro', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_20f63626adb949588d91bae07e9cc53a.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'faq',
    label: 'Perguntas e Respostas',
    icon: '❓',
    description: 'Dúvidas frequentes sobre o Instituto Futuros Craques e seus projetos',
    isFaq: true,
  },
  {
    id: 'projetos',
    label: 'Projetos (Documentação)',
    icon: '📁',
    description: 'Documentação técnica e legal dos projetos esportivos',
    subsections: [
      {
        title: 'Drible Certo 3x3',
        items: [
          { label: 'Certidão Estadual', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_7bba27eaecd24f789e4f5b8ae3259224.pdf', type: 'pdf' },
          { label: 'Certidão Federal', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_c2fdf7a223494728afb6ed96433047c2.pdf', type: 'pdf' },
          { label: 'Projeto Técnico IFC 2024', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_f3537f2a81d645fab64a600464dbf99d.pdf', type: 'pdf' },
          { label: 'Publicação D.O.', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_57784e4d507c46b790ea1b0edd47f629.pdf', type: 'pdf' },
          { label: 'Edital', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_6af5475984b544b29f2350b3425ac579.pdf', type: 'pdf' },
          { label: 'Segunda Publicação D.O.', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_8dcc04c5295b4ab1ad61799e257b396a.pdf', type: 'pdf' },
        ],
      },
      {
        title: 'Circuitos IFC',
        items: [
          { label: 'Certidão Estadual', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_43cf6ab484d84b9697ce60b00f49a38c.pdf', type: 'pdf' },
          { label: 'Certidão Federal', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_bcb2eb32af304c3c94e0546698728e95.pdf', type: 'pdf' },
          { label: 'Projeto Técnico IFC 2024', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_f3537f2a81d645fab64a600464dbf99d.pdf', type: 'pdf' },
          { label: 'Publicação D.O.', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_57784e4d507c46b790ea1b0edd47f629.pdf', type: 'pdf' },
          { label: 'Edital', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_6af5475984b544b29f2350b3425ac579.pdf', type: 'pdf' },
          { label: 'Segunda Publicação D.O.', url: 'https://www.futuroscraques.org/_files/ugd/3db4e0_8dcc04c5295b4ab1ad61799e257b396a.pdf', type: 'pdf' },
        ],
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

function getItemCount(tab) {
  if (tab.isFaq) return FAQ_ITEMS.length
  if (tab.items) return tab.items.length
  if (tab.subsections) return tab.subsections.reduce((sum, s) => sum + s.items.length, 0)
  return 0
}

function DocLink({ item }) {
  return (
    <motion.a
      href={item.url}
      className="transp-doc-btn"
      target="_blank"
      rel="noreferrer"
      variants={itemVariants}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,51,102,0.12)' }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="transp-doc-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>
      <span className="transp-doc-label">{item.label}</span>
      <span className="transp-doc-action">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </span>
    </motion.a>
  )
}

export default function Transparencia() {
  const [activeTab, setActiveTab] = useState('docs')
  const activeData = tabs.find((t) => t.id === activeTab)
  const totalItems = getItemCount(activeData)

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-pretitle">Prestacao de Contas</span>
          <h1>Transparencia</h1>
          <p>
            Acreditamos que a transparencia e fundamental para a confianca.
            Aqui voce encontra todos os documentos institucionais, demonstracoes
            contabeis, relatorios de atividades, editais e certificados do Instituto Futuros Craques.
          </p>
        </motion.div>
      </section>

      <section className="section transparency-section">
        <div className="transp-nav">
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.id}
              className={`transp-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="transp-nav-icon">{tab.icon}</span>
              <span className="transp-nav-label">{tab.label}</span>
              <span className="transp-nav-count">{getItemCount(tab)}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="transp-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="transp-panel-header">
              <div className="transp-panel-title">
                <span className="transp-panel-icon">{activeData.icon}</span>
                <div>
                  <h2>{activeData.label}</h2>
                  <p className="transp-panel-desc">{activeData.description}</p>
                </div>
              </div>
              <span className="transp-panel-badge">
                {totalItems} {totalItems === 1 ? 'documento' : 'documentos'}
              </span>
            </div>

            {activeData.isFaq ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <FAQAccordion />
              </motion.div>
            ) : activeData.subsections ? (
              activeData.subsections.map((section) => (
                <div key={section.title} className="transp-subsection">
                  <h3 className="transp-subsection-title">{section.title}</h3>
                  <motion.div
                    className="transp-docs"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {section.items.map((item) => (
                      <DocLink key={item.url} item={item} />
                    ))}
                  </motion.div>
                </div>
              ))
            ) : (
              <motion.div
                className="transp-docs"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {activeData.items.map((item) => (
                  <DocLink key={item.url} item={item} />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  )
}
