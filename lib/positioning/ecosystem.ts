/**
 * Grow → Learn → Scale: single source of truth for Digni Digital's three offerings.
 * Keep in sync with home.ecosystem, servicesPage, nav, and blog Digni bridges.
 */

export type EcosystemPillar = 'grow' | 'learn' | 'scale'

export type EcosystemOffering = {
 pillar: EcosystemPillar
 serviceId: 'ai-receptionist' | 'future-ready-graduate' | 'agentic-softwares'
 path: '/ai-receptionist' | '/future-ready-graduate' | '/agentic-softwares'
}

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = ['grow', 'learn', 'scale']

export const ECOSYSTEM_OFFERINGS: EcosystemOffering[] = [
 { pillar: 'grow', serviceId: 'ai-receptionist', path: '/ai-receptionist' },
 { pillar: 'learn', serviceId: 'future-ready-graduate', path: '/future-ready-graduate' },
 { pillar: 'scale', serviceId: 'agentic-softwares', path: '/agentic-softwares' },
]

export const PILLAR_SERVICE_IDS = {
 grow: 'ai-receptionist',
 learn: 'future-ready-graduate',
 scale: 'agentic-softwares',
} as const satisfies Record<EcosystemPillar, EcosystemOffering['serviceId']>

/** Human readable product names (not invented titles). */
export const PILLAR_PRODUCT_NAMES = {
 grow: 'AI Employee Systems',
 learn: 'Future Ready Program',
 scale: 'Agentic Software',
} as const

/** i18n shape for Grow → Learn → Scale strip (home + services). */
export type EcosystemTranslations = {
 badge: string
 title: string
 titleHighlight: string
 growLabel: string
 growTitle: string
 growDesc: string
 learnLabel: string
 learnTitle: string
 learnDesc: string
 scaleLabel: string
 scaleTitle: string
 scaleDesc: string
}
