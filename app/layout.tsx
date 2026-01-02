import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digni Digital | Growth Infrastructure Agency',
  description: 'We Build Growth Infrastructures That Turn Chaos Into Clients. Strategic systems, intelligent automation, and purpose-built products that help ambitious businesses scale without the chaos.',
  keywords: ['growth infrastructure', 'business automation', 'digital agency', 'Africa', 'CRM', 'lead generation'],
  authors: [{ name: 'Digni Digital' }],
  openGraph: {
    title: 'Digni Digital | Growth Infrastructure Agency',
    description: 'We Build Growth Infrastructures That Turn Chaos Into Clients.',
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
