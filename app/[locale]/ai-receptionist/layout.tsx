import type { Metadata } from 'next'
import AiEmployeeMobileAppBanner from '@/app/components/AiEmployeeMobileAppBanner'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'AI Employee | Capture, Qualify & Book Leads 24/7',
    description:
      'Install an AI Employee that answers calls and chats, qualifies every lead, books appointments, and keeps your pipeline moving day and night.',
  },
  fr: {
    title: 'AI Employee | Captez, qualifiez et réservez des clients potentiels 24/7',
    description:
      'Installez un AI Employee qui répond aux appels et aux chats, qualifie chaque client potentiel, prend les rendez-vous et maintient votre cycle commercial actif jour et nuit.',
  },
  es: {
    title: 'AI Employee | Capture, califique y reserve clientes potenciales 24/7',
    description:
      'Instale un AI Employee que responde llamadas y chats, califica cada cliente potencial, agenda citas y mantiene su ciclo comercial activo de día y de noche.',
  },
  de: {
    title: 'AI Employee | Interessenten rund um die Uhr erfassen, qualifizieren und buchen',
    description:
      'Installieren Sie einen AI Employee, der Anrufe und Chats beantwortet, jeden Interessenten qualifiziert, Termine bucht und Ihren Vertriebsablauf Tag und Nacht in Bewegung hält.',
  },
  ar: {
    title: 'AI Employee | التقط العملاء المحتملين وتأهلهم وتحجز مواعيدهم على مدار الساعة',
    description:
      'ثبّت AI Employee يرد على المكالمات والمحادثات، ويؤهل كل عميل محتمل، ويحجز المواعيد، ويحافظ على حركة مسار المبيعات ليلا ونهارا.',
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

/**
 * Mobile app promo renders after the full page <main> so it stays at the bottom
 * of the AI Employee page (last content block before the site footer).
 */
export default function AIReceptionistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AiEmployeeMobileAppBanner />
    </>
  )
}
