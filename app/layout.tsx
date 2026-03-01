import type { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

export const metadata: Metadata = {
  title: {
    default: 'Digni Digital | Technology That Serves Humanity',
    template: '%s | Digni Digital',
  },
  description:
    'We believe technology should serve humanity. Digital transformation agency building AI Employee systems, Digni Digital Literacy program, and custom SaaS solutions that create real impact.',
  keywords: [
    'digital transformation',
    'AI Employee',
    'Digni Digital Literacy',
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
  const localeSegment = pathname.split('/')[1] || 'us-en'
  const lang = localeSegment.split('-')[1] || 'en'
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Digni Digital LLC',
    url: SITE_URL,
    logo: `${SITE_URL}/Favicon.png`,
    description:
      'Digital transformation agency building AI Employee systems, employability programs, and custom software that creates real impact.',
    sameAs: [
      'https://www.linkedin.com/company/digni-digital-llc',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@digni-digital-llc.com',
      contactType: 'customer service',
    },
  }

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
