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
