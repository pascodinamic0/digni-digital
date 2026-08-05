import type { Metadata } from 'next'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import { routing } from '@/i18n/routing'
import { LocaleProvider } from '../context/LocaleContext'
import LocaleKeyedContent from '@/app/components/LocaleKeyedContent'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import { buildLocaleAlternates } from '@/lib/seo/locale-metadata'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

function pathAfterLocale(pathname: string, locale: string): string {
  const prefix = `/${locale}`
  if (pathname === prefix) return ''
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length)
  // Avoid collapsing unknown paths to the locale homepage canonical.
  if (pathname.startsWith('/') && !pathname.startsWith('//')) {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length > 1) return `/${segments.slice(1).join('/')}`
  }
  return ''
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    return { title: 'Digni Digital' }
  }

  const pathname = (await headers()).get('x-pathname') || `/${locale}`
  const suffix = pathAfterLocale(pathname, locale)

  return {
    metadataBase: new URL(SITE_URL),
    alternates: buildLocaleAlternates(locale, suffix),
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()
  const pathname = (await headers()).get('x-pathname') || ''
  const isDigniChat = pathname.includes('/digni')

  return (
    <LocaleProvider locale={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <div className="grain-overlay" />
        {!isDigniChat && <Navigation />}
        <LocaleKeyedContent locale={locale}>{children}</LocaleKeyedContent>
        {!isDigniChat && <Footer />}
        {!isDigniChat && (
          <Script
            id="ghl-chat-widget-loader"
            src="https://widgets.leadconnectorhq.com/loader.js"
            strategy="lazyOnload"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="691c374633e992e56f750115"
          />
        )}
      </NextIntlClientProvider>
    </LocaleProvider>
  )
}
