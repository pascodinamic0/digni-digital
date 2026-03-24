import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

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
  const localeSegment = pathname.split('/')[1] || 'us-en'
  const lang = localeSegment.split('-')[1] || 'en'
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Digni Digital LLC',
      url: SITE_URL,
      logo: `${SITE_URL}/Favicon.png`,
      description:
        'Digital transformation agency building AI Employee systems, employability programs, and custom software that creates real impact.',
      foundingDate: '2019',
      founder: {
        '@type': 'Person',
        name: 'Pascal Digny Djohodo',
        jobTitle: 'Founder & CEO',
      },
      sameAs: [
        'https://www.linkedin.com/company/digni-digital-llc',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@digni-digital-llc.com',
        contactType: 'customer service',
      },
      areaServed: ['US', 'KE', 'RW', 'UG', 'CD', 'GH', 'NG', 'ZA'],
      knowsAbout: ['AI Employee Systems', 'Digital Literacy', 'Agentic Software', 'Web Development', 'Digital Transformation'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Digni Digital',
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/us-en/blog?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable}`}
    >
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
