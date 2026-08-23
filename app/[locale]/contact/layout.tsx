import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Contact | Talk Through Your Challenge',
    description:
      'Tell us what is exposed. A no-obligation conversation to identify the leak and the coverage Digni can install.',
  },
  fr: {
    title: 'Contact | Parler de votre défi',
    description:
      'Dites-nous ce qui est exposé. Une conversation sans obligation pour identifier la fuite et la couverture que Digni peut installer.',
  },
  es: {
    title: 'Contacto | Hablar de su desafío',
    description:
      'Díganos qué está expuesto. Una conversación sin obligación para identificar la fuga y la cobertura que Digni puede instalar.',
  },
  de: {
    title: 'Kontakt | Ihre Herausforderung besprechen',
    description:
      'Sagen Sie uns, was offen liegt. Ein unverbindliches Gespräch, um das Leck und die Absicherung zu identifizieren, die Digni installieren kann.',
  },
  ar: {
    title: 'اتصل بنا | تحدث عن تحديك',
    description:
      'أخبرنا بما هو معرّض. محادثة بلا التزام لتحديد التسرب والتغطية التي يمكن لـ Digni تثبيتها.',
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
