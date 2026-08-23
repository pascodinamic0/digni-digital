'use client'

type ProofQuoteProps = {
  quote: string
  name: string
  role: string
  note?: string
  className?: string
}

export default function ProofQuote({ quote, name, role, note, className = '' }: ProofQuoteProps) {
  return (
    <figure className={`marketing-simple ${className}`}>
      <blockquote className="type-body-large max-w-3xl leading-relaxed text-text/90">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4">
        <p className="type-body font-semibold text-text">{name}</p>
        <p className="type-small text-muted">{role}</p>
        {note ? <p className="type-small mt-1 text-muted/80">{note}</p> : null}
      </figcaption>
    </figure>
  )
}
