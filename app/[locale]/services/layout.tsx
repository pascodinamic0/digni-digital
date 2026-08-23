import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Our Services | Growth, Talent, and Operations Coverage',
    description:
      'Which exposure is costing you most? AI Employee for inbound leaks, Future Ready for capability without evidence, Agentic Systems for people moving information.',
  },
  fr: {
    title: 'Nos services | Couverture croissance, talents et opérations',
    description:
      'Quelle exposition vous coûte le plus ? Employé IA pour les fuites inbound, Future Ready pour la capacité sans preuve, Systèmes agentiques pour les personnes qui déplacent l’information.',
  },
  es: {
    title: 'Servicios | Cobertura de crecimiento, talento y operaciones',
    description:
      '¿Qué exposición le cuesta más? Empleado IA para fugas inbound, Future Ready para capacidad sin evidencia, sistemas agénticos para personas que mueven información.',
  },
  de: {
    title: 'Leistungen | Absicherung für Wachstum, Talent und Operations',
    description:
      'Welche Exposition kostet Sie am meisten? AI Employee für Inbound-Lecks, Future Ready für Fähigkeit ohne Nachweis, agentische Systeme für Menschen, die Informationen verschieben.',
  },
  ar: {
    title: 'خدماتنا | تغطية النمو والمواهب والعمليات',
    description:
      'أي تعرّض يكلّفك أكثر؟ موظف الذكاء الاصطناعي لتسرب الوارد، Future Ready للقدرة بلا دليل، والأنظمة الوكيلية للأشخاص الذين ينقلون المعلومات.',
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
