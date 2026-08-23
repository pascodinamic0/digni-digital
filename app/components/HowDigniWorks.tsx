'use client'

import { Search, PenLine, Wrench, Link2, Rocket, LineChart } from 'lucide-react'
import AnimatedSection from '@/app/components/AnimatedSection'
import { useLanguage } from '@/app/context/LocaleContext'
import {
  howDigniWorksByLanguage,
  type HowDigniWorksStepCopy,
  type HowDigniWorksTranslations,
} from '@/app/i18n/howDigniWorks'
import { DIGNI_INSTALLER_PROCESS, type InstallerProcessStepId } from '@/lib/positioning/process'

const STEP_ICONS: Record<InstallerProcessStepId, typeof Search> = {
  identify: Search,
  design: PenLine,
  build: Wrench,
  connect: Link2,
  deploy: Rocket,
  optimize: LineChart,
}

type Props = {
  id?: string
  className?: string
  copy?: HowDigniWorksTranslations
  /** Offer-specific one-liners replace the generic step description. */
  stepOverrides?: Partial<Record<InstallerProcessStepId, HowDigniWorksStepCopy>>
}

export default function HowDigniWorks({
  id = 'how-it-works',
  className = 'py-24 bg-background',
  copy,
  stepOverrides,
}: Props) {
  const language = useLanguage()
  const t = copy ?? howDigniWorksByLanguage[language]

  return (
    <AnimatedSection id={id} className={className}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">{t.badge}</span>
          <h2 className="type-h2 font-display font-bold mt-4">
            {t.title}
            <br />
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="type-body text-muted mt-4 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
          {DIGNI_INSTALLER_PROCESS.map((step) => {
            const Icon = STEP_ICONS[step.id]
            const body = stepOverrides?.[step.id] ?? t.steps[step.id]
            return (
              <li key={step.id} className="card p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="type-caption font-bold text-accent tracking-wider">{step.number}</span>
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <h3 className="type-h4 font-display font-bold mb-3">{body.title}</h3>
                <p className="type-small text-muted leading-relaxed">{body.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </AnimatedSection>
  )
}
