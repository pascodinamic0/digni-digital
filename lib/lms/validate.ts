/** URL-safe slug: lowercase letters, numbers, hyphens */
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function normalizeSlug(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function isValidSlug(slug: string): boolean {
  return slug.length >= 2 && slug.length <= 120 && SLUG_RE.test(slug)
}

export function parseSortOrder(n: unknown, fallback = 0): number {
  const x = typeof n === 'number' ? n : parseInt(String(n), 10)
  if (Number.isNaN(x) || x < 0) return fallback
  return Math.min(x, 1_000_000)
}
