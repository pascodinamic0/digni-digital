import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'
import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { AffiliatesClient } from './affiliates-client'

export default async function AffiliatesAdminPage() {
  const db = await requireAdminWithServiceDb()
  const { data: rows, error } = await db
    .from('affiliate_applications')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <p className="text-destructive">
        Could not load affiliate applications: {error.message}. If the table is missing, run the latest Supabase migration.
      </p>
    )
  }

  return (
    <div>
      <AdminPageHeader
        label="Pipeline"
        title="Affiliate applications"
        description="Submissions from the public affiliate form. Export to CSV and open in Excel for reporting."
      />
      <AffiliatesClient initialRows={rows ?? []} />
    </div>
  )
}
