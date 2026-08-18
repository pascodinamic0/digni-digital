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
 title: 'AI Employee Systems',
 subtitle: 'Struggle: leads die in silence',
 description:
 'You already paid for those leads. Most never get a reply. We sell booked jobs while you work—not another chatbot.',
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
 primaryCta: 'Stop Losing Paid Leads',
 secondaryCta: 'See What Silence Is Costing You',
 },
 {
 id: 'future-ready-graduate',
 title: 'Future Ready Graduate Program',
 subtitle: 'Struggle: degrees without jobs',
 description:
 'A degree is not the destination. A hired graduate is. We sell employment-ready proof employers hire for—not another theory course.',
 outcomes: [
 'Graduates employers actually hire',
 'Portfolio proof, not certificates alone',
 'Students who can earn, not only graduate',
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
 primaryCta: 'Stop Graduating Into Nowhere',
 secondaryCta: 'See What Unhireable Costs Schools',
 },
 {
 id: 'agentic-softwares',
 title: 'Agentic Softwares',
 subtitle: 'Struggle: you are the glue',
 description:
 'Manual work is stealing a third of your week. We sell operations that run without you as the glue—custom systems you own.',
 outcomes: ['Hours returned to your week', 'Fewer handoff errors', 'The workflow runs without you babysitting'],
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
 primaryCta: 'Stop Being The Glue',
 secondaryCta: 'Name The Workflow Stealing Your Week',
 },
],
 stats: [
 {
 value: '300',
 suffix: '%',
 label: 'Lead Conversion Increase',
 sublabel: 'When silence stops choosing for you',
 icon: '📈',
 },
 {
 value: '85',
 suffix: '%',
 label: 'Graduate Employment Rate',
 sublabel: 'When school ends in a job, not a waitlist',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'Always On Intake',
 sublabel: 'So unpaid leads stop walking away',
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
 title: 'Systèmes employé IA',
 subtitle: 'Lutte : les leads meurent en silence',
 description:
 'Vous avez déjà payé ces leads. La plupart n’obtiennent jamais de réponse. Nous vendons des jobs bookés pendant que vous travaillez—pas un chatbot de plus.',
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
 primaryCta: 'Arrêter de perdre les leads payés',
 secondaryCta: 'Voir ce que coûte le silence',
 },
 {
 id: 'future-ready-graduate',
 title: 'Programme Diplômé Prêt pour l\'Avenir',
 subtitle: 'Lutte : diplômes sans emploi',
 description:
 'Un diplôme n’est pas la destination. Un diplômé embauché l’est. Nous vendons la preuve employable que les employeurs embauchent—pas un cours de théorie de plus.',
 outcomes: [
 'Des diplômés que les employeurs embauchent vraiment',
 'Preuve portfolio, pas seulement des certificats',
 'Des étudiants qui gagnent, pas seulement qui diplôment',
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
 primaryCta: 'Arrêter de diplômer dans le vide',
 secondaryCta: 'Voir ce que coûte l’inemployabilité',
 },
 {
 id: 'agentic-softwares',
 title: 'Agentic Softwares',
 subtitle: 'Lutte : vous êtes la colle',
 description:
 'Le travail manuel vole un tiers de votre semaine. Nous vendons des opérations qui tournent sans vous comme colle—des systèmes sur mesure à vous.',
 outcomes: ['Des heures rendues à votre semaine', 'Moins d’erreurs de passage', 'Le flux tourne sans babysitting'],
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
 primaryCta: 'Arrêter d’être la colle',
 secondaryCta: 'Nommer le flux qui vole votre semaine',
 },
 ],
 stats: [
 {
 value: '300',
 suffix: '%',
 label: 'Hausse de conversion des prospects',
 sublabel: 'Quand le silence arrête de choisir pour vous',
 icon: '📈',
 },
 {
 value: '85',
 suffix: '%',
 label: 'Taux d\'emploi des diplômés',
 sublabel: 'Quand l’école finit en emploi, pas en liste d’attente',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'Accueil toujours actif',
 sublabel: 'Pour que les leads payés arrêtent de filer',
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
 title: 'Sistemas de empleado IA',
 subtitle: 'Lucha: los leads mueren en silencio',
 description:
 'Ya pagó por esos leads. La mayoría nunca recibe respuesta. Vendemos trabajos reservados mientras usted trabaja—no otro chatbot.',
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
 primaryCta: 'Deje de perder leads pagados',
 secondaryCta: 'Vea lo que le cuesta el silencio',
 },
 {
 id: 'future-ready-graduate',
 title: 'Programa Future Ready Graduate',
 subtitle: 'Lucha: títulos sin empleo',
 description:
 'Un título no es el destino. Un graduado contratado sí. Vendemos prueba lista para el empleo que los empleadores contratan—no otro curso de teoría.',
 outcomes: [
 'Graduados que los empleadores sí contratan',
 'Prueba de portafolio, no solo certificados',
 'Estudiantes que ganan, no solo se gradúan',
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
 primaryCta: 'Deje de graduar hacia la nada',
 secondaryCta: 'Vea lo que cuesta no ser empleable',
 },
 {
 id: 'agentic-softwares',
 title: 'Agentic Softwares',
 subtitle: 'Lucha: usted es el pegamento',
 description:
 'El trabajo manual le roba un tercio de la semana. Vendemos operaciones que corren sin usted como pegamento—sistemas a medida que usted posee.',
 outcomes: ['Horas devueltas a su semana', 'Menos errores de traspaso', 'El flujo corre sin que lo cuide'],
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
 primaryCta: 'Deje de ser el pegamento',
 secondaryCta: 'Nombre el flujo que le roba la semana',
 },
 ],
 stats: [
 {
 value: '300',
 suffix: '%',
 label: 'Aumento en conversión de leads',
 sublabel: 'Cuando el silencio deja de elegir por usted',
 icon: '📈',
 },
 {
 value: '85',
 suffix: '%',
 label: 'Tasa de empleo de graduados',
 sublabel: 'Cuando la escuela termina en un empleo, no en una lista de espera',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'Recepción siempre activa',
 sublabel: 'Para que los leads pagados dejen de escaparse',
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
 title: 'KI Mitarbeiter Systeme',
 subtitle: 'Kampf: Leads sterben in Stille',
 description:
 'Sie haben für diese Leads schon bezahlt. Die meisten bekommen nie eine Antwort. Wir verkaufen gebuchte Jobs, während Sie arbeiten—kein weiteres Chatbot.',
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
 primaryCta: 'Bezahlte Leads nicht mehr verlieren',
 secondaryCta: 'Sehen, was Stille kostet',
 },
 {
 id: 'future-ready-graduate',
 title: 'Future Ready Graduate Program',
 subtitle: 'Kampf: Abschlüsse ohne Jobs',
 description:
 'Ein Abschluss ist nicht das Ziel. Ein eingestellter Absolvent ist es. Wir verkaufen beschäftigungsfähigen Nachweis, für den Arbeitgeber einstellen—keinen weiteren Theoriekurs.',
 outcomes: [
 'Absolventen, die Arbeitgeber wirklich einstellen',
 'Portfolio Nachweis, nicht nur Zertifikate',
 'Studierende, die verdienen—nicht nur abschließen',
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
 primaryCta: 'Nicht mehr ins Nichts graduieren',
 secondaryCta: 'Sehen, was Nicht Einstellbarkeit kostet',
 },
 {
 id: 'agentic-softwares',
 title: 'Agentic Softwares',
 subtitle: 'Kampf: Sie sind der Klebstoff',
 description:
 'Manuelle Arbeit stiehlt ein Drittel Ihrer Woche. Wir verkaufen Abläufe, die ohne Sie als Klebstoff laufen—maßgeschneiderte Systeme, die Ihnen gehören.',
 outcomes: ['Stunden zurück in Ihre Woche', 'Weniger Übergabefehler', 'Der Workflow läuft ohne Babysitting'],
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
 primaryCta: 'Hören Sie auf, der Klebstoff zu sein',
 secondaryCta: 'Nennen Sie den Workflow, der Ihre Woche stiehlt',
 },
 ],
 stats: [
 {
 value: '300',
 suffix: '%',
 label: 'Mehr Lead Konversion',
 sublabel: 'Wenn Stille nicht mehr für Sie entscheidet',
 icon: '📈',
 },
 {
 value: '85',
 suffix: '%',
 label: 'Beschäftigungsquote der Absolventen',
 sublabel: 'Wenn Schule in einem Job endet, nicht auf einer Warteliste',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'Immer aktiver Empfang',
 sublabel: 'Damit bezahlte Leads nicht mehr weglaufen',
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
 title: 'أنظمة الموظف الذكي',
 subtitle: 'الصراع: العملاء يموتون في الصمت',
 description:
 'لقد دفعت مسبقاً مقابل هؤلاء العملاء المحتملين. معظمهم لا يحصل على رد. نبيع مواعيد محجوزة وأنت تعمل—لا روبوت محادثة آخر.',
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
 primaryCta: 'توقف عن خسارة العملاء المدفوعين',
 secondaryCta: 'اطلع على تكلفة الصمت',
 },
 {
 id: 'future-ready-graduate',
 title: 'برنامج Future Ready Graduate',
 subtitle: 'الصراع: شهادات بلا وظائف',
 description:
 'الشهادة ليست الوجهة. الخريج الموظَّف هو الوجهة. نبيع إثباتاً جاهزاً للتوظيف يوظّف لأجله أصحاب العمل—لا دورة نظرية أخرى.',
 outcomes: [
 'خريجون يوظّفهم أصحاب العمل فعلاً',
 'إثبات محفظة أعمال لا شهادات فقط',
 'طلاب يكسبون لا يتخرجون فحسب',
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
 primaryCta: 'توقف عن التخرج إلى العدم',
 secondaryCta: 'اطلع على تكلفة عدم التوظيف',
 },
 {
 id: 'agentic-softwares',
 title: 'Agentic Softwares',
 subtitle: 'الصراع: أنت الغراء',
 description:
 'العمل اليدوي يسرق ثلث أسبوعك. نبيع عمليات تدور دون أن تكون أنت الغراء—أنظمة مخصصة تملكها أنت.',
 outcomes: ['ساعات تُعاد إلى أسبوعك', 'أخطاء أقل في التسليم', 'سير العمل يدور بلا رعاية مستمرة'],
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
 primaryCta: 'توقف عن أن تكون الغراء',
 secondaryCta: 'سمِّ سير العمل الذي يسرق أسبوعك',
 },
 ],
 stats: [
 {
 value: '300',
 suffix: '%',
 label: 'زيادة في تحويل العملاء المحتملين',
 sublabel: 'عندما يتوقف الصمت عن الاختيار نيابةً عنك',
 icon: '📈',
 },
 {
 value: '85',
 suffix: '%',
 label: 'نسبة توظيف الخريجين',
 sublabel: 'عندما تنتهي المدرسة بوظيفة لا بقائمة انتظار',
 icon: '🎓',
 },
 {
 value: '24',
 suffix: '/7',
 label: 'استقبال يعمل دائماً',
 sublabel: 'كي يتوقف العملاء المدفوعون عن الفرار',
 icon: '🤖',
 },
 ],
 bottomCta: {
 title: 'ما زلت تمسك بكل شيء وحدك؟',
 subtitle: 'أخبرنا أي صراع يُبقيك مستيقظاً. سنثبّت الحل.',
 },
}
