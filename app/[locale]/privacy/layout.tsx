import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const privacyMetadata = {
  en: {
    title: 'Privacy Policy',
    description: 'Digni Digital privacy policy. Learn how we collect, use, and protect your personal information.',
  },
  fr: {
    title: 'Politique de confidentialité',
    description: 'Politique de confidentialité de Digni Digital. Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles.',
  },
  es: {
    title: 'Política de privacidad',
    description: 'Política de privacidad de Digni Digital. Conozca cómo recopilamos, usamos y protegemos su información personal.',
  },
  ar: {
    title: 'سياسة الخصوصية',
    description: 'سياسة خصوصية Digni Digital. تعرّف على كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها.',
  },
  de: {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung von Digni Digital. Erfahren Sie, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen.',
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
  return privacyMetadata[getLanguage(locale)]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
