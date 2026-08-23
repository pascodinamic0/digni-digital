import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'About | Digni Installs Coverage, Not Another AI Agency',
    description:
      'Digni identifies where organizations lose opportunities, time, capability, or leverage—and installs the systems that close those gaps. Mission and 2026 commitment live here, not above the offer.',
  },
  fr: {
    title: 'À propos | Digni installe la couverture, pas une agence IA de plus',
    description:
      'Digni identifie où les organisations perdent des opportunités, du temps, de la capacité ou de l’effet de levier—et installe les systèmes qui referment ces écarts. Mission et engagement 2026 vivent ici, pas au-dessus de l’offre.',
  },
  es: {
    title: 'Sobre nosotros | Digni instala cobertura, no otra agencia de IA',
    description:
      'Digni identifica dónde las organizaciones pierden oportunidades, tiempo, capacidad o apalancamiento—e instala los sistemas que cierran esas brechas. Misión y compromiso 2026 viven aquí, no encima de la oferta.',
  },
  de: {
    title: 'Über uns | Digni installiert Absicherung, keine weitere KI-Agentur',
    description:
      'Digni identifiziert, wo Organisationen Chancen, Zeit, Fähigkeit oder Hebel verlieren—und installiert die Systeme, die diese Lücken schließen. Mission und Verpflichtung 2026 leben hier, nicht über dem Angebot.',
  },
  ar: {
    title: 'من نحن | Digni تثبّت التغطية، لا وكالة ذكاء اصطناعي أخرى',
    description:
      'تحدّد Digni أين تخسر المؤسسات الفرص أو الوقت أو القدرة أو الرافعة—وتثبّت الأنظمة التي تغلق تلك الفجوات. الرسالة والتزام 2026 يعيشان هنا، لا فوق العرض.',
  },
} satisfies Record<MetadataLanguage, Metadata>

function getLanguage(locale: string): MetadataLanguage {
  if (locale.includes('fr')) return 'fr'
  if (locale.includes('es')) return 'es'
  if (locale.includes('de')) return 'de'
  if (locale.includes('ar')) return 'ar'
  return 'en'
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return metadataByLanguage[getLanguage(locale)]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
