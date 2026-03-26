import type { ReactNode } from 'react'
import { requireAdmin } from '@/lib/auth/require-admin'
import { AdminShell } from '@/app/admin/components/AdminShell'

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  await requireAdmin()

  return <AdminShell>{children}</AdminShell>
}
