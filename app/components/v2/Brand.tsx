/** Shield mark + wordmark. Uses the crisp 64/128px renders of the 3D shield. */
export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? 'brand--light' : ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/v2/shield-64.webp" srcSet="/brand/v2/shield-64.webp 1x, /brand/v2/shield-128.webp 2x, /brand/v2/shield-192.webp 3x" alt="" width={32} height={30} decoding="async" />
      <span dir="ltr">Digni <b>Digital</b></span>
    </span>
  )
}
