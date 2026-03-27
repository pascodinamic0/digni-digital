import type { SupabaseClient } from '@supabase/supabase-js'
import { getOrderedLessonIds } from '@/lib/lms/lesson-order'

export type SyllabusModule = {
  id: string
  title: string
  sort_order: number
  lessons: { id: string; title: string; sort_order: number }[]
}

export async function getLearnerSyllabusState(
  supabase: SupabaseClient,
  userId: string,
  courseId: string
): Promise<{
  modules: SyllabusModule[]
  order: string[]
  done: Set<string>
  access: Map<string, { unlocked: boolean }>
  totalLessons: number
  completed: number
  pct: number
}> {
  const { data: modulesRaw } = await supabase
    .from('modules')
    .select('id, title, sort_order, lessons (id, title, sort_order)')
    .eq('course_id', courseId)
    .order('sort_order')

  const modules: SyllabusModule[] = (modulesRaw ?? []).map((m) => ({
    id: m.id,
    title: m.title,
    sort_order: m.sort_order,
    lessons:
      ((m.lessons as { id: string; title: string; sort_order: number }[] | null) ?? [])
        .slice()
        .sort((a, b) => a.sort_order - b.sort_order),
  }))

  const order = await getOrderedLessonIds(supabase, courseId)
  const { data: progress } =
    order.length > 0
      ? await supabase.from('lesson_progress').select('lesson_id').eq('user_id', userId).in('lesson_id', order)
      : { data: [] as { lesson_id: string }[] }

  const done = new Set((progress ?? []).map((p) => p.lesson_id))
  const access = new Map<string, { unlocked: boolean }>()
  for (let i = 0; i < order.length; i++) {
    const id = order[i]!
    const unlocked = i === 0 || done.has(order[i - 1]!)
    access.set(id, { unlocked })
  }

  const totalLessons = order.length
  const completed = done.size
  const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0

  return { modules, order, done, access, totalLessons, completed, pct }
}
