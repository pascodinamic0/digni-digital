/** Vercel serverless body limit ~4.5MB — keep uploads safely under */
export const CAREER_MAX_FILE_BYTES = 2 * 1024 * 1024
export const CAREER_MAX_TOTAL_BYTES = 3.5 * 1024 * 1024

export const CAREER_ROLE_IDS = ['va', 'designer', 'general'] as const
export type CareerRoleId = (typeof CAREER_ROLE_IDS)[number]

export const CAREER_ROLE_LABEL: Record<CareerRoleId, string> = {
  va: 'Virtual Assistant',
  designer: 'Graphic Designer',
  general: 'Open application',
}

export const CV_ACCEPT =
  'application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx'
