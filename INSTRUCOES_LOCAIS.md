# 📋 Futuros Craques - Instruções de Acesso Local

## ✅ O que você tem

O arquivo `futuroscraques-fonte.zip` contém todo o código-fonte do seu projeto Futuros Craques, pronto pra usar localmente no seu computador.

## 🚀 Como usar

### 1. Descompacte o arquivo
```
Extraia futuroscraques-fonte.zip em uma pasta do seu computador
```

### 2. Instale as dependências
```bash
cd futuroscraques-fonte
npm install
```

### 3. Rode em desenvolvimento
```bash
npm run dev
```
A página vai abrir em `http://localhost:5173`

### 4. Compile pra produção
```bash
npm run build
```

## 📂 Estrutura do projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Sponsors.jsx    # Logos de patrocinadores (ATUALIZADO!)
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── ... outros componentes
├── pages/              # Páginas principais
│   ├── Home.jsx
│   ├── QuemSomos.jsx
│   ├── Projetos.jsx
│   └── ... outras páginas
└── main.jsx           # Arquivo principal

public/
└── logos/             # Logos do projeto (CBC, Lei de Incentivo, etc)

index.html            # HTML principal
package.json          # Dependências do projeto
```

## 🔧 O que foi corrigido

### Sponsors.jsx
- ✅ Removidas URLs quebradas do Wix
- ✅ Trocadas para favicons dos sites (carregam mais rápido)
- ✅ Logo do CBC em cores originais (azul)
- ✅ Lei de Incentivo ao Esporte mantém cores

### Logos de Patrocinadores
Agora tá puxando direto dos domínios das empresas:
- UOL, Ecolab, Havan, B3, Estácio, Freixenet, Droga Raia, Coca-Cola, etc.

### Logos de Realização
- UNIP, NAR, Lei de Incentivo (local), Governo SP, Ministério, CBC

## 💡 Dicas

1. **Node.js necessário**: Instale de https://nodejs.org/
2. **Atualizações**: Qualquer mudança em `src/` é refletida ao salvar
3. **Build final**: Use `npm run build` antes de fazer deploy
4. **Pasta dist**: Contém a versão final compilada

## 📞 Próximos passos

- Testar se os logos carregam corretamente
- Fazer deploy no Netlify (tá configurado no netlify.toml)
- Adicionar mais patrocinadores conforme necessário

---

**Data de atualização**: 26 de março de 2026
**Última correção**: Logos dos patrocinadores
