import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getLearnerSyllabusState } from '@/lib/lms/learner-course-syllabus'
import { CourseSyllabusSidebar } from '../course-syllabus-sidebar'
import { LessonCompleteButton } from './lesson-complete-button'
import { LessonVideoPlayer } from './lesson-video-player'
import { LessonAssignments } from './lesson-assignments'
import { LessonQuiz, type QuizQuestionPublic } from './lesson-quiz'
import { canAccessLesson, canMarkLessonComplete } from '@/lib/lms/lesson-gates'
import type { AssignmentRow } from '@/lib/types/database'

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

  const { data: course } = await supabase.from('courses').select('id, title').eq('slug', courseSlug).single()
  if (!course) notFound()

  const { data: enrollment } = await supabase
    .from('enrollments')
    .select('id')
    .eq('user_id', user.id)
    .eq('course_id', course.id)
    .maybeSingle()

  if (!enrollment) notFound()

  const { modules, access, done } = await getLearnerSyllabusState(supabase, user.id, course.id)

  const { data: lesson } = await supabase
    .from('lessons')
    .select('id, title, body, video_url, video_storage_path, modules!inner(course_id)')
    .eq('id', lessonId)
    .single()

  if (!lesson) notFound()

  const mod = lesson.modules as unknown as { course_id: string }
  if (mod.course_id !== course.id) notFound()

  const allowed = await canAccessLesson(supabase, user.id, course.id, lessonId)
  if (!allowed) {
    redirect(`/${locale}/learn/${courseSlug}`)
  }

  const { data: prog } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', user.id)
    .eq('lesson_id', lessonId)
    .maybeSingle()

  const { data: assignmentRows } = await supabase
    .from('assignments')
    .select('*')
    .eq('lesson_id', lessonId)
    .order('sort_order', { ascending: true })

  const assignments = (assignmentRows ?? []) as AssignmentRow[]
  const aIds = assignments.map((a) => a.id)
  const { data: subRows } =
    aIds.length > 0
      ? await supabase
          .from('assignment_submissions')
          .select('assignment_id, body, submitted_at')
          .eq('user_id', user.id)
          .in('assignment_id', aIds)
      : { data: [] as { assignment_id: string; body: string; submitted_at: string }[] }

  const hasUpload = !!(lesson as { video_storage_path?: string | null }).video_storage_path

  const completeGate = await canMarkLessonComplete(supabase, user.id, lessonId)
  const initialDone = !!prog
  const canMarkComplete = !initialDone ? completeGate.ok : true
  const blockReason = !initialDone && !completeGate.ok ? completeGate.reason : undefined

  const { data: quizRow } = await supabase.from('quizzes').select('id').eq('lesson_id', lessonId).maybeSingle()

  const { data: passedAttempt } = quizRow
    ? await supabase
        .from('quiz_attempts')
        .select('id')
        .eq('quiz_id', quizRow.id)
        .eq('user_id', user.id)
        .eq('passed', true)
        .maybeSingle()
    : { data: null }

  let quizQuestions: QuizQuestionPublic[] = []
  if (quizRow) {
    const admin = createAdminClient()
    const { data: qq } = await admin
      .from('quiz_questions')
      .select('id, prompt, sort_order, choice_a, choice_b, choice_c, choice_d')
      .eq('quiz_id', quizRow.id)
      .order('sort_order')
    quizQuestions = (qq ?? []) as QuizQuestionPublic[]
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-10">
      <div className="order-2 lg:sticky lg:top-24 lg:order-1">
        <CourseSyllabusSidebar
          locale={locale}
          courseSlug={courseSlug}
          modules={modules}
          access={access}
          done={done}
          currentLessonId={lessonId}
        />
      </div>

      <article className="order-1 min-w-0 lg:order-2">
        <Link
          href={`/${locale}/learn/${courseSlug}`}
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          ← Course overview
        </Link>
        <p className="text-xs text-muted">{course.title}</p>
        <span className="section-label">Lesson</span>
        <h1 className="font-display mt-2 mb-8 text-3xl font-bold tracking-tight text-text md:text-4xl">{lesson.title}</h1>
        <LessonVideoPlayer
          lessonId={lessonId}
          hasUploadedVideo={hasUpload}
          videoUrl={lesson.video_url}
          title={lesson.title}
        />
        {lesson.body && (
          <div className="prose prose-invert mb-8 max-w-none whitespace-pre-wrap text-text">{lesson.body}</div>
        )}
        {quizRow && quizQuestions.length > 0 && (
          <LessonQuiz quizId={quizRow.id} initialPassed={!!passedAttempt} questions={quizQuestions} />
        )}
        <LessonAssignments assignments={assignments} initialSubs={subRows ?? []} />
        <LessonCompleteButton
          lessonId={lessonId}
          initialDone={initialDone}
          canMarkComplete={canMarkComplete}
          blockReason={blockReason}
        />
      </article>
    </div>
  )
}
