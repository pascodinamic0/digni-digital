/**
 * Full-site translations: English, French, Arabic
 * Every section, every page, every UI element.
 */

export type Language = 'en' | 'fr' | 'ar' | 'de' | 'es'

type HomeTranslations = {
  hero: {
    badge: string
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
    missedLeadsStat: string
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
    subtitle: string
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
}

type AboutTranslations = {
  [key: string]: string
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
  channels: Array<{ id: string; label: string }>
  brokenStages: Array<{ step: number; title: string; description: string; leak: string }>
  aiStages: Array<{ step: number; title: string; description: string; win: string }>
}

export type TranslationKeys = CommonTranslations & {
  home: HomeTranslations
  blog: BlogTranslations
  about: AboutTranslations
  contact: ContactTranslations
  clientJourney: ClientJourneyTranslations
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
      aiEmployeeDesc: 'Never miss a lead with 24/7 AI-powered employee',
      futureReadyGraduate: 'Digni Digital Literacy',
      futureReadyGraduateDesc: 'Transform students into job ready professionals',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'AI-native software that perceives, reasons, and acts autonomously',
    },
    cta: {
      getStarted: 'Get Started',
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
      startPartnership: 'Start Partnership',
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
      futureReadyDemo: 'Digni Digital Literacy Demo',
      aiEmployeeDemo: 'AI Employee Demo',
      ourMission: 'Our Mission',
      whatWeFightFor: "What We Fight For",
      aboutUs: 'About Us',
      careers: 'Careers',
      contact: 'Contact',
      affiliateProgram: 'Affiliate Program',
      copyright: 'All rights reserved.',
      trustedBy: 'Trusted by Businesses & Schools Worldwide',
      newsletterTitle: 'Stay Ahead of the Curve',
      newsletterSubtitle: 'Get exclusive insights, transformation tips, and industry trends delivered to your inbox monthly.',
      newsletterPlaceholder: 'Enter your email',
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
      aiEmployeeDesc: 'Ne manquez aucun prospect avec un employé IA 24/7',
      futureReadyGraduate: 'Digni Digital Literacy',
      futureReadyGraduateDesc: 'Transformez les étudiants en professionnels prêts pour l\'emploi',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'Logiciels IA natifs qui perçoivent, raisonnent et agissent de façon autonome',
    },
    cta: {
      getStarted: 'Commencer',
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
      startPartnership: 'Démarrer le partenariat',
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
      futureReadyDemo: 'Démo Digni Digital Literacy',
      aiEmployeeDemo: 'Démo Employé IA',
      ourMission: 'Notre Mission',
      whatWeFightFor: 'Ce pour quoi nous nous battons',
      aboutUs: 'À propos',
      careers: 'Carrières',
      contact: 'Contact',
      affiliateProgram: 'Programme d\'affiliation',
      copyright: 'Tous droits réservés.',
      trustedBy: 'Approuvé par entreprises et écoles dans le monde',
      newsletterTitle: 'Restez en avance',
      newsletterSubtitle: 'Insights exclusifs, conseils de transformation et tendances du secteur, une fois par mois.',
      newsletterPlaceholder: 'Votre adresse e-mail',
      subscribe: 'S\'abonner',
      newsletterThanks: 'Inscrit',
      newsletterError: 'Une erreur s\'est produite. Réessayez.',
      privacyPolicy: 'Politique de confidentialité',
      termsOfService: 'Conditions d\'utilisation',
      cookiePolicy: 'Politique des cookies',
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
      aiEmployeeDesc: 'لا تفوت أي عميل محتمل مع موظف ذكاء اصطناعي يعمل 24/7',
      futureReadyGraduate: 'Digni Digital Literacy',
      futureReadyGraduateDesc: 'حول الطلاب إلى محترفين جاهزين للعمل',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'برمجيات ذكاء اصطناعي أصيلة تدرك وتفكّر وتعمل بذاتها',
    },
    cta: {
      getStarted: 'ابدأ الآن',
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
      startPartnership: 'ابدأ الشراكة',
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
      futureReadyDemo: 'عرض Digni Digital Literacy',
      aiEmployeeDemo: 'عرض الموظف الذكي',
      ourMission: 'مهمتنا',
      whatWeFightFor: 'ما نكافح من أجله',
      aboutUs: 'من نحن',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
      affiliateProgram: 'برنامج الشركاء',
      copyright: 'جميع الحقوق محفوظة.',
      trustedBy: 'موثوق من الشركات والمدارس حول العالم',
      newsletterTitle: 'ابقَ في الصدارة',
      newsletterSubtitle: 'رؤى حصرية ونصائح تحويلية واتجاهات القطاع إلى بريدك شهرياً.',
      newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
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
      badge: 'Digital Transformation Agency',
      title: 'We Close the Gaps. ',
      titleHighlight: 'You Get the Results.',
      subtitle: 'Lost leads. Untapped talent. Ideas on the shelf. We help you turn them into what matters.',
      stat1Value: '150+',
      stat1Label: 'Businesses Transformed',
      stat2Value: 'Since 2019',
      stat3Value: 'Africa & Beyond',
      stat3Label: '',
      ourStory: 'Our Story',
      whatWeDo: 'What We Do',
    },
    mission: {
      title: 'Our Mission',
      statement: 'Technology that serves everyone.',
      description: 'We dream of a world where everyone is enabled, empowered, and connected to the technology and skills that change lives. Every business captures every lead. Every student graduates job-ready.',
      valuesTitle: 'Our Values',
      valuesSubtitle: "What We Stand For",
      humanFirst: 'Human First',
      humanFirstDesc: 'Tech that makes you stronger—not replaces you.',
      humanFirstPrinciple: 'People first.',
      equalAccess: 'Equal Access',
      equalAccessDesc: 'Small businesses get big-business tools.',
      equalAccessPrinciple: "Budget shouldn't decide who wins.",
      realResults: 'Real Results',
      realResultsDesc: 'Leads. Jobs. Revenue. We measure what matters.',
      realResultsPrinciple: 'Results from day one.',
      builtToLast: 'Built to Last',
      builtToLastDesc: 'Systems that grow with you. No obsolescence.',
      builtToLastPrinciple: 'Partners, not vendors.',
    },
    fighting: {
      badge: "What We're Fighting For",
      title: 'We Lead Here.',
      subtitle: 'Experts Who Stay Ahead.',
      realProblems: 'Current. You get peace of mind.',
      missedLeads: 'Missed Leads',
      missedLeadsProblem: '$62B lost yearly. Leads unanswered.',
      missedLeadsSolution: 'AI 24/7. Answer. Qualify. Book.',
      missedLeadsOutcome: 'Zero missed. Every inquiry converted.',
      missedLeadsStat: '$62B',
      missedLeadsStatLabel: 'Lost annually to missed leads',
      skillsGap: 'Skills Access Gap',
      skillsGapProblem: 'World changed. Winners master digital literacy. Access is unequal.',
      skillsGapSolution: 'Bridges theory and practice. Real digital skills.',
      skillsGapOutcome: 'Graduates employers actually hire.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Lack digital literacy access',
      techDivide: 'Tech Divide',
      techDivideProblem: "Big tech costs millions.",
      techDivideSolution: 'Enterprise tools. SMB budget.',
      techDivideOutcome: 'Same power. Your budget.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Enterprise vs SMB tech advantage',
      theProblem: 'The Problem',
      theSolution: 'The Solution',
      theOutcome: 'The Outcome',
    },
    whatWeDo: {
      badge: 'What We Do',
      title: 'Three Ways We',
      subtitle: 'Fight Back',
      forBusinesses: 'For Growing Businesses',
      forSchools: 'For Schools',
      forUniqueNeeds: 'For Unique Needs',
      aiEmployeeTitle: 'AI Employee Systems',
      aiEmployeeDesc: 'Capture every lead. Qualify. Book. 24/7.',
      aiEmployeeApproach: 'AI that talks like you. Done.',
      aiEmployeeOutcome1: '300% more leads captured',
      aiEmployeeOutcome2: '24/7 response',
      aiEmployeeOutcome3: 'Zero missed calls',
      aiEmployeeOutcome4: 'CRM connected',
      aiEmployeePrimaryCta: 'See How It Works',
      aiEmployeeSecondaryCta: 'Book a Demo',
      futureReadyTitle: 'Digni Digital Literacy',
      futureReadyDesc: 'Real skills. 85% employed.',
      futureReadyApproach: 'We train. Employers hire.',
      futureReadyOutcome1: '85% employment rate',
      futureReadyOutcome2: 'Direct employer links',
      futureReadyOutcome3: 'Real skills',
      futureReadyOutcome4: 'Measurable ROI',
      futureReadyPrimaryCta: 'View Program Details',
      futureReadySecondaryCta: 'Schedule Consultation',
      agenticSoftwaresTitle: 'Agentic Softwares',
      agenticSoftwaresDesc: 'AI that perceives, reasons, acts.',
      agenticSoftwaresApproach: 'Autonomous workflows. Smart automation.',
      agenticSoftwaresOutcome1: 'Autonomous agents',
      agenticSoftwaresOutcome2: 'AI-native architecture',
      agenticSoftwaresOutcome3: 'Intelligent workflows',
      agenticSoftwaresOutcome4: 'You own it',
      agenticSoftwaresPrimaryCta: 'Explore Process',
      agenticSoftwaresSecondaryCta: 'Discuss Your Project',
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
      stat2Sublabel: 'Digni Digital Literacy Program Success',
      stat3Label: 'Always-On Service',
      stat3Sublabel: 'Never Miss Another Lead',
      stat4Label: 'Client Satisfaction',
      stat4Sublabel: 'Across Both Solutions',
      aiEmployeeCard: 'AI Employee™',
      aiEmployeeCardSub: '50+ businesses. 10,000+ leads/month.',
      futureReadyCard: 'Digni Digital Literacy',
      futureReadyCardSub: '500+ students/year. 85% employed.',
    } as HomeTranslations['stats'],
    globalPresence: {
      badge: 'Where We Operate',
      title: 'Serving Clients',
      subtitle: 'Around the World',
      subtext: '4 continents. Local support. Global standards.',
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
      study2Title: 'Technical University',
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
      subtitle: "Let's fix what's broken. Book a call.",
      mechanism: "We listen → We build the fix → You get results. No fluff. No lock-in.",
      bullet1: '30-min Strategy Call',
      bullet2: 'No Obligation',
      bullet3: 'Actionable Insights',
    },
  }

  const homeFr: HomeTranslations = {
    hero: {
      badge: 'Agence de Transformation Digitale',
      title: 'Nous fermons les écarts. ',
      titleHighlight: 'Vous obtenez les résultats.',
      subtitle: 'Prospects perdus. Talents inexploités. Idées en attente. Nous vous aidons à les transformer en ce qui compte.',
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
      description: 'Nous rêvons d\'un monde où chacun est outillé, responsabilisé et connecté aux technologies et compétences qui changent les vies. Chaque entreprise capture chaque prospect. Chaque étudiant obtient un emploi.',
      valuesTitle: 'Nos Valeurs',
      valuesSubtitle: 'Ce qui nous anime',
      humanFirst: 'L\'Humain d\'abord',
      humanFirstDesc: 'Une tech qui vous renforce—pas qui vous remplace.',
      humanFirstPrinciple: 'Les personnes d\'abord.',
      equalAccess: 'Accès égal',
      equalAccessDesc: 'Les PME accèdent aux outils des grandes entreprises.',
      equalAccessPrinciple: 'Le budget ne décide pas du gagnant.',
      realResults: 'Résultats concrets',
      realResultsDesc: 'Prospects. Emplois. Revenus. Nous mesurons l\'essentiel.',
      realResultsPrinciple: 'Des résultats dès le premier jour.',
      builtToLast: 'Conçu pour durer',
      builtToLastDesc: 'Des systèmes qui évoluent avec vous. Pas d\'obsolescence.',
      builtToLastPrinciple: 'Partenaires, pas fournisseurs.',
    },
    fighting: {
      badge: 'Ce pour quoi nous nous battons',
      title: 'Nous menons dans ces domaines —',
      subtitle: 'Experts à jour et passionnés par notre métier',
      realProblems: 'Nous restons à la pointe. Vous avez l\'esprit tranquille.',
      missedLeads: 'Prospects manqués',
      missedLeadsProblem: '62 milliards $ perdus chaque année car les prospects restent sans réponse',
      missedLeadsSolution: 'Réceptionniste IA 24/7. Chaque appel répondu, chaque prospect qualifié et planifié.',
      missedLeadsOutcome: 'Zéro prospect manqué. Chaque demande convertie en revenu.',
      missedLeadsStat: '62 Mds $',
      missedLeadsStatLabel: 'Perdus annuellement en prospects manqués',
      skillsGap: 'Fossé d\'accès aux compétences',
      skillsGapProblem: 'Le monde a changé. Gagnent ceux qui maîtrisent la littératie digitale et les outils—l\'accès reste inégal.',
      skillsGapSolution: 'Digni Digital Literacy relie théorie et pratique avec une formation aux compétences digitales réelles.',
      skillsGapOutcome: 'Des diplômés avec la littératie digitale que les employeurs recherchent.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Manquent d\'accès à la littératie digitale',
      techDivide: 'Fracture technologique',
      techDivideProblem: 'La tech coûte des millions. Vous ne pouvez pas vous le permettre.',
      techDivideSolution: 'Outils de niveau entreprise adaptés aux budgets PME. Même puissance, prix accessible.',
      techDivideOutcome: 'Même puissance. Votre budget. Concurrence équitable.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Avantage tech entreprise vs PME',
      theProblem: 'Le Problème',
      theSolution: 'La Solution',
      theOutcome: 'Le Résultat',
    },
    whatWeDo: {
      badge: 'Ce que nous faisons',
      title: 'Trois façons de',
      subtitle: 'réagir',
      forBusinesses: 'Pour les entreprises en croissance',
      forSchools: 'Pour les écoles',
      forUniqueNeeds: 'Pour les besoins uniques',
      aiEmployeeTitle: 'Employés IA',
      aiEmployeeDesc: 'Capturez chaque prospect. Qualifiez. Réservez. 24/7. Ne manquez plus jamais.',
      aiEmployeeApproach: 'Nous étudions votre entreprise. Créons une IA qui parle comme vous.',
      aiEmployeeOutcome1: '300% de prospects en plus',
      aiEmployeeOutcome2: 'Réponse 24/7',
      aiEmployeeOutcome3: 'Zéro appel manqué',
      aiEmployeeOutcome4: 'Connecté au CRM',
      aiEmployeePrimaryCta: 'Voir comment ça marche',
      aiEmployeeSecondaryCta: 'Réserver une démo',
      futureReadyTitle: 'Diplômé Prêt pour l\'Avenir',
      futureReadyDesc: 'Des étudiants diplômés avec de vraies compétences. 85% obtiennent un emploi.',
      futureReadyApproach: 'Nous formons. Les employeurs recrutent. Vous êtes le pont.',
      futureReadyOutcome1: '85% d\'emploi',
      futureReadyOutcome2: 'Liens directs employeurs',
      futureReadyOutcome3: 'Compétences réelles',
      futureReadyOutcome4: 'ROI mesurable',
      futureReadyPrimaryCta: 'Détails du programme',
      futureReadySecondaryCta: 'Planifier une consultation',
      agenticSoftwaresTitle: 'Agentic Softwares',
      agenticSoftwaresDesc: 'Logiciels IA natifs qui perçoivent, raisonnent et agissent de façon autonome.',
      agenticSoftwaresApproach: 'Nous construisons des logiciels à ADN agentique : workflows autonomes, automatisation intelligente.',
      agenticSoftwaresOutcome1: 'Agents autonomes',
      agenticSoftwaresOutcome2: 'Architecture IA native',
      agenticSoftwaresOutcome3: 'Workflows intelligents',
      agenticSoftwaresOutcome4: 'Vous en êtes propriétaire',
      agenticSoftwaresPrimaryCta: 'Explorer le processus',
      agenticSoftwaresSecondaryCta: 'Discuter de votre projet',
      notSureTitle: 'Pas sûr du service qu\'il vous faut ?',
      notSureSubtitle: 'Dites-nous votre problème. Nous trouverons la solution.',
      whatWeDoDescription: 'Chaque service résout un vrai problème. Impact, pas de buzzwords.',
    },
    stats: {
      badge: 'Bilan prouvé',
      title: 'Vrais résultats de',
      subtitle: 'vraies implantations',
      realNumbers: 'Vrais chiffres. Vrais clients.',
      stat1Label: 'Hausse de conversion des prospects',
      stat1Sublabel: 'Résultats Employé IA™',
      stat2Label: 'Taux d\'emploi des diplômés',
      stat2Sublabel: 'Succès Diplômé Prêt™',
      stat3Label: 'Service toujours disponible',
      stat3Sublabel: 'Ne manquez plus aucun prospect',
      stat4Label: 'Satisfaction client',
      stat4Sublabel: 'Sur les deux solutions',
      aiEmployeeCard: 'Employé IA™',
      aiEmployeeCardSub: '50+ entreprises. 10 000+ prospects/mois.',
      futureReadyCard: 'Diplômé Prêt™',
      futureReadyCardSub: '500+ étudiants/an. 85% employés.',
    } as HomeTranslations['stats'],
    globalPresence: {
      badge: 'Où nous opérons',
      title: 'Au service des clients',
      subtitle: 'dans le monde entier',
      subtext: '4 continents. Support local. Normes mondiales.',
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
      study2Title: 'Université Technique',
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
      subtitle: 'Corrigeons ce qui ne va pas. Réservez un appel.',
      mechanism: "Nous écoutons → Nous construisons la solution → Vous obtenez des résultats. Sans blabla. Sans enfermement.",
      bullet1: 'Appel stratégique de 30 min',
      bullet2: 'Sans engagement',
      bullet3: 'Conseils actionnables',
    },
  }

  const homeAr: HomeTranslations = {
    hero: {
      badge: 'وكالة التحول الرقمي',
      title: 'نحن نغلق الفجوات. ',
      titleHighlight: 'تحصل أنت على النتائج.',
      subtitle: 'عملاء محتملون ضاعوا. مواهب معطّلة. أفكار على الرف. نساعدك على تحويلها إلى ما يهم.',
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
      description: 'كل شركة تستقطب كل عميل. كل طالب يتخرج جاهزاً للوظيفة.',
      valuesTitle: 'قيمنا',
      valuesSubtitle: 'ما نؤمن به',
      humanFirst: 'الإنسان أولاً',
      humanFirstDesc: 'تقنية تقويك—لا تستبدلك.',
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
      title: 'نحن رواد في هذه المجالات —',
      subtitle: 'خبراء محدثون ومتحمسون لعملنا',
      realProblems: 'نبقى على اطلاع بكل تطور. وأنت مطمئن.',
      missedLeads: 'عملاء محتملون ضائعون',
      missedLeadsProblem: '62 مليار $ تضيع سنوياً لأن العملاء لا يُجابون',
      missedLeadsSolution: 'موظف استقبال ذكي 24/7. كل مكالمة تُجاب، كل عميل يُؤهل ويُحجز.',
      missedLeadsOutcome: 'صفر عملاء مفقودين. كل استفسار يتحول إلى إيرادات.',
      missedLeadsStat: '62 مليار $',
      missedLeadsStatLabel: 'تضيع سنوياً في عملاء محتملين',
      skillsGap: 'فجوة الوصول للمهارات',
      skillsGapProblem: 'العالم تغيّر. من يفوز هم من يتقنون القراءة الرقمية والأدوات—لكن الوصول غير متساوٍ.',
      skillsGapSolution: 'Digni Digital Literacy يربط النظرية بالممارسة مع تدريب على مهارات رقمية حقيقية.',
      skillsGapOutcome: 'خريجون بالقراءة الرقمية التي يبحث عنها أصحاب العمل.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'يفتقدون الوصول للقراءة الرقمية',
      techDivide: 'الفجوة التقنية',
      techDivideProblem: 'التقنية تكلف الملايين. لا تستطيع تحملها.',
      techDivideSolution: 'أدوات مستوى enterprise لميزانيات المشاريع الصغيرة. نفس القوة، أسعار في المتناول.',
      techDivideOutcome: 'نفس القوة. ميزانيتك. منافسة عادلة.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'ميزة الشركات vs المشاريع الصغيرة',
      theProblem: 'المشكلة',
      theSolution: 'الحل',
      theOutcome: 'النتيجة',
    },
    whatWeDo: {
      badge: 'ماذا نفعل',
      title: 'ثلاث طرق',
      subtitle: 'للمقاومة',
      forBusinesses: 'للشركات النامية',
      forSchools: 'للمدارس',
      forUniqueNeeds: 'للاحتياجات الفريدة',
      aiEmployeeTitle: 'أنظمة الموظف الذكي',
      aiEmployeeDesc: 'استقطب كل عميل. صيّفه. احجز مواعيد. 24/7. لا تفوت مرة أخرى.',
      aiEmployeeApproach: 'ندرس عملك. نبني ذكاءً يتحدث مثلك. تم.',
      aiEmployeeOutcome1: '300% عملاء إضافيون',
      aiEmployeeOutcome2: 'استجابة 24/7',
      aiEmployeeOutcome3: 'صفر مكالمات ضائعة',
      aiEmployeeOutcome4: 'متصل بنظام إدارة العملاء',
      aiEmployeePrimaryCta: 'اكتشف كيف يعمل',
      aiEmployeeSecondaryCta: 'احجز عرضاً',
      futureReadyTitle: 'الخريج الجاهز للمستقبل',
      futureReadyDesc: 'طلاب يتخرجون بمهارات حقيقية. 85% يحصلون على وظائف.',
      futureReadyApproach: 'نحن ندرّب. أصحاب العمل يوظفون. أنت الجسر.',
      futureReadyOutcome1: '85% معدل توظيف',
      futureReadyOutcome2: 'روابط مباشرة بأصحاب العمل',
      futureReadyOutcome3: 'مهارات حقيقية',
      futureReadyOutcome4: 'عائد استثمار قابل للقياس',
      futureReadyPrimaryCta: 'تفاصيل البرنامج',
      futureReadySecondaryCta: 'جدولة استشارة',
      agenticSoftwaresTitle: 'Agentic Softwares',
      agenticSoftwaresDesc: 'برمجيات ذكاء اصطناعي أصيلة تدرك وتفكّر وتعمل بذاتها.',
      agenticSoftwaresApproach: 'نبني برمجيات بجينات وكيلية: سير عمل مستقل، أتمتة ذكية.',
      agenticSoftwaresOutcome1: 'وكلاء مستقلون',
      agenticSoftwaresOutcome2: 'بنية IA أصلية',
      agenticSoftwaresOutcome3: 'سير عمل ذكي',
      agenticSoftwaresOutcome4: 'أنت تملكه',
      agenticSoftwaresPrimaryCta: 'اكتشف العملية',
      agenticSoftwaresSecondaryCta: 'ناقش مشروعك',
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
      stat2Sublabel: 'نجاح الخريج الجاهز™',
      stat3Label: 'خدمة متاحة دائماً',
      stat3Sublabel: 'لا تفوت عميلاً آخر',
      stat4Label: 'رضا العملاء',
      stat4Sublabel: 'عبر الحلين',
      aiEmployeeCard: 'الموظف الذكي™',
      aiEmployeeCardSub: '50+ شركة. 10,000+ عميل/شهر.',
      futureReadyCard: 'الخريج الجاهز™',
      futureReadyCardSub: '500+ طالب/سنة. 85% موظفون.',
    } as HomeTranslations['stats'],
    globalPresence: {
      badge: 'أين نعمل',
      title: 'نخدم العملاء',
      subtitle: 'حول العالم',
      subtext: '4 قارات. دعم محلي. معايير عالمية.',
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
      study2Title: 'الجامعة التقنية',
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
      subtitle: 'لنصلح ما هو معطّل. احجز مكالمة.',
      mechanism: "نستمع → نبني الحل → تحصل على النتائج. دون ثرثرة. دون قيود.",
      bullet1: 'مكالمة استراتيجية 30 دقيقة',
      bullet2: 'بدون التزام',
      bullet3: 'رؤى قابلة للتطبيق',
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
    readyFutureReady: 'Ready for the Digni Digital Literacy Program?',
    readyFutureReadyDesc: 'Explore the Digni Digital Literacy Program—transform students into job-ready professionals with AI-powered digital skills. 85% employment within 6 months.',
    exploreFutureReady: 'Explore Digni Digital Literacy Program',
    readyTransform: 'Ready to Transform Your Business?',
    readyTransformDesc: "Let's discuss how these insights can be applied to your specific challenges.",
    noArticles: 'No articles found',
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    featuredArticles: 'Featured Articles',
    allArticles: 'All Articles',
    featured: 'featured',
  }

  const blogFr: BlogTranslations = {
    heroTitle: 'Transformation Digitale',
    heroSubtitle: 'Insights',
    heroDesc: 'Expertises sur la transformation digitale africaine, l\'IA et les succès d\'entreprises pour les dirigeants qui façonnent l\'avenir.',
    searchPlaceholder: 'Rechercher des articles par titre, contenu ou tags...',
    filterByCategory: 'Filtrer par catégorie',
    all: 'Tous',
    readMore: 'Lire la suite',
    backToBlog: 'Retour au blog',
    tags: 'Tags',
    by: 'Par',
    minRead: 'min de lecture',
    readyFutureReady: 'Prêt pour le programme Digni Digital Literacy ?',
    readyFutureReadyDesc: 'Découvrez le programme Digni Digital Literacy—transformez les étudiants en professionnels prêts pour l\'emploi. 85% d\'emploi en 6 mois.',
    exploreFutureReady: 'Explorer le programme Digni Digital Literacy',
    readyTransform: 'Prêt à transformer votre entreprise ?',
    readyTransformDesc: 'Discutons de comment ces insights s\'appliquent à vos défis.',
    noArticles: 'Aucun article trouvé',
    previous: 'Précédent',
    next: 'Suivant',
    page: 'Page',
    featuredArticles: 'Articles à la une',
    allArticles: 'Tous les articles',
    featured: 'à la une',
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
    readyFutureReady: 'هل أنت مستعد لبرنامج Digni Digital Literacy؟',
    readyFutureReadyDesc: 'اكتشف برنامج Digni Digital Literacy—حوّل الطلاب إلى محترفين جاهزين للعمل بمهارات رقمية مدعومة بالذكاء الاصطناعي. 85% توظيف خلال 6 أشهر.',
    exploreFutureReady: 'اكتشف برنامج Digni Digital Literacy',
    readyTransform: 'هل أنت مستعد لتحويل عملك؟',
    readyTransformDesc: 'لنناقش كيف تُطبَّق هذه الرؤى على تحدياتك.',
    noArticles: 'لم يتم العثور على مقالات',
    previous: 'السابق',
    next: 'التالي',
    page: 'صفحة',
    featuredArticles: 'المقالات المميزة',
    allArticles: 'جميع المقالات',
    featured: 'مميز',
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
      { value: 'future-ready-graduate', label: 'Digni Digital Literacy' },
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
      { value: 'future-ready-graduate', label: 'Digni Digital Literacy' },
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
      { question: 'Que comprend la consultation ?', answer: 'Revue activité, audit tech, stratégie. 30 min. Gratuit. Sans engagement.' },
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
      { value: 'future-ready-graduate', label: 'Digni Digital Literacy' },
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

  const clientJourneyEn: ClientJourneyTranslations = {
    badge: 'Same 100 Leads. Two Outcomes.',
    title: '99 Leak.',
    subtitle: '95 Close. Referrals Compound.',
    subtext: 'One path bleeds. One compounds. The playbook is simple. The execution isn\'t.',
    brokenLabel: 'The Leak',
    aiFlowLabel: 'The Loop',
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
    subtext: 'Un fuit. L\'autre convertit. IA répond en 2 sec, qualifie, réserve. Parrainages alimentent la boucle.',
    brokenLabel: 'La fuite',
    aiFlowLabel: 'La boucle',
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

  return {
    en: { ...commonEn, home: homeEn, blog: blogEn, about: {}, contact: contactEn, clientJourney: clientJourneyEn },
    fr: { ...commonFr, home: homeFr, blog: blogFr, about: {}, contact: contactFr, clientJourney: clientJourneyFr },
    ar: { ...commonAr, home: homeAr, blog: blogAr, about: {}, contact: contactAr, clientJourney: clientJourneyAr },
    de: { ...commonEn, home: homeEn, blog: blogEn, about: {}, contact: contactEn, clientJourney: clientJourneyEn },
    es: { ...commonEn, home: homeEn, blog: blogEn, about: {}, contact: contactEn, clientJourney: clientJourneyEn },
  }
}

export const translations = buildTranslations()
