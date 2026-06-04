'use client'

import type { ReactNode } from 'react'

type Props = {
 children: ReactNode
 className?: string
}

/** Small round badge for AI / business messages, shows the channel icon, not a lightning bolt */
export default function ChatChannelIconBadge({ children, className = '' }: Props) {
 return (
 <span
 className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-light bg-surface text-accent [&_svg]:h-3.5 [&_svg]:w-3.5 ${className}`}
 aria-hidden
 >
 {children}
 </span>
 )
}
