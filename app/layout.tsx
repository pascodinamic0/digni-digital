import type { Metadata } from 'next'
import Script from 'next/script'
import { Space_Grotesk, Inter, Playfair_Display } from 'next/font/google'
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

const fontSerif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

export const metadata: Metadata = {
  title: {
    default: 'Digni Digital | Identify the Exposure. Install the Coverage.',
    template: '%s | Digni Digital',
  },
  description:
    'Digni identifies where organizations lose opportunities, time, capability, or leverage—and installs AI Employee, Future Ready, and Agentic Systems that close those gaps.',
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
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '1024x1024' }],
    shortcut: [{ url: '/icon.png', type: 'image/png', sizes: '1024x1024' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '1024x1024' }],
  },
  openGraph: {
    title: 'Digni Digital | Identify the Exposure. Install the Coverage.',
    description:
      'Digni identifies where organizations lose opportunities, time, capability, or leverage—and installs the systems that close those gaps.',
    type: 'website',
    siteName: 'Digni Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digni Digital | Identify the Exposure. Install the Coverage.',
    description: 'Identify the leak. Install AI Employee, Future Ready, or Agentic Systems coverage.',
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
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontSerif.variable}`}
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
        <Script
          id="digni-site-json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={jsonLdScriptProps(jsonLd)}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
