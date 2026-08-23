import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Agentic Systems | Stop Paying People to Move Information',
    description:
      'Digni identifies the repetitive workflow, builds an agentic system around how you actually work, and puts it into operation. Perceive, reason, act—humans supervise.',
  },
  fr: {
    title: 'Systèmes agentiques | Arrêtez de payer des personnes pour déplacer des informations',
    description:
      'Digni identifie le flux répétitif, construit un système agentique autour de votre façon de travailler, et le met en opération. Percevoir, raisonner, agir—les humains supervisent.',
  },
  es: {
    title: 'Sistemas agénticos | Deje de pagar a personas para mover información',
    description:
      'Digni identifica el flujo repetitivo, construye un sistema agéntico alrededor de cómo trabaja realmente, y lo pone en operación. Percibir, razonar, actuar—las personas supervisan.',
  },
  de: {
    title: 'Agentische Systeme | Hören Sie auf, Menschen für das Verschieben von Informationen zu bezahlen',
    description:
      'Digni identifiziert den repetitiven Workflow, baut ein agentisches System um Ihre reale Arbeit und setzt es in Betrieb. Wahrnehmen, schlussfolgern, handeln—Menschen beaufsichtigen.',
  },
  ar: {
    title: 'أنظمة وكيلية | توقف عن دفع أجور لأشخاص لنقل المعلومات',
    description:
      'تحدّد Digni سير العمل المتكرر، وتبني نظاماً وكيلياً حول طريقة عملك الفعلية، وتضعه قيد التشغيل. إدراك، استدلال، فعل—والبشر يشرفون.',
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
