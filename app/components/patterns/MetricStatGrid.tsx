export type MetricStat = {
  value: string
  label: string
  sublabel?: string
}

type MetricStatGridProps = {
  stats: MetricStat[]
}

export default function MetricStatGrid({ stats }: MetricStatGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <p className="stat-card-value">{stat.value}</p>
          <p className="type-body mt-2 font-semibold text-text">{stat.label}</p>
          {stat.sublabel && (
            <p className="type-caption mt-1 text-muted">{stat.sublabel}</p>
          )}
        </div>
      ))}
    </div>
  )
}
