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
