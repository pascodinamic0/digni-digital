'use client'

import dynamic from 'next/dynamic'
import type { Language } from '@/app/config/translations'
import ProofVisualFrame from '@/app/components/marketing/ProofVisualFrame'
import StatProofPanel from '@/app/components/marketing/StatProofPanel'
import ProcessProofDiagram from '@/app/components/marketing/ProcessProofDiagram'
import ClientLogosProofVisual from '@/app/components/marketing/proof/ClientLogosProofVisual'
import PortfolioGapProof from '@/app/components/marketing/proof/PortfolioGapProof'
import ProductSuiteProof from '@/app/components/marketing/proof/ProductSuiteProof'
import AssessmentResultProof from '@/app/components/marketing/proof/AssessmentResultProof'
import ProposalAgentProof from '@/app/components/marketing/proof/ProposalAgentProof'
import { getProofVisualCopy } from '@/app/i18n/proofVisuals'
import type { ProofVisualConfig } from '@/lib/proof-visuals/types'

const AiEmployeeHeroChatPreview = dynamic(
  () => import('@/app/components/ai-employee/AiEmployeeHeroChatPreview'),
  { ssr: false }
)
const AiEmployeeProofCarousel = dynamic(
  () => import('@/app/components/AiEmployeeProofCarousel'),
  { ssr: false }
)
const ClientJourneyDemo = dynamic(() => import('@/app/components/ClientJourneyDemo'), { ssr: false })
const InboundMapProofVisual = dynamic(
  () => import('@/app/components/marketing/InboundMapProofVisual'),
  { ssr: false }
)

type ProofVisualProps = {
  config: ProofVisualConfig
  language: Language
  stats?: Array<{ value: string; label: string; hint?: string }>
  caseStudy?: import('@/app/i18n/aiEmployeePage').AiEmployeePageTranslations['caseStudy']
  priority?: boolean
  className?: string
}

function renderDemo(demoId: string) {
  switch (demoId) {
    case 'chat-preview':
      return <AiEmployeeHeroChatPreview />
    case 'inbound-map':
      return <InboundMapProofVisual />
    case 'client-logos':
      return <ClientLogosProofVisual />
    case 'portfolio-gap':
      return <PortfolioGapProof />
    case 'product-suite':
      return <ProductSuiteProof />
    case 'assessment-result':
      return <AssessmentResultProof />
    case 'proposal-agent':
      return <ProposalAgentProof />
    case 'journey-compare':
      return <ClientJourneyDemo />
    default:
      return null
  }
}

export default function ProofVisual({
  config,
  language,
  stats,
  caseStudy,
  priority = false,
  className = '',
}: ProofVisualProps) {
  const copy = getProofVisualCopy(language, config.i18nKey)

  if (config.kind === 'editorial-image') {
    return (
      <ProofVisualFrame
        tone="editorial"
        variant={config.variant ?? 'editorial'}
        src={config.assetPath}
        alt={copy.alt}
        objectPosition={config.objectPosition}
        themeGlowClass={config.themeGlowClass}
        priority={priority}
        className={className}
      />
    )
  }

  if (config.kind === 'stat-panel') {
    return (
      <ProofVisualFrame tone="product" variant="stat" alt={copy.alt} className={className}>
        <StatProofPanel stats={stats ?? []} />
      </ProofVisualFrame>
    )
  }

  if (config.kind === 'diagram') {
    const diagram =
      config.diagramId === 'inbound-map' ? (
        <InboundMapProofVisual />
      ) : (
        <ProcessProofDiagram />
      )

    return (
      <ProofVisualFrame tone="product" variant="diagram" alt={copy.alt} className={className}>
        {diagram}
      </ProofVisualFrame>
    )
  }

  if (config.kind === 'react-demo') {
    const demo = renderDemo(config.demoId)
    return (
      <ProofVisualFrame
        tone="product"
        variant={config.variant ?? 'dashboard'}
        alt={copy.alt}
        aspect={config.demoId === 'chat-preview' ? 'landscape' : 'auto'}
        className={className}
      >
        {demo}
      </ProofVisualFrame>
    )
  }

  if (config.kind === 'comparison') {
    return (
      <ProofVisualFrame tone="product" variant="dashboard" alt={copy.alt} aspect="auto" className={className}>
        <ClientJourneyDemo />
      </ProofVisualFrame>
    )
  }

  if (config.kind === 'proof-carousel' && caseStudy) {
    return (
      <ProofVisualFrame tone="product" variant="dashboard" alt={copy.alt} aspect="auto" className={className}>
        <AiEmployeeProofCarousel caseStudy={caseStudy} />
      </ProofVisualFrame>
    )
  }

  return null
}
