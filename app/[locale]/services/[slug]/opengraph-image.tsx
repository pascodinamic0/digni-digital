import { renderOg, ogSize, ogContentType } from '@/lib/og'
import { getDict } from '@/content/v2/get'
import { langOf } from '@/content/v2/locales'
import { getService } from '@/content/v2/services'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Digni Digital service'

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const t = getDict(locale)
  const s = getService(slug)
  if (!s) return renderOg(locale, { title: t.meta.services.title })
  const c = s.copy[langOf(locale)]
  return renderOg(locale, { eyebrow: `${t.nav.services} · ${c.k}`, title: c.name, sub: c.body })
}
