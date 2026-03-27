import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { isValidSlug, normalizeSlug, parseSortOrder } from '@/lib/lms/validate'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const { data: course, error } = await db.from('courses').select('*').eq('id', id).single()
  if (error || !course) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const { data: modules } = await db
    .from('modules')
    .select('*, lessons(*, assignments(*), quizzes(*, quiz_questions(*)))')
    .eq('course_id', id)
    .order('sort_order', { ascending: true })

  const normalized = (modules ?? []).map((m) => {
    const lessons = [...((m.lessons as Record<string, unknown>[] | null) ?? [])]
      .sort((a, b) => (a.sort_order as number) - (b.sort_order as number))
      .map((les) => {
        const raw = (les as { assignments?: Record<string, unknown>[] }).assignments
        const assignments = [...(raw ?? [])].sort((x, y) => (x.sort_order as number) - (y.sort_order as number))
        const rawQz = (les as { quizzes?: Record<string, unknown>[] }).quizzes
        const quizzes = [...(rawQz ?? [])].map((qz) => {
          const qq = (qz as { quiz_questions?: Record<string, unknown>[] }).quiz_questions
          const quiz_questions = [...(qq ?? [])].sort((x, y) => (x.sort_order as number) - (y.sort_order as number))
          return { ...qz, quiz_questions }
        })
        return { ...les, assignments, quizzes }
      })
    return { ...m, lessons }
  })

  return NextResponse.json({ course, modules: normalized })
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  let body: { slug?: string; title?: string; description?: string | null; sort_order?: number; published?: boolean }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const updates: Record<string, unknown> = {}
  if (body.slug !== undefined) {
    const slug = normalizeSlug(body.slug)
    if (!isValidSlug(slug)) {
      return NextResponse.json({ error: 'Invalid slug' }, { status: 400 })
    }
    const { data: clash } = await db.from('courses').select('id').eq('slug', slug).neq('id', id).maybeSingle()
    if (clash) return NextResponse.json({ error: 'Slug already in use' }, { status: 409 })
    updates.slug = slug
  }
  if (body.title !== undefined) updates.title = body.title.trim()
  if (body.description !== undefined) updates.description = body.description?.trim() ?? null
  if (body.sort_order !== undefined) updates.sort_order = parseSortOrder(body.sort_order, 0)
  if (body.published !== undefined) updates.published = Boolean(body.published)

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }

  const { data, error } = await db.from('courses').update(updates).eq('id', id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ course: data })
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const { error } = await db.from('courses').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
