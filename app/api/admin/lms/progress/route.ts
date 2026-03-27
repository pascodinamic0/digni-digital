import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function GET(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const courseId = new URL(request.url).searchParams.get('courseId')
  if (!courseId) {
    return NextResponse.json({ error: 'courseId query required' }, { status: 400 })
  }

  const { data: modules } = await db.from('modules').select('id').eq('course_id', courseId)
  const moduleIds = (modules ?? []).map((m) => m.id as string)
  if (moduleIds.length === 0) {
    return NextResponse.json({
      totalLessons: 0,
      learners: [],
      summary: { enrolled: 0, avgCompletionPercent: 0 },
    })
  }

  const { data: lessons } = await db.from('lessons').select('id').in('module_id', moduleIds)
  const lessonIds = (lessons ?? []).map((l) => l.id as string)
  const totalLessons = lessonIds.length

  const { data: enrollments } = await db.from('enrollments').select('user_id, id').eq('course_id', courseId)
  const enrolledUserIds = [...new Set((enrollments ?? []).map((e) => e.user_id as string))]

  if (lessonIds.length === 0 || enrolledUserIds.length === 0) {
    return NextResponse.json({
      totalLessons: 0,
      learners: [],
      summary: { enrolled: enrolledUserIds.length, avgCompletionPercent: 0 },
    })
  }

  const { data: progressRows } = await db
    .from('lesson_progress')
    .select('user_id, lesson_id')
    .in('lesson_id', lessonIds)
    .in('user_id', enrolledUserIds)

  const lessonSet = new Set(lessonIds)
  const byUser = new Map<string, number>()
  for (const row of progressRows ?? []) {
    const uid = row.user_id as string
    const lid = row.lesson_id as string
    if (!lessonSet.has(lid)) continue
    byUser.set(uid, (byUser.get(uid) ?? 0) + 1)
  }

  const { data: profiles } =
    enrolledUserIds.length > 0
      ? await db.from('profiles').select('id, email, full_name').in('id', enrolledUserIds)
      : { data: [] as { id: string; email: string | null; full_name: string | null }[] }

  const profMap = new Map((profiles ?? []).map((p) => [p.id, p]))

  const learners = enrolledUserIds.map((userId) => {
    const done = byUser.get(userId) ?? 0
    const pct = totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0
    return {
      user_id: userId,
      completed_lessons: done,
      total_lessons: totalLessons,
      completion_percent: pct,
      profile: profMap.get(userId) ?? null,
    }
  })

  const avgCompletionPercent =
    learners.length > 0
      ? Math.round(learners.reduce((s, l) => s + l.completion_percent, 0) / learners.length)
      : 0

  return NextResponse.json({
    totalLessons,
    lessonIds,
    learners,
    summary: {
      enrolled: learners.length,
      avgCompletionPercent,
    },
  })
}
