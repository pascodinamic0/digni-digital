/**
 * Full site translations: English, French, Spanish, Arabic, German
 * Every section, every page, every UI element.
 */

import type { AiEmployeeProductDemosTranslations } from '@/app/i18n/aiEmployeeProductDemos'
import {
 aiEmployeeProductDemosAr,
 aiEmployeeProductDemosDe,
 aiEmployeeProductDemosEn,
 aiEmployeeProductDemosEs,
 aiEmployeeProductDemosFr,
} from '@/app/i18n/aiEmployeeProductDemos'
import type { AiEmployeePageTranslations } from '@/app/i18n/aiEmployeePage'
import {
 aiEmployeePageAr,
 aiEmployeePageDe,
 aiEmployeePageEn,
 aiEmployeePageEs,
 aiEmployeePageFr,
} from '@/app/i18n/aiEmployeePage'
import type { AiEmployeeSoftwareTranslations } from '@/app/i18n/aiEmployeeSoftware'
import {
 aiEmployeeSoftwareAr,
 aiEmployeeSoftwareDe,
 aiEmployeeSoftwareEn,
 aiEmployeeSoftwareEs,
 aiEmployeeSoftwareFr,
} from '@/app/i18n/aiEmployeeSoftware'
import type { ServicesPageTranslations } from '@/app/i18n/servicesPage'
import { servicesPageAr, servicesPageDe, servicesPageEn, servicesPageEs, servicesPageFr } from '@/app/i18n/servicesPage'

export type Language = 'en' | 'fr' | 'ar' | 'de' | 'es'

type HomeTranslations = {
 hero: {
 badge: string
 badge1: string
 badge2: string
 badge3: string
 title: string
 titleHighlight: string
 subtitle: string
 stat1Value: string
 stat1Label: string
 stat2Value: string
 stat3Value: string
 stat3Label: string
 ourStory: string
 whatWeDo: string
 }
 mission: {
 title: string
 statement: string
 description: string
 commitmentOneLiner?: string
 valuesTitle: string
 valuesSubtitle: string
 humanFirst: string
 humanFirstDesc: string
 humanFirstPrinciple: string
 equalAccess: string
 equalAccessDesc: string
 equalAccessPrinciple: string
 realResults: string
 realResultsDesc: string
 realResultsPrinciple: string
 builtToLast: string
 builtToLastDesc: string
 builtToLastPrinciple: string
 }
 fighting: {
 badge: string
 title: string
 subtitle: string
 realProblems: string
 missedLeads: string
 missedLeadsProblem: string
 missedLeadsSolution: string
 missedLeadsOutcome: string
 missedLeadsStatLabel: string
 skillsGap: string
 skillsGapProblem: string
 skillsGapSolution: string
 skillsGapOutcome: string
 skillsGapStat: string
 skillsGapStatLabel: string
 techDivide: string
 techDivideProblem: string
 techDivideSolution: string
 techDivideOutcome: string
 techDivideStat: string
 techDivideStatLabel: string
 theProblem: string
 theSolution: string
 theOutcome: string
 }
 commitment2026: {
 badge: string
 title: string
 subtitle: string
 pillar1Title: string
 pillar1Desc: string
 pillar2Title: string
 pillar2Desc: string
 proofLine: string
 proofLink1Text: string
 proofLink2Text: string
 ctaPrimary: string
 }
 whatWeDo: {
 badge: string
 title: string
 subtitle: string
 forBusinesses: string
 forSchools: string
 forUniqueNeeds: string
 aiEmployeeTitle: string
 aiEmployeeDesc: string
 aiEmployeeApproach: string
 aiEmployeeOutcome1: string
 aiEmployeeOutcome2: string
 aiEmployeeOutcome3: string
 aiEmployeeOutcome4: string
 aiEmployeePrimaryCta: string
 aiEmployeeSecondaryCta: string
 futureReadyTitle: string
 futureReadyDesc: string
 futureReadyApproach: string
 futureReadyOutcome1: string
 futureReadyOutcome2: string
 futureReadyOutcome3: string
 futureReadyOutcome4: string
 futureReadyPrimaryCta: string
 futureReadySecondaryCta: string
 agenticSoftwaresTitle: string
 agenticSoftwaresDesc: string
 agenticSoftwaresApproach: string
 agenticSoftwaresOutcome1: string
 agenticSoftwaresOutcome2: string
 agenticSoftwaresOutcome3: string
 agenticSoftwaresOutcome4: string
 agenticSoftwaresPrimaryCta: string
 agenticSoftwaresSecondaryCta: string
 notSureTitle: string
 notSureSubtitle: string
 whatWeDoDescription: string
 }
 stats: {
 badge: string
 title: string
 subtitle: string
 realNumbers?: string
 realNumbersAlt?: string
 stat1Label: string
 stat1Sublabel: string
 stat2Label: string
 stat2Sublabel: string
 stat3Label: string
 stat3Sublabel: string
 stat4Label: string
 stat4Sublabel: string
 aiEmployeeCard: string
 aiEmployeeCardSub: string
 futureReadyCard: string
 futureReadyCardSub: string
 agenticCard: string
 agenticCardSub: string
 }
 globalPresence: {
 badge: string
 title: string
 subtitle: string
 subtext?: string
 }
 caseStudies: {
 badge: string
 title: string
 subtitle: string
 realClients?: string
 healthcare: string
 education: string
 realEstate: string
 software: string
 challenge: string
 results: string
 clickExpand: string
 clickCollapse: string
 study1Title: string
 study1Duration: string
 study1Problem: string
 study1Result1: string
 study1Result2: string
 study1Result3: string
 study2Title: string
 study2Duration: string
 study2Problem: string
 study2Result1: string
 study2Result2: string
 study2Result3: string
 study3Title: string
 study3Duration: string
 study3Problem: string
 study3Result1: string
 study3Result2: string
 study3Result3: string
 viewAll: string
 }
 ctaSection: {
 badge: string
 title: string
 titleHighlight: string
 mechanism: string
 bullet1: string
 bullet2: string
 bullet3: string
 }
}

type CommonTranslations = {
 nav: Record<string, string>
 cta: Record<string, string>
 download: Record<string, string>
 footer: Record<string, string>
 /** Section labels (ALL CAPS in UI via .section label). Use for SOLUTIONS, LOCATIONS, PROOF, etc. */
 sectionLabels?: Record<string, string>
}

type BlogTranslations = {
 heroTitle: string
 heroSubtitle: string
 heroDesc: string
 searchPlaceholder: string
 filterByCategory: string
 all: string
 readMore: string
 backToBlog: string
 tags: string
 by: string
 minRead: string
 readyFutureReady: string
 readyFutureReadyDesc: string
 exploreFutureReady: string
 readyTransform: string
 readyTransformDesc: string
 noArticles: string
 previous: string
 next: string
 page: string
 featuredArticles: string
 allArticles: string
 featured: string
 stayUpdated: string
 stayUpdatedDesc: string
 emailPlaceholder: string
 subscribeCta: string
 joinReaders: string
 clearFilters: string
 exploreServices: string
}

type AboutTranslations = {
 badge: string
 heroTitle: string
 heroSubtitle: string
 statsTitle: string
 statsSubtitle: string
 sdgSectionBadge: string
 sdgSectionTitle: string
 sdgSectionIntro: string
 sdg1Title: string
 sdg1Desc: string
 sdg4Title: string
 sdg4Desc: string
 sdg8Title: string
 sdg8Desc: string
 sdgFootnote: string
 freedomVisionBadge: string
 freedomVisionTitle: string
 freedomVisionIntro: string
 freedomPillarFinancialTitle: string
 freedomPillarFinancialDesc: string
 freedomPillarLocationTitle: string
 freedomPillarLocationDesc: string
 freedomPillarTimeTitle: string
 freedomPillarTimeDesc: string
 freedomVisionClosing: string
 statYears: string
 statStudents: string
 statLeads: string
 statSatisfaction: string
 timeline2026Title: string
 timeline2026Description: string
 storyBadge: string
 ourStoryTitle: string
 storyP1: string
 storyP2: string
 storyP3: string
 takeTheJourney: string
 approachTitle: string
 approachSubtitle: string
 discoveryTitle: string
 discoveryDesc: string
 discoveryBullet1: string
 discoveryBullet2: string
 discoveryBullet3: string
 discoveryBullet4: string
 buildTitle: string
 buildDesc: string
 buildBullet1: string
 buildBullet2: string
 buildBullet3: string
 buildBullet4: string
 optimizeTitle: string
 optimizeDesc: string
 optimizeBullet1: string
 optimizeBullet2: string
 optimizeBullet3: string
 optimizeBullet4: string
 differentTitle: string
 differentSubtitle: string
 humanFirstTitle: string
 humanFirstDesc: string
 provenTitle: string
 provenDesc: string
 partnershipTitle: string
 partnershipDesc: string
 roiFocusTitle: string
 roiFocusDesc: string
 promiseTitle: string
 promiseQuote: string
 founderName: string
 founderRole: string
 servicesTitle: string
 servicesSubtitle: string
 aiEmployeeTitle: string
 aiEmployeeDesc: string
 aiEmployeeCta: string
 literacyTitle: string
 literacyDesc: string
 literacyCta: string
 agenticTitle: string
 agenticDesc: string
 agenticCta: string
 ctaTitle: string
 ctaSubtitle: string
 trustedByBadge: string
 trustedByTitle: string
 trustedByTitleHighlight?: string
 trustedBySubtitle?: string
}

type ContactTranslations = {
 heroBadge: string
 heroTitle: string
 heroSubtitle: string
 heroDesc: string
 howToReachUs: string
 howToReachUsDesc: string
 sendMessage: string
 sendMessageDesc: string
 formSending: string
 formSuccess: string
 formError: string
 projectTypePlaceholder: string
 projectTypes: Array<{ value: string; label: string }>
 methods: Array<{ title: string; description: string; action: string }>
 faqs: Array<{ question: string; answer: string }>
}

type ClientJourneyTranslations = {
 badge: string
 title: string
 subtitle: string
 subtext: string
 beforeSectionBadge: string
 beforeSectionSubtext: string
 afterSectionBadge: string
 afterSectionSubtext: string
 brokenLabel: string
 aiFlowLabel: string
 /** Explains that counts are one 100 lead batch, per stage pipeline size */
 funnelLegend: string
 funnelSectionIntake: string
 funnelSectionConversion: string
 funnelSectionOutcome: string
 funnelPipelineLabel: string
 funnelColumnLost: string
 funnelColumnNet: string
 funnelLostBadge: string
 funnelReferralBadge: string
 funnelLeadsUnit: string
 funnelAtStage: string
 funnelClosed: string
 funnelNoDropThisStep: string
 viewPipeline: string
 hidePipeline: string
 channels: Array<{ id: string; label: string }>
 brokenStages: Array<{ step: number; title: string; description: string; leak: string }>
 aiStages: Array<{ step: number; title: string; description: string; win: string }>
}

type FutureReadyGraduateTranslations = {
 heroBadge: string
 heroTitleLine1: string
 heroTitleHighlight: string
 heroAlternateTitle: string
 heroDescription: string
 calendarTitle: string
 calendarTitleHighlight: string
 calendarSubtitle: string
 fullSchoolYear: string
 fullSchoolYearDesc: string
 threeTrimesters: string
 threeTrimestersDesc: string
 seamlessIntegration: string
 seamlessIntegrationDesc: string
 academicYearIntegration: string
 programStart: string
 programStartDate: string
 respectsBreaks: string
 respectsBreaksDates: string
 graduationReady: string
 graduationReadyDate: string
 focusArea: string
 duration: string
 coreModules: string
 firstTrimester: string
 secondTrimester: string
 thirdTrimester: string
 educationPrefix: string
 educationFails: string
 digitalEconomyPrefix: string
 digitalThrives: string
 educationFailsSubtitle: string
 traditionalCrisis: string
 traditionalCrisisDesc: string
 digitalBoom: string
 digitalBoomDesc: string
 whyDigitalSkills: string
 whyDigitalSkillsDesc: string
 globalLeaders: string
 globalLeadersHighlight: string
 globalLeadersSubtitle: string
 highDemandSkills: string
 highDemandSkillsHighlight: string
 highDemandSkillsSubtitle: string
 aiCareerPathsTitle: string
 aiCareerPathsSubtitle: string
 aiCareerGuideLabel: string
 aiAdvantage: string
 aiAdvantageDesc: string
 partnershipRequirements: string
 partnershipRequirementsHighlight: string
 partnershipRequirementsDesc: string
 whatSchoolsProvide: string
 whatSchoolsProvideDesc: string
 whatWeProvide: string
 whatWeProvideDesc: string
 provenResults: string
 provenResultsHighlight: string
 readyToTransform: string
 readyToTransformDesc: string
 threePaths: string
 threePathsHighlight: string
 threePathsSubtitle: string
 forSchools: string
 forProfessional: string
 guidedLearning: string
 newLabel: string
 onlySpotsAvailable: string
 noOneLeftBehind: string
}

export type TranslationKeys = CommonTranslations & {
 home: HomeTranslations
 blog: BlogTranslations
 about: AboutTranslations
 contact: ContactTranslations
 clientJourney: ClientJourneyTranslations
 futureReadyGraduate: FutureReadyGraduateTranslations
 aiEmployeeProductDemos: AiEmployeeProductDemosTranslations
 aiEmployeePage: AiEmployeePageTranslations
 aiEmployeeSoftware: AiEmployeeSoftwareTranslations
 servicesPage: ServicesPageTranslations
}

function buildTranslations(): Record<Language, TranslationKeys> {
 const commonEn = {
 nav: {
 home: 'Home',
 ourMission: 'Our Mission',
 aboutUs: 'About Us',
 caseStudies: 'Case Studies',
 solutions: 'Services',
 articles: 'Articles',
 contact: 'Contact us',
 aiEmployee: 'AI Employee',
 aiEmployeeDesc:
 'Intelligent systems for service businesses: capture leads, retain clients, scale without chaos.',
 futureReadyGraduate: 'Future Ready Graduate Program',
 futureReadyGraduateDesc: 'Transform students into job ready professionals. Personalized guided learning that brings out entrepreneurial talents.',
 agenticSoftwares: 'Agentic Softwares',
 agenticSoftwaresDesc: 'Custom software with integrated AI for niche specific problems',
 fitCheck: '2 min fit check',
 assessmentPrompt: 'Not sure yet? Take the 2 minute fit check',
 },
 cta: {
 getStarted: 'Talk to DigniGuide',
 talkToDigniGuide: 'Talk to DigniGuide',
 contactUsToLearnMore: 'Contact us to learn more',
 bookStrategy: 'Book a Strategy Call',
 bookConsultation: 'Book Your Free Consultation',
 scheduleConsultation: 'Schedule Consultation',
 bookDemo: 'Book Onboarding Demo',
 getSimilarResults: 'Get Similar Results',
 bookStrategicConsultation: 'Book a strategic consultation',
 bookAConsultation: 'Book a consultation',
 exploreProducts: 'Explore Our Products',
 startProject: 'Start Your Project',
 discussProject: 'Discuss Your Project',
 reserveEarlyAccess: 'Reserve Early Access',
 bookYourSpot: 'Book Your Spot. Only 25 Spaces Left',
 startPartnership: 'Start Partnership',
 checkoutRedirecting: 'Redirecting…',
 continueToSecureCheckout: 'Continue to secure checkout',
 orBookConsultationFirst: 'Book a consultation first',
 payProjectDeposit: 'Pay project deposit',
 frgPaySchoolSemester: 'Pay semester ($5,000)',
 frgPaySchoolYearly: 'Pay yearly ($12,000)',
 frgPayGuided: 'Pay & enroll ($49)',
 frgPayProfessionalMonthly: 'Pay per vocational center ($1,000)',
 },
 sectionLabels: {
 solutions: 'Solutions',
 locations: 'Locations',
 proof: 'Proof',
 howItWorks: 'How it works',
 services: 'Our Services',
 trustedBy: 'Trusted by',
 ourApproach: 'Our Approach',
 },
 download: {
 demoPresentation: 'Download Demo Presentation',
 },
 footer: {
 tagline: 'Leads. Jobs. Revenue. We build what works.',
 services: 'Services',
 products: 'Products',
 resources: 'Resources',
 company: 'Company',
 theme: 'Theme',
 futureReadyDemo: 'Future Ready Graduate Program Demo',
 aiEmployeeDemo: 'AI Employee Demo',
 ourMission: 'Our Mission',
 whatWeFightFor: "What We Fight For",
 our2026Commitment: 'Our 2026 Commitment',
 aboutUs: 'About Us',
 careers: 'Careers',
 contact: 'Contact',
 affiliateProgram: 'Affiliate Program',
 copyright: 'All rights reserved.',
 trustedBy: 'Trusted by Businesses & Schools Worldwide',
newsletterKicker: 'Monthly insights',
 newsletterTitle: 'Stay Ahead of the Curve',
 newsletterSubtitle: 'Get exclusive insights, transformation tips, and industry trends delivered to your inbox monthly.',
 newsletterPlaceholder: 'Enter your email',
 newsletterEmailLabel: 'Email address',
 subscribe: 'Subscribe',
 newsletterThanks: 'Subscribed',
 newsletterError: 'Something went wrong. Please try again.',
 privacyPolicy: 'Privacy Policy',
 termsOfService: 'Terms of Service',
 cookiePolicy: 'Cookie Policy',
 aiEmployeeFitCheck: 'AI Employee fit check',
 futureReadyFitCheck: 'Future Ready fit check',
 agenticFitCheck: 'Agentic Softwares fit check',
 },
 }

 const commonFr = {
 nav: {
 home: 'Accueil',
 ourMission: 'Notre Mission',
 aboutUs: 'À propos',
 caseStudies: 'Études de cas',
 solutions: 'Services',
 articles: 'Articles',
 contact: 'Contactez nous',
 aiEmployee: 'Employé IA',
 aiEmployeeDesc:
 'Systèmes intelligents pour les entreprises de services : prospection, fidélisation, croissance sans chaos.',
 futureReadyGraduate: 'Programme Diplômé Prêt pour l\'Avenir',
 futureReadyGraduateDesc: 'Transformez les étudiants en professionnels prêts pour l\'emploi. Apprentissage guidé personnalisé qui révèle les talents entrepreneuriaux.',
 agenticSoftwares: 'Agentic Softwares',
 agenticSoftwaresDesc: 'Logiciels sur mesure avec IA intégrée pour des besoins de niche',
 fitCheck: 'Test de compatibilité (2 min)',
 assessmentPrompt: 'Pas encore sûr ? Faites le test de compatibilité en 2 minutes',
 },
 cta: {
 getStarted: 'Parler à DigniGuide',
 talkToDigniGuide: 'Parler à DigniGuide',
 contactUsToLearnMore: 'Contactez nous pour en savoir plus',
 bookStrategy: 'Réserver un appel stratégique',
 bookConsultation: 'Réserver votre consultation gratuite',
 scheduleConsultation: 'Planifier une consultation',
 bookDemo: 'Réserver une démo d\'onboarding',
 getSimilarResults: 'Obtenir des résultats similaires',
 bookStrategicConsultation: 'Réserver une consultation stratégique',
 bookAConsultation: 'Réserver une consultation',
 exploreProducts: 'Explorer nos produits',
 startProject: 'Démarrer votre projet',
 discussProject: 'Discuter de votre projet',
 reserveEarlyAccess: 'Réserver un accès anticipé',
 bookYourSpot: 'Réservez votre place. Il ne reste que 25 places.',
 startPartnership: 'Démarrer le partenariat',
 checkoutRedirecting: 'Redirection…',
 continueToSecureCheckout: 'Paiement sécurisé',
 orBookConsultationFirst: 'Réserver une consultation d\'abord',
 payProjectDeposit: 'Payer l\'acompte projet',
 frgPaySchoolSemester: 'Payer le semestre (5 000 $)',
 frgPaySchoolYearly: 'Payer à l\'année (12 000 $)',
 frgPayGuided: 'Payer et s\'inscrire (49 $)',
 frgPayProfessionalMonthly: 'Payer par centre professionnel (1 000 $)',
 },
 sectionLabels: {
 solutions: 'Solutions',
 locations: 'Emplacements',
 proof: 'Preuves',
 howItWorks: 'Comment ça marche',
 services: 'Nos services',
 trustedBy: 'Ils nous font confiance',
 ourApproach: 'Notre approche',
 },
 download: {
 demoPresentation: 'Télécharger la démo',
 },
 footer: {
 tagline: 'Prospects. Emplois. Revenus. Nous construisons ce qui marche.',
 services: 'Services',
 products: 'Produits',
 resources: 'Ressources',
 company: 'Entreprise',
 theme: 'Thème',
 futureReadyDemo: 'Démo Programme Diplômé Prêt pour l\'Avenir',
 aiEmployeeDemo: 'Démo Employé IA',
 ourMission: 'Notre Mission',
 whatWeFightFor: 'Ce pour quoi nous nous battons',
 our2026Commitment: 'Notre engagement 2026',
 aboutUs: 'À propos',
 careers: 'Carrières',
 contact: 'Contact',
 affiliateProgram: 'Programme d\'affiliation',
 copyright: 'Tous droits réservés.',
 trustedBy: 'Ils nous font confiance : entreprises et écoles dans le monde',
newsletterKicker: 'Analyses mensuelles',
 newsletterTitle: 'Restez en avance',
 newsletterSubtitle: 'Analyses exclusives, conseils de transformation et tendances du secteur, une fois par mois.',
 newsletterPlaceholder: 'Votre adresse e mail',
 newsletterEmailLabel: 'Adresse e mail',
 subscribe: 'S\'abonner',
 newsletterThanks: 'Inscrit',
 newsletterError: 'Une erreur s\'est produite. Réessayez.',
 privacyPolicy: 'Politique de confidentialité',
 termsOfService: 'Conditions d\'utilisation',
 cookiePolicy: 'Politique des cookies',
 aiEmployeeFitCheck: 'Test Employé IA',
 futureReadyFitCheck: 'Test Future Ready',
 agenticFitCheck: 'Test Agentic Softwares',
 },
 }

 const commonDe = {
 nav: {
 home: 'Startseite',
 ourMission: 'Unsere Mission',
 aboutUs: 'Über uns',
 caseStudies: 'Fallstudien',
 solutions: 'Services',
 articles: 'Artikel',
 contact: 'Kontakt',
 aiEmployee: 'KI Mitarbeiter',
 aiEmployeeDesc:
 'Intelligente Systeme für Dienstleister: Leads, Kundenbindung, skalieren ohne Chaos.',
 futureReadyGraduate: 'Future Ready Graduate Program',
 futureReadyGraduateDesc: 'Machen Sie Studenten zu arbeitsbereiten Fachleuten. Personalisiertes geführtes Lernen, das unternehmerische Talente fördert.',
 agenticSoftwares: 'Agentic Softwares',
 agenticSoftwaresDesc: 'Maßgeschneiderte KI Software für Nischenprobleme',
 fitCheck: '2 Min. Passungstest',
 assessmentPrompt: 'Noch unsicher? Machen Sie den 2 Minuten Passungstest',
 },
 cta: {
 getStarted: 'DigniGuide sprechen',
 talkToDigniGuide: 'DigniGuide sprechen',
 contactUsToLearnMore: 'Kontaktieren Sie uns für mehr Informationen',
 bookStrategy: 'Strategiegespräch buchen',
 bookConsultation: 'Kostenlose Beratung buchen',
 scheduleConsultation: 'Beratung planen',
 bookDemo: 'Demo buchen',
 getSimilarResults: 'Ähnliche Ergebnisse erzielen',
 bookStrategicConsultation: 'Strategische Beratung buchen',
 bookAConsultation: 'Beratung buchen',
 exploreProducts: 'Unsere Produkte entdecken',
 startProject: 'Projekt starten',
 discussProject: 'Projekt besprechen',
 reserveEarlyAccess: 'Early Access reservieren',
 bookYourSpot: 'Ihren Platz sichern. Nur noch 25 Plätze.',
 startPartnership: 'Partnerschaft starten',
 checkoutRedirecting: 'Weiterleitung…',
 continueToSecureCheckout: 'Zur sicheren Kasse',
 orBookConsultationFirst: 'Zuerst Beratung buchen',
 payProjectDeposit: 'Projektanzahlung zahlen',
 frgPaySchoolSemester: 'Semester zahlen (5.000 $)',
 frgPaySchoolYearly: 'Jährlich zahlen (12.000 $)',
 frgPayGuided: 'Zahlen & einschreiben (49 $)',
 frgPayProfessionalMonthly: 'Pro Berufszentrum zahlen (1.000 $)',
 },
 sectionLabels: {
 solutions: 'Lösungen',
 locations: 'Standorte',
 proof: 'Beweis',
 howItWorks: 'So funktioniert es',
 services: 'Unsere Leistungen',
 trustedBy: 'Vertrauen uns',
 ourApproach: 'Unser Ansatz',
 },
 download: {
 demoPresentation: 'Demo herunterladen',
 },
 footer: {
 tagline: 'Leads. Jobs. Umsatz. Wir bauen, was funktioniert.',
 services: 'Services',
 products: 'Produkte',
 resources: 'Ressourcen',
 company: 'Unternehmen',
 theme: 'Design',
 futureReadyDemo: 'Future Ready Graduate Program Demo',
 aiEmployeeDemo: 'KI Mitarbeiter Demo',
 ourMission: 'Unsere Mission',
 whatWeFightFor: 'Wofür wir kämpfen',
 our2026Commitment: 'Unser 2026 Verprechen',
 aboutUs: 'Über uns',
 careers: 'Karriere',
 contact: 'Kontakt',
 affiliateProgram: 'Partnerprogramm',
 copyright: 'Alle Rechte vorbehalten.',
 trustedBy: 'Vertraut von Unternehmen und Schulen weltweit',
newsletterKicker: 'Monatliche Einblicke',
 newsletterTitle: 'Bleiben Sie auf dem Laufenden',
 newsletterSubtitle: 'Exklusive Einblicke, Tipps zur Transformation und Branchentrends monatlich.',
 newsletterPlaceholder: 'E Mail eingeben',
 newsletterEmailLabel: 'E Mail Adresse',
 subscribe: 'Abonnieren',
 newsletterThanks: 'Abonniert',
 newsletterError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
 privacyPolicy: 'Datenschutz',
 termsOfService: 'Nutzungsbedingungen',
 cookiePolicy: 'Cookie Richtlinie',
 aiEmployeeFitCheck: 'KI Mitarbeiter Passungstest',
 futureReadyFitCheck: 'Future Ready Passungstest',
 agenticFitCheck: 'Agentic Softwares Passungstest',
 },
 }

 const commonEs = {
 nav: {
 home: 'Inicio',
 ourMission: 'Nuestra Misión',
 aboutUs: 'Nosotros',
 caseStudies: 'Casos de éxito',
 solutions: 'Soluciones',
 articles: 'Artículos',
 contact: 'Contacto',
 aiEmployee: 'Empleado IA',
 aiEmployeeDesc:
 'Sistemas inteligentes para negocios de servicios: captar leads, retención, escalar sin caos.',
 futureReadyGraduate: 'Future Ready Graduate Program',
 futureReadyGraduateDesc: 'Transforme estudiantes en profesionales listos para el empleo. Aprendizaje guiado personalizado que desarrolla talentos emprendedores.',
 agenticSoftwares: 'Agentic Softwares',
 agenticSoftwaresDesc: 'Software a medida con IA integrada para problemas de nicho',
 fitCheck: 'Test de compatibilidad (2 min)',
 assessmentPrompt: '¿Aún no está seguro? Haga el test de compatibilidad de 2 minutos',
 },
 cta: {
 getStarted: 'Hablar con DigniGuide',
 talkToDigniGuide: 'Hablar con DigniGuide',
 contactUsToLearnMore: 'Contáctenos para más información',
 bookStrategy: 'Reservar llamada estratégica',
 bookConsultation: 'Reservar consulta gratuita',
 scheduleConsultation: 'Programar consulta',
 bookDemo: 'Reservar demo',
 getSimilarResults: 'Obtener resultados similares',
 bookStrategicConsultation: 'Reservar consulta estratégica',
 bookAConsultation: 'Reservar consulta',
 exploreProducts: 'Explorar nuestros productos',
 startProject: 'Iniciar su proyecto',
 discussProject: 'Hablar de su proyecto',
 reserveEarlyAccess: 'Reservar acceso anticipado',
 bookYourSpot: 'Reserve su plaza. Solo quedan 25 plazas.',
 startPartnership: 'Iniciar asociación',
 checkoutRedirecting: 'Redirigiendo…',
 continueToSecureCheckout: 'Ir al pago seguro',
 orBookConsultationFirst: 'Reservar consulta primero',
 payProjectDeposit: 'Pagar depósito del proyecto',
 frgPaySchoolSemester: 'Pagar semestre (5.000 $)',
 frgPaySchoolYearly: 'Pagar anual (12.000 $)',
 frgPayGuided: 'Pagar e inscribirse (49 $)',
 frgPayProfessionalMonthly: 'Pagar por centro vocacional (1.000 $)',
 },
 sectionLabels: {
 solutions: 'Soluciones',
 locations: 'Ubicaciones',
 proof: 'Prueba',
 howItWorks: 'Cómo funciona',
 services: 'Nuestros servicios',
 trustedBy: 'Confían en nosotros',
 ourApproach: 'Nuestro enfoque',
 },
 download: {
 demoPresentation: 'Descargar demo',
 },
 footer: {
 tagline: 'Leads. Empleos. Ingresos. Construimos lo que funciona.',
 services: 'Servicios',
 products: 'Productos',
 resources: 'Recursos',
 company: 'Empresa',
 theme: 'Tema',
 futureReadyDemo: 'Demo Future Ready Graduate Program',
 aiEmployeeDemo: 'Demo Empleado IA',
 ourMission: 'Nuestra Misión',
 whatWeFightFor: 'Por lo que luchamos',
 aboutUs: 'Nosotros',
 careers: 'Carreras',
 contact: 'Contacto',
 affiliateProgram: 'Programa de afiliados',
 copyright: 'Todos los derechos reservados.',
 trustedBy: 'Con la confianza de empresas y escuelas en todo el mundo',
newsletterKicker: 'Perspectivas mensuales',
 newsletterTitle: 'Manténgase al día',
 newsletterSubtitle: 'Información exclusiva, consejos de transformación y tendencias del sector mensualmente.',
 newsletterPlaceholder: 'Introduzca su email',
 newsletterEmailLabel: 'Correo electrónico',
 subscribe: 'Suscribirse',
 newsletterThanks: 'Suscrito',
 newsletterError: 'Algo ha fallado. Por favor, inténtelo de nuevo.',
 privacyPolicy: 'Política de privacidad',
 termsOfService: 'Términos de servicio',
 cookiePolicy: 'Política de cookies',
 aiEmployeeFitCheck: 'Test Empleado IA',
 futureReadyFitCheck: 'Test Future Ready',
 agenticFitCheck: 'Test Agentic Softwares',
 },
 }

 const commonAr = {
 nav: {
 home: 'الرئيسية',
 ourMission: 'مهمتنا',
 aboutUs: 'من نحن',
 caseStudies: 'دراسات الحالة',
 solutions: 'الخدمات',
 articles: 'المقالات',
 contact: 'اتصل بنا',
 aiEmployee: 'الموظف الذكي',
 aiEmployeeDesc:
 'أنظمة ذكية لشركات الخدمات: التقاط العملاء، الاحتفاظ بهم، والنمو بلا فوضى.',
 futureReadyGraduate: 'Future Ready Graduate Program',
 futureReadyGraduateDesc: 'حول الطلاب إلى محترفين جاهزين للعمل. تعلم موجّه شخصي يكشف المواهب الريادية.',
 agenticSoftwares: 'Agentic Softwares',
 agenticSoftwaresDesc: 'برمجيات مخصّصة بذكاء اصطناعي مدمج للمشكلات المتخصصة',
 fitCheck: 'اختبار ملاءمة (دقيقتان)',
 assessmentPrompt: 'لست متأكداً بعد؟ جرّب اختبار الملاءمة في دقيقتين',
 },
 cta: {
 getStarted: 'تحدث مع DigniGuide',
 talkToDigniGuide: 'تحدث مع DigniGuide',
 contactUsToLearnMore: 'اتصل بنا لمعرفة المزيد',
 bookStrategy: 'احجز مكالمة استراتيجية',
 bookConsultation: 'احجز استشارتك المجانية',
 scheduleConsultation: 'جدولة استشارة',
 bookDemo: 'احجز عرضاً توضيحياً',
 getSimilarResults: 'احصل على نتائج مماثلة',
 bookStrategicConsultation: 'احجز استشارة استراتيجية',
 bookAConsultation: 'احجز استشارة',
 exploreProducts: 'استكشف منتجاتنا',
 startProject: 'ابدأ مشروعك',
 discussProject: 'ناقش مشروعك',
 reserveEarlyAccess: 'احجز الوصول المبكر',
 bookYourSpot: 'احجز مكانك. 25 مكاناً فقط متبقي',
 startPartnership: 'ابدأ الشراكة',
 checkoutRedirecting: 'جاري التحويل…',
 continueToSecureCheckout: 'المتابعة إلى الدفع الآمن',
 orBookConsultationFirst: 'احجز استشارة أولاً',
 payProjectDeposit: 'دفع عربون المشروع',
 frgPaySchoolSemester: 'دفع الفصل (5,000 $)',
 frgPaySchoolYearly: 'دفع سنوي (12,000 $)',
 frgPayGuided: 'الدفع والتسجيل (49 $)',
 frgPayProfessionalMonthly: 'الدفع لكل مركز مهني (1,000 $)',
 },
 sectionLabels: {
 solutions: 'الحلول',
 locations: 'المواقع',
 proof: 'الدليل',
 howItWorks: 'كيف يعمل',
 services: 'خدماتنا',
 trustedBy: 'يثق بنا',
 ourApproach: 'نهجنا',
 },
 download: {
 demoPresentation: 'تحميل العرض التوضيحي',
 },
 footer: {
 tagline: 'عملاء محتملون. وظائف. إيرادات. نبني ما ينجح.',
 services: 'الخدمات',
 products: 'المنتجات',
 resources: 'الموارد',
 company: 'الشركة',
 theme: 'المظهر',
 futureReadyDemo: 'عرض Future Ready Graduate Program',
 aiEmployeeDemo: 'عرض الموظف الذكي',
 ourMission: 'مهمتنا',
 whatWeFightFor: 'ما نكافح من أجله',
 our2026Commitment: 'التزامنا 2026',
 aboutUs: 'من نحن',
 careers: 'الوظائف',
 contact: 'اتصل بنا',
 affiliateProgram: 'برنامج الشركاء',
 copyright: 'جميع الحقوق محفوظة.',
 trustedBy: 'موثوق من الشركات والمدارس حول العالم',
newsletterKicker: 'رؤى شهرية',
 newsletterTitle: 'ابقَ في الصدارة',
 newsletterSubtitle: 'رؤى حصرية ونصائح تحويلية واتجاهات القطاع إلى بريدك شهرياً.',
 newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
 newsletterEmailLabel: 'البريد الإلكتروني',
 subscribe: 'اشترك',
 newsletterThanks: 'تم الاشتراك',
 newsletterError: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
 privacyPolicy: 'سياسة الخصوصية',
 termsOfService: 'شروط الخدمة',
 cookiePolicy: 'سياسة ملفات تعريف الارتباط',
 aiEmployeeFitCheck: 'اختبار ملاءمة الموظف الذكي',
 futureReadyFitCheck: 'اختبار ملاءمة Future Ready',
 agenticFitCheck: 'اختبار ملاءمة Agentic Softwares',
 },
 }

 const homeEn: HomeTranslations = {
 hero: {
  badge: 'Technology Creates Opportunity',
  badge1: 'Growth Coverage',
  badge2: 'Talent Coverage',
  badge3: 'Operations Coverage',
  title: 'Insure Your Operations. ',
  titleHighlight: 'Before the Leak Hits.',
  subtitle:
   'Insurance is not for perfect weeks—it is for when leads go cold, graduates miss hiring windows, and manual work steals your team\'s hours. We install AI employees, career-ready training, and custom agentic systems so you are covered across Grow, Learn, and Scale.',
 stat1Value: '150+',
 stat1Label: 'Businesses Covered',
 stat2Value: 'Since 2019',
 stat3Value: 'Africa & Beyond',
 stat3Label: '',
 ourStory: 'How We Work',
 whatWeDo: 'See Your Coverage Options',
 },
 mission: {
 title: 'Our Mission',
 statement: 'Technology that serves everyone.',
 description: 'We dream of a world where everyone is enabled, empowered, and connected to the technology and skills that change lives.',
 commitmentOneLiner: 'By end of 2026: 10 livelihoods created and 100 professionals trained to use AI in their field.',
 valuesTitle: 'Our Values',
 valuesSubtitle: "What We Stand For",
 humanFirst: 'Human First',
 humanFirstDesc: 'Tech that makes you stronger, not replaces you.',
 humanFirstPrinciple: 'People first.',
 equalAccess: 'Equal Access',
 equalAccessDesc: 'Small businesses get big business tools.',
 equalAccessPrinciple: "Budget shouldn't decide who wins.",
 realResults: 'Real Results',
 realResultsDesc: 'Leads. Jobs created. Revenue. We measure what matters.',
 realResultsPrinciple: 'Results from day one.',
 builtToLast: 'Built to Last',
 builtToLastDesc: 'Systems that grow with you. No obsolescence.',
 builtToLastPrinciple: 'Partners, not vendors.',
 },
 fighting: {
 badge: 'What Goes Uncovered',
 title: 'Three Exposures Every Team Faces.',
 subtitle: 'Coverage closes the gap before it becomes a line item on your P&L.',
 realProblems: 'We watch the numbers that matter. You get clarity on what is at risk—and what is already protected.',
 missedLeads: 'Uncovered Inbound',
 missedLeadsProblem:
 'When calls, chats, and forms sit unanswered, revenue walks to whoever responds first—not whoever runs the best ads.',
 missedLeadsSolution: 'Growth coverage: AI that answers, qualifies, and books 24/7—nothing sits in the queue.',
 missedLeadsOutcome: 'Every inquiry gets a response. More booked conversations, less leakage.',
 missedLeadsStatLabel: 'Lost annually when intake goes uncovered',
 skillsGap: 'Uncovered Talent',
 skillsGapProblem:
 'Degrees without job-ready skills leave graduates exposed—employers hire elsewhere while your cohort waits.',
 skillsGapSolution:
 'Talent coverage: guided programs with real projects and AI-ready skills employers actually pay for.',
 skillsGapOutcome: 'Graduates employers want—or founders who build their own income.',
 skillsGapStat: '40%',
 skillsGapStatLabel: 'Without fair access to digital skills',
 techDivide: 'Uncovered Operations',
 techDivideProblem: 'Enterprise stacks cost millions; most teams run on spreadsheets and tools that do not talk to each other.',
 techDivideSolution:
 'Operations coverage: custom agentic software built for one workflow your shelf stack cannot fix—scoped to your budget, owned by you.',
 techDivideOutcome:
 'A system that runs the workflow: clear scope, ownership, no million-dollar stack tax.',
 techDivideStat: '10:1',
 techDivideStatLabel: 'Typical enterprise vs. SMB tech spend ratio',
 theProblem: 'The Exposure',
 theSolution: 'Your Coverage',
 theOutcome: 'What Stays Protected',
 },
 commitment2026: {
 badge: '2026 Impact Commitment',
 title: '10 Livelihoods. 100 AI-Ready Professionals.',
 subtitle:
 'Opportunity should not depend on luck. By end of 2026, we are putting our mission in numbers: decent work created and people trained to use AI in their field.',
 pillar1Title: 'Decent work created',
 pillar1Desc:
 'Ten roles at Digni or with our partners—not short gigs. Income and stability people can plan a life around.',
 pillar2Title: 'Professionals trained to use AI at work',
 pillar2Desc:
 'One hundred people equipped to apply AI in their actual line of work—through Future Ready Graduate and partner programs, not theory-only courses.',
 proofLine:
 'Already in motion: 85% employment among graduates and 85+ learners per cohort across partner schools.',
 proofLink1Text: 'Future Ready Graduate Program',
 proofLink2Text: 'Open roles at Digni',
 ctaPrimary: 'Partner on This Commitment',
 },
 whatWeDo: {
 badge: 'Your Coverage Options',
 title: 'Three Systems.',
 subtitle: 'One Partner.',
 forBusinesses: 'Growth Coverage',
 forSchools: 'Talent Coverage',
 forUniqueNeeds: 'Operations Coverage',
 aiEmployeeTitle: 'AI Employee Systems',
 aiEmployeeDesc:
 'You already paid for those leads. Most never get a reply.\n\nWe don’t sell a chatbot. We sell booked jobs while you work—capture, qualify, and book 24/7 so silence stops choosing for you.',
 aiEmployeeApproach:
 'Destination: every paid lead gets a fair shot at becoming work on your calendar—answered fast, qualified, booked.',
 aiEmployeeOutcome1: 'Every inbound touch gets a response',
 aiEmployeeOutcome2: 'Instant replies, smart follow-ups, and booked appointments',
 aiEmployeeOutcome3: 'Human expert keeps performance improving',
 aiEmployeeOutcome4: 'Strategist-led campaigns and a pipeline that grows',
 aiEmployeePrimaryCta: 'See Growth Coverage',
 aiEmployeeSecondaryCta: 'Book Growth System Audit',
 futureReadyTitle: 'Future Ready Program',
 futureReadyDesc:
 'A degree is not the destination. A hired graduate is.\n\nWe sell employment-ready proof—real projects and portfolios employers hire for—so your school is measured on outcomes, not diplomas alone.',
 futureReadyApproach:
 'Destination: graduates employers hire—portfolio-backed proof, not theory-only courses.',
 futureReadyOutcome1: 'Skills employers pay for today',
 futureReadyOutcome2: 'Portfolio-backed proof, not theory alone',
 futureReadyOutcome3: 'Stay ahead as AI reshapes work',
 futureReadyOutcome4: '85% employment across partner schools',
 futureReadyPrimaryCta: 'See Talent Coverage',
 futureReadySecondaryCta: 'Book School Consultation',
 agenticSoftwaresTitle: 'Agentic Systems',
 agenticSoftwaresDesc:
 'Manual work is stealing a third of your week.\n\nWe don’t sell “agentic software.” We sell operations that run without you as the glue—custom systems for the workflow shelf tools can’t fix.',
 agenticSoftwaresApproach:
 'Destination: a business that runs without you babysitting spreadsheets, copy-paste, and duct-taped tools.',
 agenticSoftwaresOutcome1: 'Automate the workflow shelf tools cannot',
 agenticSoftwaresOutcome2: 'Reduce manual effort and error',
 agenticSoftwaresOutcome3: 'Own the system—not rent another platform',
 agenticSoftwaresOutcome4: 'Scale without proportional hiring',
 agenticSoftwaresPrimaryCta: 'See Operations Coverage',
 agenticSoftwaresSecondaryCta: 'Book Project Consultation',
 notSureTitle: 'Not Sure Which Coverage Fits?',
 notSureSubtitle: "Tell us what is exposed. We'll point you to the right system.",
 whatWeDoDescription: 'Each pillar covers a different exposure—details on its page.',
 },
 stats: {
 badge: 'Proven Track Record',
 title: 'Real Results from',
 subtitle: 'Real Implementations',
 realNumbers: 'Real numbers. Real clients.',
 stat1Label: 'Lead Conversion Increase',
 stat1Sublabel: 'AI Employee™ Results',
 stat2Label: 'Graduate Employment Rate',
 stat2Sublabel: 'Future Ready Graduate Program Success',
 stat3Label: 'Always On Service',
 stat3Sublabel: 'Never Miss Another Lead',
 stat4Label: 'Client Satisfaction',
 stat4Sublabel: 'Across Both Solutions',
 aiEmployeeCard: 'AI Employee™',
 aiEmployeeCardSub: '{partnerCount}+ businesses. 10,000+ leads/month.',
 futureReadyCard: 'Future Ready Graduate Program',
 futureReadyCardSub: '85+ learners per cohort. 85% employed. Entrepreneurial talents unlocked through personalized learning.',
 agenticCard: 'Agentic Softwares',
 agenticCardSub: 'Custom projects. 90% faster workflows. Intelligent automation.',
 } as HomeTranslations['stats'],
 globalPresence: {
 badge: 'Where We Operate',
 title: 'Serving Clients',
 subtitle: 'Around the World',
 subtext: 'countries where we currently have a physical presence.',
 } as HomeTranslations['globalPresence'],
 caseStudies: {
 badge: 'Case Studies',
 title: 'Real Implementations.',
 subtitle: 'Real Results.',
 realClients: 'Real clients. Real numbers.',
 healthcare: 'Healthcare',
 education: 'Education',
 realEstate: 'Real Estate',
 software: 'Software',
 challenge: 'Challenge',
 results: 'Results',
 clickExpand: 'Click to expand',
 clickCollapse: 'Click to collapse',
 study1Title: 'Regional Medical Center',
 study1Duration: '2 weeks implementation',
 study1Problem: 'Missing 40% of after hours calls, losing $80k monthly in potential revenue',
 study1Result1: 'Call capture rate',
 study1Result2: 'Lead conversion increase',
 study1Result3: 'Additional monthly revenue',
 study2Title: 'GS Laricharde',
 study2Duration: '6 months program',
 study2Problem: 'Only 45% of graduates finding employment within 12 months of graduation',
 study2Result1: 'Graduate employment rate',
 study2Result2: 'Average salary increase',
 study2Result3: 'Employer satisfaction',
 study3Title: 'Proposal Agent',
 study3Duration: '3 months build',
 study3Problem: 'Manual proposals taking hours. Slow turnaround losing deals to faster competitors. Inconsistent quality affecting close rates.',
 study3Result1: 'Faster proposal creation',
 study3Result2: 'Proposals generated',
 study3Result3: 'User satisfaction rating',
 viewAll: 'View All Case Studies',
 } as HomeTranslations['caseStudies'],
 ctaSection: {
 badge: 'Coverage Starts With One Conversation',
 title: 'Put Systems in Place ',
 titleHighlight: 'Before the Next Leak.',
 mechanism: 'We listen → We install coverage → You stop guessing.',
 bullet1: '30 min Strategy Call',
 bullet2: 'No Obligation',
 bullet3: 'See What Is Exposed',
 },
 }

 const homeFr: HomeTranslations = {
 hero: {
  badge: 'La technologie crée l\'opportunité',
  badge1: 'Couverture croissance',
  badge2: 'Couverture talents',
  badge3: 'Couverture opérations',
  title: 'Assurez vos opérations. ',
  titleHighlight: 'Avant que la fuite ne coûte.',
  subtitle:
   'L\'assurance n\'est pas faite pour les semaines parfaites—c\'est pour quand les prospects refroidissent, les diplômés ratent les fenêtres d\'embauche et le travail manuel vole les heures de votre équipe. Nous installons employés IA, formation employable et systèmes agentiques sur mesure pour vous couvrir sur Croître, Apprendre et Scaler.',
 stat1Value: '150+',
 stat1Label: 'Entreprises couvertes',
 stat2Value: 'Depuis 2019',
 stat3Value: 'Afrique et au delà',
 stat3Label: '',
 ourStory: 'Comment nous travaillons',
 whatWeDo: 'Voir vos options de couverture',
 },
 mission: {
 title: 'Notre Mission',
 statement: 'Une technologie au service de tous.',
 description: 'Nous rêvons d\'un monde où chacun est outillé, responsabilisé et connecté aux technologies et compétences qui changent les vies.',
 commitmentOneLiner: 'D\'ici fin 2026, nous nous engageons à créer 10 emplois et à former 100 personnes à utiliser l\'IA professionnellement dans leur métier.',
 valuesTitle: 'Nos Valeurs',
 valuesSubtitle: 'Ce qui nous anime',
 humanFirst: 'L\'Humain d\'abord',
 humanFirstDesc: 'Une tech qui vous renforce, pas qui vous remplace.',
 humanFirstPrinciple: 'Les personnes d\'abord.',
 equalAccess: 'Accès égal',
 equalAccessDesc: 'Les PME accèdent aux outils des grandes entreprises.',
 equalAccessPrinciple: 'Le budget ne décide pas du gagnant.',
 realResults: 'Résultats concrets',
 realResultsDesc: 'Prospects. Emplois créés. Revenus. Nous mesurons l\'essentiel.',
 realResultsPrinciple: 'Des résultats dès le premier jour.',
 builtToLast: 'Conçu pour durer',
 builtToLastDesc: 'Des systèmes qui évoluent avec vous. Pas d\'obsolescence.',
 builtToLastPrinciple: 'Partenaires, pas fournisseurs.',
 },
 fighting: {
 badge: 'Ce qui reste découvert',
 title: 'Trois expositions que chaque équipe affronte.',
 subtitle: 'La couverture comble l\'écart avant qu\'il ne devienne une ligne dans votre compte de résultat.',
 realProblems: 'Nous suivons les indicateurs qui comptent. Vous voyez ce qui est exposé—et ce qui est déjà protégé.',
 missedLeads: 'Entrées non couvertes',
 missedLeadsProblem:
 'Quand appels, chats et formulaires restent sans réponse, le chiffre d\'affaires part vers celui qui répond en premier—pas vers celui qui fait les meilleures pubs.',
 missedLeadsSolution: 'Couverture croissance : une IA qui répond, qualifie et planifie 24h/24—rien ne reste en file.',
 missedLeadsOutcome: 'Chaque demande obtient une réponse. Plus de rendez-vous, moins de fuite.',
 missedLeadsStatLabel: 'Perdus chaque année quand l\'accueil reste découvert',
 skillsGap: 'Talents non couverts',
 skillsGapProblem:
 'Des diplômes sans compétences employables laissent les diplômés exposés—les employeurs embauchent ailleurs pendant que votre cohorte attend.',
 skillsGapSolution:
 'Couverture talents : programmes guidés avec vrais projets et compétences IA que les employeurs paient vraiment.',
 skillsGapOutcome: 'Des profils recherchés, ou des créateurs de revenus par eux-mêmes.',
 skillsGapStat: '40%',
 skillsGapStatLabel: 'Sans accès équitable aux compétences numériques',
 techDivide: 'Opérations non couvertes',
 techDivideProblem: 'Les stacks entreprise coûtent des millions ; la plupart des équipes bricolent tableurs et outils qui ne se parlent pas.',
 techDivideSolution:
 'Couverture opérations : logiciel agentique sur mesure pour un flux que le générique ne règle pas—calibré sur votre budget, à vous.',
 techDivideOutcome:
 'Un système qui fait tourner le flux : périmètre clair, maîtrise, sans taxe « stack enterprise ».',
 techDivideStat: '10:1',
 techDivideStatLabel: 'Ratio type dépenses tech entreprise vs PME',
 theProblem: 'L\'exposition',
 theSolution: 'Votre couverture',
 theOutcome: 'Ce qui reste protégé',
 },
 commitment2026: {
 badge: 'Engagement impact 2026',
 title: '10 moyens de vivre. 100 professionnels prêts pour l\'IA.',
 subtitle:
 'L\'opportunité ne devrait pas relever du hasard. D\'ici fin 2026, nous chiffrons notre mission : emploi décent créé et personnes formées à utiliser l\'IA dans leur métier.',
 pillar1Title: 'Emploi décent créé',
 pillar1Desc:
 'Dix postes chez Digni ou avec nos partenaires—pas des missions éphémères. Revenus et stabilité sur lesquels on peut construire.',
 pillar2Title: 'Professionnels formés à l\'IA au travail',
 pillar2Desc:
 'Cent personnes équipées pour appliquer l\'IA dans leur métier réel—via Future Ready Graduate et nos programmes partenaires, pas des cours théoriques.',
 proofLine:
 'Déjà en cours : 85 % d\'emploi parmi les diplômés et 85+ apprenants par cohorte dans les établissements partenaires.',
 proofLink1Text: 'Programme Future Ready Graduate',
 proofLink2Text: 'Postes ouverts chez Digni',
 ctaPrimary: 'Co-construire cet engagement',
 },
 whatWeDo: {
 badge: 'Vos options de couverture',
 title: 'Trois systèmes.',
 subtitle: 'Un partenaire.',
 forBusinesses: 'Couverture croissance',
 forSchools: 'Couverture talents',
 forUniqueNeeds: 'Couverture opérations',
 aiEmployeeTitle: 'Systèmes employé IA',
 aiEmployeeDesc:
 'Les prospects n\'attendent pas les heures de bureau—votre suivi non plus.\n\nNous installons un employé IA qui capture, qualifie et prend des RDV 24h/24, avec un stratège pour campagnes et pipeline. Une couverture qui tourne pendant que vous gérez l\'entreprise.',
 aiEmployeeApproach:
 'Couverture conversion complète : l\'IA capte et planifie en continu, avec des experts humains qui optimisent campagnes et pipeline.',
 aiEmployeeOutcome1: 'Chaque entrée obtient une réponse',
 aiEmployeeOutcome2: 'Réponses instantanées, relances intelligentes et rendez-vous pris',
 aiEmployeeOutcome3: 'Un expert humain améliore la performance en continu',
 aiEmployeeOutcome4: 'Campagnes pilotées par un stratège et un pipeline qui croît',
 aiEmployeePrimaryCta: 'Voir la couverture croissance',
 aiEmployeeSecondaryCta: 'Réserver un audit Growth System',
 futureReadyTitle: 'Programme Future Ready',
 futureReadyDesc:
 'Un diplôme n\'est pas une offre d\'emploi.\n\nNous formons étudiants et professionnels avec compétences IA, vrais projets et portfolios que les employeurs embauchent—pour que vos diplômés soient couverts à la sortie.',
 futureReadyApproach:
 'Formation concrète IA et automatisation : vrais projets, vrais portfolios, vraie employabilité.',
 futureReadyOutcome1: 'Compétences que les employeurs paient aujourd\'hui',
 futureReadyOutcome2: 'Preuve portfolio, pas théorie seule',
 futureReadyOutcome3: 'Rester en avance alors que l\'IA transforme le travail',
 futureReadyOutcome4: '85 % d\'emploi dans les écoles partenaires',
 futureReadyPrimaryCta: 'Voir la couverture talents',
 futureReadySecondaryCta: 'Réserver une consultation école',
 agenticSoftwaresTitle: 'Systèmes agentiques',
 agenticSoftwaresDesc:
 'Les outils génériques couvrent les flux standards—pas les vôtres.\n\nNous construisons des systèmes agentiques sur mesure qui automatisent les opérations, décisions et flux que votre équipe fait encore à la main. Une couverture à vous, un problème à la fois.',
 agenticSoftwaresApproach:
 'Logiciel agentique sur mesure pour lever les goulots manuels sur opérations, décisions et workflows.',
 agenticSoftwaresOutcome1: 'Automatiser le flux que le générique ne couvre pas',
 agenticSoftwaresOutcome2: 'Réduire effort manuel et erreurs',
 agenticSoftwaresOutcome3: 'Posséder le système—pas louer une plateforme de plus',
 agenticSoftwaresOutcome4: 'Scaler sans embauche proportionnelle',
 agenticSoftwaresPrimaryCta: 'Voir la couverture opérations',
 agenticSoftwaresSecondaryCta: 'Réserver une consultation projet',
 notSureTitle: 'Pas sûr de la couverture qu\'il vous faut ?',
 notSureSubtitle: 'Dites-nous ce qui est exposé. Nous vous orienterons vers le bon système.',
 whatWeDoDescription: 'Chaque pilier couvre une exposition différente—détails sur sa page.',
 },
 stats: {
 badge: 'Bilan prouvé',
 title: 'Vrais résultats de',
 subtitle: 'vraies implantations',
 realNumbers: 'Vrais chiffres. Vrais clients.',
 stat1Label: 'Hausse de conversion des prospects',
 stat1Sublabel: 'Résultats Employé IA™',
 stat2Label: 'Taux d\'emploi des diplômés',
 stat2Sublabel: 'Succès du Programme Diplômé Prêt pour l\'Avenir',
 stat3Label: 'Service toujours disponible',
 stat3Sublabel: 'Ne manquez plus aucun prospect',
 stat4Label: 'Satisfaction client',
 stat4Sublabel: 'Sur les deux solutions',
 aiEmployeeCard: 'Employé IA™',
 aiEmployeeCardSub: '{partnerCount}+ entreprises. 10 000+ prospects/mois.',
 futureReadyCard: 'Programme Diplômé Prêt pour l\'Avenir',
 futureReadyCardSub: '85+ apprenants par cohorte. 85 % en emploi. Talents entrepreneuriaux révélés par un apprentissage personnalisé.',
 agenticCard: 'Agentic Softwares',
 agenticCardSub: 'Projets sur mesure. 90% plus rapide. Automatisation intelligente.',
 } as HomeTranslations['stats'],
 globalPresence: {
 badge: 'Où nous opérons',
 title: 'Au service des clients',
 subtitle: 'dans le monde entier',
 subtext: 'Pays où nous avons actuellement une présence physique.',
 } as HomeTranslations['globalPresence'],
 caseStudies: {
 badge: 'Études de cas',
  title: 'Vraies implantations.',
  subtitle: 'Vrais résultats.',
  realClients: 'Vrais clients. Vrais chiffres.',
  healthcare: 'Santé',
 education: 'Éducation',
 realEstate: 'Immobilier',
 software: 'Logiciel',
 challenge: 'Défi',
 results: 'Résultats',
 clickExpand: 'Cliquer pour développer',
 clickCollapse: 'Cliquer pour réduire',
 study1Title: 'Centre Médical Régional',
 study1Duration: '2 semaines de mise en place',
 study1Problem: '40% des appels hors heures sans réponse, perte de 80k $/mois',
 study1Result1: 'Taux de capture des appels',
 study1Result2: 'Hausse de conversion',
 study1Result3: 'Revenus mensuels supplémentaires',
 study2Title: 'GS Laricharde',
 study2Duration: 'Programme de 6 mois',
 study2Problem: 'Seuls 45% des diplômés trouvent un emploi en 12 mois',
 study2Result1: 'Taux d\'emploi des diplômés',
 study2Result2: 'Hausse des salaires',
 study2Result3: 'Satisfaction employeur',
 study3Title: 'Proposal Agent',
 study3Duration: '3 mois de développement',
 study3Problem: 'Propositions manuelles en heures. Lenteur qui fait perdre des deals face à des concurrents plus rapides. Qualité incohérente.',
 study3Result1: 'Création de propositions plus rapide',
 study3Result2: 'Propositions générées',
 study3Result3: 'Score de satisfaction utilisateur',
 viewAll: 'Voir toutes les études de cas',
 } as HomeTranslations['caseStudies'],
 ctaSection: {
 badge: 'La couverture commence par une conversation',
 title: 'Mettez des systèmes en place ',
 titleHighlight: 'avant la prochaine fuite.',
 mechanism: 'Nous écoutons → Nous installons la couverture → Vous arrêtez de deviner.',
 bullet1: 'Appel stratégique de 30 min',
 bullet2: 'Sans engagement',
 bullet3: 'Voir ce qui est exposé',
 },
 }

 const homeAr: HomeTranslations = {
 hero: {
  badge: 'التقنية تخلق الفرصة',
  badge1: 'تغطية النمو',
  badge2: 'تغطية المواهب',
  badge3: 'تغطية العمليات',
  title: 'أمِّن عملياتك. ',
  titleHighlight: 'قبل أن تكلّفك التسرّبات.',
  subtitle:
   'التأمين ليس للأسابيع المثالية—بل عندما تبرد العملاء المحتملون، ويفوّت الخريجون نوافذ التوظيف، ويسرق العمل اليدوي ساعات فريقك. نثبّت موظفين ذكيين وتدريباً جاهزاً للعمل وأنظمة وكيلية مخصصة لتغطيتك في النمو والتعلّم والتوسّع.',
 stat1Value: '+150',
 stat1Label: 'شركة مغطاة',
 stat2Value: 'منذ 2019',
 stat3Value: 'أفريقيا وما بعدها',
 stat3Label: '',
 ourStory: 'كيف نعمل',
 whatWeDo: 'اطلع على خيارات التغطية',
 },
 mission: {
 title: 'مهمتنا',
 statement: 'تقنية تخدم الجميع.',
 description: 'نحلم بعالم يُمكّن الجميع ويربطهم بالتقنية والمهارات التي تغيّر الحياة.',
 commitmentOneLiner: 'بحلول نهاية 2026 نلتزم بخلق 10 وظائف وتدريب 100 شخص على استخدام الذكاء الاصطناعي باحترافية في مجال عملهم.',
 valuesTitle: 'قيمنا',
 valuesSubtitle: 'ما نؤمن به',
 humanFirst: 'الإنسان أولاً',
 humanFirstDesc: 'تقنية تقويك, لا تستبدلك.',
 humanFirstPrinciple: 'الناس أولاً.',
 equalAccess: 'وصول متساوٍ',
 equalAccessDesc: 'الشركات الصغيرة تحصل على أدوات الكبيرة.',
 equalAccessPrinciple: 'الميزانية لا تقرر الفائز.',
 realResults: 'نتائج حقيقية',
 realResultsDesc: 'عملاء. وظائف. إيرادات. نقيّم ما يهم.',
 realResultsPrinciple: 'نتائج من اليوم الأول.',
 builtToLast: 'مبني ليدوم',
 builtToLastDesc: 'أنظمة تنمو معك. بدون تقادم.',
 builtToLastPrinciple: 'شركاء، لا بائعون.',
 },
 fighting: {
 badge: 'ما يبقى غير مغطى',
 title: 'ثلاث تعرّضات تواجهها كل فريق.',
 subtitle: 'التغطية تسدّ الفجوة قبل أن تصبح بنداً في قائمة الدخل.',
 realProblems: 'نراقب الأرقام التي تهم. ترى ما هو معرّض—وما هو محمي بالفعل.',
 missedLeads: 'مدخلات غير مغطاة',
 missedLeadsProblem:
 'عندما تبقى المكالمات والمحادثات والنماذج بلا رد، يذهب الإيراد لمن يرد أولاً—لا لمن يشغّل أفضل الإعلانات.',
 missedLeadsSolution: 'تغطية النمو: ذكاء يُجيب ويؤهّل ويحجز على مدار الساعة—لا شيء ينتظر.',
 missedLeadsOutcome: 'كل استفسار ينال رداً. مواعيد أكثر، تسرّب أقل.',
 missedLeadsStatLabel: 'تضيع سنوياً عندما يبقى الاستقبال غير مغطى',
 skillsGap: 'مواهب غير مغطاة',
 skillsGapProblem:
 'شهادات بلا مهارات جاهزة للعمل تترك الخريجين معرّضين—أصحاب العمل يوظّفون في مكان آخر بينما ينتظر فوجك.',
 skillsGapSolution:
 'تغطية المواهب: برامج موجّهة بمشاريع حقيقية ومهارات ذكاء اصطناعي يدفع لها أصحاب العمل فعلاً.',
 skillsGapOutcome: 'خريجون مطلوبون، أو رواد يبنون دخلهم بأنفسهم.',
 skillsGapStat: '40%',
 skillsGapStatLabel: 'دون وصول عادل للمهارات الرقمية',
 techDivide: 'عمليات غير مغطاة',
 techDivideProblem: 'أنظمة المؤسسات تكلف ملايين؛ معظم الفرق تعمل بجداول وأدوات لا تتواصل.',
 techDivideSolution:
 'تغطية العمليات: برمجيات وكيلية مخصصة لسير عمل واحد لا يغطيه الجاهز—بحجم ميزانيتك، ملكك.',
 techDivideOutcome:
 'نظام يشغّل السير: نطاق واضح، ملكية، دون عبء أنظمة المؤسسات.',
 techDivideStat: '10:1',
 techDivideStatLabel: 'نسبة إنفاق تقني نموذجية: كبيرة مقابل صغيرة',
 theProblem: 'التعرّض',
 theSolution: 'تغطيتك',
 theOutcome: 'ما يبقى محمياً',
 },
 commitment2026: {
 badge: 'التزام الأثر 2026',
 title: '10 مصادر رزق. 100 محترف جاهز للذكاء الاصطناعي.',
 subtitle:
 'الفرصة لا يجب أن تعتمد على الحظ. بحلول نهاية 2026، نضع مهمتنا في أرقام: عمل لائق يُخلَق وأشخاص يُدرَّبون على استخدام الذكاء الاصطناعي في مجالهم.',
 pillar1Title: 'عمل لائق يُخلَق',
 pillar1Desc:
 'عشرة أدوار في Digni أو مع شركائنا—ليس مهاماً قصيرة. دخل واستقرار يمكن التخطيط للحياة عليه.',
 pillar2Title: 'محترفون مدربون على الذكاء الاصطناعي في العمل',
 pillar2Desc:
  'مئة شخص مُجهَّزون لتطبيق الذكاء الاصطناعي في عملهم الفعلي—عبر Future Ready Graduate وبرامج الشركاء، لا دورات نظرية فقط.',
 proofLine:
 'قيد التنفيذ: 85% توظيفاً بين الخريجين و85+ متعلماً لكل فوج في المدارس الشريكة.',
 proofLink1Text: 'برنامج Future Ready Graduate',
 proofLink2Text: 'الوظائف المفتوحة في Digni',
 ctaPrimary: 'شاركنا هذا الالتزام',
 },
 whatWeDo: {
 badge: 'خيارات التغطية',
 title: 'ثلاثة أنظمة.',
 subtitle: 'شريك واحد.',
 forBusinesses: 'تغطية النمو',
 forSchools: 'تغطية المواهب',
 forUniqueNeeds: 'تغطية العمليات',
 aiEmployeeTitle: 'أنظمة الموظف الذكي',
 aiEmployeeDesc:
 'العملاء المحتملون لا ينتظرون ساعات العمل—ومتابعتك لا ينبغي أن تنتظر.\n\nنثبّت موظفاً ذكياً يلتقط ويؤهّل ويحجز على مدار الساعة، مع استراتيجي للحملات وخط المبيعات. تغطية تعمل بينما تدير أعمالك.',
 aiEmployeeApproach:
 'تغطية تحويل كاملة: ذكاء يلتقط ويحجز بلا انقطاع، مع خبراء بشر يحسّنون الحملات وخط الأنابيب.',
 aiEmployeeOutcome1: 'كل مدخل ينال رداً',
 aiEmployeeOutcome2: 'ردود فورية ومتابعات ذكية ومواعيد محجوزة',
 aiEmployeeOutcome3: 'خبير بشري يحسّن الأداء باستمرار',
 aiEmployeeOutcome4: 'حملات بقيادة استراتيجي وخط أنابيب ينمو',
 aiEmployeePrimaryCta: 'اطلع على تغطية النمو',
 aiEmployeeSecondaryCta: 'احجز مراجعة Growth System',
 futureReadyTitle: 'برنامج Future Ready',
 futureReadyDesc:
 'الشهادة ليست عرض عمل.\n\nندرب الطلاب والمهنيين بمهارات ذكاء اصطناعي ومشاريع حقيقية وملفات يوظّف لها أصحاب العمل—لتبقى خريجيك مغطّين عند التخرج.',
 futureReadyApproach:
 'تدريب عملي على الذكاء الاصطناعي والأتمتة: مشاريع حقيقية، ملفات حقيقية، توظيف حقيقي.',
 futureReadyOutcome1: 'مهارات يدفع لها أصحاب العمل اليوم',
 futureReadyOutcome2: 'إثبات بملف أعمال، لا نظرية فقط',
 futureReadyOutcome3: 'تقدّم بينما يغيّر الذكاء الاصطناعي العمل',
 futureReadyOutcome4: '85% توظيفاً في المدارس الشريكة',
 futureReadyPrimaryCta: 'اطلع على تغطية المواهب',
 futureReadySecondaryCta: 'احجز استشارة للمدرسة',
 agenticSoftwaresTitle: 'أنظمة وكيلية',
 agenticSoftwaresDesc:
 'الأدوات الجاهزة تغطي سير العمل العام—لا سير عملك.\n\nنبني أنظمة وكيلية مخصصة تؤتمت العمليات والقرارات وسير العمل الذي يفعله فريقك يدوياً. تغطية تملكها، مشكلة واحدة في كل مرة.',
 agenticSoftwaresApproach:
 'برمجيات وكيلية مخصصة تزيل الاختناقات اليدوية في العمليات والقرارات وسير العمل.',
 agenticSoftwaresOutcome1: 'أتمتة السير الذي لا يغطيه الجاهز',
 agenticSoftwaresOutcome2: 'تقليل الجهد اليدوي والأخطاء',
 agenticSoftwaresOutcome3: 'امتلك النظام—لا تستأجر منصة أخرى',
 agenticSoftwaresOutcome4: 'توسّع دون توظيف متناسب',
 agenticSoftwaresPrimaryCta: 'اطلع على تغطية العمليات',
 agenticSoftwaresSecondaryCta: 'احجز استشارة للمشروع',
 notSureTitle: 'لست متأكداً أي تغطية تناسبك؟',
 notSureSubtitle: 'أخبرنا ما هو معرّض. نوجّهك إلى النظام المناسب.',
 whatWeDoDescription: 'كل ركيزة تغطي تعرّضاً مختلفاً—التفاصيل في صفحتها.',
 },
 stats: {
 badge: 'سجل مثبت',
 title: 'نتائج حقيقية من',
 subtitle: 'تطبيقات حقيقية',
 realNumbers: 'أرقام حقيقية. عملاء حقيقيون.',
 stat1Label: 'زيادة تحويل العملاء',
 stat1Sublabel: 'نتائج الموظف الذكي™',
 stat2Label: 'معدل توظيف الخريجين',
 stat2Sublabel: 'نجاح Future Ready Graduate Program',
 stat3Label: 'خدمة متاحة دائماً',
 stat3Sublabel: 'لا تفوت عميلاً آخر',
 stat4Label: 'رضا العملاء',
 stat4Sublabel: 'عبر الحلين',
 aiEmployeeCard: 'الموظف الذكي™',
 aiEmployeeCardSub: '{partnerCount}+ شركة. 10,000+ عميل/شهر.',
 futureReadyCard: 'Future Ready Graduate Program',
 futureReadyCardSub: '85+ متعلماً لكل فوج. 85% موظفون. مواهب ريادية مكشوفة عبر تعلم شخصي.',
 agenticCard: 'Agentic Softwares',
 agenticCardSub: 'مشاريع مخصصة. 90% أسرع. أتمتة ذكية.',
 } as HomeTranslations['stats'],
 globalPresence: {
 badge: 'أين نعمل',
 title: 'نخدم العملاء',
 subtitle: 'حول العالم',
 subtext: 'الدول التي لدينا فيها حضور مادي حالياً.',
 } as HomeTranslations['globalPresence'],
 caseStudies: {
 badge: 'دراسات الحالة',
  title: 'تطبيقات حقيقية.',
  subtitle: 'نتائج حقيقية.',
  realClients: 'عملاء حقيقيون. أرقام حقيقية.',
  healthcare: 'الرعاية الصحية',
 education: 'التعليم',
 realEstate: 'العقارات',
 software: 'البرمجيات',
 challenge: 'التحدي',
 results: 'النتائج',
 clickExpand: 'انقر للتوسيع',
 clickCollapse: 'انقر للطي',
 study1Title: 'المركز الطبي الإقليمي',
 study1Duration: 'تنفيذ أسبوعين',
 study1Problem: 'فقدان 40% من المكالمات بعد ساعات العمل، خسارة 80 ألف $ شهرياً',
 study1Result1: 'معدل الرد على المكالمات',
 study1Result2: 'زيادة تحويل العملاء',
 study1Result3: 'إيرادات شهرية إضافية',
 study2Title: 'GS Laricharde',
 study2Duration: 'برنامج 6 أشهر',
 study2Problem: 'فقط 45% من الخريجين يجدون عملاً خلال 12 شهراً',
 study2Result1: 'معدل توظيف الخريجين',
 study2Result2: 'زيادة الراتب المتوسط',
 study2Result3: 'رضا أصحاب العمل',
 study3Title: 'Proposal Agent',
 study3Duration: '3 أشهر للبناء',
 study3Problem: 'عروض يدوية تستغرق ساعات. بطء يفقد صفقات لصالح منافسين أسرع. جودة غير متسقة.',
 study3Result1: 'إنشاء العروض أسرع',
 study3Result2: 'عروض مُنشأة',
 study3Result3: 'تقييم رضا المستخدم',
 viewAll: 'عرض جميع الدراسات',
 } as HomeTranslations['caseStudies'],
 ctaSection: {
 badge: 'التغطية تبدأ بمحادثة واحدة',
 title: 'ضع أنظمة في مكانها ',
 titleHighlight: 'قبل التسرّب التالي.',
 mechanism: 'نستمع → نثبّت التغطية → تتوقف عن التخمين.',
 bullet1: 'مكالمة استراتيجية 30 دقيقة',
 bullet2: 'بدون التزام',
 bullet3: 'اطلع على ما هو معرّض',
 },
 }

 const homeDe: HomeTranslations = {
 hero: {
  badge: 'Technologie schafft Chancen',
  badge1: 'Wachstums-Absicherung',
  badge2: 'Talent-Absicherung',
  badge3: 'Operations-Absicherung',
  title: 'Sichern Sie Ihre Abläufe. ',
  titleHighlight: 'Bevor das Leck Sie kostet.',
  subtitle:
   'Versicherung ist nicht für perfekte Wochen—sondern wenn Leads abkühlen, Absolventen Einstellungsfenster verpassen und manuelle Arbeit Stunden stiehlt. Wir installieren KI-Mitarbeiter, berufsfertige Ausbildung und maßgeschneiderte Agentic-Systeme für Absicherung in Wachsen, Lernen und Skalieren.',
 stat1Value: '150+',
 stat1Label: 'Abgesicherte Unternehmen',
 stat2Value: 'Seit 2019',
 stat3Value: 'Afrika und darüber hinaus',
 stat3Label: '',
 ourStory: 'So arbeiten wir',
 whatWeDo: 'Ihre Absicherungsoptionen',
 },
 mission: {
 title: 'Unsere Mission',
 statement: 'Technologie, die allen dient.',
 description: 'Wir träumen von einer Welt, in der jeder befähigt, ermächtigt und mit den Technologien und Fähigkeiten verbunden ist, die Leben verändern.',
 commitmentOneLiner: 'Bis Ende 2026 verpflichten wir uns, 10 Arbeitsplätze zu schaffen und 100 Menschen darin zu schulen, KI professionell in ihrem Berufsfeld einzusetzen.',
 valuesTitle: 'Unsere Werte',
 valuesSubtitle: 'Wofür wir stehen',
 humanFirst: 'Mensch zuerst',
 humanFirstDesc: 'Technologie, die Sie stärkt, nicht ersetzt.',
 humanFirstPrinciple: 'Menschen zuerst.',
 equalAccess: 'Gleicher Zugang',
 equalAccessDesc: 'Kleine Unternehmen erhalten Großunternehmen Tools.',
 equalAccessPrinciple: 'Budget sollte nicht entscheiden, wer gewinnt.',
 realResults: 'Echte Ergebnisse',
 realResultsDesc: 'Leads. Geschaffene Jobs. Umsatz. Wir messen, was zählt.',
 realResultsPrinciple: 'Ergebnisse von Tag eins.',
 builtToLast: 'Für die Ewigkeit gebaut',
 builtToLastDesc: 'Systeme, die mit Ihnen wachsen. Keine Veralterung.',
 builtToLastPrinciple: 'Partner, keine Lieferanten.',
 },
 fighting: {
 badge: 'Was unabgesichert bleibt',
 title: 'Drei Risiken, denen jedes Team ausgesetzt ist.',
 subtitle: 'Absicherung schließt die Lücke, bevor sie zur P&L-Zeile wird.',
 realProblems: 'Wir beobachten die Kennzahlen, die zählen. Sie sehen, was offen liegt—und was bereits geschützt ist.',
 missedLeads: 'Unabgesicherte Eingänge',
 missedLeadsProblem:
 'Wenn Anrufe, Chats und Formulare unbeantwortet bleiben, geht Umsatz an den Erstantwortenden—nicht an den besten Werbetreibenden.',
 missedLeadsSolution: 'Wachstums-Absicherung: KI antwortet, qualifiziert und bucht 24/7—nichts bleibt in der Warteschlange.',
 missedLeadsOutcome: 'Jede Anfrage erhält Antwort. Mehr Termine, weniger Leckage.',
 missedLeadsStatLabel: 'Jährlich verloren, wenn Intake unabgesichert bleibt',
 skillsGap: 'Unabgesicherte Talente',
 skillsGapProblem:
 'Abschlüsse ohne jobfertige Skills lassen Absolventen offen—Arbeitgeber stellen woanders ein, während Ihre Kohorte wartet.',
 skillsGapSolution:
 'Talent-Absicherung: geführte Programme mit echten Projekten und KI-Skills, die Arbeitgeber wirklich bezahlen.',
 skillsGapOutcome: 'Absolventen mit Nachfrage, oder Gründer mit eigenem Einkommen.',
 skillsGapStat: '40%',
 skillsGapStatLabel: 'Ohne fairen Zugang zu digitalen Skills',
 techDivide: 'Unabgesicherte Operationen',
 techDivideProblem: 'Enterprise-Stacks kosten Millionen; die meisten Teams arbeiten mit Tabellen und Tools, die nicht zusammenpassen.',
 techDivideSolution:
 'Operations-Absicherung: maßgeschneiderte Agentic-Software für einen Workflow, den Standardtools nicht abdecken—Ihr Budget, Ihr Eigentum.',
 techDivideOutcome:
 'Ein System, das den Workflow führt: klarer Scope, Eigentum, ohne Millionen-Stack-Steuer.',
 techDivideStat: '10:1',
 techDivideStatLabel: 'Typisches Tech-Ausgabenverhältnis Enterprise zu KMU',
 theProblem: 'Das Risiko',
 theSolution: 'Ihre Absicherung',
 theOutcome: 'Was geschützt bleibt',
 },
 commitment2026: {
 badge: 'Impact-Versprechen 2026',
 title: '10 Existenzgrundlagen. 100 KI-fähige Fachkräfte.',
 subtitle:
 'Chancen dürfen nicht vom Glück abhängen. Bis Ende 2026 setzen wir unsere Mission in Zahlen: menschenwürdige Arbeit geschaffen und Menschen befähigt, KI im Beruf einzusetzen.',
 pillar1Title: 'Menschenwürdige Arbeit geschaffen',
 pillar1Desc:
 'Zehn Rollen bei Digni oder mit Partnern—keine Kurzaufträge. Einkommen und Stabilität, auf die man planen kann.',
 pillar2Title: 'Fachkräfte für KI im Beruf qualifiziert',
 pillar2Desc:
 'Einhundert Menschen befähigt, KI in ihrer echten Tätigkeit einzusetzen—über Future Ready Graduate und Partnerprogramme, nicht nur Theoriekurse.',
 proofLine:
 'Bereits unterwegs: 85 % Beschäftigung unter Absolventen und 85+ Lernende pro Kohorte an Partnerstandorten.',
 proofLink1Text: 'Future Ready Graduate Program',
 proofLink2Text: 'Offene Stellen bei Digni',
 ctaPrimary: 'An diesem Versprechen mitwirken',
 },
 whatWeDo: {
 badge: 'Ihre Absicherungsoptionen',
 title: 'Drei Systeme.',
 subtitle: 'Ein Partner.',
 forBusinesses: 'Wachstums-Absicherung',
 forSchools: 'Talent-Absicherung',
 forUniqueNeeds: 'Operations-Absicherung',
 aiEmployeeTitle: 'KI Mitarbeiter Systeme',
 aiEmployeeDesc:
 'Leads warten nicht auf Bürozeiten—Ihr Follow-up auch nicht.\n\nWir installieren einen KI-Mitarbeiter, der erfasst, qualifiziert und 24/7 bucht, plus einen Strategen für Kampagnen und Pipeline. Absicherung, die läuft, während Sie das Geschäft führen.',
 aiEmployeeApproach:
 'Volle Conversion-Absicherung: KI erfasst und bucht rund um die Uhr, mit Experten für Kampagnen und Pipeline-Wachstum.',
 aiEmployeeOutcome1: 'Jeder Eingang erhält Antwort',
 aiEmployeeOutcome2: 'Sofortige Antworten, smarte Follow-ups und gebuchte Termine',
 aiEmployeeOutcome3: 'Menschlicher Experte verbessert Performance fortlaufend',
 aiEmployeeOutcome4: 'Strategen-geführte Kampagnen und wachsende Pipeline',
 aiEmployeePrimaryCta: 'Wachstums-Absicherung ansehen',
 aiEmployeeSecondaryCta: 'Growth System Audit buchen',
 futureReadyTitle: 'Future Ready Programm',
 futureReadyDesc:
 'Ein Abschluss ist kein Jobangebot.\n\nWir trainieren Studierende und Berufstätige mit KI-fertigen Skills, echten Projekten und Portfolios, die Arbeitgeber einstellen—damit Ihre Absolventen beim Abschluss abgesichert sind.',
 futureReadyApproach:
 'Praxisnahe KI- und Automatisierungsschulung: echte Projekte, echte Portfolios, echte Beschäftigungsfähigkeit.',
 futureReadyOutcome1: 'Skills, die Arbeitgeber heute bezahlen',
 futureReadyOutcome2: 'Portfolio-Beweis, nicht nur Theorie',
 futureReadyOutcome3: 'Voraus sein, während KI die Arbeit verändert',
 futureReadyOutcome4: '85% Beschäftigung an Partnerschulen',
 futureReadyPrimaryCta: 'Talent-Absicherung ansehen',
 futureReadySecondaryCta: 'Schulberatung buchen',
 agenticSoftwaresTitle: 'Agentische Systeme',
 agenticSoftwaresDesc:
 'Standardtools decken generische Workflows ab—nicht Ihre.\n\nWir bauen maßgeschneiderte Agentic-Systeme, die Abläufe, Entscheidungen und Workflows automatisieren, die Ihr Team noch von Hand macht. Absicherung, die Ihnen gehört—ein Problem nach dem anderen.',
 agenticSoftwaresApproach:
 'Maßgeschneiderte Agentic-Software beseitigt manuelle Engpässe in Abläufen, Entscheidungen und Workflows.',
 agenticSoftwaresOutcome1: 'Den Workflow automatisieren, den Standard nicht abdeckt',
 agenticSoftwaresOutcome2: 'Manuellen Aufwand und Fehler reduzieren',
 agenticSoftwaresOutcome3: 'Das System besitzen—keine weitere Plattform mieten',
 agenticSoftwaresOutcome4: 'Skalieren ohne proportional mehr Personal',
 agenticSoftwaresPrimaryCta: 'Operations-Absicherung ansehen',
 agenticSoftwaresSecondaryCta: 'Projektberatung buchen',
 notSureTitle: 'Nicht sicher, welche Absicherung passt?',
 notSureSubtitle: 'Sagen Sie uns, was offen liegt. Wir zeigen das richtige System.',
 whatWeDoDescription: 'Jede Säule deckt ein anderes Risiko ab—Details auf der jeweiligen Seite.',
 },
 stats: {
 badge: 'Bewährte Erfolgsbilanz',
 title: 'Echte Ergebnisse aus',
 subtitle: 'echten Implementierungen',
 realNumbers: 'Echte Zahlen. Echte Kunden.',
 stat1Label: 'Lead Konversionssteigerung',
 stat1Sublabel: 'KI Mitarbeiter™ Ergebnisse',
 stat2Label: 'Absolventen Beschäftigungsrate',
 stat2Sublabel: 'Future Ready Graduate Programmerfolg',
 stat3Label: 'Immer verfügbar',
 stat3Sublabel: 'Verpassen Sie keinen Lead mehr',
 stat4Label: 'Kundenzufriedenheit',
 stat4Sublabel: 'Bei beiden Lösungen',
 aiEmployeeCard: 'KI Mitarbeiter™',
 aiEmployeeCardSub: '{partnerCount}+ Unternehmen. 10.000+ Leads/Monat.',
 futureReadyCard: 'Future Ready Graduate Program',
 futureReadyCardSub: '85+ Lernende pro Kohorte. 85% beschäftigt. Unternehmerische Talente durch personalisiertes Lernen.',
 agenticCard: 'Agentic Softwares',
 agenticCardSub: 'Individuelle Projekte. 90% schneller. Intelligente Automatisierung.',
 } as HomeTranslations['stats'],
 globalPresence: {
 badge: 'Wo wir tätig sind',
 title: 'Kunden bedienen',
 subtitle: 'weltweit',
 subtext: 'Länder, in denen wir derzeit eine physische Präsenz haben.',
 } as HomeTranslations['globalPresence'],
 caseStudies: {
 badge: 'Fallstudien',
 title: 'Echte Implementierungen.',
 subtitle: 'Echte Ergebnisse.',
 realClients: 'Echte Kunden. Echte Zahlen.',
 healthcare: 'Gesundheitswesen',
 education: 'Bildung',
 realEstate: 'Immobilien',
 software: 'Software',
 challenge: 'Herausforderung',
 results: 'Ergebnisse',
 clickExpand: 'Klicken zum Erweitern',
 clickCollapse: 'Klicken zum Einklappen',
 study1Title: 'Regionales Medizinzentrum',
 study1Duration: '2 Wochen Implementierung',
 study1Problem: '40% der Anrufe außerhalb der Geschäftszeiten verpasst, 80k $ monatlicher Umsatzverlust',
 study1Result1: 'Anruf Erfassungsrate',
 study1Result2: 'Lead Konversionssteigerung',
 study1Result3: 'Zusätzlicher monatlicher Umsatz',
 study2Title: 'GS Laricharde',
 study2Duration: '6 Monate Programm',
 study2Problem: 'Nur 45% der Absolventen finden innerhalb von 12 Monaten Arbeit',
 study2Result1: 'Absolventen Beschäftigungsrate',
 study2Result2: 'Durchschnittliche Gehaltssteigerung',
 study2Result3: 'Arbeitgeberzufriedenheit',
 study3Title: 'Proposal Agent',
 study3Duration: '3 Monate Bau',
 study3Problem: 'Manuelle Angebote dauern Stunden. Langsame Umsetzung verliert Deals an schnellere Konkurrenten.',
 study3Result1: 'Schnellere Angebotserstellung',
 study3Result2: 'Generierte Angebote',
 study3Result3: 'Nutzerzufriedenheitsbewertung',
 viewAll: 'Alle Fallstudien anzeigen',
 } as HomeTranslations['caseStudies'],
 ctaSection: {
 badge: 'Absicherung beginnt mit einem Gespräch',
 title: 'Systeme installieren ',
 titleHighlight: 'bevor das nächste Leck kommt.',
 mechanism: 'Wir hören zu → Wir installieren Absicherung → Sie hören auf zu raten.',
 bullet1: '30 min Strategiegespräch',
 bullet2: 'Keine Verpflichtung',
 bullet3: 'Sehen, was offen liegt',
 },
 }

 const homeEs: HomeTranslations = {
 hero: {
  badge: 'La tecnología crea oportunidad',
  badge1: 'Cobertura de crecimiento',
  badge2: 'Cobertura de talento',
  badge3: 'Cobertura de operaciones',
  title: 'Asegure sus operaciones. ',
  titleHighlight: 'Antes de que la fuga cueste.',
  subtitle:
   'El seguro no es para semanas perfectas—es para cuando los leads se enfrían, los graduados pierden ventanas de empleo y el trabajo manual roba horas a su equipo. Instalamos empleados IA, formación lista para el empleo y sistemas agénticos a medida para cubrirle en Crecer, Aprender y Escalar.',
 stat1Value: '150+',
 stat1Label: 'Empresas cubiertas',
 stat2Value: 'Desde 2019',
 stat3Value: 'África y más allá',
 stat3Label: '',
 ourStory: 'Cómo trabajamos',
 whatWeDo: 'Ver sus opciones de cobertura',
 },
 mission: {
 title: 'Nuestra Misión',
 statement: 'Tecnología que sirve a todos.',
 description: 'Soñamos con un mundo donde todos estén capacitados, empoderados y conectados con la tecnología y las habilidades que cambian vidas.',
 commitmentOneLiner: 'Para finales de 2026 nos comprometemos a crear 10 empleos y capacitar a 100 personas para usar la IA con profesionalidad en su línea de trabajo.',
 valuesTitle: 'Nuestros Valores',
 valuesSubtitle: 'Por lo que luchamos',
 humanFirst: 'Personas primero',
 humanFirstDesc: 'Tecnología que te fortalece, no te reemplaza.',
 humanFirstPrinciple: 'Personas primero.',
 equalAccess: 'Acceso igual',
 equalAccessDesc: 'Las pequeñas empresas obtienen herramientas de grandes empresas.',
 equalAccessPrinciple: 'El presupuesto no debe decidir quién gana.',
 realResults: 'Resultados reales',
 realResultsDesc: 'Leads. Empleos creados. Ingresos. Medimos lo que importa.',
 realResultsPrinciple: 'Resultados desde el día uno.',
 builtToLast: 'Construido para durar',
 builtToLastDesc: 'Sistemas que crecen contigo. Sin obsolescencia.',
 builtToLastPrinciple: 'Socios, no proveedores.',
 },
 fighting: {
 badge: 'Lo que queda sin cubrir',
 title: 'Tres exposiciones que todo equipo enfrenta.',
 subtitle: 'La cobertura cierra la brecha antes de que sea una línea en su P&L.',
 realProblems: 'Seguimos las métricas que importan. Usted ve qué está expuesto—y qué ya está protegido.',
 missedLeads: 'Entradas sin cobertura',
 missedLeadsProblem:
 'Cuando llamadas, chats y formularios quedan sin respuesta, los ingresos van a quien responde primero—no a quien tiene mejores anuncios.',
 missedLeadsSolution: 'Cobertura de crecimiento: IA que responde, califica y agenda 24/7—nada en cola.',
 missedLeadsOutcome: 'Cada consulta recibe respuesta. Más citas, menos pérdida.',
 missedLeadsStatLabel: 'Perdidos al año cuando la recepción queda sin cubrir',
 skillsGap: 'Talento sin cobertura',
 skillsGapProblem:
 'Títulos sin habilidades listas para el empleo dejan graduados expuestos—empleadores contratan en otro lado mientras su cohorte espera.',
 skillsGapSolution:
 'Cobertura de talento: programas guiados con proyectos reales y habilidades IA que los empleadores sí pagan.',
 skillsGapOutcome: 'Graduados demandados, o fundadores que crean su propio ingreso.',
 skillsGapStat: '40%',
 skillsGapStatLabel: 'Sin acceso justo a competencias digitales',
 techDivide: 'Operaciones sin cobertura',
 techDivideProblem: 'Los stacks enterprise cuestan millones; la mayoría de equipos vive entre hojas de cálculo y herramientas que no se hablan.',
 techDivideSolution:
 'Cobertura de operaciones: software agéntico a medida para un flujo que lo genérico no cubre—su presupuesto, su propiedad.',
 techDivideOutcome:
 'Un sistema que corre el flujo: alcance claro, propiedad, sin el impuesto del stack enterprise.',
 techDivideStat: '10:1',
 techDivideStatLabel: 'Ratio típico gasto tech empresa vs PYME',
 theProblem: 'La exposición',
 theSolution: 'Su cobertura',
 theOutcome: 'Lo que queda protegido',
 },
 commitment2026: {
 badge: 'Compromiso de impacto 2026',
 title: '10 medios de vida. 100 profesionales listos para la IA.',
 subtitle:
 'La oportunidad no debería depender de la suerte. Para finales de 2026, ponemos cifras a nuestra misión: trabajo decente creado y personas formadas para usar la IA en su campo.',
 pillar1Title: 'Trabajo decente creado',
 pillar1Desc:
 'Diez puestos en Digni o con socios—no encargos breves. Ingresos y estabilidad con los que se puede planificar la vida.',
 pillar2Title: 'Profesionales formados para usar IA en el trabajo',
 pillar2Desc:
 'Cien personas equipadas para aplicar la IA en su línea de trabajo real—con Future Ready Graduate y programas socios, no cursos solo teóricos.',
 proofLine:
 'Ya en marcha: 85 % de empleo entre egresados y 85+ aprendices por cohorte en escuelas socias.',
 proofLink1Text: 'Programa Future Ready Graduate',
 proofLink2Text: 'Vacantes abiertas en Digni',
 ctaPrimary: 'Sumarse a este compromiso',
 },
 whatWeDo: {
 badge: 'Sus opciones de cobertura',
 title: 'Tres sistemas.',
 subtitle: 'Un socio.',
 forBusinesses: 'Cobertura de crecimiento',
 forSchools: 'Cobertura de talento',
 forUniqueNeeds: 'Cobertura de operaciones',
 aiEmployeeTitle: 'Sistemas de empleado IA',
 aiEmployeeDesc:
 'Los leads no esperan horario de oficina—y su seguimiento tampoco debería.\n\nInstalamos un empleado IA que captura, califica y agenda 24/7, con un estratega para campañas y pipeline. Cobertura que funciona mientras usted dirige el negocio.',
 aiEmployeeApproach:
 'Cobertura de conversión completa: IA captura y agenda sin parar, con expertos humanos optimizando campañas y pipeline.',
 aiEmployeeOutcome1: 'Cada entrada recibe respuesta',
 aiEmployeeOutcome2: 'Respuestas al instante, seguimientos inteligentes y citas agendadas',
 aiEmployeeOutcome3: 'Un experto humano mejora el rendimiento de forma continua',
 aiEmployeeOutcome4: 'Campañas lideradas por estratega y pipeline en crecimiento',
 aiEmployeePrimaryCta: 'Ver cobertura de crecimiento',
 aiEmployeeSecondaryCta: 'Reservar auditoría Growth System',
 futureReadyTitle: 'Programa Future Ready',
 futureReadyDesc:
 'Un título no es una oferta de empleo.\n\nFormamos estudiantes y profesionales con habilidades IA, proyectos reales y portafolios que los empleadores contratan—para que sus graduados salgan cubiertos.',
 futureReadyApproach:
 'Formación práctica en IA y automatización: proyectos reales, portafolios reales, empleabilidad real.',
 futureReadyOutcome1: 'Habilidades que los empleadores pagan hoy',
 futureReadyOutcome2: 'Prueba en portafolio, no solo teoría',
 futureReadyOutcome3: 'Adelantarse mientras la IA transforma el trabajo',
 futureReadyOutcome4: '85% de empleo en escuelas socias',
 futureReadyPrimaryCta: 'Ver cobertura de talento',
 futureReadySecondaryCta: 'Reservar consulta escolar',
 agenticSoftwaresTitle: 'Sistemas agénticos',
 agenticSoftwaresDesc:
 'Las herramientas genéricas cubren flujos estándar—no los suyos.\n\nConstruimos sistemas agénticos a medida que automatizan operaciones, decisiones y flujos que su equipo aún hace a mano. Cobertura que usted posee, un problema a la vez.',
 agenticSoftwaresApproach:
 'Software agéntico a medida que elimina cuellos de botella manuales en operaciones, decisiones y flujos.',
 agenticSoftwaresOutcome1: 'Automatizar el flujo que lo genérico no cubre',
 agenticSoftwaresOutcome2: 'Reducir esfuerzo manual y errores',
 agenticSoftwaresOutcome3: 'Poseer el sistema—no alquilar otra plataforma',
 agenticSoftwaresOutcome4: 'Escalar sin contratación proporcional',
 agenticSoftwaresPrimaryCta: 'Ver cobertura de operaciones',
 agenticSoftwaresSecondaryCta: 'Reservar consulta de proyecto',
 notSureTitle: '¿No está seguro qué cobertura encaja?',
 notSureSubtitle: 'Díganos qué está expuesto. Le indicamos el sistema correcto.',
 whatWeDoDescription: 'Cada pilar cubre una exposición distinta—detalles en su página.',
 },
 stats: {
 badge: 'Historial probado',
 title: 'Resultados reales de',
 subtitle: 'implementaciones reales',
 realNumbers: 'Números reales. Clientes reales.',
 stat1Label: 'Aumento de conversión de leads',
 stat1Sublabel: 'Resultados Empleado IA™',
 stat2Label: 'Tasa de empleo de graduados',
 stat2Sublabel: 'Éxito del programa Future Ready Graduate',
 stat3Label: 'Servicio siempre disponible',
 stat3Sublabel: 'No pierda otro lead',
 stat4Label: 'Satisfacción del cliente',
 stat4Sublabel: 'En ambas soluciones',
 aiEmployeeCard: 'Empleado IA™',
 aiEmployeeCardSub: '{partnerCount}+ empresas. 10.000+ leads/mes.',
 futureReadyCard: 'Future Ready Graduate Program',
 futureReadyCardSub: '85+ aprendices por cohorte. 85% empleados. Talentos emprendedores mediante aprendizaje personalizado.',
 agenticCard: 'Agentic Softwares',
 agenticCardSub: 'Proyectos a medida. 90% más rápido. Automatización inteligente.',
 } as HomeTranslations['stats'],
 globalPresence: {
 badge: 'Dónde operamos',
 title: 'Sirviendo clientes',
 subtitle: 'en todo el mundo',
 subtext: 'Países donde tenemos presencia física actualmente.',
 } as HomeTranslations['globalPresence'],
 caseStudies: {
 badge: 'Casos de éxito',
 title: 'Implementaciones reales.',
 subtitle: 'Resultados reales.',
 realClients: 'Clientes reales. Números reales.',
 healthcare: 'Salud',
 education: 'Educación',
 realEstate: 'Inmobiliaria',
 software: 'Software',
 challenge: 'Desafío',
 results: 'Resultados',
 clickExpand: 'Clic para expandir',
 clickCollapse: 'Clic para colapsar',
 study1Title: 'Centro Médico Regional',
 study1Duration: '2 semanas implementación',
 study1Problem: '40% de llamadas fuera de horario sin respuesta, 80k $ perdidos mensualmente',
 study1Result1: 'Tasa de captura de llamadas',
 study1Result2: 'Aumento de conversión de leads',
 study1Result3: 'Ingresos mensuales adicionales',
 study2Title: 'GS Laricharde',
 study2Duration: 'Programa de 6 meses',
 study2Problem: 'Solo 45% de graduados encuentran empleo en 12 meses',
 study2Result1: 'Tasa de empleo de graduados',
 study2Result2: 'Aumento salarial promedio',
 study2Result3: 'Satisfacción del empleador',
 study3Title: 'Proposal Agent',
 study3Duration: '3 meses de construcción',
 study3Problem: 'Propuestas manuales tardan horas. Lentitud pierde tratos ante competidores más rápidos.',
 study3Result1: 'Creación de propuestas más rápida',
 study3Result2: 'Propuestas generadas',
 study3Result3: 'Valoración de satisfacción del usuario',
 viewAll: 'Ver todos los casos de éxito',
 } as HomeTranslations['caseStudies'],
 ctaSection: {
 badge: 'La cobertura empieza con una conversación',
 title: 'Ponga sistemas en su lugar ',
 titleHighlight: 'antes de la próxima fuga.',
 mechanism: 'Escuchamos → Instalamos cobertura → Usted deja de adivinar.',
 bullet1: 'Llamada estratégica de 30 min',
 bullet2: 'Sin obligación',
 bullet3: 'Ver qué está expuesto',
 },
 }

 const blogEn: BlogTranslations = {
 heroTitle: 'Digital Transformation',
 heroSubtitle: 'Insights',
 heroDesc: 'Expert insights on African digital transformation, AI, purpose, and business success for leaders, students, and young people still discovering their calling.',
 searchPlaceholder: 'Search articles by title, content, or tags...',
 filterByCategory: 'Filter by Category',
 all: 'All',
 readMore: 'Read More',
 backToBlog: 'Back to Blog',
 tags: 'Tags',
 by: 'By',
 minRead: 'min read',
 readyFutureReady: 'Ready for the Future Ready Graduate Program?',
 readyFutureReadyDesc: 'Explore the Future Ready Graduate Program, transform students into job ready professionals with AI powered digital skills. 85% employment within 6 months.',
 exploreFutureReady: 'Explore Future Ready Graduate Program',
 readyTransform: 'Ready to Turn Insight Into Action?',
 readyTransformDesc: "Whether you're building a business, guiding students, or finding your calling, let's discuss the next practical step.",
 noArticles: 'No articles found',
 previous: 'Previous',
 next: 'Next',
 page: 'Page',
 featuredArticles: 'Featured Articles',
 allArticles: 'All Articles',
 featured: 'featured',
 stayUpdated: 'Stay Updated',
 stayUpdatedDesc: 'Get weekly insights on AI, digital skills, business growth, and finding purposeful work.',
 emailPlaceholder: 'Enter your email',
 subscribeCta: 'Subscribe',
 joinReaders: 'Join business leaders, students, and emerging builders. No spam, unsubscribe anytime.',
 clearFilters: 'Clear Filters',
 exploreServices: 'Explore Services',
 }

 const blogFr: BlogTranslations = {
 heroTitle: 'Transformation Digitale',
 heroSubtitle: 'Analyses',
 heroDesc: 'Analyses d’experts sur la transformation digitale africaine, l\'IA, la vocation et les réussites pour les dirigeants, les étudiants et les jeunes qui cherchent encore leur voie.',
 searchPlaceholder: 'Rechercher des articles par titre, contenu ou tags...',
 filterByCategory: 'Filtrer par catégorie',
 all: 'Tous',
 readMore: 'Lire la suite',
 backToBlog: 'Retour au blog',
 tags: 'Tags',
 by: 'Par',
 minRead: 'min de lecture',
 readyFutureReady: 'Prêt pour le Programme Diplômé Prêt pour l\'Avenir ?',
 readyFutureReadyDesc: 'Découvrez le Programme Diplômé Prêt pour l\'Avenir, transformez les étudiants en professionnels prêts pour l\'emploi. 85 % en emploi en 6 mois.',
 exploreFutureReady: 'Explorer le Programme Diplômé Prêt pour l\'Avenir',
 readyTransform: 'Prêt à passer de l\'analyse à l\'action ?',
 readyTransformDesc: 'Que vous développiez une entreprise, guidiez des étudiants ou cherchiez votre voie, discutons de la prochaine étape concrète.',
 noArticles: 'Aucun article trouvé',
 previous: 'Précédent',
 next: 'Suivant',
 page: 'Page',
 featuredArticles: 'Articles à la une',
 allArticles: 'Tous les articles',
 featured: 'à la une',
 stayUpdated: 'Restez informé',
 stayUpdatedDesc: 'Recevez chaque semaine des analyses sur l\'IA, les compétences digitales, la croissance et le travail porteur de sens.',
 emailPlaceholder: 'Votre adresse e mail',
 subscribeCta: 'S\'abonner',
 joinReaders: 'Rejoignez des dirigeants, des étudiants et des bâtisseurs émergents. Pas de spam, désinscription à tout moment.',
 clearFilters: 'Effacer les filtres',
 exploreServices: 'Explorer les services',
 }

 const blogAr: BlogTranslations = {
 heroTitle: 'التحول الرقمي',
 heroSubtitle: 'رؤى',
 heroDesc: 'رؤى خبراء حول التحول الرقمي الأفريقي والذكاء الاصطناعي والهدف ونجاح الأعمال للقادة والطلاب والشباب الذين ما زالوا يكتشفون دعوتهم.',
 searchPlaceholder: 'البحث في المقالات بالعنوان أو المحتوى أو الوسوم...',
 filterByCategory: 'تصفية حسب الفئة',
 all: 'الكل',
 readMore: 'اقرأ المزيد',
 backToBlog: 'العودة للمدونة',
 tags: 'الوسوم',
 by: 'بقلم',
 minRead: 'دقيقة قراءة',
 readyFutureReady: 'هل أنت مستعد لبرنامج Future Ready Graduate؟',
 readyFutureReadyDesc: 'اكتشف برنامج Future Ready Graduate, حوّل الطلاب إلى محترفين جاهزين للعمل بمهارات رقمية مدعومة بالذكاء الاصطناعي. 85% توظيف خلال 6 أشهر.',
 exploreFutureReady: 'اكتشف برنامج Future Ready Graduate',
 readyTransform: 'هل أنت مستعد لتحويل الرؤى إلى عمل؟',
 readyTransformDesc: 'سواء كنت تبني عملاً، أو ترشد طلاباً، أو تبحث عن دعوتك، فلنناقش الخطوة العملية التالية.',
 noArticles: 'لم يتم العثور على مقالات',
 previous: 'السابق',
 next: 'التالي',
 page: 'صفحة',
 featuredArticles: 'المقالات المميزة',
 allArticles: 'جميع المقالات',
 featured: 'مميز',
 stayUpdated: 'ابقَ على اطلاع',
 stayUpdatedDesc: 'احصل على رؤى أسبوعية حول الذكاء الاصطناعي والمهارات الرقمية ونمو الأعمال والعمل الهادف.',
 emailPlaceholder: 'أدخل بريدك الإلكتروني',
 subscribeCta: 'اشترك',
 joinReaders: 'انضم إلى قادة الأعمال والطلاب والبنّائين الصاعدين. بدون إزعاج، إلغاء الاشتراك في أي وقت.',
 clearFilters: 'مسح الفلاتر',
 exploreServices: 'استكشف الخدمات',
 }

 const blogDe: BlogTranslations = {
 heroTitle: 'Digitale Transformation',
 heroSubtitle: 'Einblicke',
 heroDesc: 'Expertenwissen zu digitaler Transformation in Afrika, KI, Berufung und Geschäftserfolg für Führungskräfte, Studierende und junge Menschen, die ihre Richtung noch suchen.',
 searchPlaceholder: 'Artikel nach Titel, Inhalt oder Tags durchsuchen...',
 filterByCategory: 'Nach Kategorie filtern',
 all: 'Alle',
 readMore: 'Weiterlesen',
 backToBlog: 'Zurück zum Blog',
 tags: 'Tags',
 by: 'Von',
 minRead: 'Min. Lesezeit',
 readyFutureReady: 'Bereit für das Future Ready Graduate Programm?',
 readyFutureReadyDesc: 'Entdecken Sie das Future Ready Graduate Programm, verwandeln Sie Schüler in berufsreife Fachkräfte mit KI gestützten digitalen Fähigkeiten. 85% Beschäftigung innerhalb von 6 Monaten.',
 exploreFutureReady: 'Future Ready Graduate Programm erkunden',
 readyTransform: 'Bereit, Erkenntnisse in Handlung zu verwandeln?',
 readyTransformDesc: 'Ob Sie ein Unternehmen aufbauen, Studierende begleiten oder Ihre Berufung suchen: Lassen Sie uns den nächsten praktischen Schritt besprechen.',
 noArticles: 'Keine Artikel gefunden',
 previous: 'Zurück',
 next: 'Weiter',
 page: 'Seite',
 featuredArticles: 'Empfohlene Artikel',
 allArticles: 'Alle Artikel',
 featured: 'empfohlen',
 stayUpdated: 'Bleiben Sie informiert',
 stayUpdatedDesc: 'Wöchentliche Einblicke zu KI, digitalen Fähigkeiten, Wachstum und sinnvoller Arbeit.',
 emailPlaceholder: 'Ihre E Mail Adresse',
 subscribeCta: 'Abonnieren',
 joinReaders: 'Schließen Sie sich Führungskräften, Studierenden und aufstrebenden Gestaltern an. Kein Spam, jederzeit abmelden.',
 clearFilters: 'Filter löschen',
 exploreServices: 'Services entdecken',
 }

 const blogEs: BlogTranslations = {
 heroTitle: 'Transformación Digital',
 heroSubtitle: 'Perspectivas',
 heroDesc: 'Perspectivas expertas sobre transformación digital en África, IA, propósito y éxito empresarial para líderes, estudiantes y jóvenes que aún descubren su vocación.',
 searchPlaceholder: 'Buscar artículos por título, contenido o etiquetas...',
 filterByCategory: 'Filtrar por categoría',
 all: 'Todos',
 readMore: 'Leer más',
 backToBlog: 'Volver al blog',
 tags: 'Etiquetas',
 by: 'Por',
 minRead: 'min de lectura',
 readyFutureReady: '¿Listo para el programa Future Ready Graduate?',
 readyFutureReadyDesc: 'Explore el programa Future Ready Graduate, transforme estudiantes en profesionales listos para el empleo con habilidades digitales impulsadas por IA. 85% de empleo en 6 meses.',
 exploreFutureReady: 'Explorar el programa Future Ready Graduate',
 readyTransform: '¿Listo para convertir las perspectivas en acción?',
 readyTransformDesc: 'Ya sea que esté construyendo un negocio, guiando estudiantes o descubriendo su vocación, hablemos del próximo paso práctico.',
 noArticles: 'No se encontraron artículos',
 previous: 'Anterior',
 next: 'Siguiente',
 page: 'Página',
 featuredArticles: 'Artículos destacados',
 allArticles: 'Todos los artículos',
 featured: 'destacado',
 stayUpdated: 'Manténgase informado',
 stayUpdatedDesc: 'Reciba perspectivas semanales sobre IA, habilidades digitales, crecimiento y trabajo con propósito.',
 emailPlaceholder: 'Ingrese su correo electrónico',
 subscribeCta: 'Suscribirse',
 joinReaders: 'Únase a líderes empresariales, estudiantes y creadores emergentes. Sin spam, cancele en cualquier momento.',
 clearFilters: 'Borrar filtros',
 exploreServices: 'Explorar servicios',
 }

 const contactEn: ContactTranslations = {
 heroBadge: 'Get In Touch',
 heroTitle: "Let's Build Something",
 heroSubtitle: 'Amazing Together',
 heroDesc: "Tell us your problem. We'll find the fix.",
 howToReachUs: 'How to Reach Us',
 howToReachUsDesc: 'We reply fast.',
 sendMessage: 'Send Us a Message',
 sendMessageDesc: 'Form below. Reply within 24 hours.',
 formSending: 'Sending...',
 formSuccess: 'Message sent! We\'ll reply within 24 hours.',
 formError: 'Something went wrong. Please try again or email us directly.',
 projectTypePlaceholder: 'Select a service',
 projectTypes: [
 { value: 'ai-employee', label: 'AI Employee' },
 { value: 'future-ready-graduate', label: 'Future Ready Graduate Program' },
 { value: 'agentic-softwares', label: 'Agentic Softwares' },
 ],
 methods: [
 { title: 'Book a Call', description: '30 min free. We discuss. You decide.', action: 'Book Now' },
 { title: 'Email', description: 'Questions? Drop a line.', action: 'support@digni digital llc.com' },
 { title: 'WhatsApp', description: 'Quick reply. Fast.', action: 'Message Us' },
 { title: 'LinkedIn', description: 'Connect. Network.', action: 'Connect' },
 ],
 faqs: [
 { question: 'How long does a project take?', answer: 'Websites: 2 4 weeks. Agentic Softwares: 8 16 weeks. We give you a timeline in our call.' },
 { question: 'Do you work outside Africa?', answer: 'Yes. Global clients. We work your time zone.' },
 { question: "What's in the consultation?", answer: 'Business review. Tech audit. Strategy. 30 min. Free. No obligation.' },
 { question: 'Ongoing support?', answer: 'Yes. Maintenance, hosting, optimization. We stay with you.' },
 { question: 'What industries?', answer: 'Healthcare, real estate, e commerce, services. We adapt to your model.' },
 { question: 'Can you fix existing systems?', answer: 'Yes. Audit. Optimize. Integrate. Sometimes fixing beats rebuilding.' },
 ],
 }

 const contactFr: ContactTranslations = {
 heroBadge: 'Contactez nous',
 heroTitle: 'Construisons ensemble',
 heroSubtitle: 'quelque chose de génial',
 heroDesc: 'Dites nous votre problème. Nous trouverons la solution.',
 howToReachUs: 'Comment nous joindre',
 howToReachUsDesc: 'Nous répondons rapidement.',
 sendMessage: 'Envoyez nous un message',
 sendMessageDesc: 'Formulaire ci dessous. Réponse sous 24 h.',
 formSending: 'Envoi en cours...',
 formSuccess: 'Message envoyé ! Nous répondrons sous 24 h.',
 formError: 'Une erreur s\'est produite. Réessayez ou écrivez nous directement.',
 projectTypePlaceholder: 'Choisir un service',
 projectTypes: [
 { value: 'ai-employee', label: 'Employé IA' },
 { value: 'future-ready-graduate', label: 'Programme Diplômé Prêt pour l\'Avenir' },
 { value: 'agentic-softwares', label: 'Agentic Softwares' },
 ],
 methods: [
 { title: 'Réserver un appel', description: '30 min gratuites. On discute. Vous décidez.', action: 'Réserver' },
 { title: 'E mail', description: 'Des questions ? Écrivez nous.', action: 'support@digni digital llc.com' },
 { title: 'WhatsApp', description: 'Réponse rapide.', action: 'Nous contacter' },
 { title: 'LinkedIn', description: 'Connectons nous.', action: 'Connecter' },
 ],
 faqs: [
 { question: 'Combien de temps dure un projet ?', answer: 'Sites web : 2 4 semaines. Agentic Softwares : 8 16 semaines. Nous vous donnons un délai lors de l\'appel.' },
 { question: 'Travaillez vous en dehors de l\'Afrique ?', answer: 'Oui. Clients internationaux. Nous nous adaptons à votre fuseau.' },
 { question: 'Que comprend la consultation ?', answer: 'Revue de l’activité, audit tech, stratégie. 30 min. Gratuit. Sans engagement.' },
 { question: 'Support continu ?', answer: 'Oui. Maintenance, hébergement, optimisation. Nous restons à vos côtés.' },
 { question: 'Quels secteurs ?', answer: 'Santé, immobilier, e commerce, services. Nous nous adaptons à votre modèle.' },
 { question: 'Pouvez vous corriger des systèmes existants ?', answer: 'Oui. Audit. Optimisation. Intégration. Parfois corriger vaut mieux que reconstruire.' },
 ],
 }

 const contactAr: ContactTranslations = {
 heroBadge: 'تواصل معنا',
 heroTitle: 'لنبني معاً',
 heroSubtitle: 'شيئاً رائعاً',
 heroDesc: 'أخبرنا بمشكلتك. سنجد الحل.',
 howToReachUs: 'كيف تصل إلينا',
 howToReachUsDesc: 'نرد بسرعة.',
 sendMessage: 'أرسل لنا رسالة',
 sendMessageDesc: 'النموذج أدناه. رد خلال 24 ساعة.',
 formSending: 'جاري الإرسال...',
 formSuccess: 'تم إرسال الرسالة! سنجيب خلال 24 ساعة.',
 formError: 'حدث خطأ. حاول مرة أخرى أو راسلنا مباشرة.',
 projectTypePlaceholder: 'اختر خدمة',
 projectTypes: [
 { value: 'ai-employee', label: 'الموظف الذكي' },
 { value: 'future-ready-graduate', label: 'Future Ready Graduate Program' },
 { value: 'agentic-softwares', label: 'Agentic Softwares' },
 ],
 methods: [
 { title: 'حجز مكالمة', description: '30 دقيقة مجانية. نناقش. أنت تقرر.', action: 'احجز الآن' },
 { title: 'البريد', description: 'أسئلة؟ راسلنا.', action: 'support@digni digital llc.com' },
 { title: 'واتساب', description: 'رد سريع.', action: 'راسلنا' },
 { title: 'لينكد إن', description: 'تواصل. شبكة.', action: 'تواصل' },
 ],
 faqs: [
 { question: 'كم تستغرق المشاريع؟', answer: 'المواقع: 2 4 أسابيع. Agentic Softwares: 8 16 أسبوعاً. نعطيك جدولاً في المكالمة.' },
 { question: 'هل تعملون خارج أفريقيا؟', answer: 'نعم. عملاء عالميون. نعمل وفق منطقتكم الزمنية.' },
 { question: 'ماذا تتضمن الاستشارة؟', answer: 'مراجعة أعمال. تدقيق تقني. استراتيجية. 30 دقيقة. مجانية. بدون التزام.' },
 { question: 'دعم مستمر؟', answer: 'نعم. صيانة، استضافة، تحسين. نبقى معك.' },
 { question: 'أي قطاعات؟', answer: 'الصحة، العقارات، التجارة الإلكترونية، الخدمات. نتكيف مع نموذجك.' },
 { question: 'هل يمكنكم إصلاح أنظمة موجودة؟', answer: 'نعم. تدقيق. تحسين. تكامل. أحياناً الإصلاح أفضل من إعادة البناء.' },
 ],
 }

 const contactDe: ContactTranslations = {
 heroBadge: 'Kontakt',
 heroTitle: 'Lassen Sie uns gemeinsam',
 heroSubtitle: 'etwas Großartiges bauen',
 heroDesc: 'Sagen Sie uns Ihr Problem. Wir finden die Lösung.',
 howToReachUs: 'So erreichen Sie uns',
 howToReachUsDesc: 'Wir antworten schnell.',
 sendMessage: 'Nachricht senden',
 sendMessageDesc: 'Formular unten. Antwort innerhalb von 24 Stunden.',
 formSending: 'Wird gesendet...',
 formSuccess: 'Nachricht gesendet! Wir antworten innerhalb von 24 Stunden.',
 formError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.',
 projectTypePlaceholder: 'Service auswählen',
 projectTypes: [
 { value: 'ai-employee', label: 'KI Mitarbeiter' },
 { value: 'future-ready-graduate', label: 'Future Ready Graduate Program' },
 { value: 'agentic-softwares', label: 'Agentic Softwares' },
 ],
 methods: [
 { title: 'Anruf buchen', description: '30 Min. kostenlos. Wir besprechen. Sie entscheiden.', action: 'Jetzt buchen' },
 { title: 'E Mail', description: 'Fragen? Schreiben Sie uns.', action: 'support@digni digital llc.com' },
 { title: 'WhatsApp', description: 'Schnelle Antwort.', action: 'Nachricht senden' },
 { title: 'LinkedIn', description: 'Verbinden. Netzwerken.', action: 'Verbinden' },
 ],
 faqs: [
 { question: 'Wie lange dauert ein Projekt?', answer: 'Websites: 2 4 Wochen. Agentic Softwares: 8 16 Wochen. Wir geben Ihnen einen Zeitplan in unserem Gespräch.' },
 { question: 'Arbeiten Sie außerhalb Afrikas?', answer: 'Ja. Globale Kunden. Wir arbeiten in Ihrer Zeitzone.' },
 { question: 'Was beinhaltet die Beratung?', answer: 'Geschäftsüberprüfung. Tech Audit. Strategie. 30 Min. Kostenlos. Keine Verpflichtung.' },
 { question: 'Laufender Support?', answer: 'Ja. Wartung, Hosting, Optimierung. Wir bleiben bei Ihnen.' },
 { question: 'Welche Branchen?', answer: 'Gesundheitswesen, Immobilien, E Commerce, Dienstleistungen. Wir passen uns Ihrem Modell an.' },
 { question: 'Können Sie bestehende Systeme reparieren?', answer: 'Ja. Audit. Optimieren. Integrieren. Manchmal ist Reparieren besser als Neuaufbau.' },
 ],
 }

 const contactEs: ContactTranslations = {
 heroBadge: 'Contacto',
 heroTitle: 'Construyamos juntos',
 heroSubtitle: 'algo increíble',
 heroDesc: 'Cuéntenos su problema. Encontraremos la solución.',
 howToReachUs: 'Cómo contactarnos',
 howToReachUsDesc: 'Respondemos rápido.',
 sendMessage: 'Envíenos un mensaje',
 sendMessageDesc: 'Formulario abajo. Respuesta en 24 horas.',
 formSending: 'Enviando...',
 formSuccess: '¡Mensaje enviado! Responderemos en 24 horas.',
 formError: 'Algo salió mal. Inténtelo de nuevo o escríbanos directamente.',
 projectTypePlaceholder: 'Seleccionar servicio',
 projectTypes: [
 { value: 'ai-employee', label: 'Empleado IA' },
 { value: 'future-ready-graduate', label: 'Future Ready Graduate Program' },
 { value: 'agentic-softwares', label: 'Agentic Softwares' },
 ],
 methods: [
 { title: 'Reservar llamada', description: '30 min gratis. Discutimos. Usted decide.', action: 'Reservar ahora' },
 { title: 'Email', description: '¿Preguntas? Escríbanos.', action: 'support@digni digital llc.com' },
 { title: 'WhatsApp', description: 'Respuesta rápida.', action: 'Enviar mensaje' },
 { title: 'LinkedIn', description: 'Conectar. Red.', action: 'Conectar' },
 ],
 faqs: [
 { question: '¿Cuánto dura un proyecto?', answer: 'Sitios web: 2 4 semanas. Agentic Softwares: 8 16 semanas. Le damos un cronograma en la llamada.' },
 { question: '¿Trabajan fuera de África?', answer: 'Sí. Clientes globales. Trabajamos en su zona horaria.' },
 { question: '¿Qué incluye la consulta?', answer: 'Revisión de negocio. Auditoría técnica. Estrategia. 30 min. Gratis. Sin obligación.' },
 { question: '¿Soporte continuo?', answer: 'Sí. Mantenimiento, hosting, optimización. Nos quedamos con usted.' },
 { question: '¿Qué industrias?', answer: 'Salud, inmobiliaria, e commerce, servicios. Nos adaptamos a su modelo.' },
 { question: '¿Pueden arreglar sistemas existentes?', answer: 'Sí. Auditoría. Optimizar. Integrar. A veces arreglar es mejor que reconstruir.' },
 ],
 }

 const clientJourneyEn: ClientJourneyTranslations = {
 badge: 'Outcome',
 title: '100 in.',
 subtitle: '99 leak, or 95 close.',
 subtext:
 'Two funnels track one batch from Paid Ads, Website, Instagram, WhatsApp, and Phone. Each step’s big number is how many are still in your pipeline; red is who you lost right there.',
 beforeSectionBadge: 'Before',
 beforeSectionSubtext: 'Manual intake, slow response, and handoffs, same 100 leads, most never make it through.',
 afterSectionBadge: 'After',
 afterSectionSubtext: 'One system captures, qualifies, books, and follows up, then referrals feed the loop.',
 brokenLabel: 'The Leak',
 aiFlowLabel: 'The Loop',
 funnelLegend: 'One batch · big # = still in pipeline',
 funnelSectionIntake: 'Intake',
 funnelSectionConversion: 'Conversion',
 funnelSectionOutcome: 'Outcome & loop',
 funnelPipelineLabel: 'In pipeline',
 funnelColumnLost: 'Leak',
 funnelColumnNet: 'Net',
 funnelLostBadge: 'lost',
 funnelReferralBadge: 'referrals',
 funnelLeadsUnit: 'leads',
 funnelAtStage: 'at',
 funnelClosed: 'closed',
 funnelNoDropThisStep: 'No drop this step',
 viewPipeline: 'View interactive pipeline',
 hidePipeline: 'Hide pipeline',
 channels: [
 { id: 'ads', label: 'Paid Ads' },
 { id: 'website', label: 'Website' },
 { id: 'instagram', label: 'Instagram' },
 { id: 'whatsapp', label: 'WhatsApp' },
 { id: 'phone', label: 'Phone' },
 ],
 brokenStages: [
 { step: 1, title: 'Lead Arrives', description: 'Leads hit different inboxes. No single view.', leak: 'Scattered. No unified view.' },
 { step: 2, title: 'First Contact', description: 'Voicemail. Emails sit. 78% buy from first answer.', leak: '62 lost: slow, no 24/7.' },
 { step: 3, title: 'Qualification', description: 'Manual. Different reps, different questions.', leak: '26 lost: inconsistent.' },
 { step: 4, title: 'Booking Attempt', description: 'Handoff chaos. Calendar back and forth.', leak: '7 lost: manual handoffs.' },
 { step: 5, title: 'Follow Up', description: 'No system. Leads fall through cracks.', leak: '3 lost: zero follow up.' },
 { step: 6, title: 'Outcome', description: 'Leads go cold. Competitors win.', leak: '1 lost. Competitor closes.' },
 { step: 7, title: 'Referrals', description: 'No loop. Growth stalls.', leak: '0 referrals.' },
 ],
 aiStages: [
 { step: 1, title: 'Lead Arrives', description: 'All channels → one system. One view.', win: '100 captured.' },
 { step: 2, title: 'Instant Response', description: 'Under 2 sec. 24/7. No voicemail.', win: '100 reached. 0 lost.' },
 { step: 3, title: 'Smart Qualification', description: 'Right questions. Ready buyers only.', win: '100 qualified.' },
 { step: 4, title: 'Auto Booking', description: 'Pick slot. Sync. Booked.', win: '100 booked.' },
 { step: 5, title: 'Follow Up', description: 'Until they book or say no.', win: '0 cold drops.' },
 { step: 6, title: 'Outcome', description: 'Captured. Qualified. Closed.', win: '95 closed.' },
 { step: 7, title: 'Referrals', description: 'Clients refer. Loop continues.', win: '+23 referrals.' },
 ],
 }

 const clientJourneyFr: ClientJourneyTranslations = {
 badge: 'Résultat',
 title: '100 leads entrent.',
 subtitle: 'Puis 99 perdus, ou 95 conclus.',
 subtext:
 'Deux embudos suivent un même lot (annonces, site, Instagram, WhatsApp, téléphone). À chaque étape, le grand chiffre = combien sont encore dans votre pipeline ; le rouge = ce que vous perdez sur l’étape.',
 beforeSectionBadge: 'Avant',
 beforeSectionSubtext:
 'Réception manuelle, réponses lentes, transferts, les mêmes 100 leads, la plupart ne passent pas.',
 afterSectionBadge: 'Après',
 afterSectionSubtext: 'Un système capture, qualifie, réserve et relance, puis les parrainages alimentent la boucle.',
 brokenLabel: 'La fuite',
 aiFlowLabel: 'La boucle',
 funnelLegend: 'Même lot de 100 leads · grand chiffre = encore dans le pipeline après cette étape',
 funnelSectionIntake: 'Entrée',
 funnelSectionConversion: 'Conversion',
 funnelSectionOutcome: 'Résultat & boucle',
 funnelPipelineLabel: 'Dans le pipeline',
 funnelColumnLost: 'Fuite',
 funnelColumnNet: 'Restant',
 funnelLostBadge: 'perdus',
 funnelReferralBadge: 'parrainages',
 funnelLeadsUnit: 'leads',
 funnelAtStage: 'à',
 funnelClosed: 'conclus',
 funnelNoDropThisStep: 'Aucune perte à cette étape',
 viewPipeline: 'Voir le pipeline interactif',
 hidePipeline: 'Masquer le pipeline',
 channels: [
 { id: 'ads', label: 'Annonces payantes' },
 { id: 'website', label: 'Site web' },
 { id: 'instagram', label: 'Instagram' },
 { id: 'whatsapp', label: 'WhatsApp' },
 { id: 'phone', label: 'Téléphone' },
 ],
 brokenStages: [
 { step: 1, title: 'Le lead arrive', description: 'Les leads arrivent sur différentes boîtes. Aucune vue unifiée.', leak: 'Dispersé. Aucune vue unique.' },
 { step: 2, title: 'Premier contact', description: 'Messagerie vocale. Emails en attente. 78 % achètent au premier contact.', leak: '62 perdus : lent, pas de 24/7.' },
 { step: 3, title: 'Qualification', description: 'Manuelle. Différents commerciaux, différentes questions.', leak: '26 perdus : incohérent.' },
 { step: 4, title: 'Prise de rendez vous', description: 'Chaos de transfert. Allers retours de calendrier.', leak: '7 perdus : transferts manuels.' },
 { step: 5, title: 'Suivi', description: 'Aucun système. Les leads passent entre les mailles.', leak: '3 perdus : zéro suivi.' },
 { step: 6, title: 'Résultat', description: 'Les leads refroidissent. Les concurrents gagnent.', leak: '1 perdu. Le concurrent conclut.' },
 { step: 7, title: 'Parrainages', description: 'Aucune boucle. La croissance stagne.', leak: '0 parrainage.' },
 ],
 aiStages: [
 { step: 1, title: 'Le lead arrive', description: 'Tous les canaux → un système. Une vue.', win: '100 captés.' },
 { step: 2, title: 'Réponse instantanée', description: 'Moins de 2 sec. 24/7. Pas de messagerie vocale.', win: '100 contactés. 0 perdu.' },
 { step: 3, title: 'Qualification intelligente', description: 'Les bonnes questions. Seuls les acheteurs prêts.', win: '100 qualifiés.' },
 { step: 4, title: 'Réservation auto', description: 'Choisir un créneau. Synchroniser. Réservé.', win: '100 réservés.' },
 { step: 5, title: 'Suivi', description: 'Jusqu\'à ce qu\'ils réservent ou refusent.', win: '0 abandon.' },
 { step: 6, title: 'Résultat', description: 'Capté. Qualifié. Conclu.', win: '95 conclus.' },
 { step: 7, title: 'Parrainages', description: 'Les clients recommandent. La boucle continue.', win: '+23 parrainages.' },
 ],
 }

 const clientJourneyAr: ClientJourneyTranslations = {
 badge: 'النتيجة',
 title: '100 يدخلون.',
 subtitle: 'ثم 99 يضيعون أو 95 يُغلقون.',
 subtext:
 'مساران يتتبعان دفعة واحدة (إعلانات، موقع، إنستغرام، واتساب، هاتف). في كل خطوة، الرقم الكبير = من ما زال في مسارك؛ الأحمر = من فُقد في تلك الخطوة.',
 beforeSectionBadge: 'قبل',
 beforeSectionSubtext: 'استقبال يدوي، ردود بطيئة، وتسليمات, نفس الـ100، معظمهم لا يكملون.',
 afterSectionBadge: 'بعد',
 afterSectionSubtext: 'نظام واحد يلتقط ويؤهل ويحجز ويتابع, ثم الإحالات تغذي الحلقة.',
 brokenLabel: 'التسرب',
 aiFlowLabel: 'الحلقة',
 funnelLegend: 'نفس الدفعة من 100 · الرقم الكبير = ما زال في المسار بعد هذه الخطوة',
 funnelSectionIntake: 'الاستقبال',
 funnelSectionConversion: 'التحويل',
 funnelSectionOutcome: 'النتيجة والحلقة',
 funnelPipelineLabel: 'في المسار',
 funnelColumnLost: 'تسرب',
 funnelColumnNet: 'صافي',
 funnelLostBadge: 'ضائع',
 funnelReferralBadge: 'إحالات',
 funnelLeadsUnit: 'leads',
 funnelAtStage: 'عند',
 funnelClosed: 'مغلقة',
 funnelNoDropThisStep: 'لا خسارة في هذه الخطوة',
 viewPipeline: 'عرض المسار التفاعلي',
 hidePipeline: 'إخفاء المسار',
 channels: [
 { id: 'ads', label: 'إعلانات مدفوعة' },
 { id: 'website', label: 'الموقع' },
 { id: 'instagram', label: 'إنستغرام' },
 { id: 'whatsapp', label: 'واتساب' },
 { id: 'phone', label: 'هاتف' },
 ],
 brokenStages: [
 { step: 1, title: 'وصول العميل المحتمل', description: 'العملاء يصلون لصناديق مختلفة. لا رؤية موحدة.', leak: 'مبعثر. لا رؤية واحدة.' },
 { step: 2, title: 'أول اتصال', description: 'بريد صوتي. رسائل معلقة. 78٪ يشترون من أول رد.', leak: '62 ضائعون: بطيء، لا 24/7.' },
 { step: 3, title: 'التأهيل', description: 'يدوي. ممثلون مختلفون، أسئلة مختلفة.', leak: '26 ضائعون: غير متسق.' },
 { step: 4, title: 'محاولة الحجز', description: 'فوضى التسليم. تبادل مواعيد.', leak: '7 ضائعون: تسليم يدوي.' },
 { step: 5, title: 'المتابعة', description: 'لا نظام. العملاء يضيعون.', leak: '3 ضائعون: صفر متابعة.' },
 { step: 6, title: 'النتيجة', description: 'العملاء يبردون. المنافسون يفوزون.', leak: '1 ضائع. المنافس يغلق.' },
 { step: 7, title: 'الإحالات', description: 'لا حلقة. النمو يتوقف.', leak: '0 إحالات.' },
 ],
 aiStages: [
 { step: 1, title: 'وصول العميل المحتمل', description: 'جميع القنوات → نظام واحد. رؤية واحدة.', win: '100 مُلتقط.' },
 { step: 2, title: 'استجابة فورية', description: 'أقل من ثانيتين. 24/7. لا بريد صوتي.', win: '100 تم الوصول. 0 ضائع.' },
 { step: 3, title: 'تأهيل ذكي', description: 'الأسئلة الصحيحة. المشترون الجاهزون فقط.', win: '100 مؤهل.' },
 { step: 4, title: 'حجز تلقائي', description: 'اختر الموعد. مزامنة. محجوز.', win: '100 محجوز.' },
 { step: 5, title: 'المتابعة', description: 'حتى يحجزوا أو يرفضوا.', win: '0 تسرب.' },
 { step: 6, title: 'النتيجة', description: 'مُلتقط. مؤهل. مُغلق.', win: '95 مُغلق.' },
 { step: 7, title: 'الإحالات', description: 'العملاء يحيلون. الحلقة تستمر.', win: '+23 إحالة.' },
 ],
 }

 const clientJourneyDe: ClientJourneyTranslations = {
 badge: 'Ergebnis',
 title: '100 Leads kommen rein.',
 subtitle: 'Dann 99 verloren, oder 95 Abschluss.',
 subtext:
 'Zwei Trichter verfolgen eine Charge (Anzeigen, Website, Instagram, WhatsApp, Telefon). Pro Stufe zeigt die große Zahl, wie viele noch in der Pipeline sind; Rot = Verlust in genau diesem Schritt.',
 beforeSectionBadge: 'Vorher',
 beforeSectionSubtext:
 'Manueller Eingang, langsame Antwort, Übergaben, dieselben 100 Leads, die meisten kommen nicht durch.',
 afterSectionBadge: 'Nachher',
 afterSectionSubtext:
 'Ein System erfasst, qualifiziert, bucht und folgt nach, Empfehlungen speisen die Schleife.',
 brokenLabel: 'Der Verlust',
 aiFlowLabel: 'Die Schleife',
 funnelLegend: 'Dieselbe 100er Charge · große Zahl = noch in der Pipeline nach dieser Stufe',
 funnelSectionIntake: 'Eingang',
 funnelSectionConversion: 'Conversion',
 funnelSectionOutcome: 'Ergebnis & Schleife',
 funnelPipelineLabel: 'In der Pipeline',
 funnelColumnLost: 'Verlust',
 funnelColumnNet: 'Netto',
 funnelLostBadge: 'verloren',
 funnelReferralBadge: 'Empfehlungen',
 funnelLeadsUnit: 'Leads',
 funnelAtStage: 'bei',
 funnelClosed: 'abgeschlossen',
 funnelNoDropThisStep: 'Kein Verlust in diesem Schritt',
 viewPipeline: 'Interaktive Pipeline anzeigen',
 hidePipeline: 'Pipeline ausblenden',
 channels: [
 { id: 'ads', label: 'Bezahlte Anzeigen' },
 { id: 'website', label: 'Website' },
 { id: 'instagram', label: 'Instagram' },
 { id: 'whatsapp', label: 'WhatsApp' },
 { id: 'phone', label: 'Telefon' },
 ],
 brokenStages: [
 { step: 1, title: 'Lead kommt', description: 'Leads landen in verschiedenen Postfächern. Keine einheitliche Sicht.', leak: 'Verstreut. Keine einheitliche Sicht.' },
 { step: 2, title: 'Erster Kontakt', description: 'Mailbox. E Mails warten. 78% kaufen beim ersten Kontakt.', leak: '62 verloren: langsam, kein 24/7.' },
 { step: 3, title: 'Qualifizierung', description: 'Manuell. Verschiedene Vertreter, verschiedene Fragen.', leak: '26 verloren: inkonsistent.' },
 { step: 4, title: 'Buchungsversuch', description: 'Übergabe Chaos. Kalender hin und her.', leak: '7 verloren: manuelle Übergaben.' },
 { step: 5, title: 'Nachverfolgung', description: 'Kein System. Leads fallen durch.', leak: '3 verloren: keine Nachverfolgung.' },
 { step: 6, title: 'Ergebnis', description: 'Leads werden kalt. Konkurrenten gewinnen.', leak: '1 verloren. Konkurrent schließt.' },
 { step: 7, title: 'Empfehlungen', description: 'Keine Schleife. Wachstum stagniert.', leak: '0 Empfehlungen.' },
 ],
 aiStages: [
 { step: 1, title: 'Lead kommt', description: 'Alle Kanäle → ein System. Eine Sicht.', win: '100 erfasst.' },
 { step: 2, title: 'Sofortige Antwort', description: 'Unter 2 Sek. 24/7. Keine Mailbox.', win: '100 erreicht. 0 verloren.' },
 { step: 3, title: 'Intelligente Qualifizierung', description: 'Richtige Fragen. Nur kaufbereite Kunden.', win: '100 qualifiziert.' },
 { step: 4, title: 'Auto Buchung', description: 'Slot wählen. Sync. Gebucht.', win: '100 gebucht.' },
 { step: 5, title: 'Nachverfolgung', description: 'Bis sie buchen oder ablehnen.', win: '0 kalte Abbrüche.' },
 { step: 6, title: 'Ergebnis', description: 'Erfasst. Qualifiziert. Abgeschlossen.', win: '95 abgeschlossen.' },
 { step: 7, title: 'Empfehlungen', description: 'Kunden empfehlen. Schleife geht weiter.', win: '+23 Empfehlungen.' },
 ],
 }

 const clientJourneyEs: ClientJourneyTranslations = {
 badge: 'Resultado',
 title: 'Entran 100 leads.',
 subtitle: 'Luego 99 se pierden, o 95 cierran.',
 subtext:
 'Dos embudos siguen un mismo lote (anuncios, web, Instagram, WhatsApp, teléfono). En cada paso, el número grande = cuántos siguen en tu pipeline; lo rojo = lo que perdiste ahí.',
 beforeSectionBadge: 'Antes',
 beforeSectionSubtext:
 'Entrada manual, respuesta lenta, traspasos, los mismos 100 leads, la mayoría no llega al final.',
 afterSectionBadge: 'Después',
 afterSectionSubtext: 'Un sistema captura, califica, reserva y hace seguimiento, las referencias alimentan el bucle.',
 brokenLabel: 'La fuga',
 aiFlowLabel: 'El bucle',
 funnelLegend: 'Mismo lote de 100 · número grande = aún en pipeline tras este paso',
 funnelSectionIntake: 'Entrada',
 funnelSectionConversion: 'Conversión',
 funnelSectionOutcome: 'Resultado y bucle',
 funnelPipelineLabel: 'En embudo',
 funnelColumnLost: 'Fuga',
 funnelColumnNet: 'Neto',
 funnelLostBadge: 'perdidos',
 funnelReferralBadge: 'referidos',
 funnelLeadsUnit: 'leads',
 funnelAtStage: 'en',
 funnelClosed: 'cerrados',
 funnelNoDropThisStep: 'Sin pérdida en este paso',
 viewPipeline: 'Ver embudo interactivo',
 hidePipeline: 'Ocultar embudo',
 channels: [
 { id: 'ads', label: 'Anuncios pagados' },
 { id: 'website', label: 'Sitio web' },
 { id: 'instagram', label: 'Instagram' },
 { id: 'whatsapp', label: 'WhatsApp' },
 { id: 'phone', label: 'Teléfono' },
 ],
 brokenStages: [
 { step: 1, title: 'Llega el lead', description: 'Los leads llegan a diferentes bandejas. Sin vista unificada.', leak: 'Dispersos. Sin vista única.' },
 { step: 2, title: 'Primer contacto', description: 'Buzón de voz. Emails esperan. 78% compran al primer contacto.', leak: '62 perdidos: lento, sin 24/7.' },
 { step: 3, title: 'Calificación', description: 'Manual. Diferentes representantes, diferentes preguntas.', leak: '26 perdidos: inconsistente.' },
 { step: 4, title: 'Intento de reserva', description: 'Caos de traspaso. Calendario de ida y vuelta.', leak: '7 perdidos: traspasos manuales.' },
 { step: 5, title: 'Seguimiento', description: 'Sin sistema. Los leads se pierden.', leak: '3 perdidos: cero seguimiento.' },
 { step: 6, title: 'Resultado', description: 'Leads se enfrían. Competidores ganan.', leak: '1 perdido. Competidor cierra.' },
 { step: 7, title: 'Referencias', description: 'Sin bucle. El crecimiento se estanca.', leak: '0 referencias.' },
 ],
 aiStages: [
 { step: 1, title: 'Llega el lead', description: 'Todos los canales → un sistema. Una vista.', win: '100 capturados.' },
 { step: 2, title: 'Respuesta instantánea', description: 'Menos de 2 seg. 24/7. Sin buzón de voz.', win: '100 alcanzados. 0 perdidos.' },
 { step: 3, title: 'Calificación inteligente', description: 'Preguntas correctas. Solo compradores listos.', win: '100 calificados.' },
 { step: 4, title: 'Auto reserva', description: 'Elegir horario. Sincronizar. Reservado.', win: '100 reservados.' },
 { step: 5, title: 'Seguimiento', description: 'Hasta que reserven o digan no.', win: '0 abandonos fríos.' },
 { step: 6, title: 'Resultado', description: 'Capturado. Calificado. Cerrado.', win: '95 cerrados.' },
 { step: 7, title: 'Referencias', description: 'Los clientes refieren. El bucle continúa.', win: '+23 referencias.' },
 ],
 }

 const futureReadyGraduateEn: FutureReadyGraduateTranslations = {
 heroBadge: 'For school leaders measured on outcomes',
 heroTitleLine1: 'Your Students Spend Years in School.',
 heroTitleHighlight: 'Employers Still Say Not Ready.',
 heroAlternateTitle: '45% still jobless at 12 months—or graduates employers actually hire',
 heroDescription: 'A degree is not the destination. A hired graduate is. Nearly half still jobless at 12 months isn’t “the market”—it’s a skills gap you can close before they leave. We don’t sell another course. We sell employment-ready proof—portfolios employers hire (85% across partner schools). We can’t guarantee every student gets hired—of course not. But everything we build serves the one outcome schools are judged on: graduates who get the job.',
 calendarTitle: 'Designed for the',
 calendarTitleHighlight: 'National Academic Calendar',
 calendarSubtitle: 'September to July. Fits your school year. Respects breaks.',
 fullSchoolYear: 'Full School Year',
 fullSchoolYearDesc: 'September to July (222 school days)',
 threeTrimesters: 'Three Trimesters',
 threeTrimestersDesc: 'Structured around ministry breaks',
 seamlessIntegration: 'Seamless Integration',
 seamlessIntegrationDesc: 'No disruption to existing curriculum',
 academicYearIntegration: '2025 2026 Academic Year Integration',
 programStart: 'Program Start',
 programStartDate: 'Monday, September 1, 2025',
 respectsBreaks: 'Respects All Breaks',
 respectsBreaksDates: 'October, Christmas, February & Easter',
 graduationReady: 'Graduation Ready',
 graduationReadyDate: 'July 2 4, 2026',
 focusArea: 'Focus Area',
 duration: 'Duration',
 coreModules: 'Core Modules',
 firstTrimester: 'First Trimester',
 secondTrimester: 'Second Trimester',
 thirdTrimester: 'Third Trimester',
 educationPrefix: 'Traditional Education ',
 educationFails: 'Leaves Graduates Exposed',
 digitalEconomyPrefix: 'Employers Hiring for ',
 digitalThrives: 'AI-Ready Proof',
 educationFailsSubtitle: 'Your school runs every term. Your reputation is measured on who gets hired after—not who collected a diploma.',
 traditionalCrisis: 'The unemployed cohort',
 traditionalCrisisDesc: 'The harsh reality when graduates leave without hire-ready proof',
 digitalBoom: 'Employers hiring for proof',
 digitalBoomDesc: 'The demand for portfolio-backed, AI-ready graduates',
 whyDigitalSkills: 'Why schools choose this destination',
 whyDigitalSkillsDesc: 'Not more certificates—graduates who can earn, work, and prove they are hire-ready. The freedom to grow differently, plus the portfolio proof employers ask for.',
 globalLeaders: 'Global Leaders',
 globalLeadersHighlight: 'Supporting Our Mission',
 globalLeadersSubtitle: 'Listen to world renowned figures discuss the same principles and values that drive our Future Ready Graduate Program, job creation, entrepreneurial development, and personalized learning that brings out everyone\'s talents.',
 highDemandSkills: 'Skills Employers',
 highDemandSkillsHighlight: 'Actually Hire For',
 highDemandSkillsSubtitle: 'The digital economy pays for proof, not theory. Students learn by shipping real work—so they leave with portfolios employers recognize, not tool names on a slide.',
 aiCareerPathsTitle: 'Untold AI careers you can start now',
 aiCareerPathsSubtitle: 'Not trending on LinkedIn yet, but clients already hire for these roles. Each path includes a free career guide with prompts, tools, and a 30 day start plan.',
 aiCareerGuideLabel: 'Read guide',
 aiAdvantage: 'Proof over tools',
 aiAdvantageDesc: 'Modern AI helps beginners ship faster—but the destination is still the same: portfolio-backed graduates employers hire, not another list of apps.',
 partnershipRequirements: 'Partnership',
 partnershipRequirementsHighlight: 'Requirements',
 partnershipRequirementsDesc: 'A successful partnership requires commitment from both sides. Here\'s what we each bring to ensure student success.',
 whatSchoolsProvide: 'What Schools Provide',
 whatSchoolsProvideDesc: 'Your essential contributions to the partnership',
 whatWeProvide: 'What We Provide',
 whatWeProvideDesc: 'Our comprehensive support and resources',
 provenResults: 'Proven Results',
 provenResultsHighlight: 'Across Africa',
 readyToTransform: 'Another Unemployed Cohort—or Graduates Who Get Hired?',
 readyToTransformDesc: 'We can’t guarantee every student gets a job—of course not. But we’ve done everything to make hired graduates the default outcome. See if this program fits your school.',
 threePaths: 'Three Paths to',
 threePathsHighlight: 'Hired Graduates',
 threePathsSubtitle: 'Choose how you unlock employment-ready proof for your students.',
 forSchools: 'FOR SCHOOLS',
 forProfessional: 'FOR PROFESSIONAL INSTITUTES',
 guidedLearning: 'GUIDED LEARNING',
 newLabel: 'NEW',
 onlySpotsAvailable: 'Only {count} spots available',
 noOneLeftBehind: 'No one gets left behind.',
 }

 const futureReadyGraduateFr: FutureReadyGraduateTranslations = {
 heroBadge: 'Pour les dirigeants d’écoles jugés sur les résultats',
 heroTitleLine1: 'Vos étudiants passent des années à l’école.',
 heroTitleHighlight: 'Les employeurs disent encore « pas prêt ».',
 heroAlternateTitle: '45 % encore sans emploi à 12 mois—ou des diplômés que les employeurs embauchent vraiment',
 heroDescription: 'Le diplôme n’est pas la destination. Un diplômé embauché, si. Près de la moitié sans emploi à 12 mois, ce n’est pas « le marché »—c’est un écart de compétences que vous pouvez fermer avant qu’ils partent. Nous ne vendons pas un cours de plus. Nous vendons la preuve employable—des portfolios que les employeurs recrutent (85 % dans les écoles partenaires). Nous ne pouvons pas garantir que chaque étudiant soit embauché—évidemment. Mais tout ce que nous construisons sert le seul résultat sur lequel les écoles sont jugées : des diplômés qui décrochent le poste.',
 calendarTitle: 'Conçu pour le',
 calendarTitleHighlight: 'Calendrier académique national',
 calendarSubtitle: 'De septembre à juillet. S\'adapte à votre année scolaire. Respecte les vacances.',
 fullSchoolYear: 'Année scolaire complète',
 fullSchoolYearDesc: 'Septembre à juillet (222 jours d\'école)',
 threeTrimesters: 'Trois trimestres',
 threeTrimestersDesc: 'Structuré autour des vacances ministérielles',
 seamlessIntegration: 'Intégration transparente',
 seamlessIntegrationDesc: 'Aucune perturbation du programme existant',
 academicYearIntegration: 'Intégration année académique 2025 2026',
 programStart: 'Début du programme',
 programStartDate: 'Lundi 1er septembre 2025',
 respectsBreaks: 'Respecte toutes les vacances',
 respectsBreaksDates: 'Octobre, Noël, février et Pâques',
 graduationReady: 'Prêt pour la remise des diplômes',
 graduationReadyDate: '2 4 juillet 2026',
 focusArea: 'Domaine d\'étude',
 duration: 'Durée',
 coreModules: 'Modules principaux',
 firstTrimester: 'Premier trimestre',
 secondTrimester: 'Deuxième trimestre',
 thirdTrimester: 'Troisième trimestre',
 educationPrefix: 'L\'éducation traditionnelle ',
 educationFails: 'laisse les diplômés exposés',
 digitalEconomyPrefix: 'Les employeurs cherchent ',
 digitalThrives: 'une preuve IA-ready',
 educationFailsSubtitle: 'Votre école tourne chaque trimestre. Vos résultats à la sortie ne suivent pas—sauf si vous comblez l\'écart avant qu\'ils partent.',
 traditionalCrisis: 'Crise de l\'éducation traditionnelle',
 traditionalCrisisDesc: 'La dure réalité des résultats de fin d\'études conventionnels',
 digitalBoom: 'Boom de l\'économie numérique',
 digitalBoomDesc: 'La croissance explosive des opportunités numériques à distance',
 whyDigitalSkills: 'Les avantages de devenir certifié prêt pour l\'avenir',
 whyDigitalSkillsDesc: 'Six raisons concrètes qui rendent cette certification importante : la liberté de gagner, travailler et évoluer autrement, avec une preuve prête pour l\'IA.',
 globalLeaders: 'Leaders mondiaux',
 globalLeadersHighlight: 'qui soutiennent notre mission',
 globalLeadersSubtitle: 'Écoutez des figures de renommée mondiale discuter des mêmes principes et valeurs qui animent notre Programme Diplômé Prêt pour l\'Avenir, création d\'emplois, développement entrepreneurial et apprentissage personnalisé qui révèle les talents de chacun.',
 highDemandSkills: 'Compétences numériques très demandées',
 highDemandSkillsHighlight: 'qui paient vraiment',
 highDemandSkillsSubtitle: 'L\'économie numérique explose d\'opportunités. Avec les outils IA 2026 comme Lovable.dev, Cursor et les plateformes IA avancées, les débutants peuvent désormais rivaliser avec des professionnels de niveau expert dans ces domaines lucratifs, s\'ils maîtrisent les bonnes compétences propulsées par l\'IA.',
 aiCareerPathsTitle: 'Métiers IA méconnus que vous pouvez lancer maintenant',
 aiCareerPathsSubtitle: 'Pas encore tendance sur LinkedIn, mais les clients embauchent déjà. Chaque parcours inclut un guide gratuit avec prompts, outils et plan sur 30 jours.',
 aiCareerGuideLabel: 'Lire le guide',
 aiAdvantage: 'L\'avantage IA 2026',
 aiAdvantageDesc: 'Avec les outils IA 2026 de pointe comme Lovable.dev et Cursor, vos étudiants peuvent rivaliser avec des professionnels de niveau expert dès le premier jour et commencer à gagner immédiatement.',
 partnershipRequirements: 'Exigences',
 partnershipRequirementsHighlight: 'du partenariat',
 partnershipRequirementsDesc: 'Un partenariat réussi nécessite l\'engagement des deux parties. Voici ce que chacun apporte pour assurer la réussite des étudiants.',
 whatSchoolsProvide: 'Ce que les écoles fournissent',
 whatSchoolsProvideDesc: 'Vos contributions essentielles au partenariat',
 whatWeProvide: 'Ce que nous fournissons',
 whatWeProvideDesc: 'Notre soutien et nos ressources complets',
 provenResults: 'Résultats prouvés',
 provenResultsHighlight: 'À travers l\'Afrique',
 readyToTransform: 'Une autre cohorte au chômage—ou des diplômés embauchés ?',
 readyToTransformDesc: 'Nous ne pouvons pas garantir que chaque étudiant soit embauché—évidemment. Mais nous avons tout conçu pour que des diplômés embauchés deviennent le résultat par défaut. Voyons si ce programme convient à votre école.',
 threePaths: 'Trois chemins vers',
 threePathsHighlight: 'des diplômés embauchés',
 threePathsSubtitle: 'Choisissez comment débloquer la preuve employable pour vos étudiants.',
 forSchools: 'POUR LES ÉCOLES',
 forProfessional: 'POUR LES INSTITUTS PROFESSIONNELS',
 guidedLearning: 'APPRENTISSAGE GUIDÉ',
 newLabel: 'NOUVEAU',
 onlySpotsAvailable: 'Il ne reste que {count} places',
 noOneLeftBehind: 'Personne n\'est laissé pour compte.',
 }

 const futureReadyGraduateEs: FutureReadyGraduateTranslations = {
 heroBadge: 'Para líderes escolares medidos por resultados',
 heroTitleLine1: 'Sus estudiantes pasan años en la escuela.',
 heroTitleHighlight: 'Los empleadores aún dicen « no listo ».',
 heroAlternateTitle: '45% aún sin empleo a los 12 meses—o graduados que los empleadores sí contratan',
 heroDescription: 'El título no es el destino. Un graduado contratado, sí. Casi la mitad sin empleo a los 12 meses no es «el mercado»—es una brecha de habilidades que puede cerrar antes de que se vayan. No vendemos otro curso. Vendemos prueba lista para el empleo—portafolios que los empleadores contratan (85% en escuelas socias). No podemos garantizar que cada estudiante sea contratado—claro que no. Pero todo lo que construimos sirve al único resultado por el que se juzga a las escuelas: graduados que consiguen el puesto.',
 calendarTitle: 'Diseñado para el',
 calendarTitleHighlight: 'calendario académico nacional',
 calendarSubtitle: 'De septiembre a julio. Encaja con el año escolar. Respeta los descansos.',
 fullSchoolYear: 'Año escolar completo',
 fullSchoolYearDesc: 'De septiembre a julio (222 días lectivos)',
 threeTrimesters: 'Tres trimestres',
 threeTrimestersDesc: 'Estructurado alrededor de las pausas ministeriales',
 seamlessIntegration: 'Integración sin interrupciones',
 seamlessIntegrationDesc: 'Sin alterar el currículo existente',
 academicYearIntegration: 'Integración del año académico 2025 2026',
 programStart: 'Inicio del programa',
 programStartDate: 'Lunes, 1 de septiembre de 2025',
 respectsBreaks: 'Respeta todos los descansos',
 respectsBreaksDates: 'Octubre, Navidad, febrero y Semana Santa',
 graduationReady: 'Listo para la graduación',
 graduationReadyDate: '2 4 de julio de 2026',
 focusArea: 'Área de enfoque',
 duration: 'Duración',
 coreModules: 'Módulos principales',
 firstTrimester: 'Primer trimestre',
 secondTrimester: 'Segundo trimestre',
 thirdTrimester: 'Tercer trimestre',
 educationPrefix: 'La educación tradicional ',
 educationFails: 'deja graduados expuestos',
 digitalEconomyPrefix: 'Los empleadores contratan por ',
 digitalThrives: 'prueba IA-ready',
 educationFailsSubtitle: 'Su escuela funciona cada trimestre. Sus resultados de egreso no siguen el ritmo—a menos que cierre la brecha antes de que se vayan.',
 traditionalCrisis: 'Crisis de la educación tradicional',
 traditionalCrisisDesc: 'La dura realidad de los resultados convencionales al graduarse',
 digitalBoom: 'Boom de la economía digital',
 digitalBoomDesc: 'El crecimiento explosivo de oportunidades digitales remotas',
 whyDigitalSkills: 'Ventajas de certificarse como Future Ready',
 whyDigitalSkillsDesc: 'Seis razones prácticas por las que esta certificación importa: libertad para ganar, trabajar y crecer de otra manera, más una prueba lista para IA que da confianza.',
 globalLeaders: 'Líderes globales',
 globalLeadersHighlight: 'que apoyan nuestra misión',
 globalLeadersSubtitle: 'Escucha a figuras reconocidas hablar de los mismos principios que impulsan nuestro Programa Future Ready Graduate: creación de empleo, desarrollo emprendedor y aprendizaje personalizado que revela los talentos de cada persona.',
 highDemandSkills: 'Habilidades digitales de alta demanda',
 highDemandSkillsHighlight: 'que realmente pagan',
 highDemandSkillsSubtitle: 'La economía digital está explotando en oportunidades. Con herramientas de IA 2026 como Lovable.dev, Cursor y plataformas avanzadas, los principiantes ya pueden competir con profesionales expertos si dominan las habilidades correctas impulsadas por IA.',
 aiCareerPathsTitle: 'Carreras con IA poco conocidas que puedes empezar ya',
 aiCareerPathsSubtitle: 'Aún no son tendencia en LinkedIn, pero ya contratan. Cada ruta incluye una guía gratuita con prompts, herramientas y plan de 30 días.',
 aiCareerGuideLabel: 'Leer guía',
 aiAdvantage: 'La ventaja IA de 2026',
 aiAdvantageDesc: 'Con herramientas de IA de vanguardia como Lovable.dev y Cursor, tus estudiantes pueden competir con profesionales expertos desde el primer día y empezar a generar ingresos de inmediato.',
 partnershipRequirements: 'Requisitos',
 partnershipRequirementsHighlight: 'de la alianza',
 partnershipRequirementsDesc: 'Una alianza exitosa exige compromiso de ambas partes. Esto es lo que cada uno aporta para asegurar el éxito de los estudiantes.',
 whatSchoolsProvide: 'Lo que aportan las escuelas',
 whatSchoolsProvideDesc: 'Tus contribuciones esenciales a la alianza',
 whatWeProvide: 'Lo que aportamos nosotros',
 whatWeProvideDesc: 'Nuestro apoyo y recursos completos',
 provenResults: 'Resultados comprobados',
 provenResultsHighlight: 'en toda África',
 readyToTransform: '¿Listo para transformar los resultados de tus estudiantes?',
 readyToTransformDesc: 'Hablemos de cómo el Programa Future Ready Graduate puede funcionar en tu institución. Revisa el currículo y las métricas de éxito en una consulta personalizada.',
 threePaths: 'Tres caminos hacia',
 threePathsHighlight: 'el éxito digital',
 threePathsSubtitle: 'Elige el camino que encaja con tus necesidades.',
 forSchools: 'PARA ESCUELAS',
 forProfessional: 'PARA INSTITUTOS PROFESIONALES',
 guidedLearning: 'APRENDIZAJE GUIADO',
 newLabel: 'NUEVO',
 onlySpotsAvailable: 'Solo quedan {count} plazas',
 noOneLeftBehind: 'Nadie se queda atrás.',
 }

 const futureReadyGraduateDe: FutureReadyGraduateTranslations = {
 heroBadge: 'Für Schulleitungen, die an Outcomes gemessen werden',
 heroTitleLine1: 'Ihre Studierenden verbringen Jahre in der Schule.',
 heroTitleHighlight: 'Arbeitgeber sagen noch « nicht bereit ».',
 heroAlternateTitle: '45 % nach 12 Monaten noch ohne Job—oder Absolventen, die Arbeitgeber wirklich einstellen',
 heroDescription: 'Der Abschluss ist nicht das Ziel. Ein eingestellter Absolvent schon. Fast die Hälfte ohne Job nach 12 Monaten ist nicht „der Markt“—es ist eine Skill-Lücke, die Sie schließen können, bevor sie gehen. Wir verkaufen keinen weiteren Kurs. Wir verkaufen beschäftigungsfertige Beweise—Portfolios, für die Arbeitgeber einstellen (85 % an Partnerschulen). Wir können nicht garantieren, dass jeder Studierende eingestellt wird—natürlich nicht. Aber alles, was wir bauen, dient dem einen Outcome, an dem Schulen gemessen werden: Absolventen, die den Job bekommen.',
 calendarTitle: 'Entwickelt für den',
 calendarTitleHighlight: 'nationalen akademischen Kalender',
 calendarSubtitle: 'September bis Juli. Passt zum Schuljahr. Respektiert Ferien.',
 fullSchoolYear: 'Volles Schuljahr',
 fullSchoolYearDesc: 'September bis Juli (222 Schultage)',
 threeTrimesters: 'Drei Trimester',
 threeTrimestersDesc: 'Strukturiert rund um ministerielle Pausen',
 seamlessIntegration: 'Nahtlose Integration',
 seamlessIntegrationDesc: 'Keine Störung des bestehenden Lehrplans',
 academicYearIntegration: 'Integration ins akademische Jahr 2025 2026',
 programStart: 'Programmstart',
 programStartDate: 'Montag, 1. September 2025',
 respectsBreaks: 'Respektiert alle Pausen',
 respectsBreaksDates: 'Oktober, Weihnachten, Februar & Ostern',
 graduationReady: 'Bereit zur Abschlussfeier',
 graduationReadyDate: '2. to 4. Juli 2026',
 focusArea: 'Schwerpunkt',
 duration: 'Dauer',
 coreModules: 'Kernmodule',
 firstTrimester: 'Erstes Trimester',
 secondTrimester: 'Zweites Trimester',
 thirdTrimester: 'Drittes Trimester',
 educationPrefix: 'Traditionelle Bildung ',
 educationFails: 'lässt Absolventen offen',
 digitalEconomyPrefix: 'Arbeitgeber stellen nach ',
 digitalThrives: 'KI-fertigem Nachweis ein',
 educationFailsSubtitle: 'Ihre Schule läuft jedes Trimester. Ihre Abschlussergebnisse halten nicht mit—es sei denn, Sie schließen die Lücke, bevor sie gehen.',
 traditionalCrisis: 'Krise der traditionellen Bildung',
 traditionalCrisisDesc: 'Die harte Realität konventioneller Abschlussresultate',
 digitalBoom: 'Boom der digitalen Wirtschaft',
 digitalBoomDesc: 'Das explosive Wachstum digitaler Remote Chancen',
 whyDigitalSkills: 'Vorteile einer Future Ready Zertifizierung',
 whyDigitalSkillsDesc: 'Sechs praktische Gründe, warum diese Zertifizierung zählt: Freiheit, anders zu verdienen, zu arbeiten und zu wachsen, plus KI bereiter Nachweis für sicheres Handeln.',
 globalLeaders: 'Globale Führungspersönlichkeiten',
 globalLeadersHighlight: 'die unsere Mission unterstützen',
 globalLeadersSubtitle: 'Hören Sie weltweit anerkannte Persönlichkeiten über dieselben Prinzipien sprechen, die unser Future Ready Graduate Program antreiben: Jobschaffung, unternehmerische Entwicklung und personalisiertes Lernen, das Talente sichtbar macht.',
 highDemandSkills: 'Gefragte digitale Kompetenzen',
 highDemandSkillsHighlight: 'die wirklich bezahlt werden',
 highDemandSkillsSubtitle: 'Die digitale Wirtschaft explodiert vor Chancen. Mit KI Tools 2026 wie Lovable.dev, Cursor und fortschrittlichen Plattformen können Anfänger mit Experten konkurrieren, wenn sie die richtigen KI gestützten Fähigkeiten beherrschen.',
 aiCareerPathsTitle: 'Unbekannte KI Karrieren, die Sie jetzt starten können',
 aiCareerPathsSubtitle: 'Noch kein LinkedIn Trend, aber Kunden stellen bereits ein. Jeder Pfad hat einen kostenlosen Leitfaden mit Prompts, Tools und 30 Tage Plan.',
 aiCareerGuideLabel: 'Leitfaden lesen',
 aiAdvantage: 'Der KI Vorteil 2026',
 aiAdvantageDesc: 'Mit modernsten KI Tools wie Lovable.dev und Cursor können Ihre Studierenden ab Tag eins mit Fachleuten auf Expertenniveau konkurrieren und sofort beginnen, Einkommen zu erzielen.',
 partnershipRequirements: 'Anforderungen',
 partnershipRequirementsHighlight: 'an die Partnerschaft',
 partnershipRequirementsDesc: 'Eine erfolgreiche Partnerschaft braucht Engagement auf beiden Seiten. Das bringen wir jeweils ein, damit Studierende erfolgreich sind.',
 whatSchoolsProvide: 'Was Schulen bereitstellen',
 whatSchoolsProvideDesc: 'Ihre wesentlichen Beiträge zur Partnerschaft',
 whatWeProvide: 'Was wir bereitstellen',
 whatWeProvideDesc: 'Unsere umfassende Unterstützung und Ressourcen',
 provenResults: 'Bewährte Ergebnisse',
 provenResultsHighlight: 'in ganz Afrika',
 readyToTransform: 'Bereit, die Ergebnisse Ihrer Studierenden zu verändern?',
 readyToTransformDesc: 'Lassen Sie uns besprechen, wie das Future Ready Graduate Program für Ihre Institution funktionieren kann. Sehen Sie Lehrplandetails und Erfolgskennzahlen in einer persönlichen Beratung.',
 threePaths: 'Drei Wege zum',
 threePathsHighlight: 'digitalen Erfolg',
 threePathsSubtitle: 'Wählen Sie den Weg, der zu Ihren Anforderungen passt.',
 forSchools: 'FÜR SCHULEN',
 forProfessional: 'FÜR BERUFSINSTITUTE',
 guidedLearning: 'GEFÜHRTES LERNEN',
 newLabel: 'NEU',
 onlySpotsAvailable: 'Nur noch {count} Plätze verfügbar',
 noOneLeftBehind: 'Niemand bleibt zurück.',
 }

 const futureReadyGraduateAr: FutureReadyGraduateTranslations = {
 heroBadge: 'لقادة المدارس الذين يُقاسون بالنتائج',
 heroTitleLine1: 'طلابك يقضون سنوات في المدرسة.',
 heroTitleHighlight: 'أصحاب العمل ما زالوا يقولون « غير جاهز ».',
 heroAlternateTitle: '45% ما زالوا بلا عمل بعد 12 شهراً—أو خرّيجون يوظّفهم أصحاب العمل فعلاً',
 heroDescription: 'الشهادة ليست الوجهة. الخرّيج الموظَّف هو الوجهة. ما يقرب من النصف بلا عمل بعد 12 شهراً ليس «السوق»—إنها فجوة مهارات يمكن إغلاقها قبل أن يغادروا. نحن لا نبيع مقرراً آخر. نبيع إثباتاً جاهزاً للتوظيف—ملفات يوظّف لها أصحاب العمل (85% في المدارس الشريكة). لا نستطيع أن نضمن توظيف كل طالب—طبعاً لا. لكن كل ما نبنيه يخدم النتيجة الوحيدة التي تُقاس بها المدارس: خرّيجون يحصلون على الوظيفة.',
 calendarTitle: 'مصمم ليتناسب مع',
 calendarTitleHighlight: 'التقويم الأكاديمي الوطني',
 calendarSubtitle: 'من سبتمبر إلى يوليو. يناسب العام الدراسي. ويحترم فترات الاستراحة.',
 fullSchoolYear: 'عام دراسي كامل',
 fullSchoolYearDesc: 'من سبتمبر إلى يوليو (222 يوم دراسة)',
 threeTrimesters: 'ثلاثة فصول',
 threeTrimestersDesc: 'منظم حول العطل الوزارية',
 seamlessIntegration: 'تكامل سلس',
 seamlessIntegrationDesc: 'بدون تعطيل للمنهج الحالي',
 academicYearIntegration: 'تكامل العام الأكاديمي 2025 2026',
 programStart: 'بداية البرنامج',
 programStartDate: 'الاثنين، 1 سبتمبر 2025',
 respectsBreaks: 'يحترم كل فترات الاستراحة',
 respectsBreaksDates: 'أكتوبر، عيد الميلاد، فبراير وعيد الفصح',
 graduationReady: 'جاهز للتخرج',
 graduationReadyDate: '2 4 يوليو 2026',
 focusArea: 'مجال التركيز',
 duration: 'المدة',
 coreModules: 'الوحدات الأساسية',
 firstTrimester: 'الفصل الأول',
 secondTrimester: 'الفصل الثاني',
 thirdTrimester: 'الفصل الثالث',
 educationPrefix: 'التعليم التقليدي ',
 educationFails: 'يترك الخريجين معرّضين',
 digitalEconomyPrefix: 'أصحاب العمل يوظّفون بناءً على ',
 digitalThrives: 'إثبات جاهزية للذكاء الاصطناعي',
 educationFailsSubtitle: 'مدرستك تعمل كل فصل. نتائج خريجيك لا تواكب—إلا إذا سددت الفجوة قبل مغادرتهم.',
 traditionalCrisis: 'أزمة التعليم التقليدي',
 traditionalCrisisDesc: 'الواقع الصعب لنتائج التخرج التقليدية',
 digitalBoom: 'ازدهار الاقتصاد الرقمي',
 digitalBoomDesc: 'النمو الهائل لفرص العمل الرقمية عن بعد',
 whyDigitalSkills: 'مزايا الحصول على شهادة Future Ready',
 whyDigitalSkillsDesc: 'ستة أسباب عملية تجعل هذه الشهادة مهمة: حرية الكسب والعمل والنمو بطريقة مختلفة، مع دليل جاهز لعصر الذكاء الاصطناعي يمنح الثقة.',
 globalLeaders: 'قادة عالميون',
 globalLeadersHighlight: 'يدعمون رسالتنا',
 globalLeadersSubtitle: 'استمع إلى شخصيات عالمية تتحدث عن المبادئ نفسها التي تقود برنامج Future Ready Graduate: خلق الوظائف، تطوير روح المبادرة، والتعلم الشخصي الذي يكشف مواهب كل فرد.',
 highDemandSkills: 'مهارات رقمية عالية الطلب',
 highDemandSkillsHighlight: 'تدر دخلاً حقيقياً',
 highDemandSkillsSubtitle: 'الاقتصاد الرقمي مليء بالفرص. مع أدوات الذكاء الاصطناعي لعام 2026 مثل Lovable.dev وCursor والمنصات المتقدمة، يستطيع المبتدئون منافسة المحترفين إذا أتقنوا المهارات الصحيحة المدعومة بالذكاء الاصطناعي.',
 aiCareerPathsTitle: 'مسارات مهنية بالذكاء الاصطناعي يمكنك البدء بها الآن',
 aiCareerPathsSubtitle: 'لم تنتشر بعد على LinkedIn, لكن العملاء يوظّفون بالفعل. كل مسار يتضمن دليلاً مجانياً مع prompts وأدوات وخطة 30 يوماً.',
 aiCareerGuideLabel: 'اقرأ الدليل',
 aiAdvantage: 'ميزة الذكاء الاصطناعي في 2026',
 aiAdvantageDesc: 'باستخدام أدوات ذكاء اصطناعي متقدمة مثل Lovable.dev وCursor، يمكن لطلابك منافسة المحترفين من اليوم الأول والبدء في تحقيق الدخل فوراً.',
 partnershipRequirements: 'متطلبات',
 partnershipRequirementsHighlight: 'الشراكة',
 partnershipRequirementsDesc: 'الشراكة الناجحة تحتاج التزاماً من الطرفين. هذا ما يقدمه كل طرف لضمان نجاح الطلاب.',
 whatSchoolsProvide: 'ما تقدمه المدارس',
 whatSchoolsProvideDesc: 'مساهماتكم الأساسية في الشراكة',
 whatWeProvide: 'ما نقدمه نحن',
 whatWeProvideDesc: 'دعمنا ومواردنا الشاملة',
 provenResults: 'نتائج مثبتة',
 provenResultsHighlight: 'في أنحاء أفريقيا',
 readyToTransform: 'هل أنت جاهز لتحويل نتائج الطلاب؟',
 readyToTransformDesc: 'لنتحدث عن كيفية عمل برنامج Future Ready Graduate داخل مؤسستك. اطّلع على تفاصيل المنهج ومؤشرات النجاح في استشارة مخصصة.',
 threePaths: 'ثلاثة مسارات نحو',
 threePathsHighlight: 'النجاح الرقمي',
 threePathsSubtitle: 'اختر المسار الذي يناسب احتياجاتك.',
 forSchools: 'للمدارس',
 forProfessional: 'للمعاهد المهنية',
 guidedLearning: 'تعلم موجّه',
 newLabel: 'جديد',
 onlySpotsAvailable: 'لم يتبق سوى {count} مكاناً',
 noOneLeftBehind: 'لن نترك أحداً خلفنا.',
 }

 const aboutEn: AboutTranslations = {
 badge: 'About Us',
 heroTitle: 'About Us',
 heroSubtitle: 'An American company started in Kenya by a refugee youth, driven by hunger and greatness to build a world where everyone is enabled, empowered, and connected to the technology and skills that change lives.',
 statsTitle: 'Committed to a better world, technology in service of humanity',
 statsSubtitle:
 'We build and partner on solutions to human problems, using technology to expand access, dignity, and opportunity.',
 sdgSectionBadge: 'UN Sustainable Development Goals',
 sdgSectionTitle: 'Committed to a better world, standing with the SDGs that match our work',
 sdgSectionIntro:
 'We fight poverty through opportunity, advance education that teaches employable skills, and use technology to grow decent work. These three Global Goals are where our mission and our business model meet.',
 sdg1Title: 'Goal 1, No poverty',
 sdg1Desc:
 'We build systems so businesses and communities can capture income and growth, reducing exclusion driven by lack of access to modern tools.',
 sdg4Title: 'Goal 4, Quality education',
 sdg4Desc:
 'Our graduate programs and partnerships teach skills employers actually hire for, not credentials alone, so learning converts into livelihood.',
 sdg8Title: 'Goal 8, Decent work & economic growth',
 sdg8Desc:
 'We measure employability, productivity, and fair growth: job ready training, AI that removes drudgework, and outcomes that show up in real employment and revenue.',
 sdgFootnote:
 'The Sustainable Development Goals are a United Nations initiative. We align our mission with these goals; we are not affiliated with or endorsed by the UN.',
 freedomVisionBadge: 'Our north star',
 freedomVisionTitle: 'Financial, location, and time freedom',
 freedomVisionIntro:
 'All my life, one wish has stayed constant: that people, including our team, our clients, and the communities we serve, can experience financial, location, and time freedom. That urge is what built this company. Digni Digital is the outcome of that drive: systems and education that remove barriers so more people can choose how they earn, where they work, and how they spend their days.',
 freedomPillarFinancialTitle: 'Financial freedom',
 freedomPillarFinancialDesc:
 'Income and opportunity that are not locked behind gatekeeping tools or credentials alone, so growth shows up in real revenue and livelihood.',
 freedomPillarLocationTitle: 'Location freedom',
 freedomPillarLocationDesc:
 'Work and learning that are not tied to a single place, so talent and business can reach further without losing human connection.',
 freedomPillarTimeTitle: 'Time freedom',
 freedomPillarTimeDesc:
 'Less manual grind and chaos, so people can reclaim hours for strategy, family, and the work only humans should do.',
 freedomVisionClosing:
 'That is the culture here: every role is shaped by the same vision, freedom, dignity, and measurable outcomes for the people we serve.',
 statYears: 'Years Experience',
 statStudents: 'Students Trained',
 statLeads: 'Leads Captured',
 statSatisfaction: 'Client Satisfaction',
 timeline2026Title: 'Projected: 150+ Clients',
 timeline2026Description: 'Projected: 10 jobs, 100 trained to use AI professionally.',
 storyBadge: 'The Journey',
 ourStoryTitle: 'Our Story',
 storyP1: 'We are an American registered company that started in Kenya, founded by a refugee youth who, from an early age, has been focused on eliminating poverty and refused to accept the rules and limitations set upon him. Driven by hunger and greatness, he chose to fail forward: to keep pushing, dreaming, and building toward a better world.',
 storyP2: 'That dream is simple and urgent: everyone enabled, empowered, and connected to the same technology and skills that have long been reserved for elites and elite kids. Businesses shouldn\'t lose leads because they can\'t afford big systems. Students shouldn\'t graduate without the skills employers hire for. We build the fixes, AI that captures every lead, curricula that make graduates job ready, and agentic software that perceives, reasons, and acts, scaling with you.',
 storyP3: 'Founded 2019. Started with websites. Now: AI systems, graduate programs, Agentic Softwares. We don\'t just build websites, we build systems that get you clients and students jobs.',
 takeTheJourney: 'Take the journey',
 approachTitle: 'Our Approach',
 approachSubtitle: 'How we deliver transformational results',
 discoveryTitle: 'Discovery',
 discoveryDesc: 'We learn your business first. Then we build.',
 discoveryBullet1: 'Business process analysis',
 discoveryBullet2: 'Customer journey mapping',
 discoveryBullet3: 'Technology audit',
 discoveryBullet4: 'Growth bottleneck identification',
 buildTitle: 'Build',
 buildDesc: 'We fit into what you have. No disruption. Just upgrade.',
 buildBullet1: 'Phased rollout approach',
 buildBullet2: 'Team training & support',
 buildBullet3: 'Integration with existing systems',
 buildBullet4: 'Minimal business disruption',
 optimizeTitle: 'Optimize',
 optimizeDesc: 'We keep improving. Launch is day one. We make it better.',
 optimizeBullet1: 'Performance monitoring',
 optimizeBullet2: 'Data driven improvements',
 optimizeBullet3: 'Regular strategy reviews',
 optimizeBullet4: 'Ongoing technical support',
 differentTitle: 'What Makes Us Different',
 differentSubtitle: 'Why businesses and schools choose Digni Digital',
 humanFirstTitle: 'Human First',
 humanFirstDesc: 'AI helps your team. Doesn\'t replace them.',
 provenTitle: 'Proven',
 provenDesc: '10 years. {partnerCount}+ clients. 98% satisfaction.',
 partnershipTitle: 'Full Partnership',
 partnershipDesc: 'Strategy. Build. Optimize. We\'re there. No handoffs.',
 roiFocusTitle: 'ROI Focus',
 roiFocusDesc: 'We track revenue. Leads. Jobs. Not just features.',
 promiseTitle: 'Our Promise',
 promiseQuote:
 'Everyone deserves access to the technology and skills that unlock dignity, freedom, and real opportunity. We are here to help people and communities build a future they can be proud of.',
 founderName: 'Pascal Digny Djohodo',
 founderRole: 'Founder & CEO',
 servicesTitle: 'Our Services',
 servicesSubtitle: 'Three core solutions that drive real business impact',
 aiEmployeeTitle: 'AI Employee Systems',
 aiEmployeeDesc:
 'Infrastructure that runs without you, AI that captures leads, keeps clients, and removes follow up chaos.',
 aiEmployeeCta: 'See how it works',
 literacyTitle: 'Future Ready Graduate Program',
 literacyDesc: '85% employed. Guided learning personalized to each person\'s talents, bringing out entrepreneurial gifts. We bring curriculum and internet. You bring students.',
 literacyCta: 'Explore the Curriculum',
 agenticTitle: 'Agentic Softwares',
 agenticDesc: 'AI native software that perceives, reasons, and acts autonomously.',
 agenticCta: 'See What We Build',
 ctaTitle: 'Ready to Work Together?',
 ctaSubtitle: 'Tell us your problem. We\'ll find the fix.',
 trustedByBadge: 'Trusted by',
 trustedByTitle: 'Enterprises that believe in our mission.',
 trustedBySubtitle: 'Building human first systems that capture opportunity and expand access.',
 }

 const aboutFr: AboutTranslations = {
 badge: 'À propos',
 heroTitle: 'À propos',
 heroSubtitle: 'Une entreprise américaine née au Kenya, fondée par un jeune réfugié, animé par la faim et la grandeur pour bâtir un monde où chacun est outillé, responsabilisé et connecté aux technologies et compétences qui changent les vies.',
 statsTitle: 'Engagés pour un monde meilleur, la technologie au service de l\'humanité',
 statsSubtitle:
 'Nous construisons et co créons des solutions aux problèmes humains, la technologie pour élargir l\'accès, la dignité et les opportunités.',
 sdgSectionBadge: 'Objectifs de développement durable (ODD)',
 sdgSectionTitle: 'Engagés pour un monde meilleur, aux côtés des ODD alignés sur notre action',
 sdgSectionIntro:
 'Nous luttons contre la pauvreté par l\'opportunité, faisons progresser une éducation qui enseigne des compétences employables, et utilisons la technologie pour un travail décent. Ces trois objectifs mondiaux sont le point de rencontre entre notre mission et notre modèle.',
 sdg1Title: 'ODD 1, Éliminer la pauvreté',
 sdg1Desc:
 'Nous construisons des systèmes pour que les entreprises et les communautés saisissent revenus et croissance, en réduisant l\'exclusion liée au manque d\'accès aux outils modernes.',
 sdg4Title: 'ODD 4, Éducation de qualité',
 sdg4Desc:
 'Nos programmes pour diplômés et partenariats enseignent ce que les employeurs recrutent, pas seulement des diplômes, pour que l\'apprentissage se transforme en moyens de subsistance.',
 sdg8Title: 'ODD 8, Travail décent et croissance économique',
 sdg8Desc:
 'Nous mesurons l\'employabilité, la productivité et une croissance équitable : formation vers l\'emploi, IA qui supprime les tâches pénibles, résultats visibles en emploi et revenus.',
 sdgFootnote:
 'Les Objectifs de développement durable sont une initiative des Nations unies. Nous alignons notre mission sur ces objectifs ; nous ne sommes ni affiliés ni approuvés par l\'ONU.',
 freedomVisionBadge: 'Notre étoile du Nord',
 freedomVisionTitle: 'Liberté financière, géographique et temporelle',
 freedomVisionIntro:
 'Toute ma vie, un souhait est resté constant : que les personnes, notre équipe, nos clients, les communautés que nous servons, puissent vivre la liberté financière, géographique et temporelle. Cette motivation a fondé cette entreprise. Digni Digital en est le fruit : des systèmes et une formation qui lèvent des barrières pour que chacun puisse choisir comment il gagne, où il travaille et comment il utilise son temps.',
 freedomPillarFinancialTitle: 'Liberté financière',
 freedomPillarFinancialDesc:
 'Revenus et opportunités qui ne dépendent pas seulement des privilèges ou des diplômes, pour que la croissance se traduise en revenus réels et moyens de vivre.',
 freedomPillarLocationTitle: 'Liberté géographique',
 freedomPillarLocationDesc:
 'Travail et apprentissage qui ne sont pas figés à un seul lieu, pour que les talents et les entreprises rayonnent sans perdre le lien humain.',
 freedomPillarTimeTitle: 'Liberté temporelle',
 freedomPillarTimeDesc:
 'Moins de charge manuelle et de chaos, pour libérer du temps pour la stratégie, la famille et ce que seuls les humains doivent faire.',
 freedomVisionClosing:
 'C’est notre culture : chaque rôle porte la même vision, liberté, dignité et résultats mesurables pour ceux que nous servons.',
 statYears: 'Années d\'expérience',
 statStudents: 'Étudiants formés',
 statLeads: 'Prospects capturés',
 statSatisfaction: 'Satisfaction client',
 timeline2026Title: '150+ clients',
 timeline2026Description: 'Projeté : 10 emplois, 100 personnes formées à utiliser l’IA professionnellement.',
 storyBadge: 'Le parcours',
 ourStoryTitle: 'Notre histoire',
 storyP1: 'Nous sommes une entreprise enregistrée aux États Unis qui a démarré au Kenya, fondée par un jeune réfugié qui, dès son plus jeune âge, a été focalisé sur l\'élimination de la pauvreté et a refusé d\'accepter les règles et les limites qu\'on lui imposait. Animé par la faim et la grandeur, il a choisi d\'échouer vers l\'avant : continuer à pousser, rêver et construire un monde meilleur.',
 storyP2: 'Ce rêve est simple et urgent : chacun outillé, responsabilisé et connecté aux mêmes technologies et compétences longtemps réservées aux élites. Les entreprises ne devraient pas perdre de prospects parce qu\'elles ne peuvent pas s\'offrir de grands systèmes. Les étudiants ne devraient pas obtenir leur diplôme sans les compétences que les employeurs recherchent. Nous construisons les solutions, IA qui capture chaque prospect, cursus qui rendent les diplômés opérationnels, et logiciels agentiques qui perçoivent, raisonnent et agissent, évoluant avec vous.',
 storyP3: 'Fondée en 2019. Nous avons commencé avec des sites web. Aujourd\'hui : systèmes IA, programmes diplômants, Agentic Softwares. Nous ne construisons pas que des sites, nous bâtissons des systèmes qui vous apportent des clients et offrent des emplois aux étudiants.',
 takeTheJourney: 'Découvrir le parcours',
 approachTitle: 'Notre approche',
 approachSubtitle: 'Comment nous obtenons des résultats transformationnels',
 discoveryTitle: 'Découverte',
 discoveryDesc: 'Nous apprenons d\'abord votre business. Puis nous construisons.',
 discoveryBullet1: 'Analyse des processus métier',
 discoveryBullet2: 'Cartographie du parcours client',
 discoveryBullet3: 'Audit technologique',
 discoveryBullet4: 'Identification des freins à la croissance',
 buildTitle: 'Construction',
 buildDesc: 'Nous nous intégrons à l\'existant. Pas de perturbation. Juste une amélioration.',
 buildBullet1: 'Déploiement par phases',
 buildBullet2: 'Formation et accompagnement d\'équipe',
 buildBullet3: 'Intégration aux systèmes existants',
 buildBullet4: 'Perturbation minimale de l\'activité',
 optimizeTitle: 'Optimisation',
 optimizeDesc: 'Nous améliorons en continu. Le lancement n\'est que le jour un. Nous rendons tout meilleur.',
 optimizeBullet1: 'Suivi des performances',
 optimizeBullet2: 'Améliorations basées sur les données',
 optimizeBullet3: 'Revues stratégiques régulières',
 optimizeBullet4: 'Support technique continu',
 differentTitle: 'Ce qui nous différencie',
 differentSubtitle: 'Pourquoi les entreprises et les écoles choisissent Digni Digital',
 humanFirstTitle: 'L\'humain d\'abord',
 humanFirstDesc: 'L\'IA aide votre équipe. Elle ne la remplace pas.',
 provenTitle: 'Prouvé',
 provenDesc: '10 ans. {partnerCount}+ clients. 98% de satisfaction.',
 partnershipTitle: 'Partenariat total',
 partnershipDesc: 'Stratégie. Construction. Optimisation. Nous sommes là. Pas de transferts.',
 roiFocusTitle: 'Focus ROI',
 roiFocusDesc: 'Nous suivons le chiffre d\'affaires. Les prospects. Les emplois. Pas juste les fonctionnalités.',
 promiseTitle: 'Notre promesse',
 promiseQuote:
 'Nous croyons que le meilleur avenir est celui où chacun accède aux mêmes technologies et compétences qu’on réservait autrement à une minorité. Nous visons des résultats mesurables, plus de prospects, plus de revenus, ou des diplômés que les employeurs recrutent vraiment. Si ces indicateurs ne bougent pas, nous n’avons pas fait notre travail.',
 founderName: 'Pascal Digny Djohodo',
 founderRole: 'Fondateur & PDG',
 servicesTitle: 'Nos services',
 servicesSubtitle: 'Trois solutions clés qui génèrent un impact réel',
 aiEmployeeTitle: 'Systèmes employé IA',
 aiEmployeeDesc:
 'Une infrastructure qui tourne sans vous, IA qui capte les prospects, fidélise et supprime le chaos des relances.',
 aiEmployeeCta: 'Voir comment ça marche',
 literacyTitle: 'Programme Diplômé Prêt pour l\'Avenir',
 literacyDesc: '85 % en emploi. Apprentissage guidé personnalisé aux talents de chacun, révélant les dons entrepreneuriaux. Nous apportons le cursus et internet. Vous amenez les étudiants.',
 literacyCta: 'Explorer le cursus',
 agenticTitle: 'Agentic Softwares',
 agenticDesc: 'Logiciels IA natifs qui perçoivent, raisonnent et agissent de façon autonome.',
 agenticCta: 'Voir ce que nous construisons',
 ctaTitle: 'Prêt à travailler ensemble ?',
 ctaSubtitle: 'Dites nous votre problème. Nous trouverons la solution.',
 trustedByBadge: 'Approuvé par',
 trustedByTitle: 'Des entreprises qui croient en notre mission.',
 trustedBySubtitle: 'Des systèmes humains d\'abord qui captent les opportunités et élargissent l\'accès.',
 }

 const aboutAr: AboutTranslations = {
 badge: 'من نحن',
 heroTitle: 'من نحن',
 heroSubtitle: 'شركة أمريكية بدأت في كينيا على يد شاب لاجئ, مدفوعاً بالطموح والعظمة لبناء عالم يُمكّن الجميع ويربطهم بالتقنية والمهارات التي تغيّر الحياة.',
 statsTitle: 'ملتزمون بعالم أفضل, تكنولوجيا في خدمة الإنسانية',
 statsSubtitle:
 'نبني ونشارك في حلول للمشكلات الإنسانية, بتقنية توسّع النفاذ والكرامة والفرص.',
 sdgSectionBadge: 'أهداف التنمية المستدامة للأمم المتحدة',
 sdgSectionTitle: 'ملتزمون بعالم أفضل, مع أهداف التنمية المستدامة التي تلتقي مع عملنا',
 sdgSectionIntro:
 'نواجه الفقر بالفرص، ونطوّر تعليماً يعلّم مهارات توظّف، ونستخدم التقنية لتعزيز العمل اللائق. هذه الأهداف الثلاثة هي حيث تلتقي رسالتنا بنموذج أعمالنا.',
 sdg1Title: 'الهدف 1, القضاء على الفقر',
 sdg1Desc:
 'نبني أنظمة تمكّن الشركات والمجتمعات من زيادة الدخل والنمو, وتقلّص الإقصاء الناتج عن ضعف الوصول إلى الأدوات الحديثة.',
 sdg4Title: 'الهدف 4, تعليم ذو جودة',
 sdg4Desc:
 'برامج الخريجين وشراكاتنا تعلّم ما يوظّفه أصحاب العمل, لا الشهادات وحدها, ليصبح التعلّم سُبُلاً للعيش.',
 sdg8Title: 'الهدف 8, عمل لائق ونمو اقتصادي',
 sdg8Desc:
 'نقيس القابلية للتوظيف والإنتاجية والنمو العادل: تدريب يفضي لوظائف، وذكاء اصطناعي يزيل العمل الرتيب، ونتائج تظهر في التوظيف والإيرادات.',
 sdgFootnote:
 'أهداف التنمية المستدامة مبادرة للأمم المتحدة. ننسّق رسالتنا مع هذه الأهداف؛ لسنا تابعين لها ولا معتمدين منها.',
 freedomVisionBadge: 'بوصلةنا',
 freedomVisionTitle: 'الحرية المالية والجغرافية والزمنية',
 freedomVisionIntro:
 'طوال حياتي بقي أمني واحد: أن يعيش الناس, فريقنا وعملاؤنا والمجتمعات التي نخدمها, حرية مالية وجغرافية وزمنية. هذا الدافع هو ما بنى هذه الشركة. Digni Digital ثمرة ذلك: أنظمة وتعليم يزيلان العوائق ليختار الناس كيف يكسبون وأين يعملون وكيف يستخدمون وقتهم.',
 freedomPillarFinancialTitle: 'الحرية المالية',
 freedomPillarFinancialDesc:
 'دخل وفرص لا تُحتكر وراء الشهادات وحدها, لتظهر النمو في دخل حقيقي ومعيشة كريمة.',
 freedomPillarLocationTitle: 'الحرية الجغرافية',
 freedomPillarLocationDesc:
 'عمل وتعلّم غير مقيّد بمكان واحد, لتصل المواهب والأعمال أبعد دون فقدان التواصل الإنساني.',
 freedomPillarTimeTitle: 'الحرية الزمنية',
 freedomPillarTimeDesc:
 'أقل عبئاً يدوياً وفوضى, لاستعادة الوقت للتخطيط والعائلة والعمل الذي لا يجب إلا للبشر.',
 freedomVisionClosing:
 'هذه ثقافتنا: كل دور يحمل الرؤية نفسها, حرية وكرامة ونتائج قابلة للقياس لمن نخدمهم.',
 statYears: 'سنوات خبرة',
 statStudents: 'طالب تم تدريبهم',
 statLeads: 'عميل محتمل تم التقاطه',
 statSatisfaction: 'رضا العملاء',
 timeline2026Title: '150+ عميل',
 timeline2026Description: 'متوقع: 10 وظائف، 100 متدرّب على استخدام الذكاء الاصطناعي باحترافية.',
 storyBadge: 'الرحلة',
 ourStoryTitle: 'قصتنا',
 storyP1: 'نحن شركة مسجلة في الولايات المتحدة بدأت في كينيا, أسسها شاب لاجئ رفض قبول القيود المفروضة عليه. مدفوعاً بالطموح والعظمة، اختار أن يفشل إلى الأمام: أن يستمر في الدفع والحلم والبناء نحو عالم أفضل.',
 storyP2: 'الحلم بسيط وملحّ: أن يكون الجميع مُمكّنين ومتصلين بنفس التقنيات والمهارات المحتكرة للنخب. لا ينبغي أن تخسر الشركات عملاء لأنها لا تستطيع تحمّل أنظمة كبيرة. لا ينبغي أن يتخرج الطلاب بدون المهارات التي يوظّف أصحاب العمل لأجلها. نبني الحلول, ذكاء اصطناعي يلتقط كل عميل، مناهج تجعل الخريجين جاهزين للعمل، وبرمجيات وكيلية تدرك وتفكر وتعمل, تنمو معك.',
 storyP3: 'تأسست عام 2019. بدأنا بالمواقع الإلكترونية. الآن: أنظمة ذكاء اصطناعي، برامج تخرّج، Agentic Softwares. لا نبني مواقع فحسب, نبني أنظمة تجلب لك عملاء وتمنح الطلاب وظائف.',
 takeTheJourney: 'اكتشف الرحلة',
 approachTitle: 'نهجنا',
 approachSubtitle: 'كيف نحقق نتائج تحويلية',
 discoveryTitle: 'الاكتشاف',
 discoveryDesc: 'نتعلم عملك أولاً. ثم نبني.',
 discoveryBullet1: 'تحليل العمليات التجارية',
 discoveryBullet2: 'رسم خريطة رحلة العميل',
 discoveryBullet3: 'تدقيق تقني',
 discoveryBullet4: 'تحديد عوائق النمو',
 buildTitle: 'البناء',
 buildDesc: 'نندمج مع ما لديك. بدون إزعاج. مجرد ترقية.',
 buildBullet1: 'نشر على مراحل',
 buildBullet2: 'تدريب ودعم الفريق',
 buildBullet3: 'التكامل مع الأنظمة الحالية',
 buildBullet4: 'أقل تأثير على سير العمل',
 optimizeTitle: 'التحسين',
 optimizeDesc: 'نستمر في التحسين. الإطلاق هو اليوم الأول. نجعله أفضل.',
 optimizeBullet1: 'مراقبة الأداء',
 optimizeBullet2: 'تحسينات مبنية على البيانات',
 optimizeBullet3: 'مراجعات استراتيجية دورية',
 optimizeBullet4: 'دعم تقني مستمر',
 differentTitle: 'ما يميزنا',
 differentSubtitle: 'لماذا تختار الشركات والمدارس Digni Digital',
 humanFirstTitle: 'الإنسان أولاً',
 humanFirstDesc: 'الذكاء الاصطناعي يساعد فريقك. لا يستبدله.',
 provenTitle: 'مُثبت',
 provenDesc: '10 سنوات. {partnerCount}+ عميل. 98% رضا.',
 partnershipTitle: 'شراكة كاملة',
 partnershipDesc: 'استراتيجية. بناء. تحسين. نحن هنا. بدون تسليمات.',
 roiFocusTitle: 'تركيز على العائد',
 roiFocusDesc: 'نتابع الإيرادات. العملاء المحتملين. الوظائف. ليس فقط الميزات.',
 promiseTitle: 'وعدنا',
 promiseQuote:
 'نؤمن بأن الغد الأفضل هو أن يحصل الجميع على نفس التقنية والمهارات التي كانت حكراً على قلة. عند العمل معنا نسعى لنتائج قابلة للقياس, مزيد من العملاء المحتملين، أو الإيرادات، أو خريجون يُوظَّفون فعلياً. إن لم تتحرك هذه الأرقام، فلم نُكمِل واجبنا.',
 founderName: 'باسكال ديني',
 founderRole: 'المؤسس والرئيس التنفيذي',
 servicesTitle: 'خدماتنا',
 servicesSubtitle: 'ثلاثة حلول أساسية تحقق أثراً حقيقياً في الأعمال',
 aiEmployeeTitle: 'أنظمة الموظف الذكي',
 aiEmployeeDesc:
 'بنية تعمل دونك, ذكاء يلتقط العملاء ويحافظ عليهم ويزيل فوضى المتابعة.',
 aiEmployeeCta: 'اكتشف كيف يعمل',
 literacyTitle: 'برنامج Future Ready Graduate',
 literacyDesc: '85% موظفون. تعلم موجّه شخصي وفق مواهب كل فرد, يكشف المواهب الريادية. نوفر المنهج والإنترنت. أنت توفر الطلاب.',
 literacyCta: 'استكشف المنهج',
 agenticTitle: 'Agentic Softwares',
 agenticDesc: 'برمجيات ذكاء اصطناعي أصيلة تدرك وتفكّر وتعمل بذاتها.',
 agenticCta: 'اكتشف ما نبنيه',
 ctaTitle: 'مستعد للعمل معاً؟',
 ctaSubtitle: 'أخبرنا بمشكلتك. سنجد الحل.',
 trustedByBadge: 'موثوق من',
 trustedByTitle: 'مؤسسات تؤمن برسالتنا.',
 trustedBySubtitle: 'نبني أنظمة تضع الإنسان أولاً, تلتقط الفرص وتوسّع الوصول.',
 }

 const aboutDe: AboutTranslations = {
 badge: 'Über uns',
 heroTitle: 'Über uns',
 heroSubtitle: 'Ein amerikanisches Unternehmen, gegründet in Kenia von einem jungen Geflüchteten, angetrieben von Hunger und Größe, um eine Welt zu bauen, in der jeder befähigt, ermächtigt und mit den Technologien und Fähigkeiten verbunden ist, die Leben verändern.',
 statsTitle: 'Für eine bessere Welt engagiert, Technologie im Dienst der Menschheit',
 statsSubtitle:
 'Wir entwickeln und gestalten gemeinsam Lösungen für menschliche Herausforderungen, Technologie für Zugang, Würde und Chancen.',
 sdgSectionBadge: 'UN Nachhaltigkeitsziele (SDGs)',
 sdgSectionTitle: 'Für eine bessere Welt, an der Seite der SDGs, die zu unserer Arbeit passen',
 sdgSectionIntro:
 'Wir bekämpfen Armut durch Chancen, stärken Bildung mit anstellbaren Kompetenzen und nutzen Technologie für menschenwürdige Arbeit. Diese drei globalen Ziele sind der Kern, wo Mission und Geschäftsmodell zusammenkommen.',
 sdg1Title: 'Ziel 1, Armut in allen Formen beenden',
 sdg1Desc:
 'Wir bauen Systeme, damit Unternehmen und Gemeinschaften Einkommen und Wachstum erschließen, und Ausschluss durch fehlenden Zugang zu modernen Werkzeugen verringern.',
 sdg4Title: 'Ziel 4, Hochwertige Bildung',
 sdg4Desc:
 'Unsere Absolventenprogramme und Partnerschaften vermitteln, was Arbeitgeber wirklich einstellen, nicht nur Zeugnisse, damit Lernen zu Lebensunterhalt wird.',
 sdg8Title: 'Ziel 8, Menschenwürdige Arbeit und Wirtschaftswachstum',
 sdg8Desc:
 'Wir messen Beschäftigungsfähigkeit, Produktivität und faires Wachstum: jobnahe Ausbildung, KI die Routine abnimmt, Ergebnisse in echten Jobs und Umsatz.',
 sdgFootnote:
 'Die Nachhaltigkeitsziele sind eine Initiative der Vereinten Nationen. Wir richten unsere Mission an diesen Zielen aus; wir sind nicht mit der UN verbunden oder von ihr anerkannt.',
 freedomVisionBadge: 'Unser Nordstern',
 freedomVisionTitle: 'Finanzielle, räumliche und zeitliche Freiheit',
 freedomVisionIntro:
 'Mein ganzes Leben lang war ein Wunsch konstant: dass Menschen, unser Team, unsere Kunden, die Gemeinschaften, denen wir dienen, finanzielle, räumliche und zeitliche Freiheit erfahren. Dieser Drang hat dieses Unternehmen gegründet. Digni Digital ist das Ergebnis: Systeme und Bildung, die Barrieren abbauen, damit mehr Menschen wählen können, wie sie verdienen, wo sie arbeiten und wie sie ihre Zeit nutzen.',
 freedomPillarFinancialTitle: 'Finanzielle Freiheit',
 freedomPillarFinancialDesc:
 'Einkommen und Chancen, die nicht allein hinter Gatekeeping oder Zeugnissen stecken, damit Wachstum in echtem Umsatz und Lebensunterhalt sichtbar wird.',
 freedomPillarLocationTitle: 'Räumliche Freiheit',
 freedomPillarLocationDesc:
 'Arbeit und Lernen, die nicht an einen einzigen Ort gebunden sind, damit Talente und Unternehmen weiter reichen, ohne menschliche Nähe zu verlieren.',
 freedomPillarTimeTitle: 'Zeitliche Freiheit',
 freedomPillarTimeDesc:
 'Weniger manuelle Last und Chaos, damit Menschen Stunden für Strategie, Familie und die Arbeit zurückgewinnen, die nur Menschen tun sollten.',
 freedomVisionClosing:
 'Das ist unsere Kultur: jede Rolle trägt dieselbe Vision, Freiheit, Würde und messbare Ergebnisse für die Menschen, denen wir dienen.',
 statYears: 'Jahre Erfahrung',
 statStudents: 'Ausgebildete Studierende',
 statLeads: 'Erfasste Leads',
 statSatisfaction: 'Kundenzufriedenheit',
 timeline2026Title: '150+ Kunden',
 timeline2026Description: 'Prognose: 10 Jobs, 100 geschult für den professionellen KI Einsatz.',
 storyBadge: 'Die Reise',
 ourStoryTitle: 'Unsere Geschichte',
 storyP1: 'Wir sind ein in den USA registriertes Unternehmen, das in Kenia gestartet wurde, gegründet von einem jungen Geflüchteten, der von klein auf darauf fokussiert war, Armut zu bekämpfen, und sich weigerte, die ihm auferlegten Regeln und Grenzen zu akzeptieren. Angetrieben von Hunger und Größe entschied er sich, vorwärts zu scheitern: weiterzumachen, zu träumen und auf eine bessere Welt hinzuarbeiten.',
 storyP2: 'Dieser Traum ist einfach und dringend: Jeder befähigt, ermächtigt und verbunden mit den gleichen Technologien und Fähigkeiten, die lange den Eliten vorbehalten waren. Unternehmen sollten keine Leads verlieren, weil sie sich große Systeme nicht leisten können. Studierende sollten nicht ohne die Fähigkeiten abschließen, die Arbeitgeber suchen. Wir bauen die Lösungen, KI, die jeden Lead erfasst, Lehrpläne, die Absolventen berufsfertig machen, und agentische Software, die wahrnimmt, denkt und handelt, und mit Ihnen wächst.',
 storyP3: 'Gegründet 2019. Angefangen mit Websites. Heute: KI Systeme, Absolventenprogramme, Agentic Softwares. Wir bauen nicht nur Websites, wir bauen Systeme, die Ihnen Kunden bringen und Studierenden Jobs verschaffen.',
 takeTheJourney: 'Entdecken Sie die Reise',
 approachTitle: 'Unser Ansatz',
 approachSubtitle: 'Wie wir transformative Ergebnisse liefern',
 discoveryTitle: 'Entdeckung',
 discoveryDesc: 'Wir lernen zuerst Ihr Geschäft kennen. Dann bauen wir.',
 discoveryBullet1: 'Geschäftsprozessanalyse',
 discoveryBullet2: 'Customer Journey Mapping',
 discoveryBullet3: 'Technologie Audit',
 discoveryBullet4: 'Identifikation von Wachstumshindernissen',
 buildTitle: 'Aufbau',
 buildDesc: 'Wir integrieren uns nahtlos. Keine Störung. Nur Upgrade.',
 buildBullet1: 'Stufenweiser Rollout',
 buildBullet2: 'Teamschulung & Support',
 buildBullet3: 'Integration mit bestehenden Systemen',
 buildBullet4: 'Minimale Geschäftsunterbrechung',
 optimizeTitle: 'Optimierung',
 optimizeDesc: 'Wir verbessern kontinuierlich. Der Launch ist Tag eins. Wir machen es besser.',
 optimizeBullet1: 'Performance Monitoring',
 optimizeBullet2: 'Datengetriebene Verbesserungen',
 optimizeBullet3: 'Regelmäßige Strategie Reviews',
 optimizeBullet4: 'Laufender technischer Support',
 differentTitle: 'Was uns unterscheidet',
 differentSubtitle: 'Warum Unternehmen und Schulen Digni Digital wählen',
 humanFirstTitle: 'Mensch zuerst',
 humanFirstDesc: 'KI unterstützt Ihr Team. Ersetzt es nicht.',
 provenTitle: 'Bewährt',
 provenDesc: '10 Jahre. {partnerCount}+ Kunden. 98% Zufriedenheit.',
 partnershipTitle: 'Volle Partnerschaft',
 partnershipDesc: 'Strategie. Aufbau. Optimierung. Wir sind da. Keine Übergaben.',
 roiFocusTitle: 'ROI Fokus',
 roiFocusDesc: 'Wir verfolgen Umsatz. Leads. Jobs. Nicht nur Features.',
 promiseTitle: 'Unser Versprechen',
 promiseQuote:
 'Wir glauben: Die beste Zukunft ist die, in der jeder Zugang zu denselben Technologien und Fähigkeiten hat, die früher wenigen vorbehalten waren. Mit uns kämpfen wir um messbare Ergebnisse, mehr Leads, mehr Umsatz oder Absolventen, die Arbeitgeber wirklich einstellen. Bewegen wir diese Kennzahlen nicht, haben wir unsere Arbeit nicht getan.',
 founderName: 'Pascal Digny Djohodo',
 founderRole: 'Gründer & CEO',
 servicesTitle: 'Unsere Dienstleistungen',
 servicesSubtitle: 'Drei Kernlösungen für echten geschäftlichen Mehrwert',
 aiEmployeeTitle: 'KI Mitarbeiter Systeme',
 aiEmployeeDesc:
 'Infrastruktur, die ohne Sie läuft, KI erfasst Leads, hält Kunden und beseitigt Nachfass Chaos.',
 aiEmployeeCta: 'So funktioniert es',
 literacyTitle: 'Future Ready Graduate Programm',
 literacyDesc: '85% beschäftigt. Geführtes Lernen, personalisiert nach den Talenten jedes Einzelnen, unternehmerische Begabungen entfalten. Wir bringen Lehrplan und Internet. Sie bringen Studierende.',
 literacyCta: 'Lehrplan entdecken',
 agenticTitle: 'Agentic Softwares',
 agenticDesc: 'KI native Software, die wahrnimmt, denkt und autonom handelt.',
 agenticCta: 'Sehen, was wir bauen',
 ctaTitle: 'Bereit zur Zusammenarbeit?',
 ctaSubtitle: 'Sagen Sie uns Ihr Problem. Wir finden die Lösung.',
 trustedByBadge: 'Vertraut von',
 trustedByTitle: 'Unternehmen, die an unsere Mission glauben.',
 trustedBySubtitle: 'Menschliche Systeme, die Chancen erfassen und Zugang erweitern.',
 }

 const aboutEs: AboutTranslations = {
 badge: 'Sobre nosotros',
 heroTitle: 'Sobre nosotros',
 heroSubtitle: 'Una empresa estadounidense que nació en Kenia, fundada por un joven refugiado, impulsado por el hambre y la grandeza para construir un mundo donde todos estén capacitados, empoderados y conectados con la tecnología y las habilidades que cambian vidas.',
 statsTitle: 'Comprometidos con un mundo mejor, tecnología al servicio de la humanidad',
 statsSubtitle:
 'Construimos y co creamos soluciones a problemas humanos, tecnología para ampliar acceso, dignidad y oportunidad.',
 sdgSectionBadge: 'Objetivos de Desarrollo Sostenible (ODS) de la ONU',
 sdgSectionTitle: 'Comprometidos con un mundo mejor, junto a los ODS que encajan con nuestro trabajo',
 sdgSectionIntro:
 'Luchamos contra la pobreza con oportunidad, impulsamos educación con habilidades empleables y usamos tecnología para un trabajo decente. Estos tres objetivos globales son donde coinciden nuestra misión y nuestro modelo de negocio.',
 sdg1Title: 'ODS 1, Fin de la pobreza',
 sdg1Desc:
 'Construimos sistemas para que empresas y comunidades capturen ingresos y crecimiento, reduciendo la exclusión por falta de acceso a herramientas modernas.',
 sdg4Title: 'ODS 4, Educación de calidad',
 sdg4Desc:
 'Nuestros programas para graduados y alianzas enseñan lo que los empleadores contratan, no solo títulos, para que el aprendizaje se convierta en medios de vida.',
 sdg8Title: 'ODS 8, Trabajo decente y crecimiento económico',
 sdg8Desc:
 'Medimos empleabilidad, productividad y crecimiento justo: formación orientada al empleo, IA que quita lo repetitivo, resultados en empleo e ingresos reales.',
 sdgFootnote:
 'Los Objetivos de Desarrollo Sostenible son una iniciativa de las Naciones Unidas. Alineamos nuestra misión con estos objetivos; no estamos afiliados ni respaldados por la ONU.',
 freedomVisionBadge: 'Nuestro norte',
 freedomVisionTitle: 'Libertad financiera, geográfica y de tiempo',
 freedomVisionIntro:
 'Toda la vida he tenido un mismo deseo: que las personas, nuestro equipo, nuestros clientes y las comunidades que servimos, puedan vivir libertad financiera, geográfica y de tiempo. Ese impulso fundó esta empresa. Digni Digital es el resultado: sistemas y formación que quitan barreras para que más personas elijan cómo ganan, dónde trabajan y cómo usan sus días.',
 freedomPillarFinancialTitle: 'Libertad financiera',
 freedomPillarFinancialDesc:
 'Ingresos y oportunidades que no dependan solo de credenciales o privilegios, para que el crecimiento se vea en ingresos reales y medios de vida.',
 freedomPillarLocationTitle: 'Libertad geográfica',
 freedomPillarLocationDesc:
 'Trabajo y aprendizaje no atados a un solo lugar, para que el talento y los negocios lleguen más lejos sin perder el vínculo humano.',
 freedomPillarTimeTitle: 'Libertad de tiempo',
 freedomPillarTimeDesc:
 'Menos carga manual y caos, para recuperar horas para la estrategia, la familia y el trabajo que solo deben hacer las personas.',
 freedomVisionClosing:
 'Esa es nuestra cultura: cada rol comparte la misma visión, libertad, dignidad y resultados medibles para quienes servimos.',
 statYears: 'Años de experiencia',
 statStudents: 'Estudiantes formados',
 statLeads: 'Leads capturados',
 statSatisfaction: 'Satisfacción del cliente',
 timeline2026Title: '150+ clientes',
 timeline2026Description: 'Proyección: 10 empleos, 100 capacitados para usar la IA profesionalmente.',
 storyBadge: 'El recorrido',
 ourStoryTitle: 'Nuestra historia',
 storyP1: 'Somos una empresa registrada en Estados Unidos que empezó en Kenia, fundada por un joven refugiado que, desde muy joven, ha estado enfocado en eliminar la pobreza y se negó a aceptar las reglas y limitaciones impuestas sobre él. Impulsado por el hambre y la grandeza, eligió fracasar hacia adelante: seguir empujando, soñando y construyendo hacia un mundo mejor.',
 storyP2: 'Ese sueño es simple y urgente: todos capacitados, empoderados y conectados con las mismas tecnologías y habilidades reservadas durante mucho tiempo para las élites. Las empresas no deberían perder leads porque no pueden permitirse grandes sistemas. Los estudiantes no deberían graduarse sin las habilidades que los empleadores buscan. Construimos las soluciones, IA que captura cada lead, currículos que preparan a los graduados para el empleo, y software agéntico que percibe, razona y actúa, escalando contigo.',
 storyP3: 'Fundada en 2019. Empezamos con sitios web. Ahora: sistemas de IA, programas de graduados, Agentic Softwares. No solo construimos sitios web, construimos sistemas que te traen clientes y consiguen empleos para los estudiantes.',
 takeTheJourney: 'Descubre el recorrido',
 approachTitle: 'Nuestro enfoque',
 approachSubtitle: 'Cómo logramos resultados transformadores',
 discoveryTitle: 'Descubrimiento',
 discoveryDesc: 'Primero conocemos tu negocio. Luego construimos.',
 discoveryBullet1: 'Análisis de procesos de negocio',
 discoveryBullet2: 'Mapeo del recorrido del cliente',
 discoveryBullet3: 'Auditoría tecnológica',
 discoveryBullet4: 'Identificación de cuellos de botella',
 buildTitle: 'Construcción',
 buildDesc: 'Nos integramos con lo que tienes. Sin interrupciones. Solo mejora.',
 buildBullet1: 'Despliegue por fases',
 buildBullet2: 'Formación y soporte al equipo',
 buildBullet3: 'Integración con sistemas existentes',
 buildBullet4: 'Mínima interrupción del negocio',
 optimizeTitle: 'Optimización',
 optimizeDesc: 'Seguimos mejorando. El lanzamiento es el día uno. Lo hacemos mejor.',
 optimizeBullet1: 'Monitoreo de rendimiento',
 optimizeBullet2: 'Mejoras basadas en datos',
 optimizeBullet3: 'Revisiones estratégicas periódicas',
 optimizeBullet4: 'Soporte técnico continuo',
 differentTitle: 'Lo que nos diferencia',
 differentSubtitle: 'Por qué empresas y escuelas eligen Digni Digital',
 humanFirstTitle: 'Personas primero',
 humanFirstDesc: 'La IA ayuda a tu equipo. No lo reemplaza.',
 provenTitle: 'Comprobado',
 provenDesc: '10 años. {partnerCount}+ clientes. 98% de satisfacción.',
 partnershipTitle: 'Alianza total',
 partnershipDesc: 'Estrategia. Construcción. Optimización. Estamos ahí. Sin traspasos.',
 roiFocusTitle: 'Enfoque en ROI',
 roiFocusDesc: 'Medimos ingresos. Leads. Empleos. No solo funcionalidades.',
 promiseTitle: 'Nuestra promesa',
 promiseQuote:
 'Creemos que el mejor futuro es aquel en el que todos acceden a la misma tecnología y habilidades que antes estaban reservadas a unos pocos. Contigo luchamos por resultados medibles, más leads, más ingresos o graduados que los empleadores contratan de verdad. Si esos números no se mueven, no hemos hecho bien nuestro trabajo.',
 founderName: 'Pascal Digny Djohodo',
 founderRole: 'Fundador y CEO',
 servicesTitle: 'Nuestros servicios',
 servicesSubtitle: 'Tres soluciones clave que generan impacto real en el negocio',
 aiEmployeeTitle: 'Sistemas de empleado IA',
 aiEmployeeDesc:
 'Infraestructura que funciona sin usted, IA que captura leads, retiene clientes y quita el caos del seguimiento.',
 aiEmployeeCta: 'Ver cómo funciona',
 literacyTitle: 'Programa Future Ready Graduate',
 literacyDesc: '85% empleados. Aprendizaje guiado personalizado a los talentos de cada uno, desarrollando dones emprendedores. Nosotros traemos el currículo e internet. Tú traes los estudiantes.',
 literacyCta: 'Explorar el currículo',
 agenticTitle: 'Agentic Softwares',
 agenticDesc: 'Software nativo de IA que percibe, razona y actúa de forma autónoma.',
 agenticCta: 'Descubre lo que construimos',
 ctaTitle: '¿Listo para trabajar juntos?',
 ctaSubtitle: 'Cuéntanos tu problema. Encontraremos la solución.',
 trustedByBadge: 'Confían en nosotros',
 trustedByTitle: 'Empresas que creen en nuestra misión.',
 trustedBySubtitle: 'Sistemas humanos que capturan oportunidades y amplían el acceso.',
 }

 return {
 en: { ...commonEn, home: homeEn, blog: blogEn, about: aboutEn, contact: contactEn, clientJourney: clientJourneyEn, futureReadyGraduate: futureReadyGraduateEn, aiEmployeeProductDemos: aiEmployeeProductDemosEn, aiEmployeePage: aiEmployeePageEn, aiEmployeeSoftware: aiEmployeeSoftwareEn, servicesPage: servicesPageEn },
 fr: { ...commonFr, home: homeFr, blog: blogFr, about: aboutFr, contact: contactFr, clientJourney: clientJourneyFr, futureReadyGraduate: futureReadyGraduateFr, aiEmployeeProductDemos: aiEmployeeProductDemosFr, aiEmployeePage: aiEmployeePageFr, aiEmployeeSoftware: aiEmployeeSoftwareFr, servicesPage: servicesPageFr },
 ar: { ...commonAr, home: homeAr, blog: blogAr, about: aboutAr, contact: contactAr, clientJourney: clientJourneyAr, futureReadyGraduate: futureReadyGraduateAr, aiEmployeeProductDemos: aiEmployeeProductDemosAr, aiEmployeePage: aiEmployeePageAr, aiEmployeeSoftware: aiEmployeeSoftwareAr, servicesPage: servicesPageAr },
 de: { ...commonDe, home: homeDe, blog: blogDe, about: aboutDe, contact: contactDe, clientJourney: clientJourneyDe, futureReadyGraduate: futureReadyGraduateDe, aiEmployeeProductDemos: aiEmployeeProductDemosDe, aiEmployeePage: aiEmployeePageDe, aiEmployeeSoftware: aiEmployeeSoftwareDe, servicesPage: servicesPageDe },
 es: { ...commonEs, home: homeEs, blog: blogEs, about: aboutEs, contact: contactEs, clientJourney: clientJourneyEs, futureReadyGraduate: futureReadyGraduateEs, aiEmployeeProductDemos: aiEmployeeProductDemosEs, aiEmployeePage: aiEmployeePageEs, aiEmployeeSoftware: aiEmployeeSoftwareEs, servicesPage: servicesPageEs },
 }
}

export const translations = buildTranslations()
