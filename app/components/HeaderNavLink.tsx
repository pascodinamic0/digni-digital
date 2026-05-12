'use client'

import { useTransition, type ComponentProps, type MouseEvent } from 'react'
import { Link, useRouter } from '@/i18n/navigation'

export type HeaderNavLinkProps = Omit<ComponentProps<typeof Link>, 'onClick'> & {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

/**
 * Same as next-intl {@link Link}, but starts navigation inside {@link useTransition}
 * so the click shows immediate pending styling (opacity / cursor) while the RSC payload loads.
 */
export default function HeaderNavLink({
  href,
  className = '',
  children,
  onClick,
  ...rest
}: HeaderNavLinkProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <Link
      href={href}
      {...rest}
      aria-busy={isPending}
      className={`${className}${isPending ? ' opacity-60 cursor-wait pointer-events-none' : ''}`}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        if (e.button !== 0) return
        const el = e.currentTarget
        const target = el.getAttribute('target')
        if (target && target !== '_self') return
        if (el.hasAttribute('download')) return
        e.preventDefault()
        startTransition(() => {
          // next-intl `push` accepts a narrower href type than `Link`'s `UrlObject`-style props
          router.push(href as Parameters<typeof router.push>[0])
        })
      }}
    >
      {children}
    </Link>
  )
}
