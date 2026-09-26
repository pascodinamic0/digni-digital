'use client'

import { DIGNI_INSTALLER_PROCESS } from '@/lib/positioning/process'
import { useLanguage } from '@/app/context/LocaleContext'
import { howDigniWorksByLanguage } from '@/app/i18n/howDigniWorks'

type ProcessProofDiagramProps = {
  className?: string
}

export default function ProcessProofDiagram({ className = '' }: ProcessProofDiagramProps) {
  const language = useLanguage()
  const t = howDigniWorksByLanguage[language]

  return (
    <div className={`grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 ${className}`}>
      {DIGNI_INSTALLER_PROCESS.map((step) => {
        const body = t.steps[step.id]
        return (
          <div key={step.id} className="rounded-xl border border-border bg-background p-4">
            <span className="type-caption font-bold text-accent tracking-wider">{step.number}</span>
            <p className="type-small mt-1 font-display font-semibold text-text">{body.title}</p>
            <p className="type-caption mt-1 leading-relaxed text-muted line-clamp-2">{body.description}</p>
          </div>
        )
      })}
    </div>
  )
}
