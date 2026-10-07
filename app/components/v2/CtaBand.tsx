import Img from './Img'
import { LINKS } from '@/content/v2/locales'

export default function CtaBand({ title, sub, book, whatsapp, img = 'kinshasa-river', children }: {
  title: string; sub: string; book: string; whatsapp: string; img?: string; children?: React.ReactNode
}) {
  return (
    <section className="cta">
      <div className="cta__bg" aria-hidden><Img name={img} alt="" sizes="100vw" /></div>
      <div className="wrap cta__in" data-reveal>
        <h2 className="h2">{title}</h2>
        <p className="lead">{sub}</p>
        <div className="hero__ctas">
          <a className="btn btn--accent btn--lg" href={LINKS.booking} target="_blank" rel="noopener noreferrer">{book}<span className="arr" aria-hidden>→</span></a>
          <a className="btn btn--ghost-light btn--lg" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">{whatsapp}</a>
          {children}
        </div>
      </div>
    </section>
  )
}
