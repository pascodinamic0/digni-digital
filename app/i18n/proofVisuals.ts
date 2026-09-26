import type { Language } from '@/app/config/translations'

export type ProofVisualCopy = {
  alt: string
  overlayLine?: string
  chip?: string
  channel?: string
}

type ProofVisualTree = Record<string, ProofVisualCopy | Record<string, ProofVisualCopy>>

const en: ProofVisualTree = {
  home: {
    exposure: {
      alt: 'Three operational exposures: unanswered inquiries, skills without proof, manual workflows',
      overlayLine: 'Three leaks. One partner to close them.',
      chip: 'Exposure',
    },
    coverageGrowth: {
      alt: 'AI Employee responding to inbound messages across channels',
      overlayLine: 'Every qualified inquiry gets a next step',
      chip: 'Growth',
      channel: 'AI Employee',
    },
    coverageTalent: {
      alt: 'Student with certificate beside empty portfolio folder',
      overlayLine: 'A legitimate way to earn',
      chip: 'Talent',
      channel: 'Future Ready',
    },
    coverageOperations: {
      alt: 'Team copying data between disconnected spreadsheets and tools',
      overlayLine: 'Software should own the manual work',
      chip: 'Operations',
      channel: 'Agentic Systems',
    },
    proof: {
      alt: 'Named client implementations with honest project status',
      overlayLine: 'Named operators. Honest status.',
      chip: 'Proof',
    },
    process: {
      alt: 'Digni installer process from identify through optimize',
      overlayLine: 'Identify → Deploy → Optimize',
      chip: 'Process',
    },
  },
  aiReceptionist: {
    problemStats: {
      alt: 'Statistics showing cost of unanswered inbound and slow follow-up',
    },
    proof: {
      alt: 'Case study carousel with timeline and named results',
    },
    mobileApp: {
      alt: 'AI Employee mobile app for lead management on the go',
      overlayLine: 'Leads in your pocket. Replies in seconds.',
      chip: 'Mobile',
    },
    inboundFlow: {
      alt: 'Map of inbound lead sources connected to AI Employee',
      overlayLine: 'Every channel. One system.',
      chip: 'Inbound',
    },
  },
  futureReady: {
    problem: {
      alt: 'Graduate holding certificate with empty portfolio on desk',
      overlayLine: 'A certificate does not pay. A way to earn does.',
      chip: 'Talent gap',
    },
    outcomes: {
      alt: 'Proof a client can pay for',
    },
    caseStudy: {
      alt: 'GS Laricharde school partnership in progress',
      overlayLine: 'Program in progress — honest status',
      chip: 'Case study',
    },
    skills: {
      alt: 'AI career paths and skills grid for employability',
      overlayLine: 'Work a client will pay for',
      chip: 'Skills',
    },
  },
  agentic: {
    problem: {
      alt: 'Manual copy-paste workflow between disconnected business tools',
      overlayLine: 'Copy-paste is not a workflow',
      chip: 'Operations',
    },
    apps: {
      alt: 'Digni product suite: AMS, DigniGuide, SwiftDrop, and more',
      overlayLine: 'Systems built around real workflows',
      chip: 'Products',
    },
    caseStudy: {
      alt: 'Custom agentic system deployment for a named client',
      overlayLine: 'Workflows that move without copy-paste',
      chip: 'Proof',
    },
    process: {
      alt: 'Agentic systems installer process diagram',
      overlayLine: 'Perceive → Reason → Execute',
      chip: 'Process',
    },
  },
  about: {
    story: {
      alt: 'Digni Digital origin story and milestone timeline',
      overlayLine: 'Technology creates opportunity',
      chip: 'Story',
    },
    approach: {
      alt: 'Digni approach: identify gaps and install systems',
      overlayLine: 'Identify → Install → Optimize',
      chip: 'Approach',
    },
    differentiator: {
      alt: 'Systems installed to close operational gaps',
      overlayLine: 'We install systems—not sell hours',
      chip: 'Difference',
    },
  },
  solutions: {
    leadGen: {
      alt: 'Lead generation and inbound response coverage',
      overlayLine: 'Demand answered before it walks away',
      chip: 'Lead gen',
    },
    opsEfficiency: {
      alt: 'Operations efficiency through connected agentic workflows',
      overlayLine: 'Workflows that move on their own',
      chip: 'Operations',
    },
    customerExperience: {
      alt: 'Customer experience with consistent response coverage',
      overlayLine: 'Every touch gets a next step',
      chip: 'Experience',
    },
    results: {
      alt: 'Verified client results and named implementations',
    },
    beforeAfter: {
      alt: 'Before and after comparison of leaky vs growth-loop workflow',
    },
  },
  products: {
    proposalAgent: {
      alt: 'ProposalAgent interface creating proposals in minutes',
      overlayLine: 'Proposals in minutes—not hours',
      chip: 'ProposalAgent',
    },
    socialProof: {
      alt: 'Product usage statistics from named operators',
    },
    comingSoon: {
      alt: 'Upcoming Digni products in development',
      overlayLine: 'Built for operators who move fast',
      chip: 'Coming soon',
    },
  },
  digni: {
    diagnostic: {
      alt: 'DigniGuide chat diagnostic by voice or text',
      overlayLine: 'See what is exposed—in one conversation',
      chip: 'DigniGuide',
    },
    assessment: {
      alt: 'Assessment result card showing coverage gaps',
      overlayLine: 'Your exposure map—specific, not generic',
      chip: 'Assessment',
    },
    booking: {
      alt: 'Book onboarding demo from diagnostic results',
      overlayLine: 'One small step vs another month of leaks',
      chip: 'Next step',
    },
  },
}

const fr: ProofVisualTree = {
  home: {
    exposure: {
      alt: 'Trois expositions opérationnelles : demandes sans réponse, compétences sans preuve, flux manuels',
      overlayLine: 'Trois fuites. Un partenaire pour les fermer.',
      chip: 'Exposition',
    },
    coverageGrowth: {
      alt: 'Employé IA répondant aux messages entrants sur tous les canaux',
      overlayLine: 'Chaque demande qualifiée obtient une suite',
      chip: 'Croissance',
      channel: 'Employé IA',
    },
    coverageTalent: {
      alt: 'Étudiant avec diplôme à côté d\'un portfolio vide',
      overlayLine: 'Un moyen légitime de gagner',
      chip: 'Talents',
      channel: 'Future Ready',
    },
    coverageOperations: {
      alt: 'Équipe copiant des données entre outils déconnectés',
      overlayLine: 'Le logiciel devrait porter le travail manuel',
      chip: 'Opérations',
      channel: 'Systèmes agentiques',
    },
    proof: {
      alt: 'Implémentations clients nommées avec statut honnête',
      overlayLine: 'Opérateurs nommés. Statut honnête.',
      chip: 'Preuve',
    },
    process: {
      alt: 'Processus d\'installation Digni de l\'identification à l\'optimisation',
      overlayLine: 'Identifier → Déployer → Optimiser',
      chip: 'Processus',
    },
  },
  aiReceptionist: {
    problemStats: { alt: 'Statistiques sur le coût des demandes sans réponse' },
    proof: { alt: 'Carrousel d\'étude de cas avec chronologie et résultats nommés' },
    mobileApp: {
      alt: 'Application mobile Employé IA pour gérer les leads en déplacement',
      overlayLine: 'Leads en poche. Réponses en secondes.',
      chip: 'Mobile',
    },
    inboundFlow: {
      alt: 'Carte des sources de leads connectées à l\'Employé IA',
      overlayLine: 'Chaque canal. Un système.',
      chip: 'Entrant',
    },
  },
  futureReady: {
    problem: {
      alt: 'Diplômé avec certificat et portfolio vide sur le bureau',
      overlayLine: 'Un certificat ne paie pas. Un moyen de gagner, si.',
      chip: 'Écart de talents',
    },
    outcomes: { alt: 'Preuves de portfolio et résultats de préparation à l\'emploi' },
    caseStudy: {
      alt: 'Partenariat GS Laricharde en cours',
      overlayLine: 'Programme en cours — statut honnête',
      chip: 'Étude de cas',
    },
    skills: {
      alt: 'Parcours de carrière IA et grille de compétences',
      overlayLine: 'Un travail qu’un client paiera',
      chip: 'Compétences',
    },
  },
  agentic: {
    problem: {
      alt: 'Flux manuel copier-coller entre outils déconnectés',
      overlayLine: 'Le copier-coller n\'est pas un flux',
      chip: 'Opérations',
    },
    apps: {
      alt: 'Suite produits Digni : AMS, DigniGuide, SwiftDrop et plus',
      overlayLine: 'Systèmes construits autour de vrais flux',
      chip: 'Produits',
    },
    caseStudy: {
      alt: 'Déploiement de système agentique pour un client nommé',
      overlayLine: 'Des flux qui avancent sans copier-coller',
      chip: 'Preuve',
    },
    process: {
      alt: 'Diagramme du processus d\'installation agentique',
      overlayLine: 'Percevoir → Raisonner → Exécuter',
      chip: 'Processus',
    },
  },
  about: {
    story: {
      alt: 'Histoire et jalons de Digni Digital',
      overlayLine: 'La technologie crée des opportunités',
      chip: 'Histoire',
    },
    approach: {
      alt: 'Approche Digni : identifier les écarts et installer des systèmes',
      overlayLine: 'Identifier → Installer → Optimiser',
      chip: 'Approche',
    },
    differentiator: {
      alt: 'Systèmes installés pour combler les écarts opérationnels',
      overlayLine: 'Nous installons des systèmes—pas des heures',
      chip: 'Différence',
    },
  },
  solutions: {
    leadGen: {
      alt: 'Génération de leads et couverture de réponse entrante',
      overlayLine: 'La demande répondue avant qu\'elle ne parte',
      chip: 'Leads',
    },
    opsEfficiency: {
      alt: 'Efficacité opérationnelle via des flux agentiques connectés',
      overlayLine: 'Des flux qui avancent seuls',
      chip: 'Opérations',
    },
    customerExperience: {
      alt: 'Expérience client avec couverture de réponse cohérente',
      overlayLine: 'Chaque contact obtient une suite',
      chip: 'Expérience',
    },
    results: { alt: 'Résultats clients vérifiés et implémentations nommées' },
    beforeAfter: { alt: 'Comparaison avant/après flux fuyant vs boucle de croissance' },
  },
  products: {
    proposalAgent: {
      alt: 'Interface ProposalAgent créant des propositions en minutes',
      overlayLine: 'Propositions en minutes—pas en heures',
      chip: 'ProposalAgent',
    },
    socialProof: { alt: 'Statistiques d\'usage produit d\'opérateurs nommés' },
    comingSoon: {
      alt: 'Produits Digni à venir en développement',
      overlayLine: 'Conçu pour les opérateurs qui avancent vite',
      chip: 'Bientôt',
    },
  },
  digni: {
    diagnostic: {
      alt: 'Diagnostic DigniGuide par voix ou texte',
      overlayLine: 'Voyez ce qui est exposé—en une conversation',
      chip: 'DigniGuide',
    },
    assessment: {
      alt: 'Carte de résultats d\'évaluation montrant les écarts de couverture',
      overlayLine: 'Votre carte d\'exposition—spécifique, pas générique',
      chip: 'Évaluation',
    },
    booking: {
      alt: 'Réserver une démo depuis les résultats du diagnostic',
      overlayLine: 'Un petit pas vs un mois de fuites de plus',
      chip: 'Suite',
    },
  },
}

const es: ProofVisualTree = {
  home: {
    exposure: {
      alt: 'Tres exposiciones: consultas sin respuesta, habilidades sin prueba, flujos manuales',
      overlayLine: 'Tres fugas. Un socio para cerrarlas.',
      chip: 'Exposición',
    },
    coverageGrowth: {
      alt: 'Empleado IA respondiendo mensajes entrantes en todos los canales',
      overlayLine: 'Cada consulta calificada recibe un siguiente paso',
      chip: 'Crecimiento',
      channel: 'Empleado IA',
    },
    coverageTalent: {
      alt: 'Graduado con certificado junto a portfolio vacío',
      overlayLine: 'Una forma legítima de ganar',
      chip: 'Talento',
      channel: 'Future Ready',
    },
    coverageOperations: {
      alt: 'Equipo copiando datos entre herramientas desconectadas',
      overlayLine: 'El software debe hacer el trabajo manual',
      chip: 'Operaciones',
      channel: 'Sistemas agénticos',
    },
    proof: {
      alt: 'Implementaciones con clientes nombrados y estado honesto',
      overlayLine: 'Operadores nombrados. Estado honesto.',
      chip: 'Prueba',
    },
    process: {
      alt: 'Proceso instalador Digni de identificar a optimizar',
      overlayLine: 'Identificar → Desplegar → Optimizar',
      chip: 'Proceso',
    },
  },
  aiReceptionist: {
    problemStats: { alt: 'Estadísticas del costo de consultas sin respuesta' },
    proof: { alt: 'Carrusel de caso de estudio con cronología y resultados' },
    mobileApp: {
      alt: 'App móvil Empleado IA para gestionar leads',
      overlayLine: 'Leads en el bolsillo. Respuestas en segundos.',
      chip: 'Móvil',
    },
    inboundFlow: {
      alt: 'Mapa de fuentes de leads conectadas al Empleado IA',
      overlayLine: 'Cada canal. Un sistema.',
      chip: 'Entrante',
    },
  },
  futureReady: {
    problem: {
      alt: 'Graduado con certificado y portfolio vacío en el escritorio',
      overlayLine: 'Un certificado no paga. Una forma de ganar, sí.',
      chip: 'Brecha de talento',
    },
    outcomes: { alt: 'Evidencia de portfolio y resultados de empleabilidad' },
    caseStudy: {
      alt: 'Asociación GS Laricharde en progreso',
      overlayLine: 'Programa en progreso — estado honesto',
      chip: 'Caso de estudio',
    },
    skills: {
      alt: 'Rutas de carrera IA y cuadrícula de habilidades',
      overlayLine: 'Un trabajo que un cliente pagará',
      chip: 'Habilidades',
    },
  },
  agentic: {
    problem: {
      alt: 'Flujo manual copiar-pegar entre herramientas desconectadas',
      overlayLine: 'Copiar-pegar no es un flujo',
      chip: 'Operaciones',
    },
    apps: {
      alt: 'Suite de productos Digni: AMS, DigniGuide, SwiftDrop y más',
      overlayLine: 'Sistemas construidos alrededor de flujos reales',
      chip: 'Productos',
    },
    caseStudy: {
      alt: 'Despliegue de sistema agéntico para cliente nombrado',
      overlayLine: 'Flujos que avanzan sin copiar-pegar',
      chip: 'Prueba',
    },
    process: {
      alt: 'Diagrama del proceso instalador agéntico',
      overlayLine: 'Percibir → Razonar → Ejecutar',
      chip: 'Proceso',
    },
  },
  about: {
    story: {
      alt: 'Historia y hitos de Digni Digital',
      overlayLine: 'La tecnología crea oportunidad',
      chip: 'Historia',
    },
    approach: {
      alt: 'Enfoque Digni: identificar brechas e instalar sistemas',
      overlayLine: 'Identificar → Instalar → Optimizar',
      chip: 'Enfoque',
    },
    differentiator: {
      alt: 'Sistemas instalados para cerrar brechas operativas',
      overlayLine: 'Instalamos sistemas—no vendemos horas',
      chip: 'Diferencia',
    },
  },
  solutions: {
    leadGen: {
      alt: 'Generación de leads y cobertura de respuesta entrante',
      overlayLine: 'Demanda respondida antes de que se vaya',
      chip: 'Leads',
    },
    opsEfficiency: {
      alt: 'Eficiencia operativa mediante flujos agénticos conectados',
      overlayLine: 'Flujos que avanzan solos',
      chip: 'Operaciones',
    },
    customerExperience: {
      alt: 'Experiencia del cliente con cobertura de respuesta consistente',
      overlayLine: 'Cada contacto recibe un siguiente paso',
      chip: 'Experiencia',
    },
    results: { alt: 'Resultados verificados e implementaciones nombradas' },
    beforeAfter: { alt: 'Comparación antes/después de flujo con fugas vs bucle de crecimiento' },
  },
  products: {
    proposalAgent: {
      alt: 'Interfaz ProposalAgent creando propuestas en minutos',
      overlayLine: 'Propuestas en minutos—no en horas',
      chip: 'ProposalAgent',
    },
    socialProof: { alt: 'Estadísticas de uso de producto de operadores nombrados' },
    comingSoon: {
      alt: 'Próximos productos Digni en desarrollo',
      overlayLine: 'Hecho para operadores que avanzan rápido',
      chip: 'Próximamente',
    },
  },
  digni: {
    diagnostic: {
      alt: 'Diagnóstico DigniGuide por voz o texto',
      overlayLine: 'Vea lo expuesto—en una conversación',
      chip: 'DigniGuide',
    },
    assessment: {
      alt: 'Tarjeta de resultados de evaluación con brechas de cobertura',
      overlayLine: 'Su mapa de exposición—específico, no genérico',
      chip: 'Evaluación',
    },
    booking: {
      alt: 'Reservar demo desde resultados del diagnóstico',
      overlayLine: 'Un paso pequeño vs otro mes de fugas',
      chip: 'Siguiente paso',
    },
  },
}

const de: ProofVisualTree = {
  home: {
    exposure: {
      alt: 'Drei Betriebsrisiken: unbeantwortete Anfragen, Skills ohne Nachweis, manuelle Abläufe',
      overlayLine: 'Drei Lecks. Ein Partner schließt sie.',
      chip: 'Exposition',
    },
    coverageGrowth: {
      alt: 'KI-Mitarbeiter antwortet auf eingehende Nachrichten über alle Kanäle',
      overlayLine: 'Jede qualifizierte Anfrage erhält einen nächsten Schritt',
      chip: 'Wachstum',
      channel: 'KI-Mitarbeiter',
    },
    coverageTalent: {
      alt: 'Absolvent mit Zertifikat neben leerem Portfolio',
      overlayLine: 'Ein legitimer Weg zu verdienen',
      chip: 'Talente',
      channel: 'Future Ready',
    },
    coverageOperations: {
      alt: 'Team kopiert Daten zwischen getrennten Tools',
      overlayLine: 'Software sollte die manuelle Arbeit übernehmen',
      chip: 'Betrieb',
      channel: 'Agentische Systeme',
    },
    proof: {
      alt: 'Benannte Kundenimplementierungen mit ehrlichem Status',
      overlayLine: 'Benannte Betreiber. Ehrlicher Status.',
      chip: 'Nachweis',
    },
    process: {
      alt: 'Digni-Installationsprozess von Identifizieren bis Optimieren',
      overlayLine: 'Identifizieren → Deployen → Optimieren',
      chip: 'Prozess',
    },
  },
  aiReceptionist: {
    problemStats: { alt: 'Statistiken zu Kosten unbeantworteter Anfragen' },
    proof: { alt: 'Fallstudien-Karussell mit Zeitplan und benannten Ergebnissen' },
    mobileApp: {
      alt: 'KI-Mitarbeiter Mobile-App für Lead-Management unterwegs',
      overlayLine: 'Leads in der Tasche. Antworten in Sekunden.',
      chip: 'Mobil',
    },
    inboundFlow: {
      alt: 'Karte der Lead-Quellen verbunden mit KI-Mitarbeiter',
      overlayLine: 'Jeder Kanal. Ein System.',
      chip: 'Inbound',
    },
  },
  futureReady: {
    problem: {
      alt: 'Absolvent mit Zertifikat und leerem Portfolio auf dem Schreibtisch',
      overlayLine: 'Ein Zertifikat zahlt nicht. Ein Weg zu verdienen schon.',
      chip: 'Talentlücke',
    },
    outcomes: { alt: 'Portfolio-Nachweise und Beschäftigungsfähigkeit' },
    caseStudy: {
      alt: 'GS Laricharde Partnerschaft in Arbeit',
      overlayLine: 'Programm läuft — ehrlicher Status',
      chip: 'Fallstudie',
    },
    skills: {
      alt: 'KI-Karrierewege und Kompetenzraster',
      overlayLine: 'Arbeit, die ein Kunde bezahlt',
      chip: 'Skills',
    },
  },
  agentic: {
    problem: {
      alt: 'Manueller Copy-Paste-Workflow zwischen getrennten Tools',
      overlayLine: 'Copy-Paste ist kein Workflow',
      chip: 'Betrieb',
    },
    apps: {
      alt: 'Digni-Produktpalette: AMS, DigniGuide, SwiftDrop und mehr',
      overlayLine: 'Systeme um echte Workflows gebaut',
      chip: 'Produkte',
    },
    caseStudy: {
      alt: 'Agentisches System für benannten Kunden',
      overlayLine: 'Workflows ohne Copy-Paste',
      chip: 'Nachweis',
    },
    process: {
      alt: 'Diagramm des agentischen Installationsprozesses',
      overlayLine: 'Wahrnehmen → Schlussfolgern → Ausführen',
      chip: 'Prozess',
    },
  },
  about: {
    story: {
      alt: 'Digni Digital Ursprungsgeschichte und Meilensteine',
      overlayLine: 'Technologie schafft Chancen',
      chip: 'Geschichte',
    },
    approach: {
      alt: 'Digni-Ansatz: Lücken identifizieren und Systeme installieren',
      overlayLine: 'Identifizieren → Installieren → Optimieren',
      chip: 'Ansatz',
    },
    differentiator: {
      alt: 'Installierte Systeme schließen Betriebslücken',
      overlayLine: 'Wir installieren Systeme—verkaufen keine Stunden',
      chip: 'Unterschied',
    },
  },
  solutions: {
    leadGen: {
      alt: 'Lead-Generierung und Inbound-Antwortabdeckung',
      overlayLine: 'Nachfrage beantwortet, bevor sie geht',
      chip: 'Leads',
    },
    opsEfficiency: {
      alt: 'Betriebseffizienz durch verbundene agentische Workflows',
      overlayLine: 'Workflows, die von selbst laufen',
      chip: 'Betrieb',
    },
    customerExperience: {
      alt: 'Kundenerlebnis mit konsistenter Antwortabdeckung',
      overlayLine: 'Jeder Kontakt erhält einen nächsten Schritt',
      chip: 'Erlebnis',
    },
    results: { alt: 'Verifizierte Kundenergebnisse und benannte Implementierungen' },
    beforeAfter: { alt: 'Vorher/Nachher-Vergleich undicht vs Wachstumsschleife' },
  },
  products: {
    proposalAgent: {
      alt: 'ProposalAgent-Oberfläche erstellt Angebote in Minuten',
      overlayLine: 'Angebote in Minuten—nicht Stunden',
      chip: 'ProposalAgent',
    },
    socialProof: { alt: 'Produktnutzungsstatistiken benannter Betreiber' },
    comingSoon: {
      alt: 'Kommende Digni-Produkte in Entwicklung',
      overlayLine: 'Für Betreiber, die schnell handeln',
      chip: 'Demnächst',
    },
  },
  digni: {
    diagnostic: {
      alt: 'DigniGuide-Diagnose per Sprache oder Text',
      overlayLine: 'Sehen Sie, was offen liegt—in einem Gespräch',
      chip: 'DigniGuide',
    },
    assessment: {
      alt: 'Bewertungsergebnis mit Abdeckungslücken',
      overlayLine: 'Ihre Expositionskarte—spezifisch, nicht generisch',
      chip: 'Bewertung',
    },
    booking: {
      alt: 'Demo buchen aus Diagnoseergebnissen',
      overlayLine: 'Ein kleiner Schritt vs ein weiterer Monat Lecks',
      chip: 'Nächster Schritt',
    },
  },
}

const ar: ProofVisualTree = {
  home: {
    exposure: {
      alt: 'ثلاثة مخاطر تشغيلية: استفسارات بلا رد، مهارات بلا إثبات، تدفقات يدوية',
      overlayLine: 'ثلاثة تسريبات. شريك واحد لإغلاقها.',
      chip: 'التعرض',
    },
    coverageGrowth: {
      alt: 'موظف ذكاء اصطناعي يرد على الرسائل الواردة عبر القنوات',
      overlayLine: 'كل استفسار مؤهل يحصل على خطوة تالية',
      chip: 'النمو',
      channel: 'موظف الذكاء',
    },
    coverageTalent: {
      alt: 'خريج بشهادة بجانب ملف أعمال فارغ',
      overlayLine: 'وسيلة مشروعة للكسب',
      chip: 'المواهب',
      channel: 'Future Ready',
    },
    coverageOperations: {
      alt: 'فريق ينسخ البيانات بين أدوات غير متصلة',
      overlayLine: 'البرمجيات يجب أن تتولى العمل اليدوي',
      chip: 'العمليات',
      channel: 'أنظمة وكيلة',
    },
    proof: {
      alt: 'تطبيقات عملاء مسماة بحالة صادقة',
      overlayLine: 'مشغّلون مسماة. حالة صادقة.',
      chip: 'الإثبات',
    },
    process: {
      alt: 'عملية تركيب Digni من التحديد إلى التحسين',
      overlayLine: 'تحديد → نشر → تحسين',
      chip: 'العملية',
    },
  },
  aiReceptionist: {
    problemStats: { alt: 'إحصائيات تكلفة الاستفسارات غير المُجابة' },
    proof: { alt: 'عرض حالة دراسة مع جدول زمني ونتائج مسماة' },
    mobileApp: {
      alt: 'تطبيق موظف الذكاء لإدارة العملاء المحتملين',
      overlayLine: 'عملاء في جيبك. ردود في ثوانٍ.',
      chip: 'جوال',
    },
    inboundFlow: {
      alt: 'خريطة مصادر العملاء المتصلين بموظف الذكاء',
      overlayLine: 'كل قناة. نظام واحد.',
      chip: 'وارد',
    },
  },
  futureReady: {
    problem: {
      alt: 'خريج بشهادة وملف أعمال فارغ على المكتب',
      overlayLine: 'الشهادة لا تدفع. وسيلة للكسب، نعم.',
      chip: 'فجوة المواهب',
    },
    outcomes: { alt: 'أدلة ملف الأعمال ونتائج الجاهزية للعمل' },
    caseStudy: {
      alt: 'شراكة GS Laricharde قيد التنفيذ',
      overlayLine: 'برنامج جارٍ — حالة صادقة',
      chip: 'دراسة حالة',
    },
    skills: {
      alt: 'مسارات مهنية في الذكاء الاصطناعي وشبكة مهارات',
      overlayLine: 'عمل سيدفع العميل ثمنه',
      chip: 'مهارات',
    },
  },
  agentic: {
    problem: {
      alt: 'تدفق نسخ ولصق يدوي بين أدوات غير متصلة',
      overlayLine: 'النسخ واللصق ليس تدفق عمل',
      chip: 'العمليات',
    },
    apps: {
      alt: 'مجموعة منتجات Digni: AMS وDigniGuide وSwiftDrop والمزيد',
      overlayLine: 'أنظمة مبنية حول تدفقات حقيقية',
      chip: 'منتجات',
    },
    caseStudy: {
      alt: 'نشر نظام وكيل لعميل مسماة',
      overlayLine: 'تدفقات تتحرك بلا نسخ ولصق',
      chip: 'إثبات',
    },
    process: {
      alt: 'مخطط عملية التركيب الوكيل',
      overlayLine: 'إدراك → تفكير → تنفيذ',
      chip: 'العملية',
    },
  },
  about: {
    story: {
      alt: 'قصة Digni Digital ومعالمها',
      overlayLine: 'التكنولوجيا تخلق الفرص',
      chip: 'القصة',
    },
    approach: {
      alt: 'نهج Digni: تحديد الفجوات وتركيب الأنظمة',
      overlayLine: 'تحديد → تركيب → تحسين',
      chip: 'النهج',
    },
    differentiator: {
      alt: 'أنظمة مركّبة لسد الفجوات التشغيلية',
      overlayLine: 'نركّب أنظمة—لا نبيع ساعات',
      chip: 'التميز',
    },
  },
  solutions: {
    leadGen: {
      alt: 'توليد العملاء المحتملين وتغطية الرد الوارد',
      overlayLine: 'الطلب يُجاب قبل أن يذهب',
      chip: 'Leads',
    },
    opsEfficiency: {
      alt: 'كفاءة تشغيلية عبر تدفقات وكيلة متصلة',
      overlayLine: 'تدفقات تتحرك وحدها',
      chip: 'العمليات',
    },
    customerExperience: {
      alt: 'تجربة عميل مع تغطية رد متسقة',
      overlayLine: 'كل تواصل يحصل على خطوة تالية',
      chip: 'التجربة',
    },
    results: { alt: 'نتائج عملاء موثقة وتطبيقات مسماة' },
    beforeAfter: { alt: 'مقارنة قبل/بعد تدفق متسرب مقابل حلقة نمو' },
  },
  products: {
    proposalAgent: {
      alt: 'واجهة ProposalAgent لإنشاء عروض في دقائق',
      overlayLine: 'عروض في دقائق—لا ساعات',
      chip: 'ProposalAgent',
    },
    socialProof: { alt: 'إحصائيات استخدام منتج من مشغّلين مسماة' },
    comingSoon: {
      alt: 'منتجات Digni قادمة قيد التطوير',
      overlayLine: 'لبناها للمشغّلين السريعين',
      chip: 'قريباً',
    },
  },
  digni: {
    diagnostic: {
      alt: 'تشخيص DigniGuide بالصوت أو النص',
      overlayLine: 'انظر ما هو مكشوف—في محادثة واحدة',
      chip: 'DigniGuide',
    },
    assessment: {
      alt: 'بطاقة نتائج تقييم تُظهر فجوات التغطية',
      overlayLine: 'خريطة تعرضك—محددة لا عامة',
      chip: 'التقييم',
    },
    booking: {
      alt: 'حجز عرض توضيحي من نتائج التشخيص',
      overlayLine: 'خطوة صغيرة مقابل شهر آخر من التسريبات',
      chip: 'الخطوة التالية',
    },
  },
}

const proofVisualsByLanguage: Record<Language, ProofVisualTree> = {
  en,
  fr,
  es,
  de,
  ar,
}

function resolveCopy(tree: ProofVisualTree, key: string): ProofVisualCopy | undefined {
  const parts = key.split('.')
  let node: ProofVisualCopy | ProofVisualTree | undefined = tree
  for (const part of parts) {
    if (!node || typeof node !== 'object' || 'alt' in node) return undefined
    node = (node as ProofVisualTree)[part]
  }
  if (node && typeof node === 'object' && 'alt' in node) {
    return node as ProofVisualCopy
  }
  return undefined
}

export function getProofVisualCopy(language: Language, i18nKey: string): ProofVisualCopy {
  const copy =
    resolveCopy(proofVisualsByLanguage[language], i18nKey) ??
    resolveCopy(proofVisualsByLanguage.en, i18nKey)
  return copy ?? { alt: i18nKey }
}

export type DigniWrapperCopy = {
  heroBadge: string
  heroTitle: string
  heroTitleHighlight: string
  heroSubtitle: string
  step1Label: string
  step1Title: string
  step1Highlight: string
  step1Supporting: string
  step2Label: string
  step2Title: string
  step2Highlight: string
  step2Supporting: string
  step3Label: string
  step3Title: string
  step3Highlight: string
  step3Supporting: string
}

const digniWrapperEn: DigniWrapperCopy = {
  heroBadge: 'DigniGuide',
  heroTitle: "See what's exposed",
  heroTitleHighlight: 'before you commit.',
  heroSubtitle:
    'Voice or text diagnostic. One conversation maps your growth, talent, or operations gaps—and what to install next.',
  step1Label: 'Step 1',
  step1Title: 'Talk through what is leaking.',
  step1Highlight: 'Voice or text.',
  step1Supporting:
    'DigniGuide asks the questions your team skips—where inbound dies, where graduates lack proof, where workflows still run on copy-paste.',
  step2Label: 'Step 2',
  step2Title: 'Get your exposure map.',
  step2Highlight: 'Specific, not generic.',
  step2Supporting:
    'See which coverage system fits: Growth, Talent, or Operations—and what installing it would protect.',
  step3Label: 'Step 3',
  step3Title: 'Book when you are ready.',
  step3Highlight: 'One small step.',
  step3Supporting:
    'No pressure sell. When the loss feels close enough, book an onboarding demo or start an assessment.',
}

const digniWrapperFr: DigniWrapperCopy = {
  heroBadge: 'DigniGuide',
  heroTitle: 'Voyez ce qui est exposé',
  heroTitleHighlight: 'avant de vous engager.',
  heroSubtitle:
    'Diagnostic voix ou texte. Une conversation cartographie vos écarts croissance, talents ou opérations—et quoi installer ensuite.',
  step1Label: 'Étape 1',
  step1Title: 'Parlez de ce qui fuit.',
  step1Highlight: 'Voix ou texte.',
  step1Supporting:
    'DigniGuide pose les questions que votre équipe évite—où l’entrant meurt, où les diplômés manquent de preuve, où les flux restent manuels.',
  step2Label: 'Étape 2',
  step2Title: 'Obtenez votre carte d’exposition.',
  step2Highlight: 'Spécifique, pas générique.',
  step2Supporting:
    'Voyez quelle couverture convient : Croissance, Talents ou Opérations—et ce que l’installation protégerait.',
  step3Label: 'Étape 3',
  step3Title: 'Réservez quand vous êtes prêt.',
  step3Highlight: 'Un petit pas.',
  step3Supporting:
    'Pas de vente forcée. Quand la perte semble assez proche, réservez une démo ou lancez une évaluation.',
}

const digniWrapperEs: DigniWrapperCopy = {
  heroBadge: 'DigniGuide',
  heroTitle: 'Vea lo expuesto',
  heroTitleHighlight: 'antes de comprometerse.',
  heroSubtitle:
    'Diagnóstico por voz o texto. Una conversación mapea sus brechas de crecimiento, talento u operaciones—y qué instalar después.',
  step1Label: 'Paso 1',
  step1Title: 'Hable de lo que se escapa.',
  step1Highlight: 'Voz o texto.',
  step1Supporting:
    'DigniGuide hace las preguntas que su equipo evita—dónde muere el inbound, dónde falta prueba, dónde los flujos siguen siendo manuales.',
  step2Label: 'Paso 2',
  step2Title: 'Obtenga su mapa de exposición.',
  step2Highlight: 'Específico, no genérico.',
  step2Supporting:
    'Vea qué cobertura encaja: Crecimiento, Talento u Operaciones—y qué protegería instalarla.',
  step3Label: 'Paso 3',
  step3Title: 'Reserve cuando esté listo.',
  step3Highlight: 'Un paso pequeño.',
  step3Supporting:
    'Sin presión de venta. Cuando la pérdida se sienta lo bastante cerca, reserve una demo o inicie una evaluación.',
}

const digniWrapperDe: DigniWrapperCopy = {
  heroBadge: 'DigniGuide',
  heroTitle: 'Sehen Sie, was offen liegt',
  heroTitleHighlight: 'bevor Sie sich binden.',
  heroSubtitle:
    'Diagnose per Sprache oder Text. Ein Gespräch kartiert Ihre Wachstums-, Talent- oder Betriebslücken—und was als Nächstes installiert wird.',
  step1Label: 'Schritt 1',
  step1Title: 'Sprechen Sie durch, was leckt.',
  step1Highlight: 'Sprache oder Text.',
  step1Supporting:
    'DigniGuide stellt die Fragen, die Ihr Team überspringt—wo Inbound stirbt, wo Absolventen keine Nachweise haben, wo Workflows manuell bleiben.',
  step2Label: 'Schritt 2',
  step2Title: 'Holen Sie sich Ihre Expositionskarte.',
  step2Highlight: 'Spezifisch, nicht generisch.',
  step2Supporting:
    'Sehen Sie, welche Abdeckung passt: Wachstum, Talente oder Betrieb—und was die Installation schützen würde.',
  step3Label: 'Schritt 3',
  step3Title: 'Buchen Sie, wenn Sie bereit sind.',
  step3Highlight: 'Ein kleiner Schritt.',
  step3Supporting:
    'Kein Druckverkauf. Wenn der Verlust nah genug fühlt, buchen Sie eine Demo oder starten Sie eine Bewertung.',
}

const digniWrapperAr: DigniWrapperCopy = {
  heroBadge: 'DigniGuide',
  heroTitle: 'انظر ما هو مكشوف',
  heroTitleHighlight: 'قبل أن تلتزم.',
  heroSubtitle:
    'تشخيص بالصوت أو النص. محادثة واحدة ترسم فجوات النمو أو المواهب أو العمليات—وما يجب تركيبه بعد ذلك.',
  step1Label: 'الخطوة 1',
  step1Title: 'تحدث عما يتسرب.',
  step1Highlight: 'صوت أو نص.',
  step1Supporting:
    'DigniGuide يطرح الأسئلة التي يتجنبها فريقك—أين يموت الوارد، أين ينقص الدليل، أين تبقى التدفقات يدوية.',
  step2Label: 'الخطوة 2',
  step2Title: 'احصل على خريطة التعرض.',
  step2Highlight: 'محددة، لا عامة.',
  step2Supporting:
    'انظر أي تغطية تناسبك: النمو أو المواهب أو العمليات—وما الذي سيحميه التركيب.',
  step3Label: 'الخطوة 3',
  step3Title: 'احجز عندما تكون جاهزاً.',
  step3Highlight: 'خطوة صغيرة.',
  step3Supporting:
    'لا ضغط بيع. عندما تشعر أن الخسارة قريبة достаточاً، احجز عرضاً أو ابدأ تقييماً.',
}

const digniWrapperByLanguage: Record<Language, DigniWrapperCopy> = {
  en: digniWrapperEn,
  fr: digniWrapperFr,
  es: digniWrapperEs,
  de: digniWrapperDe,
  ar: digniWrapperAr,
}

export function getDigniWrapperCopy(language: Language): DigniWrapperCopy {
  return digniWrapperByLanguage[language] ?? digniWrapperEn
}
