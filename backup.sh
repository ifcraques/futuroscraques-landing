#!/bin/bash

# ============================================================================
# SCRIPT DE BACKUP DIÁRIO - FUTUROSCRAQUES SITE
# ============================================================================
# Use no início de cada dia para criar backup com timestamp
# Exemplo: ./backup.sh
# Resultado: backup-28_03_2026/ com cópia completa do projeto
# ============================================================================

# Data no formato DD_MM_YYYY
DATA=$(date +%d_%m_%Y)
BACKUP_DIR="backup-${DATA}"

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}        BACKUP FUTUROSCRAQUES - ${DATA}${NC}"
echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"

# Verifica se backup já existe hoje
if [ -d "$BACKUP_DIR" ]; then
    echo -e "${GREEN}✓ Backup de hoje (${DATA}) já existe!${NC}"
    echo "  Diretório: $BACKUP_DIR"
    echo ""
    echo "Arquivos no backup:"
    ls -1 "$BACKUP_DIR" | head -10
    echo ""
    echo "Quer sobrescrever? (s/n)"
    read -r resposta
    if [ "$resposta" != "s" ]; then
        echo "Backup abortado."
        exit 0
    fi
    rm -rf "$BACKUP_DIR"
fi

# Cria diretório de backup
mkdir -p "$BACKUP_DIR"

# Copia os arquivos importantes (exclui node_modules, .git, dist, etc)
echo -e "${BLUE}Copiando arquivos...${NC}"
cp -r \
    src \
    public \
    index.html \
    package.json \
    package-lock.json \
    vite.config.js \
    .gitignore \
    *.md \
    *.docx \
    2>/dev/null

# Move para o diretório de backup
mv src public index.html package.json package-lock.json vite.config.js .gitignore *.md *.docx "$BACKUP_DIR" 2>/dev/null

# Dados do backup
TAMANHO=$(du -sh "$BACKUP_DIR" | cut -f1)
ARQUIVOS=$(find "$BACKUP_DIR" -type f | wc -l)

echo -e "${GREEN}✓ Backup criado com sucesso!${NC}"
echo ""
echo "📁 Diretório: $BACKUP_DIR"
echo "📊 Tamanho: $TAMANHO"
echo "📄 Arquivos: $ARQUIVOS"
echo ""
echo -e "${GREEN}✓ Você pode trabalhar com segurança agora!${NC}"
