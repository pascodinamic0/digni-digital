/** Copy for AI Employee product demo sections (pipeline, performance, tasks, contacts). */

export type PipelineColumnT = { id: string; title: string; stat: string; borderClass: string }

export type PipelineCardT = {
  id: string
  /** Lead contact name (person) */
  name: string
  /** Where the lead originated */
  source: string
  /** Short note: intent, need, or who they are */
  context: string
  valueLabel: string
  valueDisplay: string
}

export type ContactRowT = {
  id: string
  name: string
  phone: string
  email: string
  business: string
  created: string
  lastActivity: string
  tag: string
  /** Lead source: Facebook, Instagram, WhatsApp, Website chat, etc. */
  source: string
}

export type AiEmployeeProductDemosTranslations = {
  pipeline: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    dashboardTitle: string
    dashboardSubtitle: string
    activeLabel: string
    activeDeals: string
    pipelineName: string
    dealsCount: string
    importBtn: string
    addDeal: string
    allTab: string
    newViewTab: string
    advancedFilters: string
    sortLabel: string
    searchPlaceholder: string
    sourceLabel: string
    manageFields: string
    gridView: string
    listView: string
    columns: PipelineColumnT[]
    cards: PipelineCardT[]
    detailHint: string
    detailNext: string
    dragHint: string
    playDemoLabel: string
    stopDemoLabel: string
    detailModalBody: string
    detailModalNextExample: string
    closeLabel: string
  }
  performance: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    dashboardTitle: string
    dashboardSubtitle: string
    aggregateLabel: string
    reviewsLabel: string
    newReviewToast: string
    platformGoogle: string
    platformFacebook: string
    platformInstagram: string
    platformYelp: string
    platformWhatsapp: string
    platformBing: string
  }
  tasks: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    moduleTitle: string
    moduleSubtitle: string
    scheduleBtn: string
    newPostBtn: string
    daysShort: [string, string, string, string, string, string, string]
    hintComposer: string
    hintScheduled: string
    hintPublished: string
    postSampleTitle: string
    autoPostBanner: string
  }
  contacts: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    allTab: string
    smartList: string
    advancedFilters: string
    sortLabel: string
    searchPlaceholder: string
    manageFields: string
    headers: {
      name: string
      phone: string
      email: string
      business: string
      source: string
      created: string
      activity: string
      tags: string
    }
    pageOf: string
    rowsPerPage: string
    prev: string
    next: string
    rows: ContactRowT[]
  }
}

const pipelineColumnsEn: PipelineColumnT[] = [
  { id: 'c1', title: 'New lead', stat: '1 lead · $1.1k', borderClass: 'border-t-blue-500' },
  { id: 'c2', title: 'Qualified', stat: '3 leads · $580–$4.9k', borderClass: 'border-t-warning' },
  { id: 'c3', title: 'Demo / intent', stat: '3 leads · $1.8k–$4.2k', borderClass: 'border-t-rose-400' },
  { id: 'c4', title: 'Won / booked', stat: '1 lead · $3.1k', borderClass: 'border-t-success' },
]

const pipelineCardsEn: PipelineCardT[] = [
  {
    id: 'p1',
    name: 'Sarah Chen',
    source: 'Website chat',
    context: 'Asked about cleaning slots & pricing for next week.',
    valueLabel: 'Deal value',
    valueDisplay: '$1,150',
  },
  {
    id: 'p2',
    name: 'Marcus Webb',
    source: 'Google Local',
    context: 'Needs freight quotes for weekend routes; comparing 2 vendors.',
    valueLabel: 'Deal value',
    valueDisplay: '$2,400',
  },
  {
    id: 'p3',
    name: 'Elena Ruiz',
    source: 'Facebook Lead Ad',
    context: 'Catering for two locations; budget confirmed on the call.',
    valueLabel: 'Deal value',
    valueDisplay: '$3,750',
  },
  {
    id: 'p4',
    name: 'James Okonkwo',
    source: 'Referral',
    context: 'Divorce consult, referred by a former client.',
    valueLabel: 'Deal value',
    valueDisplay: '$1,890',
  },
  {
    id: 'p5',
    name: 'Priya Patel',
    source: 'Instagram DM',
    context: 'Membership + PT bundle; wants to start this month.',
    valueLabel: 'Deal value',
    valueDisplay: '$4,950',
  },
  {
    id: 'p6',
    name: 'David Park',
    source: 'WhatsApp Business',
    context: 'Family dental; asked about insurance & first visit.',
    valueLabel: 'Deal value',
    valueDisplay: '$580',
  },
  {
    id: 'p7',
    name: 'Lisa Morales',
    source: 'Bing Places',
    context: 'Contract review for a small supplier dispute.',
    valueLabel: 'Deal value',
    valueDisplay: '$4,200',
  },
  {
    id: 'p8',
    name: 'Omar Haddad',
    source: 'Google Business',
    context: 'Franchise coffee inquiry; requested territory map.',
    valueLabel: 'Deal value',
    valueDisplay: '$3,100',
  },
]

export const aiEmployeeProductDemosEn: AiEmployeeProductDemosTranslations = {
  pipeline: {
    badge: 'Pipeline',
    title: 'Leads move without',
    titleHighlight: 'you babysitting the board.',
    subtitle:
      'Four stages. Every lead has a source and a story. Drag cards, or hit Play to watch one person move through the pipeline.',
    dashboardTitle: 'Lead flow',
    dashboardSubtitle: 'AI Employee workspace',
    activeLabel: 'Sync on',
    activeDeals: '8 active leads',
    pipelineName: 'Growth pipeline',
    dealsCount: 'leads',
    importBtn: 'Import',
    addDeal: 'Add lead',
    allTab: 'All',
    newViewTab: '+ View',
    advancedFilters: 'Advanced filters',
    sortLabel: 'Sort (recent)',
    searchPlaceholder: 'Search leads',
    sourceLabel: 'Source',
    manageFields: 'Manage fields',
    gridView: 'Board',
    listView: 'List',
    columns: pipelineColumnsEn,
    cards: pipelineCardsEn,
    detailHint: 'AI notes',
    detailNext: 'Suggested next step',
    dragHint: 'Drag cards between stages, the flow runs automatically; use Stop to pause.',
    playDemoLabel: 'Play flow',
    stopDemoLabel: 'Stop',
    detailModalBody:
      'AI logged who they are, where they came from, intent, and deal value. Your team gets notified when the lead is qualified, not on every message.',
    detailModalNextExample: 'Send calendar link for a 20-minute fit call.',
    closeLabel: 'Close',
  },
  performance: {
    badge: 'Reputation',
    title: 'Local listings,',
    titleHighlight: 'one dashboard.',
    subtitle:
      'Google, social, and review sites in one view, ratings and review volume climb as the AI responds and collects feedback.',
    dashboardTitle: 'Reputation pulse',
    dashboardSubtitle: 'AI Employee · local directories',
    aggregateLabel: 'Blended rating',
    reviewsLabel: 'reviews',
    newReviewToast: 'New 5★ on Google',
    platformGoogle: 'Google Business',
    platformFacebook: 'Facebook',
    platformInstagram: 'Instagram',
    platformYelp: 'Yelp',
    platformWhatsapp: 'WhatsApp Business',
    platformBing: 'Bing Places',
  },
  tasks: {
    badge: 'Social',
    title: 'Plan once.',
    titleHighlight: 'Post everywhere on time.',
    subtitle:
      'Drop content on the calendar, the AI schedules and publishes across channels so nothing goes live by accident.',
    moduleTitle: 'Social planner',
    moduleSubtitle: 'AI Employee · calendar & autopublish',
    scheduleBtn: 'Schedule',
    newPostBtn: 'New post',
    daysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    hintComposer: 'Writing…',
    hintScheduled: 'Queued for publish',
    hintPublished: 'Published',
    postSampleTitle: 'Spring promo · book this week',
    autoPostBanner: 'Auto-posting to connected channels…',
  },
  contacts: {
    badge: 'Directory',
    title: 'Every contact the AI touched,',
    titleHighlight: 'searchable and owned.',
    subtitle:
      'One ledger for names, channels, and last touch, so marketing and sales agree on who is warm without exporting spreadsheets.',
    allTab: 'All',
    smartList: '+ Smart segment',
    advancedFilters: 'Advanced filters',
    sortLabel: 'Sort',
    searchPlaceholder: 'Search contacts',
    manageFields: 'Manage fields',
    headers: {
      name: 'Contact',
      phone: 'Phone',
      email: 'Email',
      business: 'Business',
      source: 'Source',
      created: 'Created',
      activity: 'Last activity',
      tags: 'Tags',
    },
    pageOf: 'Page {page} of {total}',
    rowsPerPage: 'Rows',
    prev: 'Prev',
    next: 'Next',
    rows: [
      {
        id: 'n1',
        name: 'Grace Vance',
        phone: '+1 555 010 221',
        email: 'grace@example.com',
        business: 'Vance Ortho',
        source: 'Facebook Lead Ad',
        created: 'Nov 27, 2025 8:38 PM',
        lastActivity: '3 days ago',
        tag: 'Hot',
      },
      {
        id: 'n2',
        name: 'Ravi Patel',
        phone: '+1 555 014 882',
        email: 'ravi@northwind.io',
        business: 'Northwind Logistics',
        source: 'WhatsApp',
        created: 'Jan 4, 2026 11:02 AM',
        lastActivity: '1 month ago',
        tag: '',
      },
      {
        id: 'n3',
        name: 'Riley Park',
        phone: '+1 555 019 003',
        email: 'riley@summitlegal.com',
        business: 'Summit Legal',
        source: 'Website chat widget',
        created: 'Feb 2, 2026 4:15 PM',
        lastActivity: 'Today',
        tag: 'Booked',
      },
      {
        id: 'n4',
        name: 'Morgan Ellis',
        phone: '+1 555 017 441',
        email: 'morgan@brightfield.cafe',
        business: 'Brightfield Cafe',
        source: 'Instagram DM',
        created: 'Mar 1, 2026 9:00 AM',
        lastActivity: 'Yesterday',
        tag: '',
      },
      {
        id: 'n5',
        name: 'Alex Kim',
        phone: '+1 555 022 901',
        email: 'alex@apexfitness.co',
        business: 'Apex Fitness Studio',
        source: 'Google Local',
        created: 'Mar 10, 2026 2:12 PM',
        lastActivity: '2 hours ago',
        tag: 'New',
      },
    ],
  },
}

const pipelineColumnsFr: PipelineColumnT[] = [
  { id: 'c1', title: 'Nouveau lead', stat: '1 lead · 1 150 €', borderClass: 'border-t-blue-500' },
  { id: 'c2', title: 'Qualifié', stat: '3 leads · 580–4 900 €', borderClass: 'border-t-warning' },
  { id: 'c3', title: 'Démo / intention', stat: '3 leads · 1,8–4,2 k€', borderClass: 'border-t-rose-400' },
  { id: 'c4', title: 'Gagné / réservé', stat: '1 lead · 3,1 k€', borderClass: 'border-t-success' },
]

const pipelineCardsFr: PipelineCardT[] = [
  { id: 'p1', name: 'Sarah Chen', source: 'Chat site', context: 'Créneaux ménage & tarifs pour la semaine prochaine.', valueLabel: 'Valeur', valueDisplay: '1 150 €' },
  { id: 'p2', name: 'Marcus Webb', source: 'Google Local', context: 'Devis fret week-end ; compare deux prestataires.', valueLabel: 'Valeur', valueDisplay: '2 400 €' },
  { id: 'p3', name: 'Elena Ruiz', source: 'Pub Facebook', context: 'Traiteur pour deux sites ; budget validé à l’appel.', valueLabel: 'Valeur', valueDisplay: '3 750 €' },
  { id: 'p4', name: 'James Okonkwo', source: 'Recommandation', context: 'Consultation divorce, envoyé par un ancien client.', valueLabel: 'Valeur', valueDisplay: '1 890 €' },
  { id: 'p5', name: 'Priya Patel', source: 'DM Instagram', context: 'Abonnement + coaching ; veut commencer ce mois-ci.', valueLabel: 'Valeur', valueDisplay: '4 950 €' },
  { id: 'p6', name: 'David Park', source: 'WhatsApp Business', context: 'Dentaire famille ; question mutuelle & 1re visite.', valueLabel: 'Valeur', valueDisplay: '580 €' },
  { id: 'p7', name: 'Lisa Morales', source: 'Bing Places', context: 'Relecture de contrat fournisseur.', valueLabel: 'Valeur', valueDisplay: '4 200 €' },
  { id: 'p8', name: 'Omar Haddad', source: 'Google Business', context: 'Café franchise ; demande carte des zones.', valueLabel: 'Valeur', valueDisplay: '3 100 €' },
]

export const aiEmployeeProductDemosFr: AiEmployeeProductDemosTranslations = {
  ...aiEmployeeProductDemosEn,
  pipeline: {
    badge: 'Pipeline',
    title: 'Les leads avancent sans que',
    titleHighlight: 'vous surveilliez le tableau.',
    subtitle:
      'Quatre étapes. Chaque lead a une source et un contexte. Glissez les cartes, ou lancez la démo pour voir une personne avancer.',
    dashboardTitle: 'Flux des leads',
    dashboardSubtitle: 'Espace Employé IA',
    activeLabel: 'Sync activée',
    activeDeals: '8 leads actifs',
    pipelineName: 'Pipeline croissance',
    dealsCount: 'leads',
    importBtn: 'Importer',
    addDeal: 'Ajouter un lead',
    allTab: 'Tous',
    newViewTab: '+ Vue',
    advancedFilters: 'Filtres avancés',
    sortLabel: 'Tri (récent)',
    searchPlaceholder: 'Rechercher des leads',
    sourceLabel: 'Source',
    manageFields: 'Champs',
    gridView: 'Tableau',
    listView: 'Liste',
    columns: pipelineColumnsFr,
    cards: pipelineCardsFr,
    detailHint: 'Notes IA',
    detailNext: 'Prochaine étape suggérée',
    dragHint: 'Glissez les cartes, le flux tourne tout seul ; Stop pour pauser.',
    playDemoLabel: 'Lecture',
    stopDemoLabel: 'Stop',
    detailModalBody:
      'L’IA a enregistré qui ils sont, la source, l’intention et la valeur. Votre équipe n’est notifiée qu’à la qualification.',
    detailModalNextExample: 'Envoyer le lien calendrier pour un appel de 20 minutes.',
    closeLabel: 'Fermer',
  },
  performance: {
    ...aiEmployeeProductDemosEn.performance,
    badge: 'Réputation',
    title: 'Fiches locales,',
    titleHighlight: 'un tableau de bord.',
    subtitle:
      'Google, réseaux et avis au même endroit, notes et volume montent quand l’IA répond et collecte les retours.',
    dashboardTitle: 'Pulsation réputation',
    dashboardSubtitle: 'Employé IA · annuaires locaux',
    aggregateLabel: 'Note moyenne',
    reviewsLabel: 'avis',
    newReviewToast: 'Nouveau 5★ sur Google',
    platformGoogle: 'Google Business',
    platformFacebook: 'Facebook',
    platformInstagram: 'Instagram',
    platformYelp: 'Yelp',
    platformWhatsapp: 'WhatsApp Business',
    platformBing: 'Bing Places',
  },
  tasks: {
    ...aiEmployeeProductDemosEn.tasks,
    badge: 'Social',
    title: 'Planifiez une fois.',
    titleHighlight: 'Publiez à l’heure.',
    subtitle:
      'Posez le contenu sur le calendrier, l’IA planifie et publie sur les canaux connectés.',
    moduleTitle: 'Planificateur social',
    moduleSubtitle: 'Employé IA · calendrier & auto-publication',
    scheduleBtn: 'Planifier',
    newPostBtn: 'Nouveau post',
    daysShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    hintComposer: 'Rédaction…',
    hintScheduled: 'En file de publication',
    hintPublished: 'Publié',
    postSampleTitle: 'Promo printemps · réservez cette semaine',
    autoPostBanner: 'Publication automatique sur les canaux…',
  },
  contacts: {
    ...aiEmployeeProductDemosEn.contacts,
    badge: 'Annuaire',
    title: 'Chaque contact touché par l’IA,',
    titleHighlight: 'recherchable et à jour.',
    subtitle:
      'Un registre unique pour noms, canaux et dernier contact, sans exports Excel.',
    allTab: 'Tous',
    smartList: '+ Segment',
    advancedFilters: 'Filtres avancés',
    sortLabel: 'Tri',
    searchPlaceholder: 'Rechercher des contacts',
    manageFields: 'Champs',
    headers: {
      name: 'Contact',
      phone: 'Téléphone',
      email: 'E-mail',
      business: 'Entreprise',
      source: 'Source',
      created: 'Créé',
      activity: 'Dernière activité',
      tags: 'Tags',
    },
    pageOf: 'Page {page} sur {total}',
    rowsPerPage: 'Lignes',
    prev: 'Préc.',
    next: 'Suiv.',
    rows: aiEmployeeProductDemosEn.contacts.rows,
  },
}

const pipelineColumnsAr: PipelineColumnT[] = [
  { id: 'c1', title: 'عميل جديد', stat: '1 عميل · ‎$1,150', borderClass: 'border-t-blue-500' },
  { id: 'c2', title: 'مؤهل', stat: '3 عملاء · ‎$580–$4,900', borderClass: 'border-t-warning' },
  { id: 'c3', title: 'عرض / نية', stat: '3 عملاء · ‎$1.8k–$4.2k', borderClass: 'border-t-rose-400' },
  { id: 'c4', title: 'مكتمل / محجوز', stat: '1 عميل · ‎$3,100', borderClass: 'border-t-success' },
]

const pipelineCardsAr: PipelineCardT[] = [
  { id: 'p1', name: 'سارة تشين', source: 'دردشة الموقع', context: 'سألت عن مواعيد التنظيف والأسعار لأسبوع المقبل.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$1,150' },
  { id: 'p2', name: 'ماركوس ويب', source: 'جوجل المحلي', context: 'يحتاج عروض شحن لعطلة نهاية الأسبوع؛ يقارن موردين.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$2,400' },
  { id: 'p3', name: 'إيلينا رويز', source: 'إعلان فيسبوك', context: 'تموين لموقعين؛ تم تأكيد الميزانية في المكالمة.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$3,750' },
  { id: 'p4', name: 'جيمس أوكونكوو', source: 'إحالة', context: 'استشارة طلاق, إحالة من عميل سابق.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$1,890' },
  { id: 'p5', name: 'بريا باتيل', source: 'رسائل إنستغرام', context: 'اشتراك + تدريب؛ تريد البدء هذا الشهر.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$4,950' },
  { id: 'p6', name: 'ديفيد بارك', source: 'واتساب للأعمال', context: 'أسنان عائلية؛ سؤال عن التأمين والزيارة الأولى.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$580' },
  { id: 'p7', name: 'ليزا موراليس', source: 'بينغ بليس', context: 'مراجعة عقد لمورد صغير.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$4,200' },
  { id: 'p8', name: 'عمر حداد', source: 'جوجل بيزنس', context: 'استفسار امتياز قهوة؛ طلب خريطة المناطق.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$3,100' },
]

export const aiEmployeeProductDemosAr: AiEmployeeProductDemosTranslations = {
  ...aiEmployeeProductDemosEn,
  pipeline: {
    badge: 'المسار',
    title: 'العملاء المحتملون يتحركون دون',
    titleHighlight: 'متابعة يدوية للوحة.',
    subtitle:
      'أربع مراحل. لكل عميل مصدر وسياق. اسحب البطاقات أو شغّل العرض لترى شخصًا يتحرك عبر اللوحة.',
    dashboardTitle: 'تدفق العملاء',
    dashboardSubtitle: 'مساحة موظف الذكاء الاصطناعي',
    activeLabel: 'المزامنة قيد التشغيل',
    activeDeals: '8 عملاء محتملون نشطون',
    pipelineName: 'مسار النمو',
    dealsCount: 'عملاء',
    importBtn: 'استيراد',
    addDeal: 'إضافة عميل محتمل',
    allTab: 'الكل',
    newViewTab: '+ عرض',
    advancedFilters: 'مرشحات متقدمة',
    sortLabel: 'ترتيب (الأحدث)',
    searchPlaceholder: 'بحث في العملاء',
    sourceLabel: 'المصدر',
    manageFields: 'الحقول',
    gridView: 'لوحة',
    listView: 'قائمة',
    columns: pipelineColumnsAr,
    cards: pipelineCardsAr,
    detailHint: 'ملاحظات الذكاء الاصطناعي',
    detailNext: 'الخطوة المقترحة التالية',
    dragHint: 'اسحب البطاقات, أو تشغيل لعرض متحرك.',
    playDemoLabel: 'تشغيل العرض',
    stopDemoLabel: 'إيقاف',
    detailModalBody:
      'سجّل الذكاء الاصطناعي من هم، والمصدر، والنية، وقيمة الصفقة. يصل الإشعار للفريق عند التأهيل فقط.',
    detailModalNextExample: 'إرسال رابط التقويم لمكالمة ملاءمة لمدة 20 دقيقة.',
    closeLabel: 'إغلاق',
  },
  performance: {
    ...aiEmployeeProductDemosEn.performance,
    badge: 'السمعة',
    title: 'القوائم المحلية،',
    titleHighlight: 'لوحة واحدة.',
    subtitle:
      'جوجل والشبكات والمراجعات في عرض واحد, ترتفع النقاط والمراجعات مع ردود الذكاء.',
    dashboardTitle: 'نبض السمعة',
    dashboardSubtitle: 'موظف ذكاء · أدلة محلية',
    aggregateLabel: 'متوسط التقييم',
    reviewsLabel: 'مراجعات',
    newReviewToast: '5★ جديدة على جوجل',
    platformGoogle: 'Google Business',
    platformFacebook: 'Facebook',
    platformInstagram: 'Instagram',
    platformYelp: 'Yelp',
    platformWhatsapp: 'واتساب للأعمال',
    platformBing: 'Bing Places',
  },
  tasks: {
    ...aiEmployeeProductDemosEn.tasks,
    badge: 'اجتماعي',
    title: 'خطّط مرة.',
    titleHighlight: 'انشر في الوقت المحدد.',
    subtitle:
      'ضع المحتوى على التقويم, الذكاء يجدول وينشر على القنوات المتصلة.',
    moduleTitle: 'مخطط التواصل',
    moduleSubtitle: 'موظف ذكاء · تقويم ونشر تلقائي',
    scheduleBtn: 'جدولة',
    newPostBtn: 'منشور جديد',
    daysShort: ['إثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت', 'أحد'],
    hintComposer: 'جارٍ الكتابة…',
    hintScheduled: 'في انتظار النشر',
    hintPublished: 'نُشر',
    postSampleTitle: 'عرض الربيع · احجز هذا الأسبوع',
    autoPostBanner: 'جارٍ النشر التلقائي على القنوات…',
  },
  contacts: {
    ...aiEmployeeProductDemosEn.contacts,
    badge: 'الدليل',
    title: 'كل جهة لمستها الذكاء،',
    titleHighlight: 'قابلة للبحث وملكية واضحة.',
    subtitle:
      'سجل واحد للأسماء والقنوات وآخر تفاعل, دون جداول منفصلة.',
    allTab: 'الكل',
    smartList: '+ شريحة',
    advancedFilters: 'مرشحات متقدمة',
    sortLabel: 'ترتيب',
    searchPlaceholder: 'بحث جهات',
    manageFields: 'الحقول',
    headers: {
      name: 'جهة',
      phone: 'هاتف',
      email: 'بريد',
      business: 'نشاط',
      source: 'المصدر',
      created: 'أُنشئ',
      activity: 'آخر نشاط',
      tags: 'وسوم',
    },
    pageOf: 'صفحة {page} من {total}',
    rowsPerPage: 'صفوف',
    prev: 'السابق',
    next: 'التالي',
    rows: aiEmployeeProductDemosEn.contacts.rows,
  },
}

const pipelineColumnsDe: PipelineColumnT[] = [
  { id: 'c1', title: 'Neuer Lead', stat: '1 Lead · 1.150 €', borderClass: 'border-t-blue-500' },
  { id: 'c2', title: 'Qualifiziert', stat: '3 Leads · 580–4.900 €', borderClass: 'border-t-warning' },
  { id: 'c3', title: 'Demo / Absicht', stat: '3 Leads · 1,8–4,2 k€', borderClass: 'border-t-rose-400' },
  { id: 'c4', title: 'Gewonnen / gebucht', stat: '1 Lead · 3,1 k€', borderClass: 'border-t-success' },
]

const pipelineCardsDe: PipelineCardT[] = [
  { id: 'p1', name: 'Sarah Chen', source: 'Website-Chat', context: 'Nach Terminen & Preisen für Reinigung nächste Woche gefragt.', valueLabel: 'Dealwert', valueDisplay: '1.150 €' },
  { id: 'p2', name: 'Marcus Webb', source: 'Google Local', context: 'Frachtangebote fürs Wochenende; vergleicht zwei Anbieter.', valueLabel: 'Dealwert', valueDisplay: '2.400 €' },
  { id: 'p3', name: 'Elena Ruiz', source: 'Facebook Lead Ad', context: 'Catering für zwei Standorte; Budget im Call bestätigt.', valueLabel: 'Dealwert', valueDisplay: '3.750 €' },
  { id: 'p4', name: 'James Okonkwo', source: 'Empfehlung', context: 'Scheidungsberatung, empfohlen von früherem Mandanten.', valueLabel: 'Dealwert', valueDisplay: '1.890 €' },
  { id: 'p5', name: 'Priya Patel', source: 'Instagram DM', context: 'Mitgliedschaft + PT; Start noch diesen Monat.', valueLabel: 'Dealwert', valueDisplay: '4.950 €' },
  { id: 'p6', name: 'David Park', source: 'WhatsApp Business', context: 'Familienzahnarzt; Frage zu Kasse & Erstbesuch.', valueLabel: 'Dealwert', valueDisplay: '580 €' },
  { id: 'p7', name: 'Lisa Morales', source: 'Bing Places', context: 'Vertragsprüfung bei Lieferantenstreit.', valueLabel: 'Dealwert', valueDisplay: '4.200 €' },
  { id: 'p8', name: 'Omar Haddad', source: 'Google Business', context: 'Café-Franchise; Karte der Gebiete angefordert.', valueLabel: 'Dealwert', valueDisplay: '3.100 €' },
]

export const aiEmployeeProductDemosDe: AiEmployeeProductDemosTranslations = {
  ...aiEmployeeProductDemosEn,
  pipeline: {
    badge: 'Pipeline',
    title: 'Leads laufen weiter ohne',
    titleHighlight: 'dass Sie das Board hüten.',
    subtitle:
      'Vier Phasen. Jeder Lead hat einen Quellkanal und Kontext. Karten ziehen, oder Demo starten.',
    dashboardTitle: 'Lead-Flow',
    dashboardSubtitle: 'KI-Mitarbeiter-Arbeitsbereich',
    activeLabel: 'Sync aktiv',
    activeDeals: '8 aktive Leads',
    pipelineName: 'Wachstums-Pipeline',
    dealsCount: 'Leads',
    importBtn: 'Import',
    addDeal: 'Lead hinzufügen',
    allTab: 'Alle',
    newViewTab: '+ Ansicht',
    advancedFilters: 'Erweiterte Filter',
    sortLabel: 'Sortierung (neu)',
    searchPlaceholder: 'Leads suchen',
    sourceLabel: 'Quelle',
    manageFields: 'Felder',
    gridView: 'Board',
    listView: 'Liste',
    columns: pipelineColumnsDe,
    cards: pipelineCardsDe,
    detailHint: 'KI-Notizen',
    detailNext: 'Vorgeschlagener nächster Schritt',
    dragHint: 'Karten ziehen, oder Abspielen für den Flow.',
    playDemoLabel: 'Flow abspielen',
    stopDemoLabel: 'Stop',
    detailModalBody:
      'Die KI protokolliert Person, Quelle, Absicht und Dealwert. Ihr Team wird nur bei qualifiziertem Lead benachrichtigt.',
    detailModalNextExample: 'Kalenderlink für ein 20-Minuten-Fit-Gespräch senden.',
    closeLabel: 'Schließen',
  },
  performance: {
    ...aiEmployeeProductDemosEn.performance,
    badge: 'Reputation',
    title: 'Lokale Einträge,',
    titleHighlight: 'ein Dashboard.',
    subtitle:
      'Google, Social und Bewertungsportale auf einen Blick, Sterne und Volumen steigen mit KI-Antworten.',
    dashboardTitle: 'Reputation-Puls',
    dashboardSubtitle: 'KI-Mitarbeiter · lokale Verzeichnisse',
    aggregateLabel: 'Durchschnittsnote',
    reviewsLabel: 'Bewertungen',
    newReviewToast: 'Neue 5★ bei Google',
    platformGoogle: 'Google Business',
    platformFacebook: 'Facebook',
    platformInstagram: 'Instagram',
    platformYelp: 'Yelp',
    platformWhatsapp: 'WhatsApp Business',
    platformBing: 'Bing Places',
  },
  tasks: {
    ...aiEmployeeProductDemosEn.tasks,
    badge: 'Social',
    title: 'Einmal planen.',
    titleHighlight: 'Pünktlich posten.',
    subtitle:
      'Inhalt auf den Kalender legen, die KI plant und veröffentlicht auf verbundenen Kanälen.',
    moduleTitle: 'Social-Planer',
    moduleSubtitle: 'KI-Mitarbeiter · Kalender & Auto-Post',
    scheduleBtn: 'Planen',
    newPostBtn: 'Neuer Beitrag',
    daysShort: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    hintComposer: 'Schreibt…',
    hintScheduled: 'Zur Veröffentlichung geplant',
    hintPublished: 'Veröffentlicht',
    postSampleTitle: 'Frühlings-Aktion · diese Woche buchen',
    autoPostBanner: 'Auto-Post auf verbundene Kanäle…',
  },
  contacts: {
    ...aiEmployeeProductDemosEn.contacts,
    badge: 'Verzeichnis',
    title: 'Jeder Kontakt, den die KI',
    titleHighlight: 'berührt hat, suchbar.',
    subtitle:
      'Ein Register für Namen, Kanäle und letzte Berührung, ohne Excel-Exporte.',
    allTab: 'Alle',
    smartList: '+ Segment',
    advancedFilters: 'Erweiterte Filter',
    sortLabel: 'Sortierung',
    searchPlaceholder: 'Kontakte suchen',
    manageFields: 'Felder',
    headers: {
      name: 'Kontakt',
      phone: 'Telefon',
      email: 'E-Mail',
      business: 'Unternehmen',
      source: 'Quelle',
      created: 'Erstellt',
      activity: 'Letzte Aktivität',
      tags: 'Tags',
    },
    pageOf: 'Seite {page} von {total}',
    rowsPerPage: 'Zeilen',
    prev: 'Zurück',
    next: 'Weiter',
    rows: aiEmployeeProductDemosEn.contacts.rows,
  },
}

const pipelineColumnsEs: PipelineColumnT[] = [
  { id: 'c1', title: 'Nuevo lead', stat: '1 lead · US$1.150', borderClass: 'border-t-blue-500' },
  { id: 'c2', title: 'Cualificado', stat: '3 leads · US$580–4.900', borderClass: 'border-t-warning' },
  { id: 'c3', title: 'Demo / intención', stat: '3 leads · US$1,8k–4,2k', borderClass: 'border-t-rose-400' },
  { id: 'c4', title: 'Ganado / reservado', stat: '1 lead · US$3,1k', borderClass: 'border-t-success' },
]

const pipelineCardsEs: PipelineCardT[] = [
  { id: 'p1', name: 'Sarah Chen', source: 'Chat web', context: 'Preguntó por huecos de limpieza y precios para la próxima semana.', valueLabel: 'Valor del deal', valueDisplay: 'US$1.150' },
  { id: 'p2', name: 'Marcus Webb', source: 'Google Local', context: 'Cotizaciones de flete fin de semana; compara dos proveedores.', valueLabel: 'Valor del deal', valueDisplay: 'US$2.400' },
  { id: 'p3', name: 'Elena Ruiz', source: 'Anuncio Facebook', context: 'Catering para dos sedes; presupuesto confirmado en la llamada.', valueLabel: 'Valor del deal', valueDisplay: 'US$3.750' },
  { id: 'p4', name: 'James Okonkwo', source: 'Referido', context: 'Consulta de divorcio, referido por un cliente anterior.', valueLabel: 'Valor del deal', valueDisplay: 'US$1.890' },
  { id: 'p5', name: 'Priya Patel', source: 'DM Instagram', context: 'Membresía + PT; quiere empezar este mes.', valueLabel: 'Valor del deal', valueDisplay: 'US$4.950' },
  { id: 'p6', name: 'David Park', source: 'WhatsApp Business', context: 'Dental familiar; pregunta por seguro y primera visita.', valueLabel: 'Valor del deal', valueDisplay: 'US$580' },
  { id: 'p7', name: 'Lisa Morales', source: 'Bing Places', context: 'Revisión de contrato con proveedor pequeño.', valueLabel: 'Valor del deal', valueDisplay: 'US$4.200' },
  { id: 'p8', name: 'Omar Haddad', source: 'Google Business', context: 'Consulta franquicia de café; pidió mapa de zonas.', valueLabel: 'Valor del deal', valueDisplay: 'US$3.100' },
]

export const aiEmployeeProductDemosEs: AiEmployeeProductDemosTranslations = {
  ...aiEmployeeProductDemosEn,
  pipeline: {
    badge: 'Pipeline',
    title: 'Los leads avanzan sin',
    titleHighlight: 'vigilar el tablero.',
    subtitle:
      'Cuatro etapas. Cada lead tiene origen y contexto. Arrastra tarjetas, o reproduce el flujo.',
    dashboardTitle: 'Flujo de leads',
    dashboardSubtitle: 'Espacio Empleado IA',
    activeLabel: 'Sync activo',
    activeDeals: '8 leads activos',
    pipelineName: 'Pipeline de crecimiento',
    dealsCount: 'leads',
    importBtn: 'Importar',
    addDeal: 'Añadir lead',
    allTab: 'Todos',
    newViewTab: '+ Vista',
    advancedFilters: 'Filtros avanzados',
    sortLabel: 'Orden (reciente)',
    searchPlaceholder: 'Buscar leads',
    sourceLabel: 'Origen',
    manageFields: 'Campos',
    gridView: 'Tablero',
    listView: 'Lista',
    columns: pipelineColumnsEs,
    cards: pipelineCardsEs,
    detailHint: 'Notas IA',
    detailNext: 'Siguiente paso sugerido',
    dragHint: 'Arrastra tarjetas, o Reproducir para animar.',
    playDemoLabel: 'Reproducir flujo',
    stopDemoLabel: 'Detener',
    detailModalBody:
      'La IA registró quién es, el origen, la intención y el valor del deal. Tu equipo recibe aviso cuando el lead está cualificado.',
    detailModalNextExample: 'Enviar enlace de calendario para una llamada de encaje de 20 minutos.',
    closeLabel: 'Cerrar',
  },
  performance: {
    ...aiEmployeeProductDemosEn.performance,
    badge: 'Reputación',
    title: 'Directorios locales,',
    titleHighlight: 'un panel.',
    subtitle:
      'Google, redes y reseñas en una vista, suben estrellas y volumen con la IA.',
    dashboardTitle: 'Pulso de reputación',
    dashboardSubtitle: 'Empleado IA · directorios locales',
    aggregateLabel: 'Nota media',
    reviewsLabel: 'reseñas',
    newReviewToast: 'Nuevo 5★ en Google',
    platformGoogle: 'Google Business',
    platformFacebook: 'Facebook',
    platformInstagram: 'Instagram',
    platformYelp: 'Yelp',
    platformWhatsapp: 'WhatsApp Business',
    platformBing: 'Bing Places',
  },
  tasks: {
    ...aiEmployeeProductDemosEn.tasks,
    badge: 'Social',
    title: 'Planifica una vez.',
    titleHighlight: 'Publica a tiempo.',
    subtitle:
      'Coloca el contenido en el calendario, la IA programa y publica en los canales.',
    moduleTitle: 'Planificador social',
    moduleSubtitle: 'Empleado IA · calendario y auto-publicación',
    scheduleBtn: 'Programar',
    newPostBtn: 'Nueva publicación',
    daysShort: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    hintComposer: 'Escribiendo…',
    hintScheduled: 'En cola de publicación',
    hintPublished: 'Publicado',
    postSampleTitle: 'Promo primavera · reserva esta semana',
    autoPostBanner: 'Auto-publicación en canales conectados…',
  },
  contacts: {
    ...aiEmployeeProductDemosEn.contacts,
    badge: 'Directorio',
    title: 'Cada contacto que tocó la IA,',
    titleHighlight: 'buscable y unificado.',
    subtitle:
      'Un registro de nombres, canales y último contacto, sin hojas sueltas.',
    allTab: 'Todos',
    smartList: '+ Segmento',
    advancedFilters: 'Filtros avanzados',
    sortLabel: 'Orden',
    searchPlaceholder: 'Buscar contactos',
    manageFields: 'Campos',
    headers: {
      name: 'Contacto',
      phone: 'Teléfono',
      email: 'Email',
      business: 'Negocio',
      source: 'Origen',
      created: 'Creado',
      activity: 'Última actividad',
      tags: 'Etiquetas',
    },
    pageOf: 'Página {page} de {total}',
    rowsPerPage: 'Filas',
    prev: 'Ant.',
    next: 'Sig.',
    rows: aiEmployeeProductDemosEn.contacts.rows,
  },
}
