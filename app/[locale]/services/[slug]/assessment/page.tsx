import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceAssessment } from '@/app/components/ServiceAssessment'
import { getServiceAssessmentConfig } from '@/lib/assessments'
import { services, getService } from '@/content/v2/services'
import { langOf } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }

export const dynamicParams = false
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const s = getService(slug)
  if (!s) return {}
  const config = getServiceAssessmentConfig(s.assessment, langOf(locale))
  return pageMetadata({ locale, path: `/services/${slug}/assessment`, title: config.copy.metaTitle, description: config.copy.metaDescription })
}

export default async function AssessmentPage({ params }: Props) {
  const { locale, slug } = await params
  const s = getService(slug)
  if (!s) notFound()
  const config = getServiceAssessmentConfig(s.assessment, langOf(locale))
  return <div className="legacy legacy--assess"><ServiceAssessment config={config} /></div>
}
