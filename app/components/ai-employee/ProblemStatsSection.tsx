'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SectionHeading from '@/app/components/marketing/SectionHeading'

export default function ProblemStatsSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.problem

  return (
    <section
      id="problem"
      className="marketing-simple border-b border-border bg-background py-20"
      aria-labelledby="ai-employee-problem-stats"
    >
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label={t.badge}
          title={t.title}
          titleHighlight={t.titleHighlight}
          supporting={t.subtitle}
          id="ai-employee-problem-stats"
          highlightClassName="text-destructive"
          titleLayout="inline"
        />
        <ul className="mt-10 space-y-8 border-t border-border pt-10">
          {t.stats.map((stat) => (
            <li key={stat.label} className="list-none">
              <p className="type-h3 font-display font-bold tabular-nums text-destructive">{stat.value}</p>
              <p className="type-body mt-2 font-semibold text-text">{stat.label}</p>
              <p className="type-small mt-1 leading-relaxed text-muted">{stat.hint}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
