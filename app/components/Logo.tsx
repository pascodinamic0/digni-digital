'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { BRAND_WORDMARK_PATH } from '@/lib/site-assets'

const WORDMARK_WIDTH = 920
const WORDMARK_HEIGHT = 300

interface LogoProps {
  href?: string
  label?: string
  className?: string
}

export default function Logo({ href = '/', label = 'Digni Digital LLC', className = '' }: LogoProps) {
  const content = (
    <Image
      src={BRAND_WORDMARK_PATH}
      alt=""
      width={WORDMARK_WIDTH}
      height={WORDMARK_HEIGHT}
      className="h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
      priority
    />
  )

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 group transition-colors duration-300 ${className}`}
      aria-label={label}
    >
      {content}
    </Link>
  )
}
