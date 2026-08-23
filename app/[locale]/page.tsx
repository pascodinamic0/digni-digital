import type { Metadata } from 'next'
import { translations, type Language } from '@/app/config/translations'
import { getLanguageFromLocale } from '@/i18n/routing'
import HomePageClient from './home-page-client'

type HomePageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

function languageFromLocale(locale: string): Language {
  const language = getLanguageFromLocale(locale)
  if (language === 'fr' || language === 'ar' || language === 'de' || language === 'es') {
    return language
  }
  return 'en'
}

const homeMetadata: Record<Language, Metadata> = {
  en: {
    title: 'Insure Your Business Before the Next Leak Costs You',
    description:
      'Unanswered leads, unprepared people, and manual workflows are exposures. Digni identifies the leak and installs AI Employee, Future Ready, or Agentic Systems to close it.',
  },
  fr: {
    title: 'Assurez votre activité avant que la prochaine fuite ne vous coûte',
    description:
      'Prospects sans réponse, personnes non préparées et flux manuels sont des expositions. Digni identifie la fuite et installe l’Employé IA, Future Ready ou des systèmes agentiques pour la refermer.',
  },
  es: {
    title: 'Asegure su negocio antes de que la próxima fuga le cueste',
    description:
      'Leads sin respuesta, personas sin preparación y flujos manuales son exposiciones. Digni identifica la fuga e instala Empleado IA, Future Ready o sistemas agénticos para cerrarla.',
  },
  de: {
    title: 'Absichern Sie Ihr Geschäft, bevor das nächste Leck Sie kostet',
    description:
      'Unbeantwortete Leads, unvorbereitete Menschen und manuelle Workflows sind Expositionen. Digni identifiziert das Leck und installiert AI Employee, Future Ready oder agentische Systeme, um es zu schließen.',
  },
  ar: {
    title: 'أمّن عملك قبل أن يكلّفك التسرب التالي',
    description:
      'عملاء بلا رد، وأشخاص غير جاهزين، وسير عمل يدوي هي تعرّضات. تحدّد Digni التسرب وتثبّت موظف الذكاء الاصطناعي أو Future Ready أو الأنظمة الوكيلية لإغلاقه.',
  },
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  return homeMetadata[languageFromLocale(locale)]
}

export default async function Home({ params, searchParams }: HomePageProps) {
  const { locale } = await params
  await (searchParams ?? Promise.resolve({}))
  const language = languageFromLocale(locale)
  const t = translations[language]
  const aboutT = t.about

  return (
    <HomePageClient
      language={language}
      hero={t.home.hero}
      trustedBy={{
        badge: aboutT.trustedByBadge,
        title: aboutT.trustedByTitle,
        titleHighlight: aboutT.trustedByTitleHighlight,
        subtitle: aboutT.trustedBySubtitle,
      }}
    />
  )
}
