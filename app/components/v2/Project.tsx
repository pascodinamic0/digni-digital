import Link from 'next/link'
import Img from './Img'
import type { Project, Status } from '@/content/v2/work'
import type { Dict } from '@/content/v2/dict/en'
import type { Lang } from '@/content/v2/locales'

export function StatusChip({ status, t }: { status: Status; t: Dict }) {
  return <span className={`chip chip--${status}`}><i aria-hidden />{t.status[status]}</span>
}

export function Shot({ p, sizes = '(max-width: 760px) 92vw, 640px', withPhone = true, priority = false, t }: {
  p: Project; sizes?: string; withPhone?: boolean; priority?: boolean; t?: Dict
}) {
  if (!p.img) {
    return (
      <div className="shot shot--text" role="img" aria-label={p.name}>
        <div className="shot__bar"><i /><i /><i /></div>
        <div className="shot__ph">
          {p.logo
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={p.logo} alt="" width={96} height={96} loading="lazy" className="shot__logo" />
            : <span className="shot__mark">{p.name}</span>}
          {p.textOnly && t && <small>{t.common.textOnly}</small>}
        </div>
      </div>
    )
  }
  return (
    <div className="shot">
      <div className="shot__bar"><i /><i /><i /><span>{p.url?.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span></div>
      <Img name={`${p.img}`} kind="desktop" alt={`${p.name} — desktop screen`} sizes={sizes} priority={priority} />
      {withPhone && p.phone && (
        <div className="shot__phone"><Img name={p.phone} kind="phone" alt={`${p.name} — phone screen`} sizes="160px" /></div>
      )}
    </div>
  )
}

export function ProjectCard({ p, t, lang, href, big = false, idx = 0 }: { p: Project; t: Dict; lang: Lang; href: string; big?: boolean; idx?: number }) {
  return (
    <article className={`pcard ${big ? 'pcard--big' : ''}`} data-reveal style={{ ['--d' as string]: `${idx * 70}ms` }}>
      <Link href={href} className="pcard__link" aria-label={`${t.common.readCase}: ${p.name}`} />
      <Shot p={p} t={t} withPhone={big} sizes={big ? '(max-width: 900px) 92vw, 720px' : '(max-width: 900px) 92vw, 460px'} />
      <div className="pcard__body">
        <div className="pcard__meta"><span className="pcard__sector">{t.sector[p.sector]}</span><StatusChip status={p.status} t={t} /></div>
        <h3>{p.name}</h3>
        <p className="pcard__client">{p.client[lang]}</p>
        <p className="pcard__sum">{p.summary[lang]}</p>
      </div>
    </article>
  )
}

export function MiniCard({ p, t, href, idx = 0 }: { p: Project; t: Dict; href: string; idx?: number }) {
  return (
    <Link href={href} className="mini" data-reveal style={{ ['--d' as string]: `${idx * 60}ms` }}>
      <div className="mini__img">
        {p.phone
          ? <Img name={p.phone} kind="phone" alt={`${p.name} — phone screen`} sizes="(max-width: 640px) 45vw, 220px" />
          : <div className="mini__ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {p.logo ? <img src={p.logo} alt="" width={88} height={88} loading="lazy" /> : null}
              <span>{p.name}</span>
            </div>}
      </div>
      <div className="mini__body"><b>{p.name}</b><StatusChip status={p.status} t={t} /><span>{t.sector[p.sector]}</span></div>
    </Link>
  )
}
