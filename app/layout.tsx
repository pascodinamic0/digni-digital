import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './context/LanguageContext'
import { initLangScript } from './i18n/init-lang'

const LANG_COOKIE = 'digni-language'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

export const metadata: Metadata = {
  title: {
    default: 'Digni Digital | Technology That Serves Humanity',
    template: '%s | Digni Digital',
  },
  description: 'We believe technology should serve humanity. Digital transformation agency building AI Employee systems, Digni Digital Literacy program, and custom SaaS solutions that create real impact.',
  keywords: ['digital transformation', 'AI Employee', 'Digni Digital Literacy', 'custom SaaS', 'technology for humanity', 'business automation', 'student employability'],
  authors: [{ name: 'Digni Digital' }],
  creator: 'Digni Digital',
  publisher: 'Digni Digital',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en': SITE_URL,
      'fr': SITE_URL,
      'ar': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
  openGraph: {
    title: 'Digni Digital | Technology That Serves Humanity',
    description: 'We believe technology should serve humanity. Digital transformation agency creating real impact.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Digni Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digni Digital | Technology That Serves Humanity',
    description: 'Digital transformation agency creating real impact through technology.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const lang = cookieStore.get(LANG_COOKIE)?.value
  const initialLanguage = (lang === 'fr' || lang === 'ar') ? lang : 'en'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initLangScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
            <div className="grain-overlay" />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
