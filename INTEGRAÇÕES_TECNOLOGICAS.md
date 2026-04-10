# 🔌 Integrações Tecnológicas & Backend do Site

---

## 📊 Dados em Tempo Real

### 1. Dashboard de Vagas (EDITAIS)
**Fonte de Dados**: Sistema interno ou Google Sheets

**Campos Dinâmicos**:
- Total de vagas por programa
- Inscritos até agora
- Vagas restantes
- Próxima data de abertura
- Status (Aberto / Fechado / Cheio)

**Atualização**: Imediata (conforme inscrição)

**Implementação**:
```javascript
// Fetch vagas em tempo real
GET /api/editais/vagas
Returns: {
  programa: "Basquete Base",
  vagas_total: 40,
  inscritos: 28,
  vagas_disponiveis: 12,
  percentual_preenchido: 70%,
  proxima_abertura: "2026-04-15"
}
```

---

### 2. Dashboard de Impacto (NÚMEROS VIVOS)
**Fonte de Dados**: Sistema CRM + Database de participantes

**Campos Dinâmicos**:
- Total de jovens transformados (todos os anos)
- Participantes ativos (este ano)
- Localidades atendidas (mapa)
- Taxa de permanência
- Taxa de sucesso educacional
- Histórias compartilhadas (última semana)

**Atualização**: Diária (ou semanal)

**Implementação**:
```javascript
GET /api/impacto/dashboard
Returns: {
  total_jovens: 210,
  participantes_ativos: 145,
  cidades_atendidas: 18,       // Brasil inteiro
  estados_atendidos: 5,
  sede_principal: "São Paulo", // SP destacada no mapa
  taxa_permanencia: 87%,
  taxa_sucesso_educacional: 92%,
  historias_nova_semana: 3
}
```

---

### 3. Blog & Notícias
**Fonte de Dados**: CMS (Contentful, Strapi, ou WordPress)

**Campos**:
- Título, conteúdo, imagem
- Data de publicação
- Autor
- Categoria (Notícia / História / Artigo / Evento)
- Tags para filtro

**Atualização**: Manual (você publica quando quiser)

**Implementação**:
```javascript
GET /api/blog/posts?categoria=noticia&limit=10
GET /api/blog/posts?search=transformacao
GET /api/blog/posts/{id}  // Post completo
```

---

### 4. Calendário de Eventos
**Fonte de Dados**: Google Calendar ou CMS

**Campos**:
- Data/Hora do evento
- Título
- Local
- Descrição
- Imagem
- Integração: "Adicionar ao Calendário"

**Atualização**: Imediata (Google Calendar sincroniza)

**Implementação**:
```javascript
GET /api/calendario/eventos
Returns: [
  {
    data: "2026-04-20",
    titulo: "Torneio de 3x3",
    local: "Parque da Vila",
    descricao: "...",
    adicionar_calendario: true
  }
]
```

---

### 5. Formulários & Inscrições
**Fonte de Dados**: Banco de dados dedicado

**Fluxo**:
1. Usuário preenche formulário online
2. Validação em tempo real (frontend + backend)
3. Confirmação por email + SMS/WhatsApp
4. Admin recebe notificação
5. Status rastreável (Inscrição Recebida → Em Análise → Aprovado)

**Campos do Formulário**:
- Dados do responsável (nome, email, telefone, CPF)
- Dados do jovem (nome, idade, escola, série)
- Programa desejado
- Disponibilidade
- Questões socioeconômicas
- Termo de aceite

**Implementação**:
```javascript
POST /api/inscricoes/criar
Body: {
  responsavel: {...},
  jovem: {...},
  programa_id: 1,
  ...
}
Response: {
  inscricao_id: "INS-2026-12345",
  status: "recebida",
  data_confirmacao: "2026-03-27T14:30:00",
  proximo_passo: "aguardando_resultado"
}
```

---

### 6. Chat de Suporte (Widget Fixo)
**Ferramenta Recomendada**: Intercom, Drift, ou Zendesk

**Funcionalidades**:
- Chat em tempo real (9-17h Seg-Sex)
- Perguntas frequentes sugeridas
- Escalação para human se necessário
- Histórico de conversa por email
- Integração com WhatsApp

**Dados Sincronizados**:
- Informações de inscrição
- Histórico de contato
- Tags de interesse

---

### 7. Relatórios de Transparência
**Fonte de Dados**: Planilha financeira ou sistema ERP

**Campos**:
- Receita total (por fonte)
- Despesa total (por categoria)
- Saldo
- Impacto por real investido
- Comparativo anual

**Atualização**: Anual (com possibilidade de relatórios parciais)

**Implementação**:
```javascript
GET /api/transparencia/relatorio/{ano}
Returns: {
  receita: { governo: X, patrocinadores: Y, doações: Z },
  despesa: { pessoal: X, infraestrutura: Y, operacional: Z },
  impacto_por_real: 8.5  // R$ 1 = R$ 8.50 de valor gerado
}
```

---

### 8. Relatório de Impacto por Patrocinador
**Fonte de Dados**: CRM + Sistema de rastreamento

**Dados Rastreados**:
- Jovens beneficiados por este patrocinador
- Quantias investidas (mês a mês)
- Taxa de sucesso do programa
- Histórias específicas de impacto
- ROI social (quanto cada real gerou)

**Atualização**: Mensal

**Implementação**:
```javascript
GET /api/patrocinadores/{id}/impacto
Returns: {
  nome: "Empresa X",
  investimento_total: "R$ 150.000",
  jovens_beneficiados: 45,
  taxa_sucesso: 89%,
  historias_selecionadas: [story1, story2, ...],
  roi_social: 10.2  // R$ 1 investido = R$ 10,20 de valor gerado
}
```

---

## 🔐 Sistema de Login (Opcional)

### Para Patrocinadores
- Acessar dashboard pessoal de impacto
- Ver relatórios em tempo real
- Histórico de investimentos

**Implementação**: OAuth2 ou autenticação simples (email + senha)

### Para Administradores do IFC
- Gerenciar inscrições
- Publicar notícias
- Atualizar dados de impacto
- Responder chats

---

## 📧 Automações & Emails

### Email de Confirmação de Inscrição
```
De: inscrições@ifc.com
Para: responsavel@email.com
Assunto: Inscrição Recebida - Instituto Futuros Craques

Olá [Nome],

Recebemos sua inscrição para o programa [Programa].
ID de Rastreamento: INS-2026-12345

Próximos passos:
1. Aguarde contato nosso (2-3 dias úteis)
2. Entrevista com responsável
3. Confirmação de participação

Dúvidas? Responda este email ou chat no site.

[Sunny emoji]
```

### Email de Blogging (Newsletter)
```
De: noticias@ifc.com
Para: subscriber@email.com
Assunto: Histórias de Impacto - Semana 27

Olá [Nome],

Veja as últimas histórias de transformação:
- João conquistou seu sonho de ser atleta
- Governo reconhece impacto do IFC
- Novo evento: Torneio 3x3

[Botão: Leia no site]
```

### Email de Status de Inscrição
```
De: sistema@ifc.com
Para: responsavel@email.com
Assunto: Atualização - Sua Inscrição

Status: ✅ APROVADO

Parabéns! [Jovem] foi aprovado para o programa [Programa].
Data de início: [Data]
Local: [Endereço]

Próximos passos:
- Levar documentação (ver checklist anexo)
- Preencher fichas (você recebeu link)
- Confirmação final por WhatsApp
```

---

## 📱 Redes Sociais do IFC

### Perfis Oficiais
| Rede | Handle/URL | Uso no Site |
|------|-----------|-------------|
| **Instagram (IFC Geral)** | @futuroscraques | Feed embed na HOME, stories, share |
| **Instagram (Neo Running)** | @circuitos.ifc | Embed na página do projeto Neo Running |
| **YouTube** | @futuroscraques | Vídeos de histórias, eventos, treinos |
| **Facebook** | /futuroscraques | Embed de posts em notícias, share |
| **Twitter/X** | @futuroscraques | Feed de updates, links para notícias |

### Integrações no Site

#### Instagram (@futuroscraques)
- **Feed Embed**: Últimos 6-9 posts mostrados na HOME
- **Hashtag**: #FuturosCraques (feed dinâmico)
- **Share Buttons**: Em histórias, blog

#### Instagram (@circuitos.ifc)
- **Embed Dedicado**: Na página/card do projeto Circuito Neo Running
- **Link direto**: No footer e na seção de projetos

#### YouTube (@futuroscraques)
- **Embed de Vídeos**: Player de depoimentos, eventos, competições
- **Playlists**: Uma por projeto (3x3, Bike, etc.)
- **Seção "Assista"**: Na home e na página de impacto

#### Facebook (/futuroscraques)
- **Embed de Posts**: Em notícias
- **Compartilhamento**: Share fácil de histórias e eventos

#### Twitter/X (@futuroscraques)
- **Feed de Updates**: Em notícias e eventos ao vivo
- **Links**: Para notícias do site

---

## 🔄 Sincronização de Dados

**Fluxo de Dados**:
```
Sistema de Inscrição
    ↓
Database Central
    ↓
CRM (Salesforce/HubSpot)
    ↓
Dashboard (atualiza em tempo real)
    ↓
Email Automático
    ↓
Relatórios (gerados automaticamente)
```

**Frequência de Sincronização**:
- Inscrições: Imediata
- Impacto: Diária
- Blog: Manual
- Eventos: Imediata (Google Calendar)
- Transparência: Semanal/Mensal

---

## 🛠️ Stack Técnico Recomendado

### Frontend
- **Framework**: React / Vue / Next.js
- **Styling**: Tailwind CSS
- **Componentes**: Material-UI ou Shadcn
- **Animações**: Framer Motion

### Backend
- **API**: Node.js/Express ou Python/FastAPI
- **Database**: PostgreSQL (dados estruturados)
- **CMS**: Contentful ou Strapi (Blog)
- **Auth**: Auth0 ou Firebase

### Integrações
- **Chat**: Intercom ou Drift
- **Email**: SendGrid ou Mailgun
- **Forms**: Typeform ou Formspree
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel / Netlify (frontend) + Heroku/Railway (backend)

---

## 📊 Exemplo de API Mock

```javascript
// GET /api/site/dashboard
{
  "site_name": "Instituto Futuros Craques",
  "impacto": {
    "total_jovens": 210,
    "participantes_ano": 145,
    "taxa_sucesso": 87,
    "localidades": 8
  },
  "editais": {
    "em_aberto": 3,
    "vagas_totais": 120,
    "inscritos": 87,
    "vagas_disponiveis": 33
  },
  "blog": {
    "ultimas_noticias": 5,
    "categorias": ["noticia", "historia", "artigo", "evento"]
  },
  "patrocinadores": {
    "ativos": 25,
    "governo": 3,
    "empresas": 22
  },
  "chat_status": "online"  // 9-17h
}
```

---

## ⚠️ Considerações de Segurança

- SSL/TLS (HTTPS obrigatório)
- GDPR compliant (especialmente por ter jovens menores)
- Validação de dados frontend + backend
- Rate limiting em APIs
- Backup automático de dados
- Monitoramento de uptime 24/7

---

**Status**: Documento pronto para briefing com dev team
**Data**: 27 de Março, 2026
