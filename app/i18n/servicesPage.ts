/**
 * Services listing page, product cards.
 * Keep in sync with home.whatWeDo, aiEmployeePage.capabilities, agentic softwares tiers, and future ready graduate trimesters.
 */

export type ServicesPageCardId = 'ai-receptionist' | 'future-ready-graduate' | 'agentic-softwares'

export type ServicesPageCard = {
 id: ServicesPageCardId
 title: string
 subtitle: string
 description: string
 outcomes: string[]
 /** Six capability style deliverables per offering (aligned to product pages). */
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
 title: 'AI Employee',
 subtitle: 'Growth exposure: paid demand going cold',
 description:
 'You already paid for those leads. We identify the inbound workflow, build the AI Employee, connect it to your channels, and deploy it so every qualified inquiry gets a next step.',
 primaryCta: 'Find Your Revenue Leaks',
 secondaryCta: 'Book a Growth System Audit',
 outcomes: [
 'Every inbound touch gets a reply',
 'More booked jobs from the same spend',
 'You stay on the tools—the system books',
 ],
 deliverables: [
 'Instant response',
 'Smart qualification',
 'Auto booking',
 'Follow up that runs',
 'Multi channel, one brain',
 'Revenue recovery',
 ],
 technologies: [
 'Voice & messaging AI',
 'Unified inbox',
 'CRM & calendar connectors',
 ],
 timeline: 'Often live in 48h (from decision to operational)',
 link: '/ai-receptionist',
 },
 {
 id: 'future-ready-graduate',
 title: 'Future Ready',
 subtitle: 'Talent exposure: knowledge without evidence',
 description:
 'A degree can get them to the door. Skills get them through it. Learn → Build → Apply → Demonstrate—practical AI capability with portfolio evidence.',
 outcomes: [
 'Capability, not attendance',
 'Portfolio evidence employers can evaluate',
 'Built for schools, institutes, and employers',
 ],
 deliverables: [
 'Digital foundation & web development',
 'Digital marketing & analytics',
 'Professional portfolio building',
 'Guided learning tailored to each student',
 'Job readiness & industry internships',
 'Career placement support',
 ],
 technologies: ['AI assisted learning', 'Web development', 'Digital marketing'],
 timeline: '9 months · 3 trimesters',
 link: '/future-ready-graduate',
 primaryCta: "Assess Your Students' Readiness",
 secondaryCta: 'Book a School Consultation',
 },
 {
 id: 'agentic-softwares',
 title: 'Agentic Systems',
 subtitle: 'Operations exposure: people moving information',
 description:
 'Stop paying people to move information. We identify the repetitive workflow, build an agentic system around how you actually work, and put it into operation.',
 outcomes: ['The system detects the event and acts', 'Built around your workflow', 'Digni handles implementation'],
 deliverables: [
 'Agent design & workflow automation',
 'LLM integration & tool use',
 'Multi agent orchestration',
 'Secure deployment & integrations',
 'Human in the loop where it matters',
 'Monitoring & continuous improvement',
 ],
 technologies: ['LangChain', 'OpenAI API', 'Next.js', 'Supabase', 'PostgreSQL'],
 timeline: '7 days to 3 months (MVP to full platform, by scope)',
 link: '/agentic-softwares',
 primaryCta: 'Find the Workflow Worth Automating',
 secondaryCta: 'Book a Project Consultation',
 },
],
 stats: [
 {
 value: '3',
 suffix: '',
 label: 'Coverage systems',
 sublabel: 'Growth, talent, and operations',
 icon: '📈',
 },
 {
 value: 'Named',
 suffix: '',
 label: 'Operators we can name',
 sublabel: 'Fremo, Shep, GS Laricharde, and more',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'Inbound can be covered',
 sublabel: 'When your team is with a customer',
 icon: '🤖',
 },
 ],
 bottomCta: {
 title: 'Still Holding It Together Yourself?',
 subtitle: 'Tell us which struggle is keeping you up. We’ll install the fix.',
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
 title: 'Employé IA',
 subtitle: 'Exposition liée à la croissance : la demande payée qui refroidit',
 description:
 'Vous avez payé pour générer ces prospects. Nous identifions le flux inbound, construisons l’Employé IA, le connectons à vos canaux et le déployons pour que chaque demande qualifiée obtienne une suite.',
 outcomes: [
 'Chaque entrée obtient une réponse',
 'Plus de jobs bookés avec le même budget',
 'Vous restez sur le terrain—le système booke',
 ],
 deliverables: [
 'Réponse instantanée',
 'Qualification intelligente',
 'Prise de rendez vous auto',
 'Relances qui tournent',
 'Multi canal, un cerveau',
 'Récupération de revenu',
 ],
 technologies: ['IA voix & messagerie', 'Boîte unifiée', 'CRM & agendas connectés'],
 timeline: 'Souvent en ligne en 48 h (de la décision à l’opérationnel)',
 link: '/ai-receptionist',
 primaryCta: 'Trouver vos fuites de revenus',
 secondaryCta: 'Réserver un audit du système de croissance',
 },
 {
 id: 'future-ready-graduate',
 title: 'Future Ready',
 subtitle: 'Exposition liée aux talents : le savoir sans preuve',
 description:
 'Un diplôme peut les mener à la porte. Les compétences les font entrer. Learn → Build → Apply → Demonstrate—capacité IA pratique avec preuves de portfolio.',
 outcomes: [
 'La capacité, pas la présence',
 'Des preuves de portfolio que les employeurs peuvent évaluer',
 'Conçu pour les écoles, instituts et employeurs',
 ],
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
 primaryCta: 'Évaluer la préparation de vos étudiants',
 secondaryCta: 'Réserver une consultation école',
 },
 {
 id: 'agentic-softwares',
 title: 'Systèmes agentiques',
 subtitle: 'Exposition liée aux opérations : des personnes qui déplacent l’information',
 description:
 'Arrêtez de payer des personnes pour déplacer des informations. Nous identifions le flux répétitif, construisons un système agentique autour de votre façon de travailler, et le mettons en opération.',
 outcomes: ['Le système détecte l’événement et agit', 'Construit autour de votre flux', 'Digni gère l’implémentation'],
 deliverables: [
 'Conception d’agents & automatisation des flux',
 'Intégration LLM & outils',
 'Orchestration multi agents',
 'Déploiement sécurisé & intégrations',
 'Humain dans la boucle au bon endroit',
 'Suivi & amélioration continue',
 ],
 technologies: ['LangChain', 'OpenAI API', 'Next.js', 'Supabase', 'PostgreSQL'],
 timeline: '7 jours à 3 mois (MVP à plateforme complète, selon le périmètre)',
 link: '/agentic-softwares',
 primaryCta: 'Trouver le flux à automatiser',
 secondaryCta: 'Réserver une consultation projet',
 },
 ],
 stats: [
 {
 value: '3',
 suffix: '',
 label: 'Systèmes de couverture',
 sublabel: 'Croissance, talents et opérations',
 icon: '📈',
 },
 {
 value: 'Nommés',
 suffix: '',
 label: 'Opérateurs que nous pouvons nommer',
 sublabel: 'Fremo, Shep, GS Laricharde, et d’autres',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'L’inbound peut être couvert',
 sublabel: 'Quand votre équipe est avec un client',
 icon: '🤖',
 },
 ],
 bottomCta: {
 title: 'Vous tenez encore tout ensemble vous-même ?',
 subtitle: 'Dites-nous quelle lutte vous tient éveillé. Nous installerons la solution.',
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
 title: 'Empleado IA',
 subtitle: 'Exposición de crecimiento: demanda pagada que se enfría',
 description:
 'Ya pagó por esos leads. Identificamos el flujo inbound, construimos el Empleado IA, lo conectamos a sus canales y lo desplegamos para que cada consulta cualificada tenga un siguiente paso.',
 outcomes: [
 'Cada entrada recibe respuesta',
 'Más trabajos reservados con el mismo gasto',
 'Usted sigue en el trabajo—el sistema reserva',
 ],
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
 primaryCta: 'Encuentre sus fugas de ingresos',
 secondaryCta: 'Reserve una auditoría del sistema de crecimiento',
 },
 {
 id: 'future-ready-graduate',
 title: 'Future Ready',
 subtitle: 'Exposición de talento: conocimiento sin evidencia',
 description:
 'Un título puede llevarlos a la puerta. Las habilidades los hacen entrar. Learn → Build → Apply → Demonstrate—capacidad práctica de IA con evidencia de portafolio.',
 outcomes: [
 'Capacidad, no asistencia',
 'Evidencia de portafolio que los empleadores pueden evaluar',
 'Hecho para escuelas, institutos y empleadores',
 ],
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
 primaryCta: 'Evalúe la preparación de sus estudiantes',
 secondaryCta: 'Reserve una consulta escolar',
 },
 {
 id: 'agentic-softwares',
 title: 'Sistemas agénticos',
 subtitle: 'Exposición de operaciones: personas que mueven información',
 description:
 'Deje de pagar a personas para mover información. Identificamos el flujo repetitivo, construimos un sistema agéntico alrededor de cómo trabaja realmente, y lo ponemos en operación.',
 outcomes: ['El sistema detecta el evento y actúa', 'Construido alrededor de su flujo', 'Digni gestiona la implementación'],
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
 primaryCta: 'Encuentre el flujo que vale la pena automatizar',
 secondaryCta: 'Reserve una consulta de proyecto',
 },
 ],
 stats: [
 {
 value: '3',
 suffix: '',
 label: 'Sistemas de cobertura',
 sublabel: 'Crecimiento, talento y operaciones',
 icon: '📈',
 },
 {
 value: 'Nombrados',
 suffix: '',
 label: 'Operadores que podemos nombrar',
 sublabel: 'Fremo, Shep, GS Laricharde y más',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'El inbound puede cubrirse',
 sublabel: 'Cuando su equipo está con un cliente',
 icon: '🤖',
 },
 ],
 bottomCta: {
 title: '¿Todavía lo sostiene todo usted solo?',
 subtitle: 'Díganos qué lucha le quita el sueño. Instalaremos la solución.',
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
 title: 'AI Employee',
 subtitle: 'Wachstumsrisiko: bezahlte Nachfrage, die erkaltet',
 description:
 'Sie haben für diese Leads bereits bezahlt. Wir identifizieren den Inbound-Workflow, bauen den AI Employee, verbinden ihn mit Ihren Kanälen und setzen ihn so ein, dass jede qualifizierte Anfrage einen nächsten Schritt bekommt.',
 outcomes: [
 'Jeder eingehende Kontakt bekommt Antwort',
 'Mehr gebuchte Jobs bei gleichem Spend',
 'Sie bleiben auf dem Job—das System bucht',
 ],
 deliverables: [
 'Sofortige Antwort',
 'Intelligente Qualifizierung',
 'Automatische Buchung',
 'Nachverfolgung, die läuft',
 'Mehrere Kanäle, ein Gehirn',
 'Umsatz zurückgewinnen',
 ],
 technologies: ['Sprach & Messaging KI', 'Einheitlicher Posteingang', 'CRM & Kalender Connectoren'],
 timeline: 'Oft in 48 Std. live (von der Entscheidung bis zum Betrieb)',
 link: '/ai-receptionist',
 primaryCta: 'Finden Sie Ihre Umsatzlecks',
 secondaryCta: 'Growth-System-Audit buchen',
 },
 {
 id: 'future-ready-graduate',
 title: 'Future Ready',
 subtitle: 'Talentrisiko: Wissen ohne Nachweis',
 description:
 'Ein Abschluss bringt sie zur Tür. Skills bringen sie hindurch. Learn → Build → Apply → Demonstrate—praktische KI-Fähigkeit mit Portfolio-Nachweis.',
 outcomes: [
 'Fähigkeit, nicht Anwesenheit',
 'Portfolio-Nachweis, den Arbeitgeber bewerten können',
 'Für Schulen, Institute und Arbeitgeber gebaut',
 ],
 deliverables: [
 'Digitale Grundlagen & Webentwicklung',
 'Digitales Marketing & Analytics',
 'Aufbau eines professionellen Portfolios',
 'Geführtes Lernen passend zu jedem Studenten',
 'Berufsvorbereitung & Branchenpraktika',
 'Unterstützung bei der Vermittlung',
 ],
 technologies: ['KI gestütztes Lernen', 'Webentwicklung', 'Digitales Marketing'],
 timeline: '9 Monate · 3 Trimester',
 link: '/future-ready-graduate',
 primaryCta: 'Bereitschaft Ihrer Studierenden prüfen',
 secondaryCta: 'Schulberatung buchen',
 },
 {
 id: 'agentic-softwares',
 title: 'Agentische Systeme',
 subtitle: 'Operationsrisiko: Menschen, die Informationen verschieben',
 description:
 'Hören Sie auf, Menschen dafür zu bezahlen, Informationen zu verschieben. Wir identifizieren den repetitiven Workflow, bauen ein agentisches System um Ihre reale Arbeit und setzen es in Betrieb.',
 outcomes: ['Das System erkennt das Ereignis und handelt', 'Gebaut um Ihren Workflow', 'Digni übernimmt die Umsetzung'],
 deliverables: [
 'Agentendesign & Workflow Automatisierung',
 'LLM Integration & Tool Nutzung',
 'Multi Agenten Orchestrierung',
 'Sichere Bereitstellung & Integrationen',
 'Mensch im Prozess, wo es zählt',
 'Monitoring & kontinuierliche Verbesserung',
 ],
 technologies: ['LangChain', 'OpenAI API', 'Next.js', 'Supabase', 'PostgreSQL'],
 timeline: '7 Tage bis 3 Monate (MVP bis Vollplattform, je nach Umfang)',
 link: '/agentic-softwares',
 primaryCta: 'Den Workflow finden, der Automatisierung verdient',
 secondaryCta: 'Projektberatung buchen',
 },
 ],
 stats: [
 {
 value: '3',
 suffix: '',
 label: 'Absicherungssysteme',
 sublabel: 'Wachstum, Talent und Operations',
 icon: '📈',
 },
 {
 value: 'Benannt',
 suffix: '',
 label: 'Betreiber, die wir nennen können',
 sublabel: 'Fremo, Shep, GS Laricharde und mehr',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'Inbound kann abgesichert werden',
 sublabel: 'Wenn Ihr Team beim Kunden ist',
 icon: '🤖',
 },
 ],
 bottomCta: {
 title: 'Halten Sie alles noch selbst zusammen?',
 subtitle: 'Sagen Sie uns, welcher Kampf Sie wach hält. Wir installieren die Lösung.',
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
 title: 'موظف الذكاء الاصطناعي',
 subtitle: 'تعرّض النمو: الطلب المدفوع الذي يبرد',
 description:
 'لقد دفعت مقابل هؤلاء العملاء المحتملين. نحدّد تدفق الوارد، نبني موظف الذكاء الاصطناعي، نربطه بقنواتك وننشره حتى تحصل كل استفسار مؤهل على خطوة تالية.',
 outcomes: [
 'كل تواصل وارد يحصل على رد',
 'مزيد من الأعمال المحجوزة بنفس الإنفاق',
 'أنت تبقى في العمل—والنظام يحجز',
 ],
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
 primaryCta: 'اعثر على تسربات إيراداتك',
 secondaryCta: 'احجز مراجعة نظام النمو',
 },
 {
 id: 'future-ready-graduate',
 title: 'Future Ready',
 subtitle: 'تعرّض المواهب: معرفة بلا دليل',
 description:
 'الشهادة قد توصلهم إلى الباب. المهارات تدخلهم منه. Learn → Build → Apply → Demonstrate—قدرة عملية بالذكاء الاصطناعي مع إثبات ملف أعمال.',
 outcomes: [
 'القدرة، لا الحضور',
 'إثبات ملف أعمال يمكن لأصحاب العمل تقييمه',
 'مصمم للمدارس والمعاهد وأصحاب العمل',
 ],
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
 primaryCta: 'قيّم جاهزية طلابك',
 secondaryCta: 'احجز استشارة للمدرسة',
 },
 {
 id: 'agentic-softwares',
 title: 'أنظمة وكيلية',
 subtitle: 'تعرّض العمليات: أشخاص ينقلون المعلومات',
 description:
 'توقف عن دفع أجور لأشخاص لنقل المعلومات. نحدّد سير العمل المتكرر، نبني نظاماً وكيلياً حول طريقة عملك الفعلية، ونضعه قيد التشغيل.',
 outcomes: ['النظام يكتشف الحدث ويتصرف', 'مبني حول سير عملك', 'Digni تتولى التنفيذ'],
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
 primaryCta: 'اعثر على سير العمل الذي يستحق الأتمتة',
 secondaryCta: 'احجز استشارة للمشروع',
 },
 ],
 stats: [
 {
 value: '3',
 suffix: '',
 label: 'أنظمة تغطية',
 sublabel: 'النمو والمواهب والعمليات',
 icon: '📈',
 },
 {
 value: 'مسمّون',
 suffix: '',
 label: 'مشغّلون يمكننا تسميتهم',
 sublabel: 'Fremo وShep وGS Laricharde والمزيد',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'يمكن تغطية الوارد',
 sublabel: 'عندما يكون فريقك مع عميل',
 icon: '🤖',
 },
 ],
 bottomCta: {
 title: 'ما زلت تمسك بكل شيء وحدك؟',
 subtitle: 'أخبرنا أي صراع يُبقيك مستيقظاً. سنثبّت الحل.',
 },
}
