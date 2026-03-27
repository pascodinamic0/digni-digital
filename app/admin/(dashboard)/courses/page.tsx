import { redirect } from 'next/navigation'
import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'
import { CoursesListClient } from './courses-list-client'

export default async function AdminCoursesPage() {
  const db = await requireAdminWithServiceDb()
  const { data: rows } = await db.from('courses').select('id').order('sort_order', { ascending: true })

  if (rows?.length === 1) {
    redirect(`/admin/courses/${rows[0].id}`)
  }

  return (
    <div>
      <AdminPageHeader
        label="Learning"
        title="Your course"
        description="You run one program for clients. Set it up here: URL slug, modules, lessons, videos, and assignments. Changing the slug changes learner links—update bookmarks if you rename it."
      />
      <CoursesListClient />
    </div>
  )
}
