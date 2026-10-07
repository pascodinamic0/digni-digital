import Img from './Img'

export default function PageHead({ eyebrow, title, sub, img, children, imgPos }: {
  eyebrow: string; title: string; sub?: string; img?: string; children?: React.ReactNode; imgPos?: string
}) {
  return (
    <section className={`phead ${img ? 'phead--img' : ''}`}>
      {img && <div className="phead__bg" aria-hidden><Img name={img} alt="" priority sizes="100vw" style={imgPos ? { objectPosition: imgPos } : undefined} /></div>}
      <div className="wrap phead__in">
        <p className={`eyebrow ${img ? 'eyebrow--light' : ''} hero__a1`}>{eyebrow}</p>
        <h1 className="h1 hero__a2">{title}</h1>
        {sub && <p className="lead hero__a3">{sub}</p>}
        {children && <div className="phead__ctas hero__a4">{children}</div>}
      </div>
    </section>
  )
}
