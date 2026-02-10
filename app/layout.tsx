import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    default: 'Digni Digital | Technology That Serves Humanity',
    template: '%s | Digni Digital',
  },
  description: 'We believe technology should serve humanity. Digital transformation agency building AI Employee systems, Future Ready Graduate programs, and custom SaaS solutions that create real impact.',
  keywords: ['digital transformation', 'AI Employee', 'Future Ready Graduate', 'custom SaaS', 'technology for humanity', 'business automation', 'student employability'],
  authors: [{ name: 'Digni Digital' }],
  creator: 'Digni Digital',
  publisher: 'Digni Digital',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'),
  alternates: {
    canonical: '/',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="grain-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
