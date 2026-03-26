import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'
import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { ApplicationsClient } from './applications-client'

export default async function ApplicationsPage() {
  const db = await requireAdminWithServiceDb()
  const { data: rows, error } = await db
    .from('program_applications')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <p className="text-destructive">Could not load applications: {error.message}</p>
  }

  return (
    <div>
      <AdminPageHeader
        label="Pipeline"
        title="Program applications"
        description="Future Ready / Early Access — verify WhatsApp payment, then send the LMS invite."
      />
      <ApplicationsClient initialRows={rows ?? []} />
    </div>
  )
}
