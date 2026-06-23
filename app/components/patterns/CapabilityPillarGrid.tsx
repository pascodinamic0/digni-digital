import { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'

export type CapabilityPillar = {
  title: string
  description: string
  href?: string
  icon?: ReactNode
}

type CapabilityPillarGridProps = {
  pillars: CapabilityPillar[]
}

export default function CapabilityPillarGrid({ pillars }: CapabilityPillarGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => {
        const inner = (
          <>
            {pillar.icon && <div className="mb-4 text-accent">{pillar.icon}</div>}
            <h3 className="type-h4 font-display font-bold text-text">{pillar.title}</h3>
            <p className="type-body mt-2 text-muted leading-relaxed">{pillar.description}</p>
          </>
        )

        if (pillar.href) {
          return (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="capability-pillar block"
            >
              {inner}
            </Link>
          )
        }

        return (
          <div key={pillar.title} className="capability-pillar">
            {inner}
          </div>
        )
      })}
    </div>
  )
}
