import type { Metadata } from 'next'

type MetadataLanguage = 'en' | 'fr' | 'es' | 'de' | 'ar'

const metadataByLanguage = {
  en: {
    title: 'Future Ready | Capability and Evidence Employers Can Hire From',
    description:
      'A degree can get them to the door. Skills get them through it. Future Ready builds practical AI capability, real projects, and portfolio evidence for schools, institutes, and employers.',
  },
  fr: {
    title: 'Future Ready | Capacité et preuves que les employeurs peuvent embaucher',
    description:
      'Un diplôme peut les mener à la porte. Les compétences les font entrer. Future Ready construit une capacité IA pratique, de vrais projets et des preuves de portfolio pour les écoles, instituts et employeurs.',
  },
  es: {
    title: 'Future Ready | Capacidad y evidencia que los empleadores pueden contratar',
    description:
      'Un título puede llevarlos a la puerta. Las habilidades los hacen entrar. Future Ready construye capacidad práctica de IA, proyectos reales y evidencia de portafolio para escuelas, institutos y empleadores.',
  },
  de: {
    title: 'Future Ready | Fähigkeit und Nachweis, den Arbeitgeber einstellen',
    description:
      'Ein Abschluss bringt sie zur Tür. Skills bringen sie hindurch. Future Ready baut praktische KI-Fähigkeit, echte Projekte und Portfolio-Nachweis für Schulen, Institute und Arbeitgeber.',
  },
  ar: {
    title: 'Future Ready | قدرة ودليل يوظّف لأجلهما أصحاب العمل',
    description:
      'الشهادة قد توصلهم إلى الباب. المهارات تدخلهم منه. يبني Future Ready قدرة عملية بالذكاء الاصطناعي ومشاريع حقيقية وإثبات ملف أعمال للمدارس والمعاهد وأصحاب العمل.',
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
