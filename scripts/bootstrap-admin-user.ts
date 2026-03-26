/**
 * One-time: create or update super admin with email + password.
 * Requires .env.local: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage:
 *   bun scripts/bootstrap-admin-user.ts
 *
 * Optional: ADMIN_BOOTSTRAP_PASSWORD="your-password" bun scripts/bootstrap-admin-user.ts
 *
 * Passwords are not stored in the repo. If you lost yours: set ADMIN_BOOTSTRAP_PASSWORD
 * and run again, or use Admin → Password after signing in with magic link + bootstrap once.
 */
import { createClient } from '@supabase/supabase-js'

const TARGET_EMAIL = 'pascal@digni-digital-llc.com'

function generatePassword(length = 22): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_'
  const bytes = new Uint8Array(length)
  crypto.getRandomValues(bytes)
  let s = ''
  for (let i = 0; i < length; i++) s += chars[bytes[i]! % chars.length]
  return s
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY (load .env.local or export them).')
    process.exit(1)
  }

  const password = process.env.ADMIN_BOOTSTRAP_PASSWORD?.trim() || generatePassword()
  const admin = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  const { data: list, error: listErr } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 })
  if (listErr) {
    console.error('listUsers:', listErr.message)
    process.exit(1)
  }

  const existing = list.users.find((u) => u.email?.toLowerCase() === TARGET_EMAIL.toLowerCase())
  let userId: string

  if (existing) {
    const { data, error } = await admin.auth.admin.updateUserById(existing.id, {
      password,
      email_confirm: true,
    })
    if (error || !data.user) {
      console.error('updateUser:', error?.message)
      process.exit(1)
    }
    userId = data.user.id
    console.log('Updated password for existing user:', TARGET_EMAIL)
  } else {
    const { data, error } = await admin.auth.admin.createUser({
      email: TARGET_EMAIL,
      password,
      email_confirm: true,
    })
    if (error || !data.user) {
      console.error('createUser:', error?.message)
      process.exit(1)
    }
    userId = data.user.id
    console.log('Created user:', TARGET_EMAIL)
  }

  const { error: upsertErr } = await admin.from('profiles').upsert(
    {
      id: userId,
      email: TARGET_EMAIL,
      full_name: TARGET_EMAIL.split('@')[0] ?? 'Admin',
      role: 'admin',
    },
    { onConflict: 'id' }
  )
  if (upsertErr) {
    console.warn('Could not upsert profiles row:', upsertErr.message)
    console.warn('Run migration SQL, then:')
    console.warn(`  insert into public.profiles (id, email, full_name, role) values ('${userId}', '${TARGET_EMAIL}', 'Admin', 'admin') on conflict (id) do update set role = 'admin';`)
  } else {
    console.log('profiles: upserted with role = admin')
  }

  console.log('')
  console.log('--- Super admin credentials ---')
  console.log('Email:   ', TARGET_EMAIL)
  console.log('Password:', password)
  console.log('')
  console.log('Sign in at /admin/login with Password tab.')
  console.log('Store this password in a password manager; do not commit it.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
