import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'digni' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    openGraph: { title: t('metaTitle'), description: t('metaDescription') },
  }
}

export default function DigniLayout({ children }: { children: React.ReactNode }) {
  return children
}
