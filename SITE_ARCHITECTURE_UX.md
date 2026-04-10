# 🗺️ Instituto Futuros Craques - Arquitetura de UX & Estrutura do Site

---

## 📊 Mapa Mental da Navegação (COMPLETO)

```
HOME
├── QUEM SOMOS (Dropdown/Seção)
│   ├── Nossa História
│   ├── Missão & Visão
│   ├── Equipe
│   └── Reconhecimentos & Parcerias
├── PROGRAMAS (Dropdown/Seção)
│   ├── Basquete Base (7-12 anos)
│   ├── Basquete Competição (13-18 anos)
│   ├── 3x3 (Todos os ages)
│   └── Desenvolvimento Humano
├── IMPACTO (Dropdown/Seção)
│   ├── Dashboard de Resultados (INTERATIVO) ⭐
│   ├── Histórias de Transformação
│   ├── Números que Falam
│   └── Mapa de Atuação Nacional (Brasil + destaque SP)
├── EDITAIS & INSCRIÇÕES (Dropdown/Seção)
│   ├── Editais Abertos (com vagas em tempo real) ⭐
│   ├── Como Se Inscrever (passo a passo)
│   ├── Formulário de Inscrição Online ⭐
│   └── FAQ de Inscrição
├── PATROCINADORES (Dropdown/Seção)
│   ├── Seja um Patrocinador
│   ├── Nossos Parceiros (logos + histórias)
│   ├── Histórias de Parcerias
│   ├── Oportunidades de Investimento
│   └── Relatar de Impacto por Parceiro ⭐
├── TRANSPARÊNCIA (Dropdown/Seção) ⭐
│   ├── Relatórios Anuais
│   ├── Dados Financeiros
│   ├── Onde Vai o Dinheiro (visual)
│   └── Documentos Institucionais (Download)
├── BLOG & NOTÍCIAS (Dropdown/Seção) ⭐
│   ├── Últimas Notícias
│   ├── Histórias em Destaque
│   ├── Artigos & Análises
│   ├── Calendário de Eventos
│   └── Arquivo (filtro por mês/ano)
└── CONTATO & SUPORTE ⭐
    ├── Formulário de Contato
    ├── Chat em Tempo Real (suporte)
    ├── Localização & Horários
    ├── WhatsApp/Telefone
    └── Redes Sociais
```

**⭐ = Novas abas/seções adicionadas com base em feedback**

---

## 📋 Resumo de Páginas Principais + Novas

| Página | Status | Descrição | Interatividade |
|--------|--------|-----------|-----------------|
| HOME | ✅ Criada | Entry point, inspiração, estatísticas | Alta (animações, scroll) |
| QUEM SOMOS | ✅ Criada | História, missão, equipe | Média |
| PROGRAMAS | ✅ Criada | Detalhes dos 4 programas | Alta (cards expansivos) |
| IMPACTO | ✅ Criada | Dashboard interativo + histórias | ⭐⭐⭐ MUITO ALTA |
| PATROCINADORES | ✅ Criada | Níveis, case studies, oportunidades | Alta |
| EDITAIS & INSCRIÇÕES | 🆕 NOVA | Editais abertos + formulário | ⭐⭐⭐ MUITO ALTA |
| TRANSPARÊNCIA | 🆕 NOVA | Relatórios financeiros, dados | Alta (filtros, downloads) |
| BLOG & NOTÍCIAS | 🆕 NOVA | Artigos, histórias, calendário | Alta (filtros, busca) |
| CONTATO & SUPORTE | 🆕 NOVA | Chat ao vivo + formulários | ⭐⭐⭐ MUITO ALTA |

---

## 🎯 Estrutura de Páginas Principais

### 1️⃣ HOME (Página de Entrada)

**Objetivo**: Capturar atenção, transmitir energia e inspiração imediata

**Seções** (scroll vertical):

#### A. Hero Section (Full Screen)
- **Visual**: Vídeo de fundo (basquete em movimento) + overlay
- **Conteúdo**:
  - Título grande: "Transformando Vidas Através do Basquete"
  - Subtítulo: "Aqui, todo jovem tem a chance de ser o craque que sonha"
  - CTA 1: "Quero Participar"
  - CTA 2: "Sou Patrocinador"
- **Elemento Animado**: Sunny aparecendo no canto inferior, fazendo gesto de boas-vindas
- **Efeito**: Parallax leve, texto se move diferente do fundo

#### B. Stats Section (Inspirador)
- **Título**: "O Impacto Real"
- **4 Cards Animados** (números crescem ao entrar na tela):
  - 150+ Jovens Transformados
  - 87% em Projetos Educacionais
  - 3 Estados Alcançados
  - 50+ Patrocinadores Envolvidos
- **Elemento Sunny**: Ao lado, apontando para os números com excitação

#### C. Seção de Programas
- **Título**: "Programas Que Mudam Vidas"
- **4 Cards Deslizáveis** (ou 2x2 em desktop):
  - Basquete Base (7-12 anos)
  - Basquete Competição (13-18 anos)
  - 3x3 (Todos)
  - Desenvolvimento Humano
- **Design**: Cada card tem:
  - Ícone/ilustração
  - Título
  - Descrição breve
  - "Saiba Mais" link
  - Hover: Levanta um pouco + sombra aumenta (interatividade)

#### D. Histórias de Impacto (Storytelling Imersivo)
- **Título**: "Conheça Quem Mudou"
- **3 Cards de Histórias** (ou slider):
  - Foto do participante/cidade
  - Nome (ou "João de São Miguel")
  - Texto breve de transformação
  - CTA: "Leia a história completa"
- **Animação**: Cards deslizam de baixo para cima ao scroll
- **Sunny**: Sentado lendo as histórias, emocionado

#### E. Dashboard de Impacto (Interativo - Destaque)
- **Título**: "Impacto em Números Vivos"
- **Elementos Dinâmicos**:
  - **Mapa do Brasil** (visão padrão) com pins por cidade/estado (clicáveis)
  - Zoom automático para SP ao entrar na tela — destaque visual para onde estamos fisicamente
  - Filtro "Ver SP" / "Ver Brasil inteiro" facilmente acessível
  - Gráficos animados (bar chart, pie chart)
  - Timeline visual da história do IFC
- **Filtros**: Por região (estado/cidade), programa, ano
- **Mobile**: Versão simplificada, scroll horizontal

#### F. Parceiros & Patrocinadores
- **Título**: "Parceiros da Transformação"
- **Logo Grid** (3-4 colunas):
  - Logos de patrocinadores/governo (SEC, Minist. Esporte, etc.)
  - Hover: Reveal texto "Leia como impactamos juntos"
- **CTA Destaque**: "Quer ser um parceiro?"

#### G. Call to Action (Triplo)
- 3 CTAs lado a lado:
  - "Quero Participar dos Projetos" → Link Inscrição
  - "Quero Patrocinar" → Link Oportunidades
  - "Quero Conhecer Melhor" → Link Sobre
- **Design**: Cards grandes, cores vibrantes, hover animado

#### H. Footer
- Links rápidos
- Redes sociais
- Contato
- Sunny fazendo aceno de despedida

---

### 2️⃣ PÁGINA DE IMPACTO (Seção Exclusiva)

**Objetivo**: Dashboard interativo mostrando dados reais e histórias

**Seções**:

#### A. Hero de Impacto
- Título grande: "Números que Mudam Vidas"
- Sunny com tablet mostrando dados

#### B. Dashboard Interativo Principal
- **Mapa de São Paulo**:
  - Pins coloridos por programa
  - Hover mostra número de participantes
  - Click abre detalhes da localidade

- **Gráficos Dinâmicos**:
  - Crescimento anual (2021-2026)
  - Distribuição por programa
  - Idade dos participantes
  - Taxa de sucesso educacional

- **Filtros Ativos**:
  - Por Programa
  - Por Localidade
  - Por Ano
  - Por Faixa Etária

#### C. Histórias Que Sustentam os Números
- 6-10 cards com histórias reais
- Cada card: Foto + Nome + Citação + "Leia completo"
- Filtro: Posso buscar por nome ou programa
- Animação: Fade in ao scroll

#### D. Depoimentos de Impacto
- Vídeos curtos (20-30s) de:
  - Participantes
  - Responsáveis
  - Patrocinadores
- Player interativo em grid 2x3

---

### 3️⃣ PÁGINA DE PROGRAMAS

**Objetivo**: Detalhar cada programa, inscrição clara

**Seções**:

#### A. Hero
- Título: "Programas que Transformam"
- Sunny em uniforme do IFC

#### B. Cards dos 4 Programas (Grid)
Cada um expande ao click para mostrar:
- Descrição completa
- Faixa etária
- Carga horária
- Benefícios
- Foto de ação do programa
- CTA: "Quero Me Inscrever"

#### C. Critérios de Inscrição
- Lista clara
- Sunny apontando as informações importantes

#### D. FAQ dos Programas
- Accordion (click para expandir)
- Perguntas mais comuns

---

### 4️⃣ PÁGINA DE PATROCINADORES

**Objetivo**: Mostrar valor, traçar oportunidades, atrair investimento

**Seções**:

#### A. Hero para Patrocinadores
- Título: "Seja Parte da Transformação"
- Imagem: Sunny dando a mão para pessoas (comunidade)
- CTA grande: "Vamos Conversar?"

#### B. Por Que Patrocinar?
- 3 cards com benefícios:
  - **Impacto Social Real**: Números, histórias
  - **Visibilidade de Marca**: Como seu logo aparecerá
  - **Alinhamento com Governo**: SEC, Ministério do Esporte

#### C. Níveis de Patrocínio
- Table ou Cards mostrando:
  - Patrocinador Ouro (maior aporte)
  - Patrocinador Prata
  - Patrocinador Bronze
  - Apoiador

Com cada nível:
- Valores mínimos
- Benefícios específicos
- Visibilidade (website, eventos, etc.)
- Depoimentos

#### D. Histórias de Parcerias Bem-Sucedidas
- 3-4 case studies:
  - Logo da empresa
  - Desafio/Oportunidade
  - Como impactaram juntos
  - Números de resultado
  - Quote do patrocinador

#### E. Processos e Próximos Passos
- Timeline visual: 1. Contato → 2. Proposta → 3. Contrato → 4. Implementação
- Sunny guiando pelo processo

#### F. Contato Direto
- Formulário simples
- Ou: "Mande um WhatsApp para..."
- Sunny esperando a mensagem

---

### 5️⃣ PÁGINA SOBRE

**Objetivo**: Contar a história, gerar confiança

**Seções**:

#### A. Timeline Visual da História
- Linha do tempo (2020 → 2026)
- Marcos principais com ícones
- Sunny crescendo junto com o Instituto

#### B. Missão, Visão, Valores
- 3 sections grandes
- Ícones memoráveis
- Descrição clara

#### C. Equipe
- Cards da equipe (você em destaque como presidente)
- Foto + Nome + Cargo + Bio breve
- Hover: Redes sociais (LinkedIn, etc)

#### D. Parcerias Institucionales
- Logos do governo (SEC, Ministério, Prefeitura)
- Texto: "Reconhecidos e autorizados por..."

### 6️⃣ PÁGINA DE EDITAIS & INSCRIÇÕES (NOVA)

**Objetivo**: Central de inscrição clara, com vagas em tempo real

**Seções**:

#### A. Hero
- Título: "Faça Parte da Transformação"
- Sunny com formulário na mão

#### B. Editais Abertos (Dinâmicos)
- **Cards por Programa**:
  - Nome do programa
  - Faixa etária
  - Data de início
  - Vagas disponíveis (com barra de progresso)
  - Próximas datas abertas
  - CTA: "Inscrever-se"

- **Filtros Ativos**:
  - Por idade
  - Por localidade
  - Por tipo (iniciante/avançado)

#### C. Como Funciona (Timeline Visual)
- 5 passos: Inscrição → Avaliação → Entrevista → Confirmação → Início
- Sunny guiando pelo processo

#### D. Formulário de Inscrição Online ⭐ (INTEGRADO)
- Campos essenciais:
  - Nome do responsável
  - Dados do jovem (idade, escola)
  - Contato
  - Programa desejado
  - Dados socioeconômicos (para priorizar)
- Validação em tempo real
- Confirmação por email/WhatsApp
- Sunny ao lado animando o preenchimento

#### E. FAQ
- Perguntas comuns sobre inscrição
- Pré-requisitos
- O que levar

#### F. Contato para Dúvidas
- Chat ao vivo
- Email
- WhatsApp

---

### 7️⃣ PÁGINA DE TRANSPARÊNCIA (NOVA)

**Objetivo**: Mostrar honestidade financeira, onde vai cada real

**Seções**:

#### A. Hero
- Título: "Transparência Total"
- Subtitle: "Você merece saber como usamos cada real"
- Sunny segurando um relatório

#### B. Dashboard Financeiro Anual
- **Gráficos Interativos**:
  - Receita Total (2021-2026)
  - Onde vem o dinheiro (governo, patrocinadores, doações)
  - Onde vai (educação, infraestrutura, pessoal, operacional)
  - Comparativo anual (ano a ano)

#### C. Relatórios Anuais (Download)
- PDF para cada ano
- Inclui: Balanço, demonstrativo de resultados, relatório de atividades
- Sunny apontando "Download Aqui"

#### D. Dados de Impacto por Real Investido
- "Cada R$ 1 investido gera X de transformação"
- Visualização clara
- Comparativo com outras ONGs (benchmark)

#### E. Documentos Institucionais
- Estatuto da ONG
- CNPJ, inscrição estadual
- Certificações (se houver)
- Comprovante de regularidade

#### F. Compromisso de Transparência
- Texto: "Nos comprometemos a..."
- Auditoria independente anual
- Próximas datas de prestação de contas

---

### 8️⃣ PÁGINA DE BLOG & NOTÍCIAS (NOVA)

**Objetivo**: Contar histórias, manter viva a narrativa de impacto

**Seções**:

#### A. Hero
- Título: "Histórias, Notícias & Atualizações"
- Sunny lendo jornal animadamente

#### B. Feed de Artigos
- **Grid de Cards** (3 colunas em desktop):
  - Imagem destaque
  - Categoria (Notícia / História / Artigo / Evento)
  - Data de publicação
  - Título
  - Resumo (primeiras 2 linhas)
  - Autor
  - "Leia Completo →"

#### C. Filtros & Busca ⭐
- Filtro por categoria
- Filtro por mês/ano
- Busca por palavra-chave
- Resultados em tempo real (sem reload)

#### D. Artigos em Destaque
- 2-3 artigos fixos no topo
- "Leia a história de João que mudou de vida"
- "Governo reconhece impacto do IFC"
- "Nova parceria com empresa X"

#### E. Calendário de Eventos
- **Integração com Google Calendar** (ideal)
  - Próximos torneios
  - Atividades públicas
  - Datas de inscrição
  - Click para adicionar ao calendário

#### F. Newsletter Signup
- "Receba histórias de impacto"
- Email input + CTA
- Sunny enviando carta

#### G. Arquivo Completo
- Todas as notícias passadas
- Organizadas por ano/mês
- Searchável
- "Relembre nossa jornada"

---

### 9️⃣ PÁGINA DE CONTATO & SUPORTE (NOVA)

**Objetivo**: Conexão direta, suporte rápido, disponibilidade clara

**Seções**:

#### A. Hero
- Título: "Fale Conosco"
- Subtitle: "Estamos aqui para responder suas dúvidas"

#### B. Chat ao Vivo ⭐ (Widget Fixo na Tela)
- Chat em tempo real (chatbot + human escalation)
- Horário de funcionamento claro (ex: Seg-Sex 9-17h)
- Perguntas comuns sugeridas
- Integração com WhatsApp Business
- Sunny dando bom dia no chat

#### C. 3 Caminhos de Contato
- **Forma de Inscrição**:
  - Email específico: inscrições@ifc.com
  - WhatsApp: link direto
  - Telefone
  - "Faço parte ou quero participar"

- **Parcerias & Patrocínio**:
  - Email específico: parcerias@ifc.com
  - Calendário de agendamento (demo call)
  - Telefone
  - "Sou empresa/governo"

- **Imprensa & Mídia**:
  - Email: imprensa@ifc.com
  - Sala de mídia (logos, fotos, releases)
  - Contato de jornalista responsável

#### D. Mapa Interativo
- Localização do Instituto
- Endereço
- Como chegar (Google Maps embed)
- Horários de atendimento
- Estacionamento info

#### E. Horário de Funcionamento
- Recepção
- Telefone
- Email (tempo de resposta esperado)
- Chat (horário específico)

#### F. Redes Sociais
- Links diretos (Instagram, Facebook, LinkedIn, TikTok)
- "Nos siga para histórias diárias"

#### G. FAQ Completo
- Dúvidas sobre inscrição
- Dúvidas sobre patrocínio
- Dúvidas operacionais

---

## 📱 Responsividade

### Breakpoints
- **Mobile** (< 768px):
  - 1 coluna
  - Cards empilhados
  - Navegação hamburger
  - CTA em destaque

- **Tablet** (768px - 1024px):
  - 2 colunas
  - Elementos maiores

- **Desktop** (> 1024px):
  - 3-4 colunas
  - Layouts complexos
  - Todas as animações ativas

---

## 🎬 Padrões de Interação

### Cards
- Hover: Levanta + sombra aumenta
- Click: Navega ou expande
- Mobile: Tap feedback imediato

### Buttons
- Hover: Muda cor para laranja (#FF8C00)
- Active: Escurece
- Focus: Outline visível (acessibilidade)

### Scroll Animations
- Fade in ao entrar no viewport
- Slide up (bottom → top)
- Stagger: Cada elemento entra em sequência

### Sunny Interações
- Aparece em pontos-chave
- Anima ao scroll (movimento suave)
- Expressões mudam (feliz, pensativo, celebrando)
- Nunca intrusivo, sempre útil

---

## 🔄 User Journeys

### Journey 1: Jovem Querendo Participar
Home → "Quero Participar" → Programas → Inscrição → Obrigado

### Journey 2: Patrocinador Interessado
Home → "Sou Patrocinador" → Página Patrocinadores → Contato → Demo Call

### Journey 3: Governo/Autoridade (Verificação)
Home → Sobre → Impacto → Parcerias → Contato

### Journey 4: Curioso/Visitante Casual
Home → Scroll Completo → Histórias → Compartilha em Redes

---

## ✨ Diferenciais Inovadores

1. **Sunny como Guia Visual**: Mascote inteligente que aparece contextualmente
2. **Dashboard Interativo de Impacto**: Dados vivos, não estáticos
3. **Storytelling Imersivo**: Histórias reais de transformação (vídeos, fotos)
4. **Transparência Total**: Números claros, resultados reais
5. **Personalização por Perfil**: Site muda conteúdo por quem está visitando
6. **Animações Significativas**: Movimento que comunica, não apenas decora

---

## 📋 Prioridade de Implementação

**Fase 1** (MVP - Essencial):
- Home completa
- Página Programas
- Página Patrocinadores
- Contato funcional

**Fase 2** (Impacto):
- Dashboard Interativo
- Página Sobre
- Blog

**Fase 3** (Refinamento):
- Animações avançadas
- Personalização
- Integração com CRM

---

**Status**: Pronto para wire-frames e mockups
**Data**: 27 de Março, 2026
