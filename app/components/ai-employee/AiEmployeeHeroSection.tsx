'use client'

import { ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { getAssessmentPath } from '@/lib/assessments/paths'
import SimpleHero from '@/app/components/marketing/SimpleHero'
import AiEmployeeHeroChatPreview from '@/app/components/ai-employee/AiEmployeeHeroChatPreview'

export default function AiEmployeeHeroSection() {
  const language = useLanguage()
  const t = translations[language].aiEmployeePage
  const booking = getBookingLinkProps()

  return (
    <SimpleHero
      badge={t.hero.badge}
      title={t.hero.titleLine1}
      titleHighlight={t.hero.titleHighlight}
      subtitle={t.hero.hook}
      primaryCta={{ href: getAssessmentPath('ai-employee'), label: t.hero.primaryCta }}
      primaryCtaPulse
      secondaryCta={{
        href: booking.href,
        label: translations[language].cta.bookStrategy,
        external: true,
      }}
    >
      {t.hero.footnote.trim() ? (
        <p className="type-caption flex max-w-xl items-start gap-2 text-muted">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" strokeWidth={2} aria-hidden />
          <span>{t.hero.footnote}</span>
        </p>
      ) : null}
    </SimpleHero>
  )
}

export function AiEmployeeChatPreviewSection() {
  return (
    <section className="marketing-simple border-b border-border bg-surface py-12">
      <div className="mx-auto flex max-w-lg justify-center px-6">
        <AiEmployeeHeroChatPreview />
      </div>
    </section>
  )
}
