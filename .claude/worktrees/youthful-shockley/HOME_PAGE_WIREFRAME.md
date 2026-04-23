# 🎬 HOME Page - Wireframe Detalhado

---

## 📐 Layout Desktop (1440px)

### SEÇÃO 1: HERO (Full Screen - 100vh)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  [VIDEO BACKGROUND - Basquete em Movimento]           │
│  ┌──────────────────────────────────────────────────┐ │
│  │ [Overlay Dark Gradient 0.4]                      │ │
│  │                                                  │ │
│  │          [Sunny aparecendo no canto →]           │ │
│  │                                                  │ │
│  │     Transformando Vidas Através do Basquete      │ │
│  │     [Título H1 - 56px Bold - Branco]             │ │
│  │                                                  │ │
│  │     Aqui, todo jovem tem a chance de ser o       │ │
│  │     craque que sonha. Não é sobre troféus.       │ │
│  │     É sobre descobrir força que você não sabia.  │ │
│  │     [Subtítulo - 18px Regular - Cinza clara]     │ │
│  │                                                  │ │
│  │     ┌──────────────────┐  ┌──────────────────┐  │ │
│  │     │ QUERO PARTICIPAR │  │ SOU PATROCINADOR │  │ │
│  │     │[CTA1 - Laranja]  │  │[CTA2 - Outline]  │  │ │
│  │     └──────────────────┘  └──────────────────┘  │ │
│  │                                                  │ │
│  └──────────────────────────────────────────────────┘ │
│                                                        │
│  [Scroll Indicator Animado - "Scroll para descobrir"]  │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Animações**:
- Sunny entra fazendo wave (0.5s ease-in)
- Textos fazem fade-in sequencial (0.3s cada, 0.2s gap)
- Botões escalam para cima lentamente (parallax)

---

### SEÇÃO 2: STATS (80px padding top/bottom)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  O IMPACTO REAL                                        │
│  [Título H2 - 36px Bold - Preto]                      │
│                                                        │
│  ┌──────────────────┐  ┌──────────────────┐           │
│  │    [Ícone]       │  │    [Ícone]       │           │
│  │   150+           │  │    87%           │           │
│  │ Jovens           │  │ Em Projetos      │           │
│  │ Transformados    │  │ Educacionais     │           │
│  │ [Card 1 - Hover] │  │ [Card 2 - Hover] │           │
│  └──────────────────┘  └──────────────────┘           │
│                                                        │
│  ┌──────────────────┐  ┌──────────────────┐           │
│  │    [Ícone]       │  │    [Ícone]       │           │
│  │    3             │  │    50+           │           │
│  │ Estados          │  │ Patrocinadores   │           │
│  │ Alcançados       │  │ Envolvidos       │           │
│  │ [Card 3 - Hover] │  │ [Card 4 - Hover] │           │
│  └──────────────────┘  └──────────────────┘           │
│                                                        │
│  [Sunny ao lado direito, apontando para os números]   │
│                                                        │
└────────────────────────────────────────────────────────┘

Espaçamento:
- Cards: 24px gap
- Cards width: calc(25% - 18px) cada
- Padding section: 80px vertical, 48px horizontal
```

**Interações**:
- Fade in ao scroll (0.6s com delay stagger)
- Números contam de 0 até valor (3s animation)
- Cards elevam ao hover (+8px transform)

---

### SEÇÃO 3: PROGRAMAS (80px padding)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  PROGRAMAS QUE MUDAM VIDAS                             │
│  [H2 - 36px Bold]                                      │
│  Conheça as diferentes jornadas que oferecemos        │
│  [Subtítulo - 16px Regular]                            │
│                                                        │
│  ┌─────────────────┐ ┌─────────────────┐              │
│  │ [Ícone/Foto]    │ │ [Ícone/Foto]    │              │
│  │                 │ │                 │              │
│  │ Basquete Base   │ │ Basquete        │              │
│  │ 7-12 anos       │ │ Competição      │              │
│  │                 │ │ 13-18 anos      │              │
│  │ Desenvolvimento │ │                 │              │
│  │ de habilidades, │ │ Treinamento     │              │
│  │ amizades e      │ │ intensivo,      │              │
│  │ diversão.       │ │ competição.     │              │
│  │                 │ │                 │              │
│  │ SAIBA MAIS →    │ │ SAIBA MAIS →    │              │
│  │ [Link Hover]    │ │ [Link Hover]    │              │
│  └─────────────────┘ └─────────────────┘              │
│                                                        │
│  ┌─────────────────┐ ┌─────────────────┐              │
│  │ [Ícone/Foto]    │ │ [Ícone/Foto]    │              │
│  │                 │ │                 │              │
│  │ 3x3             │ │ Desenvolvimento │              │
│  │ Todos os ages   │ │ Humano          │              │
│  │                 │ │ Todos           │              │
│  │ Basquete        │ │                 │              │
│  │ dinâmico, curto │ │ Caráter, lideça │              │
│  │ e inclusivo.    │ │ e valores.      │              │
│  │                 │ │                 │              │
│  │ SAIBA MAIS →    │ │ SAIBA MAIS →    │              │
│  │ [Link Hover]    │ │ [Link Hover]    │              │
│  └─────────────────┘ └─────────────────┘              │
│                                                        │
└────────────────────────────────────────────────────────┘

Layout: 4 cards em grid 2x2
Card dimensions: 300px × 280px
Gap: 24px
```

**Interações**:
- Cards elevam ao hover (5px)
- Sombra aumenta ao hover
- "SAIBA MAIS" texto muda cor (amarelo ouro)
- Imagens zoomam levemente ao hover (scale 1.05)

---

### SEÇÃO 4: HISTÓRIAS (100px padding)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  CONHEÇA QUEM MUDOU                                    │
│  [H2 - 36px]                                           │
│  Histórias reais de transformação                      │
│                                                        │
│  ┌──────────────────────┐  ┌────────────────────────┐  │
│  │   [Foto quadrada]    │  │ João dos Santos        │  │
│  │   [Overlay gradient] │  │                        │  │
│  │                      │  │ De menino sem hope a   │  │
│  │   [Cidade: SBC]      │  │ líder de equipe. O     │  │
│  │                      │  │ basquete me salvou.    │  │
│  │                      │  │                        │  │
│  │                      │  │ LEIA A HISTÓRIA →      │  │
│  └──────────────────────┘  └────────────────────────┘  │
│                                                        │
│  [Sunny lendo, emocionado]                             │
│                                                        │
│  ┌──────────────────────┐  ┌────────────────────────┐  │
│  │   [Foto quadrada]    │  │ Maria Silva            │  │
│  │   [Overlay gradient] │  │                        │  │
│  │                      │  │ Encontrei minha força  │  │
│  │   [Cidade: Itaquera] │  │ aqui. Hoje sou atleta  │  │
│  │                      │  │ amadora e mentora.     │  │
│  │                      │  │                        │  │
│  │                      │  │ LEIA A HISTÓRIA →      │  │
│  └──────────────────────┘  └────────────────────────┘  │
│                                                        │
│  ┌──────────────────────┐  ┌────────────────────────┐  │
│  │   [Foto quadrada]    │  │ Pedro Oliveira         │  │
│  │   [Overlay gradient] │  │                        │  │
│  │                      │  │ Construí amizades que  │  │
│  │   [Cidade: Capão]    │  │ levarei para a vida    │  │
│  │                      │  │ inteira. Isso muda.    │  │
│  │                      │  │                        │  │
│  │                      │  │ LEIA A HISTÓRIA →      │  │
│  └──────────────────────┘  └────────────────────────┘  │
│                                                        │
└────────────────────────────────────────────────────────┘

Layout: 3 histórias em coluna (responsive)
Cada história: 2-column sub-layout (foto | texto)
Gap: 32px entre histórias
```

**Animações**:
- Fade in + slide up ao scroll (0.6s)
- Foto zoomam levemente ao hover
- Texto fica amarelo ouro ao hover

---

### SEÇÃO 5: DASHBOARD IMPACTO (120px padding)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  IMPACTO EM NÚMEROS VIVOS                              │
│  [H2 - 36px]                                           │
│  Dados que mostram transformação real                  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │                                                  │  │
│  │  [MAPA INTERATIVO DO BRASIL COM PINS]             │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │                                            │  │  │
│  │  │   [Mapa do Brasil — visão padrão]          │  │  │
│  │  │   SP destacada (tom mais escuro/vibrante)  │  │  │
│  │  │   Pins em todo o país por cidade           │  │  │
│  │  │     - Amarelo = Base                       │  │  │
│  │  │     - Laranja = Competição                 │  │  │
│  │  │     - Azul = 3x3                           │  │  │
│  │  │                                            │  │  │
│  │  │  Hover pin SP: "São Miguel Paulista / 45"  │  │  │
│  │  │  Hover pin NE: "Recife / 12"               │  │  │
│  │  │  [Botão flutuante] Ver SP em detalhe →     │  │  │
│  │  │                                            │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  │                                                  │  │
│  │  Filtros: [Programa ▼] [Ano ▼] [Região ▼]      │  │
│  │                                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │ CRESCIMENTO ANUAL    │  │ DISTRIBUIÇÃO        │      │
│  │ ┌─────────────────┐  │  │ ┌─────────────────┐ │      │
│  │ │ [Bar Chart      │  │  │ │ [Pie Chart    ] │ │      │
│  │ │  animado]       │  │  │ │  [animado]    ] │ │      │
│  │ │                 │  │  │ │                 │ │      │
│  │ │ 2021: 50        │  │  │ │ Base: 45%       │ │      │
│  │ │ 2022: 85        │  │  │ │ Comp: 35%       │ │      │
│  │ │ 2023: 110       │  │  │ │ 3x3: 20%        │ │      │
│  │ │ 2024: 145       │  │  │ │                 │ │      │
│  │ │ 2025: 180       │  │  │ │                 │ │      │
│  │ │ 2026: 210       │  │  │ │                 │ │      │
│  │ │                 │  │  │ │                 │ │      │
│  │ └─────────────────┘  │  │ └─────────────────┘ │      │
│  └─────────────────────┘  └─────────────────────┘      │
│                                                        │
│  [CTA] VER DASHBOARD COMPLETO →                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Interações**:
- Gráficos animam de baixo para cima (2s)
- Filtros funcionam em tempo real (sem reload)
- Mapa é 100% interativo (pins clicáveis)
- Hover no chart mostra valor exato

---

### SEÇÃO 6: PARCEIROS (80px padding)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  PARCEIROS DA TRANSFORMAÇÃO                            │
│  [H2 - 36px]                                           │
│  Governo, empresas e instituições que acreditam        │
│                                                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │          │ │          │ │          │ │          │  │
│  │ [Logo]   │ │ [Logo]   │ │ [Logo]   │ │ [Logo]   │  │
│  │ SEC SP   │ │ Min.     │ │ Prefeit. │ │ EMPRESA  │  │
│  │ Esporte  │ │ Esporte  │ │ SP       │ │ A        │  │
│  │          │ │          │ │          │ │          │  │
│  │Hover:    │ │Hover:    │ │Hover:    │ │Hover:    │  │
│  │"Como...  │ │"Como...  │ │"Como...  │ │"Como...  │  │
│  │"         │ │"         │ │"         │ │"         │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│                                                        │
│  Grid: 4 colunas, 20px gap                             │
│  Logo size: 120x120px                                  │
│  Hover: fundo amarelo suave (#FEF3C7)                  │
│                                                        │
│  [CTA] SEJA UM PATROCINADOR →                          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### SEÇÃO 7: CTAs TRIPLOS (120px padding)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │ Quero Participar    │  │ Quero Patrocinar    │      │
│  │ dos Projetos        │  │ o Instituto         │      │
│  │                     │  │                     │      │
│  │ Descubra como fazer │  │ Vamos impactar      │      │
│  │ parte dessa jornada │  │ vidas juntos        │      │
│  │ [Ícone]             │  │ [Ícone]             │      │
│  │ [CTA Button -       │  │ [CTA Button -       │      │
│  │  Laranja]           │  │  Laranja]           │      │
│  └─────────────────────┘  └─────────────────────┘      │
│                                                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Conhecer o Instituto                            │   │
│  │                                                 │   │
│  │ Somos advogados, ex-atletas e sonhadores.       │   │
│  │ Conheça nossa história                          │   │
│  │ [Ícone] [CTA Button - Laranja]                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                        │
│  Layout: 2 cards top (50% width cada)                  │
│          1 card bottom (100% width)                    │
│  Gap: 24px                                             │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Interações**:
- Cards elevam ao hover (8px)
- Ícones giram levemente (10deg)
- CTA buttons mudam cor (mais vibrante)

---

### SEÇÃO 8: FOOTER (64px padding)

```
┌────────────────────────────────────────────────────────┐
│  [Background: #1a1a1a - Preto]                         │
│                                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ SOBRE    │  │ PROGRAMAS│  │ CONTATO  │              │
│  │ Quem     │  │ Base     │  │ Email    │              │
│  │ somos    │  │ Comp     │  │ Whatsapp │              │
│  │ História │  │ 3x3      │  │ Redes    │              │
│  │ Missão   │  │ Dev. Hum │  │ Endereço │              │
│  │ Equipe   │  │          │  │          │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                        │
│  © 2026 Instituto Futuros Craques                      │
│  [Sunny fazendo aceno de despedida]                    │
│                                                        │
│  Redes Sociais: [Instagram] [Facebook] [LinkedIn]      │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## 📱 Layout Mobile (375px)

Adaptações principais:
- Hero: Same visual, textos menores (48px H1)
- Stats: 1 coluna (stack vertical)
- Programas: 1 card por linha (carousel horizontal)
- Histórias: 1 coluna, texto abaixo foto
- Dashboard: Mapa responsive, gráficos empilhados
- Parceiros: 2 colunas, logos menores
- CTAs: Todos empilhados (1 coluna)
- Footer: Links em coluna

---

## 🎯 Especificações Técnicas

### Cores (Paleta Oficial IFC — atualizada 27/03/2026)
- Verde Primário: #4DA844 (navbar, botões, destaques)
- Verde Escuro: #2D7A27 (hover, rodapé, títulos em peso)
- Verde Oliva: #7AAD3A (tags, categorias, suporte)
- Azul Claro IFC: #6AB4D8 (governo, parcerias, badges)
- Amarelo Sol: #F2D43A (Sunny, CTAs, números animados)
- Preto: #1A1A1A (tipografia, navbar)
- Branco: #FFFFFF (fundos, cards)
- Cinza: #6B7280 (textos secundários)

### Tipografia
- Headlines: Inter Bold
- Body: Inter Regular
- Números: JetBrains Mono SemiBold

### Espaçamento
- Seções: 80-120px padding
- Cards: 24px gap
- Elementos: 8px, 16px, 24px

### Sombras
- sm: 0 1px 2px rgba(0,0,0,0.05)
- md: 0 4px 6px rgba(0,0,0,0.1)
- lg: 0 10px 15px rgba(0,0,0,0.1)

### Transições
- fast: 150ms
- normal: 300ms
- slow: 500ms

---

**Status**: Wireframe detalhado pronto para mockups visuais
**Data**: 27 de Março, 2026
