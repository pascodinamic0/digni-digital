import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { preload } from 'react-dom'
import { routing } from '@/i18n/routing'
import { LocaleProvider } from '../context/LocaleContext'
import { fontVars } from '../fonts'
import Header from '@/app/components/v2/Header'
import Footer from '@/app/components/v2/Footer'
import Guide from '@/app/components/v2/Guide'
import Reveal from '@/app/components/v2/Reveal'
import JsonLd from '@/app/components/v2/JsonLd'
import { getDict } from '@/content/v2/get'
import { isLocale, localeMeta, type Locale } from '@/content/v2/locales'
import { getOrganizationJsonLd, getWebsiteJsonLd } from '@/lib/agent-readiness'
import '../globals.css'
import '../v2.css'
import '../fonts-arabic.css'

/**
 * Arabic + Latin subsets of IBM Plex Sans Arabic (400/600) that every sa-ar page renders with.
 * Preloading them (sa-ar only) lets the first layout use Plex directly instead of laying the page out
 * with a system Arabic fallback and then again when the font arrives (slow LCP/TBT and a CLS of ~0.25).
 */
const ARABIC_FONT_PRELOADS = ['400-arabic', '600-arabic', '400-latin', '600-latin'].map(
  (f) => `/fonts/ibm-plex-sans-arabic/plex-arabic-${f}.woff2`,
)

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getDict(locale)
  return {
    title: { default: t.meta.home.title, template: `%s | ${t.meta.siteName}` },
    description: t.meta.home.desc,
    openGraph: { siteName: t.meta.siteName, locale: localeMeta[locale].og, type: 'website' },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  setRequestLocale(locale)
  const t = getDict(locale)
  const m = localeMeta[locale as Locale]
  const headerT = { ...t.nav, whatsapp: t.common.whatsapp }
  if (m.dir === 'rtl') {
    for (const href of ARABIC_FONT_PRELOADS) preload(href, { as: 'font', type: 'font/woff2', crossOrigin: '' })
  }

  return (
    <html lang={m.hreflang} dir={m.dir} data-theme="light" className={fontVars} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs (content stays visible without JS). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip">{t.nav.skip}</a>
        <JsonLd data={[getOrganizationJsonLd(), getWebsiteJsonLd(locale)]} />
        <LocaleProvider locale={locale}>
          <NextIntlClientProvider locale={locale} messages={{}}>
            <Header locale={locale} t={headerT} />
            <main id="main">{children}</main>
            <Footer locale={locale} t={t} />
            <Guide locale={locale} t={t.guide} />
            <Reveal />
          </NextIntlClientProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
