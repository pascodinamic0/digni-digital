import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { FUTURE_READY_COURSE_ID } from '@/lib/course-ids'

type Props = { params: Promise<{ locale: string }> }

export default async function LearnIndexPage({ params }: Props) {
  const { locale } = await params
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect(`/${locale}/learn/login`)
  }

  const { data: en } = await supabase
    .from('enrollments')
    .select('course_id')
    .eq('user_id', user.id)
    .in('status', ['pending', 'active', 'completed'])
    .limit(1)
    .maybeSingle()

  if (!en) {
    redirect(`/${locale}/learn/pending`)
  }

  const { data: profile, error: profileErr } = await supabase
    .from('profiles')
    .select('lms_welcome_video_seen_at')
    .eq('id', user.id)
    .maybeSingle()

  if (!profileErr && !profile?.lms_welcome_video_seen_at) {
    redirect(`/${locale}/learn/welcome`)
  }

  const { data: course } = await supabase.from('courses').select('slug').eq('id', en.course_id ?? FUTURE_READY_COURSE_ID).single()

  if (course?.slug) {
    redirect(`/${locale}/learn/${course.slug}`)
  }

  redirect(`/${locale}/learn/pending`)
}
