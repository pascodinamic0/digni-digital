import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Agentic Softwares | Custom AI-Native Software Solutions',
    description:
      'AI-native software that perceives, reasons, and acts autonomously. Custom-built solutions for businesses with unique challenges, from MVP to enterprise scale.',
  },
  fr: {
    title: 'Agentic Softwares | Solutions logicielles sur mesure natives IA',
    description:
      'Des logiciels natifs IA qui perçoivent, raisonnent et agissent de façon autonome. Des solutions sur mesure pour les entreprises aux défis uniques, du produit minimum viable à l’échelle entreprise.',
  },
  es: {
    title: 'Agentic Softwares | Soluciones de software a medida nativas de IA',
    description:
      'Software nativo de IA que percibe, razona y actúa de forma autónoma. Soluciones a medida para empresas con desafíos únicos, desde producto mínimo viable hasta escala empresarial.',
  },
  de: {
    title: 'Agentic Softwares | Individuelle KI-native Softwarelösungen',
    description:
      'KI-native Software, die wahrnimmt, schlussfolgert und autonom handelt. Maßgeschneiderte Lösungen für Unternehmen mit besonderen Herausforderungen, vom minimal funktionsfähigen Produkt bis zur Unternehmensskalierung.',
  },
  ar: {
    title: 'Agentic Softwares | حلول برمجية مخصصة مبنية على الذكاء الاصطناعي',
    description:
      'برمجيات مبنية على الذكاء الاصطناعي تدرك وتستنتج وتتصرف بشكل مستقل. حلول مخصصة للشركات ذات التحديات الفريدة، من المنتج الأولي إلى مستوى المؤسسات.',
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
