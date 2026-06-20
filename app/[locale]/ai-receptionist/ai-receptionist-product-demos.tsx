'use client'

import ClientJourneyDemo from '@/app/components/ClientJourneyDemo'
import ConversationMockups from '@/app/components/ConversationMockups'
import LeadPipelineDemo from '@/app/components/LeadPipelineDemo'
import CalendarBookingDemo from '@/app/components/CalendarBookingDemo'
import AdsManagerDemo from '@/app/components/AdsManagerDemo'
import PerformancePulseDemo from '@/app/components/PerformancePulseDemo'
import TaskQueueDemo from '@/app/components/TaskQueueDemo'
import ContactDirectoryDemo from '@/app/components/ContactDirectoryDemo'
import BusinessTimeline from '@/app/components/BusinessTimeline'
import JourneyDemosIntro from '@/app/components/JourneyDemosIntro'
type Props = {
  showTaskQueueDemo: boolean
}

/** Leaky bucket vs growth loop contrast (after product demos). */
export function AIReceptionistPainDreamDemos() {
  return <ClientJourneyDemo prominent />
}

/** Speed & effort minimization: product demos after proof. */
export function AIReceptionistHowItWorksDemos({ showTaskQueueDemo }: Props) {
  return (
    <>
      <JourneyDemosIntro />
      <ConversationMockups />
      <ContactDirectoryDemo />
      <LeadPipelineDemo />
      <CalendarBookingDemo />
      {showTaskQueueDemo ? <TaskQueueDemo /> : null}
      <AdsManagerDemo />
      <PerformancePulseDemo />
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
