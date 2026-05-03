'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import { getCtaButtonText, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'

const solutionsCopy = {
  en: {
    badge: 'Our Solutions',
    heroPrefix: "We don't just fix problems.",
    heroHighlight: 'We build growth engines.',
    heroDescription:
      'Comprehensive growth infrastructure solutions that transform chaos into clients and turn your business into a predictable, scalable growth machine.',
    proofYears: 'building growth systems',
    proofSatisfaction: 'client satisfaction',
    labels: {
      problem: 'The Problem',
      solution: 'Our Solution',
      impact: 'The Impact',
      timeline: 'Timeline',
      investment: 'Investment',
      included: "What's Included",
      deliverables: 'Key Deliverables',
    },
    solutions: [
      {
        id: 'lead-generation',
        title: 'Lead Generation & Growth',
        subtitle: 'Turn Visitors Into Customers',
        problem:
          "Struggling to attract quality leads consistently? Your current marketing efforts aren't generating the pipeline you need to grow.",
        solution:
          'We build comprehensive lead generation engines that work 24/7. From optimized websites and conversion funnels to targeted advertising and SEO strategies that bring qualified prospects to your door.',
        impact:
          'Predictable pipeline of qualified prospects flowing into your business every month, with clear ROI tracking and optimization.',
        features: [
          'High-Converting Landing Pages',
          'Lead Capture & Nurturing Systems',
          'SEO & Content Marketing',
          'Paid Advertising Management',
          'Conversion Rate Optimization',
          'Analytics & Attribution Tracking',
        ],
        deliverables: [
          'Custom lead generation website',
          'Email marketing automation',
          'Social media advertising campaigns',
          'SEO strategy and implementation',
          'Lead scoring and qualification system',
          'Monthly performance reports',
        ],
        timeline: '4-8 weeks',
        investment: 'Starting from $5,000',
      },
      {
        id: 'operational-efficiency',
        title: 'Operational Efficiency',
        subtitle: 'Automate Your Way to Scale',
        problem:
          "Manual processes eating up your team's time? Disconnected tools causing errors and inefficiencies? You're spending more time on admin than growing your business.",
        solution:
          'Custom CRM systems, automated workflows, seamless integrations, and real-time analytics dashboards that eliminate manual work and give you complete visibility into your operations.',
        impact:
          '10x productivity increase and error-free operations that scale with your growth, freeing your team to focus on high-value activities.',
        features: [
          'Custom CRM Development',
          'Workflow Automation',
          'System Integrations',
          'Real-time Dashboards',
          'Process Optimization',
          'Team Collaboration Tools',
        ],
        deliverables: [
          'Fully integrated CRM system',
          'Automated business processes',
          'Real-time analytics dashboard',
          'Team training and documentation',
          'System maintenance and support',
          'Performance monitoring setup',
        ],
        timeline: '6-12 weeks',
        investment: 'Starting from $10,000',
      },
      {
        id: 'customer-experience',
        title: 'Customer Experience Transformation',
        subtitle: 'Delight Every Customer, Every Time',
        problem:
          'Losing clients due to poor experience? Inconsistent touchpoints and confusing customer journeys are driving potential clients away before they can see your value.',
        solution:
          'End-to-end customer journey mapping, personalized messaging systems, retention automation, and experience optimization that turns customers into raving fans.',
        impact:
          'Higher customer satisfaction, increased lifetime value, and powerful referral engines that drive organic growth through word-of-mouth.',
        features: [
          'Customer Journey Mapping',
          'Personalization Systems',
          'Retention Automation',
          'Feedback Collection & Analysis',
          'Loyalty Program Development',
          'Customer Support Optimization',
        ],
        deliverables: [
          'Complete customer journey audit',
          'Personalized communication system',
          'Automated retention campaigns',
          'Customer feedback platform',
          'Loyalty program implementation',
          'Customer success metrics dashboard',
        ],
        timeline: '6-10 weeks',
        investment: 'Starting from $7,500',
      },
    ],
    processTitle: 'Our Proven Process',
    processSubtitle: 'A systematic approach to building your growth infrastructure',
    processSteps: [
      {
        step: '01',
        title: 'Discovery & Audit',
        description: 'We analyze your current systems, identify bottlenecks, and map out opportunities for growth.',
        duration: '1-2 weeks',
      },
      {
        step: '02',
        title: 'Strategy & Planning',
        description: 'Custom growth infrastructure blueprint tailored to your business goals and constraints.',
        duration: '1 week',
      },
      {
        step: '03',
        title: 'Development & Implementation',
        description: 'Building and deploying your growth systems with regular progress updates and feedback loops.',
        duration: '4-10 weeks',
      },
      {
        step: '04',
        title: 'Testing & Optimization',
        description: 'Rigorous testing, performance optimization, and fine-tuning for maximum impact.',
        duration: '1-2 weeks',
      },
      {
        step: '05',
        title: 'Launch & Support',
        description: 'Smooth launch with team training, documentation, and ongoing support for continued success.',
        duration: 'Ongoing',
      },
    ],
    resultsTitle: 'Results Our Clients Achieve',
    resultsSubtitle: 'Measurable outcomes from real implementations across industries.',
    stats: [
      { metric: '85%', label: 'Reduction in missed leads' },
      { metric: '$200k+', label: 'Monthly revenue increase' },
      { metric: '60%', label: 'Time saved on operations' },
      { metric: '95%', label: 'Client satisfaction rate' },
    ],
    comparisonTitle: 'Before vs. After',
    comparisonSubtitle: 'See the transformation our solutions deliver',
    beforeTitle: 'Before: The Chaos',
    before: [
      'Manual processes eating up valuable time',
      'Disconnected tools causing data silos',
      'Inconsistent customer experiences',
      "No visibility into what's working",
      'Team burnout from repetitive tasks',
      'Missed opportunities and lost revenue',
      'Scaling feels impossible and overwhelming',
    ],
    afterTitle: 'After: The Growth Engine',
    after: [
      'Automated systems running 24/7',
      'Integrated tools providing unified insights',
      'Consistent, delightful customer journeys',
      'Real-time analytics and optimization',
      'Team focused on high-value activities',
      'Predictable revenue and growth',
      'Scaling becomes systematic and sustainable',
    ],
    ctaTitle: 'Ready to Build Your Growth Engine?',
    ctaDescription:
      "Let's discuss which solution is right for your business and create a custom implementation plan.",
    successStories: 'See Success Stories',
  },
  fr: {
    badge: 'Nos solutions',
    heroPrefix: 'Nous ne faisons pas que résoudre des problèmes.',
    heroHighlight: 'Nous construisons des moteurs de croissance.',
    heroDescription:
      'Des infrastructures de croissance complètes qui transforment le chaos en clients et rendent votre activité prévisible, scalable et rentable.',
    proofYears: 'à construire des systèmes de croissance',
    proofSatisfaction: 'de satisfaction client',
    labels: {
      problem: 'Le problème',
      solution: 'Notre solution',
      impact: "L'impact",
      timeline: 'Délai',
      investment: 'Investissement',
      included: 'Ce qui est inclus',
      deliverables: 'Livrables clés',
    },
    solutions: [
      {
        id: 'lead-generation',
        title: 'Génération de leads & croissance',
        subtitle: 'Transformez vos visiteurs en clients',
        problem:
          "Vous avez du mal à attirer régulièrement des leads qualifiés ? Vos actions marketing actuelles ne créent pas le pipeline dont vous avez besoin pour grandir.",
        solution:
          'Nous construisons des moteurs de génération de leads qui travaillent 24/7 : sites optimisés, tunnels de conversion, publicité ciblée et stratégies SEO qui amènent les bons prospects jusqu’à vous.',
        impact:
          'Un flux prévisible de prospects qualifiés chaque mois, avec un suivi clair du ROI et une optimisation continue.',
        features: [
          'Landing pages à forte conversion',
          'Systèmes de capture et de nurturing',
          'SEO et marketing de contenu',
          'Gestion de publicité payante',
          'Optimisation du taux de conversion',
          'Analytics et attribution',
        ],
        deliverables: [
          'Site de génération de leads sur mesure',
          'Automatisation email marketing',
          'Campagnes publicitaires social media',
          'Stratégie SEO et mise en œuvre',
          'Système de scoring et qualification des leads',
          'Rapports de performance mensuels',
        ],
        timeline: '4 à 8 semaines',
        investment: 'À partir de 5 000 $',
      },
      {
        id: 'operational-efficiency',
        title: 'Efficacité opérationnelle',
        subtitle: 'Automatisez pour passer à l’échelle',
        problem:
          "Les tâches manuelles absorbent le temps de votre équipe ? Vos outils déconnectés créent erreurs et lenteurs ? Vous passez plus de temps sur l’administratif que sur la croissance.",
        solution:
          'CRM sur mesure, workflows automatisés, intégrations fluides et tableaux de bord en temps réel qui éliminent le travail manuel et donnent une visibilité complète sur vos opérations.',
        impact:
          'Une productivité multipliée par 10 et des opérations fiables qui suivent votre croissance, pour libérer votre équipe sur les activités à forte valeur.',
        features: [
          'Développement CRM sur mesure',
          'Automatisation des workflows',
          'Intégrations systèmes',
          'Tableaux de bord temps réel',
          'Optimisation des processus',
          'Outils de collaboration équipe',
        ],
        deliverables: [
          'CRM entièrement intégré',
          'Processus métier automatisés',
          'Tableau de bord analytics temps réel',
          'Formation équipe et documentation',
          'Maintenance et support système',
          'Suivi de performance configuré',
        ],
        timeline: '6 à 12 semaines',
        investment: 'À partir de 10 000 $',
      },
      {
        id: 'customer-experience',
        title: 'Transformation de l’expérience client',
        subtitle: 'Ravissez chaque client, à chaque interaction',
        problem:
          'Vous perdez des clients à cause d’une expérience confuse ? Des points de contact incohérents et des parcours compliqués éloignent les prospects avant qu’ils voient votre valeur.',
        solution:
          'Cartographie complète du parcours client, systèmes de personnalisation, automatisations de rétention et optimisation de l’expérience pour transformer vos clients en ambassadeurs.',
        impact:
          'Plus de satisfaction, une valeur vie client plus élevée et un moteur de recommandations qui nourrit la croissance organique.',
        features: [
          'Cartographie du parcours client',
          'Systèmes de personnalisation',
          'Automatisation de la rétention',
          'Collecte et analyse des retours',
          'Développement de programme fidélité',
          'Optimisation du support client',
        ],
        deliverables: [
          'Audit complet du parcours client',
          'Système de communication personnalisé',
          'Campagnes de rétention automatisées',
          'Plateforme de feedback client',
          'Programme fidélité déployé',
          'Tableau de bord succès client',
        ],
        timeline: '6 à 10 semaines',
        investment: 'À partir de 7 500 $',
      },
    ],
    processTitle: 'Notre processus éprouvé',
    processSubtitle: 'Une méthode structurée pour construire votre infrastructure de croissance',
    processSteps: [
      {
        step: '01',
        title: 'Découverte & audit',
        description: 'Nous analysons vos systèmes actuels, identifions les blocages et cartographions les opportunités de croissance.',
        duration: '1 à 2 semaines',
      },
      {
        step: '02',
        title: 'Stratégie & planification',
        description: 'Un blueprint d’infrastructure de croissance adapté à vos objectifs et contraintes.',
        duration: '1 semaine',
      },
      {
        step: '03',
        title: 'Développement & implémentation',
        description: 'Construction et déploiement de vos systèmes avec des points d’avancement et des boucles de feedback réguliers.',
        duration: '4 à 10 semaines',
      },
      {
        step: '04',
        title: 'Tests & optimisation',
        description: 'Tests rigoureux, optimisation des performances et ajustements pour maximiser l’impact.',
        duration: '1 à 2 semaines',
      },
      {
        step: '05',
        title: 'Lancement & support',
        description: 'Lancement fluide avec formation, documentation et support continu pour maintenir les résultats.',
        duration: 'Continu',
      },
    ],
    resultsTitle: 'Les résultats obtenus par nos clients',
    resultsSubtitle: 'Des résultats mesurables issus d’implémentations réelles dans plusieurs secteurs.',
    stats: [
      { metric: '85%', label: 'de leads manqués en moins' },
      { metric: '$200k+', label: 'de revenus mensuels supplémentaires' },
      { metric: '60%', label: 'de temps opérationnel économisé' },
      { metric: '95%', label: 'de satisfaction client' },
    ],
    comparisonTitle: 'Avant vs après',
    comparisonSubtitle: 'Voyez la transformation que nos solutions apportent',
    beforeTitle: 'Avant : le chaos',
    before: [
      'Processus manuels qui consomment un temps précieux',
      'Outils déconnectés qui créent des silos de données',
      'Expériences client incohérentes',
      'Aucune visibilité sur ce qui fonctionne',
      'Équipe épuisée par les tâches répétitives',
      'Opportunités manquées et revenus perdus',
      'La mise à l’échelle paraît impossible',
    ],
    afterTitle: 'Après : le moteur de croissance',
    after: [
      'Systèmes automatisés actifs 24/7',
      'Outils intégrés avec une vision unifiée',
      'Parcours client cohérents et mémorables',
      'Analytics et optimisation en temps réel',
      'Équipe concentrée sur les activités à forte valeur',
      'Revenus et croissance prévisibles',
      'La croissance devient structurée et durable',
    ],
    ctaTitle: 'Prêt à construire votre moteur de croissance ?',
    ctaDescription:
      'Discutons de la solution adaptée à votre entreprise et créons un plan d’implémentation sur mesure.',
    successStories: 'Voir les success stories',
  },
  es: {
    badge: 'Nuestras soluciones',
    heroPrefix: 'No solo resolvemos problemas.',
    heroHighlight: 'Construimos motores de crecimiento.',
    heroDescription:
      'Soluciones completas de infraestructura de crecimiento que convierten el caos en clientes y hacen que tu negocio crezca de forma predecible y escalable.',
    proofYears: 'creando sistemas de crecimiento',
    proofSatisfaction: 'de satisfacción del cliente',
    labels: {
      problem: 'El problema',
      solution: 'Nuestra solución',
      impact: 'El impacto',
      timeline: 'Plazo',
      investment: 'Inversión',
      included: 'Qué incluye',
      deliverables: 'Entregables clave',
    },
    solutions: [
      {
        id: 'lead-generation',
        title: 'Generación de leads y crecimiento',
        subtitle: 'Convierte visitantes en clientes',
        problem:
          '¿Te cuesta atraer leads de calidad de forma constante? Tus acciones de marketing actuales no están creando el pipeline que necesitas para crecer.',
        solution:
          'Creamos motores completos de generación de leads que trabajan 24/7: sitios optimizados, funnels de conversión, publicidad segmentada y estrategias SEO que atraen prospectos cualificados.',
        impact:
          'Un flujo predecible de prospectos cualificados cada mes, con seguimiento claro del ROI y optimización continua.',
        features: [
          'Landing pages de alta conversión',
          'Sistemas de captura y nurturing',
          'SEO y marketing de contenidos',
          'Gestión de publicidad pagada',
          'Optimización de conversión',
          'Analytics y atribución',
        ],
        deliverables: [
          'Sitio web a medida para generar leads',
          'Automatización de email marketing',
          'Campañas de publicidad en redes sociales',
          'Estrategia SEO e implementación',
          'Sistema de scoring y calificación de leads',
          'Informes mensuales de rendimiento',
        ],
        timeline: '4 a 8 semanas',
        investment: 'Desde $5,000',
      },
      {
        id: 'operational-efficiency',
        title: 'Eficiencia operativa',
        subtitle: 'Automatiza para escalar',
        problem:
          '¿Los procesos manuales consumen el tiempo de tu equipo? ¿Las herramientas desconectadas causan errores e ineficiencias? Estás dedicando más tiempo a administración que a crecer.',
        solution:
          'CRM a medida, workflows automatizados, integraciones fluidas y dashboards en tiempo real que eliminan trabajo manual y te dan visibilidad completa de tus operaciones.',
        impact:
          'Productividad 10x y operaciones sin errores que escalan con tu crecimiento, liberando al equipo para enfocarse en actividades de alto valor.',
        features: [
          'Desarrollo CRM a medida',
          'Automatización de workflows',
          'Integraciones de sistemas',
          'Dashboards en tiempo real',
          'Optimización de procesos',
          'Herramientas de colaboración',
        ],
        deliverables: [
          'Sistema CRM totalmente integrado',
          'Procesos de negocio automatizados',
          'Dashboard de analítica en tiempo real',
          'Formación del equipo y documentación',
          'Mantenimiento y soporte del sistema',
          'Configuración de monitoreo de rendimiento',
        ],
        timeline: '6 a 12 semanas',
        investment: 'Desde $10,000',
      },
      {
        id: 'customer-experience',
        title: 'Transformación de experiencia del cliente',
        subtitle: 'Encanta a cada cliente, siempre',
        problem:
          '¿Pierdes clientes por una mala experiencia? Puntos de contacto inconsistentes y recorridos confusos alejan a los prospectos antes de que vean tu valor.',
        solution:
          'Mapeo integral del recorrido del cliente, sistemas de mensajes personalizados, automatización de retención y optimización de experiencia para convertir clientes en fans.',
        impact:
          'Mayor satisfacción, más valor de vida del cliente y motores de referidos que impulsan crecimiento orgánico.',
        features: [
          'Mapeo del recorrido del cliente',
          'Sistemas de personalización',
          'Automatización de retención',
          'Recopilación y análisis de feedback',
          'Desarrollo de programas de fidelización',
          'Optimización de soporte al cliente',
        ],
        deliverables: [
          'Auditoría completa del recorrido del cliente',
          'Sistema de comunicación personalizada',
          'Campañas automatizadas de retención',
          'Plataforma de feedback del cliente',
          'Implementación de programa de fidelización',
          'Dashboard de métricas de éxito del cliente',
        ],
        timeline: '6 a 10 semanas',
        investment: 'Desde $7,500',
      },
    ],
    processTitle: 'Nuestro proceso probado',
    processSubtitle: 'Un enfoque sistemático para construir tu infraestructura de crecimiento',
    processSteps: [
      {
        step: '01',
        title: 'Descubrimiento y auditoría',
        description: 'Analizamos tus sistemas actuales, detectamos cuellos de botella y mapeamos oportunidades de crecimiento.',
        duration: '1 a 2 semanas',
      },
      {
        step: '02',
        title: 'Estrategia y planificación',
        description: 'Blueprint de infraestructura de crecimiento adaptado a tus objetivos y restricciones.',
        duration: '1 semana',
      },
      {
        step: '03',
        title: 'Desarrollo e implementación',
        description: 'Construimos y desplegamos tus sistemas con actualizaciones frecuentes y ciclos de feedback.',
        duration: '4 a 10 semanas',
      },
      {
        step: '04',
        title: 'Pruebas y optimización',
        description: 'Pruebas rigurosas, optimización de rendimiento y ajustes para lograr el máximo impacto.',
        duration: '1 a 2 semanas',
      },
      {
        step: '05',
        title: 'Lanzamiento y soporte',
        description: 'Lanzamiento fluido con formación, documentación y soporte continuo para sostener el éxito.',
        duration: 'Continuo',
      },
    ],
    resultsTitle: 'Resultados que logran nuestros clientes',
    resultsSubtitle: 'Resultados medibles de implementaciones reales en distintos sectores.',
    stats: [
      { metric: '85%', label: 'menos leads perdidos' },
      { metric: '$200k+', label: 'más ingresos mensuales' },
      { metric: '60%', label: 'tiempo ahorrado en operaciones' },
      { metric: '95%', label: 'satisfacción del cliente' },
    ],
    comparisonTitle: 'Antes vs. después',
    comparisonSubtitle: 'Mira la transformación que entregan nuestras soluciones',
    beforeTitle: 'Antes: el caos',
    before: [
      'Procesos manuales que consumen tiempo valioso',
      'Herramientas desconectadas que crean silos de datos',
      'Experiencias de cliente inconsistentes',
      'Sin visibilidad sobre lo que funciona',
      'Equipo agotado por tareas repetitivas',
      'Oportunidades perdidas e ingresos no capturados',
      'Escalar se siente imposible y abrumador',
    ],
    afterTitle: 'Después: el motor de crecimiento',
    after: [
      'Sistemas automatizados trabajando 24/7',
      'Herramientas integradas con insights unificados',
      'Recorridos de cliente consistentes y memorables',
      'Analítica y optimización en tiempo real',
      'Equipo enfocado en actividades de alto valor',
      'Ingresos y crecimiento predecibles',
      'Escalar se vuelve sistemático y sostenible',
    ],
    ctaTitle: '¿Listo para construir tu motor de crecimiento?',
    ctaDescription:
      'Hablemos de qué solución encaja con tu negocio y creemos un plan de implementación a medida.',
    successStories: 'Ver historias de éxito',
  },
  de: {
    badge: 'Unsere Lösungen',
    heroPrefix: 'Wir lösen nicht nur Probleme.',
    heroHighlight: 'Wir bauen Wachstumsmotoren.',
    heroDescription:
      'Umfassende Wachstumsinfrastruktur, die Chaos in Kunden verwandelt und Ihr Unternehmen planbar und skalierbar wachsen lässt.',
    proofYears: 'im Aufbau von Wachstumssystemen',
    proofSatisfaction: 'Kundenzufriedenheit',
    labels: {
      problem: 'Das Problem',
      solution: 'Unsere Lösung',
      impact: 'Die Wirkung',
      timeline: 'Zeitrahmen',
      investment: 'Investition',
      included: 'Was enthalten ist',
      deliverables: 'Zentrale Ergebnisse',
    },
    solutions: [
      {
        id: 'lead-generation',
        title: 'Leadgenerierung & Wachstum',
        subtitle: 'Verwandeln Sie Besucher in Kunden',
        problem:
          'Fällt es Ihnen schwer, konstant hochwertige Leads zu gewinnen? Ihre aktuellen Marketingmaßnahmen erzeugen nicht die Pipeline, die Sie für Wachstum brauchen.',
        solution:
          'Wir bauen vollständige Leadgenerierungs-Systeme, die 24/7 arbeiten: optimierte Websites, Conversion-Funnels, gezielte Werbung und SEO-Strategien, die qualifizierte Interessenten zu Ihnen bringen.',
        impact:
          'Eine planbare Pipeline qualifizierter Interessenten jeden Monat, mit klarer ROI-Messung und laufender Optimierung.',
        features: [
          'Landingpages mit hoher Conversion',
          'Lead-Capture- und Nurturing-Systeme',
          'SEO und Content-Marketing',
          'Management bezahlter Werbung',
          'Conversion-Rate-Optimierung',
          'Analytics und Attribution',
        ],
        deliverables: [
          'Individuelle Leadgenerierungs-Website',
          'E-Mail-Marketing-Automation',
          'Social-Media-Werbekampagnen',
          'SEO-Strategie und Umsetzung',
          'Lead-Scoring- und Qualifizierungssystem',
          'Monatliche Performance-Reports',
        ],
        timeline: '4 bis 8 Wochen',
        investment: 'Ab 5.000 $',
      },
      {
        id: 'operational-efficiency',
        title: 'Operative Effizienz',
        subtitle: 'Automatisieren Sie den Weg zur Skalierung',
        problem:
          'Fressen manuelle Prozesse die Zeit Ihres Teams? Verursachen getrennte Tools Fehler und Ineffizienzen? Dann verbringen Sie mehr Zeit mit Administration als mit Wachstum.',
        solution:
          'Individuelle CRM-Systeme, automatisierte Workflows, nahtlose Integrationen und Echtzeit-Dashboards, die manuelle Arbeit eliminieren und volle Transparenz schaffen.',
        impact:
          '10x mehr Produktivität und fehlerarme Abläufe, die mit Ihrem Wachstum skalieren, damit Ihr Team sich auf wertvolle Arbeit konzentrieren kann.',
        features: [
          'Individuelle CRM-Entwicklung',
          'Workflow-Automatisierung',
          'Systemintegrationen',
          'Echtzeit-Dashboards',
          'Prozessoptimierung',
          'Tools für Teamzusammenarbeit',
        ],
        deliverables: [
          'Voll integriertes CRM-System',
          'Automatisierte Geschäftsprozesse',
          'Echtzeit-Analytics-Dashboard',
          'Teamschulung und Dokumentation',
          'Systemwartung und Support',
          'Performance-Monitoring-Setup',
        ],
        timeline: '6 bis 12 Wochen',
        investment: 'Ab 10.000 $',
      },
      {
        id: 'customer-experience',
        title: 'Transformation der Customer Experience',
        subtitle: 'Begeistern Sie jeden Kunden, jedes Mal',
        problem:
          'Verlieren Sie Kunden durch schlechte Erlebnisse? Uneinheitliche Kontaktpunkte und verwirrende Customer Journeys schrecken Interessenten ab, bevor sie Ihren Wert erkennen.',
        solution:
          'End-to-End-Customer-Journey-Mapping, personalisierte Messaging-Systeme, Retention-Automation und Experience-Optimierung, die Kunden zu Fans machen.',
        impact:
          'Höhere Kundenzufriedenheit, höherer Lifetime Value und starke Empfehlungsmechanismen für organisches Wachstum.',
        features: [
          'Customer-Journey-Mapping',
          'Personalisierungssysteme',
          'Retention-Automation',
          'Feedback-Erfassung und Analyse',
          'Entwicklung von Loyalitätsprogrammen',
          'Optimierung des Kundensupports',
        ],
        deliverables: [
          'Vollständiger Customer-Journey-Audit',
          'Personalisiertes Kommunikationssystem',
          'Automatisierte Retention-Kampagnen',
          'Kundenfeedback-Plattform',
          'Implementiertes Loyalitätsprogramm',
          'Dashboard für Customer-Success-Metriken',
        ],
        timeline: '6 bis 10 Wochen',
        investment: 'Ab 7.500 $',
      },
    ],
    processTitle: 'Unser bewährter Prozess',
    processSubtitle: 'Ein systematischer Ansatz für den Aufbau Ihrer Wachstumsinfrastruktur',
    processSteps: [
      {
        step: '01',
        title: 'Discovery & Audit',
        description: 'Wir analysieren Ihre aktuellen Systeme, identifizieren Engpässe und kartieren Wachstumschancen.',
        duration: '1 bis 2 Wochen',
      },
      {
        step: '02',
        title: 'Strategie & Planung',
        description: 'Ein individueller Blueprint für Wachstumsinfrastruktur, abgestimmt auf Ziele und Rahmenbedingungen.',
        duration: '1 Woche',
      },
      {
        step: '03',
        title: 'Entwicklung & Implementierung',
        description: 'Wir bauen und deployen Ihre Wachstumssysteme mit regelmäßigen Updates und Feedbackschleifen.',
        duration: '4 bis 10 Wochen',
      },
      {
        step: '04',
        title: 'Tests & Optimierung',
        description: 'Gründliche Tests, Performance-Optimierung und Feinschliff für maximale Wirkung.',
        duration: '1 bis 2 Wochen',
      },
      {
        step: '05',
        title: 'Launch & Support',
        description: 'Reibungsloser Launch mit Teamschulung, Dokumentation und laufendem Support.',
        duration: 'Laufend',
      },
    ],
    resultsTitle: 'Ergebnisse, die unsere Kunden erzielen',
    resultsSubtitle: 'Messbare Resultate aus realen Implementierungen in verschiedenen Branchen.',
    stats: [
      { metric: '85%', label: 'weniger verpasste Leads' },
      { metric: '$200k+', label: 'mehr Monatsumsatz' },
      { metric: '60%', label: 'Zeitersparnis im Betrieb' },
      { metric: '95%', label: 'Kundenzufriedenheit' },
    ],
    comparisonTitle: 'Vorher vs. nachher',
    comparisonSubtitle: 'Sehen Sie, welche Transformation unsere Lösungen liefern',
    beforeTitle: 'Vorher: das Chaos',
    before: [
      'Manuelle Prozesse verbrauchen wertvolle Zeit',
      'Getrennte Tools erzeugen Datensilos',
      'Uneinheitliche Kundenerlebnisse',
      'Keine Sichtbarkeit, was wirklich funktioniert',
      'Team-Burnout durch repetitive Aufgaben',
      'Verpasste Chancen und verlorener Umsatz',
      'Skalierung wirkt unmöglich und überwältigend',
    ],
    afterTitle: 'Nachher: der Wachstumsmotor',
    after: [
      'Automatisierte Systeme laufen 24/7',
      'Integrierte Tools liefern einheitliche Insights',
      'Konsistente, überzeugende Customer Journeys',
      'Echtzeit-Analytics und Optimierung',
      'Team fokussiert auf hochwertige Aufgaben',
      'Planbarer Umsatz und Wachstum',
      'Skalierung wird systematisch und nachhaltig',
    ],
    ctaTitle: 'Bereit, Ihren Wachstumsmotor zu bauen?',
    ctaDescription:
      'Lassen Sie uns besprechen, welche Lösung zu Ihrem Unternehmen passt, und einen individuellen Implementierungsplan erstellen.',
    successStories: 'Success Stories ansehen',
  },
  ar: {
    badge: 'حلولنا',
    heroPrefix: 'نحن لا نكتفي بحل المشكلات.',
    heroHighlight: 'نحن نبني محركات نمو.',
    heroDescription:
      'حلول بنية نمو متكاملة تحول الفوضى إلى عملاء وتجعل عملك آلة نمو قابلة للتوقع والتوسع.',
    proofYears: 'في بناء أنظمة النمو',
    proofSatisfaction: 'رضا العملاء',
    labels: {
      problem: 'المشكلة',
      solution: 'حلنا',
      impact: 'الأثر',
      timeline: 'المدة',
      investment: 'الاستثمار',
      included: 'ما الذي يشمله',
      deliverables: 'المخرجات الرئيسية',
    },
    solutions: [
      {
        id: 'lead-generation',
        title: 'توليد العملاء المحتملين والنمو',
        subtitle: 'حوّل الزوار إلى عملاء',
        problem:
          'هل تجد صعوبة في جذب عملاء محتملين مؤهلين باستمرار؟ جهودك التسويقية الحالية لا تبني خط المبيعات الذي تحتاجه للنمو.',
        solution:
          'نبني محركات شاملة لتوليد العملاء تعمل 24/7، من مواقع محسنة ومسارات تحويل إلى إعلانات مستهدفة واستراتيجيات SEO تجلب العملاء المؤهلين إلى بابك.',
        impact:
          'تدفق متوقع من العملاء المحتملين المؤهلين كل شهر، مع تتبع واضح للعائد وتحسين مستمر.',
        features: [
          'صفحات هبوط عالية التحويل',
          'أنظمة جذب ورعاية العملاء المحتملين',
          'SEO وتسويق المحتوى',
          'إدارة الإعلانات المدفوعة',
          'تحسين معدل التحويل',
          'التحليلات وتتبع الإسناد',
        ],
        deliverables: [
          'موقع مخصص لتوليد العملاء المحتملين',
          'أتمتة التسويق عبر البريد الإلكتروني',
          'حملات إعلانية على الشبكات الاجتماعية',
          'استراتيجية SEO وتنفيذها',
          'نظام تقييم وتأهيل العملاء المحتملين',
          'تقارير أداء شهرية',
        ],
        timeline: '4 إلى 8 أسابيع',
        investment: 'ابتداءً من 5,000$',
      },
      {
        id: 'operational-efficiency',
        title: 'الكفاءة التشغيلية',
        subtitle: 'أتمتة تقودك إلى التوسع',
        problem:
          'هل تستهلك العمليات اليدوية وقت فريقك؟ هل تسبب الأدوات المنفصلة أخطاء وتعطلاً؟ أنت تقضي وقتاً في الإدارة أكثر من تنمية العمل.',
        solution:
          'أنظمة CRM مخصصة، workflows مؤتمتة، تكاملات سلسة ولوحات بيانات فورية تزيل العمل اليدوي وتمنحك رؤية كاملة للعمليات.',
        impact:
          'زيادة إنتاجية 10x وعمليات دقيقة تتوسع مع نموك، ليتركز فريقك على الأنشطة الأعلى قيمة.',
        features: [
          'تطوير CRM مخصص',
          'أتمتة workflows',
          'تكامل الأنظمة',
          'لوحات بيانات فورية',
          'تحسين العمليات',
          'أدوات تعاون الفريق',
        ],
        deliverables: [
          'نظام CRM متكامل بالكامل',
          'عمليات أعمال مؤتمتة',
          'لوحة تحليلات فورية',
          'تدريب الفريق والتوثيق',
          'صيانة ودعم النظام',
          'إعداد مراقبة الأداء',
        ],
        timeline: '6 إلى 12 أسبوعاً',
        investment: 'ابتداءً من 10,000$',
      },
      {
        id: 'customer-experience',
        title: 'تحويل تجربة العملاء',
        subtitle: 'أسعد كل عميل في كل مرة',
        problem:
          'هل تخسر العملاء بسبب تجربة ضعيفة؟ نقاط التواصل غير المتسقة ورحلات العملاء المربكة تبعد العملاء المحتملين قبل أن يروا قيمتك.',
        solution:
          'رسم شامل لرحلة العميل، أنظمة رسائل مخصصة، أتمتة الاحتفاظ، وتحسين التجربة لتحويل العملاء إلى مؤيدين حقيقيين.',
        impact:
          'رضا أعلى، قيمة عمرية أكبر للعميل، ومحركات إحالة قوية تدفع النمو العضوي.',
        features: [
          'رسم رحلة العميل',
          'أنظمة التخصيص',
          'أتمتة الاحتفاظ بالعملاء',
          'جمع وتحليل الملاحظات',
          'تطوير برامج الولاء',
          'تحسين دعم العملاء',
        ],
        deliverables: [
          'تدقيق كامل لرحلة العميل',
          'نظام تواصل مخصص',
          'حملات احتفاظ مؤتمتة',
          'منصة ملاحظات العملاء',
          'تنفيذ برنامج ولاء',
          'لوحة مؤشرات نجاح العملاء',
        ],
        timeline: '6 إلى 10 أسابيع',
        investment: 'ابتداءً من 7,500$',
      },
    ],
    processTitle: 'عمليتنا المثبتة',
    processSubtitle: 'منهجية منظمة لبناء بنية النمو الخاصة بك',
    processSteps: [
      {
        step: '01',
        title: 'الاكتشاف والتدقيق',
        description: 'نحلل أنظمتك الحالية، نحدد الاختناقات، ونرسم فرص النمو.',
        duration: '1 إلى 2 أسبوع',
      },
      {
        step: '02',
        title: 'الاستراتيجية والتخطيط',
        description: 'مخطط بنية نمو مخصص لأهداف عملك وقيوده.',
        duration: 'أسبوع واحد',
      },
      {
        step: '03',
        title: 'التطوير والتنفيذ',
        description: 'بناء ونشر أنظمة النمو مع تحديثات منتظمة وحلقات ملاحظات.',
        duration: '4 إلى 10 أسابيع',
      },
      {
        step: '04',
        title: 'الاختبار والتحسين',
        description: 'اختبارات دقيقة وتحسين أداء وضبط نهائي لتحقيق أقصى أثر.',
        duration: '1 إلى 2 أسبوع',
      },
      {
        step: '05',
        title: 'الإطلاق والدعم',
        description: 'إطلاق سلس مع تدريب الفريق، توثيق، ودعم مستمر للنجاح.',
        duration: 'مستمر',
      },
    ],
    resultsTitle: 'النتائج التي يحققها عملاؤنا',
    resultsSubtitle: 'نتائج قابلة للقياس من تطبيقات حقيقية عبر قطاعات متعددة.',
    stats: [
      { metric: '85%', label: 'انخفاض في العملاء المحتملين المفقودين' },
      { metric: '$200k+', label: 'زيادة في الإيرادات الشهرية' },
      { metric: '60%', label: 'وقت موفر في العمليات' },
      { metric: '95%', label: 'معدل رضا العملاء' },
    ],
    comparisonTitle: 'قبل وبعد',
    comparisonSubtitle: 'شاهد التحول الذي تقدمه حلولنا',
    beforeTitle: 'قبل: الفوضى',
    before: [
      'عمليات يدوية تستهلك وقتاً ثميناً',
      'أدوات منفصلة تخلق عزلاً للبيانات',
      'تجارب عملاء غير متسقة',
      'لا توجد رؤية لما يعمل فعلاً',
      'إرهاق الفريق بسبب المهام المتكررة',
      'فرص مهدرة وإيرادات ضائعة',
      'التوسع يبدو مستحيلاً ومرهقاً',
    ],
    afterTitle: 'بعد: محرك النمو',
    after: [
      'أنظمة مؤتمتة تعمل 24/7',
      'أدوات متكاملة تقدم رؤية موحدة',
      'رحلات عملاء متسقة وممتعة',
      'تحليلات وتحسين فوري',
      'فريق يركز على الأنشطة عالية القيمة',
      'إيرادات ونمو قابلان للتوقع',
      'التوسع يصبح منهجياً ومستداماً',
    ],
    ctaTitle: 'هل أنت جاهز لبناء محرك نموك؟',
    ctaDescription:
      'دعنا نناقش الحل الأنسب لعملك وننشئ خطة تنفيذ مخصصة.',
    successStories: 'شاهد قصص النجاح',
  },
}

type SolutionsPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function SolutionsPage({ params, searchParams }: SolutionsPageProps) {
  use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const cta = getCtaButtonText(language)
  const copy = solutionsCopy[language]
  return (
    <main>
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
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {copy.badge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              {copy.heroPrefix}{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">{copy.heroHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              {copy.heroDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 mt-8">
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
          </motion.div>
        </PremiumHeroParallax>
      </section>

      {/* Solutions Grid */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            {copy.solutions.map((solution, i) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="animated-border p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-accent">
                      {solution.title}
                    </h2>
                    <p className="text-xl font-medium mb-8 text-muted">
                      {solution.subtitle}
                    </p>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-muted-dark mb-3">{copy.labels.problem}</h4>
                        <p className="text-muted leading-relaxed">{solution.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-muted-dark mb-3">{copy.labels.solution}</h4>
                        <p className="text-text leading-relaxed">{solution.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-muted-dark mb-3">{copy.labels.impact}</h4>
                        <p className="text-success leading-relaxed">{solution.impact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="card p-6 bg-surface-light">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <span className="text-muted text-sm">{copy.labels.timeline}</span>
                          <p className="font-semibold">{solution.timeline}</p>
                        </div>
                        <div>
                          <span className="text-muted text-sm">{copy.labels.investment}</span>
                          <p className="font-display text-xl font-bold text-accent">{solution.investment}</p>
                        </div>
                      </div>
                      
                      <a
                        {...getBookingLinkProps()}
                        className="btn-primary w-full text-center"
                      >
                        {cta.getStarted}
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">{copy.labels.included}</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-muted">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">{copy.labels.deliverables}</h4>
                      <ul className="space-y-2">
                        {solution.deliverables.map((deliverable, j) => (
                          <li key={j} className="flex items-center gap-2 text-muted">
                            <div className="w-1.5 h-1.5 bg-success rounded-full" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {copy.processTitle}
            </h2>
            <p className="text-muted text-lg">
              {copy.processSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {copy.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-bold text-accent">{step.step}</span>
                </div>
                <h3 className="font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted text-sm mb-2 leading-relaxed">{step.description}</p>
                <span className="text-xs text-accent font-medium">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Client Results, Proof Section */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {copy.resultsTitle}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {copy.resultsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {copy.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">{stat.metric}</div>
                <p className="text-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {copy.comparisonTitle}
            </h2>
            <p className="text-muted text-lg">
              {copy.comparisonSubtitle}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8 border-destructive/20"
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-destructive">
                {copy.beforeTitle}
              </h3>
              <ul className="space-y-4">
                {copy.before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-destructive mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8 border-success/20"
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-success">
                {copy.afterTitle}
              </h3>
              <ul className="space-y-4">
                {copy.after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-success mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {copy.ctaTitle}
          </h2>
          <p className="text-muted text-lg mb-8">
            {copy.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              {...getBookingLinkProps()}
              className="btn-primary text-lg px-8 py-4"
            >
              {cta.bookStrategy}
            </a>
            <a
              href="/case-studies"
              className="btn-secondary text-lg px-8 py-4"
            >
              {copy.successStories}
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}