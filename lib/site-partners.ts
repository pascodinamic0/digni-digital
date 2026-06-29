import { clients } from '@/app/config/clients.config'

/** Featured partner logos shown in ClientLogos — single source for partner count stats. */
export const PARTNER_LOGO_COUNT = clients.length

export function formatPartnerCountLabel() {
  return `${PARTNER_LOGO_COUNT}+`
}

/** Replace `{partnerCount}` in copy with the live logo count (e.g. "20"). */
export function withPartnerCount(text: string) {
  return text.replaceAll('{partnerCount}', String(PARTNER_LOGO_COUNT))
}
