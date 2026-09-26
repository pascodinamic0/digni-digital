'use client'

import { useLanguage } from '@/app/context/LocaleContext'
import { getAiEmployeeInboundFlow } from '@/app/i18n/aiEmployeeInboundFlow'
import InboundLeadGenerationMap from '@/app/components/InboundLeadGenerationMap'

export default function InboundMapProofVisual() {
  const language = useLanguage()
  const copy = getAiEmployeeInboundFlow(language)

  return (
    <InboundLeadGenerationMap
      sources={copy.sources}
      hubTitle={copy.hubTitle}
      hubSubtitle={copy.hubSubtitle}
      convergeLabel={copy.convergeLabel}
      capturedLabel={copy.capturedLabel}
      entryPointsLabel={copy.entryPointsLabel}
      hubChannels={copy.hubChannels}
    />
  )
}
