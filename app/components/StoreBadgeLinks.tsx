const ASSETS = {
  apple: '/images/Download/app-store-badge.svg',
  play: '/images/Download/google-play-badge.svg',
} as const

type StoreBadgeLinksProps = {
  appStoreHref: string
  playStoreHref: string
  appStoreAriaLabel: string
  playStoreAriaLabel: string
  focusOutlineClassName?: string
}

/** Official vector store badges — crisp at any size, no PNG fringe artifacts. */
export default function StoreBadgeLinks({
  appStoreHref,
  playStoreHref,
  appStoreAriaLabel,
  playStoreAriaLabel,
  focusOutlineClassName = 'focus-visible:outline accent',
}: StoreBadgeLinksProps) {
  const linkClassName = `inline-flex rounded-md transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutlineClassName}`
  const badgeClassName = 'block h 11 w auto md:h-[52px]'

  return (
    <div className="flex flex wrap items center gap 4">
      <a
        href={appStoreHref}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        aria-label={appStoreAriaLabel}
      >
        <img src={ASSETS.apple} alt="" width={120} height={40} className={badgeClassName} />
      </a>
      <a
        href={playStoreHref}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        aria-label={playStoreAriaLabel}
      >
        <img src={ASSETS.play} alt="" width={155} height={60} className={badgeClassName} />
      </a>
    </div>
  )
}
