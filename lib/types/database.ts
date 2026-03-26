/** Minimal row types for app code; expand after generating from Supabase CLI */

export type ApplicationStatus =
  | 'submitted'
  | 'payment_pending'
  | 'payment_verified'
  | 'invited'
  | 'enrolled'
  | 'rejected'

export type ProgramApplicationRow = {
  id: string
  first_name: string
  last_name: string
  email: string
  whatsapp: string
  profession: string
  why_join: string
  commit_ready: string
  paid_program: string
  locale: string
  status: ApplicationStatus
  admin_notes: string | null
  verified_by: string | null
  invited_user_id: string | null
  created_at: string
  updated_at: string
}

export type ProfileRow = {
  id: string
  email: string | null
  full_name: string | null
  role: 'student' | 'admin' | 'staff'
  created_at: string
  updated_at: string
}

export type AffiliateApplicationRow = {
  id: string
  name: string
  email: string
  phone: string | null
  instagram: string | null
  tiktok: string | null
  youtube: string | null
  audience_size: string | null
  message: string | null
  locale: string
  created_at: string
}
