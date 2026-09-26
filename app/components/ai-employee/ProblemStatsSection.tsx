'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import PageProofBlock from '@/app/components/marketing/PageProofBlock'

export default function ProblemStatsSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage.problem

  return (
    <PageProofBlock
      page="ai-receptionist"
      sectionId="problem-stats"
      id="problem"
      surface="background"
      heading={{
        label: t.badge,
        title: t.title,
        titleHighlight: t.titleHighlight,
        supporting: t.subtitle,
        highlightClassName: 'text-destructive',
        titleLayout: 'inline',
        id: 'ai-employee-problem-stats',
      }}
      stats={t.stats.map((s) => ({ value: s.value, label: s.label, hint: s.hint }))}
    />
  )
}
