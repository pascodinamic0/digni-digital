type Kind = 'stock' | 'desktop' | 'phone'
const W: Record<Kind, number[]> = { stock: [640, 1200, 1600], desktop: [720, 1440], phone: [480, 780] }
const DIM: Record<Kind, [number, number]> = { stock: [1600, 1067], desktop: [1440, 900], phone: [780, 1688] }

/** Responsive <img> for the pre-generated WebP set in /public/img. */
export default function Img({
  name, kind = 'stock', alt, sizes = '100vw', className, priority = false, style,
}: {
  name: string; kind?: Kind; alt: string; sizes?: string; className?: string; priority?: boolean; style?: React.CSSProperties
}) {
  const ws = W[kind]
  const srcSet = ws.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', ')
  const [w, h] = DIM[kind]
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/img/${name}-${ws[Math.min(1, ws.length - 1)]}.webp`}
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
}
