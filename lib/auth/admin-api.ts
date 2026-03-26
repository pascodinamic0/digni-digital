import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import type { User } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

function isEnvAllowlistedAdmin(email: string | undefined): boolean {
  const raw = process.env.ADMIN_EMAILS
  if (!raw?.trim() || !email) return false
  const allow = raw.split(',').map((s) => s.trim().toLowerCase())
  return allow.includes(email.toLowerCase())
}

export type AdminApiResult =
  | { ok: true; user: User; db: SupabaseClient }
  | { ok: false; error: string; status: number }

/**
 * Verifies the session may call admin APIs, then returns a service-role Supabase client.
 * Needed because RLS `is_admin()` only sees profiles.role — env allowlist users would
 * otherwise get 403/empty results from admin routes.
 */
export async function verifyAdminApi(): Promise<AdminApiResult> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { ok: false, error: 'Unauthorized', status: 401 }
  }

  const allowlisted = isEnvAllowlistedAdmin(user.email ?? undefined)
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  const role = profile?.role as string | undefined
  const hasStaffRole = role === 'admin' || role === 'staff'

  if (!allowlisted && !hasStaffRole) {
    return { ok: false, error: 'Forbidden', status: 403 }
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { ok: false, error: 'Server misconfigured', status: 500 }
  }

  return { ok: true, user, db: createAdminClient() }
}
