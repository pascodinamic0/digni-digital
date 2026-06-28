import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { stripeServerEnv } from '@/lib/stripe/env'
import { getStripeSecretMode } from '@/lib/stripe/secret-key'

/**
 * Optional bundled defaults: `config/stripe-price-ids-live.env` (committed).
 * process.env always wins — use .env.local to override with Test mode price IDs.
 */
let fileCache: Record<string, string> | null = null

function loadFileDefaults(): Record<string, string> {
  if (fileCache) return fileCache
  fileCache = {}
  try {
    const p = join(process.cwd(), 'config/stripe-price-ids-live.env')
    if (!existsSync(p)) return fileCache
    const text = readFileSync(p, 'utf8')
    for (const line of text.split('\n')) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/)
      if (!m) continue
      let val = m[2].trim()
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      fileCache[m[1]] = val
    }
  } catch {
    // ignore (e.g. read-only edge)
  }
  return fileCache
}

/** Resolve STRIPE_PRICE_* (or any key): env first, then committed live defaults file. */
export function stripePriceEnv(key: string): string | undefined {
  const fromEnv = stripeServerEnv(key)
  if (fromEnv) return fromEnv

  // The committed fallback file contains live catalog IDs. A test secret must use
  // explicit test mode prices from .env.local / Netlify env to avoid mode mismatch.
  if (getStripeSecretMode() === 'test') return undefined

  const fromFile = loadFileDefaults()[key]?.trim()
  if (fromFile) return fromFile
  return undefined
}
