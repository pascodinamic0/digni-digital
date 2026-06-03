'use client'

import ClientJourneyDemo from '@/app/components/ClientJourneyDemo'
import ConversationMockups from '@/app/components/ConversationMockups'
import UnifiedInbox from '@/app/components/UnifiedInbox'
import LeadPipelineDemo from '@/app/components/LeadPipelineDemo'
import CalendarBookingDemo from '@/app/components/CalendarBookingDemo'
import AdsManagerDemo from '@/app/components/AdsManagerDemo'
import PerformancePulseDemo from '@/app/components/PerformancePulseDemo'
import TaskQueueDemo from '@/app/components/TaskQueueDemo'
import ContactDirectoryDemo from '@/app/components/ContactDirectoryDemo'
import BusinessTimeline from '@/app/components/BusinessTimeline'
import JourneyDemosIntro from '@/app/components/JourneyDemosIntro'
import AiEmployeeTimeToValueSection from '@/app/components/AiEmployeeTimeToValueSection'

type Props = {
  showTaskQueueDemo: boolean
}

type PainDreamProps = {
  /** When false, only time-to-value (hero follow-up). When true, only leak-vs-loop (after proof). */
  showLeakVsLoop?: boolean
}

/** Time-to-value before proof; leak-vs-loop after proof when showLeakVsLoop. */
export function AIReceptionistPainDreamDemos({ showLeakVsLoop = true }: PainDreamProps) {
  if (showLeakVsLoop) {
    return <ClientJourneyDemo prominent />
  }
  return <AiEmployeeTimeToValueSection />
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
      <AIReceptionistPainDreamDemos showLeakVsLoop={false} />
      <AIReceptionistPainDreamDemos showLeakVsLoop />
      <AIReceptionistHowItWorksDemos showTaskQueueDemo={showTaskQueueDemo} />
    </>
  )
}
