import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Case Studies | Real Results from Real Businesses',
    description:
      'Named operators. Honest status. See how Digni identifies exposures and installs coverage—without invented scoreboards.',
  },
  fr: {
    title: 'Études de cas | Des résultats réels pour de vraies entreprises',
    description:
      'Opérateurs nommés. Statut honnête. Comment Digni identifie les expositions et installe la couverture—sans tableau de scores inventé.',
  },
  es: {
    title: 'Casos de éxito | Operadores nombrados, estado honesto',
    description:
      'Operadores nombrados. Estado honesto. Cómo Digni identifica exposiciones e instala cobertura—sin marcadores inventados.',
  },
  de: {
    title: 'Fallstudien | Benannte Betreiber, ehrlicher Status',
    description:
      'Benannte Betreiber. Ehrlicher Status. Wie Digni Expositionen identifiziert und Absicherung installiert—ohne erfundenes Scoreboard.',
  },
  ar: {
    title: 'دراسات الحالة | مشغّلون مسمّون ووضع صادق',
    description:
      'مشغّلون مسمّون. وضع صادق. كيف تحدّد Digni التعرّض وتثبّت التغطية—بلا لوحات أرقام مخترعة.',
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
