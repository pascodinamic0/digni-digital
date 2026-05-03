import { Link } from '@/i18n/navigation'
import { getLanguageFromLocale } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'

type TermsPageProps = {
  params: Promise<{ locale: string }>
}

function getLocaleTag(locale: string) {
  const lang = getLanguageFromLocale(locale)
  return lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'ar' ? 'ar-SA' : lang === 'de' ? 'de-DE' : 'en-US'
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Legal.terms' })
  const common = await getTranslations({ locale, namespace: 'Legal.common' })
  const lastUpdated = new Intl.DateTimeFormat(getLocaleTag(locale)).format(new Date())

  return (
    <>
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text mb-2">
            {t('title')}
          </h1>
          <p className="text-muted text-sm mb-10">
            {common('lastUpdated', { date: lastUpdated })}
          </p>
          <div className="prose prose-invert prose-sm max-w-none text-muted space-y-6">
            <p>
              {t('intro')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('useTitle')}</h2>
            <p>
              {t('useBody')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('servicesTitle')}</h2>
            <p>
              {t('servicesBody')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('ipTitle')}</h2>
            <p>
              {t('ipBody')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('liabilityTitle')}</h2>
            <p>
              {t('liabilityBody')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('changesTitle')}</h2>
            <p>
              {t('changesBody')} {t('questionsPrefix')}{' '}
              <a href="mailto:hq@digni-digital-llc.com" className="text-accent hover:underline">hq@digni-digital-llc.com</a>{' '}
              {t('or')}{' '}
              <Link href="/contact" className="text-accent hover:underline">{t('contactLink')}</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
