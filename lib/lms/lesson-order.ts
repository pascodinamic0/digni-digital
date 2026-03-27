import type { SupabaseClient } from '@supabase/supabase-js'

/** Flat lesson order: modules by sort_order, then lessons by sort_order within each module. */
export async function getOrderedLessonIds(supabase: SupabaseClient, courseId: string): Promise<string[]> {
  const { data: modules } = await supabase
    .from('modules')
    .select('id, sort_order, lessons ( id, sort_order )')
    .eq('course_id', courseId)
    .order('sort_order', { ascending: true })

  const out: string[] = []
  for (const m of modules ?? []) {
    const lessons = (m.lessons as { id: string; sort_order: number }[] | null) ?? []
    lessons
      .slice()
      .sort((a, b) => a.sort_order - b.sort_order)
      .forEach((l) => out.push(l.id))
  }
  return out
}
