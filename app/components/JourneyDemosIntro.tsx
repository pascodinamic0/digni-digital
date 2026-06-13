'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading from '@/app/components/ai-employee/SectionHeading'
import { getJourneyDemosIntro } from '@/lib/ai-receptionist-flow'

export default function JourneyDemosIntro() {
  const language = useLanguage()
  const copy = getJourneyDemosIntro(language)

  return (
    <AnimatedSection
      id="how-it-works"
      className="border-b border-[var(--software-border)] py-16 md:py-20"
      aria-labelledby="journey-demos-intro"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label={copy.badge}
          title={copy.title}
          titleHighlight={copy.titleHighlight}
          supporting={copy.subtitle}
          align="center"
          titleLayout="inline"
          id="journey-demos-intro"
          className="mx-auto [&_.section-label]:rounded-md [&_.section-label]:border [&_.section-label]:border-accent/25 [&_.section-label]:bg-accent/10 [&_.section-label]:px-2.5 [&_.section-label]:py-1 [&_.section-label]:text-accent"
        />
      </div>
    </AnimatedSection>
  )
}
