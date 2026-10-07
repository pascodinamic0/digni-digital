import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { isSupabaseAnonConfigured } from '@/lib/supabase/config'

let cached: SupabaseClient | null = null

/**
 * Cookie-free anon client for public, cacheable reads (published blog posts,
 * sitemap). Unlike `tryCreateClient`, it never touches `cookies()`, so pages
 * using it can be statically rendered / revalidated (ISR).
 */
export function getPublicSupabase(): SupabaseClient | null {
  if (!isSupabaseAnonConfigured()) return null
  if (!cached) {
    cached = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!.trim(), process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!.trim(), {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  }
  return cached
}
