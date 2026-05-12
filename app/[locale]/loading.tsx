import { BRAND_ROUTE_LOADING_GIF_PATH } from '@/lib/site-assets'

export default function Loading() {
  return (
    <main
      className="flex min-h-[min(100dvh,56rem)] flex-col items-center justify-center bg-background px-6 pb-16 pt-[clamp(5.5rem,18vh,10rem)]"
      aria-busy="true"
    >
      <p className="sr-only">Loading page</p>
      <img
        src={BRAND_ROUTE_LOADING_GIF_PATH}
        alt=""
        width={200}
        height={200}
        className="h-[clamp(5.5rem,18vw,8.5rem)] w-auto max-w-[min(90vw,15rem)] object-contain"
        decoding="async"
        aria-hidden
      />
    </main>
  )
}
