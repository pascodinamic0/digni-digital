'use client'

import Image from 'next/image'
import { BRAND_SHIELD_LOGO_PATH } from '@/lib/site-assets'

type Size = 'sidebarCompact' | 'sidebarWide'

const sizeConfig: Record<Size, { box: string; image: string; sizes: string }> = {
  sidebarCompact: {
    box: 'h-9 w-9 rounded-xl',
    image: 'p-[3px]',
    sizes: '36px',
  },
  sidebarWide: {
    box: 'h-12 w-12 rounded-xl',
    image: 'p-1',
    sizes: '48px',
  },
}

type Props = {
  size?: Size
  className?: string
}

export default function SoftwareBrandMark({
  size = 'sidebarCompact',
  className = '',
}: Props) {
  const { box, image, sizes } = sizeConfig[size]

  return (
    <div
      className={`software-brand-mark mx-auto flex shrink-0 items-center justify-center overflow-hidden bg-white shadow-sm ring-1 ring-black/[0.06] ${box} ${className}`}
    >
      <Image
        src={BRAND_SHIELD_LOGO_PATH}
        alt="Digni Digital"
        width={544}
        height={544}
        sizes={sizes}
        className={`h-full w-full object-contain object-center ${image}`}
        priority={size === 'sidebarCompact'}
      />
    </div>
  )
}
