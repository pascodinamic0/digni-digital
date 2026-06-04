'use client'

type SectionHeadingProps = {
  label?: string
  title: string
  titleHighlight?: string
  supporting?: string
  align?: 'left' | 'center'
  className?: string
  id?: string
}

export default function SectionHeading({
  label,
  title,
  titleHighlight,
  supporting,
  align = 'left',
  className = '',
  id,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`} id={id}>
      {label ? <span className="section-label mb-3 inline-block">{label}</span> : null}
      <h2 className="type-h2 font-display font-bold text-text">
        {title}
        {titleHighlight ? (
          <>
            <br />
            <span className="gradient-text-brand">{titleHighlight}</span>
          </>
        ) : null}
      </h2>
      {supporting ? (
        <p className="type-body mt-3 max-w-2xl text-muted leading-relaxed">{supporting}</p>
      ) : null}
    </div>
  )
}
