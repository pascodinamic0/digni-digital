'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getDigniWrapperCopy } from '@/app/i18n/proofVisuals'
import DigniChat from '@/app/components/digni/DigniChat'
import { SimpleHero } from '@/app/components/marketing'
import PageProofBlock from '@/app/components/marketing/PageProofBlock'

export default function DigniPageWrapper() {
  const language = useLanguage()
  const ctaT = translations[language].cta
  const w = getDigniWrapperCopy(language)

  return (
    <>
      <SimpleHero
        badge={w.heroBadge}
        title={w.heroTitle}
        titleHighlight={w.heroTitleHighlight}
        subtitle={w.heroSubtitle}
        primaryCta={{
          href: '#digni-chat',
          label: ctaT.findBiggestExposure ?? ctaT.seeWhatsExposed ?? 'Start diagnostic',
        }}
        secondaryCta={{ href: '/services', label: ctaT.exploreCoverage ?? 'Explore coverage' }}
      />
      <PageProofBlock
        page="digni"
        sectionId="diagnostic"
        surface="background"
        heading={{
          label: w.step1Label,
          title: w.step1Title,
          titleHighlight: w.step1Highlight,
          supporting: w.step1Supporting,
        }}
      />
      <PageProofBlock
        page="digni"
        sectionId="assessment"
        reverse
        surface="surface"
        heading={{
          label: w.step2Label,
          title: w.step2Title,
          titleHighlight: w.step2Highlight,
          supporting: w.step2Supporting,
        }}
      />
      <PageProofBlock
        page="digni"
        sectionId="booking"
        surface="background"
        heading={{
          label: w.step3Label,
          title: w.step3Title,
          titleHighlight: w.step3Highlight,
          supporting: w.step3Supporting,
        }}
      />
      <div id="digni-chat">
        <DigniChat />
      </div>
    </>
  )
}
