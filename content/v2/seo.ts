import type { Metadata } from 'next'
import { buildLocaleAlternates } from '@/lib/seo/locale-metadata'
import { localeMeta, isLocale, SITE_URL, locales } from './locales'

export const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === '1'

/** Standard per-page metadata: title, description, canonical + hreflang, Open Graph and Twitter. */
export function pageMetadata({ locale, path, title, description, absoluteTitle = false, type = 'website', noindex = false }: {
  locale: string; path: string; title: string; description: string; absoluteTitle?: boolean; type?: 'website' | 'article'; noindex?: boolean
}): Metadata {
  const loc = isLocale(locale) ? locale : 'us-en'
  const m = localeMeta[loc]
  const url = `${SITE_URL}/${loc}${path}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: buildLocaleAlternates(loc, path),
    openGraph: {
      title, description, url, type, siteName: 'Digni Digital', locale: m.og,
      alternateLocale: locales.filter((l) => l !== loc).map((l) => localeMeta[l].og),
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: NOINDEX || noindex ? { index: false, follow: !NOINDEX } : { index: true, follow: true },
  }
}
