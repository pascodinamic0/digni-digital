import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const cookieMetadata = {
  en: {
    title: 'Cookie Policy',
    description: 'Digni Digital cookie policy. Understand what cookies we use and how to manage your preferences.',
  },
  fr: {
    title: 'Politique relative aux cookies',
    description: 'Politique relative aux cookies de Digni Digital. Comprenez quels cookies nous utilisons et comment gérer vos préférences.',
  },
  es: {
    title: 'Política de cookies',
    description: 'Política de cookies de Digni Digital. Entienda qué cookies usamos y cómo gestionar sus preferencias.',
  },
  ar: {
    title: 'سياسة ملفات تعريف الارتباط',
    description: 'سياسة ملفات تعريف الارتباط من Digni Digital. تعرّف على الملفات التي نستخدمها وكيفية إدارة تفضيلاتك.',
  },
  de: {
    title: 'Cookie-Richtlinie',
    description: 'Cookie-Richtlinie von Digni Digital. Erfahren Sie, welche Cookies wir verwenden und wie Sie Ihre Einstellungen verwalten.',
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
  return cookieMetadata[getLanguage(locale)]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
