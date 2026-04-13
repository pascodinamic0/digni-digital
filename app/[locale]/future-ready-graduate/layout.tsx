import type { Metadata } from 'next'

const metadataByLocale: Record<string, Metadata> = {
  'fr-fr': {
    title: 'Programme Diplômé Prêt pour l\'Avenir | Programme d\'employabilité pour étudiants',
    description: 'Transformez les étudiants en professionnels prêts pour l\'emploi avec des compétences génératrices de revenus. IA, freelancing, marketing digital et plus, conçu pour universités et écoles.',
  },
  'us-en': {
    title: 'Future-Ready Graduate Program | Employability Program for Students',
    description: 'Transform students into job-ready professionals with real income-generating skills. AI, freelancing, digital marketing, and more, built for universities and schools.',
  },
  'es-es': {
    title: 'Future-Ready Graduate Program | Employability Program for Students',
    description: 'Transform students into job-ready professionals with real income-generating skills. AI, freelancing, digital marketing, and more, built for universities and schools.',
  },
  'sa-ar': {
    title: 'Future-Ready Graduate Program | Employability Program for Students',
    description: 'Transform students into job-ready professionals with real income-generating skills. AI, freelancing, digital marketing, and more, built for universities and schools.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return metadataByLocale[locale] ?? metadataByLocale['us-en']
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
