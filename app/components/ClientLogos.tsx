'use client'

import Image from 'next/image'

const clients = [
  { name: 'Africa Vibe Coders', logo: '/clients/africa-vibe-coders.png', w: 150, h: 100 },
  { name: 'Alignment Press', logo: '/clients/alignment-press.jpeg', w: 160, h: 88 },
  { name: 'Amahindura', logo: '/clients/amahindura.png', w: 160, h: 70 },
  { name: 'CNRD', logo: '/clients/cnrd.png', w: 100, h: 100 },
  { name: 'Chosen Arrow Foundation', logo: '/clients/chosen-arrow-foundation.jpg', w: 110, h: 110 },
  { name: 'DeineWeb', logo: '/clients/deineweb.png', w: 200, h: 36 },
  { name: 'Fremo Medical & Birth Center', logo: '/clients/fremo-medical.jpg', w: 110, h: 110 },
  { name: 'GS Laricharde Sarl', logo: '/clients/laricharde-sarl.png', w: 110, h: 110 },
  { name: 'Pepea', logo: '/clients/pepea.jpeg', w: 110, h: 105 },
  { name: 'Precision', logo: '/clients/precision.png', w: 200, h: 52 },
  { name: 'Rural Digital', logo: '/clients/rural-digital.jpeg', w: 110, h: 110 },
  { name: 'Scorpion Control Project', logo: '/clients/scorpion-control-project.jpeg', w: 110, h: 110 },
  { name: 'Shep Engineering', logo: '/clients/shep-engineering.jpg', w: 110, h: 110 },
  { name: 'Smart Football Academy', logo: '/clients/smart-football-academy.png', w: 130, h: 105 },
  { name: 'Turi Furniture', logo: '/clients/turi-furniture.png', w: 170, h: 75 },
  { name: 'Yeda', logo: '/clients/yeda.jpeg', w: 110, h: 110 },
  { name: 'GlamSquad Kenya', logo: '/clients/glamsquad-kenya.jpeg', w: 110, h: 110 },
  { name: 'FRM', logo: '/clients/frm.png', w: 140, h: 90 },
  { name: 'The Owner Agency', logo: '/clients/the-owner-agency.jpeg', w: 140, h: 112 },
  { name: 'Artistic', logo: '/clients/artistic.webp', w: 65, h: 120 },
]

interface ClientLogosProps {
  title?: string
  subtitle?: string
}

export default function ClientLogos({ title = 'Trusted by businesses across the globe', subtitle }: ClientLogosProps) {
  const doubled = [...clients, ...clients]

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        {title && (
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-text">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-muted text-sm md:text-base">{subtitle}</p>
        )}
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left items-center" style={{ height: '140px' }}>
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-10 flex items-center justify-center"
            >
              <div
                className="relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                style={{ width: client.w, height: client.h }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes={`${client.w}px`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
