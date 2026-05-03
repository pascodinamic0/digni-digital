import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'About Us | Our Story and Mission',
    description:
      'Digni Digital believes technology should serve humanity. Learn about our mission, team, and how we help businesses and students achieve measurable outcomes.',
  },
  fr: {
    title: 'À propos | Notre histoire et notre mission',
    description:
      'Digni Digital croit que la technologie doit servir l’humanité. Découvrez notre mission, notre équipe et comment nous aidons les entreprises et les étudiants à obtenir des résultats mesurables.',
  },
  es: {
    title: 'Sobre nosotros | Nuestra historia y misión',
    description:
      'Digni Digital cree que la tecnología debe servir a la humanidad. Conozca nuestra misión, nuestro equipo y cómo ayudamos a empresas y estudiantes a lograr resultados medibles.',
  },
  de: {
    title: 'Über uns | Unsere Geschichte und Mission',
    description:
      'Digni Digital glaubt, dass Technologie der Menschheit dienen sollte. Lernen Sie unsere Mission, unser Team und unseren Ansatz kennen, mit dem wir Unternehmen und Studierenden zu messbaren Ergebnissen verhelfen.',
  },
  ar: {
    title: 'من نحن | قصتنا ورسالتنا',
    description:
      'تؤمن Digni Digital بأن التكنولوجيا يجب أن تخدم الإنسان. تعرّف على رسالتنا وفريقنا وكيف نساعد الشركات والطلاب على تحقيق نتائج قابلة للقياس.',
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
