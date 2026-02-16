'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import { officeLocations, OfficeLocation, formatFullAddress, getGoogleMapsUrl } from '@/app/data/locations'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

interface GlobalPresenceMapProps {
  showToggle?: boolean
  initialExpanded?: boolean
}

/* ── Pulsing ring keyframes (injected once via <style>) ── */
const pulseKeyframes = `
@keyframes map-ping {
  0%   { r: 6;  opacity: 0.7; }
  70%  { r: 18; opacity: 0; }
  100% { r: 18; opacity: 0; }
}
`

/* ── Interactive world map with office markers ── */
const WorldMap = ({
  selectedLocation,
  onSelect,
}: {
  selectedLocation: OfficeLocation | null
  onSelect: (location: OfficeLocation) => void
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <>
      {/* inject keyframes once */}
      <style>{pulseKeyframes}</style>

      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 155, center: [10, 5] }}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      >
        {/* Country shapes */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rpigeographyid ?? geo.properties?.name ?? geo.id}
                geography={geo}
                fill="rgba(var(--accent-rgb), 0.25)"
                stroke="rgba(var(--accent-rgb), 0.45)"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover:   { outline: 'none', fill: 'rgba(var(--accent-rgb), 0.35)' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* Graticule-style grid (optional subtle lines are baked into the map data) */}

        {/* Office markers */}
        {officeLocations.map((loc) => {
          const isSelected = selectedLocation?.id === loc.id
          const isHovered  = hoveredId === loc.id
          const color      = loc.isPrimary ? 'var(--accent)' : 'var(--success)'

          return (
            <Marker
              key={loc.id}
              coordinates={[loc.coordinates.lng, loc.coordinates.lat]}
            >
              {/* Pulsing ring */}
              <circle
                r={6}
                fill="none"
                stroke={color}
                strokeWidth={2}
                style={{
                  animation: 'map-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                }}
              />

              {/* Main dot */}
              <circle
                r={isSelected ? 7 : 5}
                fill={color}
                stroke="var(--foreground)"
                strokeWidth={2}
                style={{
                  cursor: 'pointer',
                  transition: 'r 0.2s ease, fill 0.2s ease',
                  filter: isSelected || isHovered ? 'drop-shadow(0 0 6px rgba(var(--accent-rgb), 0.6))' : 'none',
                }}
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelect(loc)}
              />

              {/* City label */}
              {(isHovered || isSelected) && (
                <g>
                  <rect
                    x={-loc.city.length * 3.5 - 6}
                    y={-26}
                    width={loc.city.length * 7 + 12}
                    height={18}
                    rx={4}
                    fill="rgba(var(--surface-rgb), 0.92)"
                    stroke="rgba(var(--accent-rgb), 0.35)"
                    strokeWidth={1}
                  />
                  <text
                    textAnchor="middle"
                    y={-13}
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      fill: 'var(--text)',
                    }}
                  >
                    {loc.city}
                  </text>
                </g>
              )}
            </Marker>
          )
        })}
      </ComposableMap>
    </>
  )
}

interface LocationCardProps {
  location: OfficeLocation
  isSelected: boolean
  onSelect: (location: OfficeLocation) => void
}

const LocationCard = ({ location, isSelected, onSelect }: LocationCardProps) => {
  return (
    <motion.div
      className={`card p-4 cursor-pointer transition-all duration-300 ${
        isSelected ? 'border-accent/50 bg-accent/5' : 'hover:border-accent/30'
      }`}
      onClick={() => onSelect(location)}
      whileHover={{ y: -2 }}
      layout
    >
      <div className="flex items-start gap-3">
        <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
          location.isPrimary ? 'bg-accent' : 'bg-success'
        }`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-display font-semibold text-sm truncate">
              {location.city}, {location.country}
            </h4>
            {location.isPrimary && (
              <span className="px-1.5 py-0.5 bg-accent/10 text-accent text-[10px] font-medium rounded">
                HQ
              </span>
            )}
          </div>
          <p className="text-muted text-xs truncate">{location.region}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface LocationDetailsProps {
  location: OfficeLocation
  onClose: () => void
}

const LocationDetails = ({ location, onClose }: LocationDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="card p-6 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-muted hover:text-text transition-colors"
        aria-label="Close details"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-4 h-4 rounded-full ${location.isPrimary ? 'bg-accent' : 'bg-success'}`} />
        <div>
          <h3 className="font-display text-xl font-bold">
            {location.city}, {location.country}
          </h3>
          <p className="text-muted text-sm">{location.region}</p>
        </div>
        {location.isPrimary && (
          <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded ml-auto">
            Headquarters
          </span>
        )}
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm text-muted">{formatFullAddress(location)}</p>
        </div>
        
        {location.email && (
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${location.email}`} className="text-sm text-accent hover:underline">
              {location.email}
            </a>
          </div>
        )}
        
        {location.phone && (
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${location.phone}`} className="text-sm text-accent hover:underline">
              {location.phone}
            </a>
          </div>
        )}
        
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-muted">{location.timezone}</p>
        </div>
      </div>
      
      <a
        href={getGoogleMapsUrl(location)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary w-full text-sm"
      >
        View on Google Maps
      </a>
    </motion.div>
  )
}

export default function GlobalPresenceMap({ showToggle = true, initialExpanded = false }: GlobalPresenceMapProps) {
  const [isExpanded, setIsExpanded] = useState(initialExpanded)
  const [selectedLocation, setSelectedLocation] = useState<OfficeLocation | null>(null)

  const handleLocationSelect = (location: OfficeLocation) => {
    setSelectedLocation(selectedLocation?.id === location.id ? null : location)
  }

  return (
    <div className="w-full">
      {/* Toggle Button */}
      {showToggle && (
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-3 mx-auto mb-8 px-6 py-3 bg-surface border border-light rounded-full hover:border-accent/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="font-medium text-text">
            {isExpanded ? 'Hide Map' : 'View Our Global Presence'}
          </span>
          <motion.svg
            className="w-5 h-5 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      )}

      {/* Map Container */}
      <AnimatePresence>
        {(isExpanded || !showToggle) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="card p-6 md:p-8">
              {/* Map with markers */}
              <div className="relative aspect-[2/1] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-accent/10 via-surface to-accent/5 border border-accent/20">
                <WorldMap
                  selectedLocation={selectedLocation}
                  onSelect={handleLocationSelect}
                />
              </div>

              {/* Location cards grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {officeLocations.map((location) => (
                  <LocationCard
                    key={location.id}
                    location={location}
                    isSelected={selectedLocation?.id === location.id}
                    onSelect={handleLocationSelect}
                  />
                ))}
              </div>

              {/* Selected location details */}
              <AnimatePresence>
                {selectedLocation && (
                  <LocationDetails
                    location={selectedLocation}
                    onClose={() => setSelectedLocation(null)}
                  />
                )}
              </AnimatePresence>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-light text-sm text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span>Headquarters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span>Regional Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-text">{officeLocations.length}</span>
                  <span>Global Locations</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
