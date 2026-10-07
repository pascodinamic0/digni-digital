import type { Metadata, Viewport } from 'next'
import { SITE_URL } from '@/content/v2/locales'
import { NOINDEX } from '@/content/v2/seo'

/**
 * Root layout is a passthrough (next-intl pattern): <html>/<body> are rendered by
 * app/[locale]/layout.tsx (with lang/dir from the URL), app/admin/layout.tsx and
 * app/not-found.tsx. This keeps marketing pages statically renderable.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Digni Digital — Close the gaps. Let the systems run.', template: '%s | Digni Digital' },
  description: 'Digni Digital is an AI systems company in Kinshasa. We design, build and run platforms, AI employees and training for schools, NGOs, public institutions and growing businesses in the DRC and across Africa.',
  applicationName: 'Digni Digital',
  authors: [{ name: 'Digni Digital LLC' }],
  creator: 'Digni Digital LLC',
  publisher: 'Digni Digital LLC',
  formatDetection: { telephone: false },
  robots: NOINDEX ? { index: false, follow: false } : undefined,
}

export const viewport: Viewport = {
  themeColor: '#0b181d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
