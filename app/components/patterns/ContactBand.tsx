'use client'

import { ReactNode } from 'react'

type ContactBandProps = {
  title: string
  children: ReactNode
  email?: string
  phone?: string
  address?: string
}

export default function ContactBand({
  title,
  children,
  email,
  phone,
  address,
}: ContactBandProps) {
  return (
    <section id="contact-band" className="contact-band marketing-chapter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-index mb-3">10</p>
            <h2 className="editorial-headline">{title}</h2>
            <ul className="mt-6 space-y-3 type-body text-muted">
              {address && <li>{address}</li>}
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="text-accent hover:underline">
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-accent hover:underline">
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}
