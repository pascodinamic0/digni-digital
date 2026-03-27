import type { SupabaseClient } from '@supabase/supabase-js'

/** Completes enrollment for a validated invite after the user session exists. */
export async function enrollUserFromInvite(
  admin: SupabaseClient,
  invite: { id: string; email: string; course_id: string },
  userId: string,
  userEmail: string | undefined
): Promise<{ ok: true } | { ok: false; error: string }> {
  const e = userEmail?.trim().toLowerCase()
  const expected = invite.email.trim().toLowerCase()
  if (!e || e !== expected) {
    return { ok: false, error: 'Invite email does not match signed-in user' }
  }

  const now = new Date().toISOString()

  const { data: existing } = await admin
    .from('enrollments')
    .select('id')
    .eq('user_id', userId)
    .eq('course_id', invite.course_id)
    .maybeSingle()

  if (existing) {
    const { error } = await admin
      .from('enrollments')
      .update({ status: 'active', invited_at: now })
      .eq('id', existing.id)
    if (error) return { ok: false, error: error.message }
  } else {
    const { error } = await admin.from('enrollments').insert({
      user_id: userId,
      course_id: invite.course_id,
      status: 'active',
      invited_at: now,
      enrolled_at: now,
    })
    if (error) return { ok: false, error: error.message }
  }

  const { data: marked, error: upInvite } = await admin
    .from('lms_invites')
    .update({ used_at: now })
    .eq('id', invite.id)
    .is('used_at', null)
    .is('revoked_at', null)
    .select('id')

  if (upInvite) return { ok: false, error: upInvite.message }
  if (!marked?.length) {
    return { ok: false, error: 'Invite was already used or revoked' }
  }

  return { ok: true }
}
