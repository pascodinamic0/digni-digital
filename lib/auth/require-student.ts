import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

/** Requires authenticated user with at least one enrollment (any status in active set). */
export async function requireStudent(localePrefix: string) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(`/${localePrefix}/learn/login`)
  }

  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .in('status', ['pending', 'active', 'completed'])
    .limit(1)

  if (!enrollments?.length) {
    redirect(`/${localePrefix}/learn/pending`)
  }

  return { supabase, user }
}
