import type { SupabaseClient, User } from '@supabase/supabase-js'

/** Finds an auth user by email (paginated list; fine for MVP-sized directories). */
export async function findAuthUserByEmail(admin: SupabaseClient, email: string): Promise<User | null> {
  const e = email.trim().toLowerCase()
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 500 })
    if (error) throw new Error(error.message)
    const u = data.users.find((x) => x.email?.toLowerCase() === e)
    if (u) return u
    if (data.users.length < 500) break
  }
  return null
}
