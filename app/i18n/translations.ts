/**
 * Full-site translations: English, French, Arabic
 * Every section, every page, every UI element.
 */

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
  statYears: string
  statStudents: string
  statLeads: string
  statSatisfaction: string
  statEmployed: string
  statSkilled: string
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
      futureReadyGraduate: 'Future-Ready Graduate Program',
      futureReadyGraduateDesc: 'Transform students into job-ready professionals. Personalized guided learning that brings out entrepreneurial talents.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'AI-native software that perceives, reasons, and acts autonomously',
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
      futureReadyGraduate: 'Programme Diplômé Prêt pour l\'Avenir',
      futureReadyGraduateDesc: 'Transformez les étudiants en professionnels prêts pour l\'emploi. Apprentissage guidé personnalisé qui révèle les talents entrepreneuriaux.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'Logiciels IA natifs qui perçoivent, raisonnent et agissent de façon autonome',
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
      bookYourSpot: 'Réservez votre place. Plus que 25 places',
      startPartnership: 'Démarrer le partenariat',
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

  const commonDe = {
    nav: {
      ourMission: 'Unsere Mission',
      aboutUs: 'Über uns',
      caseStudies: 'Fallstudien',
      solutions: 'Services',
      articles: 'Artikel',
      contact: 'Kontakt',
      aiEmployee: 'KI-Mitarbeiter',
      aiEmployeeDesc: 'Verpassen Sie keine Leads mit dem 24/7 KI-Mitarbeiter',
      futureReadyGraduate: 'Future-Ready Graduate Program',
      futureReadyGraduateDesc: 'Machen Sie Studenten zu arbeitsbereiten Fachleuten. Personalisiertes geführtes Lernen, das unternehmerische Talente fördert.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'KI-native Software, die wahrnimmt, denkt und autonom handelt',
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
      aiEmployeeDesc: 'No pierda leads con un empleado IA 24/7',
      futureReadyGraduate: 'Future-Ready Graduate Program',
      futureReadyGraduateDesc: 'Transforme estudiantes en profesionales listos para el empleo. Aprendizaje guiado personalizado que desarrolla talentos emprendedores.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'Software nativo IA que percibe, razona y actúa de forma autónoma',
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
      aiEmployeeDesc: 'لا تفوت أي عميل محتمل مع موظف ذكاء اصطناعي يعمل 24/7',
      futureReadyGraduate: 'Future-Ready Graduate Program',
      futureReadyGraduateDesc: 'حول الطلاب إلى محترفين جاهزين للعمل. تعلم موجّه شخصي يكشف المواهب الريادية.',
      agenticSoftwares: 'Agentic Softwares',
      agenticSoftwaresDesc: 'برمجيات ذكاء اصطناعي أصيلة تدرك وتفكّر وتعمل بذاتها',
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
      badge1: 'Digital Transformation Agency',
      badge2: 'Business Development Agency',
      badge3: 'AI Automation Startup',
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
      description: 'We dream of a world where everyone is enabled, empowered, and connected to the technology and skills that change lives.',
      commitmentOneLiner: 'By end of 2026 we\'re committed to creating employment for 100 people and equipping 10,000 more with digital skills so they can thrive in the gig economy and as entrepreneurs.',
      valuesTitle: 'Our Values',
      valuesSubtitle: "What We Stand For",
      humanFirst: 'Human First',
      humanFirstDesc: 'Tech that makes you stronger—not replaces you.',
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
      skillsGapSolution: 'Guided learning personalized to each person\'s talents. Skills that bring out entrepreneurial potential.',
      skillsGapOutcome: 'Graduates employers hire—or who create their own jobs.',
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
    commitment2026: {
      badge: 'Our 2026 Commitment',
      title: '100 employed. 10,000 skilled for the gig economy.',
      subtitle: 'We equip people with digital skills that unlock entrepreneurship and competitiveness in the gig economy.',
      pillar1Title: '100 people in employment',
      pillar1Desc: 'Direct jobs at Digni or with our partners by end of 2026.',
      pillar2Title: '10,000 equipped with digital skills',
      pillar2Desc: 'Skilled for entrepreneurship and gig work through programs like our Future-Ready Graduate Program.',
      proofLine: 'Already delivering: 85% employment rate, 500+ students per year.',
      proofLink1Text: 'Future-Ready Graduate Program',
      proofLink2Text: 'Careers',
      ctaPrimary: 'Book a Strategy Call',
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
      futureReadyTitle: 'Future-Ready Graduate Program',
      futureReadyDesc: 'Real skills. 85% employed. We bring out entrepreneurial talents through personalized guided learning.',
      futureReadyApproach: 'Guided learning tailored to each person\'s gifts. We train. Employers hire—or they create jobs.',
      futureReadyOutcome1: '85% employment rate',
      futureReadyOutcome2: 'Entrepreneurial talents unlocked',
      futureReadyOutcome3: 'Personalized to your gifts',
      futureReadyOutcome4: 'Job creation as core value',
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
      stat2Sublabel: 'Future-Ready Graduate Program Success',
      stat3Label: 'Always-On Service',
      stat3Sublabel: 'Never Miss Another Lead',
      stat4Label: 'Client Satisfaction',
      stat4Sublabel: 'Across Both Solutions',
      aiEmployeeCard: 'AI Employee™',
      aiEmployeeCardSub: '50+ businesses. 10,000+ leads/month.',
      futureReadyCard: 'Future-Ready Graduate Program',
      futureReadyCardSub: '500+ students/year. 85% employed. Entrepreneurial talents unlocked through personalized learning.',
      agenticCard: 'Agentic Softwares',
      agenticCardSub: 'Custom projects. 90% faster workflows. Intelligent automation.',
    } as HomeTranslations['stats'],
    globalPresence: {
      badge: 'Where We Operate',
      title: 'Serving Clients',
      subtitle: 'Around the World',
      subtext: "We're not in 4 continents just yet. Our HQ is in the US; we work with teams and clients across Africa and beyond.",
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
      badge1: 'Agence de Transformation Digitale',
      badge2: 'Agence de Développement d\'Affaires',
      badge3: 'Startup d\'Automatisation IA',
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
      description: 'Nous rêvons d\'un monde où chacun est outillé, responsabilisé et connecté aux technologies et compétences qui changent les vies.',
      commitmentOneLiner: 'D\'ici fin 2026, nous nous engageons à créer des emplois pour 100 personnes et à former 10 000 autres aux compétences numériques pour qu\'elles prospèrent dans l\'économie des petits boulots et en tant qu\'entrepreneurs.',
      valuesTitle: 'Nos Valeurs',
      valuesSubtitle: 'Ce qui nous anime',
      humanFirst: 'L\'Humain d\'abord',
      humanFirstDesc: 'Une tech qui vous renforce—pas qui vous remplace.',
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
      skillsGapSolution: 'Apprentissage guidé personnalisé aux talents de chacun. Des compétences qui révèlent le potentiel entrepreneurial.',
      skillsGapOutcome: 'Des diplômés que les employeurs recrutent—ou qui créent leurs propres emplois.',
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
    commitment2026: {
      badge: 'Notre engagement 2026',
      title: '100 en emploi. 10 000 formés pour l\'économie des petits boulots.',
      subtitle: 'Nous dotons les gens de compétences numériques qui libèrent l\'esprit d\'entreprise et la compétitivité dans l\'économie des petits boulots.',
      pillar1Title: '100 personnes en emploi',
      pillar1Desc: 'Emplois directs chez Digni ou avec nos partenaires d\'ici fin 2026.',
      pillar2Title: '10 000 formés aux compétences numériques',
      pillar2Desc: 'Compétences pour l\'entrepreneuriat et le travail à la tâche via des programmes comme le Programme Diplômé Prêt pour l\'Avenir.',
      proofLine: 'Déjà en place : 85% d\'emploi, 500+ étudiants par an.',
      proofLink1Text: 'Programme Diplômé Prêt pour l\'Avenir',
      proofLink2Text: 'Carrières',
      ctaPrimary: 'Réserver un appel stratégique',
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
      futureReadyTitle: 'Programme Diplômé Prêt pour l\'Avenir',
      futureReadyDesc: 'Vraies compétences. 85% employés. Nous révélons les talents entrepreneuriaux par un apprentissage guidé personnalisé.',
      futureReadyApproach: 'Apprentissage guidé adapté aux dons de chacun. Nous formons. Les employeurs recrutent—ou ils créent des emplois.',
      futureReadyOutcome1: '85% d\'emploi',
      futureReadyOutcome2: 'Talents entrepreneuriaux révélés',
      futureReadyOutcome3: 'Personnalisé à vos dons',
      futureReadyOutcome4: 'Création d\'emplois comme valeur centrale',
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
      stat2Sublabel: 'Succès du Programme Diplômé Prêt pour l\'Avenir',
      stat3Label: 'Service toujours disponible',
      stat3Sublabel: 'Ne manquez plus aucun prospect',
      stat4Label: 'Satisfaction client',
      stat4Sublabel: 'Sur les deux solutions',
      aiEmployeeCard: 'Employé IA™',
      aiEmployeeCardSub: '50+ entreprises. 10 000+ prospects/mois.',
      futureReadyCard: 'Programme Diplômé Prêt pour l\'Avenir',
      futureReadyCardSub: '500+ étudiants/an. 85% employés. Talents entrepreneuriaux révélés par un apprentissage personnalisé.',
      agenticCard: 'Agentic Softwares',
      agenticCardSub: 'Projets sur mesure. 90% plus rapide. Automatisation intelligente.',
    } as HomeTranslations['stats'],
    globalPresence: {
      badge: 'Où nous opérons',
      title: 'Au service des clients',
      subtitle: 'dans le monde entier',
      subtext: "Nous ne sommes pas encore sur 4 continents. Notre siège est aux États-Unis ; nous travaillons avec des équipes et des clients en Afrique et au-delà.",
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
      badge1: 'وكالة التحول الرقمي',
      badge2: 'وكالة تطوير الأعمال',
      badge3: 'شركة ناشئة لأتمتة الذكاء الاصطناعي',
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
      description: 'نحلم بعالم يُمكّن الجميع ويربطهم بالتقنية والمهارات التي تغيّر الحياة.',
      commitmentOneLiner: 'بحلول نهاية 2026 نلتزم بخلق فرص عمل لـ 100 شخص وتأهيل 10,000 آخرين بالمهارات الرقمية ليزدهروا في اقتصاد العمل الحر وكرواد أعمال.',
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
      skillsGapSolution: 'تعلم موجّه شخصي وفق مواهب كل فرد. مهارات تكشف الإمكانات الريادية.',
      skillsGapOutcome: 'خريجون يوظّفهم أصحاب العمل—أو ينشئون وظائفهم بأنفسهم.',
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
    commitment2026: {
      badge: 'التزامنا 2026',
      title: '100 موظّف. 10,000 مؤهّلون لاقتصاد العمل الحر.',
      subtitle: 'نؤهل الناس بمهارات رقمية تطلق ريادة الأعمال والقدرة التنافسية في اقتصاد العمل الحر.',
      pillar1Title: '100 شخص في وظائف',
      pillar1Desc: 'وظائف مباشرة في Digni أو مع شركائنا بحلول نهاية 2026.',
      pillar2Title: '10,000 مؤهّلون بالمهارات الرقمية',
      pillar2Desc: 'مؤهّلون لريادة الأعمال والعمل الحر عبر برامج مثل Future-Ready Graduate.',
      proofLine: 'ننفّذ بالفعل: 85% توظيف، 500+ طالب سنوياً.',
      proofLink1Text: 'برنامج Future-Ready Graduate',
      proofLink2Text: 'الوظائف',
      ctaPrimary: 'احجز مكالمة استراتيجية',
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
      futureReadyTitle: 'Future-Ready Graduate Program',
      futureReadyDesc: 'مهارات حقيقية. 85% موظفون. نكشف المواهب الريادية عبر تعلم موجّه شخصي.',
      futureReadyApproach: 'تعلم موجّه مخصص لمواهب كل فرد. ندرّب. أصحاب العمل يوظفون—أو ينشئون الوظائف.',
      futureReadyOutcome1: '85% معدل توظيف',
      futureReadyOutcome2: 'مواهب ريادية مكشوفة',
      futureReadyOutcome3: 'شخصي وفق مواهبك',
      futureReadyOutcome4: 'خلق الوظائف قيمة جوهرية',
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
      stat2Sublabel: 'نجاح Future-Ready Graduate Program',
      stat3Label: 'خدمة متاحة دائماً',
      stat3Sublabel: 'لا تفوت عميلاً آخر',
      stat4Label: 'رضا العملاء',
      stat4Sublabel: 'عبر الحلين',
      aiEmployeeCard: 'الموظف الذكي™',
      aiEmployeeCardSub: '50+ شركة. 10,000+ عميل/شهر.',
      futureReadyCard: 'Future-Ready Graduate Program',
      futureReadyCardSub: '500+ طالب/سنة. 85% موظفون. مواهب ريادية مكشوفة عبر تعلم شخصي.',
      agenticCard: 'Agentic Softwares',
      agenticCardSub: 'مشاريع مخصصة. 90% أسرع. أتمتة ذكية.',
    } as HomeTranslations['stats'],
    globalPresence: {
      badge: 'أين نعمل',
      title: 'نخدم العملاء',
      subtitle: 'حول العالم',
      subtext: 'لسنا بعد في 4 قارات. مقرنا في الولايات المتحدة؛ نعمل مع فرق وعملاء في أفريقيا وما بعدها.',
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

  const homeDe: HomeTranslations = {
    hero: {
      badge: 'Agentur für digitale Transformation',
      badge1: 'Agentur für digitale Transformation',
      badge2: 'Agentur für Geschäftsentwicklung',
      badge3: 'KI-Automatisierungs-Startup',
      title: 'Wir schließen die Lücken. ',
      titleHighlight: 'Sie erhalten die Ergebnisse.',
      subtitle: 'Verlorene Leads. Ungenutztes Talent. Ideen auf Eis. Wir helfen Ihnen, sie in das zu verwandeln, was zählt.',
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
      humanFirstDesc: 'Technologie, die Sie stärkt—nicht ersetzt.',
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
      title: 'Wir führen hier.',
      subtitle: 'Experten, die voraus sind.',
      realProblems: 'Aktuell. Sie haben Ruhe.',
      missedLeads: 'Verpasste Leads',
      missedLeadsProblem: '62 Mrd. $ jährlich verloren. Leads unbeantwortet.',
      missedLeadsSolution: 'KI 24/7. Antworten. Qualifizieren. Buchen.',
      missedLeadsOutcome: 'Keine verpasst. Jede Anfrage konvertiert.',
      missedLeadsStat: '62 Mrd. $',
      missedLeadsStatLabel: 'Jährlich durch verpasste Leads verloren',
      skillsGap: 'Kompetenzlücke',
      skillsGapProblem: 'Welt hat sich geändert. Gewinner beherrschen digitale Kompetenz. Zugang ist ungleich.',
      skillsGapSolution: 'Geführtes Lernen, personalisiert nach den Talenten jedes Einzelnen. Fähigkeiten, die unternehmerisches Potenzial fördern.',
      skillsGapOutcome: 'Absolventen, die Arbeitgeber einstellen—oder eigene Jobs schaffen.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Fehlender Zugang zu digitaler Kompetenz',
      techDivide: 'Technologie-Kluft',
      techDivideProblem: 'Große Tech kostet Millionen.',
      techDivideSolution: 'Enterprise-Tools. KMU-Budget.',
      techDivideOutcome: 'Gleiche Kraft. Ihr Budget.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Enterprise vs. KMU Technologie-Vorteil',
      theProblem: 'Das Problem',
      theSolution: 'Die Lösung',
      theOutcome: 'Das Ergebnis',
    },
    commitment2026: {
      badge: 'Unser 2026-Verprechen',
      title: '100 in Arbeit. 10.000 qualifiziert für die Gig-Economy.',
      subtitle: 'Wir statten Menschen mit digitalen Fähigkeiten aus, die Unternehmertum und Wettbewerbsfähigkeit in der Gig-Economy ermöglichen.',
      pillar1Title: '100 Menschen in Beschäftigung',
      pillar1Desc: 'Direkte Jobs bei Digni oder mit Partnern bis Ende 2026.',
      pillar2Title: '10.000 mit digitalen Fähigkeiten ausgestattet',
      pillar2Desc: 'Qualifiziert für Unternehmertum und Gig-Arbeit durch Programme wie Future-Ready Graduate.',
      proofLine: 'Bereits umgesetzt: 85% Beschäftigungsrate, 500+ Studierende pro Jahr.',
      proofLink1Text: 'Future-Ready Graduate Program',
      proofLink2Text: 'Karriere',
      ctaPrimary: 'Strategiegespräch buchen',
    },
    whatWeDo: {
      badge: 'Was wir tun',
      title: 'Drei Wege, wie wir',
      subtitle: 'zurückschlagen',
      forBusinesses: 'Für wachsende Unternehmen',
      forSchools: 'Für Schulen',
      forUniqueNeeds: 'Für besondere Bedürfnisse',
      aiEmployeeTitle: 'KI-Mitarbeiter-Systeme',
      aiEmployeeDesc: 'Erfassen Sie jeden Lead. Qualifizieren. Buchen. 24/7.',
      aiEmployeeApproach: 'KI, die wie Sie spricht. Fertig.',
      aiEmployeeOutcome1: '300% mehr Leads erfasst',
      aiEmployeeOutcome2: '24/7 Antwort',
      aiEmployeeOutcome3: 'Keine verpassten Anrufe',
      aiEmployeeOutcome4: 'CRM verbunden',
      aiEmployeePrimaryCta: 'So funktioniert es',
      aiEmployeeSecondaryCta: 'Demo buchen',
      futureReadyTitle: 'Future-Ready Graduate Program',
      futureReadyDesc: 'Echte Fähigkeiten. 85% beschäftigt. Wir fördern unternehmerische Talente durch personalisiertes geführtes Lernen.',
      futureReadyApproach: 'Geführtes Lernen, angepasst an die Talente jedes Einzelnen. Wir trainieren. Arbeitgeber stellen ein—oder sie schaffen Jobs.',
      futureReadyOutcome1: '85% Beschäftigungsrate',
      futureReadyOutcome2: 'Unternehmerische Talente freigesetzt',
      futureReadyOutcome3: 'Personalisiert nach Ihren Talenten',
      futureReadyOutcome4: 'Jobschaffung als Kernwert',
      futureReadyPrimaryCta: 'Programmdetails anzeigen',
      futureReadySecondaryCta: 'Beratung planen',
      agenticSoftwaresTitle: 'Agentic Softwares',
      agenticSoftwaresDesc: 'KI, die wahrnimmt, denkt und handelt.',
      agenticSoftwaresApproach: 'Autonome Workflows. Intelligente Automatisierung.',
      agenticSoftwaresOutcome1: 'Autonome Agenten',
      agenticSoftwaresOutcome2: 'KI-native Architektur',
      agenticSoftwaresOutcome3: 'Intelligente Workflows',
      agenticSoftwaresOutcome4: 'Sie besitzen es',
      agenticSoftwaresPrimaryCta: 'Prozess erkunden',
      agenticSoftwaresSecondaryCta: 'Projekt besprechen',
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
      futureReadyCardSub: '500+ Studenten/Jahr. 85% beschäftigt. Unternehmerische Talente durch personalisiertes Lernen.',
      agenticCard: 'Agentic Softwares',
      agenticCardSub: 'Individuelle Projekte. 90% schneller. Intelligente Automatisierung.',
    } as HomeTranslations['stats'],
    globalPresence: {
      badge: 'Wo wir tätig sind',
      title: 'Kunden bedienen',
      subtitle: 'weltweit',
      subtext: '4 Kontinente. Lokaler Support. Globale Standards.',
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
      study2Title: 'Technische Universität',
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
      subtitle: 'Lassen Sie uns reparieren, was kaputt ist. Buchung anrufen.',
      mechanism: 'Wir hören zu → Wir bauen die Lösung → Sie erhalten Ergebnisse. Kein Schnickschnack. Kein Lock-in.',
      bullet1: '30-min Strategiegespräch',
      bullet2: 'Keine Verpflichtung',
      bullet3: 'Umsetzbare Einblicke',
    },
  }

  const homeEs: HomeTranslations = {
    hero: {
      badge: 'Agencia de Transformación Digital',
      badge1: 'Agencia de Transformación Digital',
      badge2: 'Agencia de Desarrollo de Negocios',
      badge3: 'Startup de Automatización con IA',
      title: 'Cerramos las brechas. ',
      titleHighlight: 'Usted obtiene los resultados.',
      subtitle: 'Leads perdidos. Talento sin explotar. Ideas en espera. Le ayudamos a convertirlos en lo que importa.',
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
      humanFirstDesc: 'Tecnología que te fortalece—no te reemplaza.',
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
      title: 'Lideramos aquí.',
      subtitle: 'Expertos que se mantienen adelante.',
      realProblems: 'Actual. Usted tiene tranquilidad.',
      missedLeads: 'Leads perdidos',
      missedLeadsProblem: '62.000 M$ perdidos anualmente. Leads sin respuesta.',
      missedLeadsSolution: 'IA 24/7. Responder. Calificar. Reservar.',
      missedLeadsOutcome: 'Cero perdidos. Cada consulta convertida.',
      missedLeadsStat: '62.000 M$',
      missedLeadsStatLabel: 'Perdidos anualmente en leads perdidos',
      skillsGap: 'Brecha de acceso a habilidades',
      skillsGapProblem: 'El mundo cambió. Los ganadores dominan la alfabetización digital. El acceso es desigual.',
      skillsGapSolution: 'Aprendizaje guiado personalizado a los talentos de cada persona. Habilidades que desarrollan potencial emprendedor.',
      skillsGapOutcome: 'Graduados que los empleadores contratan—o que crean sus propios empleos.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Carecen de acceso a alfabetización digital',
      techDivide: 'Brecha tecnológica',
      techDivideProblem: 'La tecnología grande cuesta millones.',
      techDivideSolution: 'Herramientas empresariales. Presupuesto PYME.',
      techDivideOutcome: 'Misma potencia. Su presupuesto.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Ventaja tecnológica empresa vs PYME',
      theProblem: 'El problema',
      theSolution: 'La solución',
      theOutcome: 'El resultado',
    },
    commitment2026: {
      badge: 'Nuestro compromiso 2026',
      title: '100 empleados. 10.000 capacitados para la economía gig.',
      subtitle: 'Capacitamos a las personas con competencias digitales que desbloquean el emprendimiento y la competitividad en la economía gig.',
      pillar1Title: '100 personas empleadas',
      pillar1Desc: 'Empleos directos en Digni o con nuestros socios para finales de 2026.',
      pillar2Title: '10.000 capacitados en competencias digitales',
      pillar2Desc: 'Capacitados para el emprendimiento y el trabajo gig mediante programas como Future-Ready Graduate.',
      proofLine: 'Ya en marcha: 85% de empleo, 500+ estudiantes al año.',
      proofLink1Text: 'Future-Ready Graduate Program',
      proofLink2Text: 'Carreras',
      ctaPrimary: 'Reservar llamada estratégica',
    },
    whatWeDo: {
      badge: 'Lo que hacemos',
      title: 'Tres formas de',
      subtitle: 'contraatacar',
      forBusinesses: 'Para empresas en crecimiento',
      forSchools: 'Para escuelas',
      forUniqueNeeds: 'Para necesidades únicas',
      aiEmployeeTitle: 'Sistemas de Empleado IA',
      aiEmployeeDesc: 'Capture cada lead. Califique. Reserve. 24/7.',
      aiEmployeeApproach: 'IA que habla como usted. Listo.',
      aiEmployeeOutcome1: '300% más leads capturados',
      aiEmployeeOutcome2: 'Respuesta 24/7',
      aiEmployeeOutcome3: 'Cero llamadas perdidas',
      aiEmployeeOutcome4: 'CRM conectado',
      aiEmployeePrimaryCta: 'Ver cómo funciona',
      aiEmployeeSecondaryCta: 'Reservar demo',
      futureReadyTitle: 'Future-Ready Graduate Program',
      futureReadyDesc: 'Habilidades reales. 85% empleados. Desarrollamos talentos emprendedores mediante aprendizaje guiado personalizado.',
      futureReadyApproach: 'Aprendizaje guiado adaptado a los dones de cada persona. Entrenamos. Los empleadores contratan—o crean empleos.',
      futureReadyOutcome1: '85% tasa de empleo',
      futureReadyOutcome2: 'Talentos emprendedores desbloqueados',
      futureReadyOutcome3: 'Personalizado a sus dones',
      futureReadyOutcome4: 'Creación de empleos como valor central',
      futureReadyPrimaryCta: 'Ver detalles del programa',
      futureReadySecondaryCta: 'Programar consulta',
      agenticSoftwaresTitle: 'Agentic Softwares',
      agenticSoftwaresDesc: 'IA que percibe, razona y actúa.',
      agenticSoftwaresApproach: 'Flujos de trabajo autónomos. Automatización inteligente.',
      agenticSoftwaresOutcome1: 'Agentes autónomos',
      agenticSoftwaresOutcome2: 'Arquitectura nativa IA',
      agenticSoftwaresOutcome3: 'Flujos de trabajo inteligentes',
      agenticSoftwaresOutcome4: 'Usted lo posee',
      agenticSoftwaresPrimaryCta: 'Explorar proceso',
      agenticSoftwaresSecondaryCta: 'Hablar de su proyecto',
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
      futureReadyCardSub: '500+ estudiantes/año. 85% empleados. Talentos emprendedores mediante aprendizaje personalizado.',
      agenticCard: 'Agentic Softwares',
      agenticCardSub: 'Proyectos a medida. 90% más rápido. Automatización inteligente.',
    } as HomeTranslations['stats'],
    globalPresence: {
      badge: 'Dónde operamos',
      title: 'Sirviendo clientes',
      subtitle: 'en todo el mundo',
      subtext: "Aún no estamos en 4 continentes. Nuestra sede está en EE. UU.; trabajamos con equipos y clientes en África y más allá.",
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
      study2Title: 'Universidad Técnica',
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
      subtitle: 'Arreglemos lo que está roto. Reserve una llamada.',
      mechanism: 'Escuchamos → Construimos la solución → Usted obtiene resultados. Sin relleno. Sin encierro.',
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
    readyFutureReadyDesc: 'Explore the Future-Ready Graduate Program—transform students into job-ready professionals with AI-powered digital skills. 85% employment within 6 months.',
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
    readyFutureReady: 'Prêt pour le Programme Diplômé Prêt pour l\'Avenir ?',
    readyFutureReadyDesc: 'Découvrez le Programme Diplômé Prêt pour l\'Avenir—transformez les étudiants en professionnels prêts pour l\'emploi. 85% d\'emploi en 6 mois.',
    exploreFutureReady: 'Explorer le Programme Diplômé Prêt pour l\'Avenir',
    readyTransform: 'Prêt à transformer votre entreprise ?',
    readyTransformDesc: 'Discutons de comment ces insights s\'appliquent à vos défis.',
    noArticles: 'Aucun article trouvé',
    previous: 'Précédent',
    next: 'Suivant',
    page: 'Page',
    featuredArticles: 'Articles à la une',
    allArticles: 'Tous les articles',
    featured: 'à la une',
    stayUpdated: 'Restez informé',
    stayUpdatedDesc: 'Recevez des insights hebdomadaires sur la transformation digitale et les innovations IA.',
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
    readyFutureReadyDesc: 'اكتشف برنامج Future-Ready Graduate—حوّل الطلاب إلى محترفين جاهزين للعمل بمهارات رقمية مدعومة بالذكاء الاصطناعي. 85% توظيف خلال 6 أشهر.',
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
    readyFutureReadyDesc: 'Entdecken Sie das Future-Ready Graduate Programm—verwandeln Sie Schüler in berufsreife Fachkräfte mit KI-gestützten digitalen Fähigkeiten. 85% Beschäftigung innerhalb von 6 Monaten.',
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
    readyFutureReadyDesc: 'Explore el programa Future-Ready Graduate—transforme estudiantes en profesionales listos para el empleo con habilidades digitales impulsadas por IA. 85% de empleo en 6 meses.',
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

  const clientJourneyDe: ClientJourneyTranslations = {
    badge: 'Gleiche 100 Leads. Zwei Ergebnisse.',
    title: '99 verloren.',
    subtitle: '95 abschließen. Empfehlungen vervielfachen.',
    subtext: 'Ein Weg blutet. Einer vervielfacht. Das Playbook ist einfach. Die Ausführung nicht.',
    brokenLabel: 'Der Verlust',
    aiFlowLabel: 'Die Schleife',
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

  const aboutEn: AboutTranslations = {
    badge: 'About Us',
    heroTitle: 'About Us',
    heroSubtitle: 'An American company started in Kenya by a refugee youth—driven by hunger and greatness to build a world where everyone is enabled, empowered, and connected to the technology and skills that change lives.',
    statsTitle: 'Numbers that demonstrate our commitment to client success',
    statYears: 'Years Experience',
    statStudents: 'Students Trained',
    statLeads: 'Leads Captured',
    statSatisfaction: 'Client Satisfaction',
    statEmployed: 'Jobs by 2026',
    statSkilled: 'Skilled by 2026',
    timeline2026Title: '150+ Clients',
    timeline2026Description: '100 employed, 10,000 skilled for the gig economy.',
    storyBadge: 'The Journey',
    ourStoryTitle: 'Our Story',
    storyP1: 'We are an American-registered company that started in Kenya—founded by a refugee youth who, from an early age, has been focused on eliminating poverty and refused to accept the rules and limitations set upon him. Driven by hunger and greatness, he chose to fail forward: to keep pushing, dreaming, and building toward a better world.',
    storyP2: 'That dream is simple and urgent: everyone enabled, empowered, and connected to the same technology and skills that have long been reserved for elites and elite kids. Businesses shouldn\'t lose leads because they can\'t afford big systems. Students shouldn\'t graduate without the skills employers hire for. We build the fixes—AI that captures every lead, curricula that make graduates job-ready, and agentic software that perceives, reasons, and acts—scaling with you.',
    storyP3: 'Founded 2019. Started with websites. Now: AI systems, graduate programs, Agentic Softwares. We don\'t just build websites—we build systems that get you clients and students jobs.',
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
    provenDesc: '6 years. 150+ clients. 98% satisfaction.',
    partnershipTitle: 'Full Partnership',
    partnershipDesc: 'Strategy. Build. Optimize. We\'re there. No handoffs.',
    roiFocusTitle: 'ROI Focus',
    roiFocusDesc: 'We track revenue. Leads. Jobs. Not just features.',
    promiseTitle: 'Our Promise',
    promiseQuote: 'A better world is one where everyone is enabled, empowered, and connected—to the same technology and skills that elites get. You\'ll have more leads, more revenue, or more employed grads. Or we failed.',
    founderName: 'Pascal Digny Djohodo',
    founderRole: 'Founder & CEO',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Three core solutions that drive real business impact',
    aiEmployeeTitle: 'AI Employee',
    aiEmployeeDesc: 'AI answers calls. Qualifies. Books. 24/7.',
    aiEmployeeCta: 'See How It Captures Leads',
    literacyTitle: 'Future-Ready Graduate Program',
    literacyDesc: '85% employed. Guided learning personalized to each person\'s talents—bringing out entrepreneurial gifts. We bring curriculum and internet. You bring students.',
    literacyCta: 'Explore the Curriculum',
    agenticTitle: 'Agentic Softwares',
    agenticDesc: 'AI-native software that perceives, reasons, and acts autonomously.',
    agenticCta: 'See What We Build',
    ctaTitle: 'Ready to Work Together?',
    ctaSubtitle: 'Tell us your problem. We\'ll find the fix.',
    trustedByBadge: 'Trusted by',
    trustedByTitle: '150+ teams that capture every lead.',
    trustedBySubtitle: '98% satisfaction. From 40% missed calls to 100% captured.',
  }

  const aboutFr: AboutTranslations = {
    badge: 'À propos',
    heroTitle: 'À propos',
    heroSubtitle: 'Une entreprise américaine née au Kenya, fondée par un jeune réfugié—animé par la faim et la grandeur pour bâtir un monde où chacun est outillé, responsabilisé et connecté aux technologies et compétences qui changent les vies.',
    statsTitle: 'Des chiffres qui démontrent notre engagement envers le succès de nos clients',
    statYears: 'Années d\'expérience',
    statStudents: 'Étudiants formés',
    statLeads: 'Prospects capturés',
    statSatisfaction: 'Satisfaction client',
    statEmployed: 'Emplois d\'ici 2026',
    statSkilled: 'Formés d\'ici 2026',
    timeline2026Title: '150+ clients',
    timeline2026Description: '100 en emploi, 10 000 formés pour l\'économie des petits boulots.',
    storyBadge: 'Le parcours',
    ourStoryTitle: 'Notre histoire',
    storyP1: 'Nous sommes une entreprise enregistrée aux États-Unis qui a démarré au Kenya—fondée par un jeune réfugié qui, dès son plus jeune âge, a été focalisé sur l\'élimination de la pauvreté et a refusé d\'accepter les règles et les limites qu\'on lui imposait. Animé par la faim et la grandeur, il a choisi d\'échouer vers l\'avant : continuer à pousser, rêver et construire un monde meilleur.',
    storyP2: 'Ce rêve est simple et urgent : chacun outillé, responsabilisé et connecté aux mêmes technologies et compétences longtemps réservées aux élites. Les entreprises ne devraient pas perdre de prospects parce qu\'elles ne peuvent pas s\'offrir de grands systèmes. Les étudiants ne devraient pas obtenir leur diplôme sans les compétences que les employeurs recherchent. Nous construisons les solutions—IA qui capture chaque prospect, cursus qui rendent les diplômés opérationnels, et logiciels agentiques qui perçoivent, raisonnent et agissent—évoluant avec vous.',
    storyP3: 'Fondée en 2019. Nous avons commencé avec des sites web. Aujourd\'hui : systèmes IA, programmes diplômants, Agentic Softwares. Nous ne construisons pas que des sites—nous bâtissons des systèmes qui vous apportent des clients et offrent des emplois aux étudiants.',
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
    provenDesc: '6 ans. 150+ clients. 98% de satisfaction.',
    partnershipTitle: 'Partenariat total',
    partnershipDesc: 'Stratégie. Construction. Optimisation. Nous sommes là. Pas de transferts.',
    roiFocusTitle: 'Focus ROI',
    roiFocusDesc: 'Nous suivons le chiffre d\'affaires. Les prospects. Les emplois. Pas juste les fonctionnalités.',
    promiseTitle: 'Notre promesse',
    promiseQuote: 'Un monde meilleur est un monde où chacun est outillé, responsabilisé et connecté—aux mêmes technologies et compétences réservées aux élites. Vous aurez plus de prospects, plus de revenus ou plus de diplômés embauchés. Sinon, nous avons échoué.',
    founderName: 'Pascal Digny Djohodo',
    founderRole: 'Fondateur & PDG',
    servicesTitle: 'Nos services',
    servicesSubtitle: 'Trois solutions clés qui génèrent un impact réel',
    aiEmployeeTitle: 'Employé IA',
    aiEmployeeDesc: 'L\'IA répond aux appels. Qualifie. Réserve. 24/7.',
    aiEmployeeCta: 'Découvrir la capture de prospects',
    literacyTitle: 'Programme Diplômé Prêt pour l\'Avenir',
    literacyDesc: '85% employés. Apprentissage guidé personnalisé aux talents de chacun—révélant les dons entrepreneuriaux. Nous apportons le cursus et internet. Vous amenez les étudiants.',
    literacyCta: 'Explorer le cursus',
    agenticTitle: 'Agentic Softwares',
    agenticDesc: 'Logiciels IA natifs qui perçoivent, raisonnent et agissent de façon autonome.',
    agenticCta: 'Voir ce que nous construisons',
    ctaTitle: 'Prêt à travailler ensemble ?',
    ctaSubtitle: 'Dites-nous votre problème. Nous trouverons la solution.',
    trustedByBadge: 'Approuvé par',
    trustedByTitle: '150+ équipes qui captent chaque prospect.',
    trustedBySubtitle: '98% de satisfaction. De 40% d\'appels manqués à 100% captés.',
  }

  const aboutAr: AboutTranslations = {
    badge: 'من نحن',
    heroTitle: 'من نحن',
    heroSubtitle: 'شركة أمريكية بدأت في كينيا على يد شاب لاجئ—مدفوعاً بالطموح والعظمة لبناء عالم يُمكّن الجميع ويربطهم بالتقنية والمهارات التي تغيّر الحياة.',
    statsTitle: 'أرقام تعكس التزامنا بنجاح عملائنا',
    statYears: 'سنوات خبرة',
    statStudents: 'طالب تم تدريبهم',
    statLeads: 'عميل محتمل تم التقاطه',
    statSatisfaction: 'رضا العملاء',
    statEmployed: 'وظائف بحلول 2026',
    statSkilled: 'مؤهّلون بحلول 2026',
    timeline2026Title: '150+ عميل',
    timeline2026Description: '100 موظّف، 10,000 مؤهّلون لاقتصاد العمل الحر.',
    storyBadge: 'الرحلة',
    ourStoryTitle: 'قصتنا',
    storyP1: 'نحن شركة مسجلة في الولايات المتحدة بدأت في كينيا—أسسها شاب لاجئ رفض قبول القيود المفروضة عليه. مدفوعاً بالطموح والعظمة، اختار أن يفشل إلى الأمام: أن يستمر في الدفع والحلم والبناء نحو عالم أفضل.',
    storyP2: 'الحلم بسيط وملحّ: أن يكون الجميع مُمكّنين ومتصلين بنفس التقنيات والمهارات المحتكرة للنخب. لا ينبغي أن تخسر الشركات عملاء لأنها لا تستطيع تحمّل أنظمة كبيرة. لا ينبغي أن يتخرج الطلاب بدون المهارات التي يوظّف أصحاب العمل لأجلها. نبني الحلول—ذكاء اصطناعي يلتقط كل عميل، مناهج تجعل الخريجين جاهزين للعمل، وبرمجيات وكيلية تدرك وتفكر وتعمل—تنمو معك.',
    storyP3: 'تأسست عام 2019. بدأنا بالمواقع الإلكترونية. الآن: أنظمة ذكاء اصطناعي، برامج تخرّج، Agentic Softwares. لا نبني مواقع فحسب—نبني أنظمة تجلب لك عملاء وتمنح الطلاب وظائف.',
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
    provenDesc: '6 سنوات. 150+ عميل. 98% رضا.',
    partnershipTitle: 'شراكة كاملة',
    partnershipDesc: 'استراتيجية. بناء. تحسين. نحن هنا. بدون تسليمات.',
    roiFocusTitle: 'تركيز على العائد',
    roiFocusDesc: 'نتابع الإيرادات. العملاء المحتملين. الوظائف. ليس فقط الميزات.',
    promiseTitle: 'وعدنا',
    promiseQuote: 'عالم أفضل هو عالم يُمكّن الجميع ويربطهم بنفس التقنيات والمهارات المتاحة للنخب. ستحصل على المزيد من العملاء، والمزيد من الإيرادات، أو المزيد من الخريجين الموظفين. وإلا فقد فشلنا.',
    founderName: 'باسكال ديني',
    founderRole: 'المؤسس والرئيس التنفيذي',
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'ثلاثة حلول أساسية تحقق أثراً حقيقياً في الأعمال',
    aiEmployeeTitle: 'الموظف الذكي',
    aiEmployeeDesc: 'الذكاء الاصطناعي يرد على المكالمات. يؤهّل. يحجز. 24/7.',
    aiEmployeeCta: 'اكتشف كيف يلتقط العملاء',
    literacyTitle: 'برنامج Future-Ready Graduate',
    literacyDesc: '85% موظفون. تعلم موجّه شخصي وفق مواهب كل فرد—يكشف المواهب الريادية. نوفر المنهج والإنترنت. أنت توفر الطلاب.',
    literacyCta: 'استكشف المنهج',
    agenticTitle: 'Agentic Softwares',
    agenticDesc: 'برمجيات ذكاء اصطناعي أصيلة تدرك وتفكّر وتعمل بذاتها.',
    agenticCta: 'اكتشف ما نبنيه',
    ctaTitle: 'مستعد للعمل معاً؟',
    ctaSubtitle: 'أخبرنا بمشكلتك. سنجد الحل.',
    trustedByBadge: 'موثوق من',
    trustedByTitle: 'أكثر من 150 فريقاً يلتقط كل عميل محتمل.',
    trustedBySubtitle: '98% رضا. من 40% مكالمات فائتة إلى 100% مُلتقطة.',
  }

  const aboutDe: AboutTranslations = {
    badge: 'Über uns',
    heroTitle: 'Über uns',
    heroSubtitle: 'Ein amerikanisches Unternehmen, gegründet in Kenia von einem jungen Geflüchteten—angetrieben von Hunger und Größe, um eine Welt zu bauen, in der jeder befähigt, ermächtigt und mit den Technologien und Fähigkeiten verbunden ist, die Leben verändern.',
    statsTitle: 'Zahlen, die unser Engagement für den Erfolg unserer Kunden belegen',
    statYears: 'Jahre Erfahrung',
    statStudents: 'Ausgebildete Studierende',
    statLeads: 'Erfasste Leads',
    statSatisfaction: 'Kundenzufriedenheit',
    statEmployed: 'Jobs bis 2026',
    statSkilled: 'Qualifiziert bis 2026',
    timeline2026Title: '150+ Kunden',
    timeline2026Description: '100 in Arbeit, 10.000 qualifiziert für die Gig-Economy.',
    storyBadge: 'Die Reise',
    ourStoryTitle: 'Unsere Geschichte',
    storyP1: 'Wir sind ein in den USA registriertes Unternehmen, das in Kenia gestartet wurde—gegründet von einem jungen Geflüchteten, der von klein auf darauf fokussiert war, Armut zu bekämpfen, und sich weigerte, die ihm auferlegten Regeln und Grenzen zu akzeptieren. Angetrieben von Hunger und Größe entschied er sich, vorwärts zu scheitern: weiterzumachen, zu träumen und auf eine bessere Welt hinzuarbeiten.',
    storyP2: 'Dieser Traum ist einfach und dringend: Jeder befähigt, ermächtigt und verbunden mit den gleichen Technologien und Fähigkeiten, die lange den Eliten vorbehalten waren. Unternehmen sollten keine Leads verlieren, weil sie sich große Systeme nicht leisten können. Studierende sollten nicht ohne die Fähigkeiten abschließen, die Arbeitgeber suchen. Wir bauen die Lösungen—KI, die jeden Lead erfasst, Lehrpläne, die Absolventen berufsfertig machen, und agentische Software, die wahrnimmt, denkt und handelt—und mit Ihnen wächst.',
    storyP3: 'Gegründet 2019. Angefangen mit Websites. Heute: KI-Systeme, Absolventenprogramme, Agentic Softwares. Wir bauen nicht nur Websites—wir bauen Systeme, die Ihnen Kunden bringen und Studierenden Jobs verschaffen.',
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
    provenDesc: '6 Jahre. 150+ Kunden. 98% Zufriedenheit.',
    partnershipTitle: 'Volle Partnerschaft',
    partnershipDesc: 'Strategie. Aufbau. Optimierung. Wir sind da. Keine Übergaben.',
    roiFocusTitle: 'ROI-Fokus',
    roiFocusDesc: 'Wir verfolgen Umsatz. Leads. Jobs. Nicht nur Features.',
    promiseTitle: 'Unser Versprechen',
    promiseQuote: 'Eine bessere Welt ist eine, in der jeder befähigt, ermächtigt und verbunden ist—mit den gleichen Technologien und Fähigkeiten, die Eliten haben. Sie werden mehr Leads, mehr Umsatz oder mehr angestellte Absolventen haben. Oder wir haben versagt.',
    founderName: 'Pascal Digny Djohodo',
    founderRole: 'Gründer & CEO',
    servicesTitle: 'Unsere Dienstleistungen',
    servicesSubtitle: 'Drei Kernlösungen für echten geschäftlichen Mehrwert',
    aiEmployeeTitle: 'KI-Mitarbeiter',
    aiEmployeeDesc: 'KI beantwortet Anrufe. Qualifiziert. Bucht. 24/7.',
    aiEmployeeCta: 'So werden Leads erfasst',
    literacyTitle: 'Future-Ready Graduate Programm',
    literacyDesc: '85% beschäftigt. Geführtes Lernen, personalisiert nach den Talenten jedes Einzelnen—unternehmerische Begabungen entfalten. Wir bringen Lehrplan und Internet. Sie bringen Studierende.',
    literacyCta: 'Lehrplan entdecken',
    agenticTitle: 'Agentic Softwares',
    agenticDesc: 'KI-native Software, die wahrnimmt, denkt und autonom handelt.',
    agenticCta: 'Sehen, was wir bauen',
    ctaTitle: 'Bereit zur Zusammenarbeit?',
    ctaSubtitle: 'Sagen Sie uns Ihr Problem. Wir finden die Lösung.',
    trustedByBadge: 'Vertraut von',
    trustedByTitle: '150+ Teams, die jeden Lead erfassen.',
    trustedBySubtitle: '98% Zufriedenheit. Von 40% verpassten Anrufen zu 100% erfasst.',
  }

  const aboutEs: AboutTranslations = {
    badge: 'Sobre nosotros',
    heroTitle: 'Sobre nosotros',
    heroSubtitle: 'Una empresa estadounidense que nació en Kenia, fundada por un joven refugiado—impulsado por el hambre y la grandeza para construir un mundo donde todos estén capacitados, empoderados y conectados con la tecnología y las habilidades que cambian vidas.',
    statsTitle: 'Cifras que demuestran nuestro compromiso con el éxito del cliente',
    statYears: 'Años de experiencia',
    statStudents: 'Estudiantes formados',
    statLeads: 'Leads capturados',
    statSatisfaction: 'Satisfacción del cliente',
    statEmployed: 'Empleos para 2026',
    statSkilled: 'Capacitados para 2026',
    timeline2026Title: '150+ clientes',
    timeline2026Description: '100 empleados, 10.000 capacitados para la economía gig.',
    storyBadge: 'El recorrido',
    ourStoryTitle: 'Nuestra historia',
    storyP1: 'Somos una empresa registrada en Estados Unidos que empezó en Kenia—fundada por un joven refugiado que, desde muy joven, ha estado enfocado en eliminar la pobreza y se negó a aceptar las reglas y limitaciones impuestas sobre él. Impulsado por el hambre y la grandeza, eligió fracasar hacia adelante: seguir empujando, soñando y construyendo hacia un mundo mejor.',
    storyP2: 'Ese sueño es simple y urgente: todos capacitados, empoderados y conectados con las mismas tecnologías y habilidades reservadas durante mucho tiempo para las élites. Las empresas no deberían perder leads porque no pueden permitirse grandes sistemas. Los estudiantes no deberían graduarse sin las habilidades que los empleadores buscan. Construimos las soluciones—IA que captura cada lead, currículos que preparan a los graduados para el empleo, y software agéntico que percibe, razona y actúa—escalando contigo.',
    storyP3: 'Fundada en 2019. Empezamos con sitios web. Ahora: sistemas de IA, programas de graduados, Agentic Softwares. No solo construimos sitios web—construimos sistemas que te traen clientes y consiguen empleos para los estudiantes.',
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
    provenDesc: '6 años. 150+ clientes. 98% de satisfacción.',
    partnershipTitle: 'Alianza total',
    partnershipDesc: 'Estrategia. Construcción. Optimización. Estamos ahí. Sin traspasos.',
    roiFocusTitle: 'Enfoque en ROI',
    roiFocusDesc: 'Medimos ingresos. Leads. Empleos. No solo funcionalidades.',
    promiseTitle: 'Nuestra promesa',
    promiseQuote: 'Un mundo mejor es uno donde todos están capacitados, empoderados y conectados—con las mismas tecnologías y habilidades que tienen las élites. Tendrás más leads, más ingresos o más graduados empleados. O habremos fallado.',
    founderName: 'Pascal Digny Djohodo',
    founderRole: 'Fundador y CEO',
    servicesTitle: 'Nuestros servicios',
    servicesSubtitle: 'Tres soluciones clave que generan impacto real en el negocio',
    aiEmployeeTitle: 'Empleado IA',
    aiEmployeeDesc: 'La IA responde llamadas. Califica. Reserva. 24/7.',
    aiEmployeeCta: 'Descubre cómo captura leads',
    literacyTitle: 'Programa Future-Ready Graduate',
    literacyDesc: '85% empleados. Aprendizaje guiado personalizado a los talentos de cada uno—desarrollando dones emprendedores. Nosotros traemos el currículo e internet. Tú traes los estudiantes.',
    literacyCta: 'Explorar el currículo',
    agenticTitle: 'Agentic Softwares',
    agenticDesc: 'Software nativo de IA que percibe, razona y actúa de forma autónoma.',
    agenticCta: 'Descubre lo que construimos',
    ctaTitle: '¿Listo para trabajar juntos?',
    ctaSubtitle: 'Cuéntanos tu problema. Encontraremos la solución.',
    trustedByBadge: 'Confían en nosotros',
    trustedByTitle: '150+ equipos que capturan cada lead.',
    trustedBySubtitle: '98% satisfacción. De 40% llamadas perdidas a 100% capturadas.',
  }

  return {
    en: { ...commonEn, home: homeEn, blog: blogEn, about: aboutEn, contact: contactEn, clientJourney: clientJourneyEn },
    fr: { ...commonFr, home: homeFr, blog: blogFr, about: aboutFr, contact: contactFr, clientJourney: clientJourneyFr },
    ar: { ...commonAr, home: homeAr, blog: blogAr, about: aboutAr, contact: contactAr, clientJourney: clientJourneyAr },
    de: { ...commonDe, home: homeDe, blog: blogDe, about: aboutDe, contact: contactDe, clientJourney: clientJourneyDe },
    es: { ...commonEs, home: homeEs, blog: blogEs, about: aboutEs, contact: contactEs, clientJourney: clientJourneyEs },
  }
}

export const translations = buildTranslations()
