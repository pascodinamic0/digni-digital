import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Products | AI-Powered Business Tools',
    description:
      'Discover Digni Digital products: AI-powered tools that automate lead capture, streamline operations, and scale your business without extra headcount.',
  },
  fr: {
    title: 'Produits | Outils métier alimentés par l’IA',
    description:
      'Découvrez les produits Digni Digital : des outils alimentés par l’IA qui automatisent la capture de clients potentiels, fluidifient les opérations et développent votre entreprise sans recruter davantage.',
  },
  es: {
    title: 'Productos | Herramientas empresariales impulsadas por IA',
    description:
      'Descubra los productos de Digni Digital: herramientas impulsadas por IA que automatizan la captación de clientes potenciales, agilizan operaciones y escalan su negocio sin más personal.',
  },
  de: {
    title: 'Produkte | KI-gestützte Geschäftstools',
    description:
      'Entdecken Sie die Produkte von Digni Digital: KI-gestützte Tools, die Interessentenerfassung automatisieren, Abläufe optimieren und Ihr Unternehmen ohne zusätzliches Personal skalieren.',
  },
  ar: {
    title: 'المنتجات | أدوات أعمال مدعومة بالذكاء الاصطناعي',
    description:
      'اكتشف منتجات Digni Digital: أدوات مدعومة بالذكاء الاصطناعي تؤتمت التقاط العملاء المحتملين، وتبسط العمليات، وتساعدك على توسيع أعمالك دون زيادة عدد الموظفين.',
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
