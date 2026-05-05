/** Keys stored in `public.site_feature_flags.flag_key`. Safe to import from Client Components. */
export const SITE_FEATURE_FLAG_KEYS = {
  AI_EMPLOYEE_TASK_QUEUE_DEMO: 'ai_employee_show_task_queue_demo',
} as const

export type SiteFeatureFlagKey = (typeof SITE_FEATURE_FLAG_KEYS)[keyof typeof SITE_FEATURE_FLAG_KEYS]

export const SITE_FEATURE_FLAG_META: Record<
  SiteFeatureFlagKey,
  { label: string; description: string }
> = {
  [SITE_FEATURE_FLAG_KEYS.AI_EMPLOYEE_TASK_QUEUE_DEMO]: {
    label: 'Social planner demo (AI Employee page)',
    description:
      'The “Plan once. Post everywhere” TaskQueueDemo block on the AI Employee (/ai-receptionist) marketing page.',
  },
}
