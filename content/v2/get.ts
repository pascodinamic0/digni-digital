import en, { type Dict } from './dict/en'
import fr from './dict/fr'
import es from './dict/es'
import de from './dict/de'
import ar from './dict/ar'
import { notFound } from 'next/navigation'
import { isLocale, langOf, type Lang, type Locale } from './locales'

const dicts: Record<Lang, Dict> = { en, fr, es, de, ar }

export function getDict(locale: string): Dict {
  return dicts[langOf(locale)]
}
export { langOf }

/** Resolve the [locale] param for a page: dict, content language and typed locale. */
export async function resolvePage(params: Promise<{ locale: string }>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return { locale: locale as Locale, lang: langOf(locale), t: getDict(locale) }
}
