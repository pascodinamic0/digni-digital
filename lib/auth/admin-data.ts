import { requireAdmin } from '@/lib/auth/require-admin'
import { createAdminClient } from '@/lib/supabase/admin'

/**
 * After session + admin gate (including ADMIN_EMAILS), returns a service-role client so
 * server-rendered admin pages can read/write CRM and other RLS-protected tables.
 */
export async function requireAdminWithServiceDb() {
  await requireAdmin()
  return createAdminClient()
}
