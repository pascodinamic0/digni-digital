'use client'

import ClientJourneyDemo from '@/app/components/ClientJourneyDemo'
import ConversationMockups from '@/app/components/ConversationMockups'
import UnifiedInbox from '@/app/components/UnifiedInbox'
import LeadPipelineDemo from '@/app/components/LeadPipelineDemo'
import PerformancePulseDemo from '@/app/components/PerformancePulseDemo'
import TaskQueueDemo from '@/app/components/TaskQueueDemo'
import ContactDirectoryDemo from '@/app/components/ContactDirectoryDemo'
import AiReceptionistExplainerVideo from '@/app/components/AiReceptionistExplainerVideo'
import BusinessTimeline from '@/app/components/BusinessTimeline'
import JourneyDemosIntro from '@/app/components/JourneyDemosIntro'
import AiEmployeeProblemStatsSection from '@/app/components/AiEmployeeProblemStatsSection'

type Props = {
  showTaskQueueDemo: boolean
}

/**
 * Client journey demos (steps 1–6) — headers use each section’s badge/title + timeline phase.
 * Problem stats sit after the journey, before contrast sections.
 */
export default function AIReceptionistProductDemos({ showTaskQueueDemo }: Props) {
  return (
    <>
      <JourneyDemosIntro />
      <UnifiedInbox />
      <ConversationMockups />
      <ContactDirectoryDemo />
      <LeadPipelineDemo />
      <PerformancePulseDemo />

      <AiEmployeeProblemStatsSection />

      {showTaskQueueDemo ? <TaskQueueDemo /> : null}
      <ClientJourneyDemo />
      <AiReceptionistExplainerVideo />
      <BusinessTimeline />
    </>
  )
}
