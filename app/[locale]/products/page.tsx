'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import { getCtaButtonText, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { getProductsPageJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'

const productsCopy = {
  en: {
    badge: 'Our Products',
    heroPrefix: "We don't just consult.",
    heroHighlight: 'We build SaaS.',
    heroDescription: 'Tools that work. Affordable. Grow with or without us.',
    proofYears: 'building growth systems',
    proofSatisfaction: 'client satisfaction',
    live: 'LIVE',
    features: 'Features',
    benefits: 'Benefits',
    tryFree: 'Try Free',
    watchDemo: 'Watch Demo',
    interfaceLabel: 'ProposalAgent Interface',
    pricingTitle: 'Choose Your Plan',
    pricingSubtitle: 'Start free, scale as you grow',
    mostPopular: 'MOST POPULAR',
    perMonth: '/month',
    comingSoonTitle: 'Coming Soon',
    comingSoonSubtitle: 'More tools to power your growth',
    keyFeatures: 'Key Features',
    notifyMe: 'Notify Me',
    customTitle: 'Need a Custom Solution?',
    customDescription:
      "Can't find what you're looking for? We build Agentic Softwares, AI-native software that perceives, reasons, and acts autonomously.",
    customCta: 'Discuss Custom Development',
    featuredProduct: {
      id: 'proposal-agent',
      name: 'ProposalAgent',
      tagline: 'Speak. We structure. You send.',
      description: 'Voice to proposal. AI structures. Minutes, not hours.',
      features: [
        'Voice-to-Text Conversion',
        'AI-Powered Structuring',
        'Brand Customization',
        'Template Library',
        'Client Portal',
        'Analytics Dashboard',
      ],
      benefits: [
        '10x Faster Proposal Creation',
        'Consistent Professional Quality',
        'Higher Conversion Rates',
        'Time Savings',
        'Reduced Errors',
        'Better Client Experience',
      ],
      pricing: {
        starter: { price: '$29', features: ['5 proposals/month', 'Basic templates', 'Email support'] },
        pro: { price: '$79', features: ['25 proposals/month', 'Custom branding', 'Priority support', 'Analytics'] },
        enterprise: { price: '$199', features: ['Unlimited proposals', 'White-label', 'API access', 'Dedicated support'] },
      },
    },
    stats: [
      { metric: '10x', label: 'Faster proposal creation' },
      { metric: '85%', label: 'Average time saved' },
      { metric: '40%', label: 'Higher close rates' },
      { metric: '95+', label: 'Proposals generated' },
    ],
    comingSoonProducts: [
      {
        id: 'crm-lite',
        initial: 'C',
        name: 'CRM Lite',
        description: 'CRM for small biz. Contacts. Deals. Simple.',
        features: ['Contact Management', 'Deal Pipeline', 'Email Integration', 'Reporting'],
        launchDate: 'Planned roadmap',
      },
      {
        id: 'invoice-ai',
        initial: 'I',
        name: 'Invoice AI',
        description: 'Auto invoices. Payment tracking. Smart reminders.',
        features: ['Auto Invoice Generation', 'Payment Tracking', 'Smart Reminders', 'Tax Compliance'],
        launchDate: 'Planned roadmap',
      },
      {
        id: 'social-assistant',
        initial: 'S',
        name: 'Social Assistant',
        description: 'AI content. Scheduling. Analytics. Done.',
        features: ['Content Generation', 'Scheduling', 'Analytics', 'Multi-platform'],
        launchDate: 'Planned roadmap',
      },
    ],
  },
  fr: {
    badge: 'Nos produits',
    heroPrefix: 'Nous ne faisons pas que conseiller.',
    heroHighlight: 'Nous construisons du SaaS.',
    heroDescription: 'Des outils qui fonctionnent. Abordables. Pour grandir avec ou sans nous.',
    proofYears: 'à construire des systèmes de croissance',
    proofSatisfaction: 'de satisfaction client',
    live: 'EN LIGNE',
    features: 'Fonctionnalités',
    benefits: 'Bénéfices',
    tryFree: 'Essayer gratuitement',
    watchDemo: 'Voir la démo',
    interfaceLabel: 'Interface ProposalAgent',
    pricingTitle: 'Choisissez votre offre',
    pricingSubtitle: 'Commencez gratuitement, évoluez avec votre croissance',
    mostPopular: 'LE PLUS POPULAIRE',
    perMonth: '/mois',
    comingSoonTitle: 'Bientôt disponible',
    comingSoonSubtitle: 'Plus d’outils pour accélérer votre croissance',
    keyFeatures: 'Fonctionnalités clés',
    notifyMe: 'Me prévenir',
    customTitle: 'Besoin d’une solution sur mesure ?',
    customDescription:
      'Vous ne trouvez pas ce qu’il vous faut ? Nous construisons Agentic Softwares, des logiciels AI-native qui perçoivent, raisonnent et agissent de façon autonome.',
    customCta: 'Discuter d’un développement sur mesure',
    featuredProduct: {
      id: 'proposal-agent',
      name: 'ProposalAgent',
      tagline: 'Parlez. Nous structurons. Vous envoyez.',
      description: 'De la voix à la proposition. L’IA structure. En minutes, pas en heures.',
      features: [
        'Conversion voix-texte',
        'Structuration assistée par IA',
        'Personnalisation de marque',
        'Bibliothèque de modèles',
        'Portail client',
        'Tableau de bord analytics',
      ],
      benefits: [
        'Création de propositions 10x plus rapide',
        'Qualité professionnelle constante',
        'Taux de conversion plus élevés',
        'Gain de temps',
        'Moins d’erreurs',
        'Meilleure expérience client',
      ],
      pricing: {
        starter: { price: '$29', features: ['5 propositions/mois', 'Modèles de base', 'Support email'] },
        pro: { price: '$79', features: ['25 propositions/mois', 'Branding personnalisé', 'Support prioritaire', 'Analytics'] },
        enterprise: { price: '$199', features: ['Propositions illimitées', 'White-label', 'Accès API', 'Support dédié'] },
      },
    },
    stats: [
      { metric: '10x', label: 'création de propositions plus rapide' },
      { metric: '85%', label: 'de temps économisé en moyenne' },
      { metric: '40%', label: 'de taux de closing en plus' },
      { metric: '95+', label: 'propositions générées' },
    ],
    comingSoonProducts: [
      {
        id: 'crm-lite',
        initial: 'C',
        name: 'CRM Lite',
        description: 'CRM pour petites entreprises. Contacts. Deals. Simple.',
        features: ['Gestion des contacts', 'Pipeline commercial', 'Intégration email', 'Reporting'],
        launchDate: 'Roadmap prévue',
      },
      {
        id: 'invoice-ai',
        initial: 'I',
        name: 'Invoice AI',
        description: 'Factures automatiques. Suivi des paiements. Relances intelligentes.',
        features: ['Génération automatique de factures', 'Suivi des paiements', 'Relances intelligentes', 'Conformité fiscale'],
        launchDate: 'Roadmap prévue',
      },
      {
        id: 'social-assistant',
        initial: 'S',
        name: 'Social Assistant',
        description: 'Contenu IA. Planification. Analytics. C’est fait.',
        features: ['Génération de contenu', 'Planification', 'Analytics', 'Multi-plateforme'],
        launchDate: 'Roadmap prévue',
      },
    ],
  },
  es: {
    badge: 'Nuestros productos',
    heroPrefix: 'No solo consultamos.',
    heroHighlight: 'Construimos SaaS.',
    heroDescription: 'Herramientas que funcionan. Accesibles. Crece con nosotros o sin nosotros.',
    proofYears: 'creando sistemas de crecimiento',
    proofSatisfaction: 'de satisfacción del cliente',
    live: 'ACTIVO',
    features: 'Funciones',
    benefits: 'Beneficios',
    tryFree: 'Probar gratis',
    watchDemo: 'Ver demo',
    interfaceLabel: 'Interfaz de ProposalAgent',
    pricingTitle: 'Elige tu plan',
    pricingSubtitle: 'Empieza gratis, escala cuando crezcas',
    mostPopular: 'MÁS POPULAR',
    perMonth: '/mes',
    comingSoonTitle: 'Próximamente',
    comingSoonSubtitle: 'Más herramientas para impulsar tu crecimiento',
    keyFeatures: 'Funciones clave',
    notifyMe: 'Avísame',
    customTitle: '¿Necesitas una solución a medida?',
    customDescription:
      '¿No encuentras lo que buscas? Construimos Agentic Softwares, software AI-native que percibe, razona y actúa de forma autónoma.',
    customCta: 'Hablar de desarrollo a medida',
    featuredProduct: {
      id: 'proposal-agent',
      name: 'ProposalAgent',
      tagline: 'Habla. Lo estructuramos. Lo envías.',
      description: 'De voz a propuesta. La IA estructura. Minutos, no horas.',
      features: [
        'Conversión voz a texto',
        'Estructuración con IA',
        'Personalización de marca',
        'Biblioteca de plantillas',
        'Portal del cliente',
        'Dashboard de analytics',
      ],
      benefits: [
        'Creación de propuestas 10x más rápida',
        'Calidad profesional consistente',
        'Mayores tasas de conversión',
        'Ahorro de tiempo',
        'Menos errores',
        'Mejor experiencia del cliente',
      ],
      pricing: {
        starter: { price: '$29', features: ['5 propuestas/mes', 'Plantillas básicas', 'Soporte por email'] },
        pro: { price: '$79', features: ['25 propuestas/mes', 'Marca personalizada', 'Soporte prioritario', 'Analytics'] },
        enterprise: { price: '$199', features: ['Propuestas ilimitadas', 'White-label', 'Acceso API', 'Soporte dedicado'] },
      },
    },
    stats: [
      { metric: '10x', label: 'creación de propuestas más rápida' },
      { metric: '85%', label: 'tiempo ahorrado en promedio' },
      { metric: '40%', label: 'más tasa de cierre' },
      { metric: '95+', label: 'propuestas generadas' },
    ],
    comingSoonProducts: [
      {
        id: 'crm-lite',
        initial: 'C',
        name: 'CRM Lite',
        description: 'CRM para pequeños negocios. Contactos. Deals. Simple.',
        features: ['Gestión de contactos', 'Pipeline de ventas', 'Integración de email', 'Reporting'],
        launchDate: 'Roadmap planificado',
      },
      {
        id: 'invoice-ai',
        initial: 'I',
        name: 'Invoice AI',
        description: 'Facturas automáticas. Seguimiento de pagos. Recordatorios inteligentes.',
        features: ['Generación automática de facturas', 'Seguimiento de pagos', 'Recordatorios inteligentes', 'Cumplimiento fiscal'],
        launchDate: 'Roadmap planificado',
      },
      {
        id: 'social-assistant',
        initial: 'S',
        name: 'Social Assistant',
        description: 'Contenido con IA. Programación. Analytics. Listo.',
        features: ['Generación de contenido', 'Programación', 'Analytics', 'Multiplataforma'],
        launchDate: 'Roadmap planificado',
      },
    ],
  },
  de: {
    badge: 'Unsere Produkte',
    heroPrefix: 'Wir beraten nicht nur.',
    heroHighlight: 'Wir bauen SaaS.',
    heroDescription: 'Tools, die funktionieren. Bezahlbar. Wachsen Sie mit oder ohne uns.',
    proofYears: 'im Aufbau von Wachstumssystemen',
    proofSatisfaction: 'Kundenzufriedenheit',
    live: 'LIVE',
    features: 'Funktionen',
    benefits: 'Vorteile',
    tryFree: 'Kostenlos testen',
    watchDemo: 'Demo ansehen',
    interfaceLabel: 'ProposalAgent Oberfläche',
    pricingTitle: 'Wählen Sie Ihren Plan',
    pricingSubtitle: 'Kostenlos starten, mit dem Wachstum skalieren',
    mostPopular: 'AM BELIEBTESTEN',
    perMonth: '/Monat',
    comingSoonTitle: 'Demnächst',
    comingSoonSubtitle: 'Mehr Tools für Ihr Wachstum',
    keyFeatures: 'Kernfunktionen',
    notifyMe: 'Benachrichtigen',
    customTitle: 'Brauchen Sie eine individuelle Lösung?',
    customDescription:
      'Nicht gefunden, wonach Sie suchen? Wir bauen Agentic Softwares, AI-native Software, die autonom wahrnimmt, schlussfolgert und handelt.',
    customCta: 'Individuelle Entwicklung besprechen',
    featuredProduct: {
      id: 'proposal-agent',
      name: 'ProposalAgent',
      tagline: 'Sprechen. Wir strukturieren. Sie senden.',
      description: 'Von Sprache zum Angebot. KI strukturiert. Minuten statt Stunden.',
      features: [
        'Speech-to-Text-Konvertierung',
        'KI-gestützte Strukturierung',
        'Brand-Anpassung',
        'Vorlagenbibliothek',
        'Kundenportal',
        'Analytics-Dashboard',
      ],
      benefits: [
        '10x schnellere Angebotserstellung',
        'Konstante professionelle Qualität',
        'Höhere Conversion Rates',
        'Zeitersparnis',
        'Weniger Fehler',
        'Bessere Kundenerfahrung',
      ],
      pricing: {
        starter: { price: '$29', features: ['5 Angebote/Monat', 'Basisvorlagen', 'E-Mail-Support'] },
        pro: { price: '$79', features: ['25 Angebote/Monat', 'Individuelles Branding', 'Priority Support', 'Analytics'] },
        enterprise: { price: '$199', features: ['Unbegrenzte Angebote', 'White-label', 'API-Zugang', 'Dedizierter Support'] },
      },
    },
    stats: [
      { metric: '10x', label: 'schnellere Angebotserstellung' },
      { metric: '85%', label: 'durchschnittliche Zeitersparnis' },
      { metric: '40%', label: 'höhere Abschlussraten' },
      { metric: '95+', label: 'generierte Angebote' },
    ],
    comingSoonProducts: [
      {
        id: 'crm-lite',
        initial: 'C',
        name: 'CRM Lite',
        description: 'CRM für kleine Unternehmen. Kontakte. Deals. Einfach.',
        features: ['Kontaktmanagement', 'Deal-Pipeline', 'E-Mail-Integration', 'Reporting'],
        launchDate: 'Geplante Roadmap',
      },
      {
        id: 'invoice-ai',
        initial: 'I',
        name: 'Invoice AI',
        description: 'Automatische Rechnungen. Zahlungsstatus. Smarte Erinnerungen.',
        features: ['Automatische Rechnungserstellung', 'Zahlungsverfolgung', 'Smarte Erinnerungen', 'Steuer-Compliance'],
        launchDate: 'Geplante Roadmap',
      },
      {
        id: 'social-assistant',
        initial: 'S',
        name: 'Social Assistant',
        description: 'KI-Content. Planung. Analytics. Erledigt.',
        features: ['Content-Erstellung', 'Planung', 'Analytics', 'Multi-Plattform'],
        launchDate: 'Geplante Roadmap',
      },
    ],
  },
  ar: {
    badge: 'منتجاتنا',
    heroPrefix: 'نحن لا نقدم الاستشارة فقط.',
    heroHighlight: 'نحن نبني SaaS.',
    heroDescription: 'أدوات تعمل فعلاً. بأسعار مناسبة. تنمو معك سواء عملت معنا أم لا.',
    proofYears: 'في بناء أنظمة النمو',
    proofSatisfaction: 'رضا العملاء',
    live: 'مباشر',
    features: 'الميزات',
    benefits: 'الفوائد',
    tryFree: 'جرّب مجاناً',
    watchDemo: 'شاهد العرض',
    interfaceLabel: 'واجهة ProposalAgent',
    pricingTitle: 'اختر خطتك',
    pricingSubtitle: 'ابدأ مجاناً وتوسع مع نموك',
    mostPopular: 'الأكثر شيوعاً',
    perMonth: '/شهر',
    comingSoonTitle: 'قريباً',
    comingSoonSubtitle: 'المزيد من الأدوات لتقوية نموك',
    keyFeatures: 'الميزات الرئيسية',
    notifyMe: 'أعلمني',
    customTitle: 'هل تحتاج إلى حل مخصص؟',
    customDescription:
      'لم تجد ما تبحث عنه؟ نحن نبني Agentic Softwares، برمجيات AI-native تدرك وتفكر وتتصرف باستقلالية.',
    customCta: 'ناقش تطويراً مخصصاً',
    featuredProduct: {
      id: 'proposal-agent',
      name: 'ProposalAgent',
      tagline: 'تحدث. نحن ننظم. أنت ترسل.',
      description: 'من الصوت إلى العرض. الذكاء الاصطناعي ينظم. دقائق لا ساعات.',
      features: [
        'تحويل الصوت إلى نص',
        'هيكلة مدعومة بالذكاء الاصطناعي',
        'تخصيص الهوية',
        'مكتبة القوالب',
        'بوابة العميل',
        'لوحة تحليلات',
      ],
      benefits: [
        'إنشاء عروض أسرع 10x',
        'جودة احترافية ثابتة',
        'معدلات تحويل أعلى',
        'توفير الوقت',
        'أخطاء أقل',
        'تجربة عميل أفضل',
      ],
      pricing: {
        starter: { price: '$29', features: ['5 عروض/شهر', 'قوالب أساسية', 'دعم عبر البريد'] },
        pro: { price: '$79', features: ['25 عرضاً/شهر', 'تخصيص العلامة', 'دعم أولوية', 'Analytics'] },
        enterprise: { price: '$199', features: ['عروض غير محدودة', 'White-label', 'وصول API', 'دعم مخصص'] },
      },
    },
    stats: [
      { metric: '10x', label: 'إنشاء عروض أسرع' },
      { metric: '85%', label: 'متوسط الوقت الموفر' },
      { metric: '40%', label: 'معدلات إغلاق أعلى' },
      { metric: '95+', label: 'عرض تم إنشاؤه' },
    ],
    comingSoonProducts: [
      {
        id: 'crm-lite',
        initial: 'C',
        name: 'CRM Lite',
        description: 'CRM للشركات الصغيرة. جهات اتصال. صفقات. بسيط.',
        features: ['إدارة جهات الاتصال', 'خط الصفقات', 'تكامل البريد الإلكتروني', 'التقارير'],
        launchDate: 'ضمن الخطة القادمة',
      },
      {
        id: 'invoice-ai',
        initial: 'I',
        name: 'Invoice AI',
        description: 'فواتير تلقائية. تتبع المدفوعات. تذكيرات ذكية.',
        features: ['إنشاء فواتير تلقائي', 'تتبع المدفوعات', 'تذكيرات ذكية', 'الامتثال الضريبي'],
        launchDate: 'ضمن الخطة القادمة',
      },
      {
        id: 'social-assistant',
        initial: 'S',
        name: 'Social Assistant',
        description: 'محتوى بالذكاء الاصطناعي. جدولة. Analytics. تم.',
        features: ['إنشاء المحتوى', 'الجدولة', 'Analytics', 'متعدد المنصات'],
        launchDate: 'ضمن الخطة القادمة',
      },
    ],
  },
}

type ProductsPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function ProductsPage({ params, searchParams }: ProductsPageProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const cta = getCtaButtonText(language)
  const pageJsonLd = getProductsPageJsonLd(locale)
  const copy = productsCopy[language]
  const featuredProduct = copy.featuredProduct
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

      {/* Featured Product */}
      <AnimatedSection id="proposal-agent" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12 mb-16 glow-accent-hover"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-success/20 text-success text-xs font-bold rounded-full">{copy.live}</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold">{featuredProduct.name}</h2>
                </div>
                <p className="text-2xl text-accent font-medium mb-6">{featuredProduct.tagline}</p>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  {featuredProduct.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold mb-4">{copy.features}</h4>
                    <ul className="space-y-2">
                      {featuredProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">{copy.benefits}</h4>
                    <ul className="space-y-2">
                      {featuredProduct.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted">
                          <div className="w-1.5 h-1.5 bg-success rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href="#pricing" className="btn-primary" aria-label={copy.pricingTitle}>{copy.tryFree}</a>
                  <a 
                    {...getBookingLinkProps()}
                    className="btn-secondary"
                    aria-label={copy.watchDemo}
                  >
                    {copy.watchDemo}
                  </a>
                </div>
              </div>
              
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-accent">P</span>
                  </div>
                  <span className="text-muted text-lg">{copy.interfaceLabel}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {copy.pricingTitle}
              </h3>
              <p className="text-muted text-lg">{copy.pricingSubtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(featuredProduct.pricing).map(([plan, details], i) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`card p-8 ${plan === 'pro' ? 'border-accent/50 glow-accent' : ''}`}
                >
                  {plan === 'pro' && (
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
                        {copy.mostPopular}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h4 className="font-display text-xl font-bold capitalize mb-2">{plan}</h4>
                    <div className="font-display text-4xl font-bold text-accent mb-2">
                      {details.price}
                      <span className="text-lg text-muted font-normal">{copy.perMonth}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {details.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted">
                        <div className="w-1.5 h-1.5 bg-success rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    {...getBookingLinkProps()}
                    className={`w-full text-center ${plan === 'pro' ? 'btn-primary' : 'btn-secondary'}`}
                    aria-label={`${cta.getStarted} ${plan}`}
                  >
                    {cta.getStarted}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Proof */}
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

      {/* Coming Soon Products */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {copy.comingSoonTitle}
            </h2>
            <p className="text-muted text-lg">{copy.comingSoonSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {copy.comingSoonProducts.map((product, i) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-surface-light rounded-xl flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-muted">{product.initial}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{product.name}</h3>
                    <span className="text-xs text-accent uppercase font-medium">{product.launchDate}</span>
                  </div>
                </div>
                
                <p className="text-muted mb-6 leading-relaxed">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{copy.keyFeatures}</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted text-sm">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="btn-secondary w-full" 
                  disabled
                  aria-label={`${copy.notifyMe}: ${product.name}`}
                >
                  {copy.notifyMe}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {copy.customTitle}
          </h2>
          <p className="text-muted text-lg mb-8">
            {copy.customDescription}
          </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            {copy.customCta}
          </a>
        </div>
      </AnimatedSection>
    </main>
  )
}