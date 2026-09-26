'use client'

import Image from 'next/image'
import { clients } from '@/app/config/clients.config'

/** Named partners only — real logos, no generated art. */
export default function ClientLogosProofVisual() {
  const featured = clients.filter((c) =>
    ['Fremo Medical & Birth Center', 'Shep Engineering', 'GS Laricharde Sarl', 'Pepea', 'Precision'].includes(c.name)
  )

  return (
    <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:gap-4 sm:p-6">
      {featured.map((client) => (
        <div
          key={client.name}
          className="flex min-h-[72px] items-center justify-center rounded-xl border border-border bg-background/80 px-3 py-4"
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={client.w}
            height={client.h}
            className="h-auto max-h-10 w-auto max-w-[120px] object-contain opacity-90"
          />
        </div>
      ))}
    </div>
  )
}
