'use client'

import { FileText, FolderOpen, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'

export default function PortfolioGapProof() {
  const language = useLanguage()
  const f = translations[language].home.fighting

  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
      <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-4">
        <div className="mb-3 flex items-center gap-2 text-destructive">
          <FileText className="h-4 w-4" aria-hidden />
          <span className="type-caption font-semibold uppercase tracking-wider">{f.skillsGapStat}</span>
        </div>
        <p className="type-small font-medium text-text">{f.skillsGap}</p>
        <ul className="type-caption mt-3 space-y-2 text-muted">
          <li className="flex gap-2"><span aria-hidden>—</span> Certificate on file</li>
          <li className="flex gap-2"><span aria-hidden>—</span> No project artifacts</li>
          <li className="flex gap-2"><span aria-hidden>—</span> Employer cannot verify work</li>
        </ul>
      </div>
      <div className="rounded-xl border border-success/25 bg-success/5 p-4">
        <div className="mb-3 flex items-center gap-2 text-success">
          <FolderOpen className="h-4 w-4" aria-hidden />
          <span className="type-caption font-semibold uppercase tracking-wider">{f.skillsGapStatLabel}</span>
        </div>
        <p className="type-small font-medium text-text">{f.skillsGapOutcome}</p>
        <ul className="type-caption mt-3 space-y-2 text-muted">
          {['Live project repo', 'Workflow recording', 'Client-ready deliverable'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
