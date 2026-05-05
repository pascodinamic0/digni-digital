import { AIReceptionistClient } from './ai-receptionist-client'
import { getSiteFeatureFlagEnabled, SITE_FEATURE_FLAG_KEYS } from '@/lib/site-feature-flags'

/** Always read latest feature flags (admin toggles) instead of a cached static render. */
export const dynamic = 'force-dynamic'

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
