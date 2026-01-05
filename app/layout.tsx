import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digni Digital | Technology That Serves Humanity',
  description: 'We believe technology should serve humanity. Digital transformation agency building AI Receptionist systems, Future-Ready Graduate programs, and custom SaaS solutions that create real impact.',
  keywords: ['digital transformation', 'AI Receptionist', 'Future-Ready Graduate', 'custom SaaS', 'technology for humanity', 'business automation', 'student employability'],
  authors: [{ name: 'Digni Digital' }],
  openGraph: {
    title: 'Digni Digital | Technology That Serves Humanity',
    description: 'We believe technology should serve humanity. Digital transformation agency creating real impact.',
    type: 'website',
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
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
