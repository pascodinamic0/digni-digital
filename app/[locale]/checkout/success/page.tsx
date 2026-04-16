import { Link } from '@/i18n/navigation'
import { getLanguageFromLocale } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { getStripe } from '@/lib/stripe/client'

type PageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ session_id?: string | string[] }>
}

export default async function CheckoutSuccessPage({ params, searchParams }: PageProps) {
  const { locale } = await params
  const sp = (await searchParams) ?? {}
  const sessionIdRaw = sp.session_id
  const sessionId = typeof sessionIdRaw === 'string' ? sessionIdRaw : undefined

  const t = await getTranslations({ locale, namespace: 'Checkout' })

  let amountLabel: string | null = null
  const stripe = getStripe()
  if (stripe && sessionId?.startsWith('cs_')) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      if (session.amount_total != null && session.currency) {
        const lang = getLanguageFromLocale(locale)
        const localeTag =
          lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'ar' ? 'ar-SA' : lang === 'de' ? 'de-DE' : 'en-US'
        const formatted = new Intl.NumberFormat(localeTag, {
          style: 'currency',
          currency: session.currency.toUpperCase(),
        }).format(session.amount_total / 100)
        amountLabel = t('successAmount', { amount: formatted })
      }
    } catch {
      // Session missing or key wrong — generic success still applies
    }
  }

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">{t('successTitle')}</h1>
      <p className="text-muted text-center max-w-md mb-4">{t('successBody')}</p>
      {amountLabel ? <p className="text-text font-medium text-center max-w-md mb-2">{amountLabel}</p> : null}
      <Link href="/" className="btn-primary mt-6">
        {t('backHome')}
      </Link>
    </main>
  )
}
