import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { isValidSlug, normalizeSlug, parseSortOrder } from '@/lib/lms/validate'

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  const { data: courses, error } = await db.from('courses').select('*').order('sort_order', { ascending: true })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const { data: modules } = await db.from('modules').select('course_id')
  const { data: enrollments } = await db.from('enrollments').select('course_id')

  const modCount = new Map<string, number>()
  const encCount = new Map<string, number>()
  for (const m of modules ?? []) {
    const id = m.course_id as string
    modCount.set(id, (modCount.get(id) ?? 0) + 1)
  }
  for (const e of enrollments ?? []) {
    const id = e.course_id as string
    encCount.set(id, (encCount.get(id) ?? 0) + 1)
  }

  const rows = (courses ?? []).map((c) => ({
    ...c,
    module_count: modCount.get(c.id) ?? 0,
    enrollment_count: encCount.get(c.id) ?? 0,
  }))

  return NextResponse.json({ courses: rows })
}

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  let body: { slug?: string; title?: string; description?: string | null; sort_order?: number; published?: boolean }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const slug = normalizeSlug(body.slug ?? '')
  if (!isValidSlug(slug)) {
    return NextResponse.json({ error: 'Invalid slug (use lowercase letters, numbers, hyphens)' }, { status: 400 })
  }
  if (!body.title?.trim()) {
    return NextResponse.json({ error: 'title required' }, { status: 400 })
  }

  const { data: clash } = await db.from('courses').select('id').eq('slug', slug).maybeSingle()
  if (clash) {
    return NextResponse.json({ error: 'Slug already in use' }, { status: 409 })
  }

  const { data, error } = await db
    .from('courses')
    .insert({
      slug,
      title: body.title.trim(),
      description: body.description?.trim() ?? null,
      sort_order: parseSortOrder(body.sort_order, 0),
      published: body.published !== false,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ course: data })
}
