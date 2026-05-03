import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Case Studies | Real Results from Real Businesses',
    description:
      'See how Digni Digital helped businesses achieve 85% reduction in no-shows, 40% higher close rates, and $200k+ monthly revenue increases.',
  },
  fr: {
    title: 'Études de cas | Des résultats réels pour de vraies entreprises',
    description:
      'Découvrez comment Digni Digital a aidé des entreprises à réduire les absences de 85 %, à augmenter les taux de conclusion de 40 % et à générer plus de 200 000 $ de revenus mensuels supplémentaires.',
  },
  es: {
    title: 'Casos de éxito | Resultados reales para empresas reales',
    description:
      'Vea cómo Digni Digital ayudó a empresas a reducir las ausencias un 85 %, aumentar las tasas de cierre un 40 % y sumar más de 200.000 $ en ingresos mensuales.',
  },
  de: {
    title: 'Fallstudien | Echte Ergebnisse für echte Unternehmen',
    description:
      'Sehen Sie, wie Digni Digital Unternehmen geholfen hat, No-Shows um 85 % zu senken, Abschlussquoten um 40 % zu steigern und mehr als 200.000 $ zusätzlichen Monatsumsatz zu erzielen.',
  },
  ar: {
    title: 'دراسات الحالة | نتائج حقيقية لشركات حقيقية',
    description:
      'اطّلع على كيف ساعدت Digni Digital الشركات على خفض حالات عدم الحضور بنسبة 85%، ورفع معدلات الإغلاق بنسبة 40%، وزيادة الإيرادات الشهرية بأكثر من 200 ألف دولار.',
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
