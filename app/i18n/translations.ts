/**
 * Full-site translations: English, French, Spanish, Arabic, German
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
import type { ServicesPageTranslations } from '@/app/i18n/servicesPage'
import { servicesPageEn, servicesPageFr } from '@/app/i18n/servicesPage'

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
  /** Section labels (ALL CAPS in UI via .section-label). Use for SOLUTIONS, LOCATIONS, PROOF, etc. */
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
  brokenLabel: string
  aiFlowLabel: string
  /** Explains that counts are one 100-lead batch, per-stage pipeline size */
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
  servicesPage: ServicesPageTranslations
}

function buildTranslations(): Record<Language, TranslationKeys> {
  const commonEn = {
    nav: {
      ourMission: 'Our Mission',
      aboutUs: 'About Us',
      caseStudies: 'Case Studies',
      solutions: 'Services',
      articles: 'Articles',
      contact: 'Contact us',
      aiEmployee: 'AI Employee',
      aiEmployeeDesc:
        'Intelligent systems for service businesses: capture leads, retain clients, scale without chaos.',
      futureReadyGraduate: 'Future-Ready Graduate Program',
      futureReadyGraduateDesc: 'Transform students into job-ready professionals. Personalized guided learning that brings out entrepreneurial talents.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'Custom software with integrated AI for niche-specific problems',
    },
    cta: {
      getStarted: 'Get Started',
      contactUsToLearnMore: 'Contact us to learn more',
      bookStrategy: 'Book a Strategy Call',
      bookConsultation: 'Book Your Free Consultation',
      scheduleConsultation: 'Schedule Consultation',
      bookDemo: 'Book a Demo',
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
      resources: 'Resources',
      company: 'Company',
      theme: 'Theme',
      futureReadyDemo: 'Future-Ready Graduate Program Demo',
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
    },
  }

  const commonFr = {
    nav: {
      ourMission: 'Notre Mission',
      aboutUs: 'À propos',
      caseStudies: 'Études de cas',
      solutions: 'Services',
      articles: 'Articles',
      contact: 'Contactez-nous',
      aiEmployee: 'Employé IA',
      aiEmployeeDesc:
        'Systèmes intelligents pour les entreprises de services : prospection, fidélisation, croissance sans chaos.',
      futureReadyGraduate: 'Programme Diplômé Prêt pour l\'Avenir',
      futureReadyGraduateDesc: 'Transformez les étudiants en professionnels prêts pour l\'emploi. Apprentissage guidé personnalisé qui révèle les talents entrepreneuriaux.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'Logiciels sur mesure avec IA intégrée pour des besoins de niche',
    },
    cta: {
      getStarted: 'Commencer',
      contactUsToLearnMore: 'Contactez-nous pour en savoir plus',
      bookStrategy: 'Réserver un appel stratégique',
      bookConsultation: 'Réserver votre consultation gratuite',
      scheduleConsultation: 'Planifier une consultation',
      bookDemo: 'Réserver une démo',
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
      newsletterTitle: 'Restez en avance',
      newsletterSubtitle: 'Analyses exclusives, conseils de transformation et tendances du secteur, une fois par mois.',
      newsletterPlaceholder: 'Votre adresse e-mail',
      newsletterEmailLabel: 'Adresse e-mail',
      subscribe: 'S\'abonner',
      newsletterThanks: 'Inscrit',
      newsletterError: 'Une erreur s\'est produite. Réessayez.',
      privacyPolicy: 'Politique de confidentialité',
      termsOfService: 'Conditions d\'utilisation',
      cookiePolicy: 'Politique des cookies',
    },
  }

  const commonDe = {
    nav: {
      ourMission: 'Unsere Mission',
      aboutUs: 'Über uns',
      caseStudies: 'Fallstudien',
      solutions: 'Services',
      articles: 'Artikel',
      contact: 'Kontakt',
      aiEmployee: 'KI-Mitarbeiter',
      aiEmployeeDesc:
        'Intelligente Systeme für Dienstleister: Leads, Kundenbindung, skalieren ohne Chaos.',
      futureReadyGraduate: 'Future-Ready Graduate Program',
      futureReadyGraduateDesc: 'Machen Sie Studenten zu arbeitsbereiten Fachleuten. Personalisiertes geführtes Lernen, das unternehmerische Talente fördert.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'Maßgeschneiderte KI-Software für Nischenprobleme',
    },
    cta: {
      getStarted: 'Loslegen',
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
      resources: 'Ressourcen',
      company: 'Unternehmen',
      theme: 'Design',
      futureReadyDemo: 'Future-Ready Graduate Program Demo',
      aiEmployeeDemo: 'KI-Mitarbeiter Demo',
      ourMission: 'Unsere Mission',
      whatWeFightFor: 'Wofür wir kämpfen',
      our2026Commitment: 'Unser 2026-Verprechen',
      aboutUs: 'Über uns',
      careers: 'Karriere',
      contact: 'Kontakt',
      affiliateProgram: 'Partnerprogramm',
      copyright: 'Alle Rechte vorbehalten.',
      trustedBy: 'Vertraut von Unternehmen und Schulen weltweit',
      newsletterTitle: 'Bleiben Sie auf dem Laufenden',
      newsletterSubtitle: 'Exklusive Einblicke, Tipps zur Transformation und Branchentrends monatlich.',
      newsletterPlaceholder: 'E-Mail eingeben',
      newsletterEmailLabel: 'E-Mail-Adresse',
      subscribe: 'Abonnieren',
      newsletterThanks: 'Abonniert',
      newsletterError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
      privacyPolicy: 'Datenschutz',
      termsOfService: 'Nutzungsbedingungen',
      cookiePolicy: 'Cookie-Richtlinie',
    },
  }

  const commonEs = {
    nav: {
      ourMission: 'Nuestra Misión',
      aboutUs: 'Nosotros',
      caseStudies: 'Casos de éxito',
      solutions: 'Soluciones',
      articles: 'Artículos',
      contact: 'Contacto',
      aiEmployee: 'Empleado IA',
      aiEmployeeDesc:
        'Sistemas inteligentes para negocios de servicios: captar leads, retención, escalar sin caos.',
      futureReadyGraduate: 'Future-Ready Graduate Program',
      futureReadyGraduateDesc: 'Transforme estudiantes en profesionales listos para el empleo. Aprendizaje guiado personalizado que desarrolla talentos emprendedores.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'Software a medida con IA integrada para problemas de nicho',
    },
    cta: {
      getStarted: 'Empezar',
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
      resources: 'Recursos',
      company: 'Empresa',
      theme: 'Tema',
      futureReadyDemo: 'Demo Future-Ready Graduate Program',
      aiEmployeeDemo: 'Demo Empleado IA',
      ourMission: 'Nuestra Misión',
      whatWeFightFor: 'Por lo que luchamos',
      aboutUs: 'Nosotros',
      careers: 'Carreras',
      contact: 'Contacto',
      affiliateProgram: 'Programa de afiliados',
      copyright: 'Todos los derechos reservados.',
      trustedBy: 'Con la confianza de empresas y escuelas en todo el mundo',
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
    },
  }

  const commonAr = {
    nav: {
      ourMission: 'مهمتنا',
      aboutUs: 'من نحن',
      caseStudies: 'دراسات الحالة',
      solutions: 'الخدمات',
      articles: 'المقالات',
      contact: 'اتصل بنا',
      aiEmployee: 'الموظف الذكي',
      aiEmployeeDesc:
        'أنظمة ذكية لشركات الخدمات: التقاط العملاء، الاحتفاظ بهم، والنمو بلا فوضى.',
      futureReadyGraduate: 'Future-Ready Graduate Program',
      futureReadyGraduateDesc: 'حول الطلاب إلى محترفين جاهزين للعمل. تعلم موجّه شخصي يكشف المواهب الريادية.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'برمجيات مخصّصة بذكاء اصطناعي مدمج للمشكلات المتخصصة',
    },
    cta: {
      getStarted: 'ابدأ الآن',
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
      resources: 'الموارد',
      company: 'الشركة',
      theme: 'المظهر',
      futureReadyDemo: 'عرض Future-Ready Graduate Program',
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
    },
  }

  const homeEn: HomeTranslations = {
    hero: {
      badge: 'Systems That Convert',
      badge1: 'Systems That Convert',
      badge2: 'Growth & Skills',
      badge3: 'AI for Real Businesses',
      title: 'We Fix the Gaps. ',
      titleHighlight: 'You Get Results or Access.',
      subtitle:
        'Losing clients, holding unused degrees because opportunities are missing, or sitting on great ideas because hiring an engineer feels out of reach? We build digital systems, skills pathways, and AI solutions that turn those gaps into growth.',
      stat1Value: '150+',
      stat1Label: 'Businesses Transformed',
      stat2Value: 'Since 2019',
      stat3Value: 'Africa & Beyond',
      stat3Label: '',
      ourStory: 'Our Story',
      whatWeDo: 'Our Services',
    },
    mission: {
      title: 'Our Mission',
      statement: 'Technology that serves everyone.',
      description: 'We dream of a world where everyone is enabled, empowered, and connected to the technology and skills that change lives.',
      commitmentOneLiner: 'By end of 2026 we\'re committed to creating employment for 100 people and equipping 10,000 more with digital skills so they can thrive in the gig economy and as entrepreneurs.',
      valuesTitle: 'Our Values',
      valuesSubtitle: "What We Stand For",
      humanFirst: 'Human First',
      humanFirstDesc: 'Tech that makes you stronger, not replaces you.',
      humanFirstPrinciple: 'People first.',
      equalAccess: 'Equal Access',
      equalAccessDesc: 'Small businesses get big-business tools.',
      equalAccessPrinciple: "Budget shouldn't decide who wins.",
      realResults: 'Real Results',
      realResultsDesc: 'Leads. Jobs created. Revenue. We measure what matters.',
      realResultsPrinciple: 'Results from day one.',
      builtToLast: 'Built to Last',
      builtToLastDesc: 'Systems that grow with you. No obsolescence.',
      builtToLastPrinciple: 'Partners, not vendors.',
    },
    fighting: {
      badge: "What We're Fighting For",
      title: 'Three Threats to Growth.',
      subtitle: 'Teams feel them first. Systems close the gaps.',
      realProblems: 'We watch the numbers that matter. You get clarity, not noise.',
      missedLeads: 'Missed & Slow Responses',
      missedLeadsProblem:
        'Billions vanish when calls, chats, and forms go unanswered, speed still wins revenue.',
      missedLeadsSolution: 'Always-on AI: answer, qualify, book, so nothing sits in the queue.',
      missedLeadsOutcome: 'Every inquiry gets a response. More booked conversations, less leakage.',
      missedLeadsStatLabel: 'Lost annually to missed leads',
      skillsGap: 'Unequal Skills Access',
      skillsGapProblem:
        'Digital skills split the workforce, too many people never get training employers actually hire for.',
      skillsGapSolution:
        'Guided programs matched to real talent, job-ready skills, not generic course catalogs.',
      skillsGapOutcome: 'Graduates employers want, or founders who build their own income.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Without fair access to digital skills',
      techDivide: 'Budget vs. Stack',
      techDivideProblem: 'Enterprise stacks cost millions; most SMBs run on spreadsheets and duct-taped tools.',
      techDivideSolution:
        'Niche software, web, mobile, or desktop, built around one business challenge off-the-shelf tools cannot fix, scoped to your budget, not another bloated platform.',
      techDivideOutcome:
        'A focused product for that problem: clear scope, ownership, and no million-dollar stack tax.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Typical enterprise vs. SMB tech spend ratio',
      theProblem: 'The Problem',
      theSolution: 'The Solution',
      theOutcome: 'The Outcome',
    },
    commitment2026: {
      badge: 'Our Promise by 2026',
      title: '100 Jobs. 10,000 People Ready for the Gig Economy.',
      subtitle:
        'Talent and opportunity should not depend on luck. We are committing to real employment and real training, so more people can earn, compete, and build income on their own terms.',
      pillar1Title: '100 people in employment',
      pillar1Desc: 'Roles at Digni or with our partners by end of 2026, stability you can plan around.',
      pillar2Title: '10,000 equipped with digital skills',
      pillar2Desc:
        'Ready for entrepreneurship and gig work through programs like our Future-Ready Graduate Program.',
      proofLine: 'Already in motion: 85% employment rate among graduates, 85+ learners per cohort across partner schools.',
      proofLink1Text: 'Future-Ready Graduate Program',
      proofLink2Text: 'Careers',
      ctaPrimary: 'Book a Strategy Call',
    },
    whatWeDo: {
      badge: 'What We Do',
      title: 'Three Ways We',
      subtitle: 'Fight Back',
      forBusinesses: 'For Growing Businesses',
      forSchools: 'For Professionals & Students',
      forUniqueNeeds: 'For Organizations',
      aiEmployeeTitle: 'AI Employee Systems',
      aiEmployeeDesc:
        'Most brand and enterprise teams lose potential clients in the follow-up, not because their ads failed to perform.\n\nWe install an AI Employee that captures, qualifies, and books 24/7, plus a strategist to sharpen campaigns and grow your pipeline.',
      aiEmployeeApproach:
        'Full conversion system: AI captures and books around the clock, with human experts optimizing campaigns and pipeline growth.',
      aiEmployeeOutcome1: 'Turn more ad clicks into real clients',
      aiEmployeeOutcome2: 'Instant replies, smart follow-ups, and booked appointments',
      aiEmployeeOutcome3: 'Human expert ensures performance and continuous improvement',
      aiEmployeeOutcome4: 'Strategist-led campaigns and a pipeline that actually grows',
      aiEmployeePrimaryCta: 'View AI Employee Systems',
      aiEmployeeSecondaryCta: 'Book Growth System Audit',
      futureReadyTitle: 'Future-Ready Program',
      futureReadyDesc:
        'Degrees alone aren\'t enough anymore.\n\nWe train you to use AI and automation to build real projects, increase your earning power, and stay relevant in an AI-driven economy.',
      futureReadyApproach:
        'Hands-on training in AI and automation so you ship real projects and raise your market value.',
      futureReadyOutcome1: 'Learn high-value, in-demand skills',
      futureReadyOutcome2: 'Build real projects',
      futureReadyOutcome3: 'Stay ahead of automation',
      futureReadyOutcome4: 'Stay relevant in an AI-driven economy',
      futureReadyPrimaryCta: 'View Program Details',
      futureReadySecondaryCta: 'Book School Consultation',
      agenticSoftwaresTitle: 'Agentic Systems',
      agenticSoftwaresDesc:
        'Manual work slows your growth.\n\nWe design custom AI systems that automate operations, decisions, and workflows — so your business runs smoother and scales without growing headcount.',
      agenticSoftwaresApproach:
        'Custom AI that removes manual bottlenecks across operations, decisions, and workflows.',
      agenticSoftwaresOutcome1: 'Automate complex operations',
      agenticSoftwaresOutcome2: 'Reduce manual effort',
      agenticSoftwaresOutcome3: 'Build scalable infrastructure',
      agenticSoftwaresOutcome4: 'Scale without proportional hiring',
      agenticSoftwaresPrimaryCta: 'View Agentic Systems',
      agenticSoftwaresSecondaryCta: 'Book Project Consultation',
      notSureTitle: 'Not Sure Which Service?',
      notSureSubtitle: "Tell us. We'll find the fix.",
      whatWeDoDescription: 'Each fixes a real problem.',
    },
    stats: {
      badge: 'Proven Track Record',
      title: 'Real Results from',
      subtitle: 'Real Implementations',
      realNumbers: 'Real numbers. Real clients.',
      stat1Label: 'Lead Conversion Increase',
      stat1Sublabel: 'AI Employee™ Results',
      stat2Label: 'Graduate Employment Rate',
      stat2Sublabel: 'Future-Ready Graduate Program Success',
      stat3Label: 'Always-On Service',
      stat3Sublabel: 'Never Miss Another Lead',
      stat4Label: 'Client Satisfaction',
      stat4Sublabel: 'Across Both Solutions',
      aiEmployeeCard: 'AI Employee™',
      aiEmployeeCardSub: '50+ businesses. 10,000+ leads/month.',
      futureReadyCard: 'Future-Ready Graduate Program',
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
      badge: "Let's Create Impact Together",
      title: 'Technology Should Serve ',
      titleHighlight: 'Everyone.',
      mechanism: 'We listen → We build the fix → You get results.',
      bullet1: '30-min Strategy Call',
      bullet2: 'No Obligation',
      bullet3: 'Actionable Insights',
    },
  }

  const homeFr: HomeTranslations = {
    hero: {
      badge: 'Systèmes qui convertissent',
      badge1: 'Systèmes qui convertissent',
      badge2: 'Croissance & compétences',
      badge3: 'IA pour les PME',
      title: 'Nous fermons les écarts. ',
      titleHighlight: 'Vous obtenez les résultats.',
      subtitle:
        'Prospects perdus, talents inexploités, idées en attente, nous vous aidons à en faire une croissance concrète. Systèmes numériques, compétences et IA adaptés à votre budget, pas à celui des grands groupes.',
      stat1Value: '150+',
      stat1Label: 'Entreprises transformées',
      stat2Value: 'Depuis 2019',
      stat3Value: 'Afrique et au-delà',
      stat3Label: '',
      ourStory: 'Notre histoire',
      whatWeDo: 'Ce que nous faisons',
    },
    mission: {
      title: 'Notre Mission',
      statement: 'Une technologie au service de tous.',
      description: 'Nous rêvons d\'un monde où chacun est outillé, responsabilisé et connecté aux technologies et compétences qui changent les vies.',
      commitmentOneLiner: 'D\'ici fin 2026, nous nous engageons à créer des emplois pour 100 personnes et à former 10 000 autres aux compétences numériques pour qu\'elles prospèrent dans l\'économie du travail à la tâche et en tant qu\'entrepreneurs.',
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
      badge: 'Ce pour quoi nous nous battons',
      title: 'Trois freins à la croissance.',
      subtitle: 'Les équipes les constatent en premier. Les systèmes comblent les brèches.',
      realProblems: 'Nous suivons les indicateurs qui comptent. Vous voyez clair, pas le bruit.',
      missedLeads: 'Réponses trop tard ou absentes',
      missedLeadsProblem:
        'Des milliards s\'évaporent quand appels, chats et formulaires restent sans réponse ; la rapidité reste décisive pour convertir.',
      missedLeadsSolution: 'IA toujours active : répondre, qualifier, planifier, rien ne reste en file d\'attente.',
      missedLeadsOutcome: 'Chaque demande obtient une réponse. Plus de rendez-vous, moins de fuite.',
      missedLeadsStatLabel: 'Perdus annuellement en prospects manqués',
      skillsGap: 'Accès inégal aux compétences',
      skillsGapProblem:
        'Les compétences numériques divisent le marché, trop de personnes n\'ont pas la formation que les employeurs embauchent vraiment.',
      skillsGapSolution:
        'Des programmes guidés calqués sur les talents réels, compétences employables, pas catalogues génériques.',
      skillsGapOutcome: 'Des profils recherchés, ou des créateurs de revenus par eux-mêmes.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Sans accès équitable aux compétences numériques',
      techDivide: 'Budget vs. stack',
      techDivideProblem: 'Les stacks entreprise coûtent des millions ; beaucoup de PME bricolent tableurs et outils.',
      techDivideSolution:
        'Logiciel de niche, web, mobile ou desktop, pour un enjeu métier précis que le générique ne règle pas, calibré sur votre budget, pas une plateforme surdimensionnée.',
      techDivideOutcome:
        'Un produit ciblé pour ce problème : périmètre clair, maîtrise, sans taxe « stack enterprise ».',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Ratio type dépenses tech entreprise vs PME',
      theProblem: 'Le Problème',
      theSolution: 'La Solution',
      theOutcome: 'Le Résultat',
    },
    commitment2026: {
      badge: 'Notre promesse d’ici 2026',
      title: '100 emplois. 10 000 personnes prêtes pour le travail à la tâche.',
      subtitle:
        'Le talent et l’opportunité ne devraient pas relever du hasard. Nous nous engageons sur un emploi et une formation réels, pour que plus de personnes puissent gagner leur vie, rivaliser et construire leur revenu à leurs conditions.',
      pillar1Title: '100 personnes en emploi',
      pillar1Desc:
        'Postes chez Digni ou avec nos partenaires d’ici fin 2026, une stabilité sur laquelle vous pouvez compter.',
      pillar2Title: '10 000 formés aux compétences numériques',
      pillar2Desc:
        'Prêts pour l’entrepreneuriat et le travail à la tâche via des programmes comme le Programme Diplômé Prêt pour l’Avenir.',
      proofLine: 'Déjà en cours : 85 % en emploi parmi les diplômés, 85+ apprenants par cohorte dans les établissements partenaires.',
      proofLink1Text: 'Programme Diplômé Prêt pour l\'Avenir',
      proofLink2Text: 'Carrières',
      ctaPrimary: 'Réserver un appel stratégique',
    },
    whatWeDo: {
      badge: 'Ce que nous faisons',
      title: 'Trois façons de',
      subtitle: 'réagir',
      forBusinesses: 'Pour les entreprises en croissance',
      forSchools: 'Pour les professionnels et les étudiants',
      forUniqueNeeds: 'Pour les organisations',
      aiEmployeeTitle: 'Systèmes employé IA',
      aiEmployeeDesc:
        'On perd des leads au suivi — rarement sur le clic pub.\n\nNous installons un employé IA qui capture, qualifie et prend des RDV 24h/24, avec un stratège pour des campagnes plus rentables et un pipeline qui grossit — un système de conversion, pas un simple chatbot.',
      aiEmployeeApproach:
        'Système de conversion complet : l\'IA capte, qualifie et prend des rendez-vous en continu, avec des experts humains qui optimisent vos campagnes et la croissance du pipeline.',
      aiEmployeeOutcome1: 'Transformez plus de clics pub en vrais clients',
      aiEmployeeOutcome2: 'Réponses instantanées, relances intelligentes et rendez-vous pris',
      aiEmployeeOutcome3: 'Un expert humain assure la performance et l\'amélioration continue',
      aiEmployeeOutcome4: 'Campagnes pilotées par un stratège et un pipeline qui croît vraiment',
      aiEmployeePrimaryCta: 'Voir les systèmes employé IA',
      aiEmployeeSecondaryCta: 'Réserver un audit Growth System',
      futureReadyTitle: 'Programme Future-Ready',
      futureReadyDesc:
        'Les diplômes ne suffisent plus.\n\nNous vous formons à l\'IA et à l\'automatisation pour livrer de vrais projets, augmenter votre pouvoir de marché et rester pertinent dans une économie pilotée par l\'IA.',
      futureReadyApproach:
        'Formation concrète à l\'IA et à l\'automatisation pour produire des projets réels et hausser votre valeur.',
      futureReadyOutcome1: 'Acquérir des compétences rentables et recherchées',
      futureReadyOutcome2: 'Construire de vrais projets',
      futureReadyOutcome3: 'Rester en avance sur l\'automatisation',
      futureReadyOutcome4: 'Rester pertinent dans une économie IA',
      futureReadyPrimaryCta: 'Détails du programme',
      futureReadySecondaryCta: 'Réserver une consultation école',
      agenticSoftwaresTitle: 'Systèmes agentiques',
      agenticSoftwaresDesc:
        'Le travail manuel freine votre croissance.\n\nNous concevons des systèmes IA sur mesure qui automatisent les opérations, les décisions et les flux — pour que l\'entreprise tourne plus fluide et scale sans gonfler les effectifs.',
      agenticSoftwaresApproach:
        'IA sur mesure pour lever les goulots manuels sur les opérations, les décisions et les workflows.',
      agenticSoftwaresOutcome1: 'Automatiser des opérations complexes',
      agenticSoftwaresOutcome2: 'Réduire l\'effort manuel',
      agenticSoftwaresOutcome3: 'Bâtir une infrastructure scalable',
      agenticSoftwaresOutcome4: 'Scaler sans embauche proportionnelle',
      agenticSoftwaresPrimaryCta: 'Voir les systèmes agentiques',
      agenticSoftwaresSecondaryCta: 'Réserver une consultation projet',
      notSureTitle: 'Pas sûr du service qu\'il vous faut ?',
      notSureSubtitle: 'Dites-nous votre problème. Nous trouverons la solution.',
      whatWeDoDescription: 'Chaque service résout un vrai problème. Impact, pas de jargon.',
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
      aiEmployeeCardSub: '50+ entreprises. 10 000+ prospects/mois.',
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
      badge: 'Créons ensemble un impact',
      title: 'La technologie doit servir ',
      titleHighlight: 'tout le monde.',
      mechanism: 'Nous écoutons → Nous construisons la solution → Vous obtenez des résultats.',
      bullet1: 'Appel stratégique de 30 min',
      bullet2: 'Sans engagement',
      bullet3: 'Conseils actionnables',
    },
  }

  const homeAr: HomeTranslations = {
    hero: {
      badge: 'أنظمة تحوّل',
      badge1: 'أنظمة تحوّل',
      badge2: 'نمو ومهارات',
      badge3: 'ذكاء اصطناعي للأعمال',
      title: 'نسدّ الفجوات. ',
      titleHighlight: 'تحصل على النتائج.',
      subtitle:
        'عملاء محتملون ضائعون، مواهب بلا استثمار، أفكار على الرف, نساعدك على تحويلها إلى نمو. أنظمة رقمية وتأهيل وذكاء اصطناعي يناسب ميزانيتك لا ميزانية العمالقة.',
      stat1Value: '+150',
      stat1Label: 'شركة تم تحويلها',
      stat2Value: 'منذ 2019',
      stat3Value: 'أفريقيا وما بعدها',
      stat3Label: '',
      ourStory: 'قصتنا',
      whatWeDo: 'ماذا نفعل',
    },
    mission: {
      title: 'مهمتنا',
      statement: 'تقنية تخدم الجميع.',
      description: 'نحلم بعالم يُمكّن الجميع ويربطهم بالتقنية والمهارات التي تغيّر الحياة.',
      commitmentOneLiner: 'بحلول نهاية 2026 نلتزم بخلق فرص عمل لـ 100 شخص وتأهيل 10,000 آخرين بالمهارات الرقمية ليزدهروا في اقتصاد العمل الحر وكرواد أعمال.',
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
      badge: 'ما نكافح من أجله',
      title: 'ثلاث تهديدات للنمو.',
      subtitle: 'الفرق تشعر بها أولاً. الأنظمة تسدّ الثغرات.',
      realProblems: 'نراقب الأرقام التي تهم. تحصل على وضوح لا ضجيجاً.',
      missedLeads: 'تأخر الرد أو غيابه',
      missedLeadsProblem:
        'مليارات تضيع عندما تبقى المكالمات والمحادثات والنماذج بلا رد, السرعة ما زالت تحسم الإيراد.',
      missedLeadsSolution: 'ذكاء دائم التشغيل: الرد والتأهيل والحجز, لا شيء ينتظر في الطابور.',
      missedLeadsOutcome: 'كل استفسار ينال رداً. مواعيد أكثر، تسرّب أقل.',
      missedLeadsStatLabel: 'تضيع سنوياً في عملاء محتملين',
      skillsGap: 'تفاوت في الوصول للمهارات',
      skillsGapProblem:
        'المهارات الرقمية تقسم السوق, كثيرون لا يحصلون على التدريب الذي يوظّفه أصحاب العمل فعلاً.',
      skillsGapSolution: 'برامج موجّهة تناسب المواهب الحقيقية, مهارات جاهزة للوظيفة لا كتالوجات عامة.',
      skillsGapOutcome: 'خريجون مطلوبون, أو رواد يبنون دخلهم بأنفسهم.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'دون وصول عادل للمهارات الرقمية',
      techDivide: 'الميزانية مقابل البنية',
      techDivideProblem: 'أنظمة المؤسسات تكلف ملايين؛ كثير من المشاريع الصغيرة تعمل بجداول وأدوات مؤقتة.',
      techDivideSolution:
        'برمجيات متخصصة لتحدي أعمال واحد لا يُحلّ بالجداول أو الحلول الجاهزة, للويب أو الجوال أو سطح المكتب, بحجم ميزانيتك لا منصة منفّخة.',
      techDivideOutcome:
        'منتج مركّز لذلك التحدي: نطاق واضح، ملكية، دون عبء أنظمة المؤسسات.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'نسبة إنفاق تقني نموذجية: كبيرة مقابل صغيرة',
      theProblem: 'المشكلة',
      theSolution: 'الحل',
      theOutcome: 'النتيجة',
    },
    commitment2026: {
      badge: 'وعدنا لك بحلول 2026',
      title: '100 وظيفة. 10,000 شخص جاهز لاقتصاد العمل الحر.',
      subtitle:
        'الموهبة والفرصة لا يجب أن تكونا صدفة. نلتزم بتوظيف حقيقي وتأهيل حقيقي, حتى يزيد من يستطيع الكسب والمنافسة وبناء الدخل بشروطه.',
      pillar1Title: '100 شخص في وظائف',
      pillar1Desc: 'أدوار في Digni أو مع شركائنا بحلول نهاية 2026, استقرار يمكنك الاعتماد عليه.',
      pillar2Title: '10,000 مؤهّلون بالمهارات الرقمية',
      pillar2Desc: 'جاهزون لريادة الأعمال والعمل الحر عبر برامج مثل Future-Ready Graduate.',
      proofLine: 'قيد التنفيذ: 85% توظيفاً بين الخريجين، 85+ متعلماً لكل فوج في المدارس الشريكة.',
      proofLink1Text: 'برنامج Future-Ready Graduate',
      proofLink2Text: 'الوظائف',
      ctaPrimary: 'احجز مكالمة استراتيجية',
    },
    whatWeDo: {
      badge: 'ماذا نفعل',
      title: 'ثلاث طرق',
      subtitle: 'للمقاومة',
      forBusinesses: 'للشركات النامية',
      forSchools: 'للمهنيين والطلاب',
      forUniqueNeeds: 'للمؤسسات',
      aiEmployeeTitle: 'أنظمة الموظف الذكي',
      aiEmployeeDesc:
        'تضيع الفرص في المتابعة — لا في النقرة على الإعلان.\n\nنثبّت موظفاً ذكياً يلتقط ويؤهّل ويحجز على مدار الساعة، مع استراتيجي يحسّن الحملات وينمّي خط المبيعات — نظام تحويل، وليس مجرد دردشة آلية.',
      aiEmployeeApproach:
        'نظام تحويل كامل: ذكاء اصطناعي يلتقط ويحجز بلا انقطاع، مع خبراء بشر يحسّنون الحملات ونموّ خط الأنابيب.',
      aiEmployeeOutcome1: 'حوّل المزيد من نقرات الإعلانات إلى عملاء حقيقيين',
      aiEmployeeOutcome2: 'ردود فورية ومتابعات ذكية ومواعيد محجوزة',
      aiEmployeeOutcome3: 'خبير بشري يضمن الأداء والتحسين المستمر',
      aiEmployeeOutcome4: 'حملات بقيادة استراتيجي وخط أنابيب ينمو فعلياً',
      aiEmployeePrimaryCta: 'اعرض أنظمة الموظف الذكي',
      aiEmployeeSecondaryCta: 'احجز مراجعة Growth System',
      futureReadyTitle: 'برنامج Future-Ready',
      futureReadyDesc:
        'الشهادات وحدها لم تعد تكفي.\n\nندربك على استخدام الذكاء الاصطناعي والأتمتة لبناء مشاريع حقيقية، وزيادة قدرتك على الكسب، والبقاء ملائماً في اقتصاد يقوده الذكاء الاصطناعي.',
      futureReadyApproach:
        'تدريب عملي على الذكاء الاصطناعي والأتمتة لتسليم مشاريع حقيقية ورفع قيمتك في السوق.',
      futureReadyOutcome1: 'تعلّم مهارات عالية القيمة ومطلوبة',
      futureReadyOutcome2: 'ابنِ مشاريع حقيقية',
      futureReadyOutcome3: 'تقدّم على موجة الأتمتة',
      futureReadyOutcome4: 'ابقَ ملائماً في اقتصاد يقوده الذكاء الاصطناعي',
      futureReadyPrimaryCta: 'تفاصيل البرنامج',
      futureReadySecondaryCta: 'احجز استشارة للمدرسة',
      agenticSoftwaresTitle: 'أنظمة وكيلية',
      agenticSoftwaresDesc:
        'العمل اليدوي يبطئ نموك.\n\nنصمم أنظمة ذكاء اصطناعي مخصصة تؤتمت العمليات والقرارات وسير العمل — لتعمل أعمالك بسلاسة أكبر وتتوسّع دون زيادة عدد الموظفين بنفس النسبة.',
      agenticSoftwaresApproach:
        'ذكاء اصطناعي مخصص يلغي الاختناقات اليدوية في العمليات والقرارات وسير العمل.',
      agenticSoftwaresOutcome1: 'أتمتة عمليات معقّدة',
      agenticSoftwaresOutcome2: 'تقليل الجهد اليدوي',
      agenticSoftwaresOutcome3: 'بناء بنية تحتية قابلة للتوسّع',
      agenticSoftwaresOutcome4: 'توسّع دون توظيف متناسب',
      agenticSoftwaresPrimaryCta: 'اعرض الأنظمة الوكيلية',
      agenticSoftwaresSecondaryCta: 'احجز استشارة للمشروع',
      notSureTitle: 'لست متأكداً من الخدمة التي تحتاجها؟',
      notSureSubtitle: 'أخبرنا بمشكلتك. نجد الحل.',
      whatWeDoDescription: 'كل خدمة تحل مشكلة حقيقية. أثر، لا كلمات جوفاء.',
    },
    stats: {
      badge: 'سجل مثبت',
      title: 'نتائج حقيقية من',
      subtitle: 'تطبيقات حقيقية',
      realNumbers: 'أرقام حقيقية. عملاء حقيقيون.',
      stat1Label: 'زيادة تحويل العملاء',
      stat1Sublabel: 'نتائج الموظف الذكي™',
      stat2Label: 'معدل توظيف الخريجين',
      stat2Sublabel: 'نجاح Future-Ready Graduate Program',
      stat3Label: 'خدمة متاحة دائماً',
      stat3Sublabel: 'لا تفوت عميلاً آخر',
      stat4Label: 'رضا العملاء',
      stat4Sublabel: 'عبر الحلين',
      aiEmployeeCard: 'الموظف الذكي™',
      aiEmployeeCardSub: '50+ شركة. 10,000+ عميل/شهر.',
      futureReadyCard: 'Future-Ready Graduate Program',
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
      badge: 'لنخلق الأثر معاً',
      title: 'التقنية يجب أن تخدم ',
      titleHighlight: 'الجميع.',
      mechanism: 'نستمع → نبني الحل → تحصل على النتائج.',
      bullet1: 'مكالمة استراتيجية 30 دقيقة',
      bullet2: 'بدون التزام',
      bullet3: 'رؤى قابلة للتطبيق',
    },
  }

  const homeDe: HomeTranslations = {
    hero: {
      badge: 'Systeme, die konvertieren',
      badge1: 'Systeme, die konvertieren',
      badge2: 'Wachstum & Skills',
      badge3: 'KI für KMU',
      title: 'Wir schließen die Lücken. ',
      titleHighlight: 'Sie erhalten Ergebnisse.',
      subtitle:
        'Verlorene Leads, ungenutztes Talent, Ideen auf Eis, wir helfen Ihnen, daraus Wachstum zu machen. Digitale Systeme, Qualifizierung und KI für echte Budgets, nicht für Konzernrechnungen.',
      stat1Value: '150+',
      stat1Label: 'Transformierte Unternehmen',
      stat2Value: 'Seit 2019',
      stat3Value: 'Afrika und darüber hinaus',
      stat3Label: '',
      ourStory: 'Unsere Geschichte',
      whatWeDo: 'Was wir tun',
    },
    mission: {
      title: 'Unsere Mission',
      statement: 'Technologie, die allen dient.',
      description: 'Wir träumen von einer Welt, in der jeder befähigt, ermächtigt und mit den Technologien und Fähigkeiten verbunden ist, die Leben verändern.',
      commitmentOneLiner: 'Bis Ende 2026 verpflichten wir uns, 100 Menschen in Lohn und Brot zu bringen und 10.000 weitere mit digitalen Fähigkeiten auszustatten, damit sie in der Gig-Economy und als Unternehmer bestehen können.',
      valuesTitle: 'Unsere Werte',
      valuesSubtitle: 'Wofür wir stehen',
      humanFirst: 'Mensch zuerst',
      humanFirstDesc: 'Technologie, die Sie stärkt, nicht ersetzt.',
      humanFirstPrinciple: 'Menschen zuerst.',
      equalAccess: 'Gleicher Zugang',
      equalAccessDesc: 'Kleine Unternehmen erhalten Großunternehmen-Tools.',
      equalAccessPrinciple: 'Budget sollte nicht entscheiden, wer gewinnt.',
      realResults: 'Echte Ergebnisse',
      realResultsDesc: 'Leads. Geschaffene Jobs. Umsatz. Wir messen, was zählt.',
      realResultsPrinciple: 'Ergebnisse von Tag eins.',
      builtToLast: 'Für die Ewigkeit gebaut',
      builtToLastDesc: 'Systeme, die mit Ihnen wachsen. Keine Veralterung.',
      builtToLastPrinciple: 'Partner, keine Lieferanten.',
    },
    fighting: {
      badge: 'Wofür wir kämpfen',
      title: 'Drei Bremsen für Wachstum.',
      subtitle: 'Teams spüren sie zuerst. Systeme schließen die Lücken.',
      realProblems: 'Wir beobachten die Kennzahlen, die zählen. Sie bekommen Klarheit, kein Rauschen.',
      missedLeads: 'Zu spät oder keine Antwort',
      missedLeadsProblem:
        'Milliarden verpuffen, wenn Anrufe, Chats und Formulare unbeantwortet bleiben, Geschwindigkeit holt Umsatz.',
      missedLeadsSolution: 'Immer verfügbare KI: antworten, qualifizieren, buchen, nichts bleibt in der Warteschlange.',
      missedLeadsOutcome: 'Jede Anfrage erhält Antwort. Mehr Termine, weniger Leckage.',
      missedLeadsStatLabel: 'Jährlich durch verpasste Leads verloren',
      skillsGap: 'Ungleicher Kompetenzzugang',
      skillsGapProblem:
        'Digitale Kompetenz spaltet den Markt, zu wenige bekommen die Ausbildung, die Arbeitgeber wirklich suchen.',
      skillsGapSolution:
        'Geführte Programme passend zu echten Talenten, einsatzfähige Skills, keine generischen Kataloge.',
      skillsGapOutcome: 'Absolventen mit Nachfrage, oder Gründer, die eigenes Einkommen schaffen.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Ohne fairen Zugang zu digitalen Skills',
      techDivide: 'Budget vs. Stack',
      techDivideProblem: 'Enterprise-Stacks kosten Millionen; viele KMU kämpfen mit Tabellen und Flickwerk.',
      techDivideSolution:
        'Nischensoftware für Web, Mobile oder Desktop, für eine konkrete Geschäftsherausforderung, die Standardtools nicht lösen, im Rahmen Ihres Budgets, nicht als überdimensionierte Plattform.',
      techDivideOutcome:
        'Ein fokussiertes Produkt für genau dieses Problem: klarer Scope, Eigentum, ohne Millionen-Stack.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Typisches Tech-Ausgabenverhältnis Enterprise zu KMU',
      theProblem: 'Das Problem',
      theSolution: 'Die Lösung',
      theOutcome: 'Das Ergebnis',
    },
    commitment2026: {
      badge: 'Unser Versprechen bis 2026',
      title: '100 Jobs. 10.000 Menschen bereit für die Gig-Economy.',
      subtitle:
        'Talent und Chancen dürfen nicht vom Glück abhängen. Wir verpflichten uns zu echten Jobs und echter Qualifizierung, damit mehr Menschen verdienen, mithalten und ihr Einkommen in eigener Hand gestalten können.',
      pillar1Title: '100 Menschen in Beschäftigung',
      pillar1Desc: 'Rollen bei Digni oder mit Partnern bis Ende 2026, Planbarkeit, auf die Sie sich verlassen können.',
      pillar2Title: '10.000 mit digitalen Fähigkeiten ausgestattet',
      pillar2Desc:
        'Bereit für Unternehmertum und Gig-Arbeit durch Programme wie das Future-Ready Graduate Program.',
      proofLine: 'Bereits unterwegs: 85% Beschäftigungsrate unter Absolventen, 85+ Lernende pro Kohorte an Partnerstandorten.',
      proofLink1Text: 'Future-Ready Graduate Program',
      proofLink2Text: 'Karriere',
      ctaPrimary: 'Strategiegespräch buchen',
    },
    whatWeDo: {
      badge: 'Was wir tun',
      title: 'Drei Wege, wie wir',
      subtitle: 'zurückschlagen',
      forBusinesses: 'Für wachsende Unternehmen',
      forSchools: 'Für Berufstätige und Studierende',
      forUniqueNeeds: 'Für Organisationen',
      aiEmployeeTitle: 'KI-Mitarbeiter-Systeme',
      aiEmployeeDesc:
        'Leads gehen im Follow-up verloren — selten schon beim Klick.\n\nWir installieren einen KI-Mitarbeiter, der erfasst, qualifiziert und 24/7 bucht, plus einen Strategen für bessere Kampagnen und eine wachsende Pipeline — Conversion-System, kein reiner Chatbot.',
      aiEmployeeApproach:
        'Vollständiges Conversion-System: KI erfasst und bucht rund um die Uhr, mit menschlichen Experten für Kampagnen und Pipeline-Wachstum.',
      aiEmployeeOutcome1: 'Mehr Anzeigenklicks in echte Kunden verwandeln',
      aiEmployeeOutcome2: 'Sofortige Antworten, smarte Follow-ups und gebuchte Termine',
      aiEmployeeOutcome3: 'Menschlicher Experte sichert Performance und kontinuierliche Verbesserung',
      aiEmployeeOutcome4: 'Strategen-geführte Kampagnen und eine Pipeline, die wirklich wächst',
      aiEmployeePrimaryCta: 'KI-Mitarbeiter-Systeme ansehen',
      aiEmployeeSecondaryCta: 'Growth-System-Audit buchen',
      futureReadyTitle: 'Future-Ready-Programm',
      futureReadyDesc:
        'Abschlüsse allein reichen nicht mehr.\n\nWir trainieren Sie im Einsatz von KI und Automatisierung, um echte Projekte zu liefern, Ihre Verdienstkraft zu steigern und in einer KI-getriebenen Wirtschaft relevant zu bleiben.',
      futureReadyApproach:
        'Praxisnahe Schulung in KI und Automatisierung, damit Sie echte Projekte ausliefern und Ihren Marktwert erhöhen.',
      futureReadyOutcome1: 'Hochwertige, gefragte Skills lernen',
      futureReadyOutcome2: 'Echte Projekte bauen',
      futureReadyOutcome3: 'Der Automatisierung einen Schritt voraus sein',
      futureReadyOutcome4: 'In einer KI-getriebenen Wirtschaft relevant bleiben',
      futureReadyPrimaryCta: 'Programmdetails anzeigen',
      futureReadySecondaryCta: 'Schulberatung buchen',
      agenticSoftwaresTitle: 'Agentische Systeme',
      agenticSoftwaresDesc:
        'Manuelle Arbeit bremst Ihr Wachstum.\n\nWir entwerfen maßgeschneiderte KI-Systeme, die Abläufe, Entscheidungen und Workflows automatisieren — damit Ihr Geschäft reibungsloser läuft und skaliert, ohne die Kopfzahl im gleichen Maß zu erhöhen.',
      agenticSoftwaresApproach:
        'Maßgeschneiderte KI, die manuelle Engpässe in Abläufen, Entscheidungen und Workflows beseitigt.',
      agenticSoftwaresOutcome1: 'Komplexe Abläufe automatisieren',
      agenticSoftwaresOutcome2: 'Manuellen Aufwand reduzieren',
      agenticSoftwaresOutcome3: 'Skalierbare Infrastruktur aufbauen',
      agenticSoftwaresOutcome4: 'Skalieren ohne proportional mehr Personal',
      agenticSoftwaresPrimaryCta: 'Agentische Systeme ansehen',
      agenticSoftwaresSecondaryCta: 'Projektberatung buchen',
      notSureTitle: 'Nicht sicher, welcher Service?',
      notSureSubtitle: 'Sagen Sie uns. Wir finden die Lösung.',
      whatWeDoDescription: 'Jeder behebt ein echtes Problem.',
    },
    stats: {
      badge: 'Bewährte Erfolgsbilanz',
      title: 'Echte Ergebnisse aus',
      subtitle: 'echten Implementierungen',
      realNumbers: 'Echte Zahlen. Echte Kunden.',
      stat1Label: 'Lead-Konversionssteigerung',
      stat1Sublabel: 'KI-Mitarbeiter™ Ergebnisse',
      stat2Label: 'Absolventen-Beschäftigungsrate',
      stat2Sublabel: 'Future-Ready Graduate Programmerfolg',
      stat3Label: 'Immer verfügbar',
      stat3Sublabel: 'Verpassen Sie keinen Lead mehr',
      stat4Label: 'Kundenzufriedenheit',
      stat4Sublabel: 'Bei beiden Lösungen',
      aiEmployeeCard: 'KI-Mitarbeiter™',
      aiEmployeeCardSub: '50+ Unternehmen. 10.000+ Leads/Monat.',
      futureReadyCard: 'Future-Ready Graduate Program',
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
      study1Result1: 'Anruf-Erfassungsrate',
      study1Result2: 'Lead-Konversionssteigerung',
      study1Result3: 'Zusätzlicher monatlicher Umsatz',
      study2Title: 'GS Laricharde',
      study2Duration: '6 Monate Programm',
      study2Problem: 'Nur 45% der Absolventen finden innerhalb von 12 Monaten Arbeit',
      study2Result1: 'Absolventen-Beschäftigungsrate',
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
      badge: 'Lassen Sie uns gemeinsam Impact schaffen',
      title: 'Technologie sollte ',
      titleHighlight: 'allen dienen.',
      mechanism: 'Wir hören zu → Wir bauen die Lösung → Sie erhalten Ergebnisse.',
      bullet1: '30-min Strategiegespräch',
      bullet2: 'Keine Verpflichtung',
      bullet3: 'Umsetzbare Einblicke',
    },
  }

  const homeEs: HomeTranslations = {
    hero: {
      badge: 'Sistemas que convierten',
      badge1: 'Sistemas que convierten',
      badge2: 'Crecimiento y habilidades',
      badge3: 'IA para pymes',
      title: 'Cerramos las brechas. ',
      titleHighlight: 'Usted obtiene los resultados.',
      subtitle:
        'Leads perdidos, talento sin explotar, ideas en espera, le ayudamos a convertirlos en crecimiento. Sistemas digitales, capacitación e IA que encajan en su presupuesto, no en una factura corporativa.',
      stat1Value: '150+',
      stat1Label: 'Empresas transformadas',
      stat2Value: 'Desde 2019',
      stat3Value: 'África y más allá',
      stat3Label: '',
      ourStory: 'Nuestra historia',
      whatWeDo: 'Lo que hacemos',
    },
    mission: {
      title: 'Nuestra Misión',
      statement: 'Tecnología que sirve a todos.',
      description: 'Soñamos con un mundo donde todos estén capacitados, empoderados y conectados con la tecnología y las habilidades que cambian vidas.',
      commitmentOneLiner: 'Para finales de 2026 nos comprometemos a crear empleo para 100 personas y capacitar a 10.000 más en competencias digitales para que prosperen en la economía gig y como emprendedores.',
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
      badge: 'Por lo que luchamos',
      title: 'Tres amenazas al crecimiento.',
      subtitle: 'Los equipos las sienten primero. Los sistemas cierran las brechas.',
      realProblems: 'Seguimos las métricas que importan. Usted obtiene claridad, no ruido.',
      missedLeads: 'Respuestas lentas o ausentes',
      missedLeadsProblem:
        'Miles de millones se pierden cuando llamadas, chats y formularios quedan sin respuesta, la velocidad sigue decidiendo ingresos.',
      missedLeadsSolution: 'IA siempre activa: responder, calificar, reservar, nada en cola.',
      missedLeadsOutcome: 'Cada consulta recibe respuesta. Más citas, menos pérdida.',
      missedLeadsStatLabel: 'Perdidos anualmente en leads perdidos',
      skillsGap: 'Acceso desigual a habilidades',
      skillsGapProblem:
        'Las habilidades digitales dividen el mercado, mucha gente no recibe la formación que los empleadores contratan de verdad.',
      skillsGapSolution:
        'Programas guiados acordes al talento real, habilidades listas para el empleo, no cursos genéricos.',
      skillsGapOutcome: 'Graduados demandados, o fundadores que crean su propio ingreso.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Sin acceso justo a competencias digitales',
      techDivide: 'Presupuesto vs. stack',
      techDivideProblem: 'Los stacks enterprise cuestan millones; muchas pymes viven entre hojas de cálculo y parches.',
      techDivideSolution:
        'Software de nicho, web, móvil o escritorio, para un desafío único que lo genérico no resuelve, acotado a su presupuesto, no otra plataforma inchada.',
      techDivideOutcome:
        'Un producto enfocado en ese problema: alcance claro, propiedad, sin el impuesto del stack enterprise.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Ratio típico gasto tech empresa vs PYME',
      theProblem: 'El problema',
      theSolution: 'La solución',
      theOutcome: 'El resultado',
    },
    commitment2026: {
      badge: 'Nuestra promesa para 2026',
      title: '100 empleos. 10.000 personas listas para la economía gig.',
      subtitle:
        'El talento y la oportunidad no deberían depender de la suerte. Nos comprometemos con empleo real y formación real, para que más personas puedan ganar, competir y construir ingresos en sus propias condiciones.',
      pillar1Title: '100 personas empleadas',
      pillar1Desc: 'Puestos en Digni o con socios para finales de 2026, estabilidad en la que puede confiar.',
      pillar2Title: '10.000 capacitados en competencias digitales',
      pillar2Desc:
        'Listos para el emprendimiento y el trabajo gig mediante programas como Future-Ready Graduate.',
      proofLine: 'Ya en marcha: 85% de empleo entre egresados, 85+ aprendices por cohorte en escuelas socias.',
      proofLink1Text: 'Future-Ready Graduate Program',
      proofLink2Text: 'Carreras',
      ctaPrimary: 'Reservar llamada estratégica',
    },
    whatWeDo: {
      badge: 'Lo que hacemos',
      title: 'Tres formas de',
      subtitle: 'contraatacar',
      forBusinesses: 'Para empresas en crecimiento',
      forSchools: 'Para profesionales y estudiantes',
      forUniqueNeeds: 'Para organizaciones',
      aiEmployeeTitle: 'Sistemas de empleado IA',
      aiEmployeeDesc:
        'Los equipos pierden leads en el seguimiento — no en el clic del anuncio.\n\nInstalamos un empleado IA que captura, califica y agenda 24/7, más un estratega para campañas más rentables y un pipeline que crece — un sistema de conversión, no un chatbot.',
      aiEmployeeApproach:
        'Sistema de conversión completo: IA captura y agenda sin parar, con expertos humanos optimizando campañas y crecimiento del pipeline.',
      aiEmployeeOutcome1: 'Convierta más clics de anuncios en clientes reales',
      aiEmployeeOutcome2: 'Respuestas al instante, seguimientos inteligentes y citas agendadas',
      aiEmployeeOutcome3: 'Un experto humano asegura el rendimiento y la mejora continua',
      aiEmployeeOutcome4: 'Campañas lideradas por un estratega y un pipeline que sí crece',
      aiEmployeePrimaryCta: 'Ver sistemas de empleado IA',
      aiEmployeeSecondaryCta: 'Reservar auditoría Growth System',
      futureReadyTitle: 'Programa Future-Ready',
      futureReadyDesc:
        'Los títulos ya no bastan.\n\nLe enseñamos a usar IA y automatización para construir proyectos reales, aumentar su poder de ingresos y seguir siendo relevante en una economía impulsada por la IA.',
      futureReadyApproach:
        'Formación práctica en IA y automatización para entregar proyectos reales y subir su valor en el mercado.',
      futureReadyOutcome1: 'Aprenda habilidades valiosas y demandadas',
      futureReadyOutcome2: 'Construya proyectos reales',
      futureReadyOutcome3: 'Adelántese a la automatización',
      futureReadyOutcome4: 'Manténgase relevante en una economía de IA',
      futureReadyPrimaryCta: 'Ver detalles del programa',
      futureReadySecondaryCta: 'Reservar consulta escolar',
      agenticSoftwaresTitle: 'Sistemas agénticos',
      agenticSoftwaresDesc:
        'El trabajo manual frena su crecimiento.\n\nDiseñamos sistemas de IA a medida que automatizan operaciones, decisiones y flujos de trabajo — para que su negocio funcione con más fluidez y escale sin crecer la plantilla a la par.',
      agenticSoftwaresApproach:
        'IA a medida que elimina cuellos de botella manuales en operaciones, decisiones y flujos.',
      agenticSoftwaresOutcome1: 'Automatice operaciones complejas',
      agenticSoftwaresOutcome2: 'Reduzca el esfuerzo manual',
      agenticSoftwaresOutcome3: 'Construya infraestructura escalable',
      agenticSoftwaresOutcome4: 'Escale sin contratación proporcional',
      agenticSoftwaresPrimaryCta: 'Ver sistemas agénticos',
      agenticSoftwaresSecondaryCta: 'Reservar consulta de proyecto',
      notSureTitle: '¿No está seguro de qué servicio?',
      notSureSubtitle: 'Díganos. Encontraremos la solución.',
      whatWeDoDescription: 'Cada uno corrige un problema real.',
    },
    stats: {
      badge: 'Historial probado',
      title: 'Resultados reales de',
      subtitle: 'implementaciones reales',
      realNumbers: 'Números reales. Clientes reales.',
      stat1Label: 'Aumento de conversión de leads',
      stat1Sublabel: 'Resultados Empleado IA™',
      stat2Label: 'Tasa de empleo de graduados',
      stat2Sublabel: 'Éxito del programa Future-Ready Graduate',
      stat3Label: 'Servicio siempre disponible',
      stat3Sublabel: 'No pierda otro lead',
      stat4Label: 'Satisfacción del cliente',
      stat4Sublabel: 'En ambas soluciones',
      aiEmployeeCard: 'Empleado IA™',
      aiEmployeeCardSub: '50+ empresas. 10.000+ leads/mes.',
      futureReadyCard: 'Future-Ready Graduate Program',
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
      badge: 'Creemos impacto juntos',
      title: 'La tecnología debe servir ',
      titleHighlight: 'a todos.',
      mechanism: 'Escuchamos → Construimos la solución → Usted obtiene resultados.',
      bullet1: 'Llamada estratégica de 30 min',
      bullet2: 'Sin obligación',
      bullet3: 'Información accionable',
    },
  }

  const blogEn: BlogTranslations = {
    heroTitle: 'Digital Transformation',
    heroSubtitle: 'Insights',
    heroDesc: 'Expert insights on African digital transformation, AI, and business success stories for leaders shaping the future.',
    searchPlaceholder: 'Search articles by title, content, or tags...',
    filterByCategory: 'Filter by Category',
    all: 'All',
    readMore: 'Read More',
    backToBlog: 'Back to Blog',
    tags: 'Tags',
    by: 'By',
    minRead: 'min read',
    readyFutureReady: 'Ready for the Future-Ready Graduate Program?',
    readyFutureReadyDesc: 'Explore the Future-Ready Graduate Program, transform students into job-ready professionals with AI-powered digital skills. 85% employment within 6 months.',
    exploreFutureReady: 'Explore Future-Ready Graduate Program',
    readyTransform: 'Ready to Transform Your Business?',
    readyTransformDesc: "Let's discuss how these insights can be applied to your specific challenges.",
    noArticles: 'No articles found',
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    featuredArticles: 'Featured Articles',
    allArticles: 'All Articles',
    featured: 'featured',
    stayUpdated: 'Stay Updated',
    stayUpdatedDesc: 'Get weekly insights on digital transformation and AI innovations.',
    emailPlaceholder: 'Enter your email',
    subscribeCta: 'Subscribe',
    joinReaders: 'Join 10,000+ business leaders. No spam, unsubscribe anytime.',
    clearFilters: 'Clear Filters',
    exploreServices: 'Explore Services',
  }

  const blogFr: BlogTranslations = {
    heroTitle: 'Transformation Digitale',
    heroSubtitle: 'Analyses',
    heroDesc: 'Analyses d’experts sur la transformation digitale africaine, l\'IA et les succès d\'entreprises pour les dirigeants qui façonnent l\'avenir.',
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
    readyTransform: 'Prêt à transformer votre entreprise ?',
    readyTransformDesc: 'Discutons de la façon dont ces analyses s\'appliquent à vos défis.',
    noArticles: 'Aucun article trouvé',
    previous: 'Précédent',
    next: 'Suivant',
    page: 'Page',
    featuredArticles: 'Articles à la une',
    allArticles: 'Tous les articles',
    featured: 'à la une',
    stayUpdated: 'Restez informé',
    stayUpdatedDesc: 'Recevez chaque semaine des analyses sur la transformation digitale et les innovations IA.',
    emailPlaceholder: 'Votre adresse e-mail',
    subscribeCta: 'S\'abonner',
    joinReaders: 'Rejoignez 10 000+ dirigeants. Pas de spam, désinscription à tout moment.',
    clearFilters: 'Effacer les filtres',
    exploreServices: 'Explorer les services',
  }

  const blogAr: BlogTranslations = {
    heroTitle: 'التحول الرقمي',
    heroSubtitle: 'رؤى',
    heroDesc: 'رؤى خبراء حول التحول الرقمي الأفريقي والذكاء الاصطناعي وقصص نجاح الأعمال لقادة المستقبل.',
    searchPlaceholder: 'البحث في المقالات بالعنوان أو المحتوى أو الوسوم...',
    filterByCategory: 'تصفية حسب الفئة',
    all: 'الكل',
    readMore: 'اقرأ المزيد',
    backToBlog: 'العودة للمدونة',
    tags: 'الوسوم',
    by: 'بقلم',
    minRead: 'دقيقة قراءة',
    readyFutureReady: 'هل أنت مستعد لبرنامج Future-Ready Graduate؟',
    readyFutureReadyDesc: 'اكتشف برنامج Future-Ready Graduate, حوّل الطلاب إلى محترفين جاهزين للعمل بمهارات رقمية مدعومة بالذكاء الاصطناعي. 85% توظيف خلال 6 أشهر.',
    exploreFutureReady: 'اكتشف برنامج Future-Ready Graduate',
    readyTransform: 'هل أنت مستعد لتحويل عملك؟',
    readyTransformDesc: 'لنناقش كيف تُطبَّق هذه الرؤى على تحدياتك.',
    noArticles: 'لم يتم العثور على مقالات',
    previous: 'السابق',
    next: 'التالي',
    page: 'صفحة',
    featuredArticles: 'المقالات المميزة',
    allArticles: 'جميع المقالات',
    featured: 'مميز',
    stayUpdated: 'ابقَ على اطلاع',
    stayUpdatedDesc: 'احصل على رؤى أسبوعية حول التحول الرقمي وابتكارات الذكاء الاصطناعي.',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    subscribeCta: 'اشترك',
    joinReaders: 'انضم إلى أكثر من 10,000 قائد أعمال. بدون إزعاج، إلغاء الاشتراك في أي وقت.',
    clearFilters: 'مسح الفلاتر',
    exploreServices: 'استكشف الخدمات',
  }

  const blogDe: BlogTranslations = {
    heroTitle: 'Digitale Transformation',
    heroSubtitle: 'Einblicke',
    heroDesc: 'Expertenwissen zu digitaler Transformation in Afrika, KI und Erfolgsgeschichten für Führungskräfte, die die Zukunft gestalten.',
    searchPlaceholder: 'Artikel nach Titel, Inhalt oder Tags durchsuchen...',
    filterByCategory: 'Nach Kategorie filtern',
    all: 'Alle',
    readMore: 'Weiterlesen',
    backToBlog: 'Zurück zum Blog',
    tags: 'Tags',
    by: 'Von',
    minRead: 'Min. Lesezeit',
    readyFutureReady: 'Bereit für das Future-Ready Graduate Programm?',
    readyFutureReadyDesc: 'Entdecken Sie das Future-Ready Graduate Programm, verwandeln Sie Schüler in berufsreife Fachkräfte mit KI-gestützten digitalen Fähigkeiten. 85% Beschäftigung innerhalb von 6 Monaten.',
    exploreFutureReady: 'Future-Ready Graduate Programm erkunden',
    readyTransform: 'Bereit, Ihr Unternehmen zu transformieren?',
    readyTransformDesc: 'Lassen Sie uns besprechen, wie diese Erkenntnisse auf Ihre spezifischen Herausforderungen angewendet werden können.',
    noArticles: 'Keine Artikel gefunden',
    previous: 'Zurück',
    next: 'Weiter',
    page: 'Seite',
    featuredArticles: 'Empfohlene Artikel',
    allArticles: 'Alle Artikel',
    featured: 'empfohlen',
    stayUpdated: 'Bleiben Sie informiert',
    stayUpdatedDesc: 'Wöchentliche Einblicke zu digitaler Transformation und KI-Innovationen.',
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    subscribeCta: 'Abonnieren',
    joinReaders: 'Schließen Sie sich 10.000+ Führungskräften an. Kein Spam, jederzeit abmelden.',
    clearFilters: 'Filter löschen',
    exploreServices: 'Services entdecken',
  }

  const blogEs: BlogTranslations = {
    heroTitle: 'Transformación Digital',
    heroSubtitle: 'Perspectivas',
    heroDesc: 'Información experta sobre transformación digital en África, IA e historias de éxito empresarial para líderes que moldean el futuro.',
    searchPlaceholder: 'Buscar artículos por título, contenido o etiquetas...',
    filterByCategory: 'Filtrar por categoría',
    all: 'Todos',
    readMore: 'Leer más',
    backToBlog: 'Volver al blog',
    tags: 'Etiquetas',
    by: 'Por',
    minRead: 'min de lectura',
    readyFutureReady: '¿Listo para el programa Future-Ready Graduate?',
    readyFutureReadyDesc: 'Explore el programa Future-Ready Graduate, transforme estudiantes en profesionales listos para el empleo con habilidades digitales impulsadas por IA. 85% de empleo en 6 meses.',
    exploreFutureReady: 'Explorar el programa Future-Ready Graduate',
    readyTransform: '¿Listo para transformar su negocio?',
    readyTransformDesc: 'Hablemos de cómo estas perspectivas pueden aplicarse a sus desafíos específicos.',
    noArticles: 'No se encontraron artículos',
    previous: 'Anterior',
    next: 'Siguiente',
    page: 'Página',
    featuredArticles: 'Artículos destacados',
    allArticles: 'Todos los artículos',
    featured: 'destacado',
    stayUpdated: 'Manténgase informado',
    stayUpdatedDesc: 'Reciba perspectivas semanales sobre transformación digital e innovaciones en IA.',
    emailPlaceholder: 'Ingrese su correo electrónico',
    subscribeCta: 'Suscribirse',
    joinReaders: 'Únase a más de 10,000 líderes empresariales. Sin spam, cancele en cualquier momento.',
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
      { value: 'future-ready-graduate', label: 'Future-Ready Graduate Program' },
      { value: 'agentic-softwares', label: 'Agentic Softwares' },
    ],
    methods: [
      { title: 'Book a Call', description: '30-min free. We discuss. You decide.', action: 'Book Now' },
      { title: 'Email', description: 'Questions? Drop a line.', action: 'support@digni-digital-llc.com' },
      { title: 'WhatsApp', description: 'Quick reply. Fast.', action: 'Message Us' },
      { title: 'LinkedIn', description: 'Connect. Network.', action: 'Connect' },
    ],
    faqs: [
      { question: 'How long does a project take?', answer: 'Websites: 2-4 weeks. Agentic Softwares: 8-16 weeks. We give you a timeline in our call.' },
      { question: 'Do you work outside Africa?', answer: 'Yes. Global clients. We work your time zone.' },
      { question: "What's in the consultation?", answer: 'Business review. Tech audit. Strategy. 30 min. Free. No obligation.' },
      { question: 'Ongoing support?', answer: 'Yes. Maintenance, hosting, optimization. We stay with you.' },
      { question: 'What industries?', answer: 'Healthcare, real estate, e-commerce, services. We adapt to your model.' },
      { question: 'Can you fix existing systems?', answer: 'Yes. Audit. Optimize. Integrate. Sometimes fixing beats rebuilding.' },
    ],
  }

  const contactFr: ContactTranslations = {
    heroBadge: 'Contactez-nous',
    heroTitle: 'Construisons ensemble',
    heroSubtitle: 'quelque chose de génial',
    heroDesc: 'Dites-nous votre problème. Nous trouverons la solution.',
    howToReachUs: 'Comment nous joindre',
    howToReachUsDesc: 'Nous répondons rapidement.',
    sendMessage: 'Envoyez-nous un message',
    sendMessageDesc: 'Formulaire ci-dessous. Réponse sous 24 h.',
    formSending: 'Envoi en cours...',
    formSuccess: 'Message envoyé ! Nous répondrons sous 24 h.',
    formError: 'Une erreur s\'est produite. Réessayez ou écrivez-nous directement.',
    projectTypePlaceholder: 'Choisir un service',
    projectTypes: [
      { value: 'ai-employee', label: 'Employé IA' },
      { value: 'future-ready-graduate', label: 'Programme Diplômé Prêt pour l\'Avenir' },
      { value: 'agentic-softwares', label: 'Agentic Softwares' },
    ],
    methods: [
      { title: 'Réserver un appel', description: '30 min gratuites. On discute. Vous décidez.', action: 'Réserver' },
      { title: 'E-mail', description: 'Des questions ? Écrivez-nous.', action: 'support@digni-digital-llc.com' },
      { title: 'WhatsApp', description: 'Réponse rapide.', action: 'Nous contacter' },
      { title: 'LinkedIn', description: 'Connectons-nous.', action: 'Connecter' },
    ],
    faqs: [
      { question: 'Combien de temps dure un projet ?', answer: 'Sites web : 2-4 semaines. Agentic Softwares : 8-16 semaines. Nous vous donnons un délai lors de l\'appel.' },
      { question: 'Travaillez-vous en dehors de l\'Afrique ?', answer: 'Oui. Clients internationaux. Nous nous adaptons à votre fuseau.' },
      { question: 'Que comprend la consultation ?', answer: 'Revue de l’activité, audit tech, stratégie. 30 min. Gratuit. Sans engagement.' },
      { question: 'Support continu ?', answer: 'Oui. Maintenance, hébergement, optimisation. Nous restons à vos côtés.' },
      { question: 'Quels secteurs ?', answer: 'Santé, immobilier, e-commerce, services. Nous nous adaptons à votre modèle.' },
      { question: 'Pouvez-vous corriger des systèmes existants ?', answer: 'Oui. Audit. Optimisation. Intégration. Parfois corriger vaut mieux que reconstruire.' },
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
      { value: 'future-ready-graduate', label: 'Future-Ready Graduate Program' },
      { value: 'agentic-softwares', label: 'Agentic Softwares' },
    ],
    methods: [
      { title: 'حجز مكالمة', description: '30 دقيقة مجانية. نناقش. أنت تقرر.', action: 'احجز الآن' },
      { title: 'البريد', description: 'أسئلة؟ راسلنا.', action: 'support@digni-digital-llc.com' },
      { title: 'واتساب', description: 'رد سريع.', action: 'راسلنا' },
      { title: 'لينكد إن', description: 'تواصل. شبكة.', action: 'تواصل' },
    ],
    faqs: [
      { question: 'كم تستغرق المشاريع؟', answer: 'المواقع: 2-4 أسابيع. Agentic Softwares: 8-16 أسبوعاً. نعطيك جدولاً في المكالمة.' },
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
      { value: 'ai-employee', label: 'KI-Mitarbeiter' },
      { value: 'future-ready-graduate', label: 'Future-Ready Graduate Program' },
      { value: 'agentic-softwares', label: 'Agentic Softwares' },
    ],
    methods: [
      { title: 'Anruf buchen', description: '30 Min. kostenlos. Wir besprechen. Sie entscheiden.', action: 'Jetzt buchen' },
      { title: 'E-Mail', description: 'Fragen? Schreiben Sie uns.', action: 'support@digni-digital-llc.com' },
      { title: 'WhatsApp', description: 'Schnelle Antwort.', action: 'Nachricht senden' },
      { title: 'LinkedIn', description: 'Verbinden. Netzwerken.', action: 'Verbinden' },
    ],
    faqs: [
      { question: 'Wie lange dauert ein Projekt?', answer: 'Websites: 2-4 Wochen. Agentic Softwares: 8-16 Wochen. Wir geben Ihnen einen Zeitplan in unserem Gespräch.' },
      { question: 'Arbeiten Sie außerhalb Afrikas?', answer: 'Ja. Globale Kunden. Wir arbeiten in Ihrer Zeitzone.' },
      { question: 'Was beinhaltet die Beratung?', answer: 'Geschäftsüberprüfung. Tech-Audit. Strategie. 30 Min. Kostenlos. Keine Verpflichtung.' },
      { question: 'Laufender Support?', answer: 'Ja. Wartung, Hosting, Optimierung. Wir bleiben bei Ihnen.' },
      { question: 'Welche Branchen?', answer: 'Gesundheitswesen, Immobilien, E-Commerce, Dienstleistungen. Wir passen uns Ihrem Modell an.' },
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
      { value: 'future-ready-graduate', label: 'Future-Ready Graduate Program' },
      { value: 'agentic-softwares', label: 'Agentic Softwares' },
    ],
    methods: [
      { title: 'Reservar llamada', description: '30 min gratis. Discutimos. Usted decide.', action: 'Reservar ahora' },
      { title: 'Email', description: '¿Preguntas? Escríbanos.', action: 'support@digni-digital-llc.com' },
      { title: 'WhatsApp', description: 'Respuesta rápida.', action: 'Enviar mensaje' },
      { title: 'LinkedIn', description: 'Conectar. Red.', action: 'Conectar' },
    ],
    faqs: [
      { question: '¿Cuánto dura un proyecto?', answer: 'Sitios web: 2-4 semanas. Agentic Softwares: 8-16 semanas. Le damos un cronograma en la llamada.' },
      { question: '¿Trabajan fuera de África?', answer: 'Sí. Clientes globales. Trabajamos en su zona horaria.' },
      { question: '¿Qué incluye la consulta?', answer: 'Revisión de negocio. Auditoría técnica. Estrategia. 30 min. Gratis. Sin obligación.' },
      { question: '¿Soporte continuo?', answer: 'Sí. Mantenimiento, hosting, optimización. Nos quedamos con usted.' },
      { question: '¿Qué industrias?', answer: 'Salud, inmobiliaria, e-commerce, servicios. Nos adaptamos a su modelo.' },
      { question: '¿Pueden arreglar sistemas existentes?', answer: 'Sí. Auditoría. Optimizar. Integrar. A veces arreglar es mejor que reconstruir.' },
    ],
  }

  const clientJourneyEn: ClientJourneyTranslations = {
    badge: 'Same 100 Leads. Two Outcomes.',
    title: '99 Leak.',
    subtitle: '95 Close. Referrals Compound.',
    subtext: 'One path bleeds. One compounds. The playbook is simple. The execution isn\'t.',
    brokenLabel: 'The Leak',
    aiFlowLabel: 'The Loop',
    funnelLegend:
      'Scenario: 100 new leads enter. Each big number = how many from that same batch are still in your pipeline after the step.',
    funnelSectionIntake: 'Intake',
    funnelSectionConversion: 'Conversion',
    funnelSectionOutcome: 'Outcome & loop',
    funnelPipelineLabel: 'In pipeline',
    funnelColumnLost: 'Leak',
    funnelColumnNet: 'Net',
    funnelLostBadge: 'lost',
    funnelReferralBadge: 'referral',
    funnelLeadsUnit: 'leads',
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
      { step: 4, title: 'Booking Attempt', description: 'Handoff chaos. Calendar back-and-forth.', leak: '7 lost: manual handoffs.' },
      { step: 5, title: 'Follow-Up', description: 'No system. Leads fall through cracks.', leak: '3 lost: zero follow-up.' },
      { step: 6, title: 'Outcome', description: 'Leads go cold. Competitors win.', leak: '1 lost. Competitor closes.' },
      { step: 7, title: 'Referrals', description: 'No loop. Growth stalls.', leak: '0 referrals.' },
    ],
    aiStages: [
      { step: 1, title: 'Lead Arrives', description: 'All channels → one system. One view.', win: '100 captured.' },
      { step: 2, title: 'Instant Response', description: 'Under 2 sec. 24/7. No voicemail.', win: '100 reached. 0 lost.' },
      { step: 3, title: 'Smart Qualification', description: 'Right questions. Ready buyers only.', win: '100 qualified.' },
      { step: 4, title: 'Auto-Booking', description: 'Pick slot. Sync. Booked.', win: '100 booked.' },
      { step: 5, title: 'Follow-Up', description: 'Until they book or say no.', win: '0 cold drops.' },
      { step: 6, title: 'Outcome', description: 'Captured. Qualified. Closed.', win: '95 closed.' },
      { step: 7, title: 'Referrals', description: 'Clients refer. Loop continues.', win: '+23 referrals.' },
    ],
  }

  const clientJourneyFr: ClientJourneyTranslations = {
    badge: 'Mêmes 100 leads. Deux résultats.',
    title: '99 perdus.',
    subtitle: 'Ou 95 convertis + 23 parrainages.',
    subtext: 'L’un fuit. L’autre convertit. L’IA répond en 2 sec, qualifie, réserve. Les parrainages alimentent la boucle.',
    brokenLabel: 'La fuite',
    aiFlowLabel: 'La boucle',
    funnelLegend:
      'Scénario : 100 nouveaux leads entrent. Chaque gros chiffre = combien du même lot sont encore dans le pipeline après l’étape.',
    funnelSectionIntake: 'Entrée',
    funnelSectionConversion: 'Conversion',
    funnelSectionOutcome: 'Résultat & boucle',
    funnelPipelineLabel: 'Dans le pipeline',
    funnelColumnLost: 'Fuite',
    funnelColumnNet: 'Restant',
    funnelLostBadge: 'perdus',
    funnelReferralBadge: 'parrainage',
    funnelLeadsUnit: 'leads',
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
      { step: 4, title: 'Prise de rendez-vous', description: 'Chaos de transfert. Allers-retours de calendrier.', leak: '7 perdus : transferts manuels.' },
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
    badge: 'نفس المائة. نتيجتان.',
    title: '99 ضائعون.',
    subtitle: 'أو 95 محولين + 23 إحالة.',
    subtext: 'واحد ينسرب. الآخر يحول. الذكاء يرد في ثانيتين، يصنف، يحجز. الإحالات تغذي الحلقة.',
    brokenLabel: 'التسرب',
    aiFlowLabel: 'الحلقة',
    funnelLegend:
      'سيناريو: يدخل 100 عميل محتمل جديد. كل رقم كبير = كم بقي من نفس الدفعة في مسارك بعد الخطوة.',
    funnelSectionIntake: 'الاستقبال',
    funnelSectionConversion: 'التحويل',
    funnelSectionOutcome: 'النتيجة والحلقة',
    funnelPipelineLabel: 'في المسار',
    funnelColumnLost: 'تسرب',
    funnelColumnNet: 'صافي',
    funnelLostBadge: 'ضائع',
    funnelReferralBadge: 'إحالة',
    funnelLeadsUnit: 'leads',
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
    badge: 'Gleiche 100 Leads. Zwei Ergebnisse.',
    title: '99 verloren.',
    subtitle: '95 abschließen. Empfehlungen vervielfachen.',
    subtext: 'Ein Weg blutet. Einer vervielfacht. Das Playbook ist einfach. Die Ausführung nicht.',
    brokenLabel: 'Der Verlust',
    aiFlowLabel: 'Die Schleife',
    funnelLegend:
      'Szenario: 100 neue Leads starten. Jede große Zahl = wie viele aus derselben Charge nach der Stufe noch in der Pipeline sind.',
    funnelSectionIntake: 'Eingang',
    funnelSectionConversion: 'Conversion',
    funnelSectionOutcome: 'Ergebnis & Schleife',
    funnelPipelineLabel: 'In der Pipeline',
    funnelColumnLost: 'Verlust',
    funnelColumnNet: 'Netto',
    funnelLostBadge: 'verloren',
    funnelReferralBadge: 'Empfehlung',
    funnelLeadsUnit: 'Leads',
    channels: [
      { id: 'ads', label: 'Bezahlte Anzeigen' },
      { id: 'website', label: 'Website' },
      { id: 'instagram', label: 'Instagram' },
      { id: 'whatsapp', label: 'WhatsApp' },
      { id: 'phone', label: 'Telefon' },
    ],
    brokenStages: [
      { step: 1, title: 'Lead kommt', description: 'Leads landen in verschiedenen Postfächern. Keine einheitliche Sicht.', leak: 'Verstreut. Keine einheitliche Sicht.' },
      { step: 2, title: 'Erster Kontakt', description: 'Mailbox. E-Mails warten. 78% kaufen beim ersten Kontakt.', leak: '62 verloren: langsam, kein 24/7.' },
      { step: 3, title: 'Qualifizierung', description: 'Manuell. Verschiedene Vertreter, verschiedene Fragen.', leak: '26 verloren: inkonsistent.' },
      { step: 4, title: 'Buchungsversuch', description: 'Übergabe-Chaos. Kalender hin und her.', leak: '7 verloren: manuelle Übergaben.' },
      { step: 5, title: 'Nachverfolgung', description: 'Kein System. Leads fallen durch.', leak: '3 verloren: keine Nachverfolgung.' },
      { step: 6, title: 'Ergebnis', description: 'Leads werden kalt. Konkurrenten gewinnen.', leak: '1 verloren. Konkurrent schließt.' },
      { step: 7, title: 'Empfehlungen', description: 'Keine Schleife. Wachstum stagniert.', leak: '0 Empfehlungen.' },
    ],
    aiStages: [
      { step: 1, title: 'Lead kommt', description: 'Alle Kanäle → ein System. Eine Sicht.', win: '100 erfasst.' },
      { step: 2, title: 'Sofortige Antwort', description: 'Unter 2 Sek. 24/7. Keine Mailbox.', win: '100 erreicht. 0 verloren.' },
      { step: 3, title: 'Intelligente Qualifizierung', description: 'Richtige Fragen. Nur kaufbereite Kunden.', win: '100 qualifiziert.' },
      { step: 4, title: 'Auto-Buchung', description: 'Slot wählen. Sync. Gebucht.', win: '100 gebucht.' },
      { step: 5, title: 'Nachverfolgung', description: 'Bis sie buchen oder ablehnen.', win: '0 kalte Abbrüche.' },
      { step: 6, title: 'Ergebnis', description: 'Erfasst. Qualifiziert. Abgeschlossen.', win: '95 abgeschlossen.' },
      { step: 7, title: 'Empfehlungen', description: 'Kunden empfehlen. Schleife geht weiter.', win: '+23 Empfehlungen.' },
    ],
  }

  const clientJourneyEs: ClientJourneyTranslations = {
    badge: 'Mismos 100 leads. Dos resultados.',
    title: '99 se pierden.',
    subtitle: '95 cierran. Las referencias se multiplican.',
    subtext: 'Un camino sangra. Otro se multiplica. El manual es simple. La ejecución no.',
    brokenLabel: 'La fuga',
    aiFlowLabel: 'El bucle',
    funnelLegend:
      'Escenario: entran 100 leads nuevos. Cada número grande = cuántos del mismo lote siguen en tu embudo tras el paso.',
    funnelSectionIntake: 'Entrada',
    funnelSectionConversion: 'Conversión',
    funnelSectionOutcome: 'Resultado y bucle',
    funnelPipelineLabel: 'En embudo',
    funnelColumnLost: 'Fuga',
    funnelColumnNet: 'Neto',
    funnelLostBadge: 'perdidos',
    funnelReferralBadge: 'referido',
    funnelLeadsUnit: 'leads',
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
      { step: 4, title: 'Auto-reserva', description: 'Elegir horario. Sincronizar. Reservado.', win: '100 reservados.' },
      { step: 5, title: 'Seguimiento', description: 'Hasta que reserven o digan no.', win: '0 abandonos fríos.' },
      { step: 6, title: 'Resultado', description: 'Capturado. Calificado. Cerrado.', win: '95 cerrados.' },
      { step: 7, title: 'Referencias', description: 'Los clientes refieren. El bucle continúa.', win: '+23 referencias.' },
    ],
  }

  const futureReadyGraduateEn: FutureReadyGraduateTranslations = {
    heroBadge: 'Future-Ready Graduate Program',
    heroTitleLine1: 'Turn Your Graduates Into',
    heroTitleHighlight: 'Industry-Ready Professionals',
    heroAlternateTitle: 'Equip professionals and youth with the skills to thrive as AI transforms how the world works',
    heroDescription: '85% employed. Job creation is in our DNA, we teach skills that bring out entrepreneurial gifts through guided learning personalized to each person.',
    calendarTitle: 'Designed for the',
    calendarTitleHighlight: 'National Academic Calendar',
    calendarSubtitle: 'September to July. Fits your school year. Respects breaks.',
    fullSchoolYear: 'Full School Year',
    fullSchoolYearDesc: 'September to July (222 school days)',
    threeTrimesters: 'Three Trimesters',
    threeTrimestersDesc: 'Structured around ministry breaks',
    seamlessIntegration: 'Seamless Integration',
    seamlessIntegrationDesc: 'No disruption to existing curriculum',
    academicYearIntegration: '2025-2026 Academic Year Integration',
    programStart: 'Program Start',
    programStartDate: 'Monday, September 1, 2025',
    respectsBreaks: 'Respects All Breaks',
    respectsBreaksDates: 'October, Christmas, February & Easter',
    graduationReady: 'Graduation Ready',
    graduationReadyDate: 'July 2-4, 2026',
    focusArea: 'Focus Area',
    duration: 'Duration',
    coreModules: 'Core Modules',
    firstTrimester: 'First Trimester',
    secondTrimester: 'Second Trimester',
    thirdTrimester: 'Third Trimester',
    educationPrefix: 'Traditional Education ',
    educationFails: 'Is Falling Behind',
    digitalEconomyPrefix: 'AI-Ready Remote Work ',
    digitalThrives: 'Is Rising',
    educationFailsSubtitle: 'The digital revolution offers unprecedented opportunities. Position your students at the forefront of this transformation.',
    traditionalCrisis: 'Traditional Education Crisis',
    traditionalCrisisDesc: 'The harsh reality of conventional graduation outcomes',
    digitalBoom: 'Digital Economy Boom',
    digitalBoomDesc: 'The explosive growth of remote digital opportunities',
    whyDigitalSkills: 'Advantages of Becoming Future-Ready Certified',
    whyDigitalSkillsDesc: 'Six practical reasons this certification matters: the freedom to earn, work, and grow differently, plus the AI-ready proof to move with confidence.',
    globalLeaders: 'Global Leaders',
    globalLeadersHighlight: 'Supporting Our Mission',
    globalLeadersSubtitle: 'Listen to world-renowned figures discuss the same principles and values that drive our Future-Ready Graduate Program, job creation, entrepreneurial development, and personalized learning that brings out everyone\'s talents.',
    highDemandSkills: 'High-Demand Digital Skills',
    highDemandSkillsHighlight: 'That Actually Pay',
    highDemandSkillsSubtitle: 'The digital economy is exploding with opportunities. With 2026 AI tools like Lovable.dev, Cursor, and advanced AI platforms, beginners can now compete with expert-level professionals in these lucrative fields, if they master the right AI-powered skills.',
    aiAdvantage: 'The 2026 AI Advantage',
    aiAdvantageDesc: 'With cutting-edge 2026 AI tools like Lovable.dev and Cursor, your students can compete with expert-level professionals from day one and start earning immediately.',
    partnershipRequirements: 'Partnership',
    partnershipRequirementsHighlight: 'Requirements',
    partnershipRequirementsDesc: 'A successful partnership requires commitment from both sides. Here\'s what we each bring to ensure student success.',
    whatSchoolsProvide: 'What Schools Provide',
    whatSchoolsProvideDesc: 'Your essential contributions to the partnership',
    whatWeProvide: 'What We Provide',
    whatWeProvideDesc: 'Our comprehensive support and resources',
    provenResults: 'Proven Results',
    provenResultsHighlight: 'Across Africa',
    readyToTransform: 'Ready to Transform Student Outcomes?',
    readyToTransformDesc: 'Let\'s discuss how the Future-Ready Graduate Program can work for your institution. See curriculum details and success metrics in a personalized consultation.',
    threePaths: 'Three Paths to',
    threePathsHighlight: 'Digital Success',
    threePathsSubtitle: 'Choose the path that fits your needs.',
    forSchools: 'FOR SCHOOLS',
    forProfessional: 'FOR PROFESSIONAL INSTITUTES',
    guidedLearning: 'GUIDED LEARNING',
    newLabel: 'NEW',
    onlySpotsAvailable: 'Only {count} spots available',
    noOneLeftBehind: 'No one gets left behind.',
  }

  const futureReadyGraduateFr: FutureReadyGraduateTranslations = {
    heroBadge: 'Programme Diplômé Prêt pour l\'Avenir',
    heroTitleLine1: 'Transformez vos diplômés en',
    heroTitleHighlight: 'Professionnels prêts pour l\'industrie',
    heroAlternateTitle: 'Équipez les professionnels et les jeunes des compétences nécessaires pour réussir alors que l’IA transforme le monde du travail',
    heroDescription: '85 % employés. La création d\'emplois est dans notre ADN, nous enseignons des compétences qui révèlent les dons entrepreneuriaux grâce à un apprentissage guidé personnalisé pour chaque personne.',
    calendarTitle: 'Conçu pour le',
    calendarTitleHighlight: 'Calendrier académique national',
    calendarSubtitle: 'De septembre à juillet. S\'adapte à votre année scolaire. Respecte les vacances.',
    fullSchoolYear: 'Année scolaire complète',
    fullSchoolYearDesc: 'Septembre à juillet (222 jours d\'école)',
    threeTrimesters: 'Trois trimestres',
    threeTrimestersDesc: 'Structuré autour des vacances ministérielles',
    seamlessIntegration: 'Intégration transparente',
    seamlessIntegrationDesc: 'Aucune perturbation du programme existant',
    academicYearIntegration: 'Intégration année académique 2025-2026',
    programStart: 'Début du programme',
    programStartDate: 'Lundi 1er septembre 2025',
    respectsBreaks: 'Respecte toutes les vacances',
    respectsBreaksDates: 'Octobre, Noël, février et Pâques',
    graduationReady: 'Prêt pour la remise des diplômes',
    graduationReadyDate: '2-4 juillet 2026',
    focusArea: 'Domaine d\'étude',
    duration: 'Durée',
    coreModules: 'Modules principaux',
    firstTrimester: 'Premier trimestre',
    secondTrimester: 'Deuxième trimestre',
    thirdTrimester: 'Troisième trimestre',
    educationPrefix: 'L\'éducation traditionnelle ',
    educationFails: 'prend du retard',
    digitalEconomyPrefix: 'Le travail à distance prêt pour l\'IA ',
    digitalThrives: 'accélère',
    educationFailsSubtitle: 'La révolution numérique offre des opportunités sans précédent. Placez vos étudiants à l\'avant-garde de cette transformation.',
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
    readyToTransform: 'Prêt à transformer les résultats des étudiants ?',
    readyToTransformDesc: 'Discutons de la façon dont le Programme Diplômé Prêt pour l\'Avenir peut fonctionner pour votre institution. Découvrez les détails du programme et les indicateurs de succès lors d\'une consultation personnalisée.',
    threePaths: 'Trois chemins vers',
    threePathsHighlight: 'la réussite numérique',
    threePathsSubtitle: 'Choisissez le chemin qui vous convient.',
    forSchools: 'POUR LES ÉCOLES',
    forProfessional: 'POUR LES INSTITUTS PROFESSIONNELS',
    guidedLearning: 'APPRENTISSAGE GUIDÉ',
    newLabel: 'NOUVEAU',
    onlySpotsAvailable: 'Il ne reste que {count} places',
    noOneLeftBehind: 'Personne n\'est laissé pour compte.',
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
      'We measure employability, productivity, and fair growth: job-ready training, AI that removes drudgework, and outcomes that show up in real employment and revenue.',
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
    timeline2026Description: 'Projected: 100 employed, 10,000 skilled for the gig economy.',
    storyBadge: 'The Journey',
    ourStoryTitle: 'Our Story',
    storyP1: 'We are an American-registered company that started in Kenya, founded by a refugee youth who, from an early age, has been focused on eliminating poverty and refused to accept the rules and limitations set upon him. Driven by hunger and greatness, he chose to fail forward: to keep pushing, dreaming, and building toward a better world.',
    storyP2: 'That dream is simple and urgent: everyone enabled, empowered, and connected to the same technology and skills that have long been reserved for elites and elite kids. Businesses shouldn\'t lose leads because they can\'t afford big systems. Students shouldn\'t graduate without the skills employers hire for. We build the fixes, AI that captures every lead, curricula that make graduates job-ready, and agentic software that perceives, reasons, and acts, scaling with you.',
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
    optimizeBullet2: 'Data-driven improvements',
    optimizeBullet3: 'Regular strategy reviews',
    optimizeBullet4: 'Ongoing technical support',
    differentTitle: 'What Makes Us Different',
    differentSubtitle: 'Why businesses and schools choose Digni Digital',
    humanFirstTitle: 'Human First',
    humanFirstDesc: 'AI helps your team. Doesn\'t replace them.',
    provenTitle: 'Proven',
    provenDesc: '10 years. 150+ clients. 98% satisfaction.',
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
      'Infrastructure that runs without you, AI that captures leads, keeps clients, and removes follow-up chaos.',
    aiEmployeeCta: 'See how it works',
    literacyTitle: 'Future-Ready Graduate Program',
    literacyDesc: '85% employed. Guided learning personalized to each person\'s talents, bringing out entrepreneurial gifts. We bring curriculum and internet. You bring students.',
    literacyCta: 'Explore the Curriculum',
    agenticTitle: 'Agentic Softwares',
    agenticDesc: 'AI-native software that perceives, reasons, and acts autonomously.',
    agenticCta: 'See What We Build',
    ctaTitle: 'Ready to Work Together?',
    ctaSubtitle: 'Tell us your problem. We\'ll find the fix.',
    trustedByBadge: 'Trusted by',
    trustedByTitle: 'Enterprises that believe in our mission.',
    trustedBySubtitle: 'Building human-first systems that capture opportunity and expand access.',
  }

  const aboutFr: AboutTranslations = {
    badge: 'À propos',
    heroTitle: 'À propos',
    heroSubtitle: 'Une entreprise américaine née au Kenya, fondée par un jeune réfugié, animé par la faim et la grandeur pour bâtir un monde où chacun est outillé, responsabilisé et connecté aux technologies et compétences qui changent les vies.',
    statsTitle: 'Engagés pour un monde meilleur, la technologie au service de l\'humanité',
    statsSubtitle:
      'Nous construisons et co-créons des solutions aux problèmes humains, la technologie pour élargir l\'accès, la dignité et les opportunités.',
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
    timeline2026Description: '100 en emploi, 10 000 formés pour le travail à la tâche.',
    storyBadge: 'Le parcours',
    ourStoryTitle: 'Notre histoire',
    storyP1: 'Nous sommes une entreprise enregistrée aux États-Unis qui a démarré au Kenya, fondée par un jeune réfugié qui, dès son plus jeune âge, a été focalisé sur l\'élimination de la pauvreté et a refusé d\'accepter les règles et les limites qu\'on lui imposait. Animé par la faim et la grandeur, il a choisi d\'échouer vers l\'avant : continuer à pousser, rêver et construire un monde meilleur.',
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
    provenDesc: '10 ans. 150+ clients. 98% de satisfaction.',
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
    ctaSubtitle: 'Dites-nous votre problème. Nous trouverons la solution.',
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
    timeline2026Description: '100 موظّف، 10,000 مؤهّلون لاقتصاد العمل الحر.',
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
    provenDesc: '10 سنوات. 150+ عميل. 98% رضا.',
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
    literacyTitle: 'برنامج Future-Ready Graduate',
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
    sdgSectionBadge: 'UN-Nachhaltigkeitsziele (SDGs)',
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
    timeline2026Description: '100 in Arbeit, 10.000 qualifiziert für die Gig-Economy.',
    storyBadge: 'Die Reise',
    ourStoryTitle: 'Unsere Geschichte',
    storyP1: 'Wir sind ein in den USA registriertes Unternehmen, das in Kenia gestartet wurde, gegründet von einem jungen Geflüchteten, der von klein auf darauf fokussiert war, Armut zu bekämpfen, und sich weigerte, die ihm auferlegten Regeln und Grenzen zu akzeptieren. Angetrieben von Hunger und Größe entschied er sich, vorwärts zu scheitern: weiterzumachen, zu träumen und auf eine bessere Welt hinzuarbeiten.',
    storyP2: 'Dieser Traum ist einfach und dringend: Jeder befähigt, ermächtigt und verbunden mit den gleichen Technologien und Fähigkeiten, die lange den Eliten vorbehalten waren. Unternehmen sollten keine Leads verlieren, weil sie sich große Systeme nicht leisten können. Studierende sollten nicht ohne die Fähigkeiten abschließen, die Arbeitgeber suchen. Wir bauen die Lösungen, KI, die jeden Lead erfasst, Lehrpläne, die Absolventen berufsfertig machen, und agentische Software, die wahrnimmt, denkt und handelt, und mit Ihnen wächst.',
    storyP3: 'Gegründet 2019. Angefangen mit Websites. Heute: KI-Systeme, Absolventenprogramme, Agentic Softwares. Wir bauen nicht nur Websites, wir bauen Systeme, die Ihnen Kunden bringen und Studierenden Jobs verschaffen.',
    takeTheJourney: 'Entdecken Sie die Reise',
    approachTitle: 'Unser Ansatz',
    approachSubtitle: 'Wie wir transformative Ergebnisse liefern',
    discoveryTitle: 'Entdeckung',
    discoveryDesc: 'Wir lernen zuerst Ihr Geschäft kennen. Dann bauen wir.',
    discoveryBullet1: 'Geschäftsprozessanalyse',
    discoveryBullet2: 'Customer-Journey-Mapping',
    discoveryBullet3: 'Technologie-Audit',
    discoveryBullet4: 'Identifikation von Wachstumshindernissen',
    buildTitle: 'Aufbau',
    buildDesc: 'Wir integrieren uns nahtlos. Keine Störung. Nur Upgrade.',
    buildBullet1: 'Stufenweiser Rollout',
    buildBullet2: 'Teamschulung & Support',
    buildBullet3: 'Integration mit bestehenden Systemen',
    buildBullet4: 'Minimale Geschäftsunterbrechung',
    optimizeTitle: 'Optimierung',
    optimizeDesc: 'Wir verbessern kontinuierlich. Der Launch ist Tag eins. Wir machen es besser.',
    optimizeBullet1: 'Performance-Monitoring',
    optimizeBullet2: 'Datengetriebene Verbesserungen',
    optimizeBullet3: 'Regelmäßige Strategie-Reviews',
    optimizeBullet4: 'Laufender technischer Support',
    differentTitle: 'Was uns unterscheidet',
    differentSubtitle: 'Warum Unternehmen und Schulen Digni Digital wählen',
    humanFirstTitle: 'Mensch zuerst',
    humanFirstDesc: 'KI unterstützt Ihr Team. Ersetzt es nicht.',
    provenTitle: 'Bewährt',
    provenDesc: '10 Jahre. 150+ Kunden. 98% Zufriedenheit.',
    partnershipTitle: 'Volle Partnerschaft',
    partnershipDesc: 'Strategie. Aufbau. Optimierung. Wir sind da. Keine Übergaben.',
    roiFocusTitle: 'ROI-Fokus',
    roiFocusDesc: 'Wir verfolgen Umsatz. Leads. Jobs. Nicht nur Features.',
    promiseTitle: 'Unser Versprechen',
    promiseQuote:
      'Wir glauben: Die beste Zukunft ist die, in der jeder Zugang zu denselben Technologien und Fähigkeiten hat, die früher wenigen vorbehalten waren. Mit uns kämpfen wir um messbare Ergebnisse, mehr Leads, mehr Umsatz oder Absolventen, die Arbeitgeber wirklich einstellen. Bewegen wir diese Kennzahlen nicht, haben wir unsere Arbeit nicht getan.',
    founderName: 'Pascal Digny Djohodo',
    founderRole: 'Gründer & CEO',
    servicesTitle: 'Unsere Dienstleistungen',
    servicesSubtitle: 'Drei Kernlösungen für echten geschäftlichen Mehrwert',
    aiEmployeeTitle: 'KI-Mitarbeiter-Systeme',
    aiEmployeeDesc:
      'Infrastruktur, die ohne Sie läuft, KI erfasst Leads, hält Kunden und beseitigt Nachfass-Chaos.',
    aiEmployeeCta: 'So funktioniert es',
    literacyTitle: 'Future-Ready Graduate Programm',
    literacyDesc: '85% beschäftigt. Geführtes Lernen, personalisiert nach den Talenten jedes Einzelnen, unternehmerische Begabungen entfalten. Wir bringen Lehrplan und Internet. Sie bringen Studierende.',
    literacyCta: 'Lehrplan entdecken',
    agenticTitle: 'Agentic Softwares',
    agenticDesc: 'KI-native Software, die wahrnimmt, denkt und autonom handelt.',
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
      'Construimos y co-creamos soluciones a problemas humanos, tecnología para ampliar acceso, dignidad y oportunidad.',
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
    timeline2026Description: '100 empleados, 10.000 capacitados para la economía gig.',
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
    provenDesc: '10 años. 150+ clientes. 98% de satisfacción.',
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
    literacyTitle: 'Programa Future-Ready Graduate',
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
    en: { ...commonEn, home: homeEn, blog: blogEn, about: aboutEn, contact: contactEn, clientJourney: clientJourneyEn, futureReadyGraduate: futureReadyGraduateEn, aiEmployeeProductDemos: aiEmployeeProductDemosEn, aiEmployeePage: aiEmployeePageEn, servicesPage: servicesPageEn },
    fr: { ...commonFr, home: homeFr, blog: blogFr, about: aboutFr, contact: contactFr, clientJourney: clientJourneyFr, futureReadyGraduate: futureReadyGraduateFr, aiEmployeeProductDemos: aiEmployeeProductDemosFr, aiEmployeePage: aiEmployeePageFr, servicesPage: servicesPageFr },
    ar: { ...commonAr, home: homeAr, blog: blogAr, about: aboutAr, contact: contactAr, clientJourney: clientJourneyAr, futureReadyGraduate: futureReadyGraduateEn, aiEmployeeProductDemos: aiEmployeeProductDemosAr, aiEmployeePage: aiEmployeePageAr, servicesPage: servicesPageEn },
    de: { ...commonDe, home: homeDe, blog: blogDe, about: aboutDe, contact: contactDe, clientJourney: clientJourneyDe, futureReadyGraduate: futureReadyGraduateEn, aiEmployeeProductDemos: aiEmployeeProductDemosDe, aiEmployeePage: aiEmployeePageDe, servicesPage: servicesPageEn },
    es: { ...commonEs, home: homeEs, blog: blogEs, about: aboutEs, contact: contactEs, clientJourney: clientJourneyEs, futureReadyGraduate: futureReadyGraduateEn, aiEmployeeProductDemos: aiEmployeeProductDemosEs, aiEmployeePage: aiEmployeePageEs, servicesPage: servicesPageEn },
  }
}

export const translations = buildTranslations()
