import { renderOg, ogSize, ogContentType } from '@/lib/og'
import { getDict } from '@/content/v2/get'
import { langOf } from '@/content/v2/locales'
import { getProject } from '@/content/v2/work'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Digni Digital case study'

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const t = getDict(locale)
  const lang = langOf(locale)
  const p = getProject(slug)
  if (!p) return renderOg(locale, { title: t.meta.work.title })
  return renderOg(locale, { eyebrow: `${t.nav.work} · ${t.sector[p.sector]}`, title: p.name, sub: p.summary[lang] })
}
