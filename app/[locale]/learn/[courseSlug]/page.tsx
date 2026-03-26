import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

type Props = { params: Promise<{ locale: string; courseSlug: string }> }

export default async function CoursePage({ params }: Props) {
  const { locale, courseSlug } = await params
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect(`/${locale}/learn/login`)
  }

  const { data: course } = await supabase.from('courses').select('id, title, description').eq('slug', courseSlug).single()
  if (!course) notFound()

  const { data: enrollment } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .eq('course_id', course.id)
    .maybeSingle()

  if (!enrollment) {
    return notFound()
  }

  const { data: modules } = await supabase
    .from('modules')
    .select('id, title, sort_order, lessons (id, title, sort_order)')
    .eq('course_id', course.id)
    .order('sort_order')

  const lessonIds = (modules ?? []).flatMap((m) => (m.lessons as { id: string }[] | null)?.map((l) => l.id) ?? [])
  const { data: progress } =
    lessonIds.length > 0
      ? await supabase.from('lesson_progress').select('lesson_id').eq('user_id', user.id).in('lesson_id', lessonIds)
      : { data: [] as { lesson_id: string }[] }

  const done = new Set((progress ?? []).map((p) => p.lesson_id))

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="font-display text-3xl font-bold mb-2">{course.title}</h1>
      {course.description && <p className="text-muted mb-8">{course.description}</p>}
      <div className="space-y-8">
        {(modules ?? []).map((mod) => {
          const lessons = (mod.lessons as { id: string; title: string; sort_order: number }[] | null | undefined)?.slice().sort((a, b) => a.sort_order - b.sort_order) ?? []
          return (
            <section key={mod.id}>
              <h2 className="font-semibold text-lg mb-3 border-b border-border pb-2">{mod.title}</h2>
              <ul className="space-y-2">
                {lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link
                      href={`/${locale}/learn/${courseSlug}/${lesson.id}`}
                      className="flex items-center justify-between rounded-lg border border-border px-4 py-3 hover:border-accent transition-colors"
                    >
                      <span>{lesson.title}</span>
                      {done.has(lesson.id) ? (
                        <span className="text-xs text-success">Done</span>
                      ) : (
                        <span className="text-xs text-muted">Open</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
