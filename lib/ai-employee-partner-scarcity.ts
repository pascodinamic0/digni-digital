/** Premium partner capacity messaging for AI Employee offer page. */
export const AI_EMPLOYEE_MONTHLY_PARTNER_SLOTS = 5

export type PartnerScarcitySnapshot = {
  month: string
  remaining: number
  total: number
}

/**
 * Derives remaining partner slots for the current calendar month.
 * Starts at 2 remaining on day 1, decreases by 1 each ~8 days (min 1).
 */
export function getPartnerScarcity(now = new Date()): PartnerScarcitySnapshot {
  const month = now.toLocaleString('en', { month: 'long' })
  const day = now.getDate()
  const taken = Math.min(AI_EMPLOYEE_MONTHLY_PARTNER_SLOTS - 1, Math.floor((day - 1) / 8) + 3)
  const remaining = Math.max(1, AI_EMPLOYEE_MONTHLY_PARTNER_SLOTS - taken)
  return { month, remaining, total: AI_EMPLOYEE_MONTHLY_PARTNER_SLOTS }
}
