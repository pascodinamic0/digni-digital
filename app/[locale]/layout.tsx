import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import '../globals.css'
import { routing } from '@/i18n/routing'
import { LocaleProvider } from '../context/LocaleContext'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const pathname = (await headers()).get('x-pathname') || `/${locale}`

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    return { title: 'Digni Digital' }
  }

  const localeAlternates: Record<string, string> = {}
  for (const loc of routing.locales) {
    const path = pathname.replace(/^\/[^/]+/, `/${loc}`)
    localeAlternates[loc] = `${SITE_URL}${path}`
  }
  localeAlternates['x-default'] = `${SITE_URL}${pathname.replace(/^\/[^/]+/, `/${routing.defaultLocale}`)}`

  return {
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}${pathname}`,
      languages: localeAlternates,
    },
    icons: {
      icon: '/Favicon.png',
      shortcut: '/Favicon.png',
      apple: '/Favicon.png',
    },
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

  return (
    <LocaleProvider locale={locale}>
      <NextIntlClientProvider messages={messages}>
        <div className="grain-overlay" />
        {children}
      </NextIntlClientProvider>
    </LocaleProvider>
  )
}
