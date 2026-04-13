import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { youtubeEmbedSrc } from '@/lib/lms/youtube-embed'
import { WelcomeVideoClient } from './welcome-client'

type Props = { params: Promise<{ locale: string }> }

export default async function LearnWelcomePage({ params }: Props) {
  const { locale } = await params
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(`/${locale}/learn/login`)
  }

  const { data: profile, error: profileErr } = await supabase
    .from('profiles')
    .select('lms_welcome_video_seen_at')
    .eq('id', user.id)
    .maybeSingle()

  if (!profileErr && profile?.lms_welcome_video_seen_at) {
    redirect(`/${locale}/learn`)
  }

  const { data: en } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .in('status', ['pending', 'active', 'completed'])
    .limit(1)
    .maybeSingle()

  if (!en) {
    redirect(`/${locale}/learn/pending`)
  }

  const raw = process.env.NEXT_PUBLIC_LMS_WELCOME_VIDEO_URL?.trim() ?? ''
  const embedUrl = raw ? youtubeEmbedSrc(raw) : null

  return (
    <WelcomeVideoClient
      locale={locale}
      embedUrl={embedUrl}
      fallbackMessage="Watch a short welcome message, then continue to your course materials. Lessons unlock in order, complete each one to move forward."
    />
  )
}
