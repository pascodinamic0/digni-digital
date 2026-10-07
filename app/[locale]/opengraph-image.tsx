import { renderOg, ogSize, ogContentType } from '@/lib/og'
import { getDict } from '@/content/v2/get'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Digni Digital — Close the gaps. Let the systems run.'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = getDict(locale)
  return renderOg(locale, { eyebrow: t.home.eyebrow, title: `${t.home.h1a} ${t.home.h1b}`, sub: t.home.sub })
}
