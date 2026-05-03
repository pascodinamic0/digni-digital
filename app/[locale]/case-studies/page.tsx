'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import { getCtaButtonText, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { getCaseStudiesPageJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'

const caseStudiesCopy = {
  en: {
    badge: 'Case Studies',
    heroPrefix: 'Proof that transformation',
    heroHighlight: 'works.',
    heroDescription:
      "Real businesses, real results, real growth. See how we've helped companies across Africa and beyond scale without the chaos.",
    proofYears: 'building growth systems',
    proofSatisfaction: 'client satisfaction',
    challengeLabel: 'Challenge:',
    solutionDelivered: 'Solution Delivered',
    technologiesUsed: 'Technologies Used',
    collapse: 'Show Less',
    expand: 'Read Full Case Study',
    collapseAria: 'Collapse case study details',
    expandAria: 'Expand case study details',
    keyResults: 'Key Results',
    ctaTitle: 'Ready to Be Our Next Success Story?',
    ctaDescription:
      "Every business is unique, but the principles of growth remain the same. Let's discuss how we can create similar results for your business.",
    ctaButton: 'Start Your Transformation',
    filterAria: 'Filter case studies by',
    industries: [
      { id: 'all', label: 'All' },
      { id: 'healthcare', label: 'Healthcare' },
      { id: 'real-estate', label: 'Real Estate' },
      { id: 'marketing', label: 'Marketing' },
    ],
    studies: [
      {
        id: 'healthcare-clinic',
        industryId: 'healthcare',
        industry: 'Healthcare',
        title: 'Regional Healthcare Clinic',
        client: 'Fremo Medical & Birth Center',
        duration: '6 weeks',
        location: 'Lagos, Nigeria',
        challenge:
          'Manual appointment booking system leading to 40% no-shows, lost revenue, and frustrated patients. Staff spending 3+ hours daily on scheduling conflicts.',
        solution: [
          'Custom patient portal with online booking',
          'Automated SMS and email reminders',
          'Staff dashboard for schedule management',
          'Integration with existing medical records system',
          'Payment processing for consultations',
        ],
        results: [
          { metric: '85%', description: 'Reduction in no-shows', type: 'improvement' },
          { metric: '$50k', description: 'Additional monthly revenue', type: 'revenue' },
          { metric: '3 hours', description: 'Daily time savings for staff', type: 'efficiency' },
          { metric: '95%', description: 'Patient satisfaction score', type: 'satisfaction' },
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'Stripe'],
        testimonial: {
          quote:
            'Digni Digital transformed our entire patient experience. The booking system alone has saved us countless hours and significantly improved our revenue.',
          author: 'The Fremo Medical Team',
          position: 'Healthcare Staff',
        },
      },
      {
        id: 'real-estate-agency',
        industryId: 'real-estate',
        industry: 'Real Estate',
        title: 'Premium Real Estate Agency',
        client: 'Shep Engineering',
        duration: '4 weeks',
        location: 'Accra, Ghana',
        challenge:
          'Agents spending 5+ hours per property proposal, losing deals to faster competitors. Inconsistent proposal quality affecting brand reputation.',
        solution: [
          'AI-powered proposal generation system',
          'Property database with automated valuations',
          'Client portal for document sharing',
          'Mobile app for agents',
          'CRM integration for lead tracking',
        ],
        results: [
          { metric: '90%', description: 'Faster proposal delivery', type: 'efficiency' },
          { metric: '40%', description: 'Higher close rate', type: 'improvement' },
          { metric: '25', description: 'More deals per month', type: 'volume' },
          { metric: '$200k', description: 'Increased monthly revenue', type: 'revenue' },
        ],
        technologies: ['React Native', 'Express.js', 'MongoDB', 'AWS S3', 'OpenAI API'],
        testimonial: {
          quote:
            'Our agents can now create professional proposals in minutes instead of hours. This has been a game-changer for our competitive advantage.',
          author: 'The Shep Engineering Team',
          position: 'Management',
        },
      },
      {
        id: 'digital-agency',
        industryId: 'marketing',
        industry: 'Marketing',
        title: 'Digital Marketing Agency',
        client: 'GlamSquad Kenya',
        duration: '3 weeks',
        location: 'Nairobi, Kenya',
        challenge:
          'Inconsistent proposal quality and pricing leading to 60% rejection rate. Manual client reporting consuming 20+ hours weekly.',
        solution: [
          'Standardized proposal templates',
          'Dynamic pricing calculator',
          'Automated client reporting dashboard',
          'Project management integration',
          'Client communication portal',
        ],
        results: [
          { metric: '75%', description: 'Increase in acceptance rate', type: 'improvement' },
          { metric: '60%', description: 'Time saved on proposals', type: 'efficiency' },
          { metric: '$100k', description: 'Annual revenue increase', type: 'revenue' },
          { metric: '20 hours', description: 'Weekly time savings', type: 'efficiency' },
        ],
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'SendGrid'],
        testimonial: {
          quote:
            "The proposal system has completely transformed our sales process. We're closing more deals and spending less time on admin work.",
          author: 'The GlamSquad Kenya Team',
          position: 'Founders',
        },
      },
    ],
  },
  fr: {
    badge: 'Études de cas',
    heroPrefix: 'La preuve que la transformation',
    heroHighlight: 'fonctionne.',
    heroDescription:
      'De vraies entreprises, de vrais résultats, une vraie croissance. Découvrez comment nous aidons des entreprises en Afrique et au-delà à passer à l’échelle sans chaos.',
    proofYears: 'à construire des systèmes de croissance',
    proofSatisfaction: 'de satisfaction client',
    challengeLabel: 'Défi :',
    solutionDelivered: 'Solution livrée',
    technologiesUsed: 'Technologies utilisées',
    collapse: 'Voir moins',
    expand: 'Lire l’étude complète',
    collapseAria: 'Réduire les détails de l’étude de cas',
    expandAria: 'Afficher les détails de l’étude de cas',
    keyResults: 'Résultats clés',
    ctaTitle: 'Prêt à devenir notre prochaine success story ?',
    ctaDescription:
      'Chaque entreprise est unique, mais les principes de croissance restent les mêmes. Discutons de la façon de créer des résultats similaires pour vous.',
    ctaButton: 'Démarrer votre transformation',
    filterAria: 'Filtrer les études de cas par',
    industries: [
      { id: 'all', label: 'Toutes' },
      { id: 'healthcare', label: 'Santé' },
      { id: 'real-estate', label: 'Immobilier' },
      { id: 'marketing', label: 'Marketing' },
    ],
    studies: [
      {
        id: 'healthcare-clinic',
        industryId: 'healthcare',
        industry: 'Santé',
        title: 'Clinique régionale de santé',
        client: 'Fremo Medical & Birth Center',
        duration: '6 semaines',
        location: 'Lagos, Nigeria',
        challenge:
          'Système manuel de prise de rendez-vous entraînant 40% d’absences, des revenus perdus et des patients frustrés. L’équipe passait plus de 3 heures par jour sur les conflits de planning.',
        solution: [
          'Portail patient sur mesure avec réservation en ligne',
          'Rappels SMS et email automatisés',
          'Tableau de bord équipe pour gérer les plannings',
          'Intégration au système de dossiers médicaux existant',
          'Paiement des consultations',
        ],
        results: [
          { metric: '85%', description: 'de no-shows en moins', type: 'improvement' },
          { metric: '$50k', description: 'de revenus mensuels supplémentaires', type: 'revenue' },
          { metric: '3 heures', description: 'économisées chaque jour par l’équipe', type: 'efficiency' },
          { metric: '95%', description: 'de satisfaction patient', type: 'satisfaction' },
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'Stripe'],
        testimonial: {
          quote:
            'Digni Digital a transformé toute notre expérience patient. Le système de réservation nous a fait gagner un temps considérable et a nettement amélioré nos revenus.',
          author: 'The Fremo Medical Team',
          position: 'Équipe médicale',
        },
      },
      {
        id: 'real-estate-agency',
        industryId: 'real-estate',
        industry: 'Immobilier',
        title: 'Agence immobilière premium',
        client: 'Shep Engineering',
        duration: '4 semaines',
        location: 'Accra, Ghana',
        challenge:
          'Les agents passaient plus de 5 heures par proposition immobilière et perdaient des deals face à des concurrents plus rapides. La qualité incohérente nuisait à la marque.',
        solution: [
          'Système de génération de propositions avec IA',
          'Base de données biens avec valorisations automatisées',
          'Portail client pour le partage de documents',
          'Application mobile pour les agents',
          'Intégration CRM pour le suivi des leads',
        ],
        results: [
          { metric: '90%', description: 'de livraison de propositions plus rapide', type: 'efficiency' },
          { metric: '40%', description: 'de taux de closing en plus', type: 'improvement' },
          { metric: '25', description: 'deals supplémentaires par mois', type: 'volume' },
          { metric: '$200k', description: 'de revenus mensuels en plus', type: 'revenue' },
        ],
        technologies: ['React Native', 'Express.js', 'MongoDB', 'AWS S3', 'OpenAI API'],
        testimonial: {
          quote:
            'Nos agents peuvent désormais créer des propositions professionnelles en quelques minutes au lieu de plusieurs heures. C’est un avantage concurrentiel majeur.',
          author: 'The Shep Engineering Team',
          position: 'Direction',
        },
      },
      {
        id: 'digital-agency',
        industryId: 'marketing',
        industry: 'Marketing',
        title: 'Agence de marketing digital',
        client: 'GlamSquad Kenya',
        duration: '3 semaines',
        location: 'Nairobi, Kenya',
        challenge:
          'Qualité et tarification incohérentes des propositions, avec 60% de rejet. Les rapports clients manuels prenaient plus de 20 heures par semaine.',
        solution: [
          'Templates de propositions standardisés',
          'Calculateur de prix dynamique',
          'Tableau de bord de reporting client automatisé',
          'Intégration gestion de projet',
          'Portail de communication client',
        ],
        results: [
          { metric: '75%', description: 'd’augmentation du taux d’acceptation', type: 'improvement' },
          { metric: '60%', description: 'de temps gagné sur les propositions', type: 'efficiency' },
          { metric: '$100k', description: 'de revenus annuels supplémentaires', type: 'revenue' },
          { metric: '20 heures', description: 'économisées chaque semaine', type: 'efficiency' },
        ],
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'SendGrid'],
        testimonial: {
          quote:
            'Le système de propositions a transformé notre processus commercial. Nous signons plus de clients et passons moins de temps sur l’administratif.',
          author: 'The GlamSquad Kenya Team',
          position: 'Fondateurs',
        },
      },
    ],
  },
  es: {
    badge: 'Casos de éxito',
    heroPrefix: 'Prueba de que la transformación',
    heroHighlight: 'funciona.',
    heroDescription:
      'Negocios reales, resultados reales, crecimiento real. Mira cómo ayudamos a empresas en África y más allá a escalar sin caos.',
    proofYears: 'creando sistemas de crecimiento',
    proofSatisfaction: 'de satisfacción del cliente',
    challengeLabel: 'Desafío:',
    solutionDelivered: 'Solución entregada',
    technologiesUsed: 'Tecnologías usadas',
    collapse: 'Mostrar menos',
    expand: 'Leer caso completo',
    collapseAria: 'Contraer detalles del caso de estudio',
    expandAria: 'Expandir detalles del caso de estudio',
    keyResults: 'Resultados clave',
    ctaTitle: '¿Listo para ser nuestro próximo caso de éxito?',
    ctaDescription:
      'Cada negocio es único, pero los principios de crecimiento se mantienen. Hablemos de cómo crear resultados similares para tu empresa.',
    ctaButton: 'Inicia tu transformación',
    filterAria: 'Filtrar casos por',
    industries: [
      { id: 'all', label: 'Todos' },
      { id: 'healthcare', label: 'Salud' },
      { id: 'real-estate', label: 'Bienes raíces' },
      { id: 'marketing', label: 'Marketing' },
    ],
    studies: [
      {
        id: 'healthcare-clinic',
        industryId: 'healthcare',
        industry: 'Salud',
        title: 'Clínica regional de salud',
        client: 'Fremo Medical & Birth Center',
        duration: '6 semanas',
        location: 'Lagos, Nigeria',
        challenge:
          'Sistema manual de reservas que generaba 40% de ausencias, ingresos perdidos y pacientes frustrados. El equipo dedicaba más de 3 horas diarias a conflictos de agenda.',
        solution: [
          'Portal de pacientes a medida con reservas online',
          'Recordatorios automáticos por SMS y email',
          'Dashboard del equipo para gestionar horarios',
          'Integración con el sistema de historial médico existente',
          'Procesamiento de pagos para consultas',
        ],
        results: [
          { metric: '85%', description: 'reducción de ausencias', type: 'improvement' },
          { metric: '$50k', description: 'ingresos mensuales adicionales', type: 'revenue' },
          { metric: '3 horas', description: 'ahorradas cada día por el equipo', type: 'efficiency' },
          { metric: '95%', description: 'satisfacción de pacientes', type: 'satisfaction' },
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'Stripe'],
        testimonial: {
          quote:
            'Digni Digital transformó toda nuestra experiencia de pacientes. Solo el sistema de reservas nos ha ahorrado muchas horas y mejoró significativamente nuestros ingresos.',
          author: 'The Fremo Medical Team',
          position: 'Equipo de salud',
        },
      },
      {
        id: 'real-estate-agency',
        industryId: 'real-estate',
        industry: 'Bienes raíces',
        title: 'Agencia inmobiliaria premium',
        client: 'Shep Engineering',
        duration: '4 semanas',
        location: 'Accra, Ghana',
        challenge:
          'Los agentes dedicaban más de 5 horas por propuesta y perdían oportunidades frente a competidores más rápidos. La calidad inconsistente afectaba la reputación de marca.',
        solution: [
          'Sistema de generación de propuestas con IA',
          'Base de datos de propiedades con valoraciones automáticas',
          'Portal del cliente para compartir documentos',
          'App móvil para agentes',
          'Integración CRM para seguimiento de leads',
        ],
        results: [
          { metric: '90%', description: 'entrega de propuestas más rápida', type: 'efficiency' },
          { metric: '40%', description: 'mayor tasa de cierre', type: 'improvement' },
          { metric: '25', description: 'más deals por mes', type: 'volume' },
          { metric: '$200k', description: 'más ingresos mensuales', type: 'revenue' },
        ],
        technologies: ['React Native', 'Express.js', 'MongoDB', 'AWS S3', 'OpenAI API'],
        testimonial: {
          quote:
            'Nuestros agentes ahora crean propuestas profesionales en minutos en lugar de horas. Ha sido decisivo para nuestra ventaja competitiva.',
          author: 'The Shep Engineering Team',
          position: 'Dirección',
        },
      },
      {
        id: 'digital-agency',
        industryId: 'marketing',
        industry: 'Marketing',
        title: 'Agencia de marketing digital',
        client: 'GlamSquad Kenya',
        duration: '3 semanas',
        location: 'Nairobi, Kenya',
        challenge:
          'Calidad y precios inconsistentes en propuestas, con 60% de rechazo. Los reportes manuales consumían más de 20 horas semanales.',
        solution: [
          'Plantillas de propuesta estandarizadas',
          'Calculadora dinámica de precios',
          'Dashboard automatizado de reportes al cliente',
          'Integración de gestión de proyectos',
          'Portal de comunicación con clientes',
        ],
        results: [
          { metric: '75%', description: 'aumento en tasa de aceptación', type: 'improvement' },
          { metric: '60%', description: 'tiempo ahorrado en propuestas', type: 'efficiency' },
          { metric: '$100k', description: 'más ingresos anuales', type: 'revenue' },
          { metric: '20 horas', description: 'ahorradas por semana', type: 'efficiency' },
        ],
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'SendGrid'],
        testimonial: {
          quote:
            'El sistema de propuestas transformó nuestro proceso comercial. Cerramos más deals y pasamos menos tiempo en tareas administrativas.',
          author: 'The GlamSquad Kenya Team',
          position: 'Fundadores',
        },
      },
    ],
  },
  de: {
    badge: 'Case Studies',
    heroPrefix: 'Der Beweis, dass Transformation',
    heroHighlight: 'funktioniert.',
    heroDescription:
      'Echte Unternehmen, echte Ergebnisse, echtes Wachstum. Sehen Sie, wie wir Firmen in Afrika und darüber hinaus helfen, ohne Chaos zu skalieren.',
    proofYears: 'im Aufbau von Wachstumssystemen',
    proofSatisfaction: 'Kundenzufriedenheit',
    challengeLabel: 'Herausforderung:',
    solutionDelivered: 'Gelieferte Lösung',
    technologiesUsed: 'Verwendete Technologien',
    collapse: 'Weniger anzeigen',
    expand: 'Vollständige Case Study lesen',
    collapseAria: 'Details der Case Study einklappen',
    expandAria: 'Details der Case Study ausklappen',
    keyResults: 'Zentrale Ergebnisse',
    ctaTitle: 'Bereit, unsere nächste Erfolgsgeschichte zu werden?',
    ctaDescription:
      'Jedes Unternehmen ist einzigartig, aber Wachstumsprinzipien bleiben gleich. Lassen Sie uns besprechen, wie wir ähnliche Ergebnisse für Ihr Unternehmen schaffen.',
    ctaButton: 'Transformation starten',
    filterAria: 'Case Studies filtern nach',
    industries: [
      { id: 'all', label: 'Alle' },
      { id: 'healthcare', label: 'Gesundheit' },
      { id: 'real-estate', label: 'Immobilien' },
      { id: 'marketing', label: 'Marketing' },
    ],
    studies: [
      {
        id: 'healthcare-clinic',
        industryId: 'healthcare',
        industry: 'Gesundheit',
        title: 'Regionale Gesundheitsklinik',
        client: 'Fremo Medical & Birth Center',
        duration: '6 Wochen',
        location: 'Lagos, Nigeria',
        challenge:
          'Manuelles Terminbuchungssystem führte zu 40% No-Shows, Umsatzverlusten und frustrierten Patienten. Das Team verbrachte täglich über 3 Stunden mit Terminproblemen.',
        solution: [
          'Individuelles Patientenportal mit Online-Buchung',
          'Automatisierte SMS- und E-Mail-Erinnerungen',
          'Team-Dashboard für Terminplanung',
          'Integration in bestehende Patientenakten',
          'Zahlungsabwicklung für Beratungen',
        ],
        results: [
          { metric: '85%', description: 'weniger No-Shows', type: 'improvement' },
          { metric: '$50k', description: 'zusätzlicher Monatsumsatz', type: 'revenue' },
          { metric: '3 Stunden', description: 'tägliche Zeitersparnis fürs Team', type: 'efficiency' },
          { metric: '95%', description: 'Patientenzufriedenheit', type: 'satisfaction' },
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'Stripe'],
        testimonial: {
          quote:
            'Digni Digital hat unsere gesamte Patientenerfahrung verändert. Allein das Buchungssystem spart unzählige Stunden und hat unseren Umsatz deutlich verbessert.',
          author: 'The Fremo Medical Team',
          position: 'Gesundheitsteam',
        },
      },
      {
        id: 'real-estate-agency',
        industryId: 'real-estate',
        industry: 'Immobilien',
        title: 'Premium-Immobilienagentur',
        client: 'Shep Engineering',
        duration: '4 Wochen',
        location: 'Accra, Ghana',
        challenge:
          'Makler verbrachten über 5 Stunden pro Immobilienangebot und verloren Deals an schnellere Wettbewerber. Uneinheitliche Angebotsqualität belastete die Marke.',
        solution: [
          'KI-gestütztes System zur Angebotserstellung',
          'Immobiliendatenbank mit automatisierten Bewertungen',
          'Kundenportal für Dokumentenaustausch',
          'Mobile App für Makler',
          'CRM-Integration für Lead-Tracking',
        ],
        results: [
          { metric: '90%', description: 'schnellere Angebotserstellung', type: 'efficiency' },
          { metric: '40%', description: 'höhere Abschlussrate', type: 'improvement' },
          { metric: '25', description: 'mehr Deals pro Monat', type: 'volume' },
          { metric: '$200k', description: 'mehr Monatsumsatz', type: 'revenue' },
        ],
        technologies: ['React Native', 'Express.js', 'MongoDB', 'AWS S3', 'OpenAI API'],
        testimonial: {
          quote:
            'Unsere Makler erstellen professionelle Angebote jetzt in Minuten statt Stunden. Das ist ein echter Wettbewerbsvorteil.',
          author: 'The Shep Engineering Team',
          position: 'Management',
        },
      },
      {
        id: 'digital-agency',
        industryId: 'marketing',
        industry: 'Marketing',
        title: 'Digitale Marketingagentur',
        client: 'GlamSquad Kenya',
        duration: '3 Wochen',
        location: 'Nairobi, Kenya',
        challenge:
          'Uneinheitliche Angebotsqualität und Preisgestaltung führten zu 60% Ablehnung. Manuelles Kundenreporting kostete wöchentlich über 20 Stunden.',
        solution: [
          'Standardisierte Angebotsvorlagen',
          'Dynamischer Preisrechner',
          'Automatisiertes Kundenreporting-Dashboard',
          'Projektmanagement-Integration',
          'Kundenkommunikationsportal',
        ],
        results: [
          { metric: '75%', description: 'höhere Annahmerate', type: 'improvement' },
          { metric: '60%', description: 'Zeitersparnis bei Angeboten', type: 'efficiency' },
          { metric: '$100k', description: 'zusätzlicher Jahresumsatz', type: 'revenue' },
          { metric: '20 Stunden', description: 'wöchentliche Zeitersparnis', type: 'efficiency' },
        ],
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'SendGrid'],
        testimonial: {
          quote:
            'Das Angebotssystem hat unseren Verkaufsprozess komplett verändert. Wir schließen mehr Deals und verbringen weniger Zeit mit Administration.',
          author: 'The GlamSquad Kenya Team',
          position: 'Gründer',
        },
      },
    ],
  },
  ar: {
    badge: 'دراسات حالة',
    heroPrefix: 'دليل أن التحول',
    heroHighlight: 'ينجح.',
    heroDescription:
      'شركات حقيقية، نتائج حقيقية، ونمو حقيقي. شاهد كيف ساعدنا شركات في أفريقيا وخارجها على التوسع دون فوضى.',
    proofYears: 'في بناء أنظمة النمو',
    proofSatisfaction: 'رضا العملاء',
    challengeLabel: 'التحدي:',
    solutionDelivered: 'الحل المنفذ',
    technologiesUsed: 'التقنيات المستخدمة',
    collapse: 'عرض أقل',
    expand: 'اقرأ دراسة الحالة كاملة',
    collapseAria: 'إخفاء تفاصيل دراسة الحالة',
    expandAria: 'عرض تفاصيل دراسة الحالة',
    keyResults: 'النتائج الرئيسية',
    ctaTitle: 'هل أنت جاهز لتكون قصة نجاحنا التالية؟',
    ctaDescription:
      'كل عمل مختلف، لكن مبادئ النمو ثابتة. دعنا نناقش كيف نخلق نتائج مشابهة لعملك.',
    ctaButton: 'ابدأ تحولك',
    filterAria: 'تصفية دراسات الحالة حسب',
    industries: [
      { id: 'all', label: 'الكل' },
      { id: 'healthcare', label: 'الرعاية الصحية' },
      { id: 'real-estate', label: 'العقارات' },
      { id: 'marketing', label: 'التسويق' },
    ],
    studies: [
      {
        id: 'healthcare-clinic',
        industryId: 'healthcare',
        industry: 'الرعاية الصحية',
        title: 'عيادة صحية إقليمية',
        client: 'Fremo Medical & Birth Center',
        duration: '6 أسابيع',
        location: 'Lagos, Nigeria',
        challenge:
          'نظام حجز يدوي أدى إلى 40% من عدم الحضور، إيرادات مفقودة ومرضى محبطين. كان الموظفون يقضون أكثر من 3 ساعات يومياً في حل تعارضات المواعيد.',
        solution: [
          'بوابة مرضى مخصصة مع حجز عبر الإنترنت',
          'تذكيرات SMS وبريد إلكتروني مؤتمتة',
          'لوحة للموظفين لإدارة الجداول',
          'تكامل مع نظام السجلات الطبية الحالي',
          'معالجة مدفوعات الاستشارات',
        ],
        results: [
          { metric: '85%', description: 'انخفاض في عدم الحضور', type: 'improvement' },
          { metric: '$50k', description: 'إيرادات شهرية إضافية', type: 'revenue' },
          { metric: '3 ساعات', description: 'توفير يومي لوقت الموظفين', type: 'efficiency' },
          { metric: '95%', description: 'درجة رضا المرضى', type: 'satisfaction' },
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'Stripe'],
        testimonial: {
          quote:
            'غيّرت Digni Digital تجربة المرضى لدينا بالكامل. نظام الحجز وحده وفر لنا ساعات لا تحصى وحسّن إيراداتنا بشكل كبير.',
          author: 'The Fremo Medical Team',
          position: 'فريق الرعاية الصحية',
        },
      },
      {
        id: 'real-estate-agency',
        industryId: 'real-estate',
        industry: 'العقارات',
        title: 'وكالة عقارات مميزة',
        client: 'Shep Engineering',
        duration: '4 أسابيع',
        location: 'Accra, Ghana',
        challenge:
          'كان الوكلاء يقضون أكثر من 5 ساعات في كل عرض عقاري ويخسرون الصفقات لصالح منافسين أسرع. جودة العروض غير المتسقة أثرت على سمعة العلامة.',
        solution: [
          'نظام إنشاء عروض مدعوم بالذكاء الاصطناعي',
          'قاعدة بيانات عقارات مع تقييمات مؤتمتة',
          'بوابة عملاء لمشاركة المستندات',
          'تطبيق جوال للوكلاء',
          'تكامل CRM لتتبع العملاء المحتملين',
        ],
        results: [
          { metric: '90%', description: 'تسليم عروض أسرع', type: 'efficiency' },
          { metric: '40%', description: 'معدل إغلاق أعلى', type: 'improvement' },
          { metric: '25', description: 'صفقات أكثر شهرياً', type: 'volume' },
          { metric: '$200k', description: 'زيادة في الإيرادات الشهرية', type: 'revenue' },
        ],
        technologies: ['React Native', 'Express.js', 'MongoDB', 'AWS S3', 'OpenAI API'],
        testimonial: {
          quote:
            'يمكن لوكلائنا الآن إنشاء عروض احترافية خلال دقائق بدلاً من ساعات. لقد كان هذا تحولاً كبيراً في ميزتنا التنافسية.',
          author: 'The Shep Engineering Team',
          position: 'الإدارة',
        },
      },
      {
        id: 'digital-agency',
        industryId: 'marketing',
        industry: 'التسويق',
        title: 'وكالة تسويق رقمي',
        client: 'GlamSquad Kenya',
        duration: '3 أسابيع',
        location: 'Nairobi, Kenya',
        challenge:
          'جودة وتسعير غير متسقين للعروض أديا إلى معدل رفض 60%. كانت تقارير العملاء اليدوية تستهلك أكثر من 20 ساعة أسبوعياً.',
        solution: [
          'قوالب عروض موحدة',
          'حاسبة تسعير ديناميكية',
          'لوحة تقارير عملاء مؤتمتة',
          'تكامل إدارة المشاريع',
          'بوابة تواصل مع العملاء',
        ],
        results: [
          { metric: '75%', description: 'زيادة في معدل القبول', type: 'improvement' },
          { metric: '60%', description: 'وقت موفر في إعداد العروض', type: 'efficiency' },
          { metric: '$100k', description: 'زيادة سنوية في الإيرادات', type: 'revenue' },
          { metric: '20 ساعة', description: 'توفير أسبوعي في الوقت', type: 'efficiency' },
        ],
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'SendGrid'],
        testimonial: {
          quote:
            'نظام العروض غيّر عملية المبيعات لدينا بالكامل. نغلق صفقات أكثر ونقضي وقتاً أقل في الأعمال الإدارية.',
          author: 'The GlamSquad Kenya Team',
          position: 'المؤسسون',
        },
      },
    ],
  },
}

type CaseStudiesPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function CaseStudiesPage({ params, searchParams }: CaseStudiesPageProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const cta = getCtaButtonText(language)
  const pageJsonLd = getCaseStudiesPageJsonLd(locale)
  const copy = caseStudiesCopy[language]
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null)

  const filteredStudies = selectedIndustry === 'all'
    ? copy.studies
    : copy.studies.filter(study => study.industryId === selectedIndustry)

  const getResultColor = (type: string) => {
    switch (type) {
      case 'revenue': return 'text-success'
      case 'improvement': return 'text-accent'
      case 'efficiency': return 'text-info'
      case 'satisfaction': return 'text-success'
      case 'volume': return 'text-warning'
      case 'growth': return 'text-success'
      default: return 'text-accent'
    }
  }

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

      {/* Filter Section */}
      <AnimatedSection className="py-12 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {copy.industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                aria-pressed={selectedIndustry === industry.id}
                aria-label={`${copy.filterAria} ${industry.label}`}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedIndustry === industry.id
                    ? 'bg-accent text-background'
                    : 'bg-surface border border-border-light text-muted hover:text-text hover:border-accent/50'
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies Grid */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {filteredStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Study Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-muted text-sm">{study.duration}</span>
                      <span className="text-muted text-sm">{study.location}</span>
                    </div>
                    
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {study.title}
                    </h2>
                    
                    <p className="text-muted text-lg mb-8 leading-relaxed">
                      <strong>{copy.challengeLabel}</strong> {study.challenge}
                    </p>
                    
                    {expandedStudy === study.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-6 mb-8"
                      >
                        <div>
                          <h4 className="font-semibold mb-3">{copy.solutionDelivered}</h4>
                          <ul className="space-y-2">
                            {study.solution.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-muted">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">{copy.technologiesUsed}</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, j) => (
                              <span
                                key={j}
                                className="px-3 py-1 bg-surface-light rounded-full text-xs text-muted-dark"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="card p-6 bg-surface-light">
                          <blockquote className="text-muted italic mb-4">
                            &quot;{study.testimonial.quote}&quot;
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                              <span className="font-display font-bold text-accent text-sm">
                                {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold">{study.testimonial.author}</p>
                              <p className="text-muted text-sm">{study.testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <button
                      onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
                      aria-expanded={expandedStudy === study.id}
                      aria-label={expandedStudy === study.id ? copy.collapseAria : copy.expandAria}
                      className="text-accent hover:text-accent-light transition-colors font-medium"
                    >
                      {expandedStudy === study.id ? copy.collapse : copy.expand}
                    </button>
                  </div>
                  
                  {/* Results */}
                  <div>
                    <h3 className="font-display text-xl font-bold mb-6">{copy.keyResults}</h3>
                    <div className="space-y-6">
                      {study.results.map((result, j) => (
                        <div key={j} className="text-center">
                          <div className={`font-display text-3xl font-bold mb-2 ${getResultColor(result.type)}`}>
                            {result.metric}
                          </div>
                          <p className="text-muted text-sm">{result.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <a
                        {...getBookingLinkProps()}
                        className="btn-primary w-full text-center"
                      >
                        {cta.getSimilarResults}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            {copy.ctaButton}
          </a>
        </div>
      </AnimatedSection>

    </main>
  )
}