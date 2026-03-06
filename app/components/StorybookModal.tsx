'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/context/LocaleContext'
import type { Language } from '@/app/i18n/translations'

export interface StorySlide {
  id: string
  year?: string
  title: Record<Language, string>
  content: Record<Language, string>
  highlight?: Record<Language, string>
  backgroundImage?: string
  backgroundVideo?: string
}

const STORY_SLIDES: StorySlide[] = [
  {
    id: 'origin',
    title: {
      en: 'The Hustle That Started It All',
      fr: 'Le début de tout',
      ar: 'البداية التي غيرت كل شيء',
      de: 'Der Anfang von allem',
      es: 'El inicio de todo',
    },
    content: {
      en: 'It started with YouTube. I figured out how to help creators hit 3,000 watch hours and 1,000 subscribers—the magic numbers to monetize. It worked so well that the money helped me buy my first car. But that success taught me a hard lesson: wealth disappears where there\'s no structure. I needed to build something real.',
      fr: 'Tout a commencé avec YouTube. J\'ai trouvé comment aider les créateurs à atteindre 3 000 heures de visionnage et 1 000 abonnés—les chiffres magiques pour monétiser. Ça a si bien marché que l\'argent m\'a permis d\'acheter ma première voiture. Mais ce succès m\'a appris une dure leçon : la richesse disparaît là où il n\'y a pas de structure.',
      ar: 'بدأ كل شيء من يوتيوب. اكتشفت كيف أساعد صناع المحتوى في الوصول إلى 3000 ساعة مشاهدة و1000 مشترك. نجح الأمر لدرجة أنني اشتريت سيارتي الأولى. لكن هذا النجاح علمني درساً قاسياً: الثروة تتلاشى حيث لا يوجد هيكل.',
      de: 'Es begann mit YouTube. Ich half Creatorn, 3.000 Stunden Wiedergabezeit und 1.000 Abonnenten zu erreichen. Es funktionierte so gut, dass ich mir mein erstes Auto kaufen konnte. Aber dieser Erfolg lehrte mich: Wohlstand verschwindet ohne Struktur.',
      es: 'Todo empezó con YouTube. Descubrí cómo ayudar a creadores a alcanzar 3,000 horas de visualización y 1,000 suscriptores. Funcionó tan bien que me compré mi primer auto. Pero ese éxito me enseñó una lección dura: la riqueza desaparece donde no hay estructura.',
    },
    highlight: {
      en: 'Wealth disappears where there\'s no structure',
      fr: 'La richesse disparaît sans structure',
      ar: 'الثروة تتلاشى بدون هيكل',
      de: 'Wohlstand verschwindet ohne Struktur',
      es: 'La riqueza desaparece sin estructura',
    },
    backgroundImage: '/story/early-days.jpg',
  },
  {
    id: 'dream',
    title: {
      en: 'The Moment Everything Changed',
      fr: 'Le moment où tout a changé',
      ar: 'اللحظة التي غيرت كل شيء',
      de: 'Der Moment, der alles veränderte',
      es: 'El momento que lo cambió todo',
    },
    content: {
      en: 'At 16, I attended Microsoft\'s Digital Literacy program. It changed my life. I learned web development, discovered the power of technology, and realized that the skills reserved for the privileged could be mine too. That program planted a seed: one day, I would give back exactly what was given to me.',
      fr: 'À 16 ans, j\'ai participé au programme d\'alphabétisation numérique de Microsoft. Ça a changé ma vie. J\'ai appris le développement web et réalisé que les compétences réservées aux privilégiés pouvaient aussi être les miennes. Ce programme a planté une graine : un jour, je rendrais exactement ce qu\'on m\'avait donné.',
      ar: 'في سن السادسة عشرة، حضرت برنامج محو الأمية الرقمية من مايكروسوفت. غيّر حياتي. تعلمت تطوير الويب وأدركت أن المهارات المحجوزة للنخبة يمكن أن تكون لي أيضاً. زرع ذلك البرنامج بذرة: يوماً ما سأرد بالضبط ما أُعطي لي.',
      de: 'Mit 16 nahm ich an Microsofts Digital-Literacy-Programm teil. Es veränderte mein Leben. Ich lernte Webentwicklung und erkannte, dass die Fähigkeiten der Privilegierten auch mir gehören könnten. Dieses Programm pflanzte einen Samen: Eines Tages würde ich genau das zurückgeben.',
      es: 'A los 16 años, asistí al programa de Alfabetización Digital de Microsoft. Cambió mi vida. Aprendí desarrollo web y me di cuenta de que las habilidades reservadas para los privilegiados también podían ser mías. Ese programa plantó una semilla: algún día devolvería exactamente lo que me dieron.',
    },
    highlight: {
      en: 'One day, I would give back what was given to me',
      fr: 'Un jour, je rendrais ce qu\'on m\'avait donné',
      ar: 'يوماً ما سأرد ما أُعطي لي',
      de: 'Eines Tages würde ich genau das zurückgeben',
      es: 'Algún día devolvería lo que me dieron',
    },
    backgroundImage: '/story/class-image-1.jpeg',
  },
  {
    id: '2019',
    year: '2019',
    title: {
      en: 'The Leap to Nairobi',
      fr: 'Le saut vers Nairobi',
      ar: 'القفزة إلى نيروبي',
      de: 'Der Sprung nach Nairobi',
      es: 'El salto a Nairobi',
    },
    content: {
      en: 'Armed with web development skills and a reckless amount of courage, I convinced someone I could build them a website—and traveled to Nairobi to deliver. No safety net. No backup plan. Just a refugee youth with a laptop and a dream bigger than his circumstances. This was where FlashRankMedia was born.',
      fr: 'Armé de compétences en développement web et d\'un courage fou, j\'ai convaincu quelqu\'un que je pouvais lui construire un site web—et j\'ai voyagé à Nairobi pour livrer. Pas de filet de sécurité. Pas de plan B. Juste un jeune réfugié avec un ordinateur portable et un rêve plus grand que ses circonstances.',
      ar: 'مسلحاً بمهارات تطوير الويب وشجاعة لا حدود لها، أقنعت شخصاً أنني أستطيع بناء موقع إلكتروني له—وسافرت إلى نيروبي لتسليمه. بدون شبكة أمان. بدون خطة بديلة. مجرد شاب لاجئ بحاسوب محمول وحلم أكبر من ظروفه.',
      de: 'Mit Webentwicklungs-Skills und grenzenlosem Mut überzeugte ich jemanden, dass ich eine Website bauen könnte—und reiste nach Nairobi. Kein Sicherheitsnetz. Kein Backup-Plan. Nur ein Flüchtlingsjugendlicher mit einem Laptop und einem Traum größer als seine Umstände.',
      es: 'Armado con habilidades de desarrollo web y una cantidad temeraria de coraje, convencí a alguien de que podía construirle un sitio web—y viajé a Nairobi. Sin red de seguridad. Sin plan B. Solo un joven refugiado con una laptop y un sueño más grande que sus circunstancias.',
    },
    backgroundImage: '/story/img-20190615.jpg',
  },
  {
    id: '2020',
    year: '2020',
    title: {
      en: 'The Lesson in Mombasa',
      fr: 'La leçon de Mombasa',
      ar: 'درس ممباسا',
      de: 'Die Lektion in Mombasa',
      es: 'La lección en Mombasa',
    },
    content: {
      en: 'I made it to Mombasa, the coast of Kenya—but got conned. Lost everything and had to return to the camp. Most people would have quit. I didn\'t. That failure became fuel. I came back stronger, got another opportunity in Nairobi, and this time, I was ready. The foundation of Digni Consulting was laid.',
      fr: 'J\'ai atteint Mombasa, la côte du Kenya—mais j\'ai été arnaqué. J\'ai tout perdu et j\'ai dû retourner au camp. La plupart auraient abandonné. Pas moi. Cet échec est devenu du carburant. Je suis revenu plus fort, j\'ai eu une autre opportunité à Nairobi, et cette fois, j\'étais prêt.',
      ar: 'وصلت إلى ممباسا، ساحل كينيا—لكنني تعرضت للاحتيال. فقدت كل شيء واضطررت للعودة إلى المخيم. كان معظم الناس سيستسلمون. أنا لم أفعل. أصبح هذا الفشل وقوداً. عدت أقوى، حصلت على فرصة أخرى في نيروبي، وهذه المرة كنت مستعداً.',
      de: 'Ich schaffte es nach Mombasa, Kenias Küste—wurde aber betrogen. Verlor alles und musste zurück ins Camp. Die meisten hätten aufgegeben. Ich nicht. Dieses Scheitern wurde Treibstoff. Ich kam stärker zurück, bekam eine neue Chance in Nairobi, und diesmal war ich bereit.',
      es: 'Llegué a Mombasa, la costa de Kenia—pero me estafaron. Perdí todo y tuve que volver al campo. La mayoría habría renunciado. Yo no. Ese fracaso se convirtió en combustible. Volví más fuerte, conseguí otra oportunidad en Nairobi, y esta vez estaba listo.',
    },
    highlight: {
      en: 'That failure became fuel',
      fr: 'Cet échec est devenu du carburant',
      ar: 'أصبح هذا الفشل وقوداً',
      de: 'Dieses Scheitern wurde Treibstoff',
      es: 'Ese fracaso se convirtió en combustible',
    },
    backgroundImage: '/story/mombasa.jpg',
  },
  {
    id: '2021',
    year: '2021',
    title: {
      en: 'Digni Consulting Is Born',
      fr: 'Naissance de Digni Consulting',
      ar: 'ولادة ديجني للاستشارات',
      de: 'Digni Consulting wird geboren',
      es: 'Nace Digni Consulting',
    },
    content: {
      en: 'Back in Nairobi with a second chance, the foundation of what would become Digni Digital was laid—starting as Digni Consulting. Websites, digital solutions, apps, marketing. The toolkit grew and so did the impact. We were proving that small budgets could get big results.',
      fr: 'De retour à Nairobi avec une deuxième chance, les fondations de ce qui deviendrait Digni Digital ont été posées—en commençant par Digni Consulting. Sites web, solutions numériques, applications, marketing. La boîte à outils a grandi et l\'impact aussi.',
      ar: 'عدت إلى نيروبي بفرصة ثانية، وتم وضع أساس ما سيصبح ديجني ديجيتال—بدءاً من ديجني للاستشارات. مواقع إلكترونية، حلول رقمية، تطبيقات، تسويق. نمت مجموعة الأدوات ونما التأثير أيضاً.',
      de: 'Zurück in Nairobi mit einer zweiten Chance wurde das Fundament für Digni Digital gelegt—zunächst als Digni Consulting. Websites, digitale Lösungen, Apps, Marketing. Das Toolkit wuchs und damit auch der Impact.',
      es: 'De vuelta en Nairobi con una segunda oportunidad, se sentaron las bases de lo que sería Digni Digital—comenzando como Digni Consulting. Sitios web, soluciones digitales, apps, marketing. Las herramientas crecieron y el impacto también.',
    },
    backgroundImage: '/story/20210721_141331.jpg',
  },
  {
    id: '2022',
    year: '2022',
    title: {
      en: 'Going International',
      fr: 'L\'international',
      ar: 'الانطلاق دولياً',
      de: 'International expandieren',
      es: 'Expandiéndonos internacionalmente',
    },
    content: {
      en: 'From Kenya to the world. Clients across continents started trusting us with their digital growth. The FlashRankMedia era evolved, the team grew, and we proved that a company born from a refugee camp could compete on the global stage.',
      fr: 'Du Kenya au monde. Des clients sur tous les continents ont commencé à nous faire confiance pour leur croissance numérique. L\'ère FlashRankMedia a évolué, l\'équipe a grandi, et nous avons prouvé qu\'une entreprise née d\'un camp de réfugiés pouvait rivaliser sur la scène mondiale.',
      ar: 'من كينيا إلى العالم. بدأ عملاء من جميع القارات يثقون بنا لنموهم الرقمي. تطور عصر FlashRankMedia، نما الفريق، وأثبتنا أن شركة ولدت من مخيم لاجئين يمكنها المنافسة على المسرح العالمي.',
      de: 'Von Kenia in die Welt. Kunden auf allen Kontinenten vertrauten uns mit ihrem digitalen Wachstum. Die FlashRankMedia-Ära entwickelte sich weiter, das Team wuchs, und wir bewiesen, dass ein Unternehmen aus einem Flüchtlingscamp auf der Weltbühne bestehen kann.',
      es: 'De Kenia al mundo. Clientes en todos los continentes empezaron a confiar en nosotros para su crecimiento digital. La era FlashRankMedia evolucionó, el equipo creció, y demostramos que una empresa nacida en un campo de refugiados puede competir en el escenario global.',
    },
    backgroundImage: '/story/team-3.jpeg',
  },
  {
    id: '2023',
    year: '2023',
    title: {
      en: 'Traveling & Building',
      fr: 'Voyager & Construire',
      ar: 'السفر والبناء',
      de: 'Reisen & Aufbauen',
      es: 'Viajando y construyendo',
    },
    content: {
      en: 'Rwanda. Uganda. Every new country brought new perspectives and new clients. We launched our first SaaS product—systems that scale with our clients. The company was no longer just a service provider; it was becoming a product company.',
      fr: 'Rwanda. Ouganda. Chaque nouveau pays apportait de nouvelles perspectives et de nouveaux clients. Nous avons lancé notre premier produit SaaS—des systèmes qui évoluent avec nos clients. L\'entreprise n\'était plus seulement un prestataire de services ; elle devenait une entreprise de produits.',
      ar: 'رواندا. أوغندا. كل بلد جديد جلب آفاقاً وعملاء جدد. أطلقنا أول منتج SaaS—أنظمة تتوسع مع عملائنا. لم تعد الشركة مجرد مزود خدمات؛ كانت تتحول إلى شركة منتجات.',
      de: 'Ruanda. Uganda. Jedes neue Land brachte neue Perspektiven und neue Kunden. Wir launchten unser erstes SaaS-Produkt—Systeme, die mit unseren Kunden skalieren. Das Unternehmen wurde von einem Dienstleister zum Produktunternehmen.',
      es: 'Ruanda. Uganda. Cada nuevo país trajo nuevas perspectivas y nuevos clientes. Lanzamos nuestro primer producto SaaS—sistemas que escalan con nuestros clientes. La empresa ya no era solo un proveedor de servicios; se estaba convirtiendo en una empresa de productos.',
    },
    backgroundImage: '/story/dji-drone-shot.jpg',
  },
  {
    id: '2024',
    year: '2024',
    title: {
      en: 'AI & Kinshasa',
      fr: 'IA & Kinshasa',
      ar: 'الذكاء الاصطناعي وكينشاسا',
      de: 'KI & Kinshasa',
      es: 'IA y Kinshasa',
    },
    content: {
      en: 'Attended the AI Conference in Nairobi, then moved to DRC Kinshasa. Full growth systems. AI solutions. ProposalAgent. We weren\'t just building websites anymore—we were building technology that perceives, reasons, and acts. It was in DRC that the company was officially formed in the USA.',
      fr: 'Participation à la conférence IA à Nairobi, puis déménagement en RDC Kinshasa. Systèmes de croissance complets. Solutions IA. ProposalAgent. Nous ne construisions plus de simples sites web—nous construisions une technologie qui perçoit, raisonne et agit. C\'est en RDC que l\'entreprise a été officiellement créée aux USA.',
      ar: 'حضرت مؤتمر الذكاء الاصطناعي في نيروبي، ثم انتقلت إلى كينشاسا في جمهورية الكونغو الديمقراطية. أنظمة نمو كاملة. حلول ذكاء اصطناعي. ProposalAgent. لم نكن نبني مواقع ويب فحسب—كنا نبني تقنية تدرك وتفكر وتتصرف. في الكونغو تم تأسيس الشركة رسمياً في أمريكا.',
      de: 'Teilnahme an der KI-Konferenz in Nairobi, dann Umzug nach Kinshasa, DRC. Vollständige Wachstumssysteme. KI-Lösungen. ProposalAgent. Wir bauten nicht mehr nur Websites—wir bauten Technologie, die wahrnimmt, denkt und handelt. In der DRC wurde das Unternehmen offiziell in den USA gegründet.',
      es: 'Asistí a la Conferencia de IA en Nairobi, luego me mudé a Kinshasa, RDC. Sistemas de crecimiento completos. Soluciones de IA. ProposalAgent. Ya no solo construíamos sitios web—construíamos tecnología que percibe, razona y actúa. Fue en la RDC donde la empresa se formó oficialmente en los EE.UU.',
    },
    backgroundImage: '/story/ai-conference-2024-nairobi.jpeg',
  },
  {
    id: '2025',
    year: '2025',
    title: {
      en: 'Head Down, Building',
      fr: 'Tête baissée, on construit',
      ar: 'العمل بجد والبناء',
      de: 'Kopf runter, aufbauen',
      es: 'Cabeza abajo, construyendo',
    },
    content: {
      en: 'Put my head down and built. Every experience from every country, every failure, every lesson—poured into Digni Digital. AI Employee systems that capture every lead. The Digni Digital Literacy program. Agentic software. All the pieces coming together.',
      fr: 'J\'ai baissé la tête et construit. Chaque expérience de chaque pays, chaque échec, chaque leçon—versés dans Digni Digital. Des systèmes d\'employés IA qui capturent chaque prospect. Le programme Digni Digital Literacy. Des logiciels agentiques. Toutes les pièces s\'assemblent.',
      ar: 'أنكببت على العمل والبناء. كل تجربة من كل بلد، كل فشل، كل درس—صُب في ديجني ديجيتال. أنظمة موظف ذكاء اصطناعي تلتقط كل عميل محتمل. برنامج Digni Digital Literacy. برمجيات وكيلة. كل القطع تتجمع.',
      de: 'Kopf runter und gebaut. Jede Erfahrung aus jedem Land, jedes Scheitern, jede Lektion—alles in Digni Digital gegossen. KI-Mitarbeiter-Systeme, die jeden Lead erfassen. Das Digni Digital Literacy Programm. Agentic Software. Alle Puzzleteile fügen sich zusammen.',
      es: 'Cabeza abajo a construir. Cada experiencia de cada país, cada fracaso, cada lección—vertidos en Digni Digital. Sistemas de empleados IA que capturan cada lead. El programa Digni Digital Literacy. Software agéntico. Todas las piezas encajando.',
    },
    backgroundImage: '/story/screenshot-work-1.png',
  },
  {
    id: '2026',
    year: '2026',
    title: {
      en: 'Giving Back',
      fr: 'Redonner',
      ar: 'رد الجميل',
      de: 'Zurückgeben',
      es: 'Devolviendo',
    },
    content: {
      en: 'The Digni Digital Literacy Program launches with GS Laricharde as our first school partner. The same gift Microsoft gave me at 16, I\'m now giving to the next generation. 150+ clients. Market leader. And the mission that started it all—everyone enabled, empowered, connected—is finally becoming real.',
      fr: 'Le programme d\'alphabétisation numérique Digni Digital se lance avec GS Laricharde comme première école partenaire. Le même cadeau que Microsoft m\'a fait à 16 ans, je le donne maintenant à la prochaine génération. 150+ clients. Leader du marché. Et la mission qui a tout commencé devient enfin réalité.',
      ar: 'ينطلق برنامج ديجني ديجيتال لمحو الأمية الرقمية مع مدرسة GS Laricharde كأول شريك مدرسي. نفس الهدية التي قدمتها لي مايكروسوفت في سن 16، أقدمها الآن للجيل القادم. أكثر من 150 عميل. رائد السوق. والمهمة التي بدأت كل شيء أصبحت حقيقة.',
      de: 'Das Digni Digital Literacy Program startet mit GS Laricharde als erster Partnerschule. Das gleiche Geschenk, das Microsoft mir mit 16 gab, gebe ich jetzt an die nächste Generation weiter. 150+ Kunden. Marktführer. Und die Mission, die alles begann, wird endlich Realität.',
      es: 'El Programa de Alfabetización Digital de Digni Digital se lanza con GS Laricharde como primera escuela socia. El mismo regalo que Microsoft me dio a los 16, ahora se lo doy a la próxima generación. 150+ clientes. Líder del mercado. Y la misión que lo empezó todo finalmente se hace realidad.',
    },
    highlight: {
      en: 'The same gift I received, I now give forward',
      fr: 'Le même cadeau reçu, je le transmets maintenant',
      ar: 'نفس الهدية التي تلقيتها، أقدمها الآن',
      de: 'Das gleiche Geschenk, das ich bekam, gebe ich weiter',
      es: 'El mismo regalo que recibí, ahora lo doy',
    },
    backgroundImage: '/story/pascal-presentation.jpeg',
  },
  {
    id: 'vision',
    title: {
      en: 'Made for Greatness',
      fr: 'Fait pour la grandeur',
      ar: 'صُنع للعظمة',
      de: 'Für Großes bestimmt',
      es: 'Hecho para la grandeza',
    },
    content: {
      en: 'West Africa. South Africa. The journey continues. All my life I chose to dream big—not accept what the world set for me, but believe I was made for greatness. We build AI that captures every lead, curricula that make graduates job-ready, and agentic software that scales with you. This isn\'t just a company. It\'s proof that where you start doesn\'t define where you end.',
      fr: 'Afrique de l\'Ouest. Afrique du Sud. Le voyage continue. Toute ma vie, j\'ai choisi de rêver grand—ne pas accepter ce que le monde avait fixé pour moi, mais croire que j\'étais fait pour la grandeur. Nous construisons l\'IA qui capture chaque prospect, des programmes qui rendent les diplômés prêts à l\'emploi, et des logiciels agentiques qui évoluent avec vous.',
      ar: 'غرب أفريقيا. جنوب أفريقيا. الرحلة مستمرة. طوال حياتي اخترت أن أحلم كبيراً—ألا أقبل ما حدده العالم لي، بل أؤمن أنني صُنعت للعظمة. نبني ذكاءً اصطناعياً يلتقط كل عميل، مناهج تجعل الخريجين جاهزين للعمل، وبرمجيات وكيلة تتوسع معك.',
      de: 'Westafrika. Südafrika. Die Reise geht weiter. Mein ganzes Leben lang habe ich mich entschieden, groß zu träumen—nicht zu akzeptieren, was die Welt für mich bestimmt hat, sondern zu glauben, dass ich für Großes bestimmt bin. Wir bauen KI, die jeden Lead erfasst, Lehrpläne, die Absolventen berufsreif machen, und Agentic Software, die mit Ihnen skaliert.',
      es: 'África Occidental. Sudáfrica. El viaje continúa. Toda mi vida elegí soñar en grande—no aceptar lo que el mundo estableció para mí, sino creer que fui hecho para la grandeza. Construimos IA que captura cada lead, currículos que preparan graduados para el trabajo, y software agéntico que escala contigo.',
    },
    highlight: {
      en: 'Where you start doesn\'t define where you end',
      fr: 'D\'où tu pars ne définit pas où tu arrives',
      ar: 'من أين تبدأ لا يحدد أين تنتهي',
      de: 'Wo du startest, definiert nicht, wo du endest',
      es: 'Donde empiezas no define donde terminas',
    },
    backgroundImage: '/story/dji-drone-shot.jpg',
  },
]

interface StorybookModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StorybookModal({ isOpen, onClose }: StorybookModalProps) {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const language = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen && mounted) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen, mounted])

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i < STORY_SLIDES.length - 1 ? i + 1 : i))
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : i))
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose, goNext, goPrev])

  useEffect(() => {
    if (isOpen) setCurrentIndex(0)
  }, [isOpen])

  if (!mounted || !isOpen) return null

  const slide = STORY_SLIDES[currentIndex]
  const isFirst = currentIndex === 0
  const isLast = currentIndex === STORY_SLIDES.length - 1
  const lang = language as Language

  const prevLabel = { en: 'Previous', fr: 'Précédent', ar: 'السابق', de: 'Zurück', es: 'Anterior' }
  const nextLabel = { en: 'Next', fr: 'Suivant', ar: 'التالي', de: 'Weiter', es: 'Siguiente' }
  const endLabel = { en: 'End & leave', fr: 'Fin & quitter', ar: 'إنهاء ومغادرة', de: 'Beenden', es: 'Fin y salir' }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="storybook-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        <div
          className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-surface border border-border-light rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors group"
            aria-label="Close story"
          >
            <svg
              className="w-6 h-6 text-text group-hover:text-accent transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex-1 overflow-y-auto relative min-h-[320px]">
            {(slide.backgroundImage || slide.backgroundVideo) && (
              <div className="absolute inset-0 z-0">
                {slide.backgroundVideo ? (
                  <video
                    src={slide.backgroundVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : slide.backgroundImage ? (
                  <Image
                    src={slide.backgroundImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 48rem"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
              </div>
            )}
            <div className="relative z-10 p-8 sm:p-12 pt-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[280px]"
                >
                  {slide.year && (
                    <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
                      {slide.year}
                    </span>
                  )}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground drop-shadow-lg">
                    {slide.title[lang] || slide.title.en}
                  </h3>
                  <p className="text-muted leading-relaxed text-base sm:text-lg drop-shadow-md">
                    {slide.content[lang] || slide.content.en}
                  </p>
                  {slide.highlight && (
                    <p className="mt-6 text-accent font-medium text-sm sm:text-base drop-shadow-md">
                      — {slide.highlight[lang] || slide.highlight.en}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-border-light p-4 sm:p-6 flex items-center justify-between gap-4">
            <button
              onClick={goPrev}
              disabled={isFirst}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-medium hover:border-accent hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border-medium disabled:hover:text-inherit transition-colors text-sm font-medium"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prevLabel[lang] || prevLabel.en}
            </button>

            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {STORY_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? 'bg-accent w-6'
                      : 'bg-border-medium hover:bg-border-heavy'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {isLast ? (
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-medium hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                aria-label="End and leave"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                {endLabel[lang] || endLabel.en}
              </button>
            ) : (
              <button
                onClick={goNext}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-medium hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                aria-label="Next slide"
              >
                {nextLabel[lang] || nextLabel.en}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
