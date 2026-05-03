import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Future-Ready Graduate Program | Employability Program for Students',
    description:
      'Transform students into job-ready professionals with real income-generating skills. AI, freelancing, digital marketing, and more, built for universities and schools.',
  },
  fr: {
    title: 'Future-Ready Graduate Program | Programme d’employabilité pour étudiants',
    description:
      'Transformez les étudiants en professionnels prêts à l’emploi avec de vraies compétences génératrices de revenus. IA, travail indépendant, marketing numérique et plus, conçus pour les universités et les écoles.',
  },
  es: {
    title: 'Future-Ready Graduate Program | Programa de empleabilidad para estudiantes',
    description:
      'Convierta a estudiantes en profesionales listos para trabajar con habilidades reales que generan ingresos. IA, trabajo independiente, marketing digital y más, creado para universidades y escuelas.',
  },
  de: {
    title: 'Future-Ready Graduate Program | Programm für studentische Beschäftigungsfähigkeit',
    description:
      'Verwandeln Sie Studierende in berufsfähige Fachkräfte mit echten einkommensschaffenden Fähigkeiten. KI, selbstständige Arbeit, digitales Marketing und mehr, entwickelt für Universitäten und Schulen.',
  },
  ar: {
    title: 'Future-Ready Graduate Program | برنامج جاهزية مهنية للطلاب',
    description:
      'حوّل الطلاب إلى محترفين جاهزين للعمل بمهارات حقيقية تولّد الدخل. الذكاء الاصطناعي، والعمل الحر، والتسويق الرقمي، والمزيد، مصممة للجامعات والمدارس.',
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
