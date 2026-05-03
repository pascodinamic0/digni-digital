import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const termsMetadata = {
  en: {
    title: 'Terms of Service',
    description: 'Digni Digital terms of service. Read the terms and conditions governing use of our services and website.',
  },
  fr: {
    title: 'Conditions d’utilisation',
    description: 'Conditions d’utilisation de Digni Digital. Lisez les règles qui encadrent l’utilisation de nos services et de notre site web.',
  },
  es: {
    title: 'Términos de servicio',
    description: 'Términos de servicio de Digni Digital. Lea las condiciones que rigen el uso de nuestros servicios y sitio web.',
  },
  ar: {
    title: 'شروط الخدمة',
    description: 'شروط خدمة Digni Digital. اقرأ الشروط والأحكام التي تنظّم استخدام خدماتنا وموقعنا الإلكتروني.',
  },
  de: {
    title: 'Nutzungsbedingungen',
    description: 'Nutzungsbedingungen von Digni Digital. Lesen Sie die Bedingungen für die Nutzung unserer Dienste und Webseite.',
  },
} satisfies Record<MetadataLanguage, Metadata>

type MetadataProps = {
  params: Promise<{ locale: string }>
}

function getLanguage(locale: string): MetadataLanguage {
  if (locale.includes('fr')) return 'fr'
  if (locale.includes('es')) return 'es'
  if (locale.includes('ar')) return 'ar'
  if (locale.includes('de')) return 'de'
  return 'en'
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params
  return termsMetadata[getLanguage(locale)]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
