import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import StatsPanel from '@/components/StatsPanel'
import DecisionCard from '@/components/DecisionCard'
import data from '@/data/jurisprudencias.json'

const OUTCOME_OPTIONS = [
  { value: 'all',          label: 'Todos' },
  { value: 'procedente',   label: 'Procedente' },
  { value: 'improcedente', label: 'Improcedente' },
  { value: 'parcial',      label: 'Parcial' },
  { value: 'indeterminado',label: 'Indeterminado' },
]

export default function Research() {
  const { meta, stats, decisions } = data
  const [search, setSearch] = useState('')
  const [outcomeFilter, setOutcomeFilter] = useState('all')

  const filtered = useMemo(() => {
    let list = decisions
    if (outcomeFilter !== 'all') list = list.filter((d) => d.outcome === outcomeFilter)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (d) =>
          d.ementa?.toLowerCase().includes(q) ||
          d.numero?.toLowerCase().includes(q) ||
          d.orgao?.toLowerCase().includes(q) ||
          d.rights?.some((r) => r.toLowerCase().includes(q)),
      )
    }
    return list
  }, [decisions, search, outcomeFilter])

  const isEmpty = decisions.length === 0

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <span className="font-serif text-2xl font-bold text-stone-900">Juris</span>
          <span className="text-stone-300">|</span>
          <span className="text-sm text-stone-500">Pesquisa Jurisprudencial — TJSP</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Topic banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-stone-200 p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <p className="text-xs font-medium text-blue-600 mb-1 uppercase tracking-wider">Tema pesquisado</p>
              <h1 className="text-xl font-serif font-bold text-stone-900">
                Financiamento Residencial — Imóveis acima de R$ 1 milhão
              </h1>
              <p className="text-sm text-stone-500 mt-1">
                Decisões do TJSP · {meta.dateStart} a {meta.dateEnd}
              </p>
            </div>
            <div className="text-right">
              {meta.scrapedAt ? (
                <p className="text-xs text-stone-400">
                  Atualizado em{' '}
                  {new Date(meta.scrapedAt).toLocaleDateString('pt-BR', {
                    day: '2-digit', month: 'short', year: 'numeric',
                  })}
                </p>
              ) : (
                <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1">
                  Execute npm run scrape
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        {isEmpty ? (
          <div className="bg-white rounded-2xl border border-dashed border-stone-300 p-12 text-center">
            <p className="text-3xl mb-3">⚖️</p>
            <p className="font-semibold text-stone-700">Nenhuma decisão carregada</p>
            <p className="text-sm text-stone-500 mt-1">
              Execute <code className="bg-stone-100 px-1.5 py-0.5 rounded text-xs">npm run scrape</code> para buscar
              jurisprudências no TJSP.
            </p>
          </div>
        ) : (
          <>
            <StatsPanel stats={stats} />

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Buscar por ementa, processo, câmara ou direito..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={outcomeFilter}
                onChange={(e) => setOutcomeFilter(e.target.value)}
                className="rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {OUTCOME_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Results */}
            <div>
              <p className="text-xs text-stone-400 mb-3">{filtered.length} decisões encontradas</p>
              <div className="space-y-3">
                {filtered.map((d, i) => (
                  <motion.div
                    key={d.numero || i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <DecisionCard decision={d} index={i} />
                  </motion.div>
                ))}
                {filtered.length === 0 && (
                  <p className="text-center text-stone-400 py-12">Nenhuma decisão corresponde aos filtros.</p>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
