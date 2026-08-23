'use client'

import { Globe, Mail, Megaphone, MessageSquare, Phone } from 'lucide-react'
import { isLeadChannelBeta, type LeadChannelId } from '@/lib/lead-channels'
import SocialPlatformIcon, { type SocialPlatform } from './SocialPlatformIcon'

const SOCIAL_BY_CHANNEL: Partial<Record<LeadChannelId, SocialPlatform>> = {
  whatsapp: 'whatsapp',
  facebook: 'facebook',
  instagram: 'instagram',
  google: 'google',
  tiktok: 'tiktok',
  linkedin: 'linkedin',
}

export function LeadChannelBetaBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`absolute -right-1 -top-1 z-10 flex h-3.5 min-w-[14px] items-center justify-center rounded-full border border-warning/35 bg-warning px-0.5 text-[7px] font-bold leading-none text-white shadow-sm ${className}`}
      title="Beta"
      aria-label="Beta"
    >
      β
    </span>
  )
}

export default function LeadChannelIcon({
  channelId,
  className = 'w-6 h-6',
  compact = false,
  showBeta = true,
}: {
  channelId: LeadChannelId | string
  className?: string
  compact?: boolean
  /** Show β badge on channels still in GHL beta */
  showBeta?: boolean
}) {
  const beta = showBeta && isLeadChannelBeta(channelId)
  const iconClass = compact ? 'w-5 h-5' : className
  const social = SOCIAL_BY_CHANNEL[channelId as LeadChannelId]

  let icon
  if (social) {
    icon = <SocialPlatformIcon platform={social} className={iconClass} />
  } else {
    switch (channelId) {
      case 'sms':
        icon = <MessageSquare className={iconClass} aria-hidden />
        break
      case 'phone':
        icon = <Phone className={iconClass} aria-hidden />
        break
      case 'email':
        icon = <Mail className={iconClass} aria-hidden />
        break
      case 'website':
        icon = <Globe className={iconClass} aria-hidden />
        break
      case 'ads':
        icon = <Megaphone className={iconClass} aria-hidden />
        break
      default:
        icon = <Globe className={iconClass} aria-hidden />
    }
  }

  return (
    <span className={`relative inline-flex items-center justify-center ${compact ? 'min-h-5' : 'min-h-6'}`}>
      {icon}
      {beta ? <LeadChannelBetaBadge /> : null}
    </span>
  )
}
