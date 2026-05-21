import { AIReceptionistClient } from './ai-receptionist-client'
import { getSiteFeatureFlagEnabled, SITE_FEATURE_FLAG_KEYS } from '@/lib/site-feature-flags'

/** Revalidate feature flags from Supabase without blocking every request (see site-feature-flags cache). */
export const revalidate = 60

type AIReceptionistPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function AIReceptionistPage({ params, searchParams }: AIReceptionistPageProps) {
  const showTaskQueueDemo = await getSiteFeatureFlagEnabled(SITE_FEATURE_FLAG_KEYS.AI_EMPLOYEE_TASK_QUEUE_DEMO)
  return (
    <AIReceptionistClient
      params={params}
      searchParams={searchParams}
      showTaskQueueDemo={showTaskQueueDemo}
    />
  )
}
