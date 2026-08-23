/**
 * GoHighLevel unified inbox + lead-capture channels.
 * Order: Africa-first (WhatsApp, SMS, phone), then ads/web, then social.
 * @see https://help.gohighlevel.com — Conversations + Lead Ads integrations
 */

export type LeadChannelId =
  | 'whatsapp'
  | 'sms'
  | 'phone'
  | 'ads'
  | 'website'
  | 'facebook'
  | 'instagram'
  | 'email'
  | 'google'
  | 'tiktok'
  | 'linkedin'

export type LeadChannelMeta = {
  id: LeadChannelId
  /** Native GHL channel still rolling out */
  beta?: boolean
}

/** Canonical display order for funnel chips and channel rows */
export const LEAD_CHANNEL_CATALOG: LeadChannelMeta[] = [
  { id: 'whatsapp', beta: true },
  { id: 'sms' },
  { id: 'phone' },
  { id: 'ads' },
  { id: 'website' },
  { id: 'facebook' },
  { id: 'instagram' },
  { id: 'email' },
  { id: 'google' },
  { id: 'tiktok', beta: true },
  { id: 'linkedin' },
]

export const LEAD_CHANNEL_IDS = LEAD_CHANNEL_CATALOG.map((c) => c.id)

export function isLeadChannelBeta(id: string): boolean {
  return LEAD_CHANNEL_CATALOG.find((c) => c.id === id)?.beta ?? false
}

export function isLeadChannelId(id: string): id is LeadChannelId {
  return LEAD_CHANNEL_IDS.includes(id as LeadChannelId)
}
