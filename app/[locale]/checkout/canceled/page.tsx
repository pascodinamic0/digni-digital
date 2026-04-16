import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

type PageProps = { params: Promise<{ locale: string }> }

export default async function CheckoutCanceledPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Checkout' })

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">{t('canceledTitle')}</h1>
      <p className="text-muted text-center max-w-md mb-8">{t('canceledBody')}</p>
      <Link href="/" className="btn-secondary">
        {t('backHome')}
      </Link>
    </main>
  )
}
