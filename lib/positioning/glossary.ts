/**
 * EN → FR product language. Semantic equivalents, not calques.
 * ES / DE / AR follow the same meaning when keys are added.
 */

export const POSITIONING_GLOSSARY = {
  en: {
    company: 'Digni Digital',
    brandLine: 'We identify where your business is exposed, build the system that closes the gap, connect it to your existing operations, deploy it, and help you operate with less friction and more leverage.',
    aiEmployee: 'AI Employee',
    futureReady: 'Future Ready',
    agenticSystems: 'Agentic Systems',
    growthExposure: 'Growth Exposure',
    talentExposure: 'Talent Exposure',
    operationsExposure: 'Operations Exposure',
    growthCoverage: 'Growth Coverage',
    talentCoverage: 'Talent Coverage',
    operationsCoverage: 'Operations Coverage',
    lead: 'lead',
    inboundInquiry: 'inbound inquiry',
    seeWhatsExposed: "See What's Exposed",
    exploreYourCoverage: 'Explore Your Coverage',
    findYourRevenueLeaks: 'Find Your Revenue Leaks',
    bookGrowthSystemAudit: 'Book a Growth System Audit',
    assessStudentReadiness: "Assess Your Students' Readiness",
    bookSchoolConsultation: 'Book a School Consultation',
    findWorkflowWorthAutomating: 'Find the Workflow Worth Automating',
    bookProjectConsultation: 'Book a Project Consultation',
    talkThroughYourChallenge: 'Talk Through Your Challenge',
    findBiggestExposure: 'Find Your Biggest Exposure',
  },
  fr: {
    company: 'Digni Digital',
    brandLine:
      'Nous identifions où votre activité est exposée, construisons le système qui referme l’écart, le connectons à vos opérations, le déployons, et vous aidons à fonctionner avec moins de friction et plus de levier.',
    aiEmployee: 'Employé IA',
    futureReady: 'Future Ready',
    agenticSystems: 'Systèmes agentiques',
    growthExposure: 'Exposition liée à la croissance',
    talentExposure: 'Exposition liée aux talents',
    operationsExposure: 'Exposition opérationnelle',
    growthCoverage: 'Couverture croissance',
    talentCoverage: 'Couverture talents',
    operationsCoverage: 'Couverture opérations',
    lead: 'prospect',
    inboundInquiry: 'demande entrante',
    seeWhatsExposed: 'Voir ce qui est exposé',
    exploreYourCoverage: 'Explorer votre couverture',
    findYourRevenueLeaks: 'Trouver vos fuites de revenus',
    bookGrowthSystemAudit: 'Réserver un audit du système de croissance',
    assessStudentReadiness: 'Évaluer la préparation de vos étudiants',
    bookSchoolConsultation: 'Réserver une consultation école',
    findWorkflowWorthAutomating: 'Trouver le flux à automatiser',
    bookProjectConsultation: 'Réserver une consultation projet',
    talkThroughYourChallenge: 'Parler de votre défi',
    findBiggestExposure: 'Trouver votre plus grande exposition',
  },
} as const

export const INSTALLER_PROCESS_STEPS = [
  'identify',
  'design',
  'build',
  'connect',
  'deploy',
  'optimize',
] as const

export type InstallerProcessStepId = (typeof INSTALLER_PROCESS_STEPS)[number]
