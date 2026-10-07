import { renderOg, ogSize, ogContentType, splitTitle } from '@/lib/og'
import { getDict } from '@/content/v2/get'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Digni Digital'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = getDict(locale)
  const m = t.meta.contact
  return renderOg(locale, { ...splitTitle(m.title), sub: m.desc })
}
