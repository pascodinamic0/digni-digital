import type { Metadata } from 'next'
import { ServiceAssessment } from '@/app/components/ServiceAssessment'
import { getServiceAssessmentConfig } from '@/lib/assessments'

const config = getServiceAssessmentConfig('future-ready')

export const metadata: Metadata = {
  title: config.copy.metaTitle,
  description: config.copy.metaDescription,
}

export default function FutureReadyAssessmentPage() {
  return <ServiceAssessment config={config} />
}
