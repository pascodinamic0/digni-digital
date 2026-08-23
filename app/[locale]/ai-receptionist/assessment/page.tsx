import type { Metadata } from 'next'
import { ServiceAssessment } from '@/app/components/ServiceAssessment'
import { getServiceAssessmentConfig } from '@/lib/assessments'
import { getLanguageFromLocale } from '@/i18n/routing'
import type { Language } from '@/app/i18n/translations'

function languageFromLocale(locale: string): Language {
  const language = getLanguageFromLocale(locale)
  if (language === 'fr' || language === 'ar' || language === 'de' || language === 'es') {
    return language
  }
  return 'en'
}

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const config = getServiceAssessmentConfig('ai-employee', languageFromLocale(locale))
  return {
    title: config.copy.metaTitle,
    description: config.copy.metaDescription,
  }
}

export default async function AIEmployeeAssessmentPage({ params }: PageProps) {
  const { locale } = await params
  const config = getServiceAssessmentConfig('ai-employee', languageFromLocale(locale))
  return <ServiceAssessment config={config} />
}
