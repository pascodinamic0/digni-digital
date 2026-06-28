type NetlifyEnvGlobal = typeof globalThis & {
  Netlify?: {
    env?: {
      get?: (key: string) => string | undefined
    }
  }
}

/**
 * Server-side env lookup that works in standard Next.js runtime and in
 * Netlify's generated functions.
 */
export function stripeServerEnv(key: string): string | undefined {
  const netlifyValue = (globalThis as NetlifyEnvGlobal).Netlify?.env?.get?.(key)?.trim()
  if (netlifyValue) return netlifyValue

  const processValue = process.env[key]?.trim()
  if (processValue) return processValue

  return undefined
}
