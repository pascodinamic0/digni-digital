/**
 * Work registry — single source for /work, /work/[slug], the home page proof
 * section, case-studies.json and JSON-LD. Facts follow Pascal's company profile.
 * `claims` and `quote` exist only where they were already published on the
 * previous site; they are listed for Pascal to confirm (see V2 report).
 */
import type { L, LL } from './locales'

export type Sector = 'education' | 'ngo' | 'public' | 'hospitality' | 'health' | 'commerce' | 'services' | 'community'
export type Status = 'live' | 'deployed' | 'progress' | 'demo' | 'delivered'

export interface Project {
  slug: string
  name: string
  sector: Sector
  status: Status
  featured?: boolean
  url?: string
  urlLabel?: string
  img?: string
  phone?: string
  logo?: string
  textOnly?: boolean
  year?: string
  client: L
  location?: L
  summary: L
  context: L
  built: LL
  role: L
  stack?: string[]
  /** Previously published, unverified claims — kept verbatim per Pascal’s instruction. */
  claims?: LL
  quote?: { text: L; author: string }
}

const same = (s: string): L => ({ en: s, fr: s, es: s, de: s, ar: s })

export const projects: Project[] = [
  {
    slug: 'shuleos', name: 'ShuleOS', sector: 'education', status: 'deployed', featured: true,
    url: 'https://www.shuleos.app', urlLabel: 'shuleos.app', img: 'shuleos-desktop', phone: 'shuleos-phone',
    client: { en: 'Groupe Scolaire La Richarde · Complexe Scolaire Kiese', fr: 'Groupe Scolaire La Richarde · Complexe Scolaire Kiese', es: 'Groupe Scolaire La Richarde · Complexe Scolaire Kiese', de: 'Groupe Scolaire La Richarde · Complexe Scolaire Kiese', ar: 'مجموعة لا ريشارد المدرسية · مجمع كييسي المدرسي' },
    location: { en: 'DRC', fr: 'RDC', es: 'RD Congo', de: 'DR Kongo', ar: 'الكونغو الديمقراطية' },
    summary: {
      en: 'One school record for DRC private schools: fees, report cards and attendance in a single system that keeps working when the signal drops.',
      fr: 'Un seul dossier scolaire pour les écoles privées de RDC : frais, bulletins et présences dans un système qui continue de fonctionner quand le réseau tombe.',
      es: 'Un único expediente escolar para los colegios privados de la RD Congo: cuotas, boletines y asistencia en un sistema que sigue funcionando cuando cae la señal.',
      de: 'Eine einzige Schulakte für Privatschulen in der DR Kongo: Gebühren, Zeugnisse und Anwesenheit in einem System, das auch ohne Netz weiterläuft.',
      ar: 'سجل مدرسي واحد للمدارس الخاصة في الكونغو الديمقراطية: الرسوم وكشوف الدرجات والحضور في نظام واحد يواصل العمل حتى عند انقطاع الشبكة.',
    },
    context: {
      en: 'Private schools in the DRC run on paper registers, spreadsheets and phone calls. Fee balances, grades and attendance live in different places, report cards are assembled by hand before every proclamation, and the network drops several times a day. ShuleOS was designed with school owners, bursars and teachers to put that work in one place.',
      fr: 'Les écoles privées de RDC fonctionnent avec des registres papier, des tableurs et des appels. Soldes de frais, notes et présences sont éparpillés, les bulletins sont montés à la main avant chaque proclamation, et le réseau coupe plusieurs fois par jour. ShuleOS a été conçu avec des promoteurs, économes et enseignants pour réunir ce travail en un seul endroit.',
      es: 'Los colegios privados de la RD Congo funcionan con registros en papel, hojas de cálculo y llamadas. Saldos de cuotas, notas y asistencia están dispersos, los boletines se montan a mano antes de cada proclamación y la red se corta varias veces al día. ShuleOS se diseñó con dueños de colegios, ecónomos y docentes para reunir ese trabajo en un solo lugar.',
      de: 'Privatschulen in der DR Kongo arbeiten mit Papierlisten, Tabellen und Telefonaten. Gebührenstände, Noten und Anwesenheit liegen an verschiedenen Orten, Zeugnisse werden vor jeder Proklamation von Hand zusammengestellt, und das Netz fällt mehrmals am Tag aus. ShuleOS wurde mit Schulträgern, Kassenverwaltern und Lehrkräften entworfen, um diese Arbeit an einem Ort zu bündeln.',
      ar: 'تعمل المدارس الخاصة في الكونغو الديمقراطية بسجلات ورقية وجداول ومكالمات هاتفية. أرصدة الرسوم والدرجات والحضور مبعثرة، وكشوف الدرجات تُجمع يدوياً قبل كل إعلان للنتائج، والشبكة تنقطع مرات عدة يومياً. صُمم ShuleOS مع مالكي المدارس والمحاسبين والمعلمين لجمع هذا العمل في مكان واحد.',
    },
    built: {
      en: ['Fee ledger with printable receipts', 'Report cards ready before proclamation', 'Attendance that works offline', 'Roles for owners, staff and teachers'],
      fr: ['Registre des frais avec reçus imprimables', 'Bulletins prêts avant la proclamation', 'Présences même hors ligne', 'Rôles pour promoteurs, personnel et enseignants'],
      es: ['Libro de cuotas con recibos imprimibles', 'Boletines listos antes de la proclamación', 'Asistencia que funciona sin conexión', 'Roles para dueños, personal y docentes'],
      de: ['Gebührenbuch mit druckbaren Quittungen', 'Zeugnisse fertig vor der Proklamation', 'Anwesenheit auch offline', 'Rollen für Träger, Personal und Lehrkräfte'],
      ar: ['سجل رسوم مع إيصالات قابلة للطباعة', 'كشوف درجات جاهزة قبل إعلان النتائج', 'تسجيل حضور يعمل دون اتصال', 'صلاحيات للمالكين والموظفين والمعلمين'],
    },
    role: {
      en: 'Product design, build and deployment. Both schools onboarded for implementation and testing.',
      fr: 'Conception, développement et déploiement. Les deux écoles sont intégrées pour la mise en œuvre et les tests.',
      es: 'Diseño de producto, desarrollo y despliegue. Ambos colegios incorporados para implementación y pruebas.',
      de: 'Produktdesign, Entwicklung und Einführung. Beide Schulen sind für Umsetzung und Tests an Bord.',
      ar: 'تصميم المنتج وبناؤه ونشره. انضمت المدرستان للتطبيق والاختبار.',
    },
  },
  {
    slug: 'epic-drc', name: 'EPIC DRC reporting platform', sector: 'ngo', status: 'progress', featured: true, textOnly: true, year: '2026',
    client: { en: 'FHI 360 · EPIC DRC programme', fr: 'FHI 360 · programme EPIC RDC', es: 'FHI 360 · programa EPIC RD Congo', de: 'FHI 360 · Programm EPIC DR Kongo', ar: 'FHI 360 · برنامج EPIC في الكونغو الديمقراطية' },
    location: { en: 'DRC', fr: 'RDC', es: 'RD Congo', de: 'DR Kongo', ar: 'الكونغو الديمقراطية' },
    summary: {
      en: 'A multi-user reporting and application system for a donor-funded programme, designed for teams working in low-connectivity settings.',
      fr: 'Un système multi-utilisateurs de reporting et de candidatures pour un programme financé par des bailleurs, conçu pour des équipes en zones à faible connectivité.',
      es: 'Un sistema multiusuario de reportes y solicitudes para un programa financiado por donantes, pensado para equipos que trabajan con poca conectividad.',
      de: 'Ein Mehrbenutzer-System für Berichte und Anträge in einem gebergeförderten Programm, ausgelegt für Teams mit schwacher Verbindung.',
      ar: 'نظام متعدد المستخدمين للتقارير والطلبات لبرنامج ممول من المانحين، مصمم لفرق تعمل في مناطق ضعيفة الاتصال.',
    },
    context: {
      en: 'Donor-funded programmes depend on timely, consistent reporting from teams spread across provinces, often on unstable connections. Our founder was selected individually by FHI 360 as consultant to translate the EPIC DRC programme’s requirements into a practical digital reporting platform.',
      fr: 'Les programmes financés par des bailleurs dépendent d’un reporting régulier et cohérent d’équipes réparties dans plusieurs provinces, souvent avec une connexion instable. Notre fondateur a été sélectionné à titre individuel par FHI 360 comme consultant pour traduire les exigences du programme EPIC RDC en plateforme numérique de reporting.',
      es: 'Los programas financiados por donantes dependen de reportes puntuales y coherentes de equipos repartidos por varias provincias, a menudo con conexiones inestables. FHI 360 seleccionó a nuestro fundador como consultor individual para convertir los requisitos del programa EPIC RD Congo en una plataforma digital de reportes práctica.',
      de: 'Gebergeförderte Programme brauchen pünktliche, einheitliche Berichte von Teams in mehreren Provinzen, oft über instabile Verbindungen. FHI 360 hat unseren Gründer als Einzelberater ausgewählt, um die Anforderungen des Programms EPIC DR Kongo in eine praxistaugliche digitale Berichtsplattform zu übersetzen.',
      ar: 'تعتمد البرامج الممولة من المانحين على تقارير منتظمة ومتسقة من فرق موزعة على عدة مقاطعات، غالباً عبر اتصال غير مستقر. اختارت FHI 360 مؤسسنا مستشاراً فردياً لتحويل متطلبات برنامج EPIC في الكونغو الديمقراطية إلى منصة تقارير رقمية عملية.',
    },
    built: {
      en: ['Programme requirements turned into a working system', 'Role-based data entry and review', 'Built for low bandwidth', 'Reporting workflows for programme staff'],
      fr: ['Exigences du programme traduites en système opérationnel', 'Saisie et revue par rôle', 'Pensé pour la faible bande passante', 'Circuits de reporting pour l’équipe du programme'],
      es: ['Requisitos del programa convertidos en un sistema operativo', 'Captura y revisión de datos por rol', 'Pensado para poco ancho de banda', 'Flujos de reporte para el personal del programa'],
      de: ['Programmanforderungen in ein funktionierendes System übersetzt', 'Rollenbasierte Erfassung und Prüfung', 'Für geringe Bandbreite gebaut', 'Berichtsabläufe für das Programmteam'],
      ar: ['تحويل متطلبات البرنامج إلى نظام عامل', 'إدخال البيانات ومراجعتها حسب الدور', 'مصمم للنطاق الترددي المنخفض', 'مسارات تقارير لفريق البرنامج'],
    },
    role: {
      en: 'Pascal Digny, selected by FHI 360 as consultant to design and build the platform. In progress since 2026.',
      fr: 'Pascal Digny, sélectionné par FHI 360 comme consultant pour concevoir et développer la plateforme. En cours depuis 2026.',
      es: 'Pascal Digny, seleccionado por FHI 360 como consultor para diseñar y desarrollar la plataforma. En curso desde 2026.',
      de: 'Pascal Digny, von FHI 360 als Berater für Konzeption und Entwicklung ausgewählt. In Arbeit seit 2026.',
      ar: 'باسكال ديني، اختارته FHI 360 مستشاراً لتصميم المنصة وبنائها. قيد التنفيذ منذ 2026.',
    },
  },
  {
    slug: 'kabinda-lodge', name: 'Kabinda Lodge', sector: 'hospitality', status: 'live', featured: true,
    url: 'https://kabinda-lodge.com', urlLabel: 'kabinda-lodge.com', img: 'kabinda-desktop', phone: 'kabinda-phone',
    client: { en: 'Kabinda Lodge & Suites', fr: 'Kabinda Lodge & Suites', es: 'Kabinda Lodge & Suites', de: 'Kabinda Lodge & Suites', ar: 'كابيندا لودج آند سويتس' },
    location: { en: 'DRC', fr: 'RDC', es: 'RD Congo', de: 'DR Kongo', ar: 'الكونغو الديمقراطية' },
    summary: {
      en: 'A guest-facing website and hotel management system that digitises rooms, bookings, restaurant and daily administration.',
      fr: 'Un site pour les clients et un système de gestion hôtelière qui numérise chambres, réservations, restaurant et administration quotidienne.',
      es: 'Un sitio para huéspedes y un sistema de gestión hotelera que digitaliza habitaciones, reservas, restaurante y administración diaria.',
      de: 'Eine Gäste-Website und ein Hotelmanagementsystem, das Zimmer, Buchungen, Restaurant und Tagesverwaltung digitalisiert.',
      ar: 'موقع للضيوف ونظام لإدارة الفندق يرقمن الغرف والحجوزات والمطعم والإدارة اليومية.',
    },
    context: {
      en: 'The owners needed to see rooms, bookings, payments and restaurant activity without being on site, and to stop running the lodge from notebooks and messages. We built the guest website and the operating system behind it.',
      fr: 'Les propriétaires voulaient suivre chambres, réservations, paiements et restaurant sans être sur place, et ne plus gérer le lodge avec des cahiers et des messages. Nous avons construit le site client et le système de gestion derrière.',
      es: 'Los propietarios necesitaban ver habitaciones, reservas, pagos y restaurante sin estar en el lugar, y dejar de gestionar el lodge con cuadernos y mensajes. Construimos el sitio para huéspedes y el sistema de gestión que lo respalda.',
      de: 'Die Eigentümer wollten Zimmer, Buchungen, Zahlungen und Restaurant aus der Ferne im Blick haben und die Lodge nicht mehr über Notizbücher und Nachrichten führen. Wir haben die Gäste-Website und das Betriebssystem dahinter gebaut.',
      ar: 'احتاج المالكون إلى متابعة الغرف والحجوزات والمدفوعات والمطعم دون الحضور، والتوقف عن إدارة النُّزُل بالدفاتر والرسائل. بنينا موقع الضيوف ونظام التشغيل الذي يقف خلفه.',
    },
    built: {
      en: ['Rooms, restaurant and online booking for guests', 'Back office for daily operations', 'Role-based access from owner to front desk and restaurant', 'Payments and smart-card access workflows'],
      fr: ['Chambres, restaurant et réservation en ligne', 'Back-office des opérations quotidiennes', 'Accès par rôle, du propriétaire à la réception et au restaurant', 'Paiements et accès par carte'],
      es: ['Habitaciones, restaurante y reserva en línea', 'Back office para la operación diaria', 'Acceso por roles, del propietario a recepción y restaurante', 'Pagos y acceso con tarjeta'],
      de: ['Zimmer, Restaurant und Onlinebuchung für Gäste', 'Backoffice für den Tagesbetrieb', 'Rollen vom Eigentümer bis Rezeption und Restaurant', 'Zahlungen und Zugang per Smartcard'],
      ar: ['الغرف والمطعم والحجز الإلكتروني للضيوف', 'لوحة تحكم للعمليات اليومية', 'صلاحيات من المالك إلى الاستقبال والمطعم', 'المدفوعات والدخول بالبطاقة الذكية'],
    },
    role: {
      en: 'Design, build and hosting of the website and hotel management system.',
      fr: 'Conception, développement et hébergement du site et du système hôtelier.',
      es: 'Diseño, desarrollo y alojamiento del sitio y del sistema hotelero.',
      de: 'Konzeption, Entwicklung und Hosting von Website und Hotelsystem.',
      ar: 'تصميم الموقع ونظام إدارة الفندق وبناؤهما واستضافتهما.',
    },
  },
  {
    slug: 'digni-results', name: 'Digni Results', sector: 'ngo', status: 'demo',
    url: 'https://digni-results-demo.netlify.app', urlLabel: 'digni-results-demo.netlify.app', img: 'results-desktop', phone: 'results-phone',
    client: { en: 'Digni Digital product · NGOs and donor-funded programmes', fr: 'Produit Digni Digital · ONG et programmes financés', es: 'Producto de Digni Digital · ONG y programas financiados', de: 'Digni-Digital-Produkt · NGOs und gebergeförderte Programme', ar: 'منتج ديجني ديجيتال · المنظمات والبرامج الممولة' },
    location: { en: 'Africa', fr: 'Afrique', es: 'África', de: 'Afrika', ar: 'أفريقيا' },
    summary: {
      en: 'Monitoring & evaluation and donor reporting: results framework, field submissions, review and validation, dashboards, maps and Word report export.',
      fr: 'Suivi-évaluation et reporting bailleurs : cadre de résultats, saisies terrain, revue et validation, tableaux de bord, cartes et export Word.',
      es: 'Monitoreo y evaluación y reportes a donantes: marco de resultados, envíos de campo, revisión y validación, paneles, mapas y exportación a Word.',
      de: 'Monitoring & Evaluation und Geberberichte: Ergebnisrahmen, Felddaten, Prüfung und Freigabe, Dashboards, Karten und Word-Export.',
      ar: 'المتابعة والتقييم وتقارير المانحين: إطار النتائج، وإدخالات ميدانية، ومراجعة واعتماد، ولوحات وخرائط، وتصدير تقارير Word.',
    },
    context: {
      en: 'Programme teams spend the last weeks of every quarter chasing spreadsheets and rebuilding the same donor report. Digni Results shows how that cycle can run on one system: indicators, field data, validation and the report itself.',
      fr: 'Les équipes de programme passent les dernières semaines de chaque trimestre à courir après des tableurs et à refaire le même rapport bailleur. Digni Results montre comment ce cycle peut tourner sur un seul système : indicateurs, données terrain, validation et rapport.',
      es: 'Los equipos de programa pasan las últimas semanas de cada trimestre persiguiendo hojas de cálculo y rehaciendo el mismo informe para el donante. Digni Results muestra cómo ese ciclo puede funcionar en un solo sistema: indicadores, datos de campo, validación y el propio informe.',
      de: 'Programmteams verbringen die letzten Wochen jedes Quartals damit, Tabellen hinterherzulaufen und denselben Geberbericht neu zu bauen. Digni Results zeigt, wie dieser Zyklus in einem System läuft: Indikatoren, Felddaten, Freigabe und der Bericht selbst.',
      ar: 'تقضي فرق البرامج الأسابيع الأخيرة من كل ربع سنة في ملاحقة الجداول وإعادة بناء تقرير المانح نفسه. يُظهر Digni Results كيف تسير هذه الدورة في نظام واحد: المؤشرات والبيانات الميدانية والاعتماد والتقرير نفسه.',
    },
    built: {
      en: ['Indicators with baselines and targets', 'Submit → review → validate → lock', 'Dashboards and maps by region', 'Donor report export to Word'],
      fr: ['Indicateurs avec valeurs de base et cibles', 'Soumettre → revoir → valider → verrouiller', 'Tableaux de bord et cartes par région', 'Export du rapport bailleur en Word'],
      es: ['Indicadores con líneas de base y metas', 'Enviar → revisar → validar → bloquear', 'Paneles y mapas por región', 'Informe para donantes exportado a Word'],
      de: ['Indikatoren mit Ausgangs- und Zielwerten', 'Einreichen → prüfen → freigeben → sperren', 'Dashboards und Karten nach Region', 'Geberbericht als Word-Export'],
      ar: ['مؤشرات بخطوط أساس وأهداف', 'إرسال ← مراجعة ← اعتماد ← قفل', 'لوحات وخرائط حسب المنطقة', 'تصدير تقرير المانح إلى Word'],
    },
    role: {
      en: 'Our own product. Public demo on sample data, no sign-up. Pilots for NGOs on request.',
      fr: 'Notre propre produit. Démo publique sur données fictives, sans inscription. Pilotes pour ONG sur demande.',
      es: 'Producto propio. Demo pública con datos de ejemplo, sin registro. Pilotos para ONG bajo pedido.',
      de: 'Eigenes Produkt. Öffentliche Demo mit Beispieldaten, ohne Anmeldung. Piloten für NGOs auf Anfrage.',
      ar: 'منتجنا الخاص. عرض عام على بيانات تجريبية ودون تسجيل. تجارب للمنظمات عند الطلب.',
    },
  },
  {
    slug: 'cadran', name: 'CADRAN', sector: 'public', status: 'demo',
    url: 'https://ins-statistiques-demo.netlify.app', urlLabel: 'ins-statistiques-demo.netlify.app', img: 'cadran-desktop', phone: 'cadran-phone',
    client: { en: 'Demonstration for a public-sector bid (TRANSFORME)', fr: 'Démonstration pour un appel d’offres public (TRANSFORME)', es: 'Demostración para una licitación pública (TRANSFORME)', de: 'Demonstration für eine öffentliche Ausschreibung (TRANSFORME)', ar: 'عرض توضيحي لمناقصة قطاع عام (TRANSFORME)' },
    location: { en: 'DRC', fr: 'RDC', es: 'RD Congo', de: 'DR Kongo', ar: 'الكونغو الديمقراطية' },
    summary: {
      en: 'A national statistics circuit in one place: business register, collection, quality checks and the dashboard. A demonstration, not an official government system.',
      fr: 'Le circuit statistique dans un seul cadran : registre, collecte, qualité et tableau de bord. Une démonstration, pas un système officiel.',
      es: 'El circuito estadístico nacional en un solo lugar: registro de empresas, recolección, control de calidad y panel. Una demostración, no un sistema oficial del gobierno.',
      de: 'Der statistische Kreislauf an einem Ort: Unternehmensregister, Erhebung, Qualitätsprüfung und Dashboard. Eine Demonstration, kein offizielles Regierungssystem.',
      ar: 'الدورة الإحصائية الوطنية في مكان واحد: سجل المؤسسات والجمع وضبط الجودة ولوحة المعلومات. عرض توضيحي وليس نظاماً حكومياً رسمياً.',
    },
    context: {
      en: 'Public-sector buyers want to see a working system before they commit. CADRAN was built as a demonstration for a bid under the TRANSFORME programme, showing how a statistics office could run its circuit end to end.',
      fr: 'Les acheteurs publics veulent voir un système qui fonctionne avant de s’engager. CADRAN a été construit comme démonstration pour un appel d’offres du programme TRANSFORME, afin de montrer comment un institut statistique peut faire tourner tout son circuit.',
      es: 'Los compradores públicos quieren ver un sistema funcionando antes de comprometerse. CADRAN se construyó como demostración para una licitación del programa TRANSFORME y muestra cómo una oficina estadística puede operar su circuito de principio a fin.',
      de: 'Öffentliche Auftraggeber wollen ein funktionierendes System sehen, bevor sie sich festlegen. CADRAN entstand als Demonstration für eine Ausschreibung im Programm TRANSFORME und zeigt, wie ein Statistikamt seinen Kreislauf durchgängig betreiben kann.',
      ar: 'يريد المشترون في القطاع العام رؤية نظام يعمل قبل الالتزام. بُني CADRAN عرضاً توضيحياً لمناقصة ضمن برنامج TRANSFORME، ليُظهر كيف يمكن لمكتب إحصاء تشغيل دورته كاملة.',
    },
    built: {
      en: ['Business register', 'Field collection', 'Quality control', 'Publication dashboard'],
      fr: ['Registre des entreprises', 'Collecte terrain', 'Contrôle qualité', 'Tableau de bord de diffusion'],
      es: ['Registro de empresas', 'Recolección en campo', 'Control de calidad', 'Panel de publicación'],
      de: ['Unternehmensregister', 'Felderhebung', 'Qualitätskontrolle', 'Veröffentlichungs-Dashboard'],
      ar: ['سجل المؤسسات', 'الجمع الميداني', 'ضبط الجودة', 'لوحة النشر'],
    },
    role: {
      en: 'Concept, design and build of the public demonstration. Sample data only.',
      fr: 'Conception et développement de la démonstration publique. Données fictives uniquement.',
      es: 'Concepto, diseño y desarrollo de la demostración pública. Solo datos de ejemplo.',
      de: 'Konzept, Design und Entwicklung der öffentlichen Demo. Nur Beispieldaten.',
      ar: 'فكرة العرض العام وتصميمه وبناؤه. بيانات تجريبية فقط.',
    },
  },
  {
    slug: 'boutik', name: 'Boutik', sector: 'commerce', status: 'live',
    url: 'https://boutik.vercel.app', urlLabel: 'boutik.vercel.app', img: 'boutik-desktop', phone: 'boutik-phone',
    client: { en: 'Digni Digital product · shop owners in Kinshasa', fr: 'Produit Digni Digital · commerçants de Kinshasa', es: 'Producto de Digni Digital · comerciantes de Kinshasa', de: 'Digni-Digital-Produkt · Ladenbesitzer in Kinshasa', ar: 'منتج ديجني ديجيتال · أصحاب المتاجر في كينشاسا' },
    location: { en: 'Kinshasa, DRC', fr: 'Kinshasa, RDC', es: 'Kinsasa, RD Congo', de: 'Kinshasa, DR Kongo', ar: 'كينشاسا، الكونغو الديمقراطية' },
    summary: {
      en: 'Shop management in your pocket, even without network: sales, stock, credit book and mobile money in francs and dollars.',
      fr: 'Votre boutique dans la poche, même sans réseau : ventes, stock, carnet de crédit et mobile money en francs et en dollars.',
      es: 'La gestión de tu tienda en el bolsillo, incluso sin red: ventas, inventario, libreta de fiado y dinero móvil en francos y dólares.',
      de: 'Ladenverwaltung in der Hosentasche, auch ohne Netz: Verkäufe, Bestand, Kreditbuch und Mobile Money in Francs und Dollar.',
      ar: 'إدارة المتجر في جيبك حتى دون شبكة: المبيعات والمخزون ودفتر الديون والمال عبر الهاتف بالفرنك والدولار.',
    },
    context: {
      en: 'Small shops in Kinshasa trade in two currencies, sell on credit and lose signal often. Boutik keeps the day’s sales, stock and debts on the phone and syncs when the network returns.',
      fr: 'Les petites boutiques de Kinshasa vendent en deux devises, à crédit, et perdent souvent le réseau. Boutik garde ventes, stock et dettes du jour sur le téléphone et synchronise au retour du réseau.',
      es: 'Las pequeñas tiendas de Kinshasa venden en dos monedas, fían y pierden señal a menudo. Boutik guarda en el teléfono las ventas, el inventario y las deudas del día y sincroniza cuando vuelve la red.',
      de: 'Kleine Läden in Kinshasa handeln in zwei Währungen, verkaufen auf Kredit und verlieren oft das Netz. Boutik speichert Tagesumsätze, Bestand und Schulden auf dem Handy und synchronisiert, sobald das Netz zurück ist.',
      ar: 'تتعامل المتاجر الصغيرة في كينشاسا بعملتين وتبيع بالدين وتفقد الشبكة كثيراً. يحفظ Boutik مبيعات اليوم والمخزون والديون على الهاتف ويزامنها عند عودة الشبكة.',
    },
    built: {
      en: ['Offline-first web app', 'M-Pesa, Orange Money, Airtel Money', 'CDF and USD', 'French, English, Lingala'],
      fr: ['Application web hors ligne d’abord', 'M-Pesa, Orange Money, Airtel Money', 'CDF et USD', 'Français, anglais, lingala'],
      es: ['App web que funciona sin conexión', 'M-Pesa, Orange Money, Airtel Money', 'CDF y USD', 'Francés, inglés, lingala'],
      de: ['Offline-fähige Web-App', 'M-Pesa, Orange Money, Airtel Money', 'CDF und USD', 'Französisch, Englisch, Lingala'],
      ar: ['تطبيق ويب يعمل دون اتصال أولاً', 'M-Pesa وOrange Money وAirtel Money', 'الفرنك الكونغولي والدولار', 'الفرنسية والإنجليزية واللينغالا'],
    },
    role: { en: 'Our own product: design, build and operation.', fr: 'Notre produit : conception, développement et exploitation.', es: 'Producto propio: diseño, desarrollo y operación.', de: 'Eigenes Produkt: Design, Entwicklung und Betrieb.', ar: 'منتجنا الخاص: التصميم والبناء والتشغيل.' },
  },
  {
    slug: 'apporte', name: 'Apporte', sector: 'commerce', status: 'live',
    url: 'https://apporte.vercel.app', urlLabel: 'apporte.vercel.app', img: 'apporte-desktop', phone: 'apporte-phone',
    client: { en: 'Digni Digital product · Kinshasa (Gombe)', fr: 'Produit Digni Digital · Kinshasa (Gombe)', es: 'Producto de Digni Digital · Kinshasa (Gombe)', de: 'Digni-Digital-Produkt · Kinshasa (Gombe)', ar: 'منتج ديجني ديجيتال · كينشاسا (غومبي)' },
    location: { en: 'Kinshasa, DRC', fr: 'Kinshasa, RDC', es: 'Kinsasa, RD Congo', de: 'Kinshasa, DR Kongo', ar: 'كينشاسا، الكونغو الديمقراطية' },
    summary: {
      en: 'Food delivery and smart finds for Kinshasa: restaurants, gadgets and everyday needs, ordered in a few taps.',
      fr: 'Livraison de repas et trouvailles à Kinshasa : restaurants, gadgets et besoins du quotidien en quelques taps.',
      es: 'Comida a domicilio y hallazgos para Kinshasa: restaurantes, gadgets y lo de cada día en pocos toques.',
      de: 'Essenslieferung und clevere Funde für Kinshasa: Restaurants, Gadgets und Alltägliches mit wenigen Fingertipps.',
      ar: 'توصيل الطعام واكتشافات ذكية في كينشاسا: مطاعم وأدوات واحتياجات يومية ببضع نقرات.',
    },
    context: {
      en: 'Ordering in Kinshasa still runs through phone calls and WhatsApp threads. Apporte puts menus, carts, riders and merchants in one installable app.',
      fr: 'Commander à Kinshasa passe encore par des appels et des fils WhatsApp. Apporte réunit menus, paniers, livreurs et marchands dans une application installable.',
      es: 'Pedir en Kinshasa todavía pasa por llamadas e hilos de WhatsApp. Apporte reúne menús, carritos, repartidores y comercios en una app instalable.',
      de: 'Bestellen läuft in Kinshasa noch über Anrufe und WhatsApp-Verläufe. Apporte bündelt Speisekarten, Warenkorb, Fahrer und Händler in einer installierbaren App.',
      ar: 'ما زال الطلب في كينشاسا يمر عبر المكالمات ومحادثات واتساب. يجمع Apporte القوائم وسلة الشراء والسائقين والتجار في تطبيق قابل للتثبيت.',
    },
    built: {
      en: ['Installable web app', 'Restaurant menus and cart', 'Merchant and rider apps', 'Order tracking'],
      fr: ['Application web installable', 'Menus et panier', 'Apps marchand et livreur', 'Suivi de commande'],
      es: ['App web instalable', 'Menús y carrito', 'Apps para comercio y repartidor', 'Seguimiento del pedido'],
      de: ['Installierbare Web-App', 'Speisekarten und Warenkorb', 'Händler- und Fahrer-Apps', 'Sendungsverfolgung'],
      ar: ['تطبيق ويب قابل للتثبيت', 'قوائم المطاعم وسلة الشراء', 'تطبيقات للتاجر والسائق', 'تتبع الطلب'],
    },
    role: { en: 'Our own product: design, build and operation.', fr: 'Notre produit : conception, développement et exploitation.', es: 'Producto propio: diseño, desarrollo y operación.', de: 'Eigenes Produkt: Design, Entwicklung und Betrieb.', ar: 'منتجنا الخاص: التصميم والبناء والتشغيل.' },
  },
  {
    slug: 'zandocod', name: 'Zandocod', sector: 'commerce', status: 'live',
    url: 'https://soko-self.vercel.app', urlLabel: 'soko-self.vercel.app', img: 'zandocod-desktop', phone: 'zandocod-phone',
    client: { en: 'Digni Digital product · trusted classifieds', fr: 'Produit Digni Digital · petites annonces de confiance', es: 'Producto de Digni Digital · clasificados de confianza', de: 'Digni-Digital-Produkt · vertrauenswürdige Kleinanzeigen', ar: 'منتج ديجني ديجيتال · إعلانات مبوبة موثوقة' },
    summary: {
      en: 'A trusted classifieds marketplace: real listings, real sellers, real prices.',
      fr: 'Le marché de confiance : annonces vraies, personnes vraies, prix vrais.',
      es: 'Un mercado de clasificados de confianza: anuncios reales, vendedores reales, precios reales.',
      de: 'Ein vertrauenswürdiger Kleinanzeigenmarkt: echte Angebote, echte Verkäufer, echte Preise.',
      ar: 'سوق إعلانات موثوق: إعلانات حقيقية وبائعون حقيقيون وأسعار حقيقية.',
    },
    context: {
      en: 'Buying second-hand online is a gamble when anyone can post anything. Zandocod is built around seller profiles, clear categories and in-app messaging so buyers can tell who they are dealing with.',
      fr: 'Acheter d’occasion en ligne est un pari quand n’importe qui peut publier n’importe quoi. Zandocod repose sur des profils vendeurs, des catégories claires et une messagerie intégrée pour savoir à qui l’on a affaire.',
      es: 'Comprar de segunda mano en línea es una apuesta cuando cualquiera publica cualquier cosa. Zandocod se basa en perfiles de vendedor, categorías claras y mensajería integrada para saber con quién se trata.',
      de: 'Gebraucht online kaufen ist ein Glücksspiel, wenn jeder alles posten kann. Zandocod setzt auf Verkäuferprofile, klare Kategorien und In-App-Nachrichten, damit Käufer wissen, mit wem sie handeln.',
      ar: 'شراء المستعمل عبر الإنترنت مجازفة حين يستطيع أي شخص نشر أي شيء. يقوم Zandocod على ملفات البائعين وفئات واضحة ومراسلة داخل التطبيق ليعرف المشتري مع من يتعامل.',
    },
    built: {
      en: ['Mobile-first marketplace', 'Seller profiles', 'Search and categories', 'In-app messaging'],
      fr: ['Marché mobile d’abord', 'Profils vendeurs', 'Recherche et catégories', 'Messagerie intégrée'],
      es: ['Mercado pensado para móvil', 'Perfiles de vendedor', 'Búsqueda y categorías', 'Mensajería en la app'],
      de: ['Mobile-first-Marktplatz', 'Verkäuferprofile', 'Suche und Kategorien', 'In-App-Nachrichten'],
      ar: ['سوق للهاتف أولاً', 'ملفات البائعين', 'بحث وفئات', 'مراسلة داخل التطبيق'],
    },
    role: { en: 'Our own product: design, build and operation.', fr: 'Notre produit : conception, développement et exploitation.', es: 'Producto propio: diseño, desarrollo y operación.', de: 'Eigenes Produkt: Design, Entwicklung und Betrieb.', ar: 'منتجنا الخاص: التصميم والبناء والتشغيل.' },
  },
  {
    slug: 'mtusda', name: 'MTUSDA', sector: 'community', status: 'live',
    url: 'https://mtusda.vercel.app', urlLabel: 'mtusda.vercel.app', img: 'mtusda-desktop', phone: 'mtusda-phone',
    client: { en: 'Church community app', fr: 'Application de communauté d’église', es: 'App para una comunidad de iglesia', de: 'App für eine Kirchengemeinde', ar: 'تطبيق مجتمع كنسي' },
    summary: {
      en: 'A church app with daily verse, Bible, hymns, lessons and community in one place.',
      fr: 'Une application d’église : verset du jour, Bible, cantiques, leçons et communauté au même endroit.',
      es: 'Una app de iglesia con versículo diario, Biblia, himnos, lecciones y comunidad en un solo lugar.',
      de: 'Eine Kirchen-App mit Tagesvers, Bibel, Liedern, Lektionen und Gemeinschaft an einem Ort.',
      ar: 'تطبيق كنسي يجمع آية اليوم والكتاب المقدس والترانيم والدروس والمجتمع في مكان واحد.',
    },
    context: {
      en: 'Hymn books, lesson guides and announcements were spread across paper and group chats. MTUSDA brings them into one multilingual app members can open on any phone.',
      fr: 'Cantiques, guides de leçons et annonces étaient dispersés entre papier et groupes de discussion. MTUSDA les réunit dans une application multilingue que chaque membre ouvre sur n’importe quel téléphone.',
      es: 'Himnarios, guías de lecciones y anuncios estaban repartidos entre papel y chats de grupo. MTUSDA los reúne en una app multilingüe que cualquier miembro abre en su teléfono.',
      de: 'Liederbücher, Lektionshefte und Ankündigungen lagen verstreut auf Papier und in Gruppenchats. MTUSDA bündelt sie in einer mehrsprachigen App für jedes Handy.',
      ar: 'كانت كتب الترانيم وأدلة الدروس والإعلانات موزعة بين الورق ومجموعات الدردشة. يجمعها MTUSDA في تطبيق متعدد اللغات يفتحه الأعضاء على أي هاتف.',
    },
    built: {
      en: ['Bible search', 'Hymn book', 'Lessons', 'Multilingual'],
      fr: ['Recherche biblique', 'Recueil de cantiques', 'Leçons', 'Multilingue'],
      es: ['Búsqueda bíblica', 'Himnario', 'Lecciones', 'Multilingüe'],
      de: ['Bibelsuche', 'Liederbuch', 'Lektionen', 'Mehrsprachig'],
      ar: ['بحث في الكتاب المقدس', 'كتاب الترانيم', 'دروس', 'متعدد اللغات'],
    },
    role: { en: 'Design and build.', fr: 'Conception et développement.', es: 'Diseño y desarrollo.', de: 'Konzeption und Entwicklung.', ar: 'التصميم والبناء.' },
  },
  {
    slug: 'fremo-medical', name: 'FreMo Medical and Birth Centre', sector: 'health', status: 'delivered', logo: '/clients/fremo-medical.jpg',
    client: same('FreMo Medical and Birth Centre'),
    location: { en: 'Nairobi, Kenya', fr: 'Nairobi, Kenya', es: 'Nairobi, Kenia', de: 'Nairobi, Kenia', ar: 'نيروبي، كينيا' },
    summary: {
      en: 'Online booking, automated reminders and a staff dashboard for a medical and birth centre, alongside consolidated reporting across maternal, neonatal and child health projects.',
      fr: 'Réservation en ligne, rappels automatiques et tableau de bord pour un centre médical et de maternité, avec un reporting consolidé des projets de santé maternelle, néonatale et infantile.',
      es: 'Reserva en línea, recordatorios automáticos y panel para el personal de un centro médico y de partos, junto con reportes consolidados de proyectos de salud materna, neonatal e infantil.',
      de: 'Onlinebuchung, automatische Erinnerungen und ein Team-Dashboard für ein Medizin- und Geburtszentrum, dazu konsolidierte Berichte über Projekte zu Mütter-, Neugeborenen- und Kindergesundheit.',
      ar: 'حجز إلكتروني وتذكيرات تلقائية ولوحة للطاقم في مركز طبي وتوليد، إلى جانب تقارير موحدة لمشاريع صحة الأم والمولود والطفل.',
    },
    context: {
      en: 'Manual appointment booking led to 40% no-shows, lost revenue and frustrated patients, with staff spending 3+ hours daily on scheduling conflicts. Reporting across the centre’s public-health projects also had to be consolidated.',
      fr: 'La prise de rendez-vous manuelle entraînait 40 % d’absences, des revenus perdus et des patients frustrés, et l’équipe passait plus de 3 heures par jour sur les conflits de planning. Le reporting des projets de santé publique du centre devait aussi être consolidé.',
      es: 'La reserva manual de citas provocaba un 40 % de ausencias, ingresos perdidos y pacientes frustrados, y el personal dedicaba más de 3 horas al día a conflictos de agenda. También había que consolidar los reportes de los proyectos de salud pública del centro.',
      de: 'Die manuelle Terminvergabe führte zu 40 % Nichterscheinen, Umsatzverlusten und unzufriedenen Patientinnen; das Team verbrachte täglich über 3 Stunden mit Terminkonflikten. Zudem mussten die Berichte der Public-Health-Projekte des Zentrums zusammengeführt werden.',
      ar: 'أدى الحجز اليدوي للمواعيد إلى غياب 40% من المرضى وخسارة في الإيرادات واستياء المرضى، وكان الطاقم يقضي أكثر من 3 ساعات يومياً في تعارض المواعيد. كما احتاجت تقارير مشاريع الصحة العامة في المركز إلى التوحيد.',
    },
    built: {
      en: ['Patient portal with online booking', 'Automated SMS and email reminders', 'Staff dashboard for schedule management', 'Payment processing for consultations', 'Consolidated reporting across health projects'],
      fr: ['Portail patient avec réservation en ligne', 'Rappels SMS et e-mail automatisés', 'Tableau de bord du planning', 'Paiement des consultations', 'Reporting consolidé des projets de santé'],
      es: ['Portal del paciente con reserva en línea', 'Recordatorios automáticos por SMS y correo', 'Panel del personal para la agenda', 'Cobro de consultas', 'Reportes consolidados de los proyectos de salud'],
      de: ['Patientenportal mit Onlinebuchung', 'Automatische SMS- und E-Mail-Erinnerungen', 'Team-Dashboard für die Terminplanung', 'Zahlungsabwicklung für Konsultationen', 'Konsolidierte Berichte über Gesundheitsprojekte'],
      ar: ['بوابة للمرضى مع حجز إلكتروني', 'تذكيرات تلقائية بالرسائل والبريد', 'لوحة للطاقم لإدارة المواعيد', 'دفع رسوم الاستشارات', 'تقارير موحدة لمشاريع الصحة'],
    },
    role: {
      en: 'Business development and systems. Our founder supervised and consolidated reporting metrics across the centre’s public-health projects (2021).',
      fr: 'Développement commercial et systèmes. Notre fondateur a supervisé et consolidé les indicateurs de reporting des projets de santé publique du centre (2021).',
      es: 'Desarrollo de negocio y sistemas. Nuestro fundador supervisó y consolidó los indicadores de los proyectos de salud pública del centro (2021).',
      de: 'Geschäftsentwicklung und Systeme. Unser Gründer hat die Berichtskennzahlen der Public-Health-Projekte des Zentrums betreut und zusammengeführt (2021).',
      ar: 'تطوير الأعمال والأنظمة. أشرف مؤسسنا على مؤشرات التقارير ووحّدها عبر مشاريع الصحة العامة في المركز (2021).',
    },
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'Stripe'],
    claims: {
      en: ['40% no-shows before the system', '3+ hours of staff time per day on scheduling', 'Delivered in 6 weeks'],
      fr: ['40 % d’absences avant le système', 'Plus de 3 heures de planning par jour', 'Livré en 6 semaines'],
      es: ['40 % de ausencias antes del sistema', 'Más de 3 horas diarias de agenda', 'Entregado en 6 semanas'],
      de: ['40 % Nichterscheinen vor dem System', 'Über 3 Stunden Terminplanung pro Tag', 'In 6 Wochen geliefert'],
      ar: ['40% غياب قبل النظام', 'أكثر من 3 ساعات يومياً للمواعيد', 'سُلّم خلال 6 أسابيع'],
    },
    quote: {
      text: {
        en: 'Digni Digital transformed our entire patient experience. The booking system alone has saved us countless hours and significantly improved our revenue.',
        fr: 'Digni Digital a transformé toute notre expérience patient. Le système de réservation nous a fait gagner un temps considérable et a nettement amélioré nos revenus.',
        es: 'Digni Digital transformó toda nuestra experiencia del paciente. Solo el sistema de reservas nos ha ahorrado incontables horas y ha mejorado notablemente nuestros ingresos.',
        de: 'Digni Digital hat unser gesamtes Patientenerlebnis verändert. Allein das Buchungssystem hat uns unzählige Stunden gespart und unseren Umsatz deutlich verbessert.',
        ar: 'غيّرت ديجني ديجيتال تجربة مرضانا بالكامل. نظام الحجز وحده وفّر علينا ساعات لا تُحصى وحسّن إيراداتنا بشكل ملحوظ.',
      },
      author: 'FreMo Medical team',
    },
  },
  {
    slug: 'shep-engineering', name: 'Shep Engineering', sector: 'services', status: 'delivered', logo: '/clients/shep-engineering.jpg',
    client: same('Shep Engineering'),
    location: { en: 'Accra, Ghana', fr: 'Accra, Ghana', es: 'Acra, Ghana', de: 'Accra, Ghana', ar: 'أكرا، غانا' },
    summary: {
      en: 'An AI-assisted proposal system for an engineering firm: proposals drafted in minutes, shared through a client portal and tracked in the CRM.',
      fr: 'Un système de propositions assisté par IA pour un cabinet d’ingénierie : propositions rédigées en quelques minutes, partagées via un portail client et suivies dans le CRM.',
      es: 'Un sistema de propuestas asistido por IA para una firma de ingeniería: propuestas redactadas en minutos, compartidas en un portal de clientes y seguidas en el CRM.',
      de: 'Ein KI-gestütztes Angebotssystem für ein Ingenieurbüro: Angebote in Minuten entworfen, über ein Kundenportal geteilt und im CRM verfolgt.',
      ar: 'نظام عروض مدعوم بالذكاء الاصطناعي لشركة هندسية: عروض تُصاغ في دقائق وتُشارك عبر بوابة العملاء وتُتابع في نظام إدارة العملاء.',
    },
    context: {
      en: 'The team spent 5+ hours on each proposal and lost deals to faster competitors. Proposal quality also varied from one person to the next.',
      fr: 'L’équipe passait plus de 5 heures par proposition et perdait des affaires face à des concurrents plus rapides. La qualité variait d’une personne à l’autre.',
      es: 'El equipo dedicaba más de 5 horas a cada propuesta y perdía negocios frente a competidores más rápidos. La calidad variaba de una persona a otra.',
      de: 'Das Team brauchte über 5 Stunden pro Angebot und verlor Aufträge an schnellere Wettbewerber. Die Qualität schwankte von Person zu Person.',
      ar: 'كان الفريق يقضي أكثر من 5 ساعات على كل عرض ويخسر صفقات لصالح منافسين أسرع، كما تفاوتت جودة العروض من شخص لآخر.',
    },
    built: {
      en: ['AI-powered proposal generation', 'Client portal for document sharing', 'Mobile app for the team', 'CRM integration for lead tracking'],
      fr: ['Génération de propositions par IA', 'Portail client pour les documents', 'Application mobile pour l’équipe', 'Intégration CRM pour le suivi des prospects'],
      es: ['Generación de propuestas con IA', 'Portal de clientes para documentos', 'App móvil para el equipo', 'Integración con CRM para seguimiento de leads'],
      de: ['KI-gestützte Angebotserstellung', 'Kundenportal für Dokumente', 'Mobile App für das Team', 'CRM-Anbindung zur Lead-Verfolgung'],
      ar: ['توليد العروض بالذكاء الاصطناعي', 'بوابة عملاء لمشاركة المستندات', 'تطبيق جوال للفريق', 'ربط بنظام إدارة العملاء لمتابعة الفرص'],
    },
    role: { en: 'Design and build of the proposal system.', fr: 'Conception et développement du système de propositions.', es: 'Diseño y desarrollo del sistema de propuestas.', de: 'Konzeption und Entwicklung des Angebotssystems.', ar: 'تصميم نظام العروض وبناؤه.' },
    stack: ['React Native', 'Express.js', 'MongoDB', 'AWS S3', 'OpenAI API'],
    claims: {
      en: ['5+ hours per proposal before the system', 'Proposals in minutes instead of hours', 'Delivered in 4 weeks'],
      fr: ['Plus de 5 heures par proposition avant le système', 'Des propositions en minutes au lieu d’heures', 'Livré en 4 semaines'],
      es: ['Más de 5 horas por propuesta antes del sistema', 'Propuestas en minutos en lugar de horas', 'Entregado en 4 semanas'],
      de: ['Über 5 Stunden pro Angebot vor dem System', 'Angebote in Minuten statt Stunden', 'In 4 Wochen geliefert'],
      ar: ['أكثر من 5 ساعات لكل عرض قبل النظام', 'عروض في دقائق بدل ساعات', 'سُلّم خلال 4 أسابيع'],
    },
    quote: {
      text: {
        en: 'Our agents can now create professional proposals in minutes instead of hours. This has been a game-changer for our competitive advantage.',
        fr: 'Nos équipes créent désormais des propositions professionnelles en quelques minutes au lieu de plusieurs heures. Un vrai tournant pour notre compétitivité.',
        es: 'Nuestro equipo ahora crea propuestas profesionales en minutos en lugar de horas. Ha cambiado por completo nuestra ventaja competitiva.',
        de: 'Unser Team erstellt professionelle Angebote jetzt in Minuten statt Stunden. Das hat unsere Wettbewerbsfähigkeit grundlegend verändert.',
        ar: 'أصبح فريقنا يُعدّ عروضاً احترافية في دقائق بدل ساعات. كان ذلك نقطة تحول في قدرتنا التنافسية.',
      },
      author: 'Shep Engineering team',
    },
  },
  {
    slug: 'glamsquad-kenya', name: 'GlamSquad Kenya', sector: 'services', status: 'delivered', logo: '/clients/glamsquad-kenya.jpeg',
    client: same('GlamSquad Kenya'),
    location: { en: 'Nairobi, Kenya', fr: 'Nairobi, Kenya', es: 'Nairobi, Kenia', de: 'Nairobi, Kenia', ar: 'نيروبي، كينيا' },
    summary: {
      en: 'Standard proposals, a pricing calculator and an automated client-reporting dashboard that replaced ad-hoc drafts and weekly manual reports.',
      fr: 'Des propositions standardisées, un calculateur de prix et un tableau de bord de reporting automatisé à la place des brouillons improvisés et des rapports manuels hebdomadaires.',
      es: 'Propuestas estándar, una calculadora de precios y un panel de reportes automatizado que sustituyeron los borradores improvisados y los informes manuales semanales.',
      de: 'Standardisierte Angebote, ein Preisrechner und ein automatisiertes Kunden-Reporting statt spontaner Entwürfe und wöchentlicher Handarbeit.',
      ar: 'عروض موحدة وحاسبة أسعار ولوحة تقارير آلية للعملاء حلّت محل المسودات العشوائية والتقارير اليدوية الأسبوعية.',
    },
    context: {
      en: 'Inconsistent proposal quality and pricing led to a 60% rejection rate, and manual client reporting consumed 20+ hours every week.',
      fr: 'Une qualité et des prix de propositions irréguliers entraînaient 60 % de refus, et le reporting client manuel prenait plus de 20 heures par semaine.',
      es: 'La calidad y los precios irregulares de las propuestas provocaban un 60 % de rechazo, y los informes manuales a clientes consumían más de 20 horas semanales.',
      de: 'Uneinheitliche Angebotsqualität und Preise führten zu 60 % Ablehnungen, und manuelles Kunden-Reporting kostete jede Woche über 20 Stunden.',
      ar: 'أدى تفاوت جودة العروض وأسعارها إلى رفض 60% منها، وكانت تقارير العملاء اليدوية تستهلك أكثر من 20 ساعة أسبوعياً.',
    },
    built: {
      en: ['Standardised proposal templates', 'Dynamic pricing calculator', 'Automated client-reporting dashboard', 'Project management integration', 'Client communication portal'],
      fr: ['Modèles de propositions standardisés', 'Calculateur de prix dynamique', 'Tableau de bord de reporting automatisé', 'Intégration à la gestion de projet', 'Portail de communication client'],
      es: ['Plantillas de propuesta estandarizadas', 'Calculadora de precios dinámica', 'Panel de reportes automatizado', 'Integración con gestión de proyectos', 'Portal de comunicación con clientes'],
      de: ['Standardisierte Angebotsvorlagen', 'Dynamischer Preisrechner', 'Automatisiertes Reporting-Dashboard', 'Anbindung an das Projektmanagement', 'Kundenkommunikationsportal'],
      ar: ['قوالب عروض موحدة', 'حاسبة أسعار ديناميكية', 'لوحة تقارير آلية للعملاء', 'ربط بإدارة المشاريع', 'بوابة تواصل مع العملاء'],
    },
    role: { en: 'Design and build of the proposal and reporting system.', fr: 'Conception et développement du système de propositions et de reporting.', es: 'Diseño y desarrollo del sistema de propuestas y reportes.', de: 'Konzeption und Entwicklung des Angebots- und Reportingsystems.', ar: 'تصميم نظام العروض والتقارير وبناؤه.' },
    stack: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'SendGrid'],
    claims: {
      en: ['60% proposal rejection rate before the system', '20+ hours a week on manual reporting', 'Delivered in 3 weeks'],
      fr: ['60 % de propositions refusées avant le système', 'Plus de 20 heures de reporting manuel par semaine', 'Livré en 3 semaines'],
      es: ['60 % de propuestas rechazadas antes del sistema', 'Más de 20 horas semanales de reportes manuales', 'Entregado en 3 semanas'],
      de: ['60 % Ablehnungsquote vor dem System', 'Über 20 Stunden manuelles Reporting pro Woche', 'In 3 Wochen geliefert'],
      ar: ['60% من العروض مرفوضة قبل النظام', 'أكثر من 20 ساعة أسبوعياً للتقارير اليدوية', 'سُلّم خلال 3 أسابيع'],
    },
    quote: {
      text: {
        en: 'The proposal system has completely transformed our sales process. We’re closing more deals and spending less time on admin work.',
        fr: 'Le système de propositions a complètement transformé notre processus commercial. Nous concluons plus d’affaires et passons moins de temps sur l’administratif.',
        es: 'El sistema de propuestas transformó por completo nuestro proceso de ventas. Cerramos más acuerdos y dedicamos menos tiempo a tareas administrativas.',
        de: 'Das Angebotssystem hat unseren Vertriebsprozess komplett verändert. Wir schließen mehr Aufträge ab und verbringen weniger Zeit mit Verwaltung.',
        ar: 'غيّر نظام العروض عملية المبيعات لدينا بالكامل. نُغلق صفقات أكثر ونقضي وقتاً أقل في الأعمال الإدارية.',
      },
      author: 'GlamSquad Kenya founders',
    },
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const sectorOrder: (Sector | 'all')[] = ['all', 'education', 'ngo', 'public', 'hospitality', 'health', 'commerce', 'services', 'community']
