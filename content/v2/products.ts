/**
 * Product registry — feeds /products, products.json and SoftwareApplication JSON-LD.
 * Products that are also case studies reuse the work registry (text + screens).
 * No invented stats or prices are shown on the page.
 */
import type { L, LL } from './locales'
import { getProject, type Project } from './work'

export type ProductGroup = 'platforms' | 'apps' | 'demos' | 'tools'
export type ProductStatus = 'live' | 'deployed' | 'demo' | 'beta'

export interface Product {
  id: string
  name: string
  group: ProductGroup
  status: ProductStatus
  url?: string
  /** Internal path (locale added at render) */
  path?: string
  work?: string
  img?: string
  phone?: string
  category: 'BusinessApplication' | 'EducationalApplication' | 'FinanceApplication' | 'LifestyleApplication' | 'ReferenceApplication'
  alsoKnownAs?: string
  summary?: L
  tags?: LL
}

export const products: Product[] = [
  { id: 'shuleos', name: 'ShuleOS', group: 'platforms', status: 'deployed', work: 'shuleos', category: 'EducationalApplication', alsoKnownAs: 'AMS (Academic Management System)' },
  { id: 'digni-results', name: 'Digni Results', group: 'platforms', status: 'demo', work: 'digni-results', category: 'BusinessApplication' },
  {
    id: 'dispatchflow', name: 'DispatchFlow', group: 'platforms', status: 'live', url: 'https://dispatch-flow-one.vercel.app/', img: 'dispatchflow-desktop', phone: 'dispatchflow-phone', category: 'BusinessApplication',
    summary: {
      en: 'Procurement requests, dispatch tracking and inventory for multi-branch operations, in one system of record instead of email, WhatsApp and spreadsheets.',
      fr: 'Demandes d’achat, suivi des expéditions et stocks pour des opérations multi-sites, dans un seul système au lieu des e-mails, de WhatsApp et des tableurs.',
      es: 'Solicitudes de compra, seguimiento de despachos e inventario para operaciones con varias sedes, en un solo sistema en lugar de correo, WhatsApp y hojas de cálculo.',
      de: 'Beschaffungsanfragen, Versandverfolgung und Lagerbestand für Betriebe mit mehreren Standorten – ein System statt E-Mail, WhatsApp und Tabellen.',
      ar: 'طلبات الشراء وتتبع الشحنات والمخزون للعمليات متعددة الفروع، في نظام واحد بدل البريد وواتساب والجداول.',
    },
    tags: {
      en: ['Approvals by priority', 'Driver assignment', 'Low-stock alerts', 'Role-based access'],
      fr: ['Validations par priorité', 'Affectation des chauffeurs', 'Alertes de stock bas', 'Accès par rôle'],
      es: ['Aprobaciones por prioridad', 'Asignación de conductores', 'Alertas de stock bajo', 'Acceso por roles'],
      de: ['Freigaben nach Priorität', 'Fahrerzuweisung', 'Warnungen bei Mindestbestand', 'Rollenbasierter Zugriff'],
      ar: ['اعتمادات حسب الأولوية', 'تعيين السائقين', 'تنبيهات نقص المخزون', 'صلاحيات حسب الدور'],
    },
  },
  { id: 'boutik', name: 'Boutik', group: 'apps', status: 'live', work: 'boutik', category: 'FinanceApplication' },
  { id: 'apporte', name: 'Apporte', group: 'apps', status: 'live', work: 'apporte', category: 'LifestyleApplication' },
  {
    id: 'swiftdrop', name: 'SwiftDrop', group: 'apps', status: 'live', url: 'https://swift-drop-chi.vercel.app/', img: 'swiftdrop-desktop', phone: 'swiftdrop-phone', category: 'LifestyleApplication',
    summary: {
      en: 'Local food and grocery delivery from restaurants, groceries and pharmacies: prepay the items, pay the delivery fee in cash on arrival, track the order live.',
      fr: 'Livraison locale de repas et de courses depuis restaurants, épiceries et pharmacies : articles payés à l’avance, livraison réglée en espèces à l’arrivée, suivi en direct.',
      es: 'Entrega local de comida y compras desde restaurantes, tiendas y farmacias: pagas los artículos por adelantado, el envío en efectivo al llegar y sigues el pedido en vivo.',
      de: 'Lokale Lieferung von Restaurants, Lebensmittelläden und Apotheken: Waren vorab bezahlen, Liefergebühr bar bei Ankunft, Bestellung live verfolgen.',
      ar: 'توصيل محلي للطعام والبقالة من المطاعم والمتاجر والصيدليات: ادفع ثمن المنتجات مسبقاً ورسوم التوصيل نقداً عند الوصول، وتابع الطلب مباشرة.',
    },
    tags: {
      en: ['Restaurants, groceries, pharmacies', 'Cash on delivery for the fee', 'Live tracking', 'Driver and merchant onboarding'],
      fr: ['Restaurants, épiceries, pharmacies', 'Frais de livraison en espèces', 'Suivi en direct', 'Inscription livreurs et marchands'],
      es: ['Restaurantes, tiendas, farmacias', 'Envío en efectivo', 'Seguimiento en vivo', 'Alta de repartidores y comercios'],
      de: ['Restaurants, Läden, Apotheken', 'Liefergebühr bar', 'Live-Tracking', 'Onboarding für Fahrer und Händler'],
      ar: ['مطاعم وبقالة وصيدليات', 'رسوم التوصيل نقداً', 'تتبع مباشر', 'تسجيل السائقين والتجار'],
    },
  },
  { id: 'zandocod', name: 'Zandocod', group: 'apps', status: 'live', work: 'zandocod', category: 'LifestyleApplication' },
  { id: 'mtusda', name: 'MTUSDA', group: 'apps', status: 'live', work: 'mtusda', category: 'ReferenceApplication' },
  { id: 'cadran', name: 'CADRAN', group: 'demos', status: 'demo', work: 'cadran', category: 'BusinessApplication' },
  {
    id: 'digniguide', name: 'DigniGuide', group: 'tools', status: 'live', path: '/digni', category: 'BusinessApplication',
    summary: {
      en: 'Our AI guide. Ask by voice or text, in your language, and it explains what Digni Digital does, helps you find the right service and books a call when you’re ready.',
      fr: 'Notre guide IA. Posez vos questions à l’oral ou à l’écrit, dans votre langue : il explique ce que fait Digni Digital, vous oriente vers le bon service et réserve un appel quand vous êtes prêt.',
      es: 'Nuestra guía con IA. Pregunta por voz o por texto, en tu idioma: explica qué hace Digni Digital, te orienta al servicio adecuado y reserva una llamada cuando quieras.',
      de: 'Unser KI-Guide. Fragen Sie per Sprache oder Text in Ihrer Sprache: Er erklärt, was Digni Digital macht, findet den passenden Service und bucht ein Gespräch, wenn Sie so weit sind.',
      ar: 'دليلنا الذكي. اسأل بالصوت أو بالكتابة وبلغتك، فيشرح ما تقدمه ديجني ديجيتال ويرشدك إلى الخدمة المناسبة ويحجز مكالمة حين تكون مستعداً.',
    },
    tags: {
      en: ['Voice and text', 'Five languages', 'Service fit', 'Books a call'],
      fr: ['Voix et texte', 'Cinq langues', 'Orientation', 'Réserve un appel'],
      es: ['Voz y texto', 'Cinco idiomas', 'Orientación', 'Reserva una llamada'],
      de: ['Sprache und Text', 'Fünf Sprachen', 'Passender Service', 'Bucht ein Gespräch'],
      ar: ['صوت ونص', 'خمس لغات', 'اختيار الخدمة', 'يحجز مكالمة'],
    },
  },
  {
    id: 'proposal-agent', name: 'ProposalAgent', group: 'tools', status: 'beta', category: 'BusinessApplication',
    summary: {
      en: 'Voice-to-proposal software: speak your project notes and get a structured, branded proposal ready to send.',
      fr: 'De la voix à la proposition : dictez vos notes de projet et obtenez une proposition structurée, à vos couleurs, prête à envoyer.',
      es: 'De la voz a la propuesta: dicta tus notas del proyecto y obtén una propuesta estructurada, con tu marca, lista para enviar.',
      de: 'Von der Sprachnotiz zum Angebot: Projektnotizen einsprechen und ein strukturiertes Angebot im eigenen Design erhalten.',
      ar: 'من الصوت إلى العرض: سجّل ملاحظات مشروعك صوتياً واحصل على عرض منظم بهويتك جاهز للإرسال.',
    },
    tags: {
      en: ['Voice to text', 'AI structuring', 'Brand templates', 'Client portal'],
      fr: ['Voix vers texte', 'Structuration par IA', 'Modèles à votre marque', 'Portail client'],
      es: ['Voz a texto', 'Estructura con IA', 'Plantillas con tu marca', 'Portal de clientes'],
      de: ['Sprache zu Text', 'KI-Strukturierung', 'Markenvorlagen', 'Kundenportal'],
      ar: ['تحويل الصوت إلى نص', 'هيكلة بالذكاء الاصطناعي', 'قوالب بهويتك', 'بوابة للعملاء'],
    },
  },
]

/** Resolve product display fields, falling back to the work registry. */
export function productView(p: Product): { summary?: L; tags?: LL; url?: string; img?: string; phone?: string; project?: Project } {
  const w = p.work ? getProject(p.work) : undefined
  return {
    summary: p.summary ?? w?.summary,
    tags: p.tags ?? w?.built,
    url: p.url ?? w?.url,
    img: p.img ?? w?.img,
    phone: p.phone ?? w?.phone,
    project: w,
  }
}
