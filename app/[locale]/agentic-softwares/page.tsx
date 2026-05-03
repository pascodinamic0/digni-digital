'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import StripeCheckoutButton from '@/app/components/StripeCheckoutButton'
import { getCtaButtonText, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { getServicePageJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'

type AgenticSoftwaresPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

const agenticSoftwaresCopy = {
  en: {
    heroBadge: 'Agentic Softwares, AI-Native Software',
    heroTitlePrefix: 'Software That',
    heroTitleHighlight: 'Perceives, Reasons & Acts',
    heroDescription:
      'AI agents that work autonomously. Built with agentic DNA: intelligent workflows, multi-agent orchestration, and systems that learn. Your vision. Our build.',
    proofYears: 'building growth systems',
    proofSatisfaction: 'client satisfaction',
    heroCta: 'Build Your Success Story',
    applicationsTitle: 'Our Agentic',
    applicationsHighlight: 'Applications',
    applicationsSubtitle:
      "We build software with agentic DNA – AI agents that perceive, reason, and act autonomously. Here are applications we've developed that embody intelligent automation and agent-based workflows.",
    technologiesLabel: 'Technologies',
    viewApplication: 'View Application',
    requestBeta: 'Request Beta Access',
    comingSoon: 'Coming Soon',
    servicesTitle: 'Agentic Development',
    servicesHighlight: 'Services',
    servicesSubtitle:
      'We build software with the DNA of Agentic Softwares companies: autonomous AI agents, intelligent workflows, and systems that reason and act. Your ideas become intelligent software.',
    timelineLabel: 'Timeline:',
    processLabel: 'Process',
    stackTitle: 'Agentic Technology',
    stackHighlight: 'Stack',
    stackSubtitle: 'AI-first stack: LLMs, agent frameworks, and intelligent automation. Software that perceives, reasons, and acts.',
    storiesTitle: 'Success Stories',
    storiesHighlight: 'Internal & Client Projects',
    storiesSubtitle:
      'From our own innovative SaaS applications to transformative client solutions, see how we turn ideas into successful software products.',
    challengeLabel: 'Challenge',
    solutionLabel: 'Solution',
    statusLabel: 'Status',
    resultsLabel: 'Results',
    liveProduct: 'View live product',
    processTitle: 'Our Agentic',
    processHighlight: 'Process',
    processSubtitle:
      'We design for autonomy from day one. Agent architecture, intelligent workflows, and systems that learn.',
    activitiesLabel: 'Activities',
    deliverablesLabel: 'Deliverables',
    finalTitle: 'Ready to Build Agentic Software?',
    finalDescription:
      "Whether you need AI agents that work autonomously, intelligent workflows, or a full Agentic Softwares platform, let's discuss how we can bring your vision to life with software that perceives, reasons, and acts.",
    moreCaseStudies: 'View More Case Studies',
  },
  fr: {
    heroBadge: 'Agentic Softwares, logiciel AI-native',
    heroTitlePrefix: 'Des logiciels qui',
    heroTitleHighlight: 'percoivent, raisonnent et agissent',
    heroDescription:
      'Des agents IA qui travaillent de facon autonome. Une architecture agentique: workflows intelligents, orchestration multi-agents et systemes qui apprennent. Votre vision. Notre construction.',
    proofYears: 'a construire des systemes de croissance',
    proofSatisfaction: 'de satisfaction client',
    heroCta: 'Construire votre success story',
    applicationsTitle: 'Nos applications',
    applicationsHighlight: 'agentiques',
    applicationsSubtitle:
      'Nous construisons des logiciels avec un ADN agentique: des agents IA qui percoivent, raisonnent et agissent seuls. Voici des applications qui montrent cette automatisation intelligente en action.',
    technologiesLabel: 'Technologies',
    viewApplication: 'Voir l application',
    requestBeta: 'Demander l acces beta',
    comingSoon: 'Bientot disponible',
    servicesTitle: 'Services de developpement',
    servicesHighlight: 'agentique',
    servicesSubtitle:
      'Nous construisons des logiciels avec l ADN des entreprises Agentic Softwares: agents IA autonomes, workflows intelligents et systemes qui raisonnent et agissent. Vos idees deviennent des logiciels intelligents.',
    timelineLabel: 'Delai :',
    processLabel: 'Processus',
    stackTitle: 'Stack technologique',
    stackHighlight: 'agentique',
    stackSubtitle: 'Stack AI-first: LLM, frameworks agents et automatisation intelligente. Des logiciels qui percoivent, raisonnent et agissent.',
    storiesTitle: 'Success stories',
    storiesHighlight: 'Projets internes et clients',
    storiesSubtitle:
      'De nos propres applications SaaS aux solutions clients transformatrices, voyez comment nous transformons les idees en produits logiciels performants.',
    challengeLabel: 'Defi',
    solutionLabel: 'Solution',
    statusLabel: 'Statut',
    resultsLabel: 'Resultats',
    liveProduct: 'Voir le produit live',
    processTitle: 'Notre processus',
    processHighlight: 'agentique',
    processSubtitle:
      'Nous concevons l autonomie des le premier jour: architecture d agents, workflows intelligents et systemes qui apprennent.',
    activitiesLabel: 'Activites',
    deliverablesLabel: 'Livrables',
    finalTitle: 'Pret a construire un logiciel agentique ?',
    finalDescription:
      'Que vous ayez besoin d agents IA autonomes, de workflows intelligents ou d une plateforme Agentic Softwares complete, discutons de la facon de donner vie a votre vision.',
    moreCaseStudies: 'Voir plus de cas clients',
  },
  es: {
    heroBadge: 'Agentic Softwares, software AI-native',
    heroTitlePrefix: 'Software que',
    heroTitleHighlight: 'percibe, razona y actua',
    heroDescription:
      'Agentes de IA que trabajan de forma autonoma. Construidos con ADN agentico: workflows inteligentes, orquestacion multiagente y sistemas que aprenden. Tu vision. Nuestra construccion.',
    proofYears: 'construyendo sistemas de crecimiento',
    proofSatisfaction: 'satisfaccion de clientes',
    heroCta: 'Construir tu historia de exito',
    applicationsTitle: 'Nuestras aplicaciones',
    applicationsHighlight: 'agenticas',
    applicationsSubtitle:
      'Creamos software con ADN agentico: agentes de IA que perciben, razonan y actuan de forma autonoma. Estas aplicaciones muestran automatizacion inteligente y workflows basados en agentes.',
    technologiesLabel: 'Tecnologias',
    viewApplication: 'Ver aplicacion',
    requestBeta: 'Solicitar acceso beta',
    comingSoon: 'Proximamente',
    servicesTitle: 'Servicios de desarrollo',
    servicesHighlight: 'agentico',
    servicesSubtitle:
      'Creamos software con el ADN de las companias Agentic Softwares: agentes IA autonomos, workflows inteligentes y sistemas que razonan y actuan. Tus ideas se convierten en software inteligente.',
    timelineLabel: 'Plazo:',
    processLabel: 'Proceso',
    stackTitle: 'Stack tecnologico',
    stackHighlight: 'agentico',
    stackSubtitle: 'Stack AI-first: LLMs, frameworks de agentes y automatizacion inteligente. Software que percibe, razona y actua.',
    storiesTitle: 'Historias de exito',
    storiesHighlight: 'Proyectos internos y de clientes',
    storiesSubtitle:
      'Desde nuestras aplicaciones SaaS hasta soluciones transformadoras para clientes, mira como convertimos ideas en productos de software exitosos.',
    challengeLabel: 'Desafio',
    solutionLabel: 'Solucion',
    statusLabel: 'Estado',
    resultsLabel: 'Resultados',
    liveProduct: 'Ver producto live',
    processTitle: 'Nuestro proceso',
    processHighlight: 'agentico',
    processSubtitle:
      'Disenamos para la autonomia desde el dia uno: arquitectura de agentes, workflows inteligentes y sistemas que aprenden.',
    activitiesLabel: 'Actividades',
    deliverablesLabel: 'Entregables',
    finalTitle: 'Listo para construir software agentico?',
    finalDescription:
      'Si necesitas agentes de IA autonomos, workflows inteligentes o una plataforma Agentic Softwares completa, conversemos sobre como llevar tu vision a la vida.',
    moreCaseStudies: 'Ver mas casos de estudio',
  },
  de: {
    heroBadge: 'Agentic Softwares, AI-native Software',
    heroTitlePrefix: 'Software, die',
    heroTitleHighlight: 'wahrnimmt, denkt und handelt',
    heroDescription:
      'KI-Agenten, die autonom arbeiten. Gebaut mit agentischer DNA: intelligente Workflows, Multi-Agent-Orchestrierung und lernende Systeme. Deine Vision. Unser Build.',
    proofYears: 'im Aufbau von Wachstumssystemen',
    proofSatisfaction: 'Kundenzufriedenheit',
    heroCta: 'Deine Erfolgsgeschichte bauen',
    applicationsTitle: 'Unsere agentischen',
    applicationsHighlight: 'Anwendungen',
    applicationsSubtitle:
      'Wir bauen Software mit agentischer DNA: KI-Agenten, die autonom wahrnehmen, denken und handeln. Diese Anwendungen zeigen intelligente Automatisierung und agentenbasierte Workflows.',
    technologiesLabel: 'Technologien',
    viewApplication: 'Anwendung ansehen',
    requestBeta: 'Beta-Zugang anfragen',
    comingSoon: 'Bald verfuegbar',
    servicesTitle: 'Agentische Entwicklungs',
    servicesHighlight: 'Services',
    servicesSubtitle:
      'Wir bauen Software mit der DNA von Agentic Softwares Unternehmen: autonome KI-Agenten, intelligente Workflows und Systeme, die denken und handeln. Deine Ideen werden intelligente Software.',
    timelineLabel: 'Zeitplan:',
    processLabel: 'Prozess',
    stackTitle: 'Agentischer Technologie',
    stackHighlight: 'Stack',
    stackSubtitle: 'AI-first Stack: LLMs, Agent Frameworks und intelligente Automatisierung. Software, die wahrnimmt, denkt und handelt.',
    storiesTitle: 'Erfolgsgeschichten',
    storiesHighlight: 'Interne und Kundenprojekte',
    storiesSubtitle:
      'Von eigenen SaaS-Anwendungen bis zu transformativen Kundenloesungen: So verwandeln wir Ideen in erfolgreiche Softwareprodukte.',
    challengeLabel: 'Herausforderung',
    solutionLabel: 'Loesung',
    statusLabel: 'Status',
    resultsLabel: 'Ergebnisse',
    liveProduct: 'Live-Produkt ansehen',
    processTitle: 'Unser agentischer',
    processHighlight: 'Prozess',
    processSubtitle:
      'Wir entwerfen von Tag eins an fuer Autonomie: Agentenarchitektur, intelligente Workflows und lernende Systeme.',
    activitiesLabel: 'Aktivitaeten',
    deliverablesLabel: 'Liefergegenstaende',
    finalTitle: 'Bereit fuer agentische Software?',
    finalDescription:
      'Ob autonome KI-Agenten, intelligente Workflows oder eine vollstaendige Agentic Softwares Plattform: Lass uns besprechen, wie wir deine Vision umsetzen.',
    moreCaseStudies: 'Weitere Case Studies ansehen',
  },
  ar: {
    heroBadge: 'Agentic Softwares، برمجيات AI-native',
    heroTitlePrefix: 'برمجيات',
    heroTitleHighlight: 'تدرك وتفكر وتتصرف',
    heroDescription:
      'وكلاء ذكاء اصطناعي يعملون باستقلالية. مبنية بمنطق agentic: سير عمل ذكية، تنسيق متعدد الوكلاء، وانظمة تتعلم. رؤيتك، ونحن نبنيها.',
    proofYears: 'في بناء انظمة نمو',
    proofSatisfaction: 'رضا العملاء',
    heroCta: 'ابن قصة نجاحك',
    applicationsTitle: 'تطبيقاتنا',
    applicationsHighlight: 'الذكية',
    applicationsSubtitle:
      'نبني برمجيات بمنطق agentic: وكلاء ذكاء اصطناعي يدركون ويفكرون ويتصرفون باستقلالية. هذه تطبيقات طورناها لتجسيد الاتمتة الذكية وسير العمل القائم على الوكلاء.',
    technologiesLabel: 'التقنيات',
    viewApplication: 'عرض التطبيق',
    requestBeta: 'طلب دخول بيتا',
    comingSoon: 'قريبا',
    servicesTitle: 'خدمات تطوير',
    servicesHighlight: 'Agentic',
    servicesSubtitle:
      'نبني برمجيات بمنطق شركات Agentic Softwares: وكلاء IA مستقلون، سير عمل ذكية، وانظمة تفكر وتتصرف. افكارك تصبح برمجيات ذكية.',
    timelineLabel: 'المدة:',
    processLabel: 'العملية',
    stackTitle: 'حزمة التقنية',
    stackHighlight: 'الذكية',
    stackSubtitle: 'حزمة AI-first: LLMs، اطر الوكلاء، واتمتة ذكية. برمجيات تدرك وتفكر وتتصرف.',
    storiesTitle: 'قصص نجاح',
    storiesHighlight: 'مشاريع داخلية ومشاريع عملاء',
    storiesSubtitle:
      'من تطبيقات SaaS الخاصة بنا الى حلول العملاء التحويلية، شاهد كيف نحول الافكار الى منتجات برمجية ناجحة.',
    challengeLabel: 'التحدي',
    solutionLabel: 'الحل',
    statusLabel: 'الحالة',
    resultsLabel: 'النتائج',
    liveProduct: 'عرض المنتج الحي',
    processTitle: 'عمليتنا',
    processHighlight: 'الذكية',
    processSubtitle:
      'نصمم من اليوم الاول من اجل الاستقلالية: بنية وكلاء، سير عمل ذكي، وانظمة تتعلم.',
    activitiesLabel: 'الانشطة',
    deliverablesLabel: 'المخرجات',
    finalTitle: 'جاهز لبناء برمجيات Agentic؟',
    finalDescription:
      'سواء احتجت وكلاء IA يعملون باستقلالية، او سير عمل ذكية، او منصة Agentic Softwares كاملة، فلنتحدث عن تحويل رؤيتك الى واقع.',
    moreCaseStudies: 'عرض مزيد من دراسات الحالة',
  },
}

const agenticInlineCopy = {
  fr: {
    'AI creates proposals. Minutes, not hours.': 'L IA cree des propositions. En minutes, pas en heures.',
    'Business Automation': 'Automatisation business',
    'Live': 'Live',
    'Project management. AI insights. Team collaboration.': 'Gestion de projet. Insights IA. Collaboration equipe.',
    'Productivity': 'Productivite',
    'Beta': 'Beta',
    'Run the hotel from anywhere, bookings, rooms, keys, and payments in one command center. Role-based access, smart door cards, and full visibility for investors and staff.': 'Gerez l hotel de partout: reservations, chambres, cles et paiements dans un centre de commande unique. Acces par role, cartes intelligentes et visibilite complete.',
    'Hospitality': 'Hospitalite',
    'AI writes your marketing. Fast.': 'L IA ecrit votre marketing. Rapidement.',
    'Marketing': 'Marketing',
    'Agentic MVP': 'MVP agentique',
    'AI-native MVP with autonomous workflows. 7 days–2 weeks. For startups.': 'MVP AI-native avec workflows autonomes. 7 jours a 2 semaines. Pour startups.',
    'Agent Design': 'Design agent',
    'Workflow Automation': 'Automatisation workflow',
    'AI Integration': 'Integration IA',
    'Testing & Launch': 'Tests et lancement',
    '7 days–2 weeks': '7 jours a 2 semaines',
    'Enterprise Agentic Software': 'Logiciel agentique entreprise',
    'AI agents that scale. Autonomous. Secure. Multi-agent orchestration. 2 weeks–1 month.': 'Agents IA qui scalent. Autonomes. Securises. Orchestration multi-agents. 2 semaines a 1 mois.',
    'Agent Architecture': 'Architecture agent',
    'Autonomous Workflow Design': 'Design de workflow autonome',
    'LLM Integration': 'Integration LLM',
    'Deployment & Training': 'Deploiement et formation',
    '2 weeks–1 month': '2 semaines a 1 mois',
    'Agentic Softwares Platform': 'Plateforme Agentic Softwares',
    'Full Agentic Softwares. Intelligent automation. Multi-tenant. You own it. 1 month–3 months.': 'Agentic Softwares complet. Automatisation intelligente. Multi-tenant. Vous en etes proprietaire. 1 a 3 mois.',
    'Agent Strategy': 'Strategie agent',
    'Platform Architecture': 'Architecture plateforme',
    'Multi-Agent Development': 'Developpement multi-agents',
    'Go-to-Market Support': 'Support go-to-market',
    '1 month–3 months': '1 a 3 mois',
    'AI & Agents': 'IA et agents',
    'Frontend & Backend': 'Frontend et backend',
    'Cloud & DevOps': 'Cloud et DevOps',
    'Data & Integration': 'Donnees et integration',
    'Internal Project': 'Projet interne',
    'Manual proposals. Slow. Lost deals.': 'Propositions manuelles. Lentes. Deals perdus.',
    'AI creates proposals. Minutes. Professional. Shipped.': 'L IA cree des propositions. Minutes. Professionnelles. Livrees.',
    'Faster proposal creation': 'Creation de propositions plus rapide',
    'Proposals generated': 'Propositions generees',
    'User satisfaction rating': 'Note de satisfaction utilisateur',
    '3 months': '3 mois',
    'Live & Growing': 'Live et en croissance',
    'Client Project': 'Projet client',
    'Healthcare': 'Sante',
    'Needed patient management. HIPAA. Insurance.': 'Besoin de gestion patient. HIPAA. Assurance.',
    'Built it. Scheduling. Billing. Patient portal.': 'Construit: planning, facturation, portail patient.',
    'Reduction in administrative time': 'Reduction du temps administratif',
    'Annual cost savings': 'Economies annuelles',
    'Patient satisfaction score': 'Satisfaction patient',
    '4 months': '4 mois',
    'Successfully Deployed': 'Deploiement reussi',
    'Owners needed to run the property from a distance, block rooms on demand, see real performance, and stop key handoffs that bypass the front desk. Payments and restaurant service had to stay in one auditable flow.': 'Les proprietaires devaient gerer la propriete a distance, bloquer des chambres, suivre la performance et controler les remises de cles hors reception.',
    'A full hotel OS: online stays and conference-room booking, role-based access from super admin to restaurant lead, Stripe-backed payment methods, and smart cards issued from the dashboard so room access stays tied to the system.': 'Un OS hotel complet: reservations en ligne, acces par role, paiements Stripe et cartes intelligentes depuis le dashboard.',
    'Role levels from owner to front desk & restaurant': 'Niveaux de roles du proprietaire a la reception et au restaurant',
    'Operations, bookings, and access in one dashboard': 'Operations, reservations et acces dans un dashboard',
    'Production guest booking & smart access': 'Reservation client et smart access en production',
    '2 months': '2 mois',
    'Discovery': 'Decouverte',
    '1 day': '1 jour',
    'Stakeholder interviews': 'Interviews des parties prenantes',
    'Agent & workflow definition': 'Definition agent et workflow',
    'Technical feasibility': 'Faisabilite technique',
    'Project roadmap': 'Roadmap projet',
    'Requirements document': 'Document de besoins',
    'Agent architecture spec': 'Specification architecture agent',
    'Project timeline': 'Planning projet',
    'Cost estimate': 'Estimation de cout',
    'Design': 'Design',
    '1 week': '1 semaine',
    'Agent architecture design': 'Design architecture agent',
    'Autonomous workflow mapping': 'Mapping workflow autonome',
    'Database design': 'Design base de donnees',
    'API specification': 'Specification API',
    'Agent design doc': 'Document design agent',
    'Workflow diagrams': 'Diagrammes workflow',
    'Database schema': 'Schema base de donnees',
    'API documentation': 'Documentation API',
    'Development': 'Developpement',
    '2-10 weeks': '2 a 10 semaines',
    'Agent implementation': 'Implementation agent',
    'LLM integration': 'Integration LLM',
    'QA & optimization': 'QA et optimisation',
    'Working agentic software': 'Logiciel agentique fonctionnel',
    'Test reports': 'Rapports de test',
    'Documentation': 'Documentation',
    'Training materials': 'Supports de formation',
    'Launch & Support': 'Lancement et support',
    'Ongoing': 'Continu',
    'Deployment to production': 'Deploiement en production',
    'Agent tuning': 'Ajustement agent',
    'Performance monitoring': 'Monitoring performance',
    'Continuous improvement': 'Amelioration continue',
    'Live agentic application': 'Application agentique live',
    'Support documentation': 'Documentation support',
    'Monitoring setup': 'Monitoring configure',
    'Maintenance plan': 'Plan de maintenance',
  },
  es: {},
  de: {},
  ar: {},
}

for (const locale of ['es', 'de', 'ar'] as const) {
  agenticInlineCopy[locale] = agenticInlineCopy.fr
}

const localizeAgentic = (language: string, text: string) => {
  if (language === 'en') return text

  const localized = agenticSoftwaresCollections[language as keyof typeof agenticSoftwaresCollections]
  if (localized) {
    const serviceTitleTranslations = {
      fr: {
        'Agentic MVP': 'MVP agentique',
        'Enterprise Agentic Software': 'Logiciel agentique entreprise',
        'Agentic Softwares Platform': 'Plateforme Agentic Softwares',
      },
      es: {
        'Agentic MVP': 'MVP agéntico',
        'Enterprise Agentic Software': 'Software agéntico enterprise',
        'Agentic Softwares Platform': 'Plataforma Agentic Softwares',
      },
      de: {
        'Agentic MVP': 'Agentisches MVP',
        'Enterprise Agentic Software': 'Agentische Enterprise-Software',
        'Agentic Softwares Platform': 'Agentic Softwares-Plattform',
      },
      ar: {
        'Agentic MVP': 'MVP وكيل',
        'Enterprise Agentic Software': 'برمجيات وكيلة للمؤسسات',
        'Agentic Softwares Platform': 'منصة Agentic Softwares',
      },
    }
    const serviceTitle = serviceTitleTranslations[language as keyof typeof serviceTitleTranslations]?.[text as keyof typeof serviceTitleTranslations.fr]
    if (serviceTitle) return serviceTitle

    const english = agenticSoftwaresCollections.en
    const pairs: Array<[string, string]> = [
      ...english.apps.flatMap((app, i) => [
        [app.description, localized.apps[i].description],
        [app.category, localized.apps[i].category],
        [app.status, localized.apps[i].status],
      ] as Array<[string, string]>),
      ...english.services.flatMap((service, i) => [
        [service.description, localized.services[i].description],
        [service.timeline, localized.services[i].timeline],
        ...service.process.map((step, j) => [step, localized.services[i].process[j]] as [string, string]),
      ] as Array<[string, string]>),
      ...english.technologyCategories.map((category, i) => [category, localized.technologyCategories[i]] as [string, string]),
      ...english.caseStudies.flatMap((study, i) => [
        [study.type, localized.caseStudies[i].type],
        [study.industry, localized.caseStudies[i].industry],
        [study.challenge, localized.caseStudies[i].challenge],
        [study.solution, localized.caseStudies[i].solution],
        [study.timeline, localized.caseStudies[i].timeline],
        [study.status, localized.caseStudies[i].status],
        ...study.results.map((result, j) => [result, localized.caseStudies[i].results[j]] as [string, string]),
      ] as Array<[string, string]>),
      ...english.process.flatMap((phase, i) => [
        [phase.phase, localized.process[i].phase],
        [phase.duration, localized.process[i].duration],
        ...phase.activities.map((activity, j) => [activity, localized.process[i].activities[j]] as [string, string]),
        ...phase.deliverables.map((deliverable, j) => [deliverable, localized.process[i].deliverables[j]] as [string, string]),
      ] as Array<[string, string]>),
    ]
    const match = pairs.find(([source]) => source === text)
    if (match) return match[1]
  }

  return (agenticInlineCopy as Record<string, Record<string, string>>)[language]?.[text] ?? text
}
const agenticSoftwaresCollections = {
  en: {
    apps: [
      { description: 'AI creates proposals. Minutes, not hours.', category: 'Business Automation', status: 'Live' },
      { description: 'Project management. AI insights. Team collaboration.', category: 'Productivity', status: 'Beta' },
      {
        description:
          'Run the hotel from anywhere, bookings, rooms, keys, and payments in one command center. Role-based access, smart door cards, and full visibility for investors and staff.',
        category: 'Hospitality',
        status: 'Live',
      },
      { description: 'AI writes your marketing. Fast.', category: 'Marketing', status: 'Live' },
    ],
    services: [
      {
        description: 'AI-native MVP with autonomous workflows. 7 days-2 weeks. For startups.',
        process: ['Agent Design', 'Workflow Automation', 'AI Integration', 'Testing & Launch'],
        timeline: '7 days-2 weeks',
      },
      {
        description: 'AI agents that scale. Autonomous. Secure. Multi-agent orchestration. 2 weeks-1 month.',
        process: ['Agent Architecture', 'Autonomous Workflow Design', 'LLM Integration', 'Deployment & Training'],
        timeline: '2 weeks-1 month',
      },
      {
        description: 'Full Agentic Softwares. Intelligent automation. Multi-tenant. You own it. 1 month-3 months.',
        process: ['Agent Strategy', 'Platform Architecture', 'Multi-Agent Development', 'Go-to-Market Support'],
        timeline: '1 month-3 months',
      },
    ],
    technologyCategories: ['AI & Agents', 'Frontend & Backend', 'Cloud & DevOps', 'Data & Integration'],
    caseStudies: [
      {
        type: 'Internal Project',
        industry: 'Business Automation',
        challenge: 'Manual proposals. Slow. Lost deals.',
        solution: 'AI creates proposals. Minutes. Professional. Shipped.',
        results: ['Faster proposal creation', 'Proposals generated', 'User satisfaction rating'],
        timeline: '3 months',
        status: 'Live & Growing',
      },
      {
        type: 'Client Project',
        industry: 'Healthcare',
        challenge: 'Needed patient management. HIPAA. Insurance.',
        solution: 'Built it. Scheduling. Billing. Patient portal.',
        results: ['Reduction in administrative time', 'Annual cost savings', 'Patient satisfaction score'],
        timeline: '4 months',
        status: 'Successfully Deployed',
      },
      {
        type: 'Client Project',
        industry: 'Hospitality',
        challenge:
          'Owners needed to run the property from a distance, block rooms on demand, see real performance, and stop key handoffs that bypass the front desk. Payments and restaurant service had to stay in one auditable flow.',
        solution:
          'A full hotel OS: online stays and conference-room booking, role-based access from super admin to restaurant lead, Stripe-backed payment methods, and smart cards issued from the dashboard so room access stays tied to the system.',
        results: ['Role levels from owner to front desk & restaurant', 'Operations, bookings, and access in one dashboard', 'Production guest booking & smart access'],
        timeline: '2 months',
        status: 'Live',
      },
    ],
    process: [
      {
        phase: 'Discovery',
        duration: '1 day',
        activities: ['Stakeholder interviews', 'Agent & workflow definition', 'Technical feasibility', 'Project roadmap'],
        deliverables: ['Requirements document', 'Agent architecture spec', 'Project timeline', 'Cost estimate'],
      },
      {
        phase: 'Design',
        duration: '1 week',
        activities: ['Agent architecture design', 'Autonomous workflow mapping', 'Database design', 'API specification'],
        deliverables: ['Agent design doc', 'Workflow diagrams', 'Database schema', 'API documentation'],
      },
      {
        phase: 'Development',
        duration: '2-10 weeks',
        activities: ['Agent implementation', 'Workflow automation', 'LLM integration', 'QA & optimization'],
        deliverables: ['Working agentic software', 'Test reports', 'Documentation', 'Training materials'],
      },
      {
        phase: 'Launch & Support',
        duration: 'Ongoing',
        activities: ['Deployment to production', 'Agent tuning', 'Performance monitoring', 'Continuous improvement'],
        deliverables: ['Live agentic application', 'Support documentation', 'Monitoring setup', 'Maintenance plan'],
      },
    ],
  },
  fr: {
    apps: [
      { description: 'L’IA crée des propositions. En minutes, pas en heures.', category: 'Automatisation business', status: 'En ligne' },
      { description: 'Gestion de projet. Insights IA. Collaboration d’équipe.', category: 'Productivité', status: 'Beta' },
      {
        description:
          'Pilotez l’hôtel à distance : réservations, chambres, clés et paiements dans un seul centre de commande. Accès par rôle, cartes de porte intelligentes et visibilité complète pour les investisseurs et l’équipe.',
        category: 'Hôtellerie',
        status: 'En ligne',
      },
      { description: 'L’IA rédige votre marketing. Vite.', category: 'Marketing', status: 'En ligne' },
    ],
    services: [
      {
        description: 'MVP AI-native avec workflows autonomes. 7 jours-2 semaines. Pour startups.',
        process: ['Conception d’agents', 'Automatisation des workflows', 'Intégration IA', 'Tests et lancement'],
        timeline: '7 jours-2 semaines',
      },
      {
        description: 'Des agents IA qui passent à l’échelle. Autonomes. Sécurisés. Orchestration multi-agent. 2 semaines-1 mois.',
        process: ['Architecture d’agents', 'Conception de workflows autonomes', 'Intégration LLM', 'Déploiement et formation'],
        timeline: '2 semaines-1 mois',
      },
      {
        description: 'Agentic Softwares complet. Automatisation intelligente. Multi-tenant. Vous en êtes propriétaire. 1 mois-3 mois.',
        process: ['Stratégie agents', 'Architecture plateforme', 'Développement multi-agent', 'Support go-to-market'],
        timeline: '1 mois-3 mois',
      },
    ],
    technologyCategories: ['IA et agents', 'Frontend et backend', 'Cloud et DevOps', 'Données et intégration'],
    caseStudies: [
      {
        type: 'Projet interne',
        industry: 'Automatisation business',
        challenge: 'Propositions manuelles. Lentes. Deals perdus.',
        solution: 'L’IA crée les propositions. En minutes. Professionnelles. Expédiées.',
        results: ['création de propositions plus rapide', 'propositions générées', 'note de satisfaction utilisateur'],
        timeline: '3 mois',
        status: 'En ligne et en croissance',
      },
      {
        type: 'Projet client',
        industry: 'Santé',
        challenge: 'Besoin de gestion patients. HIPAA. Assurance.',
        solution: 'Nous l’avons construit. Planning. Facturation. Portail patient.',
        results: ['réduction du temps administratif', 'd’économies annuelles', 'score de satisfaction patient'],
        timeline: '4 mois',
        status: 'Déployé avec succès',
      },
      {
        type: 'Projet client',
        industry: 'Hôtellerie',
        challenge:
          'Les propriétaires devaient piloter l’établissement à distance, bloquer des chambres à la demande, voir la performance réelle et stopper les remises de clés qui contournaient la réception. Les paiements et le service restaurant devaient rester dans un flux auditable.',
        solution:
          'Un OS hôtelier complet : réservations en ligne de séjours et de salles de conférence, accès par rôle du super admin au responsable restaurant, moyens de paiement adossés à Stripe et cartes intelligentes émises depuis le dashboard.',
        results: ['niveaux de rôle du propriétaire à la réception et au restaurant', 'opérations, réservations et accès dans un seul dashboard', 'réservation client et accès intelligent en production'],
        timeline: '2 mois',
        status: 'En ligne',
      },
    ],
    process: [
      {
        phase: 'Découverte',
        duration: '1 jour',
        activities: ['Interviews des parties prenantes', 'Définition des agents et workflows', 'Faisabilité technique', 'Roadmap projet'],
        deliverables: ['Document d’exigences', 'Spécification d’architecture agents', 'Planning projet', 'Estimation des coûts'],
      },
      {
        phase: 'Conception',
        duration: '1 semaine',
        activities: ['Conception de l’architecture agents', 'Mapping des workflows autonomes', 'Conception de base de données', 'Spécification API'],
        deliverables: ['Document de conception agents', 'Diagrammes de workflow', 'Schéma de base de données', 'Documentation API'],
      },
      {
        phase: 'Développement',
        duration: '2-10 semaines',
        activities: ['Implémentation des agents', 'Automatisation des workflows', 'Intégration LLM', 'QA et optimisation'],
        deliverables: ['Logiciel agentique fonctionnel', 'Rapports de test', 'Documentation', 'Supports de formation'],
      },
      {
        phase: 'Lancement et support',
        duration: 'Continu',
        activities: ['Déploiement en production', 'Ajustement des agents', 'Monitoring de performance', 'Amélioration continue'],
        deliverables: ['Application agentique en ligne', 'Documentation support', 'Configuration du monitoring', 'Plan de maintenance'],
      },
    ],
  },
  es: {
    apps: [
      { description: 'La IA crea propuestas. En minutos, no horas.', category: 'Automatización empresarial', status: 'En vivo' },
      { description: 'Gestión de proyectos. Insights de IA. Colaboración de equipo.', category: 'Productividad', status: 'Beta' },
      {
        description:
          'Gestiona el hotel desde cualquier lugar: reservas, habitaciones, llaves y pagos en un solo centro de control. Acceso por roles, tarjetas inteligentes y visibilidad completa para inversores y equipo.',
        category: 'Hospitalidad',
        status: 'En vivo',
      },
      { description: 'La IA escribe tu marketing. Rápido.', category: 'Marketing', status: 'En vivo' },
    ],
    services: [
      {
        description: 'MVP AI-native con flujos autónomos. 7 días-2 semanas. Para startups.',
        process: ['Diseño de agentes', 'Automatización de flujos', 'Integración de IA', 'Pruebas y lanzamiento'],
        timeline: '7 días-2 semanas',
      },
      {
        description: 'Agentes de IA que escalan. Autónomos. Seguros. Orquestación multiagente. 2 semanas-1 mes.',
        process: ['Arquitectura de agentes', 'Diseño de flujos autónomos', 'Integración LLM', 'Despliegue y formación'],
        timeline: '2 semanas-1 mes',
      },
      {
        description: 'Agentic Softwares completo. Automatización inteligente. Multi-tenant. Es tuyo. 1 mes-3 meses.',
        process: ['Estrategia de agentes', 'Arquitectura de plataforma', 'Desarrollo multiagente', 'Soporte go-to-market'],
        timeline: '1 mes-3 meses',
      },
    ],
    technologyCategories: ['IA y agentes', 'Frontend y backend', 'Cloud y DevOps', 'Datos e integración'],
    caseStudies: [
      {
        type: 'Proyecto interno',
        industry: 'Automatización empresarial',
        challenge: 'Propuestas manuales. Lentas. Ventas perdidas.',
        solution: 'La IA crea propuestas. En minutos. Profesionales. Enviadas.',
        results: ['creación de propuestas más rápida', 'propuestas generadas', 'valoración de satisfacción de usuarios'],
        timeline: '3 meses',
        status: 'En vivo y creciendo',
      },
      {
        type: 'Proyecto de cliente',
        industry: 'Salud',
        challenge: 'Necesitaban gestión de pacientes. HIPAA. Seguros.',
        solution: 'Lo construimos. Agenda. Facturación. Portal de pacientes.',
        results: ['reducción del tiempo administrativo', 'ahorro anual de costes', 'puntuación de satisfacción de pacientes'],
        timeline: '4 meses',
        status: 'Desplegado con éxito',
      },
      {
        type: 'Proyecto de cliente',
        industry: 'Hospitalidad',
        challenge:
          'Los propietarios necesitaban gestionar la propiedad a distancia, bloquear habitaciones bajo demanda, ver el rendimiento real y evitar entregas de llaves fuera de recepción. Los pagos y el servicio de restaurante debían mantenerse en un flujo auditable.',
        solution:
          'Un sistema operativo hotelero completo: reservas online de estancias y salas de conferencia, acceso por roles, métodos de pago con Stripe y tarjetas inteligentes emitidas desde el dashboard.',
        results: ['niveles de rol desde propietario hasta recepción y restaurante', 'operaciones, reservas y acceso en un solo dashboard', 'reservas de huéspedes y acceso inteligente en producción'],
        timeline: '2 meses',
        status: 'En vivo',
      },
    ],
    process: [
      {
        phase: 'Descubrimiento',
        duration: '1 día',
        activities: ['Entrevistas con stakeholders', 'Definición de agentes y flujos', 'Viabilidad técnica', 'Roadmap del proyecto'],
        deliverables: ['Documento de requisitos', 'Especificación de arquitectura de agentes', 'Calendario del proyecto', 'Estimación de coste'],
      },
      {
        phase: 'Diseño',
        duration: '1 semana',
        activities: ['Diseño de arquitectura de agentes', 'Mapeo de flujos autónomos', 'Diseño de base de datos', 'Especificación API'],
        deliverables: ['Documento de diseño de agentes', 'Diagramas de flujo', 'Esquema de base de datos', 'Documentación API'],
      },
      {
        phase: 'Desarrollo',
        duration: '2-10 semanas',
        activities: ['Implementación de agentes', 'Automatización de flujos', 'Integración LLM', 'QA y optimización'],
        deliverables: ['Software agéntico funcional', 'Informes de prueba', 'Documentación', 'Materiales de formación'],
      },
      {
        phase: 'Lanzamiento y soporte',
        duration: 'Continuo',
        activities: ['Despliegue a producción', 'Ajuste de agentes', 'Monitoreo de rendimiento', 'Mejora continua'],
        deliverables: ['Aplicación agéntica en vivo', 'Documentación de soporte', 'Configuración de monitoreo', 'Plan de mantenimiento'],
      },
    ],
  },
  de: {
    apps: [
      { description: 'KI erstellt Angebote. In Minuten, nicht Stunden.', category: 'Geschäftsautomatisierung', status: 'Live' },
      { description: 'Projektmanagement. KI-Insights. Teamzusammenarbeit.', category: 'Produktivität', status: 'Beta' },
      {
        description:
          'Führen Sie das Hotel von überall: Buchungen, Zimmer, Schlüssel und Zahlungen in einer Kommandozentrale. Rollenbasierter Zugriff, smarte Türkarten und volle Transparenz für Investoren und Team.',
        category: 'Hospitality',
        status: 'Live',
      },
      { description: 'KI schreibt Ihr Marketing. Schnell.', category: 'Marketing', status: 'Live' },
    ],
    services: [
      {
        description: 'AI-native MVP mit autonomen Workflows. 7 Tage-2 Wochen. Für Startups.',
        process: ['Agentendesign', 'Workflow-Automatisierung', 'KI-Integration', 'Tests und Launch'],
        timeline: '7 Tage-2 Wochen',
      },
      {
        description: 'KI-Agenten, die skalieren. Autonom. Sicher. Multi-Agent-Orchestrierung. 2 Wochen-1 Monat.',
        process: ['Agentenarchitektur', 'Design autonomer Workflows', 'LLM-Integration', 'Deployment und Training'],
        timeline: '2 Wochen-1 Monat',
      },
      {
        description: 'Vollständiges Agentic Softwares. Intelligente Automatisierung. Multi-tenant. In Ihrem Besitz. 1 Monat-3 Monate.',
        process: ['Agentenstrategie', 'Plattformarchitektur', 'Multi-Agent-Entwicklung', 'Go-to-Market-Support'],
        timeline: '1 Monat-3 Monate',
      },
    ],
    technologyCategories: ['KI und Agenten', 'Frontend und Backend', 'Cloud und DevOps', 'Daten und Integration'],
    caseStudies: [
      {
        type: 'Internes Projekt',
        industry: 'Geschäftsautomatisierung',
        challenge: 'Manuelle Angebote. Langsam. Verlorene Deals.',
        solution: 'KI erstellt Angebote. Minuten. Professionell. Versandfertig.',
        results: ['schnellere Angebotserstellung', 'erstellte Angebote', 'Bewertung der Nutzerzufriedenheit'],
        timeline: '3 Monate',
        status: 'Live und wachsend',
      },
      {
        type: 'Kundenprojekt',
        industry: 'Gesundheitswesen',
        challenge: 'Patientenmanagement benötigt. HIPAA. Versicherung.',
        solution: 'Gebaut. Terminplanung. Abrechnung. Patientenportal.',
        results: ['weniger Verwaltungszeit', 'jährliche Kosteneinsparung', 'Patientenzufriedenheit'],
        timeline: '4 Monate',
        status: 'Erfolgreich deployed',
      },
      {
        type: 'Kundenprojekt',
        industry: 'Hospitality',
        challenge:
          'Die Eigentümer mussten die Immobilie aus der Ferne steuern, Zimmer bei Bedarf blockieren, echte Performance sehen und Schlüsselübergaben stoppen, die an der Rezeption vorbeigingen. Zahlungen und Restaurantservice mussten in einem auditierbaren Ablauf bleiben.',
        solution:
          'Ein vollständiges Hotel-OS: Online-Buchung von Aufenthalten und Konferenzräumen, rollenbasierter Zugriff, Stripe-gestützte Zahlungsmethoden und smarte Karten aus dem Dashboard.',
        results: ['Rollenebenen vom Eigentümer bis zu Rezeption und Restaurant', 'Betrieb, Buchungen und Zugang in einem Dashboard', 'Gästebuchung und smarter Zugang in Produktion'],
        timeline: '2 Monate',
        status: 'Live',
      },
    ],
    process: [
      {
        phase: 'Discovery',
        duration: '1 Tag',
        activities: ['Stakeholder-Interviews', 'Definition von Agenten und Workflows', 'Technische Machbarkeit', 'Projekt-Roadmap'],
        deliverables: ['Anforderungsdokument', 'Spezifikation der Agentenarchitektur', 'Projektzeitplan', 'Kostenschätzung'],
      },
      {
        phase: 'Design',
        duration: '1 Woche',
        activities: ['Design der Agentenarchitektur', 'Mapping autonomer Workflows', 'Datenbankdesign', 'API-Spezifikation'],
        deliverables: ['Agentendesign-Dokument', 'Workflow-Diagramme', 'Datenbankschema', 'API-Dokumentation'],
      },
      {
        phase: 'Entwicklung',
        duration: '2-10 Wochen',
        activities: ['Agentenimplementierung', 'Workflow-Automatisierung', 'LLM-Integration', 'QA und Optimierung'],
        deliverables: ['Funktionierende agentische Software', 'Testberichte', 'Dokumentation', 'Trainingsmaterialien'],
      },
      {
        phase: 'Launch und Support',
        duration: 'Laufend',
        activities: ['Deployment in Produktion', 'Agenten-Tuning', 'Performance-Monitoring', 'Kontinuierliche Verbesserung'],
        deliverables: ['Live agentische Anwendung', 'Support-Dokumentation', 'Monitoring-Setup', 'Wartungsplan'],
      },
    ],
  },
  ar: {
    apps: [
      { description: 'الذكاء الاصطناعي ينشئ العروض. في دقائق، لا ساعات.', category: 'أتمتة الأعمال', status: 'مباشر' },
      { description: 'إدارة مشاريع. رؤى ذكاء اصطناعي. تعاون الفريق.', category: 'الإنتاجية', status: 'Beta' },
      {
        description:
          'أدر الفندق من أي مكان: الحجوزات، الغرف، المفاتيح، والمدفوعات في مركز تحكم واحد. وصول قائم على الأدوار، بطاقات أبواب ذكية، ورؤية كاملة للمستثمرين والفريق.',
        category: 'الضيافة',
        status: 'مباشر',
      },
      { description: 'الذكاء الاصطناعي يكتب تسويقك. بسرعة.', category: 'التسويق', status: 'مباشر' },
    ],
    services: [
      {
        description: 'MVP من نوع AI-native مع مسارات عمل مستقلة. 7 أيام-أسبوعان. للشركات الناشئة.',
        process: ['تصميم الوكلاء', 'أتمتة مسارات العمل', 'تكامل الذكاء الاصطناعي', 'الاختبار والإطلاق'],
        timeline: '7 أيام-أسبوعان',
      },
      {
        description: 'وكلاء ذكاء اصطناعي قابلة للتوسع. مستقلة. آمنة. تنسيق متعدد الوكلاء. أسبوعان-شهر واحد.',
        process: ['هندسة الوكلاء', 'تصميم مسارات عمل مستقلة', 'تكامل LLM', 'النشر والتدريب'],
        timeline: 'أسبوعان-شهر واحد',
      },
      {
        description: 'Agentic Softwares كاملة. أتمتة ذكية. متعددة المستأجرين. ملكك أنت. شهر واحد-3 أشهر.',
        process: ['استراتيجية الوكلاء', 'هندسة المنصة', 'تطوير متعدد الوكلاء', 'دعم go-to-market'],
        timeline: 'شهر واحد-3 أشهر',
      },
    ],
    technologyCategories: ['الذكاء الاصطناعي والوكلاء', 'الواجهة والخلفية', 'Cloud و DevOps', 'البيانات والتكامل'],
    caseStudies: [
      {
        type: 'مشروع داخلي',
        industry: 'أتمتة الأعمال',
        challenge: 'عروض يدوية. بطيئة. صفقات ضائعة.',
        solution: 'الذكاء الاصطناعي ينشئ العروض. دقائق. احترافية. جاهزة للإرسال.',
        results: ['إنشاء عروض أسرع', 'عرض تم إنشاؤه', 'تقييم رضا المستخدمين'],
        timeline: '3 أشهر',
        status: 'مباشر وينمو',
      },
      {
        type: 'مشروع عميل',
        industry: 'الرعاية الصحية',
        challenge: 'احتاجوا إدارة مرضى. HIPAA. تأمين.',
        solution: 'بنيناها. جدولة. فوترة. بوابة مرضى.',
        results: ['انخفاض في الوقت الإداري', 'توفير سنوي في التكاليف', 'درجة رضا المرضى'],
        timeline: '4 أشهر',
        status: 'تم نشره بنجاح',
      },
      {
        type: 'مشروع عميل',
        industry: 'الضيافة',
        challenge:
          'احتاج المالكون إلى إدارة العقار عن بُعد، حجب الغرف عند الطلب، رؤية الأداء الحقيقي، وإيقاف تسليم المفاتيح خارج مكتب الاستقبال. كان يجب أن تبقى المدفوعات وخدمة المطعم ضمن مسار قابل للتدقيق.',
        solution:
          'نظام تشغيل فندقي كامل: حجز إلكتروني للإقامات وقاعات المؤتمرات، وصول قائم على الأدوار، طرق دفع مدعومة بـ Stripe، وبطاقات ذكية تصدر من لوحة التحكم.',
        results: ['مستويات أدوار من المالك إلى الاستقبال والمطعم', 'العمليات والحجوزات والوصول في لوحة تحكم واحدة', 'حجز ضيوف ووصول ذكي في الإنتاج'],
        timeline: 'شهران',
        status: 'مباشر',
      },
    ],
    process: [
      {
        phase: 'الاكتشاف',
        duration: 'يوم واحد',
        activities: ['مقابلات أصحاب المصلحة', 'تعريف الوكلاء ومسارات العمل', 'الجدوى التقنية', 'خارطة طريق المشروع'],
        deliverables: ['وثيقة المتطلبات', 'مواصفة هندسة الوكلاء', 'جدول المشروع', 'تقدير التكلفة'],
      },
      {
        phase: 'التصميم',
        duration: 'أسبوع واحد',
        activities: ['تصميم هندسة الوكلاء', 'رسم مسارات العمل المستقلة', 'تصميم قاعدة البيانات', 'مواصفة API'],
        deliverables: ['وثيقة تصميم الوكلاء', 'مخططات مسارات العمل', 'مخطط قاعدة البيانات', 'توثيق API'],
      },
      {
        phase: 'التطوير',
        duration: '2-10 أسابيع',
        activities: ['تنفيذ الوكلاء', 'أتمتة مسارات العمل', 'تكامل LLM', 'ضمان الجودة والتحسين'],
        deliverables: ['برمجية وكيلة عاملة', 'تقارير اختبار', 'توثيق', 'مواد تدريب'],
      },
      {
        phase: 'الإطلاق والدعم',
        duration: 'مستمر',
        activities: ['النشر إلى الإنتاج', 'ضبط الوكلاء', 'مراقبة الأداء', 'تحسين مستمر'],
        deliverables: ['تطبيق وكيل مباشر', 'توثيق الدعم', 'إعداد المراقبة', 'خطة صيانة'],
      },
    ],
  },
}

export default function AgenticSoftwaresPage({ params, searchParams }: AgenticSoftwaresPageProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const copy = agenticSoftwaresCopy[language]
  const cta = getCtaButtonText(language)
  const pageJsonLd = getServicePageJsonLd('agentic-softwares', locale)
  const ourApps = [
    {
      title: 'Proposal Agent',
      description: localizeAgentic(language, 'AI creates proposals. Minutes, not hours.'),
      category: localizeAgentic(language, 'Business Automation'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://voicetoproposal.ai',
      tech: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
      icon: '📝'
    },
    {
      title: 'TaskFlow Pro',
      description: localizeAgentic(language, 'Project management. AI insights. Team collaboration.'),
      category: localizeAgentic(language, 'Productivity'),
      status: localizeAgentic(language, 'Beta'),
      link: 'https://taskflow-pro.com',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
      icon: '⚡'
    },
    {
      title: 'Kabinda Lodge',
      description:
        localizeAgentic(language, 'Run the hotel from anywhere, bookings, rooms, keys, and payments in one command center. Role-based access, smart door cards, and full visibility for investors and staff.'),
      category: localizeAgentic(language, 'Hospitality'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://kabinda-lodge.com/',
      tech: ['Next.js', 'OpenAI', 'Supabase', 'Stripe'],
      icon: '🏨'
    },
    {
      title: 'ContentCraft AI',
      description: localizeAgentic(language, 'AI writes your marketing. Fast.'),
      category: localizeAgentic(language, 'Marketing'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://contentcraft-ai.com',
      tech: ['Vue.js', 'GPT-4', 'Redis', 'AWS'],
      icon: '✍️'
    }
  ]

  const services = [
    {
      title: localizeAgentic(language, 'Agentic MVP'),
      description: localizeAgentic(language, 'AI-native MVP with autonomous workflows. 7 days–2 weeks. For startups.'),
      process: [localizeAgentic(language, 'Agent Design'), localizeAgentic(language, 'Workflow Automation'), localizeAgentic(language, 'AI Integration'), localizeAgentic(language, 'Testing & Launch')],
      timeline: localizeAgentic(language, '7 days–2 weeks'),
      icon: '🤖'
    },
    {
      title: localizeAgentic(language, 'Enterprise Agentic Software'),
      description: localizeAgentic(language, 'AI agents that scale. Autonomous. Secure. Multi-agent orchestration. 2 weeks–1 month.'),
      process: [localizeAgentic(language, 'Agent Architecture'), localizeAgentic(language, 'Autonomous Workflow Design'), localizeAgentic(language, 'LLM Integration'), localizeAgentic(language, 'Deployment & Training')],
      timeline: localizeAgentic(language, '2 weeks–1 month'),
      icon: '🏢'
    },
    {
      title: localizeAgentic(language, 'Agentic Softwares Platform'),
      description: localizeAgentic(language, 'Full Agentic Softwares. Intelligent automation. Multi-tenant. You own it. 1 month–3 months.'),
      process: [localizeAgentic(language, 'Agent Strategy'), localizeAgentic(language, 'Platform Architecture'), localizeAgentic(language, 'Multi-Agent Development'), localizeAgentic(language, 'Go-to-Market Support')],
      timeline: localizeAgentic(language, '1 month–3 months'),
      icon: '☁️'
    }
  ]

  const technologies = [
    {
      category: localizeAgentic(language, 'AI & Agents'),
      tools: ['LangChain', 'OpenAI API', 'Anthropic', 'Vector DBs', 'Agent Frameworks'],
      icon: '🤖'
    },
    {
      category: localizeAgentic(language, 'Frontend & Backend'),
      tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      category: localizeAgentic(language, 'Cloud & DevOps'),
      tools: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
      icon: '☁️'
    },
    {
      category: localizeAgentic(language, 'Data & Integration'),
      tools: ['PostgreSQL', 'Supabase', 'Redis', 'API Integrations', 'Webhooks'],
      icon: '📊'
    }
  ]

  const caseStudies = [
    {
      title: 'Proposal Agent',
      type: localizeAgentic(language, 'Internal Project'),
      industry: localizeAgentic(language, 'Business Automation'),
      challenge: localizeAgentic(language, 'Manual proposals. Slow. Lost deals.'),
      solution: localizeAgentic(language, 'AI creates proposals. Minutes. Professional. Shipped.'),
      results: [
        { metric: '90%', description: localizeAgentic(language, 'Faster proposal creation') },
        { metric: '10k+', description: localizeAgentic(language, 'Proposals generated') },
        { metric: '4.8/5', description: localizeAgentic(language, 'User satisfaction rating') }
      ],
      tech: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
      timeline: localizeAgentic(language, '3 months'),
      status: localizeAgentic(language, 'Live & Growing')
    },
    {
      title: 'HealthTrack Pro',
      type: localizeAgentic(language, 'Client Project'),
      industry: localizeAgentic(language, 'Healthcare'),
      challenge: localizeAgentic(language, 'Needed patient management. HIPAA. Insurance.'),
      solution: localizeAgentic(language, 'Built it. Scheduling. Billing. Patient portal.'),
      results: [
        { metric: '60%', description: localizeAgentic(language, 'Reduction in administrative time') },
        { metric: '$200k', description: localizeAgentic(language, 'Annual cost savings') },
        { metric: '95%', description: localizeAgentic(language, 'Patient satisfaction score') }
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      timeline: localizeAgentic(language, '4 months'),
      status: localizeAgentic(language, 'Successfully Deployed')
    },
    {
      title: 'Kabinda Lodge',
      type: localizeAgentic(language, 'Client Project'),
      industry: localizeAgentic(language, 'Hospitality'),
      challenge:
        localizeAgentic(language, 'Owners needed to run the property from a distance, block rooms on demand, see real performance, and stop key handoffs that bypass the front desk. Payments and restaurant service had to stay in one auditable flow.'),
      solution:
        localizeAgentic(language, 'A full hotel OS: online stays and conference-room booking, role-based access from super admin to restaurant lead, Stripe-backed payment methods, and smart cards issued from the dashboard so room access stays tied to the system.'),
      results: [
        { metric: '4+', description: localizeAgentic(language, 'Role levels from owner to front desk & restaurant') },
        { metric: '360°', description: localizeAgentic(language, 'Operations, bookings, and access in one dashboard') },
        { metric: localizeAgentic(language, 'Live'), description: localizeAgentic(language, 'Production guest booking & smart access') }
      ],
      tech: ['Next.js', 'OpenAI', 'Supabase', 'Stripe'],
      timeline: localizeAgentic(language, '2 months'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://kabinda-lodge.com/'
    }
  ]

  const process = [
    {
      phase: localizeAgentic(language, 'Discovery'),
      duration: localizeAgentic(language, '1 day'),
      activities: [localizeAgentic(language, 'Stakeholder interviews'), localizeAgentic(language, 'Agent & workflow definition'), localizeAgentic(language, 'Technical feasibility'), localizeAgentic(language, 'Project roadmap')],
      deliverables: [localizeAgentic(language, 'Requirements document'), localizeAgentic(language, 'Agent architecture spec'), localizeAgentic(language, 'Project timeline'), localizeAgentic(language, 'Cost estimate')]
    },
    {
      phase: localizeAgentic(language, 'Design'),
      duration: localizeAgentic(language, '1 week'),
      activities: [localizeAgentic(language, 'Agent architecture design'), localizeAgentic(language, 'Autonomous workflow mapping'), localizeAgentic(language, 'Database design'), localizeAgentic(language, 'API specification')],
      deliverables: [localizeAgentic(language, 'Agent design doc'), localizeAgentic(language, 'Workflow diagrams'), localizeAgentic(language, 'Database schema'), localizeAgentic(language, 'API documentation')]
    },
    {
      phase: localizeAgentic(language, 'Development'),
      duration: localizeAgentic(language, '2-10 weeks'),
      activities: [localizeAgentic(language, 'Agent implementation'), localizeAgentic(language, 'Workflow automation'), localizeAgentic(language, 'LLM integration'), localizeAgentic(language, 'QA & optimization')],
      deliverables: [localizeAgentic(language, 'Working agentic software'), localizeAgentic(language, 'Test reports'), localizeAgentic(language, 'Documentation'), localizeAgentic(language, 'Training materials')]
    },
    {
      phase: localizeAgentic(language, 'Launch & Support'),
      duration: localizeAgentic(language, 'Ongoing'),
      activities: [localizeAgentic(language, 'Deployment to production'), localizeAgentic(language, 'Agent tuning'), localizeAgentic(language, 'Performance monitoring'), localizeAgentic(language, 'Continuous improvement')],
      deliverables: [localizeAgentic(language, 'Live agentic application'), localizeAgentic(language, 'Support documentation'), localizeAgentic(language, 'Monitoring setup'), localizeAgentic(language, 'Maintenance plan')]
    }
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(pageJsonLd)}
      />
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh">
        <PremiumHeroBackdrop />
        <PremiumHeroParallax className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-info/10 border border-info/30 rounded-full text-info text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {copy.heroBadge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              {copy.heroTitlePrefix}{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">{copy.heroTitleHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2">
              {copy.heroDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 mt-2">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
              >
                <span className="font-semibold text">10+ years</span> {copy.proofYears}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
              >
                <span className="font-semibold text">98%</span> {copy.proofSatisfaction}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center px-2 mt-4 sm:mt-6"
            >
              <a
                {...getBookingLinkProps()}
                className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                {copy.heroCta}
              </a>
            </motion.div>
          </motion.div>
        </PremiumHeroParallax>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      {/* Our SaaS Applications */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              {copy.applicationsTitle}{' '}
              <br />
              <span className="gradient-text">{copy.applicationsHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.applicationsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ourApps.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 md:p-8 hover:border-info/50 group"
              >
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <div className="w-12 h-12 bg-info/10 rounded-xl flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                      {app.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg md:text-xl font-bold group-hover:text-info transition-colors">
                        {app.title}
                      </h3>
                      <span className="text-sm text-muted-dark">{app.category}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                    app.status === localizeAgentic(language, 'Live') ? 'bg-success/10 text-success' :
                    app.status === localizeAgentic(language, 'Beta') ? 'bg-warning/10 text-warning' :
                    'bg-info/10 text-info'
                  }`}>
                    {app.status}
                  </span>
                </div>

                <p className="text-muted leading-relaxed mb-6">{app.description}</p>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">{copy.technologiesLabel}</span>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-surface-light rounded text-xs text-muted-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {app.status === localizeAgentic(language, 'Live') && (
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full"
                    >
                      {copy.viewApplication}
                    </a>
                  )}
                  {app.status === localizeAgentic(language, 'Beta') && (
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full"
                    >
                      {copy.requestBeta}
                    </a>
                  )}
                  {app.status === 'Coming Soon' && (
                    <button className="btn-outline w-full cursor-not-allowed" disabled>
                      {copy.comingSoon}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {copy.servicesTitle}{' '}
              <br />
              <span className="gradient-text">{copy.servicesHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.servicesSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 md:p-8 hover:border-info/50 group"
              >
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-info/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl md:text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-4 group-hover:text-info transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-dark">{copy.timelineLabel}</span>
                    <span className="text-info font-medium">{service.timeline}</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">{copy.processLabel}</span>
                    <div className="space-y-2">
                      {service.process.map((step, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-info/10 rounded-full flex items-center justify-center text-xs font-bold text-info">
                            {j + 1}
                          </div>
                          <span className="text-sm text-muted">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    {...getBookingLinkProps()}
                    className="btn-secondary w-full text-center"
                  >
                    {cta.discussProject}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {copy.stackTitle}{' '}
              <br />
              <span className="gradient-text">{copy.stackHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.stackSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="text-3xl md:text-4xl mb-4">{tech.icon}</div>
                <h3 className="font-display text-base md:text-lg font-bold mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool, j) => (
                    <div key={j} className="text-sm text-muted">{tool}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {copy.storiesTitle}{' '}
              <br />
              <span className="gradient-text">{copy.storiesHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.storiesSubtitle}
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="card p-6 md:p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          study.type === localizeAgentic(language, 'Internal Project') 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-info/10 text-info'
                        }`}>
                          {study.type}
                        </span>
                        <span className="px-3 py-1 bg-surface-light text-muted-dark text-xs font-medium rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold">{study.title}</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.challengeLabel}</span>
                        <p className="text-muted mt-2 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.solutionLabel}</span>
                        <p className="text-text mt-2 leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.timelineLabel.replace(':', '')}</span>
                          <p className="text-info font-medium mt-1">{study.timeline}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.statusLabel}</span>
                          <p className="text-accent font-medium mt-1">{study.status}</p>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.technologiesLabel}</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {study.tech.map((tech, j) => (
                            <span
                              key={j}
                              className="px-3 py-1 bg-surface-light rounded-full text-xs text-muted-dark"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {'link' in study && study.link ? (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex w-full sm:w-auto justify-center text-center"
                        >
                          {copy.liveProduct}
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0">
                    <h4 className="font-display text-lg md:text-xl font-bold mb-4 md:mb-6">{copy.resultsLabel}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
                      {study.results.map((result, j) => (
                        <div key={j} className="text-center">
                          <div className="font-display text-2xl md:text-3xl font-bold text-info mb-2">
                            {result.metric}
                          </div>
                          <p className="text-muted text-sm">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {copy.processTitle}{' '}
              <br />
              <span className="gradient-text">{copy.processHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.processSubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {process.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 md:p-8"
              >
                <div className="grid lg:grid-cols-4 gap-4 md:gap-6">
                  <div>
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-info/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-info text-sm md:text-base">{i + 1}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg md:text-xl font-bold">{phase.phase}</h3>
                        <span className="text-info text-sm font-medium">{phase.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">{copy.activitiesLabel}</span>
                    <div className="space-y-1">
                      {phase.activities.map((activity, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-info rounded-full" />
                          <span className="text-sm text-muted">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">{copy.deliverablesLabel}</span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {copy.finalTitle}
          </h2>
          <p className="text-muted text-lg mb-8">
            {copy.finalDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <StripeCheckoutButton
              plan="agentic_deposit"
              className="btn-primary text-lg px-8 py-4"
              redirectingLabel={cta.checkoutRedirecting}
            >
              {cta.payProjectDeposit}
            </StripeCheckoutButton>
            <a
              {...getBookingLinkProps()}
              className="btn-secondary text-lg px-8 py-4"
            >
              {cta.startProject}
            </a>
            <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
              {copy.moreCaseStudies}
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}