import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Solutions | Industry-Specific Digital Transformation',
    description:
      'Industry-specific solutions that drive measurable results. From healthcare to real estate, see how Digni Digital transforms businesses with AI-powered technology.',
  },
  fr: {
    title: 'Solutions | Transformation digitale par secteur',
    description:
      'Des solutions sectorielles qui génèrent des résultats mesurables. De la santé à l’immobilier, découvrez comment Digni Digital transforme les entreprises avec une technologie alimentée par l’IA.',
  },
  es: {
    title: 'Soluciones | Transformación digital por sector',
    description:
      'Soluciones específicas por sector que generan resultados medibles. De salud a bienes raíces, vea cómo Digni Digital transforma empresas con tecnología impulsada por IA.',
  },
  de: {
    title: 'Lösungen | Branchenspezifische digitale Transformation',
    description:
      'Branchenspezifische Lösungen, die messbare Ergebnisse liefern. Von Gesundheitswesen bis Immobilien: Sehen Sie, wie Digni Digital Unternehmen mit KI-gestützter Technologie transformiert.',
  },
  ar: {
    title: 'الحلول | تحول رقمي مخصص لكل قطاع',
    description:
      'حلول مخصصة للقطاعات تحقق نتائج قابلة للقياس. من الرعاية الصحية إلى العقارات، تعرّف على كيف تحوّل Digni Digital الشركات بتقنية مدعومة بالذكاء الاصطناعي.',
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
