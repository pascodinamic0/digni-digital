/**
 * Full-site translations: English, French, Arabic
 * Every section, every page, every UI element.
 */

export type Language = 'en' | 'fr' | 'ar'

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
    missedLeadsReality: string
    missedLeadsFight: string
    missedLeadsStat: string
    missedLeadsStatLabel: string
    skillsGap: string
    skillsGapProblem: string
    skillsGapReality: string
    skillsGapFight: string
    skillsGapStat: string
    skillsGapStatLabel: string
    techDivide: string
    techDivideProblem: string
    techDivideReality: string
    techDivideFight: string
    techDivideStat: string
    techDivideStatLabel: string
    theProblem: string
    theReality: string
    ourFightLabel: string
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
    customSaaSTitle: string
    customSaaSDesc: string
    customSaaSApproach: string
    customSaaSOutcome1: string
    customSaaSOutcome2: string
    customSaaSOutcome3: string
    customSaaSOutcome4: string
    customSaaSPrimaryCta: string
    customSaaSSecondaryCta: string
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
  [key: string]: string
}

export type TranslationKeys = CommonTranslations & {
  home: HomeTranslations
  blog: BlogTranslations
  about: AboutTranslations
  contact: ContactTranslations
}

function buildTranslations(): Record<Language, TranslationKeys> {
  const commonEn = {
    nav: {
      ourMission: 'Our Mission',
      aboutUs: 'About Us',
      caseStudies: 'Case Studies',
      solutions: 'Solutions',
      articles: 'Articles',
      aiEmployee: 'AI Employee',
      aiEmployeeDesc: 'Never miss a lead with 24/7 AI-powered employee',
      futureReadyGraduate: 'Future Ready Graduate',
      futureReadyGraduateDesc: 'Transform students into job ready professionals',
      customSaaS: 'Custom SaaS',
      customSaaSDesc: 'Tailored software solutions for unique challenges',
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
      learnMore: 'Learn More',
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
      futureReadyDemo: 'Future Ready Demo',
      aiEmployeeDemo: 'AI Employee Demo',
      ourMission: 'Our Mission',
      whatWeFightFor: "What We Fight For",
      aboutUs: 'About Us',
      careers: 'Careers',
      contact: 'Contact',
      affiliateProgram: 'Affiliate Program',
      copyright: 'All rights reserved.',
      trustedBy: 'Trusted by Businesses & Schools Worldwide',
    },
  }

  const commonFr = {
    nav: {
      ourMission: 'Notre Mission',
      aboutUs: 'À propos',
      caseStudies: 'Études de cas',
      solutions: 'Solutions',
      articles: 'Articles',
      aiEmployee: 'Employé IA',
      aiEmployeeDesc: 'Ne manquez aucun prospect avec un employé IA 24/7',
      futureReadyGraduate: 'Diplômé Prêt pour l\'Avenir',
      futureReadyGraduateDesc: 'Transformez les étudiants en professionnels prêts pour l\'emploi',
      customSaaS: 'SaaS Personnalisé',
      customSaaSDesc: 'Solutions logicielles sur mesure pour des défis uniques',
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
      learnMore: 'En savoir plus',
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
      futureReadyDemo: 'Démo Future Ready',
      aiEmployeeDemo: 'Démo Employé IA',
      ourMission: 'Notre Mission',
      whatWeFightFor: 'Ce pour quoi nous nous battons',
      aboutUs: 'À propos',
      careers: 'Carrières',
      contact: 'Contact',
      affiliateProgram: 'Programme d\'affiliation',
      copyright: 'Tous droits réservés.',
      trustedBy: 'Approuvé par entreprises et écoles dans le monde',
    },
  }

  const commonAr = {
    nav: {
      ourMission: 'مهمتنا',
      aboutUs: 'من نحن',
      caseStudies: 'دراسات الحالة',
      solutions: 'الحلول',
      articles: 'المقالات',
      aiEmployee: 'الموظف الذكي',
      aiEmployeeDesc: 'لا تفوت أي عميل محتمل مع موظف ذكاء اصطناعي يعمل 24/7',
      futureReadyGraduate: 'الخريج الجاهز للمستقبل',
      futureReadyGraduateDesc: 'حول الطلاب إلى محترفين جاهزين للعمل',
      customSaaS: 'برمجيات مخصصة',
      customSaaSDesc: 'حلول برمجية مخصصة للتحديات الفريدة',
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
      learnMore: 'اعرف المزيد',
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
      futureReadyDemo: 'عرض الخريج الجاهز',
      aiEmployeeDemo: 'عرض الموظف الذكي',
      ourMission: 'مهمتنا',
      whatWeFightFor: 'ما نكافح من أجله',
      aboutUs: 'من نحن',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
      affiliateProgram: 'برنامج الشركاء',
      copyright: 'جميع الحقوق محفوظة.',
      trustedBy: 'موثوق من الشركات والمدارس حول العالم',
    },
  }

  const homeEn: HomeTranslations = {
    hero: {
      badge: 'Digital Transformation Agency',
      title: 'We Believe Technology Should ',
      titleHighlight: 'Serve Humanity.',
      subtitle: 'We help small businesses win. Capture every lead. Train students who get jobs.',
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
      description: 'Every business captures every lead. Every student graduates job-ready.',
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
      title: 'These Problems Keep Us',
      subtitle: 'Up At Night',
      realProblems: 'Real problems. Real solutions.',
      missedLeads: 'Missed Leads',
      missedLeadsProblem: '$62B lost yearly because leads go unanswered',
      missedLeadsReality: 'Missed call = competitor wins. Slow reply = money gone.',
      missedLeadsFight: 'No business loses customers to bad systems.',
      missedLeadsStat: '$62B',
      missedLeadsStatLabel: 'Lost annually to missed leads',
      skillsGap: 'Skills Gap',
      skillsGapProblem: '40% of grads unemployed after 6 months',
      skillsGapReality: 'School teaches theory. Employers want skills. Mismatch.',
      skillsGapFight: 'Graduates with skills employers actually hire for.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Graduate unemployment rate',
      techDivide: 'Tech Divide',
      techDivideProblem: "Big tech costs millions. You can't afford it.",
      techDivideReality: 'Fortune 500 tools. Your budget. You lose.',
      techDivideFight: 'Same power. Your budget.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Enterprise vs SMB tech advantage',
      theProblem: 'The Problem',
      theReality: 'The Reality',
      ourFightLabel: 'Our Fight',
    },
    whatWeDo: {
      badge: 'What We Do',
      title: 'Three Ways We',
      subtitle: 'Fight Back',
      forBusinesses: 'For Growing Businesses',
      forSchools: 'For Schools',
      forUniqueNeeds: 'For Unique Needs',
      aiEmployeeTitle: 'AI Employee Systems',
      aiEmployeeDesc: 'Capture every lead. Qualify. Book appointments. 24/7. Never miss again.',
      aiEmployeeApproach: 'We study your business. Build AI that talks like you. Done.',
      aiEmployeeOutcome1: '300% more leads captured',
      aiEmployeeOutcome2: '24/7 response',
      aiEmployeeOutcome3: 'Zero missed calls',
      aiEmployeeOutcome4: 'CRM connected',
      aiEmployeePrimaryCta: 'See How It Works',
      aiEmployeeSecondaryCta: 'Book a Demo',
      futureReadyTitle: 'Future Ready Graduate',
      futureReadyDesc: 'Students graduate with real skills. 85% get jobs. We provide curriculum and internet.',
      futureReadyApproach: "We train. Employers hire. You're the bridge.",
      futureReadyOutcome1: '85% employment rate',
      futureReadyOutcome2: 'Direct employer links',
      futureReadyOutcome3: 'Real skills',
      futureReadyOutcome4: 'Measurable ROI',
      futureReadyPrimaryCta: 'View Program Details',
      futureReadySecondaryCta: 'Schedule Consultation',
      customSaaSTitle: 'Custom SaaS',
      customSaaSDesc: 'Your idea. Our build. Scalable. Yours to own.',
      customSaaSApproach: "We're your tech partner. From idea to launch.",
      customSaaSOutcome1: 'Scales with you',
      customSaaSOutcome2: 'Secure',
      customSaaSOutcome3: 'Ongoing support',
      customSaaSOutcome4: 'You own it',
      customSaaSPrimaryCta: 'Explore Process',
      customSaaSSecondaryCta: 'Discuss Your Project',
      notSureTitle: 'Not Sure Which Service You Need?',
      notSureSubtitle: "Tell us your problem. We'll find the fix.",
      whatWeDoDescription: 'Each service fixes a real problem. Impact, not buzzwords.',
    },
    stats: {
      badge: 'Proven Track Record',
      title: 'Real Results from',
      subtitle: 'Real Implementations',
      realNumbers: 'Real numbers. Real clients.',
      stat1Label: 'Lead Conversion Increase',
      stat1Sublabel: 'AI Employee™ Results',
      stat2Label: 'Graduate Employment Rate',
      stat2Sublabel: 'Future Ready Graduate™ Success',
      stat3Label: 'Always-On Service',
      stat3Sublabel: 'Never Miss Another Lead',
      stat4Label: 'Client Satisfaction',
      stat4Sublabel: 'Across Both Solutions',
      aiEmployeeCard: 'AI Employee™',
      aiEmployeeCardSub: '50+ businesses. 10,000+ leads/month.',
      futureReadyCard: 'Future Ready Graduate™',
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
      study3Title: 'Premium Property Group',
      study3Duration: '1 week implementation',
      study3Problem: 'Losing high-value leads during off-hours and weekends, inconsistent follow-up',
      study3Result1: 'Lead response time',
      study3Result2: 'Qualified leads increase',
      study3Result3: 'Additional quarterly sales',
      viewAll: 'View All Case Studies',
    } as HomeTranslations['caseStudies'],
    ctaSection: {
      badge: "Let's Create Impact Together",
      title: 'Technology Should Serve ',
      titleHighlight: 'Everyone.',
      subtitle: "Let's fix what's broken. Book a call.",
      bullet1: '30-min Strategy Call',
      bullet2: 'No Obligation',
      bullet3: 'Actionable Insights',
    },
  }

  const homeFr: HomeTranslations = {
    hero: {
      badge: 'Agence de Transformation Digitale',
      title: 'Nous croyons que la technologie doit ',
      titleHighlight: 'servir l\'humanité.',
      subtitle: 'Nous aidons les PME à gagner. Capturez chaque prospect. Formez des étudiants qui décrochent des emplois.',
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
      description: 'Chaque entreprise capture chaque prospect. Chaque étudiant obtient un emploi.',
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
      title: 'Ces problèmes nous',
      subtitle: 'tiennent éveillés',
      realProblems: 'De vrais problèmes. De vraies solutions.',
      missedLeads: 'Prospects manqués',
      missedLeadsProblem: '62 milliards $ perdus chaque année car les prospects restent sans réponse',
      missedLeadsReality: 'Appel manqué = concurrent gagne. Réponse lente = argent perdu.',
      missedLeadsFight: 'Aucune entreprise ne perd de clients à cause de mauvais systèmes.',
      missedLeadsStat: '62 Mds $',
      missedLeadsStatLabel: 'Perdus annuellement en prospects manqués',
      skillsGap: 'Fossé des compétences',
      skillsGapProblem: '40% des diplômés au chômage après 6 mois',
      skillsGapReality: 'L\'école enseigne la théorie. Les employeurs veulent des compétences.',
      skillsGapFight: 'Des diplômés avec les compétences que les employeurs recherchent.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'Taux de chômage des diplômés',
      techDivide: 'Fracture technologique',
      techDivideProblem: 'La tech coûte des millions. Vous ne pouvez pas vous le permettre.',
      techDivideReality: 'Outils Fortune 500. Votre budget. Vous perdez.',
      techDivideFight: 'Même puissance. Votre budget.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'Avantage tech entreprise vs PME',
      theProblem: 'Le Problème',
      theReality: 'La Réalité',
      ourFightLabel: 'Notre Combat',
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
      customSaaSTitle: 'SaaS Personnalisé',
      customSaaSDesc: 'Votre idée. Notre construction. Évolutif. À vous.',
      customSaaSApproach: 'Votre partenaire tech. De l\'idée au lancement.',
      customSaaSOutcome1: 'Évolue avec vous',
      customSaaSOutcome2: 'Sécurisé',
      customSaaSOutcome3: 'Support continu',
      customSaaSOutcome4: 'Vous en êtes propriétaire',
      customSaaSPrimaryCta: 'Explorer le processus',
      customSaaSSecondaryCta: 'Discuter de votre projet',
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
      study3Title: 'Groupe Immobilier Premium',
      study3Duration: '1 semaine de mise en place',
      study3Problem: 'Prospects de haute valeur perdus hors heures et week-ends',
      study3Result1: 'Temps de réponse',
      study3Result2: 'Hausse des prospects qualifiés',
      study3Result3: 'Ventes trimestrielles supplémentaires',
      viewAll: 'Voir toutes les études de cas',
    } as HomeTranslations['caseStudies'],
    ctaSection: {
      badge: 'Créons ensemble un impact',
      title: 'La technologie doit servir ',
      titleHighlight: 'tout le monde.',
      subtitle: 'Corrigeons ce qui ne va pas. Réservez un appel.',
      bullet1: 'Appel stratégique de 30 min',
      bullet2: 'Sans engagement',
      bullet3: 'Conseils actionnables',
    },
  }

  const homeAr: HomeTranslations = {
    hero: {
      badge: 'وكالة التحول الرقمي',
      title: 'نؤمن بأن التقنية يجب أن ',
      titleHighlight: 'تخدم البشرية.',
      subtitle: 'نساعد الشركات الصغيرة على النجاح. استقطاب كل عميل محتمل. تدريب طلاب يجدون وظائف.',
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
      title: 'هذه المشاكل تبقينا',
      subtitle: 'مستيقظين',
      realProblems: 'مشاكل حقيقية. حلول حقيقية.',
      missedLeads: 'عملاء محتملون ضائعون',
      missedLeadsProblem: '62 مليار $ تضيع سنوياً لأن العملاء لا يُجابون',
      missedLeadsReality: 'مكالمة ضائعة = المنافس يفوز. رد بطيء = مال ضائع.',
      missedLeadsFight: 'لا تخسر أي شركة عملاء بسبب أنظمة رديئة.',
      missedLeadsStat: '62 مليار $',
      missedLeadsStatLabel: 'تضيع سنوياً في عملاء محتملين',
      skillsGap: 'فجوة المهارات',
      skillsGapProblem: '40% من الخريجين عاطلون بعد 6 أشهر',
      skillsGapReality: 'المدرسة تعلّم النظرية. أصحاب العمل يريدون المهارات.',
      skillsGapFight: 'خريجون بمهارات يبحث عنها أصحاب العمل.',
      skillsGapStat: '40%',
      skillsGapStatLabel: 'معدل بطالة الخريجين',
      techDivide: 'الفجوة التقنية',
      techDivideProblem: 'التقنية تكلف الملايين. لا تستطيع تحملها.',
      techDivideReality: 'أدوات فورتشن 500. ميزانيتك. أنت تخسر.',
      techDivideFight: 'نفس القوة. ميزانيتك.',
      techDivideStat: '10:1',
      techDivideStatLabel: 'ميزة الشركات vs المشاريع الصغيرة',
      theProblem: 'المشكلة',
      theReality: 'الواقع',
      ourFightLabel: 'كفاحنا',
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
      customSaaSTitle: 'برمجيات مخصصة',
      customSaaSDesc: 'فكرتك. نحن نبني. قابل للتوسع. ملك لك.',
      customSaaSApproach: 'شريكك التقني. من الفكرة للإطلاق.',
      customSaaSOutcome1: 'ينمو معك',
      customSaaSOutcome2: 'آمن',
      customSaaSOutcome3: 'دعم مستمر',
      customSaaSOutcome4: 'أنت تملكه',
      customSaaSPrimaryCta: 'اكتشف العملية',
      customSaaSSecondaryCta: 'ناقش مشروعك',
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
      study3Title: 'مجموعة العقارات المميزة',
      study3Duration: 'تنفيذ أسبوع واحد',
      study3Problem: 'فقدان عملاء ذوي قيمة عالية خارج أوقات العمل',
      study3Result1: 'وقت الرد على العملاء',
      study3Result2: 'زيادة العملاء المؤهلين',
      study3Result3: 'مبيعات ربع سنوية إضافية',
      viewAll: 'عرض جميع الدراسات',
    } as HomeTranslations['caseStudies'],
    ctaSection: {
      badge: 'لنخلق الأثر معاً',
      title: 'التقنية يجب أن تخدم ',
      titleHighlight: 'الجميع.',
      subtitle: 'لنصلح ما هو معطّل. احجز مكالمة.',
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
    readyFutureReady: 'Ready to Become Future Ready?',
    readyFutureReadyDesc: 'Explore the Future Ready Graduate Program—transform students into job-ready professionals with AI-powered digital skills. 85% employment within 6 months.',
    exploreFutureReady: 'Explore Future Ready Graduate',
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
    readyFutureReady: 'Prêt à devenir Prêt pour l\'Avenir ?',
    readyFutureReadyDesc: 'Découvrez le programme Diplômé Prêt—transformez les étudiants en professionnels prêts pour l\'emploi. 85% d\'emploi en 6 mois.',
    exploreFutureReady: 'Explorer Diplômé Prêt',
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
    readyFutureReady: 'هل أنت مستعد لتكون جاهزاً للمستقبل؟',
    readyFutureReadyDesc: 'اكتشف برنامج الخريج الجاهز—حوّل الطلاب إلى محترفين جاهزين للعمل بمهارات رقمية مدعومة بالذكاء الاصطناعي. 85% توظيف خلال 6 أشهر.',
    exploreFutureReady: 'اكتشف الخريج الجاهز',
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

  return {
    en: { ...commonEn, home: homeEn, blog: blogEn, about: {}, contact: {} },
    fr: { ...commonFr, home: homeFr, blog: blogFr, about: {}, contact: {} },
    ar: { ...commonAr, home: homeAr, blog: blogAr, about: {}, contact: {} },
  }
}

export const translations = buildTranslations()
