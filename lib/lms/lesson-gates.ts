import type { SupabaseClient } from '@supabase/supabase-js'
import { getOrderedLessonIds } from '@/lib/lms/lesson-order'

/** Whether the learner may open this lesson (previous lesson completed, or first lesson). */
export async function canAccessLesson(
  supabase: SupabaseClient,
  userId: string,
  courseId: string,
  lessonId: string
): Promise<boolean> {
  const order = await getOrderedLessonIds(supabase, courseId)
  const idx = order.indexOf(lessonId)
  if (idx === -1) return false
  if (idx === 0) return true
  const prev = order[idx - 1]
  const { data: prog } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', userId)
    .eq('lesson_id', prev)
    .maybeSingle()
  return !!prog
}

/** Whether all assignments are submitted and quiz passed (if any). */
export async function hasPassedQuizForLesson(
  supabase: SupabaseClient,
  userId: string,
  lessonId: string
): Promise<boolean> {
  const { data: quiz } = await supabase.from('quizzes').select('id').eq('lesson_id', lessonId).maybeSingle()

  if (!quiz) return true

  const { data: attempt } = await supabase
    .from('quiz_attempts')
    .select('passed')
    .eq('quiz_id', quiz.id)
    .eq('user_id', userId)
    .eq('passed', true)
    .maybeSingle()

  return !!attempt
}

export async function canMarkLessonComplete(
  supabase: SupabaseClient,
  userId: string,
  lessonId: string
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const { data: assigns } = await supabase.from('assignments').select('id').eq('lesson_id', lessonId)

  if (assigns?.length) {
    const ids = assigns.map((a) => a.id)
    const { data: subs } = await supabase
      .from('assignment_submissions')
      .select('assignment_id')
      .eq('user_id', userId)
      .in('assignment_id', ids)

    const submitted = new Set((subs ?? []).map((s) => s.assignment_id))
    for (const a of assigns) {
      if (!submitted.has(a.id)) {
        return { ok: false, reason: 'Submit all assignments for this lesson first.' }
      }
    }
  }

  const passedQuiz = await hasPassedQuizForLesson(supabase, userId, lessonId)
  if (!passedQuiz) {
    return { ok: false, reason: 'Pass the lesson quiz before marking complete.' }
  }

  return { ok: true }
}

/** Allow unmarking complete only if no later lesson in the course is already completed. */
export async function canUncompleteLesson(
  supabase: SupabaseClient,
  userId: string,
  courseId: string,
  lessonId: string
): Promise<boolean> {
  const order = await getOrderedLessonIds(supabase, courseId)
  const idx = order.indexOf(lessonId)
  if (idx === -1) return false
  const following = order.slice(idx + 1)
  if (following.length === 0) return true

  const { data: later } = await supabase
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', userId)
    .in('lesson_id', following)

  return (later?.length ?? 0) === 0
}
