import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LessonCompleteButton } from './lesson-complete-button'

type Props = { params: Promise<{ locale: string; courseSlug: string; lessonId: string }> }

export default async function LessonPage({ params }: Props) {
  const { locale, courseSlug, lessonId } = await params
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect(`/${locale}/learn/login`)
  }

  const { data: course } = await supabase.from('courses').select('id').eq('slug', courseSlug).single()
  if (!course) notFound()

  const { data: enrollment } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .eq('course_id', course.id)
    .maybeSingle()

  if (!enrollment) notFound()

  const { data: lesson } = await supabase
    .from('lessons')
    .select('id, title, body, video_url, modules!inner(course_id)')
    .eq('id', lessonId)
    .single()

  if (!lesson) notFound()

  const mod = lesson.modules as unknown as { course_id: string }
  if (mod.course_id !== course.id) notFound()

  const { data: prog } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', user.id)
    .eq('lesson_id', lessonId)
    .maybeSingle()

  return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      <Link href={`/${locale}/learn/${courseSlug}`} className="text-sm text-accent hover:underline mb-6 inline-block">
        ← Back to course
      </Link>
      <h1 className="font-display text-3xl font-bold mb-6">{lesson.title}</h1>
      {lesson.video_url && (
        <div className="aspect-video rounded-xl overflow-hidden bg-muted mb-6">
          <iframe
            src={lesson.video_url}
            className="w-full h-full"
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {lesson.body && (
        <div className="prose prose-invert max-w-none text-text mb-8 whitespace-pre-wrap">{lesson.body}</div>
      )}
      <LessonCompleteButton lessonId={lessonId} initialDone={!!prog} />
    </article>
  )
}
