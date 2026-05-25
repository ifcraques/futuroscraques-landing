import { cn } from '@/lib/utils'

const OUTCOME_COLORS = {
  procedente:   'bg-emerald-100 text-emerald-800 border-emerald-200',
  improcedente: 'bg-red-100 text-red-800 border-red-200',
  parcial:      'bg-amber-100 text-amber-800 border-amber-200',
  indeterminado:'bg-stone-100 text-stone-600 border-stone-200',
}

function PctBar({ value, color }) {
  return (
    <div className="w-full bg-stone-100 rounded-full h-2 mt-1">
      <div
        className={cn('h-2 rounded-full transition-all duration-700', color)}
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

export default function StatsPanel({ stats }) {
  const { total, procedente, improcedente, parcial, indeterminado, rightsCounts } = stats
  const pct = (n) => (total > 0 ? Math.round((n / total) * 100) : 0)

  const topRights = Object.entries(rightsCounts ?? {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Total de decisões', value: total, cls: 'border-stone-300 bg-stone-50' },
          { label: 'Procedente',   value: procedente,   cls: OUTCOME_COLORS.procedente },
          { label: 'Improcedente', value: improcedente, cls: OUTCOME_COLORS.improcedente },
          { label: 'Parcialmente', value: parcial,      cls: OUTCOME_COLORS.parcial },
        ].map(({ label, value, cls }) => (
          <div key={label} className={cn('rounded-xl border p-4', cls)}>
            <p className="text-xs font-medium opacity-70">{label}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            {total > 0 && label !== 'Total de decisões' && (
              <p className="text-xs mt-1 opacity-60">{pct(value)}%</p>
            )}
          </div>
        ))}
      </div>

      {/* Outcome bars */}
      {total > 0 && (
        <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-stone-700">Resultado das demandas</h3>
          {[
            { label: 'Procedente',   value: procedente,   bar: 'bg-emerald-500' },
            { label: 'Improcedente', value: improcedente, bar: 'bg-red-400' },
            { label: 'Parcial',      value: parcial,      bar: 'bg-amber-400' },
            { label: 'Indeterminado',value: indeterminado,bar: 'bg-stone-300' },
          ].map(({ label, value, bar }) => (
            <div key={label}>
              <div className="flex justify-between text-xs text-stone-600">
                <span>{label}</span>
                <span className="font-medium">{value} ({pct(value)}%)</span>
              </div>
              <PctBar value={pct(value)} color={bar} />
            </div>
          ))}
        </div>
      )}

      {/* Rights breakdown */}
      {topRights.length > 0 && (
        <div className="bg-white rounded-xl border border-stone-200 p-5">
          <h3 className="text-sm font-semibold text-stone-700 mb-3">Direitos mais pleiteados</h3>
          <div className="space-y-2">
            {topRights.map(([right, count]) => (
              <div key={right} className="flex items-center gap-3 text-sm">
                <span className="flex-1 text-stone-700">{right}</span>
                <span className="text-stone-500 text-xs">{count}</span>
                <div className="w-24 bg-stone-100 rounded-full h-1.5">
                  <div
                    className="bg-blue-500 h-1.5 rounded-full"
                    style={{ width: `${Math.round((count / (topRights[0][1] || 1)) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
