import { BRAND_ROUTE_LOADING_GIF_PATH } from '@/lib/site-assets'

/** Clears fixed nav (~py-4 + 58px logo + border); stays below `.site-header-nav` z-[100]. */
const BELOW_HEADER_TOP_CLASS = 'top-[5.625rem]'

export default function Loading() {
  return (
    <main
      className={`fixed inset-x-0 bottom-0 ${BELOW_HEADER_TOP_CLASS} z-[90] flex items-center justify-center bg-background px-6`}
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
