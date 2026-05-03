'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import CareersApplicationModal from '@/app/components/CareersApplicationModal'
import { useLanguage } from '@/app/context/LocaleContext'

type JobId = 'va' | 'designer'

const careersCopy = {
  en: {
    badge: 'Join Our Team',
    heroPrefix: 'Build the Future',
    heroHighlight: 'With Us',
    heroDescription:
      "Join a remote-first team that's transforming businesses across Africa and beyond. Work on meaningful projects, grow your skills, and make a real impact.",
    proofYears: 'building growth systems',
    proofSatisfaction: 'client satisfaction',
    stats: [
      { metric: '100%', label: 'Remote team' },
      { metric: '5+', label: 'Countries represented' },
      { metric: '3', label: 'Live products shipped' },
      { metric: '50+', label: 'Client projects delivered' },
    ],
    whyTitle: 'Why Work With Digni Digital?',
    whySubtitle: "We're building something special, and we want you to be part of it",
    positionsTitle: 'Open Positions',
    positionsSubtitle: 'Find your next career opportunity with us',
    requirements: 'Requirements',
    responsibilities: 'Responsibilities',
    benefits: 'Benefits',
    applyNow: 'Apply Now',
    perksTitle: 'Perks & Benefits',
    perksSubtitle: 'We take care of our team so they can do their best work',
    processTitle: 'Our Hiring Process',
    processSubtitle: 'A transparent, respectful process designed to find the right fit',
    ctaTitle: "Don't See Your Role?",
    ctaDescription:
      "We're always looking for talented individuals. Send us your resume and tell us how you'd like to contribute to our mission.",
    sendResume: 'Send Your Resume',
    getInTouch: 'Get In Touch',
    openPositions: [
      {
        id: 'va' as JobId,
        title: 'Virtual Assistant',
        type: 'Full-time',
        location: 'Remote (Africa / Europe time zones)',
        description:
          'Own our admin and operations stack end to end. Support leadership and clients with scheduling, communications, CRM hygiene, data entry, and follow-through so growth work never stalls.',
        requirements: [
          '1+ years in VA, executive assistant, operations, or support roles',
          'Fluent written and verbal English; clear, professional tone',
          'Comfort with Google Workspace, Microsoft 365, spreadsheets, and CRM tools',
          'Reliable internet, quiet workspace, and overlap with agreed collaboration hours',
          'Self-directed, detail-oriented, and comfortable with async communication',
        ],
        responsibilities: [
          'Manage calendars, scheduling, email triage, and meeting coordination',
          'Maintain CRM records, light reporting, and internal documentation',
          'Handle client and team inquiries, onboarding steps, and task handoffs',
          'Coordinate projects, deadlines, and follow-ups across time zones',
          'Keep files, templates, and workflows organized and up to date',
        ],
        benefits: [
          'Fully remote team with structured onboarding',
          'Professional development support',
          'Flexible hours within core collaboration windows',
          'Direct exposure to growth and client operations',
          'Long-term, stable engagement for strong performers',
        ],
      },
      {
        id: 'designer' as JobId,
        title: 'Graphic Designer',
        type: 'Full-time',
        location: 'Remote',
        description:
          'Shape how we and our clients show up visually, brand systems, social assets, presentations, and campaign creatives that stay on brief and on brand.',
        requirements: [
          'A portfolio showing brand, marketing, or digital design work',
          'Proficiency in Figma and/or Adobe Creative Cloud',
          'Strong eye for typography, layout, and visual hierarchy',
          'Ability to take feedback and iterate quickly',
          'Comfort with design handoff and asset preparation for web or print',
        ],
        responsibilities: [
          'Create and refine layouts for social, ads, decks, and landing pages',
          'Apply and extend brand guidelines across touchpoints',
          'Collaborate with ops and content on timelines and deliverables',
          'Prepare export-ready files and organized source files',
          'Stay current with design trends relevant to our markets',
        ],
        benefits: [
          'Remote-first creative collaboration',
          'Variety across client and internal projects',
          'Room to grow into lead or brand ownership',
          'Learning budget for courses and tools',
          'Portfolio-friendly work with real shipped output',
        ],
      },
    ],
    values: [
      { title: 'Growth Mindset', description: 'We believe in continuous learning and improvement, both personally and professionally.', icon: '🚀' },
      { title: 'Client Success', description: "Our clients' success is our success. We go above and beyond to deliver exceptional results.", icon: '🎯' },
      { title: 'Quality First', description: 'We never compromise on quality. Every project meets our high standards before delivery.', icon: '⭐' },
      { title: 'Remote Culture', description: 'We embrace remote work and have built systems that enable effective collaboration across time zones.', icon: '🌍' },
      { title: 'Innovation', description: 'We stay ahead of technology trends and encourage creative problem-solving approaches.', icon: '💡' },
      { title: 'Work-Life Balance', description: 'We believe great work comes from well-rested, fulfilled team members.', icon: '⚖️' },
    ],
    perks: [
      { title: 'Fully Remote', description: 'Work from anywhere with reliable internet. We provide the tools you need to succeed.', icon: '🏠' },
      { title: 'Flexible Hours', description: "Core collaboration hours with flexibility to work when you're most productive.", icon: '⏰' },
      { title: 'Learning Budget', description: 'Annual budget for courses, conferences, books, and professional development.', icon: '📚' },
      { title: 'Latest Tech', description: 'We provide modern equipment and access to the best tools and software.', icon: '💻' },
      { title: 'Wellness Stipend', description: 'Annual stipend for wellness activities, home office setup, or tools that support your wellbeing.', icon: '🌱' },
      { title: 'Team Retreats', description: 'Annual team gatherings to connect, collaborate, and explore new destinations.', icon: '✈️' },
    ],
    hiringSteps: [
      { step: '01', title: 'Application', description: 'Submit your application with portfolio/resume' },
      { step: '02', title: 'Screening', description: 'Initial review and phone/video screening call' },
      { step: '03', title: 'Interview', description: 'Technical/skills assessment and culture fit interview' },
      { step: '04', title: 'Decision', description: 'Final decision and offer (within 1 week)' },
    ],
  },
  fr: {
    badge: 'Rejoignez notre équipe',
    heroPrefix: 'Construisez le futur',
    heroHighlight: 'avec nous',
    heroDescription:
      'Rejoignez une équipe remote-first qui transforme des entreprises en Afrique et au-delà. Travaillez sur des projets utiles, développez vos compétences et créez un vrai impact.',
    proofYears: 'à construire des systèmes de croissance',
    proofSatisfaction: 'de satisfaction client',
    stats: [
      { metric: '100%', label: 'équipe à distance' },
      { metric: '5+', label: 'pays représentés' },
      { metric: '3', label: 'produits live livrés' },
      { metric: '50+', label: 'projets clients livrés' },
    ],
    whyTitle: 'Pourquoi travailler avec Digni Digital ?',
    whySubtitle: 'Nous construisons quelque chose de fort, et nous voulons que vous en fassiez partie',
    positionsTitle: 'Postes ouverts',
    positionsSubtitle: 'Trouvez votre prochaine opportunité avec nous',
    requirements: 'Exigences',
    responsibilities: 'Responsabilités',
    benefits: 'Avantages',
    applyNow: 'Postuler',
    perksTitle: 'Avantages & bénéfices',
    perksSubtitle: 'Nous prenons soin de notre équipe pour qu’elle fasse son meilleur travail',
    processTitle: 'Notre processus de recrutement',
    processSubtitle: 'Un processus transparent et respectueux, conçu pour trouver le bon fit',
    ctaTitle: 'Vous ne voyez pas votre rôle ?',
    ctaDescription:
      'Nous cherchons toujours des talents. Envoyez-nous votre CV et dites-nous comment vous souhaitez contribuer à notre mission.',
    sendResume: 'Envoyer votre CV',
    getInTouch: 'Nous contacter',
    openPositions: [
      {
        id: 'va' as JobId,
        title: 'Assistant virtuel',
        type: 'Temps plein',
        location: 'Remote (fuseaux horaires Afrique / Europe)',
        description:
          'Pilotez notre stack administrative et opérationnelle de bout en bout. Soutenez la direction et les clients avec la planification, les communications, l’hygiène CRM, la saisie de données et le suivi.',
        requirements: [
          '1+ an en assistance virtuelle, executive assistant, opérations ou support',
          'Anglais écrit et oral courant, ton clair et professionnel',
          'Aisance avec Google Workspace, Microsoft 365, spreadsheets et outils CRM',
          'Internet fiable, espace calme et chevauchement avec les heures de collaboration',
          'Autonomie, souci du détail et aisance en communication asynchrone',
        ],
        responsibilities: [
          'Gérer calendriers, planification, tri email et coordination de réunions',
          'Maintenir les données CRM, le reporting léger et la documentation interne',
          'Traiter les demandes clients et équipe, onboarding et transferts de tâches',
          'Coordonner projets, deadlines et relances entre fuseaux horaires',
          'Garder fichiers, modèles et workflows organisés et à jour',
        ],
        benefits: [
          'Équipe 100% remote avec onboarding structuré',
          'Soutien au développement professionnel',
          'Horaires flexibles dans les fenêtres de collaboration',
          'Exposition directe à la croissance et aux opérations client',
          'Engagement stable à long terme pour les profils performants',
        ],
      },
      {
        id: 'designer' as JobId,
        title: 'Graphiste',
        type: 'Temps plein',
        location: 'Remote',
        description:
          'Façonnez notre présence visuelle et celle de nos clients : systèmes de marque, contenus sociaux, présentations et créations de campagnes fidèles au brief et à la marque.',
        requirements: [
          'Portfolio montrant du branding, marketing ou design digital',
          'Maîtrise de Figma et/ou Adobe Creative Cloud',
          'Excellent sens de la typographie, de la mise en page et de la hiérarchie visuelle',
          'Capacité à recevoir du feedback et itérer rapidement',
          'Aisance avec le handoff design et la préparation d’assets web ou print',
        ],
        responsibilities: [
          'Créer et améliorer des layouts pour social, ads, decks et landing pages',
          'Appliquer et étendre les guidelines de marque',
          'Collaborer avec ops et contenu sur les délais et livrables',
          'Préparer des exports prêts à livrer et des sources organisées',
          'Rester à jour sur les tendances design pertinentes',
        ],
        benefits: [
          'Collaboration créative remote-first',
          'Variété de projets clients et internes',
          'Possibilité d’évoluer vers lead ou ownership de marque',
          'Budget formation pour cours et outils',
          'Travail valorisable en portfolio avec des livrables publiés',
        ],
      },
    ],
    values: [
      { title: 'Mentalité de croissance', description: 'Nous croyons à l’apprentissage et à l’amélioration continue, personnellement et professionnellement.', icon: '🚀' },
      { title: 'Succès client', description: 'Le succès de nos clients est notre succès. Nous allons plus loin pour livrer des résultats exceptionnels.', icon: '🎯' },
      { title: 'Qualité d’abord', description: 'Nous ne transigeons jamais sur la qualité. Chaque projet respecte nos standards avant livraison.', icon: '⭐' },
      { title: 'Culture remote', description: 'Nous avons des systèmes qui rendent la collaboration efficace entre fuseaux horaires.', icon: '🌍' },
      { title: 'Innovation', description: 'Nous restons en avance sur les tendances tech et encourageons la résolution créative de problèmes.', icon: '💡' },
      { title: 'Équilibre de vie', description: 'Le meilleur travail vient de personnes reposées, motivées et épanouies.', icon: '⚖️' },
    ],
    perks: [
      { title: '100% remote', description: 'Travaillez de partout avec une connexion fiable. Nous fournissons les outils nécessaires.', icon: '🏠' },
      { title: 'Horaires flexibles', description: 'Fenêtres de collaboration communes avec flexibilité sur vos moments les plus productifs.', icon: '⏰' },
      { title: 'Budget formation', description: 'Budget annuel pour cours, conférences, livres et développement professionnel.', icon: '📚' },
      { title: 'Technologie moderne', description: 'Nous fournissons l’équipement moderne et l’accès aux meilleurs outils logiciels.', icon: '💻' },
      { title: 'Budget bien-être', description: 'Allocation annuelle pour bien-être, bureau à domicile ou outils qui soutiennent votre équilibre.', icon: '🌱' },
      { title: 'Retraites d’équipe', description: 'Rencontres annuelles pour se connecter, collaborer et découvrir de nouveaux lieux.', icon: '✈️' },
    ],
    hiringSteps: [
      { step: '01', title: 'Candidature', description: 'Envoyez votre candidature avec portfolio/CV' },
      { step: '02', title: 'Préqualification', description: 'Revue initiale et appel de screening téléphone/vidéo' },
      { step: '03', title: 'Entretien', description: 'Évaluation technique/compétences et entretien culture fit' },
      { step: '04', title: 'Décision', description: 'Décision finale et offre sous 1 semaine' },
    ],
  },
  es: {
    badge: 'Únete al equipo',
    heroPrefix: 'Construye el futuro',
    heroHighlight: 'con nosotros',
    heroDescription:
      'Únete a un equipo remote-first que transforma negocios en África y más allá. Trabaja en proyectos con sentido, desarrolla tus habilidades y genera impacto real.',
    proofYears: 'creando sistemas de crecimiento',
    proofSatisfaction: 'de satisfacción del cliente',
    stats: [
      { metric: '100%', label: 'equipo remoto' },
      { metric: '5+', label: 'países representados' },
      { metric: '3', label: 'productos live lanzados' },
      { metric: '50+', label: 'proyectos de clientes entregados' },
    ],
    whyTitle: '¿Por qué trabajar con Digni Digital?',
    whySubtitle: 'Estamos construyendo algo especial y queremos que formes parte',
    positionsTitle: 'Puestos abiertos',
    positionsSubtitle: 'Encuentra tu próxima oportunidad profesional con nosotros',
    requirements: 'Requisitos',
    responsibilities: 'Responsabilidades',
    benefits: 'Beneficios',
    applyNow: 'Postular ahora',
    perksTitle: 'Beneficios y ventajas',
    perksSubtitle: 'Cuidamos a nuestro equipo para que pueda hacer su mejor trabajo',
    processTitle: 'Nuestro proceso de contratación',
    processSubtitle: 'Un proceso transparente y respetuoso diseñado para encontrar el encaje correcto',
    ctaTitle: '¿No ves tu rol?',
    ctaDescription:
      'Siempre buscamos talento. Envíanos tu CV y cuéntanos cómo te gustaría contribuir a nuestra misión.',
    sendResume: 'Enviar tu CV',
    getInTouch: 'Contactar',
    openPositions: [
      {
        id: 'va' as JobId,
        title: 'Asistente virtual',
        type: 'Tiempo completo',
        location: 'Remoto (zonas horarias África / Europa)',
        description:
          'Gestiona nuestro stack administrativo y operativo de punta a punta. Apoya a dirección y clientes con agenda, comunicaciones, higiene CRM, entrada de datos y seguimiento.',
        requirements: [
          '1+ años como VA, asistente ejecutivo, operaciones o soporte',
          'Inglés escrito y verbal fluido, tono claro y profesional',
          'Comodidad con Google Workspace, Microsoft 365, hojas de cálculo y herramientas CRM',
          'Internet fiable, espacio tranquilo y solape con horas de colaboración acordadas',
          'Autonomía, atención al detalle y comodidad con comunicación asíncrona',
        ],
        responsibilities: [
          'Gestionar calendarios, agenda, triage de email y coordinación de reuniones',
          'Mantener registros CRM, reporting ligero y documentación interna',
          'Gestionar consultas de clientes y equipo, onboarding y traspasos de tareas',
          'Coordinar proyectos, deadlines y seguimientos entre zonas horarias',
          'Mantener archivos, plantillas y workflows organizados y actualizados',
        ],
        benefits: [
          'Equipo totalmente remoto con onboarding estructurado',
          'Apoyo al desarrollo profesional',
          'Horarios flexibles dentro de ventanas de colaboración',
          'Exposición directa a crecimiento y operaciones de clientes',
          'Colaboración estable a largo plazo para perfiles fuertes',
        ],
      },
      {
        id: 'designer' as JobId,
        title: 'Diseñador gráfico',
        type: 'Tiempo completo',
        location: 'Remoto',
        description:
          'Define cómo nos presentamos visualmente nosotros y nuestros clientes: sistemas de marca, assets sociales, presentaciones y creatividades de campaña alineadas al brief.',
        requirements: [
          'Portfolio con trabajos de marca, marketing o diseño digital',
          'Dominio de Figma y/o Adobe Creative Cloud',
          'Buen ojo para tipografía, layout y jerarquía visual',
          'Capacidad para recibir feedback e iterar rápido',
          'Comodidad con handoff de diseño y preparación de assets web o print',
        ],
        responsibilities: [
          'Crear y refinar layouts para redes, anuncios, decks y landing pages',
          'Aplicar y ampliar guías de marca en distintos puntos de contacto',
          'Colaborar con ops y contenido en tiempos y entregables',
          'Preparar archivos listos para exportar y fuentes organizadas',
          'Mantenerse al día con tendencias de diseño relevantes',
        ],
        benefits: [
          'Colaboración creativa remote-first',
          'Variedad de proyectos internos y de clientes',
          'Espacio para crecer hacia liderazgo o ownership de marca',
          'Presupuesto de aprendizaje para cursos y herramientas',
          'Trabajo real publicado para fortalecer tu portfolio',
        ],
      },
    ],
    values: [
      { title: 'Mentalidad de crecimiento', description: 'Creemos en aprender y mejorar continuamente, tanto personal como profesionalmente.', icon: '🚀' },
      { title: 'Éxito del cliente', description: 'El éxito de nuestros clientes es nuestro éxito. Vamos más allá para entregar resultados excepcionales.', icon: '🎯' },
      { title: 'Calidad primero', description: 'Nunca comprometemos la calidad. Cada proyecto cumple nuestros estándares antes de entregarse.', icon: '⭐' },
      { title: 'Cultura remota', description: 'Abrazamos el trabajo remoto y sistemas que permiten colaborar bien entre zonas horarias.', icon: '🌍' },
      { title: 'Innovación', description: 'Nos adelantamos a tendencias tecnológicas y fomentamos soluciones creativas.', icon: '💡' },
      { title: 'Equilibrio vida-trabajo', description: 'El gran trabajo nace de personas descansadas y realizadas.', icon: '⚖️' },
    ],
    perks: [
      { title: 'Totalmente remoto', description: 'Trabaja desde cualquier lugar con internet fiable. Te damos las herramientas necesarias.', icon: '🏠' },
      { title: 'Horarios flexibles', description: 'Horas centrales de colaboración con flexibilidad para trabajar cuando eres más productivo.', icon: '⏰' },
      { title: 'Presupuesto de aprendizaje', description: 'Presupuesto anual para cursos, conferencias, libros y desarrollo profesional.', icon: '📚' },
      { title: 'Tecnología moderna', description: 'Proporcionamos equipo moderno y acceso a las mejores herramientas y software.', icon: '💻' },
      { title: 'Apoyo de bienestar', description: 'Asignación anual para bienestar, home office o herramientas que apoyen tu salud.', icon: '🌱' },
      { title: 'Retiros de equipo', description: 'Encuentros anuales para conectar, colaborar y explorar nuevos destinos.', icon: '✈️' },
    ],
    hiringSteps: [
      { step: '01', title: 'Postulación', description: 'Envía tu postulación con portfolio/CV' },
      { step: '02', title: 'Screening', description: 'Revisión inicial y llamada por teléfono/video' },
      { step: '03', title: 'Entrevista', description: 'Evaluación técnica/habilidades y entrevista de encaje cultural' },
      { step: '04', title: 'Decisión', description: 'Decisión final y oferta en un máximo de 1 semana' },
    ],
  },
  de: {
    badge: 'Kommen Sie ins Team',
    heroPrefix: 'Bauen Sie die Zukunft',
    heroHighlight: 'mit uns',
    heroDescription:
      'Werden Sie Teil eines Remote-first-Teams, das Unternehmen in Afrika und darüber hinaus transformiert. Arbeiten Sie an sinnvollen Projekten, wachsen Sie fachlich und schaffen Sie echte Wirkung.',
    proofYears: 'im Aufbau von Wachstumssystemen',
    proofSatisfaction: 'Kundenzufriedenheit',
    stats: [
      { metric: '100%', label: 'Remote-Team' },
      { metric: '5+', label: 'vertretene Länder' },
      { metric: '3', label: 'Live-Produkte ausgeliefert' },
      { metric: '50+', label: 'Kundenprojekte geliefert' },
    ],
    whyTitle: 'Warum bei Digni Digital arbeiten?',
    whySubtitle: 'Wir bauen etwas Besonderes und möchten, dass Sie Teil davon sind',
    positionsTitle: 'Offene Stellen',
    positionsSubtitle: 'Finden Sie Ihre nächste Karrierechance bei uns',
    requirements: 'Anforderungen',
    responsibilities: 'Verantwortung',
    benefits: 'Benefits',
    applyNow: 'Jetzt bewerben',
    perksTitle: 'Vorteile & Benefits',
    perksSubtitle: 'Wir kümmern uns um unser Team, damit es beste Arbeit leisten kann',
    processTitle: 'Unser Recruiting-Prozess',
    processSubtitle: 'Ein transparenter, respektvoller Prozess, der den richtigen Fit findet',
    ctaTitle: 'Keine passende Rolle gefunden?',
    ctaDescription:
      'Wir suchen immer talentierte Menschen. Senden Sie uns Ihren Lebenslauf und erzählen Sie, wie Sie zu unserer Mission beitragen möchten.',
    sendResume: 'Lebenslauf senden',
    getInTouch: 'Kontakt aufnehmen',
    openPositions: [
      {
        id: 'va' as JobId,
        title: 'Virtual Assistant',
        type: 'Vollzeit',
        location: 'Remote (Zeitzonen Afrika / Europa)',
        description:
          'Übernehmen Sie unseren Admin- und Operations-Stack End-to-End. Unterstützen Sie Führung und Kunden bei Planung, Kommunikation, CRM-Pflege, Dateneingabe und Follow-through.',
        requirements: [
          '1+ Jahre als VA, Executive Assistant, Operations oder Support',
          'Fließendes schriftliches und mündliches Englisch mit professionellem Ton',
          'Sicherer Umgang mit Google Workspace, Microsoft 365, Tabellen und CRM-Tools',
          'Zuverlässiges Internet, ruhiger Arbeitsplatz und Überschneidung mit vereinbarten Arbeitszeiten',
          'Selbstständig, detailorientiert und sicher in asynchroner Kommunikation',
        ],
        responsibilities: [
          'Kalender, Terminplanung, E-Mail-Triage und Meetingkoordination verwalten',
          'CRM-Daten, leichtes Reporting und interne Dokumentation pflegen',
          'Kunden- und Teamfragen, Onboarding-Schritte und Task-Handoffs betreuen',
          'Projekte, Deadlines und Follow-ups über Zeitzonen koordinieren',
          'Dateien, Vorlagen und Workflows organisiert und aktuell halten',
        ],
        benefits: [
          'Vollständig remote mit strukturiertem Onboarding',
          'Unterstützung für professionelle Entwicklung',
          'Flexible Zeiten innerhalb zentraler Kollaborationsfenster',
          'Direkter Einblick in Wachstum und Kundenoperations',
          'Langfristige stabile Zusammenarbeit für starke Performer',
        ],
      },
      {
        id: 'designer' as JobId,
        title: 'Grafikdesigner',
        type: 'Vollzeit',
        location: 'Remote',
        description:
          'Gestalten Sie, wie wir und unsere Kunden visuell auftreten: Markensysteme, Social Assets, Präsentationen und Kampagnen-Creatives, die brief- und markentreu bleiben.',
        requirements: [
          'Portfolio mit Brand-, Marketing- oder Digitaldesign',
          'Sicher in Figma und/oder Adobe Creative Cloud',
          'Starkes Auge für Typografie, Layout und visuelle Hierarchie',
          'Feedback aufnehmen und schnell iterieren können',
          'Sicheres Design-Handoff und Asset-Vorbereitung für Web oder Print',
        ],
        responsibilities: [
          'Layouts für Social, Ads, Decks und Landingpages erstellen und verfeinern',
          'Brand Guidelines anwenden und weiterentwickeln',
          'Mit Ops und Content an Timelines und Deliverables arbeiten',
          'Exportfertige Dateien und organisierte Quelldateien vorbereiten',
          'Relevante Designtrends im Blick behalten',
        ],
        benefits: [
          'Remote-first kreative Zusammenarbeit',
          'Abwechslung über Kunden- und interne Projekte',
          'Raum für Wachstum in Lead- oder Markenverantwortung',
          'Lernbudget für Kurse und Tools',
          'Portfolio-taugliche Arbeit mit realen Releases',
        ],
      },
    ],
    values: [
      { title: 'Growth Mindset', description: 'Wir glauben an kontinuierliches Lernen und Verbesserung, persönlich wie beruflich.', icon: '🚀' },
      { title: 'Kundenerfolg', description: 'Der Erfolg unserer Kunden ist unser Erfolg. Wir gehen weiter, um außergewöhnliche Ergebnisse zu liefern.', icon: '🎯' },
      { title: 'Qualität zuerst', description: 'Wir machen keine Kompromisse bei Qualität. Jedes Projekt erfüllt vor Lieferung hohe Standards.', icon: '⭐' },
      { title: 'Remote-Kultur', description: 'Wir leben Remote-Arbeit mit Systemen, die Zusammenarbeit über Zeitzonen ermöglichen.', icon: '🌍' },
      { title: 'Innovation', description: 'Wir bleiben Technologietrends voraus und fördern kreative Problemlösung.', icon: '💡' },
      { title: 'Work-Life-Balance', description: 'Großartige Arbeit kommt von ausgeruhten, erfüllten Teammitgliedern.', icon: '⚖️' },
    ],
    perks: [
      { title: 'Vollständig remote', description: 'Arbeiten Sie von überall mit zuverlässigem Internet. Wir stellen die nötigen Tools.', icon: '🏠' },
      { title: 'Flexible Arbeitszeiten', description: 'Zentrale Kollaborationszeiten mit Flexibilität für Ihre produktivsten Phasen.', icon: '⏰' },
      { title: 'Lernbudget', description: 'Jährliches Budget für Kurse, Konferenzen, Bücher und Weiterbildung.', icon: '📚' },
      { title: 'Moderne Technologie', description: 'Wir stellen moderne Ausstattung und Zugang zu den besten Tools und Software bereit.', icon: '💻' },
      { title: 'Wellness-Zuschuss', description: 'Jährlicher Zuschuss für Wellness, Homeoffice oder Tools, die Ihr Wohlbefinden unterstützen.', icon: '🌱' },
      { title: 'Team-Retreats', description: 'Jährliche Treffen zum Vernetzen, Zusammenarbeiten und Entdecken neuer Orte.', icon: '✈️' },
    ],
    hiringSteps: [
      { step: '01', title: 'Bewerbung', description: 'Bewerbung mit Portfolio/Lebenslauf einreichen' },
      { step: '02', title: 'Screening', description: 'Erste Prüfung und Telefon-/Video-Screening' },
      { step: '03', title: 'Interview', description: 'Fach-/Skill-Assessment und Cultural-Fit-Interview' },
      { step: '04', title: 'Entscheidung', description: 'Finale Entscheidung und Angebot innerhalb von 1 Woche' },
    ],
  },
  ar: {
    badge: 'انضم إلى فريقنا',
    heroPrefix: 'ابنِ المستقبل',
    heroHighlight: 'معنا',
    heroDescription:
      'انضم إلى فريق يعمل عن بعد أولاً ويحوّل الشركات في أفريقيا وخارجها. اعمل على مشاريع ذات معنى، طوّر مهاراتك، واصنع أثراً حقيقياً.',
    proofYears: 'في بناء أنظمة النمو',
    proofSatisfaction: 'رضا العملاء',
    stats: [
      { metric: '100%', label: 'فريق يعمل عن بعد' },
      { metric: '5+', label: 'دول ممثلة' },
      { metric: '3', label: 'منتجات مباشرة تم إطلاقها' },
      { metric: '50+', label: 'مشروع عميل تم تسليمه' },
    ],
    whyTitle: 'لماذا تعمل مع Digni Digital؟',
    whySubtitle: 'نحن نبني شيئاً مميزاً ونريدك أن تكون جزءاً منه',
    positionsTitle: 'الوظائف المتاحة',
    positionsSubtitle: 'اعثر على فرصتك المهنية التالية معنا',
    requirements: 'المتطلبات',
    responsibilities: 'المسؤوليات',
    benefits: 'المزايا',
    applyNow: 'قدّم الآن',
    perksTitle: 'المزايا والفوائد',
    perksSubtitle: 'نعتني بفريقنا حتى يقدم أفضل أعماله',
    processTitle: 'عملية التوظيف لدينا',
    processSubtitle: 'عملية شفافة ومحترمة مصممة لاختيار الأنسب',
    ctaTitle: 'لا ترى دورك المناسب؟',
    ctaDescription:
      'نحن نبحث دائماً عن المواهب. أرسل سيرتك الذاتية وأخبرنا كيف تريد المساهمة في مهمتنا.',
    sendResume: 'أرسل سيرتك الذاتية',
    getInTouch: 'تواصل معنا',
    openPositions: [
      {
        id: 'va' as JobId,
        title: 'مساعد افتراضي',
        type: 'دوام كامل',
        location: 'عن بعد (مناطق توقيت أفريقيا / أوروبا)',
        description:
          'تولَّ إدارة العمليات والإدارة اليومية من البداية للنهاية. ادعم القيادة والعملاء في الجدولة، التواصل، تنظيم CRM، إدخال البيانات والمتابعة.',
        requirements: [
          'خبرة سنة أو أكثر كمساعد افتراضي أو تنفيذي أو في العمليات أو الدعم',
          'إنجليزية كتابية وشفهية بطلاقة ونبرة مهنية واضحة',
          'راحة في استخدام Google Workspace وMicrosoft 365 والجداول وأدوات CRM',
          'إنترنت موثوق، مساحة عمل هادئة، وتداخل مع ساعات التعاون المتفق عليها',
          'استقلالية، دقة في التفاصيل وراحة في التواصل غير المتزامن',
        ],
        responsibilities: [
          'إدارة التقويمات، الجدولة، فرز البريد وتنسيق الاجتماعات',
          'الحفاظ على سجلات CRM والتقارير الخفيفة والتوثيق الداخلي',
          'التعامل مع استفسارات العملاء والفريق وخطوات onboarding وتسليم المهام',
          'تنسيق المشاريع والمواعيد والمتابعات عبر مناطق زمنية مختلفة',
          'تنظيم الملفات والقوالب وworkflows وتحديثها',
        ],
        benefits: [
          'فريق عن بعد بالكامل مع onboarding منظم',
          'دعم التطوير المهني',
          'ساعات مرنة ضمن نوافذ التعاون الأساسية',
          'تعرض مباشر للنمو وعمليات العملاء',
          'تعاون مستقر طويل الأمد للأداء القوي',
        ],
      },
      {
        id: 'designer' as JobId,
        title: 'مصمم جرافيك',
        type: 'دوام كامل',
        location: 'عن بعد',
        description:
          'شكّل حضورنا البصري وحضور عملائنا: أنظمة علامة، مواد اجتماعية، عروض تقديمية ومواد حملات ملتزمة بالهوية والbrief.',
        requirements: [
          'Portfolio يوضح أعمال branding أو marketing أو تصميم رقمي',
          'إتقان Figma و/أو Adobe Creative Cloud',
          'عين قوية للطباعة، التخطيط والتدرج البصري',
          'قدرة على استقبال الملاحظات والتكرار بسرعة',
          'راحة في handoff التصميم وتجهيز الأصول للويب أو الطباعة',
        ],
        responsibilities: [
          'إنشاء وتحسين layouts للشبكات، الإعلانات، decks وlanding pages',
          'تطبيق وتوسيع إرشادات العلامة عبر نقاط التواصل',
          'التعاون مع العمليات والمحتوى حول الجداول والمخرجات',
          'تجهيز ملفات جاهزة للتصدير وملفات مصدر منظمة',
          'متابعة اتجاهات التصميم المهمة لأسواقنا',
        ],
        benefits: [
          'تعاون إبداعي remote-first',
          'تنوع بين مشاريع العملاء والمشاريع الداخلية',
          'مساحة للنمو نحو القيادة أو ملكية العلامة',
          'ميزانية تعلم للدورات والأدوات',
          'أعمال مناسبة للportfolio مع مخرجات منشورة فعلياً',
        ],
      },
    ],
    values: [
      { title: 'عقلية النمو', description: 'نؤمن بالتعلم والتحسين المستمر على المستوى الشخصي والمهني.', icon: '🚀' },
      { title: 'نجاح العميل', description: 'نجاح عملائنا هو نجاحنا. نبذل جهداً إضافياً لتقديم نتائج استثنائية.', icon: '🎯' },
      { title: 'الجودة أولاً', description: 'لا نتنازل عن الجودة. كل مشروع يلتزم بمعاييرنا العالية قبل التسليم.', icon: '⭐' },
      { title: 'ثقافة العمل عن بعد', description: 'نعتمد أنظمة تجعل التعاون فعالاً عبر المناطق الزمنية.', icon: '🌍' },
      { title: 'الابتكار', description: 'نبقى في مقدمة اتجاهات التقنية ونشجع الحلول الإبداعية.', icon: '💡' },
      { title: 'توازن الحياة والعمل', description: 'العمل العظيم يأتي من أشخاص مرتاحين ومتحمسين.', icon: '⚖️' },
    ],
    perks: [
      { title: 'عن بعد بالكامل', description: 'اعمل من أي مكان مع إنترنت موثوق. نوفر لك الأدوات التي تحتاجها.', icon: '🏠' },
      { title: 'ساعات مرنة', description: 'ساعات تعاون أساسية مع مرونة للعمل في أوقاتك الأكثر إنتاجية.', icon: '⏰' },
      { title: 'ميزانية تعلم', description: 'ميزانية سنوية للدورات والمؤتمرات والكتب والتطوير المهني.', icon: '📚' },
      { title: 'تقنية حديثة', description: 'نوفر معدات حديثة ووصولاً إلى أفضل الأدوات والبرامج.', icon: '💻' },
      { title: 'دعم الرفاهية', description: 'مبلغ سنوي للرفاهية أو مكتب المنزل أو أدوات تدعم صحتك.', icon: '🌱' },
      { title: 'لقاءات الفريق', description: 'تجمعات سنوية للتواصل والتعاون واستكشاف وجهات جديدة.', icon: '✈️' },
    ],
    hiringSteps: [
      { step: '01', title: 'التقديم', description: 'أرسل طلبك مع portfolio/السيرة الذاتية' },
      { step: '02', title: 'الفرز', description: 'مراجعة أولية ومكالمة هاتف/فيديو' },
      { step: '03', title: 'المقابلة', description: 'تقييم مهارات/تقني ومقابلة ملاءمة ثقافية' },
      { step: '04', title: 'القرار', description: 'قرار نهائي وعرض خلال أسبوع واحد' },
    ],
  },
}

type CareersPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function CareersPage({ params, searchParams }: CareersPageProps) {
  use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const copy = careersCopy[language]
  const [applyOpen, setApplyOpen] = useState(false)
  const [applyPreset, setApplyPreset] = useState<JobId | undefined>(undefined)

  const openApply = (preset?: JobId) => {
    setApplyPreset(preset)
    setApplyOpen(true)
  }

  return (
    <main>
      <CareersApplicationModal
        isOpen={applyOpen}
        onClose={() => setApplyOpen(false)}
        presetRole={applyPreset}
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

      {/* Team Stats, Proof Section */}
      <AnimatedSection className="py-16 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* Why Join Us */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{copy.whyTitle}</h2>
            <p className="text-muted text-lg">{copy.whySubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copy.values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{copy.positionsTitle}</h2>
            <p className="text-muted text-lg">{copy.positionsSubtitle}</p>
          </div>

          <div className="space-y-8">
            {copy.openPositions.map((position, i) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">{position.type}</span>
                      <span className="text-muted text-sm">{position.location}</span>
                    </div>

                    <h3 className="font-display text-3xl font-bold mb-4">{position.title}</h3>
                    <p className="text-muted text-lg mb-8 leading-relaxed">{position.description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">{copy.requirements}</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, j) => (
                            <li key={j} className="flex items-start gap-2 text-muted text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">{copy.responsibilities}</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, j) => (
                            <li key={j} className="flex items-start gap-2 text-muted text-sm">
                              <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="card p-6 bg-surface-light mb-6">
                      <h4 className="font-semibold mb-4">{copy.benefits}</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-2 text-muted text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      onClick={() => openApply(position.id)}
                      className="btn-primary w-full text-center"
                    >
                      {copy.applyNow}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Perks & Benefits */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{copy.perksTitle}</h2>
            <p className="text-muted text-lg">{copy.perksSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copy.perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="font-display text-xl font-bold mb-4">{perk.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Application Process */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{copy.processTitle}</h2>
            <p className="text-muted text-lg">{copy.processSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {copy.hiringSteps.map((step, i) => (
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
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{copy.ctaTitle}</h2>
          <p className="text-muted text-lg mb-8">
            {copy.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" onClick={() => openApply()} className="btn-primary text-lg px-8 py-4">
              {copy.sendResume}
            </button>
            <a href="/contact" className="btn-secondary text-lg px-8 py-4">
              {copy.getInTouch}
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
