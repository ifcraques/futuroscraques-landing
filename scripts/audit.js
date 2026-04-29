#!/usr/bin/env node
/**
 * Auditoria de segurança de dependências.
 *
 * Roda `npm audit --json`, formata o resultado em relatório legível,
 * salva em audit-report.txt e retorna exit code != 0 se houver
 * vulnerabilidades de severidade >= moderate.
 *
 * Uso:
 *   npm run audit
 *
 * Para corrigir automaticamente o que for compatível com semver:
 *   npm run audit:fix
 *
 * Para usar em CI (falha apenas em high/critical):
 *   npm run audit:ci
 */

import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SEVERITY_ORDER = ['info', 'low', 'moderate', 'high', 'critical']
const SEVERITY_ICON = {
  info: 'i',
  low: '·',
  moderate: '!',
  high: '!!',
  critical: '!!!',
}

function colorize(severity, text) {
  // ANSI sem dependência externa. Em Windows recente o Terminal já interpreta.
  const codes = {
    info: '\x1b[36m',     // cyan
    low: '\x1b[34m',      // blue
    moderate: '\x1b[33m', // yellow
    high: '\x1b[31m',     // red
    critical: '\x1b[35m', // magenta
  }
  const reset = '\x1b[0m'
  return `${codes[severity] || ''}${text}${reset}`
}

function runAudit() {
  try {
    // npm audit retorna exit code != 0 quando acha vulnerabilidades.
    // Capturamos stdout mesmo nesse caso.
    const out = execSync('npm audit --json', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    return JSON.parse(out)
  } catch (err) {
    if (err.stdout) {
      return JSON.parse(err.stdout)
    }
    throw err
  }
}

function formatReport(audit) {
  const lines = []
  const stamp = new Date().toISOString()
  lines.push('='.repeat(60))
  lines.push('  AUDITORIA DE SEGURANÇA - Instituto Futuros Craques')
  lines.push(`  ${stamp}`)
  lines.push('='.repeat(60))
  lines.push('')

  const meta = audit.metadata?.vulnerabilities || {}
  const total = Object.values(meta).reduce((a, b) => a + b, 0)

  if (total === 0) {
    lines.push('  Nenhuma vulnerabilidade encontrada.')
    lines.push('')
    return { text: lines.join('\n'), total, meta }
  }

  lines.push('  Resumo:')
  for (const sev of SEVERITY_ORDER) {
    const count = meta[sev] || 0
    if (count > 0) {
      lines.push(`    [${SEVERITY_ICON[sev]}] ${sev.padEnd(9)} ${count}`)
    }
  }
  lines.push('')
  lines.push('-'.repeat(60))
  lines.push('  Detalhes')
  lines.push('-'.repeat(60))

  const vulns = audit.vulnerabilities || {}
  // Ordena por severidade (mais grave primeiro) e depois alfabético.
  const sorted = Object.entries(vulns).sort(([na, a], [nb, b]) => {
    const da = SEVERITY_ORDER.indexOf(a.severity)
    const db = SEVERITY_ORDER.indexOf(b.severity)
    if (da !== db) return db - da
    return na.localeCompare(nb)
  })

  for (const [name, info] of sorted) {
    lines.push('')
    lines.push(`  Pacote.....: ${name}`)
    lines.push(`  Severidade.: ${info.severity}`)
    lines.push(`  Versões....: ${info.range}`)
    lines.push(`  Direta?....: ${info.isDirect ? 'sim' : 'não (transitiva)'}`)
    lines.push(`  Fix dispon.: ${info.fixAvailable ? 'sim - rode "npm run audit:fix"' : 'NÃO automático'}`)
    const advisories = (info.via || []).filter((v) => typeof v === 'object')
    for (const a of advisories) {
      lines.push(`    - ${a.title}`)
      if (a.url) lines.push(`      ${a.url}`)
    }
  }

  lines.push('')
  lines.push('-'.repeat(60))
  lines.push('  Próximos passos')
  lines.push('-'.repeat(60))
  lines.push('  1. npm run checkpoint     (salva ponto de retorno no git)')
  lines.push('  2. npm run audit:fix      (aplica fixes automáticos)')
  lines.push('  3. npm run build          (valida que nada quebrou)')
  lines.push('  4. npm run audit          (confirma 0 vulnerabilidades)')
  lines.push('')

  return { text: lines.join('\n'), total, meta }
}

function main() {
  console.log('Rodando npm audit...\n')
  const audit = runAudit()
  const { text, total, meta } = formatReport(audit)

  // Saída colorida no console.
  const colored = text
    .replace(/\b(critical)\b/g, (m) => colorize('critical', m))
    .replace(/\b(high)\b/g, (m) => colorize('high', m))
    .replace(/\b(moderate)\b/g, (m) => colorize('moderate', m))
    .replace(/\b(low)\b/g, (m) => colorize('low', m))
  console.log(colored)

  // Versão sem cor pra arquivo.
  const reportPath = resolve(process.cwd(), 'audit-report.txt')
  writeFileSync(reportPath, text, 'utf8')
  console.log(`Relatório salvo em: ${reportPath}\n`)

  // Exit code: falha se houver moderate+ por padrão; em CI use audit:ci pra
  // só falhar em high/critical.
  const minSeverity = process.env.AUDIT_MIN_SEVERITY || 'moderate'
  const minIdx = SEVERITY_ORDER.indexOf(minSeverity)
  let bad = 0
  for (const sev of SEVERITY_ORDER.slice(minIdx)) {
    bad += meta[sev] || 0
  }
  if (bad > 0) {
    console.error(`Falhou: ${bad} vulnerabilidade(s) com severidade >= ${minSeverity}.`)
    process.exit(1)
  }
  if (total === 0) {
    console.log('Tudo limpo.')
  }
}

main()
