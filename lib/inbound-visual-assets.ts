import type { InboundSourceId } from '@/app/i18n/aiEmployeeInboundFlow'

const BASE = '/images/ai-receptionist/inbound'

/** Full-bleed cinematic stage atmosphere */
export const INBOUND_STAGE_ATMOSPHERE = `${BASE}/inbound-stage-atmosphere.png`

/** Central hub decorative illustration */
export const INBOUND_HUB_ILLUSTRATION = `${BASE}/inbound-hub-illustration.png`

/** Photorealistic tactic screenshots — one per source × tactic index */
const TACTIC_IMAGES: Record<InboundSourceId, readonly [string, string, string]> = {
  ads: [
    `${BASE}/inbound-tactic-meta-lead.png`,
    `${BASE}/inbound-tactic-google-search.png`,
    `${BASE}/inbound-tactic-retargeting.png`,
  ],
  organic: [
    `${BASE}/inbound-tactic-instagram-dm.png`,
    `${BASE}/inbound-tactic-website-chat.png`,
    `${BASE}/inbound-tactic-google-maps.png`,
  ],
  walkIns: [
    `${BASE}/inbound-tactic-front-desk.png`,
    `${BASE}/inbound-tactic-reception-qr.png`,
    `${BASE}/inbound-tactic-event-booth.png`,
  ],
  referrals: [
    `${BASE}/inbound-tactic-whatsapp-referral.png`,
    `${BASE}/inbound-tactic-partner-b2b.png`,
    `${BASE}/inbound-tactic-trust-reviews.png`,
  ],
}

export function getInboundTacticImage(sourceId: InboundSourceId, index: number): string {
  const clamped = Math.max(0, Math.min(2, index)) as 0 | 1 | 2
  return TACTIC_IMAGES[sourceId][clamped]
}

/** Per-tactic crop focus for photorealistic assets */
const TACTIC_OBJECT_POSITION: Record<InboundSourceId, readonly [string, string, string]> = {
  ads: ['center 35%', 'center 40%', 'center 30%'],
  organic: ['center 45%', 'center 50%', 'center 40%'],
  walkIns: ['center 40%', 'center 45%', 'center 35%'],
  referrals: ['center 42%', 'center 38%', 'center 45%'],
}

export function getInboundTacticObjectPosition(sourceId: InboundSourceId, index: number): string {
  const clamped = Math.max(0, Math.min(2, index)) as 0 | 1 | 2
  return TACTIC_OBJECT_POSITION[sourceId][clamped]
}
