'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'

const EXPOSURE_ROWS = [
  { key: 'growth', label: 'Growth', status: 'exposed' },
  { key: 'talent', label: 'Talent', status: 'partial' },
  { key: 'ops', label: 'Operations', status: 'covered' },
] as const

export default function AssessmentResultProof() {
  const language = useLanguage()
  const cta = translations[language].cta

  return (
    <div className="p-4 sm:p-6">
      <p className="type-caption font-semibold uppercase tracking-wider text-muted">
        {cta.findBiggestExposure ?? 'Exposure map'}
      </p>
      <ul className="mt-4 space-y-3">
        {EXPOSURE_ROWS.map((row) => (
          <li
            key={row.key}
            className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3"
          >
            <span className="type-small font-medium text-text">{row.label}</span>
            <span
              className={`type-caption rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wide ${
                row.status === 'exposed'
                  ? 'bg-destructive/10 text-destructive'
                  : row.status === 'partial'
                    ? 'bg-warning/10 text-warning'
                    : 'bg-success/10 text-success'
              }`}
            >
              {row.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
