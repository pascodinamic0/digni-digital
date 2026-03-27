import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'
import { InvitesClient } from './invites-client'

export default async function AdminInvitesPage() {
  const db = await requireAdminWithServiceDb()

  const { data: invites, error } = await db
    .from('lms_invites')
    .select('id, email, course_id, expires_at, used_at, revoked_at, created_at')
    .order('created_at', { ascending: false })
    .limit(200)

  if (error) {
    return <p className="text-destructive">Failed to load invites.</p>
  }

  const courseIds = [...new Set((invites ?? []).map((i) => i.course_id))]
  const { data: courses } = await db.from('courses').select('id, title, slug').in('id', courseIds)
  const courseById = new Map((courses ?? []).map((c) => [c.id, c]))

  const rows = (invites ?? []).map((inv) => ({
    ...inv,
    course: courseById.get(inv.course_id) ?? null,
  }))

  return (
    <div>
      <header className="mb-8">
        <span className="section-label">Learning portal</span>
        <h1 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl">Invites</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Custom invite links (Resend). Pending until used or expired. Create invites from each course’s Enrollments tab.
        </p>
      </header>
      <InvitesClient initialRows={rows} />
    </div>
  )
}
