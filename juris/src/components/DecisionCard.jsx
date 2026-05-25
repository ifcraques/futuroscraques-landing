import { cn } from '@/lib/utils'

const OUTCOME_BADGE = {
  procedente:    'bg-emerald-100 text-emerald-700 border-emerald-200',
  improcedente:  'bg-red-100 text-red-700 border-red-200',
  parcial:       'bg-amber-100 text-amber-700 border-amber-200',
  indeterminado: 'bg-stone-100 text-stone-500 border-stone-200',
}

const OUTCOME_LABEL = {
  procedente:    'Procedente',
  improcedente:  'Improcedente',
  parcial:       'Parcialmente procedente',
  indeterminado: 'Indeterminado',
}

export default function DecisionCard({ decision, index }) {
  const { numero, relator, orgao, data, ementa, outcome, rights } = decision

  return (
    <div className="bg-white rounded-xl border border-stone-200 p-5 space-y-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="text-xs text-stone-400 font-mono">{numero || `Decisão #${index + 1}`}</p>
          {orgao && <p className="text-sm text-stone-600 mt-0.5">{orgao}</p>}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {data && (
            <span className="text-xs text-stone-400 bg-stone-50 border border-stone-200 rounded-full px-2.5 py-0.5">
              {data}
            </span>
          )}
          <span className={cn('text-xs font-medium border rounded-full px-2.5 py-0.5', OUTCOME_BADGE[outcome])}>
            {OUTCOME_LABEL[outcome]}
          </span>
        </div>
      </div>

      {relator && (
        <p className="text-xs text-stone-500">
          <span className="font-medium">Relator:</span> {relator}
        </p>
      )}

      {ementa && (
        <p className="text-sm text-stone-700 leading-relaxed line-clamp-4">{ementa}</p>
      )}

      {rights.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {rights.map((r) => (
            <span key={r} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2.5 py-0.5">
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
