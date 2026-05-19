import type { Metadata } from 'next'
import { ServiceAssessment } from '@/app/components/ServiceAssessment'
import { getServiceAssessmentConfig } from '@/lib/assessments'

const config = getServiceAssessmentConfig('ai-employee')

export const metadata: Metadata = {
  title: config.copy.metaTitle,
  description: config.copy.metaDescription,
}

export default function AIEmployeeAssessmentPage() {
  return <ServiceAssessment config={config} />
}
