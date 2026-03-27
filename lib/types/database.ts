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
  lms_welcome_video_seen_at?: string | null
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

export type EnrollmentStatus = 'pending' | 'active' | 'completed' | 'cancelled'

export type CourseRow = {
  id: string
  slug: string
  title: string
  description: string | null
  sort_order: number
  published?: boolean
  created_at: string
  updated_at: string
}

export type ModuleRow = {
  id: string
  course_id: string
  title: string
  sort_order: number
  created_at: string
}

export type LessonRow = {
  id: string
  module_id: string
  title: string
  body: string | null
  video_url: string | null
  video_storage_path?: string | null
  sort_order: number
  created_at: string
}

export type AssignmentRow = {
  id: string
  lesson_id: string
  title: string
  instructions: string | null
  sort_order: number
  created_at: string
}

export type AssignmentSubmissionRow = {
  id: string
  assignment_id: string
  user_id: string
  body: string
  submitted_at: string
  updated_at: string
}

export type EnrollmentRow = {
  id: string
  user_id: string
  course_id: string
  status: EnrollmentStatus
  invited_at: string | null
  enrolled_at: string
  last_activity_at?: string | null
}

export type QuizRow = {
  id: string
  lesson_id: string
  title: string
  pass_percent: number
  created_at: string
}

export type QuizQuestionRow = {
  id: string
  quiz_id: string
  prompt: string
  sort_order: number
  choice_a: string
  choice_b: string
  choice_c: string
  choice_d: string
  correct_index: number
}

export type QuizAttemptRow = {
  id: string
  quiz_id: string
  user_id: string
  score_percent: number
  passed: boolean
  answers: Record<string, number>
  created_at: string
}

export type LmsInviteRow = {
  id: string
  email: string
  course_id: string
  token_hash: string
  expires_at: string
  used_at: string | null
  revoked_at: string | null
  created_by: string | null
  created_at: string
}

export type LessonProgressRow = {
  user_id: string
  lesson_id: string
  completed_at: string
}
