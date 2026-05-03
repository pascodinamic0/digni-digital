import type { Metadata } from 'next'
import Script from 'next/script'
import { Space_Grotesk, Inter } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { routing } from '@/i18n/routing'
import { getOrganizationJsonLd, getWebsiteJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const fontBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

export const metadata: Metadata = {
  title: {
    default: 'Digni Digital | Technology That Serves Humanity',
    template: '%s | Digni Digital',
  },
  description:
    'We believe technology should serve humanity. Digital transformation agency building AI Employee systems, Future-Ready Graduate Program, and custom SaaS solutions that create real impact.',
  keywords: [
    'digital transformation',
    'AI Employee',
    'Future-Ready Graduate Program',
    'custom SaaS',
    'technology for humanity',
    'business automation',
    'student employability',
  ],
  authors: [{ name: 'Digni Digital' }],
  creator: 'Digni Digital',
  publisher: 'Digni Digital',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Digni Digital | Technology That Serves Humanity',
    description: 'We believe technology should serve humanity. Digital transformation agency creating real impact.',
    type: 'website',
    siteName: 'Digni Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digni Digital | Technology That Serves Humanity',
    description: 'Digital transformation agency creating real impact through technology.',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = (await headers()).get('x-pathname') || '/us-en'
  const firstSegment = pathname.split('/')[1] || routing.defaultLocale
  const localeSegment = routing.locales.includes(firstSegment as (typeof routing.locales)[number])
    ? firstSegment
    : routing.defaultLocale
  const lang = localeSegment.split('-')[1] || 'en'
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const jsonLd = [getOrganizationJsonLd(), getWebsiteJsonLd(localeSegment)]

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      data-theme="dark"
      className={`${fontDisplay.variable} ${fontBody.variable}`}
    >
      <body suppressHydrationWarning>
        <Script id="theme-default" strategy="beforeInteractive">{`
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})(); 
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScriptProps(jsonLd)}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
