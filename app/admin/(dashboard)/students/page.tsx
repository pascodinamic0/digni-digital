import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'
import { StudentsClient } from './students-client'

export default async function AdminStudentsPage() {
  const db = await requireAdminWithServiceDb()

  const { data: rows, error } = await db
    .from('enrollments')
    .select('id, user_id, status, enrolled_at, invited_at, last_activity_at, courses(id, title, slug)')
    .order('enrolled_at', { ascending: false })
    .limit(500)

  if (error) {
    return <p className="text-destructive">Failed to load enrollments.</p>
  }

  const userIds = [...new Set((rows ?? []).map((r) => r.user_id))]
  const { data: profiles } = await db.from('profiles').select('id, email, full_name').in('id', userIds)
  const profileById = new Map((profiles ?? []).map((p) => [p.id, p]))

  const students = (rows ?? []).map((r) => {
    const c = r.courses as { id: string; title: string; slug: string } | { id: string; title: string; slug: string }[] | null
    const course = Array.isArray(c) ? c[0] ?? null : c
    return {
      ...r,
      courses: course,
      profile: profileById.get(r.user_id) ?? null,
    }
  })

  return (
    <div>
      <header className="mb-8">
        <span className="section-label">Learning portal</span>
        <h1 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl">Students</h1>
        <p className="mt-2 max-w-2xl text-muted">Enrollments across all courses — status, activity, and quick links.</p>
      </header>
      <StudentsClient initialRows={students} />
    </div>
  )
}
