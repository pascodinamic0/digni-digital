import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getLearnerSyllabusState } from '@/lib/lms/learner-course-syllabus'
import { CourseSyllabusSidebar } from './course-syllabus-sidebar'

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

  const { modules, order, access, done, totalLessons, completed, pct } = await getLearnerSyllabusState(
    supabase,
    user.id,
    course.id
  )

  const firstIncomplete = order.find((id) => !done.has(id))
  const nextLessonId =
    firstIncomplete && access.get(firstIncomplete)?.unlocked ? firstIncomplete : order[0] && access.get(order[0])?.unlocked ? order[0] : null

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-10">
      <div className="order-2 lg:sticky lg:top-24 lg:order-1">
        <CourseSyllabusSidebar
          locale={locale}
          courseSlug={courseSlug}
          modules={modules}
          access={access}
          done={done}
          currentLessonId={null}
        />
      </div>

      <div className="order-1 min-w-0 lg:order-2">
        <header className="mb-8">
          <span className="section-label">Your course</span>
          <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-text md:text-4xl">{course.title}</h1>
          {course.description && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{course.description}</p>
          )}
          {totalLessons > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-border-accent/25 bg-surface/60 px-4 py-3 md:px-5">
              <div className="min-w-[140px] flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Progress</p>
                <p className="font-display text-2xl font-bold tabular-nums text-accent">
                  {completed}/{totalLessons}{' '}
                  <span className="text-base font-semibold text-muted">lessons</span>
                </p>
              </div>
              <div className="h-2 min-w-[120px] flex-1 overflow-hidden rounded-full bg-border/80">
                <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${pct}%` }} />
              </div>
              <span className="text-sm font-medium tabular-nums text-muted">{pct}%</span>
            </div>
          )}
        </header>

        <div className="rounded-2xl border border-border-light/80 bg-surface/40 p-6 md:p-8">
          <p className="text-sm leading-relaxed text-muted">
            Pick a lesson from the <strong className="text-text">outline</strong> on the left (or below on mobile). Watch the video,
            complete any quiz or assignment, then mark the lesson complete to unlock the next one.
          </p>
          {nextLessonId && (
            <Link
              href={`/${locale}/learn/${courseSlug}/${nextLessonId}`}
              className="mt-6 inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-background hover:opacity-95"
            >
              {completed === 0 ? 'Start first lesson' : firstIncomplete ? 'Continue learning' : 'Review lessons'}
            </Link>
          )}
          {totalLessons === 0 && <p className="mt-4 text-sm text-muted">Your instructor hasn&apos;t added lessons yet.</p>}
        </div>
      </div>
    </div>
  )
}
