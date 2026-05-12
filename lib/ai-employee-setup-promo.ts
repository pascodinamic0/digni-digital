/** Inclusive end of May setup-fee waiver (UTC). Update yearly if the promo repeats. */
export const AI_EMPLOYEE_SETUP_PROMO_END_MS = Date.UTC(2026, 4, 31, 23, 59, 59, 999)

export function isAiEmployeeSetupPromoActive(at = Date.now()): boolean {
  return at <= AI_EMPLOYEE_SETUP_PROMO_END_MS
}
