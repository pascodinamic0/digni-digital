import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

/** Comma-separated emails that always pass admin gate (server env only). Use if profiles.role update fails. */
function isEnvAllowlistedAdmin(email: string | undefined): boolean {
  const raw = process.env.ADMIN_EMAILS
  if (!raw?.trim() || !email) return false
  const allow = raw.split(',').map((s) => s.trim().toLowerCase())
  return allow.includes(email.toLowerCase())
}

export async function requireAdmin() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  if (isEnvAllowlistedAdmin(user.email ?? undefined)) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .maybeSingle()
    return { supabase, user, profile }
  }

  const { data: profile, error: profileErr } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  if (profileErr) {
    redirect('/admin/login?error=profile')
  }

  const role = profile?.role as string | undefined
  if (role !== 'admin' && role !== 'staff') {
    redirect('/admin/login?error=forbidden')
  }

  return { supabase, user, profile }
}
