import { Link } from '@/i18n/navigation'

export type InsightCard = {
  title: string
  excerpt: string
  href: string
}

type InsightCardRowProps = {
  cards: InsightCard[]
  readMoreLabel?: string
}

export default function InsightCardRow({ cards, readMoreLabel = 'Read' }: InsightCardRowProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="capability-pillar block h-full"
        >
          <h3 className="type-h4 font-display font-bold text-text line-clamp-2">{card.title}</h3>
          <p className="type-body mt-3 text-muted line-clamp-3">{card.excerpt}</p>
          <span className="view-link mt-5 inline-flex">{readMoreLabel} &gt;</span>
        </Link>
      ))}
    </div>
  )
}
