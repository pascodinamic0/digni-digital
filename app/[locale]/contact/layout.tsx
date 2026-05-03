import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Contact Us | Start Your Transformation',
    description:
      'Get in touch with Digni Digital. Book a consultation, send us a message, or connect on WhatsApp. Offices in the US and Africa.',
  },
  fr: {
    title: 'Contactez-nous | Lancez votre transformation',
    description:
      'Contactez Digni Digital. Réservez une consultation, envoyez-nous un message ou échangez sur WhatsApp. Bureaux aux États-Unis et en Afrique.',
  },
  es: {
    title: 'Contáctenos | Inicie su transformación',
    description:
      'Póngase en contacto con Digni Digital. Reserve una consulta, envíenos un mensaje o conecte por WhatsApp. Oficinas en Estados Unidos y África.',
  },
  de: {
    title: 'Kontakt | Starten Sie Ihre Transformation',
    description:
      'Nehmen Sie Kontakt mit Digni Digital auf. Buchen Sie eine Beratung, senden Sie uns eine Nachricht oder schreiben Sie über WhatsApp. Büros in den USA und Afrika.',
  },
  ar: {
    title: 'اتصل بنا | ابدأ تحولك',
    description:
      'تواصل مع Digni Digital. احجز استشارة، أو أرسل لنا رسالة، أو تواصل عبر WhatsApp. لدينا مكاتب في الولايات المتحدة وأفريقيا.',
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
