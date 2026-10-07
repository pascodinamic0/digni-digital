import type { Metadata } from 'next'
import PageHead from '@/app/components/v2/PageHead'
import GuideChat from '@/app/components/v2/GuideChat'
import { getDict, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale)
  return pageMetadata({ locale, path: '/digni', title: t.guide.title, description: `${t.guide.sub} ${t.products.guideSub}` })
}

export default async function DigniPage({ params }: Props) {
  const { locale, t } = await resolvePage(params)
  return (
    <>
      <PageHead eyebrow={t.products.groups.tools} title={t.products.guideTitle} sub={t.products.guideSub} />
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="gpage"><GuideChat locale={locale} variant="page" /></div>
        </div>
      </section>
    </>
  )
}
