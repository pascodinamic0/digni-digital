import { Link } from '@/i18n/navigation'
import { getLanguageFromLocale } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'

type PrivacyPageProps = {
  params: Promise<{ locale: string }>
}

function getLocaleTag(locale: string) {
  const lang = getLanguageFromLocale(locale)
  return lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'ar' ? 'ar-SA' : lang === 'de' ? 'de-DE' : 'en-US'
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Legal.privacy' })
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
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('informationTitle')}</h2>
            <p>
              {t('informationBody')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('useTitle')}</h2>
            <p>
              {t('useBody')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('sharingTitle')}</h2>
            <p>
              {t('sharingBody')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('rightsTitle')}</h2>
            <p>
              {t('rightsBody')}
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">{t('contactTitle')}</h2>
            <p>
              {t('contactPrefix')}{' '}
              <a href="mailto:hq@digni-digital-llc.com" className="text-accent hover:underline">hq@digni-digital-llc.com</a>.
              {' '}
              {t('contactDetailsPrefix')}{' '}
              <Link href="/contact" className="text-accent hover:underline">{t('contactLink')}</Link>
              {t('contactDetailsSuffix')}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
