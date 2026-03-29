'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { BRAND_LOGO_PATH } from '@/lib/site-assets'

const LOGO_MARK_SIZE = 40

interface LogoProps {
  href?: string
  label?: string
  className?: string
}

export default function Logo({ href = '/', label = 'Digni Digital LLC', className = '' }: LogoProps) {
  const content = (
    <>
      <span className="logo-mark flex items-center justify-center shrink-0" aria-hidden>
        <Image
          src={BRAND_LOGO_PATH}
          alt=""
          width={LOGO_MARK_SIZE}
          height={LOGO_MARK_SIZE}
          className="object-contain transition-transform duration-300 group-hover:scale-[1.04]"
          priority
        />
      </span>
      <span className="font-body font-semibold text-xl tracking-tight text-text truncate max-w-[calc(210px-48px)]">
        {label}
      </span>
    </>
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
