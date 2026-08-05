import type { Metadata } from 'next'
import { localeToHreflang, routing } from '@/i18n/routing'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

/** Build absolute canonical + hreflang alternates for a locale-prefixed path. */
export function buildLocaleAlternates(
  locale: string,
  pathAfterLocale: string
): NonNullable<Metadata['alternates']> {
  const normalized = pathAfterLocale.startsWith('/')
    ? pathAfterLocale
    : pathAfterLocale
      ? `/${pathAfterLocale}`
      : ''

  const languages: Record<string, string> = {}
  for (const loc of routing.locales) {
    languages[localeToHreflang[loc]] = `${SITE_URL}/${loc}${normalized}`
  }
  languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}${normalized}`

  return {
    canonical: `${SITE_URL}/${locale}${normalized}`,
    languages,
  }
}

export function noIndexRobots(): Metadata['robots'] {
  return { index: false, follow: false }
}
