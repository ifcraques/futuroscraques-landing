#!/usr/bin/env node

/**
 * ============================================================================
 * SCRIPT DE BACKUP DIÁRIO - FUTUROSCRAQUES SITE
 * ============================================================================
 * Use: npm run backup
 * Resultado: backup-DD_MM_YYYY/ com toda a estrutura do projeto
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Cores para console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
};

// Formato de data: DD_MM_YYYY
const hoje = new Date();
const dia = String(hoje.getDate()).padStart(2, '0');
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const ano = hoje.getFullYear();
const dataFormatada = `${dia}_${mes}_${ano}`;

const backupDir = `backup-${dataFormatada}`;
const rootDir = __dirname;

console.log(`\n${colors.blue}${'='.repeat(60)}${colors.reset}`);
console.log(`${colors.blue}        BACKUP FUTUROSCRAQUES - ${dataFormatada}${colors.reset}`);
console.log(`${colors.blue}${'='.repeat(60)}${colors.reset}\n`);

// Verifica se backup já existe
if (fs.existsSync(backupDir)) {
  console.log(`${colors.green}✓ Backup de hoje (${dataFormatada}) já existe!${colors.reset}`);
  console.log(`  Diretório: ${backupDir}\n`);

  const files = fs.readdirSync(backupDir).slice(0, 10);
  console.log('Primeiros arquivos do backup:');
  files.forEach(f => console.log(`  • ${f}`));

  console.log('\n⚠️  Para fazer um novo backup, delete o diretório existente:');
  console.log(`   rm -rf ${backupDir}\n`);
  process.exit(0);
}

// Cria o diretório de backup
console.log(`${colors.blue}Criando diretório de backup...${colors.reset}`);
fs.mkdirSync(backupDir, { recursive: true });

// Define pastas e arquivos a copiar
const itemsParaCopiar = [
  'src',
  'public',
  'index.html',
  'package.json',
  'package-lock.json',
  'vite.config.js',
  '.gitignore',
];

// Copia markdown e docx
const filesNoRaiz = fs.readdirSync(rootDir);
const mdFiles = filesNoRaiz.filter(f => f.endsWith('.md'));
const docxFiles = filesNoRaiz.filter(f => f.endsWith('.docx'));

itemsParaCopiar.push(...mdFiles, ...docxFiles);

console.log(`${colors.blue}Copiando arquivos...${colors.reset}`);

let totalArquivos = 0;

itemsParaCopiar.forEach(item => {
  const origem = path.join(rootDir, item);
  const destino = path.join(backupDir, item);

  if (!fs.existsSync(origem)) {
    console.log(`  ${colors.yellow}⚠ ${item} - não encontrado${colors.reset}`);
    return;
  }

  try {
    const stats = fs.statSync(origem);

    if (stats.isDirectory()) {
      // Copia diretório recursivamente
      execSync(`cp -r "${origem}" "${destino}"`, { stdio: 'pipe' });
      const arquivosDir = execSync(`find "${destino}" -type f | wc -l`).toString().trim();
      totalArquivos += parseInt(arquivosDir);
      console.log(`  ${colors.green}✓${colors.reset} ${item}/ (${arquivosDir} arquivos)`);
    } else {
      // Copia arquivo
      fs.copyFileSync(origem, destino);
      totalArquivos++;
      console.log(`  ${colors.green}✓${colors.reset} ${item}`);
    }
  } catch (err) {
    console.log(`  ${colors.yellow}⚠ Erro ao copiar ${item}: ${err.message}${colors.reset}`);
  }
});

// Estatísticas
const tamanho = execSync(`du -sh "${backupDir}"`).toString().split('\t')[0];

console.log(`\n${colors.green}✓ Backup criado com sucesso!${colors.reset}`);
console.log(`\n📁 Diretório: ${colors.blue}${backupDir}${colors.reset}`);
console.log(`📊 Tamanho: ${colors.blue}${tamanho}${colors.reset}`);
console.log(`📄 Arquivos: ${colors.blue}${totalArquivos}${colors.reset}`);
console.log(`\n${colors.green}✓ Você pode trabalhar com segurança agora!${colors.reset}\n`);
