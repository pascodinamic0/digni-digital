'use client'

export type StatProofItem = {
  value: string
  label: string
  hint?: string
}

type StatProofPanelProps = {
  stats: StatProofItem[]
  className?: string
}

export default function StatProofPanel({ stats, className = '' }: StatProofPanelProps) {
  return (
    <div className={`flex flex-col justify-center gap-3 p-4 sm:gap-4 sm:p-6 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-background p-4">
          <p className="type-h3 font-display font-bold tabular-nums text-accent">{stat.value}</p>
          <p className="type-small mt-1 font-semibold text-text">{stat.label}</p>
          {stat.hint ? (
            <p className="type-caption mt-1 leading-relaxed text-muted">{stat.hint}</p>
          ) : null}
        </div>
      ))}
    </div>
  )
}
