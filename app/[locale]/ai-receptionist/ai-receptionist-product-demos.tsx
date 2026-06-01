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

/** Starving crowd: Leak vs Loop first, then 60% pain stats. */
export function AIReceptionistPainDreamDemos() {
  return (
    <>
      <ClientJourneyDemo prominent />
      <AiEmployeeProblemStatsSection />
    </>
  )
}

/** Speed & effort minimization: product demos after proof. */
export function AIReceptionistHowItWorksDemos({ showTaskQueueDemo }: Props) {
  return (
    <>
      <JourneyDemosIntro />
      <UnifiedInbox />
      <ConversationMockups />
      <ContactDirectoryDemo />
      <LeadPipelineDemo />
      <PerformancePulseDemo />
      {showTaskQueueDemo ? <TaskQueueDemo /> : null}
      <AiReceptionistExplainerVideo />
      <BusinessTimeline />
    </>
  )
}

/** @deprecated Use AIReceptionistPainDreamDemos + AIReceptionistHowItWorksDemos */
export default function AIReceptionistProductDemos({ showTaskQueueDemo }: Props) {
  return (
    <>
      <AIReceptionistPainDreamDemos />
      <AIReceptionistHowItWorksDemos showTaskQueueDemo={showTaskQueueDemo} />
    </>
  )
}
