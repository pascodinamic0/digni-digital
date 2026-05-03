import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Affiliate Program | Earn on setup, tuition & projects',
    description:
      'Join the Digni Digital affiliate program. Earn 50% on the AI Employee setup fee and Future-Ready tuition, plus 10% on Agentic Softwares project value.',
  },
  fr: {
    title: 'Programme d’affiliation | Gagnez sur la mise en place, la formation et les projets',
    description:
      'Rejoignez le programme d’affiliation Digni Digital. Gagnez 50 % sur les frais de mise en place AI Employee et les frais Future-Ready, plus 10 % de la valeur des projets Agentic Softwares.',
  },
  es: {
    title: 'Programa de afiliados | Gane con implementación, formación y proyectos',
    description:
      'Únase al programa de afiliados de Digni Digital. Gane el 50 % de la tarifa de implementación de AI Employee y de la formación Future-Ready, más el 10 % del valor de los proyectos Agentic Softwares.',
  },
  de: {
    title: 'Partnerprogramm | Verdienen Sie an Einrichtung, Ausbildung und Projekten',
    description:
      'Werden Sie Teil des Digni Digital Partnerprogramms. Verdienen Sie 50 % der AI Employee Einrichtungsgebühr und der Future-Ready Ausbildungskosten sowie 10 % des Projektwerts von Agentic Softwares.',
  },
  ar: {
    title: 'برنامج الشركاء | اربح من الإعداد والرسوم الدراسية والمشاريع',
    description:
      'انضم إلى برنامج الشركاء من Digni Digital. اربح 50% من رسوم إعداد AI Employee ورسوم Future-Ready، إضافة إلى 10% من قيمة مشاريع Agentic Softwares.',
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
