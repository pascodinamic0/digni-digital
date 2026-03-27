import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { createAdminClient } from '@/lib/supabase/admin'
import { enrollUserFromInvite } from '@/lib/lms/invite-enrollment'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next') ?? '/us-en/learn'
  const inviteId = url.searchParams.get('invite_id')

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          },
        },
      }
    )
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) {
      console.error('auth callback:', error)
      const learnLogin =
        next.includes('/learn') && next.match(/^\/([^/]+)\/learn/)
          ? `/${next.match(/^\/([^/]+)\/learn/)![1]}/learn/login?error=auth`
          : '/us-en/learn/login?error=auth'
      const dest = next.includes('/learn') ? learnLogin : '/admin/login?error=auth'
      return NextResponse.redirect(new URL(dest, url.origin))
    }

    if (inviteId?.trim() && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const admin = createAdminClient()
        const { data: inv } = await admin
          .from('lms_invites')
          .select('id, email, course_id, expires_at, used_at, revoked_at')
          .eq('id', inviteId.trim())
          .maybeSingle()

        if (
          inv &&
          !inv.revoked_at &&
          new Date(inv.expires_at) > new Date() &&
          !inv.used_at
        ) {
          const {
            data: { user },
          } = await supabase.auth.getUser()
          if (user?.email) {
            await enrollUserFromInvite(admin, inv, user.id, user.email)
          }
        }
      } catch (e) {
        console.error('auth callback invite enrollment:', e)
      }
    }
  }

  return NextResponse.redirect(new URL(next, url.origin))
}
