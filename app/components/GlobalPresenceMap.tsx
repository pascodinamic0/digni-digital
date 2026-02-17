'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  officeLocations,
  OfficeLocation,
  formatFullAddress,
  getGoogleMapsUrl,
} from '@/app/data/locations'

interface GlobalPresenceMapProps {
  showToggle?: boolean
  initialExpanded?: boolean
}

function countryShort(country: string): string {
  if (country === 'United States') return 'USA'
  if (country === 'Democratic Republic of the Congo') return 'DRC'
  if (country === 'United Arab Emirates') return 'UAE'
  return country
}

export default function GlobalPresenceMap(_props: GlobalPresenceMapProps) {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {officeLocations.map((location, i) => (
          <motion.article
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card p-6 hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
          >
            {location.isPrimary && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-accent text-background text-xs font-semibold rounded-bl-lg">
                HQ
              </div>
            )}
            {location.isPrimaryInRegion && !location.isPrimary && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-success/90 text-background text-xs font-semibold rounded-bl-lg">
                Africa
              </div>
            )}

            <div className="flex items-start gap-4">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                  location.isPrimary ? 'bg-accent/10' : 'bg-success/10'
                }`}
              >
                {location.region === 'North America' && '🇺🇸'}
                {location.region === 'Africa' && location.id === 'kenya' && '🇰🇪'}
                {location.region === 'Africa' && location.id === 'congo-drc' && '🇨🇩'}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-lg mb-0.5">
                  {location.city}, {countryShort(location.country)}
                </h3>
                <p className="text-muted text-xs uppercase tracking-wider mb-3">
                  {location.region}
                </p>

                <p className="text-muted text-sm leading-relaxed mb-4">
                  {formatFullAddress(location)}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-4">
                  {location.email && (
                    <a
                      href={`mailto:${location.email}`}
                      className="text-accent hover:underline"
                    >
                      Email
                    </a>
                  )}
                  {location.phone && (
                    <a href={`tel:${location.phone}`} className="text-accent hover:underline">
                      Phone
                    </a>
                  )}
                </div>

                <a
                  href={getGoogleMapsUrl(location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                >
                  View on Map
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="text-center mt-8">
        <Link
          href="/contact"
          className="text-accent font-medium hover:underline inline-flex items-center gap-2"
        >
          Full contact details
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </p>
    </div>
  )
}
