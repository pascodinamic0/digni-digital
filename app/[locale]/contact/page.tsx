import type { Metadata } from 'next'
import PageHead from '@/app/components/v2/PageHead'
import ContactForm from '@/app/components/v2/ContactForm'
import JsonLd from '@/app/components/v2/JsonLd'
import { LINKS, SITE_URL } from '@/content/v2/locales'
import { getDict, resolvePage } from '@/content/v2/get'
import { pageMetadata } from '@/content/v2/seo'
import { officeLocations, formatFullAddress, getGoogleMapsUrl } from '@/app/data/locations'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getDict(locale)
  return pageMetadata({ locale, path: '/contact', title: t.meta.contact.title, description: t.meta.contact.desc })
}

export default async function ContactPage({ params }: Props) {
  const { locale, t } = await resolvePage(params)
  const c = t.contact
  const order = ['congo-drc', 'kenya', 'usa'] as const
  const offices = order.map((id) => officeLocations.find((o) => o.id === id)!).filter(Boolean)
  const label = { 'congo-drc': [c.offices.kinshasa, c.officeRoles.kinshasa], kenya: [c.offices.nairobi, c.officeRoles.nairobi], usa: [c.offices.sheridan, c.officeRoles.sheridan] } as const
  const ld = {
    '@context': 'https://schema.org', '@type': 'ContactPage', url: `${SITE_URL}/${locale}/contact`,
    mainEntity: {
      '@id': `${SITE_URL}/#organization`, '@type': 'Organization', name: 'Digni Digital LLC', email: LINKS.email, telephone: LINKS.phoneDrc,
      contactPoint: [
        { '@type': 'ContactPoint', telephone: LINKS.phoneDrc, contactType: 'customer service', areaServed: 'CD', availableLanguage: ['English', 'French', 'Swahili', 'Lingala'] },
        { '@type': 'ContactPoint', telephone: LINKS.phoneKenya, contactType: 'customer service', areaServed: 'KE' },
      ],
    },
  }
  const formT = { name: c.name, org: c.org, email: c.email, service: c.service, message: c.message, send: c.send, sending: c.sending, sent: c.sent, error: c.error, privacy: c.privacy, options: c.serviceOptions }
  return (
    <>
      <JsonLd data={ld} />
      <PageHead eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
      <section className="sec sec--tight">
        <div className="wrap split split--contact">
          <div>
            <ul className="ways">
              <li><a href={LINKS.booking} target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></svg>
                <div><b>{c.book}</b><span>{c.bookSub}</span></div><i aria-hidden>↗</i></a></li>
              <li><a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden><path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.1-4.2A8.5 8.5 0 1 1 20.5 12z" /><path d="M9 9.5c.3 2 2.2 4.2 4.6 5l1.2-1.2 1.7.8-.4 1.5c-3.7.3-7.4-3.3-7.6-6.9l1.5-.4.8 1.7z" /></svg>
                <div><b>{c.wa} · <span dir="ltr">{LINKS.whatsappLabel}</span></b><span>{c.waSub}</span></div><i aria-hidden>↗</i></a></li>
              <li><a href={`mailto:${LINKS.email}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                <div><b dir="ltr">{LINKS.email}</b><span>{c.mailSub}</span></div><i aria-hidden>→</i></a></li>
            </ul>
            <h2 className="h3">{c.officesTitle}</h2>
            <ul className="officecards">
              {offices.map((o) => {
                const [name, role] = label[o.id as keyof typeof label]
                return (
                  <li key={o.id} data-reveal>
                    <div><b>{name}</b><span className="officecards__role">{role}</span></div>
                    <p dir="ltr">{formatFullAddress(o)}</p>
                    <div className="officecards__links">
                      {o.phone && <a href={`tel:${o.phone.replace(/\s/g, '')}`} dir="ltr">{o.id === 'kenya' ? LINKS.phoneKenyaLabel : LINKS.phoneDrcLabel}</a>}
                      <a href={getGoogleMapsUrl(o)} target="_blank" rel="noopener noreferrer">{c.directions} ↗</a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="formcard" data-reveal>
            <div><h2 className="h3">{c.formTitle}</h2><p className="muted">{c.formSub}</p></div>
            <ContactForm t={formT} />
          </div>
        </div>
      </section>
    </>
  )
}
