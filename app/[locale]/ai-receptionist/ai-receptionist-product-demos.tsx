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
import { DemoReverseProvider } from '@/app/components/software/DemoReverseContext'

type Props = {
  showTaskQueueDemo: boolean
}

type DemoEntry = {
  key: string
  render: () => React.ReactNode
}

/** Leaky bucket vs growth loop contrast (after product demos). */
export function AIReceptionistPainDreamDemos() {
  return <ClientJourneyDemo prominent />
}

/** Speed & effort minimization: product demos after proof. */
export function AIReceptionistHowItWorksDemos({ showTaskQueueDemo }: Props) {
  const demos: DemoEntry[] = [
    { key: 'conversations', render: () => <ConversationMockups /> },
    { key: 'contacts', render: () => <ContactDirectoryDemo /> },
    { key: 'pipeline', render: () => <LeadPipelineDemo /> },
    { key: 'calendar', render: () => <CalendarBookingDemo /> },
    ...(showTaskQueueDemo ? [{ key: 'tasks', render: () => <TaskQueueDemo /> }] : []),
    { key: 'ads', render: () => <AdsManagerDemo /> },
    { key: 'performance', render: () => <PerformancePulseDemo /> },
    { key: 'timeline', render: () => <BusinessTimeline /> },
  ]

  return (
    <>
      <JourneyDemosIntro />
      {demos.map((demo, index) => (
        <DemoReverseProvider key={demo.key} reverse={index % 2 === 1}>
          {demo.render()}
        </DemoReverseProvider>
      ))}
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
