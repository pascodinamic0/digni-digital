import { preload } from 'react-dom'

type Kind = 'stock' | 'desktop' | 'phone'
const W: Record<Kind, number[]> = { stock: [400, 640, 1200, 1600], desktop: [720, 1440], phone: [480, 780] }
const DIM: Record<Kind, [number, number]> = { stock: [1600, 1067], desktop: [1440, 900], phone: [780, 1688] }
/** Portrait crops (`<name>-m-<w>.webp`) served to phones via art direction. */
const MOBILE_W = [480, 720, 1080]
const MOBILE_MQ = '(max-width: 760px)'

/** Responsive <img> for the pre-generated WebP set in /public/img. */
export default function Img({
  name, kind = 'stock', alt, sizes = '100vw', className, priority = false, style, mobile = false,
}: {
  name: string; kind?: Kind; alt: string; sizes?: string; className?: string; priority?: boolean; style?: React.CSSProperties
  /** Serve the portrait crop on phones (only for images that have `-m-` variants). */
  mobile?: boolean
}) {
  const ws = W[kind]
  const srcSet = ws.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', ')
  const src = `/img/${name}-${ws[Math.min(kind === 'stock' ? 2 : 1, ws.length - 1)]}.webp`
  const [w, h] = DIM[kind]
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={w}
      height={h}
      className={className}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      {...(priority ? { fetchPriority: 'high' as const } : {})}
    />
  )
  if (!mobile) return img

  const mSrcSet = MOBILE_W.map((mw) => `/img/${name}-m-${mw}.webp ${mw}w`).join(', ')
  if (priority) {
    // <img> inside <picture> is not auto-preloaded, so hint both art-directed sources explicitly.
    preload(src, { as: 'image', imageSrcSet: mSrcSet, imageSizes: '100vw', media: MOBILE_MQ, fetchPriority: 'high' })
    preload(src, { as: 'image', imageSrcSet: srcSet, imageSizes: sizes, media: `not all and ${MOBILE_MQ}`, fetchPriority: 'high' })
  }
  return (
    <picture style={{ display: 'contents' }}>
      <source media={MOBILE_MQ} srcSet={mSrcSet} sizes="100vw" />
      {img}
    </picture>
  )
}
