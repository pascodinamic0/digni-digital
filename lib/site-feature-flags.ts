import { unstable_cache } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient, isSupabaseServiceConfigured } from '@/lib/supabase/admin'
import { SITE_FEATURE_FLAG_KEYS } from './site-feature-flags-constants'

const FEATURE_FLAG_REVALIDATE_SECONDS = 60

export type { SiteFeatureFlagKey } from './site-feature-flags-constants'
export { SITE_FEATURE_FLAG_KEYS, SITE_FEATURE_FLAG_META } from './site-feature-flags-constants'

/**
 * Reads `site_feature_flags` on the server.
 * - Prefers service role when configured so the value matches what admins save (matches admin API).
 * - Falls back to the visitor SSR client only when service role is not available (e.g. local dev).
 * - Defaults to `defaultEnabled` on errors / missing row (prefer `false` so failed deploys hide optional demos).
 *
 * Env kill switch for the Task Queue demo only:
 * DISABLE_AI_EMPLOYEE_TASK_QUEUE_DEMO=true|1|yes
 */
export async function getSiteFeatureFlagEnabled(
  flagKey: string,
  defaultEnabled = false,
): Promise<boolean> {
  if (flagKey === SITE_FEATURE_FLAG_KEYS.AI_EMPLOYEE_TASK_QUEUE_DEMO) {
    const kill = process.env.DISABLE_AI_EMPLOYEE_TASK_QUEUE_DEMO?.trim().toLowerCase()
    if (kill === '1' || kill === 'true' || kill === 'yes') {
      return false
    }
  }

  return unstable_cache(
    () => fetchSiteFeatureFlagEnabled(flagKey, defaultEnabled),
    ['site-feature-flag', flagKey],
    { revalidate: FEATURE_FLAG_REVALIDATE_SECONDS },
  )()
}

async function fetchSiteFeatureFlagEnabled(
  flagKey: string,
  defaultEnabled: boolean,
): Promise<boolean> {
  try {
    const supabase = isSupabaseServiceConfigured()
      ? createAdminClient()
      : await createClient()

    const { data, error } = await supabase
      .from('site_feature_flags')
      .select('enabled')
      .eq('flag_key', flagKey)
      .maybeSingle()
    if (error || data == null) return defaultEnabled
    return Boolean(data.enabled)
  } catch {
    return defaultEnabled
  }
}
