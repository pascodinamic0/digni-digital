'use client'

import Image from 'next/image'
import { BRAND_SHIELD_LOGO_PATH } from '@/lib/site-assets'

type Size = 'sidebarCompact' | 'sidebarWide'

const sizeConfig: Record<Size, { box: string; image: string }> = {
  sidebarCompact: {
    box: 'h-9 w-9',
    image: 'p-[3px]',
  },
  sidebarWide: {
    box: 'h-12 w-full max-w-[168px]',
    image: 'p-1',
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
  const { box, image } = sizeConfig[size]

  return (
    <div
      className={`software-brand-mark flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/[0.06] ${box} ${className}`}
    >
      <Image
        src={BRAND_SHIELD_LOGO_PATH}
        alt="Digni Digital"
        width={544}
        height={544}
        sizes={size === 'sidebarCompact' ? '36px' : '168px'}
        className={`h-full w-full object-contain object-center ${image}`}
        priority={size === 'sidebarCompact'}
      />
    </div>
  )
}
