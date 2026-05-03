/**
 * Services listing page, product cards.
 * Keep in sync with home.whatWeDo, aiEmployeePage.capabilities, agentic-softwares tiers, and future-ready-graduate trimesters.
 */

export type ServicesPageCardId = 'ai-receptionist' | 'future-ready-graduate' | 'agentic-softwares'

export type ServicesPageCard = {
  id: ServicesPageCardId
  title: string
  subtitle: string
  description: string
  outcomes: string[]
  /** Six capability-style deliverables per offering (aligned to product pages). */
  deliverables: string[]
  technologies: string[]
  timeline: string
  link: string
  primaryCta: string
  /** Secondary action, uses booking link; label aligned with home.whatWeDo. */
  secondaryCta: string
}

export type ServicesPageStat = {
  value: string
  suffix: string
  label: string
  sublabel: string
  icon: string
}

export type ServicesPageTranslations = {
  labels: {
    keyFeatures: string
    technologies: string
    timeline: string
  }
  cards: ServicesPageCard[]
  stats: ServicesPageStat[]
  bottomCta: {
    title: string
    subtitle: string
  }
}

export const servicesPageEn: ServicesPageTranslations = {
  labels: {
    keyFeatures: 'What you get',
    technologies: 'Stack & integrations',
    timeline: 'Timeline',
  },
  cards: [
    {
      id: 'ai-receptionist',
      title: 'AI Employee Systems',
      subtitle: 'For Growing Businesses',
      description:
        "Most teams don't need more software, they need infrastructure that runs without them. We build intelligent systems for service businesses that want growth without chaos.",
      outcomes: [
        'Keep clients longer',
        'Convert more leads',
        'Scale with confidence',
      ],
      deliverables: [
        'Instant response',
        'Smart qualification',
        'Auto booking',
        'Follow-up that runs',
        'Multi-channel, one brain',
        'Revenue recovery',
      ],
      technologies: [
        'Voice & messaging AI',
        'Unified inbox',
        'CRM & calendar connectors',
      ],
      timeline: 'Often live in 48h (from decision to operational)',
      link: '/ai-receptionist',
      primaryCta: 'View AI Employee Systems',
      secondaryCta: 'Book Growth System Audit',
    },
    {
      id: 'future-ready-graduate',
      title: 'Future-Ready Graduate Program',
      subtitle: 'For Schools',
      description:
        'Real skills. 85% employed. We bring out entrepreneurial talents through personalized guided learning.',
      outcomes: [
        '85% employment rate',
        'Entrepreneurial talents unlocked',
        'Personalized to your gifts',
      ],
      deliverables: [
        'Digital foundation & web development',
        'Digital marketing & analytics',
        'Professional portfolio building',
        'Guided learning tailored to each student',
        'Job readiness & industry internships',
        'Career placement support',
      ],
      technologies: ['AI-assisted learning', 'Web development', 'Digital marketing'],
      timeline: '9 months · 3 trimesters',
      link: '/future-ready-graduate',
      primaryCta: 'View Program Details',
      secondaryCta: 'Book School Consultation',
    },
    {
      id: 'agentic-softwares',
      title: 'Agentic Softwares',
      subtitle: 'For Unique Needs',
      description:
        'We build custom software with integrated AI for niche-specific problems: autonomous workflows and systems you own, not shelf-ware.',
      outcomes: ['Autonomous agents', 'AI-native architecture', 'You own it'],
      deliverables: [
        'Agent design & workflow automation',
        'LLM integration & tool use',
        'Multi-agent orchestration',
        'Secure deployment & integrations',
        'Human-in-the-loop where it matters',
        'Monitoring & continuous improvement',
      ],
      technologies: ['LangChain', 'OpenAI API', 'Next.js', 'Supabase', 'PostgreSQL'],
      timeline: '7 days–3 months (MVP to full platform, by scope)',
      link: '/agentic-softwares',
      primaryCta: 'View Agentic Systems',
      secondaryCta: 'Book Project Consultation',
    },
  ],
  stats: [
    {
      value: '300',
      suffix: '%',
      label: 'Lead Conversion Increase',
      sublabel: 'AI Employee™ Results',
      icon: '📈',
    },
    {
      value: '85',
      suffix: '%',
      label: 'Graduate Employment Rate',
      sublabel: 'Future-Ready Graduate Program Success',
      icon: '🎓',
    },
    {
      value: '24',
      suffix: '/7',
      label: 'Always-On Service',
      sublabel: 'Never Miss Another Lead',
      icon: '🤖',
    },
  ],
  bottomCta: {
    title: 'Ready to Transform Your Business?',
    subtitle: "Tell us your problem. We'll build the fix.",
  },
}

export const servicesPageFr: ServicesPageTranslations = {
  labels: {
    keyFeatures: 'Ce que vous obtenez',
    technologies: 'Stack et intégrations',
    timeline: 'Calendrier',
  },
  cards: [
    {
      id: 'ai-receptionist',
      title: 'Systèmes employé IA',
      subtitle: 'Pour les entreprises en croissance',
      description:
        "Vous n'avez pas besoin d'un logiciel de plus, vous avez besoin d'une infrastructure qui tourne sans vous. Nous construisons des systèmes intelligents pour les entreprises de services qui veulent croître sans chaos.",
      outcomes: ['Clients fidélisés plus longtemps', 'Plus de prospects convertis', 'Croissance sereine'],
      deliverables: [
        'Réponse instantanée',
        'Qualification intelligente',
        'Prise de rendez-vous auto',
        'Relances qui tournent',
        'Multi-canal, un cerveau',
        'Récupération de revenu',
      ],
      technologies: ['IA voix & messagerie', 'Boîte unifiée', 'CRM & agendas connectés'],
      timeline: 'Souvent en ligne en 48 h (de la décision à l’opérationnel)',
      link: '/ai-receptionist',
      primaryCta: 'Voir les systèmes employé IA',
      secondaryCta: 'Réserver un audit Growth System',
    },
    {
      id: 'future-ready-graduate',
      title: 'Programme Diplômé Prêt pour l\'Avenir',
      subtitle: 'Pour les écoles',
      description:
        'Vraies compétences. 85% employés. Nous révélons les talents entrepreneuriaux par un apprentissage guidé personnalisé.',
      outcomes: ['85% d\'emploi', 'Talents entrepreneuriaux révélés', 'Personnalisé à vos dons'],
      deliverables: [
        'Fondations numériques & développement web',
        'Marketing digital & analytics',
        'Portfolio professionnel',
        'Apprentissage guidé adapté à chaque élève',
        'Préparation à l’emploi & stages',
        'Accompagnement placement',
      ],
      technologies: ['Apprentissage assisté par IA', 'Développement web', 'Marketing digital'],
      timeline: '9 mois · 3 trimestres',
      link: '/future-ready-graduate',
      primaryCta: 'Détails du programme',
      secondaryCta: 'Réserver une consultation école',
    },
    {
      id: 'agentic-softwares',
      title: 'Agentic Softwares',
      subtitle: 'Pour les besoins uniques',
      description:
        'Nous construisons des logiciels sur mesure avec IA intégrée pour des problèmes de niche : workflows autonomes et systèmes à vous, pas un logiciel en rayon.',
      outcomes: ['Agents autonomes', 'Architecture IA native', 'Vous en êtes propriétaire'],
      deliverables: [
        'Conception d’agents & automatisation des flux',
        'Intégration LLM & outils',
        'Orchestration multi-agents',
        'Déploiement sécurisé & intégrations',
        'Humain dans la boucle au bon endroit',
        'Suivi & amélioration continue',
      ],
      technologies: ['LangChain', 'OpenAI API', 'Next.js', 'Supabase', 'PostgreSQL'],
      timeline: '7 jours à 3 mois (MVP à plateforme complète, selon le périmètre)',
      link: '/agentic-softwares',
      primaryCta: 'Voir les systèmes agentiques',
      secondaryCta: 'Réserver une consultation projet',
    },
  ],
  stats: [
    {
      value: '300',
      suffix: '%',
      label: 'Hausse de conversion des prospects',
      sublabel: 'Résultats Employé IA™',
      icon: '📈',
    },
    {
      value: '85',
      suffix: '%',
      label: 'Taux d\'emploi des diplômés',
      sublabel: 'Succès du Programme Diplômé Prêt pour l\'Avenir',
      icon: '🎓',
    },
    {
      value: '24',
      suffix: '/7',
      label: 'Service toujours disponible',
      sublabel: 'Ne manquez plus aucun prospect',
      icon: '🤖',
    },
  ],
  bottomCta: {
    title: 'Prêt à transformer votre activité ?',
    subtitle: 'Dites-nous votre problème. Nous bâtirons la solution.',
  },
}

export const servicesPageEs: ServicesPageTranslations = {
  labels: {
    keyFeatures: 'Lo que recibes',
    technologies: 'Stack e integraciones',
    timeline: 'Plazo',
  },
  cards: [
    {
      id: 'ai-receptionist',
      title: 'Sistemas de empleado IA',
      subtitle: 'Para empresas en crecimiento',
      description:
        'La mayoría de los equipos no necesita más software, necesita infraestructura que funcione sin depender de ellos. Construimos sistemas inteligentes para empresas de servicios que quieren crecer sin caos.',
      outcomes: ['Retener clientes por más tiempo', 'Convertir más leads', 'Escalar con confianza'],
      deliverables: [
        'Respuesta instantánea',
        'Calificación inteligente',
        'Reservas automáticas',
        'Seguimiento que funciona solo',
        'Multicanal, una sola inteligencia',
        'Recuperación de ingresos',
      ],
      technologies: ['IA de voz y mensajería', 'Bandeja unificada', 'Conectores de CRM y calendario'],
      timeline: 'A menudo operativo en 48 h (de la decisión al funcionamiento)',
      link: '/ai-receptionist',
      primaryCta: 'Ver sistemas de empleado IA',
      secondaryCta: 'Reservar auditoría del sistema de crecimiento',
    },
    {
      id: 'future-ready-graduate',
      title: 'Programa Future-Ready Graduate',
      subtitle: 'Para escuelas',
      description:
        'Habilidades reales. 85% empleados. Despertamos talentos emprendedores mediante aprendizaje guiado y personalizado.',
      outcomes: ['85% de empleabilidad', 'Talentos emprendedores activados', 'Personalizado según sus dones'],
      deliverables: [
        'Base digital y desarrollo web',
        'Marketing digital y analítica',
        'Construcción de portafolio profesional',
        'Aprendizaje guiado adaptado a cada estudiante',
        'Preparación laboral y prácticas en la industria',
        'Apoyo para inserción profesional',
      ],
      technologies: ['Aprendizaje asistido por IA', 'Desarrollo web', 'Marketing digital'],
      timeline: '9 meses · 3 trimestres',
      link: '/future-ready-graduate',
      primaryCta: 'Ver detalles del programa',
      secondaryCta: 'Reservar consulta para escuelas',
    },
    {
      id: 'agentic-softwares',
      title: 'Agentic Softwares',
      subtitle: 'Para necesidades únicas',
      description:
        'Construimos software a medida con IA integrada para problemas específicos: flujos autónomos y sistemas propios, no herramientas genéricas.',
      outcomes: ['Agentes autónomos', 'Arquitectura nativa de IA', 'Tú eres el propietario'],
      deliverables: [
        'Diseño de agentes y automatización de flujos',
        'Integración de LLM y uso de herramientas',
        'Orquestación multiagente',
        'Despliegue seguro e integraciones',
        'Humano en el circuito donde importa',
        'Monitoreo y mejora continua',
      ],
      technologies: ['LangChain', 'OpenAI API', 'Next.js', 'Supabase', 'PostgreSQL'],
      timeline: '7 días a 3 meses (de MVP a plataforma completa, según alcance)',
      link: '/agentic-softwares',
      primaryCta: 'Ver sistemas agentic',
      secondaryCta: 'Reservar consulta de proyecto',
    },
  ],
  stats: [
    {
      value: '300',
      suffix: '%',
      label: 'Aumento en conversión de leads',
      sublabel: 'Resultados de Empleado IA™',
      icon: '📈',
    },
    {
      value: '85',
      suffix: '%',
      label: 'Tasa de empleo de graduados',
      sublabel: 'Éxito del Programa Future-Ready Graduate',
      icon: '🎓',
    },
    {
      value: '24',
      suffix: '/7',
      label: 'Servicio siempre activo',
      sublabel: 'No pierdas otro lead',
      icon: '🤖',
    },
  ],
  bottomCta: {
    title: '¿Listo para transformar tu empresa?',
    subtitle: 'Cuéntanos tu problema. Construiremos la solución.',
  },
}

export const servicesPageDe: ServicesPageTranslations = {
  labels: {
    keyFeatures: 'Was Sie bekommen',
    technologies: 'Stack & Integrationen',
    timeline: 'Zeitplan',
  },
  cards: [
    {
      id: 'ai-receptionist',
      title: 'KI-Mitarbeiter-Systeme',
      subtitle: 'Für wachsende Unternehmen',
      description:
        'Die meisten Teams brauchen nicht noch mehr Software, sondern Infrastruktur, die ohne sie läuft. Wir bauen intelligente Systeme für Dienstleister, die ohne Chaos wachsen wollen.',
      outcomes: ['Kunden länger halten', 'Mehr Leads konvertieren', 'Sicher skalieren'],
      deliverables: [
        'Sofortige Antwort',
        'Intelligente Qualifizierung',
        'Automatische Buchung',
        'Nachverfolgung, die läuft',
        'Mehrere Kanäle, ein Gehirn',
        'Umsatz zurückgewinnen',
      ],
      technologies: ['Sprach- & Messaging-KI', 'Einheitlicher Posteingang', 'CRM- & Kalender-Connectoren'],
      timeline: 'Oft in 48 Std. live (von der Entscheidung bis zum Betrieb)',
      link: '/ai-receptionist',
      primaryCta: 'KI-Mitarbeiter-Systeme ansehen',
      secondaryCta: 'Growth-System-Audit buchen',
    },
    {
      id: 'future-ready-graduate',
      title: 'Future-Ready Graduate Program',
      subtitle: 'Für Schulen',
      description:
        'Echte Kompetenzen. 85% beschäftigt. Wir entfalten unternehmerische Talente durch personalisiertes, geführtes Lernen.',
      outcomes: ['85% Beschäftigungsquote', 'Unternehmerische Talente entfaltet', 'Personalisiert nach Begabungen'],
      deliverables: [
        'Digitale Grundlagen & Webentwicklung',
        'Digitales Marketing & Analytics',
        'Aufbau eines professionellen Portfolios',
        'Geführtes Lernen passend zu jedem Studenten',
        'Berufsvorbereitung & Branchenpraktika',
        'Unterstützung bei der Vermittlung',
      ],
      technologies: ['KI-gestütztes Lernen', 'Webentwicklung', 'Digitales Marketing'],
      timeline: '9 Monate · 3 Trimester',
      link: '/future-ready-graduate',
      primaryCta: 'Programmdetails ansehen',
      secondaryCta: 'Schulberatung buchen',
    },
    {
      id: 'agentic-softwares',
      title: 'Agentic Softwares',
      subtitle: 'Für besondere Anforderungen',
      description:
        'Wir bauen maßgeschneiderte Software mit integrierter KI für sehr spezifische Probleme: autonome Workflows und Systeme, die Ihnen gehören, keine Standardware.',
      outcomes: ['Autonome Agenten', 'KI-native Architektur', 'Sie besitzen es'],
      deliverables: [
        'Agentendesign & Workflow-Automatisierung',
        'LLM-Integration & Tool-Nutzung',
        'Multi-Agenten-Orchestrierung',
        'Sichere Bereitstellung & Integrationen',
        'Mensch im Prozess, wo es zählt',
        'Monitoring & kontinuierliche Verbesserung',
      ],
      technologies: ['LangChain', 'OpenAI API', 'Next.js', 'Supabase', 'PostgreSQL'],
      timeline: '7 Tage bis 3 Monate (MVP bis Vollplattform, je nach Umfang)',
      link: '/agentic-softwares',
      primaryCta: 'Agentische Systeme ansehen',
      secondaryCta: 'Projektberatung buchen',
    },
  ],
  stats: [
    {
      value: '300',
      suffix: '%',
      label: 'Mehr Lead-Konversion',
      sublabel: 'KI-Mitarbeiter™ Ergebnisse',
      icon: '📈',
    },
    {
      value: '85',
      suffix: '%',
      label: 'Beschäftigungsquote der Absolventen',
      sublabel: 'Erfolg des Future-Ready Graduate Program',
      icon: '🎓',
    },
    {
      value: '24',
      suffix: '/7',
      label: 'Immer verfügbarer Service',
      sublabel: 'Nie wieder einen Lead verpassen',
      icon: '🤖',
    },
  ],
  bottomCta: {
    title: 'Bereit, Ihr Unternehmen zu transformieren?',
    subtitle: 'Sagen Sie uns Ihr Problem. Wir bauen die Lösung.',
  },
}

export const servicesPageAr: ServicesPageTranslations = {
  labels: {
    keyFeatures: 'ما الذي تحصل عليه',
    technologies: 'التقنيات والتكاملات',
    timeline: 'المدة',
  },
  cards: [
    {
      id: 'ai-receptionist',
      title: 'أنظمة الموظف الذكي',
      subtitle: 'للشركات النامية',
      description:
        'معظم الفرق لا تحتاج برنامجاً آخر، بل تحتاج بنية تعمل من دونها. نبني أنظمة ذكية لشركات الخدمات التي تريد النمو بلا فوضى.',
      outcomes: ['احتفاظ أطول بالعملاء', 'تحويل المزيد من العملاء المحتملين', 'نمو بثقة'],
      deliverables: [
        'استجابة فورية',
        'تأهيل ذكي',
        'حجز تلقائي',
        'متابعة تعمل باستمرار',
        'قنوات متعددة بعقل واحد',
        'استرداد الإيرادات',
      ],
      technologies: ['ذكاء اصطناعي للصوت والرسائل', 'صندوق وارد موحّد', 'تكاملات CRM والتقويم'],
      timeline: 'غالباً يعمل خلال 48 ساعة (من القرار إلى التشغيل)',
      link: '/ai-receptionist',
      primaryCta: 'شاهد أنظمة الموظف الذكي',
      secondaryCta: 'احجز تدقيق نظام النمو',
    },
    {
      id: 'future-ready-graduate',
      title: 'برنامج Future-Ready Graduate',
      subtitle: 'للمدارس',
      description:
        'مهارات حقيقية. 85% موظفون. نُظهر المواهب الريادية من خلال تعلم موجّه ومخصص لكل طالب.',
      outcomes: ['نسبة توظيف 85%', 'إطلاق المواهب الريادية', 'مخصص حسب مواهب كل طالب'],
      deliverables: [
        'أساسيات رقمية وتطوير ويب',
        'تسويق رقمي وتحليلات',
        'بناء ملف أعمال احترافي',
        'تعلم موجّه مناسب لكل طالب',
        'جاهزية للعمل وتدريبات صناعية',
        'دعم التوظيف والمسار المهني',
      ],
      technologies: ['تعلم مدعوم بالذكاء الاصطناعي', 'تطوير الويب', 'التسويق الرقمي'],
      timeline: '9 أشهر · 3 فصول',
      link: '/future-ready-graduate',
      primaryCta: 'عرض تفاصيل البرنامج',
      secondaryCta: 'احجز استشارة للمدرسة',
    },
    {
      id: 'agentic-softwares',
      title: 'Agentic Softwares',
      subtitle: 'للاحتياجات الخاصة',
      description:
        'نبني برمجيات مخصصة بذكاء اصطناعي مدمج لمشكلات متخصصة: سير عمل ذاتي وأنظمة تملكها أنت، لا حلولاً جاهزة.',
      outcomes: ['وكلاء ذاتيون', 'هندسة أصلية للذكاء الاصطناعي', 'أنت تملك النظام'],
      deliverables: [
        'تصميم وكلاء وأتمتة سير العمل',
        'تكامل نماذج اللغة واستخدام الأدوات',
        'تنسيق متعدد الوكلاء',
        'نشر آمن وتكاملات',
        'تدخل بشري في المواضع المهمة',
        'مراقبة وتحسين مستمر',
      ],
      technologies: ['LangChain', 'OpenAI API', 'Next.js', 'Supabase', 'PostgreSQL'],
      timeline: 'من 7 أيام إلى 3 أشهر (من MVP إلى منصة كاملة حسب النطاق)',
      link: '/agentic-softwares',
      primaryCta: 'شاهد الأنظمة الوكيلية',
      secondaryCta: 'احجز استشارة مشروع',
    },
  ],
  stats: [
    {
      value: '300',
      suffix: '%',
      label: 'زيادة في تحويل العملاء المحتملين',
      sublabel: 'نتائج الموظف الذكي™',
      icon: '📈',
    },
    {
      value: '85',
      suffix: '%',
      label: 'نسبة توظيف الخريجين',
      sublabel: 'نجاح برنامج Future-Ready Graduate',
      icon: '🎓',
    },
    {
      value: '24',
      suffix: '/7',
      label: 'خدمة تعمل دائماً',
      sublabel: 'لا تفقد عميلاً محتملاً مرة أخرى',
      icon: '🤖',
    },
  ],
  bottomCta: {
    title: 'هل أنت جاهز لتحويل عملك؟',
    subtitle: 'أخبرنا بالمشكلة. سنبني الحل.',
  },
}
