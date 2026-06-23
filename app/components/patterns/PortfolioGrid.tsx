import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export type PortfolioItem = {
  title: string
  category?: string
  href: string
  imageSrc?: string
  imageAlt?: string
}

type PortfolioGridProps = {
  items: PortfolioItem[]
  viewLabel?: string
}

export function PortfolioTile({
  item,
  viewLabel = 'VIEW',
}: {
  item: PortfolioItem
  viewLabel?: string
}) {
  return (
    <Link href={item.href} className="portfolio-tile group p-5 sm:p-6">
      {item.imageSrc && (
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-md bg-surface-light">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      {item.category && (
        <p className="type-caption uppercase tracking-wider text-muted mb-2">{item.category}</p>
      )}
      <h3 className="type-h4 font-display font-bold text-text">{item.title}</h3>
      <span className="view-link mt-4 group-hover:text-accent transition-colors">
        {viewLabel} <span aria-hidden>&gt;</span>
      </span>
    </Link>
  )
}

export default function PortfolioGrid({ items, viewLabel }: PortfolioGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <PortfolioTile key={item.href} item={item} viewLabel={viewLabel} />
      ))}
    </div>
  )
}
