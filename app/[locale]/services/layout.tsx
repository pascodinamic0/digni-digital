import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Our Services | AI Employee, Education & Custom Software',
    description:
      'Explore Digni Digital services: AI Employee for 24/7 lead capture, Future-Ready Graduate Program employability program, and Agentic Softwares for custom solutions.',
  },
  fr: {
    title: 'Nos services | AI Employee, éducation et logiciels sur mesure',
    description:
      'Découvrez les services de Digni Digital : AI Employee pour capter des clients potentiels 24/7, Future-Ready Graduate Program pour l’employabilité, et Agentic Softwares pour des solutions sur mesure.',
  },
  es: {
    title: 'Nuestros servicios | AI Employee, educación y software a medida',
    description:
      'Explore los servicios de Digni Digital: AI Employee para captar clientes potenciales 24/7, Future-Ready Graduate Program para empleabilidad y Agentic Softwares para soluciones a medida.',
  },
  de: {
    title: 'Unsere Leistungen | AI Employee, Bildung und individuelle Software',
    description:
      'Entdecken Sie die Leistungen von Digni Digital: AI Employee für Interessentenerfassung rund um die Uhr, Future-Ready Graduate Program für Beschäftigungsfähigkeit und Agentic Softwares für individuelle Lösungen.',
  },
  ar: {
    title: 'خدماتنا | AI Employee والتعليم والبرمجيات المخصصة',
    description:
      'استكشف خدمات Digni Digital: AI Employee لالتقاط العملاء المحتملين على مدار الساعة، وFuture-Ready Graduate Program لتعزيز الجاهزية المهنية، وAgentic Softwares للحلول المخصصة.',
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
