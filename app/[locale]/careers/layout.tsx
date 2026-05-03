import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Careers | Join the Digni Digital Team',
    description:
      'Join a mission-driven team building technology that serves humanity. Explore open positions at Digni Digital across engineering, design, and operations.',
  },
  fr: {
    title: 'Carrières | Rejoignez l’équipe Digni Digital',
    description:
      'Rejoignez une équipe portée par une mission qui conçoit une technologie au service de l’humanité. Découvrez les postes ouverts chez Digni Digital en ingénierie, design et opérations.',
  },
  es: {
    title: 'Carreras | Únase al equipo de Digni Digital',
    description:
      'Únase a un equipo guiado por una misión que crea tecnología al servicio de la humanidad. Explore vacantes en Digni Digital en ingeniería, diseño y operaciones.',
  },
  de: {
    title: 'Karriere | Werden Sie Teil des Digni Digital Teams',
    description:
      'Schließen Sie sich einem missionsorientierten Team an, das Technologie entwickelt, die der Menschheit dient. Entdecken Sie offene Stellen bei Digni Digital in Engineering, Design und Operations.',
  },
  ar: {
    title: 'الوظائف | انضم إلى فريق Digni Digital',
    description:
      'انضم إلى فريق تقوده رسالة واضحة ويبني تقنية تخدم الإنسان. استكشف الوظائف المتاحة في Digni Digital في الهندسة والتصميم والعمليات.',
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
