import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { ChangePasswordClient } from './change-password-client'

export default function AdminAccountPage() {
  return (
    <div>
      <AdminPageHeader
        label="Security"
        title="Account"
        description="Update your admin password. The app never stores your password in git—only Supabase Auth does."
      />
      <ChangePasswordClient />
    </div>
  )
}
