import type { ProofVisualVariant } from '@/app/components/marketing/ProofVisualFrame'

export type ProofPageId =
  | 'home'
  | 'ai-receptionist'
  | 'future-ready'
  | 'agentic-systems'
  | 'about'
  | 'solutions'
  | 'products'
  | 'digni'

export type ProofVisualKind =
  | 'editorial-image'
  | 'stat-panel'
  | 'react-demo'
  | 'diagram'
  | 'comparison'
  | 'proof-carousel'

export type EditorialProofConfig = {
  kind: 'editorial-image'
  sectionId: string
  proofIntent: string
  assetPath: string
  objectPosition?: string
  variant?: ProofVisualVariant
  themeGlowClass?: string
  i18nKey: string
}

export type StatPanelProofConfig = {
  kind: 'stat-panel'
  sectionId: string
  proofIntent: string
  i18nKey: string
  statKeys: string[]
}

export type ReactDemoProofConfig = {
  kind: 'react-demo'
  sectionId: string
  proofIntent: string
  demoId: string
  variant?: ProofVisualVariant
  i18nKey: string
}

export type DiagramProofConfig = {
  kind: 'diagram'
  sectionId: string
  proofIntent: string
  diagramId: string
  i18nKey: string
}

export type ComparisonProofConfig = {
  kind: 'comparison'
  sectionId: string
  proofIntent: string
  i18nKey: string
}

export type ProofCarouselConfig = {
  kind: 'proof-carousel'
  sectionId: string
  proofIntent: string
  i18nKey: string
}

export type ProofVisualConfig =
  | EditorialProofConfig
  | StatPanelProofConfig
  | ReactDemoProofConfig
  | DiagramProofConfig
  | ComparisonProofConfig
  | ProofCarouselConfig

export type ProofVisualCopy = {
  alt: string
  overlayLine?: string
  chip?: string
  channel?: string
}

export type ProofVisualLocaleCopy = Record<string, ProofVisualCopy>
