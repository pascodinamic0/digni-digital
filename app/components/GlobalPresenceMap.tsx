'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { officeLocations, OfficeLocation, formatFullAddress, getGoogleMapsUrl } from '@/app/data/locations'

interface GlobalPresenceMapProps {
  showToggle?: boolean
  initialExpanded?: boolean
}

// Simplified world map SVG path - continents outline
const WorldMapSVG = () => (
  <svg
    viewBox="0 0 1000 500"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Ocean background */}
    <rect x="0" y="0" width="1000" height="500" className="fill-accent/5" />
    
    {/* Simplified continent paths */}
    <g className="fill-accent/20 stroke-accent/40" strokeWidth="1">
      {/* North America */}
      <path d="M50,50 L180,45 L220,80 L260,75 L280,100 L270,140 L240,160 L220,200 L180,220 L150,210 L120,230 L100,200 L80,180 L60,140 L40,100 Z" />
      
      {/* South America */}
      <path d="M180,260 L220,250 L250,280 L260,320 L250,380 L220,420 L180,440 L150,420 L140,380 L150,320 L160,280 Z" />
      
      {/* Europe */}
      <path d="M440,60 L520,55 L540,80 L520,100 L540,120 L520,140 L480,150 L450,130 L440,100 Z" />
      
      {/* Africa */}
      <path d="M440,180 L520,170 L560,200 L580,260 L560,320 L520,380 L480,390 L440,360 L420,300 L430,240 Z" />
      
      {/* Asia */}
      <path d="M560,60 L700,50 L780,80 L820,60 L880,80 L900,120 L880,160 L820,180 L780,160 L740,180 L700,160 L660,180 L620,160 L580,180 L560,140 L580,100 Z" />
      
      {/* Middle East */}
      <path d="M560,160 L620,150 L660,180 L640,220 L600,240 L560,220 L550,190 Z" />
      
      {/* India */}
      <path d="M680,180 L740,180 L760,220 L740,280 L700,300 L660,280 L660,220 Z" />
      
      {/* Southeast Asia */}
      <path d="M760,220 L820,200 L860,240 L840,280 L800,300 L760,280 Z" />
      
      {/* Australia */}
      <path d="M800,340 L900,320 L940,360 L920,420 L860,440 L800,420 L780,380 Z" />
      
      {/* Indonesia archipelago */}
      <path d="M760,300 L820,290 L850,310 L830,330 L780,340 L750,320 Z" />
    </g>
    
    {/* Grid lines for visual effect */}
    <g className="stroke-accent/10" strokeWidth="0.5" fill="none">
      {[...Array(9)].map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={(i + 1) * 50} x2="1000" y2={(i + 1) * 50} />
      ))}
      {[...Array(19)].map((_, i) => (
        <line key={`v-${i}`} x1={(i + 1) * 50} y1="0" x2={(i + 1) * 50} y2="500" />
      ))}
    </g>
  </svg>
)

interface LocationMarkerProps {
  location: OfficeLocation
  isSelected: boolean
  onSelect: (location: OfficeLocation) => void
}

const LocationMarker = ({ location, isSelected, onSelect }: LocationMarkerProps) => {
  return (
    <motion.button
      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
      style={{
        left: `${location.mapPosition.x}%`,
        top: `${location.mapPosition.y}%`
      }}
      onClick={() => onSelect(location)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`View ${location.city}, ${location.country} office`}
    >
      {/* Pulsing ring animation */}
      <motion.div
        className={`absolute inset-0 rounded-full ${location.isPrimary ? 'bg-accent' : 'bg-success'}`}
        animate={{
          scale: [1, 2, 2],
          opacity: [0.6, 0.2, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut'
        }}
        style={{ width: 16, height: 16, marginLeft: -8, marginTop: -8 }}
      />
      
      {/* Main dot */}
      <div
        className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
          isSelected
            ? 'bg-accent scale-125'
            : location.isPrimary
            ? 'bg-accent'
            : 'bg-success group-hover:bg-accent'
        }`}
      />
      
      {/* Location label on hover */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <div className="bg-surface border border-light px-2 py-1 rounded text-xs font-medium shadow-lg">
          {location.city}
        </div>
      </div>
    </motion.button>
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
                <WorldMapSVG />
                
                {/* Location markers */}
                {officeLocations.map((location) => (
                  <LocationMarker
                    key={location.id}
                    location={location}
                    isSelected={selectedLocation?.id === location.id}
                    onSelect={handleLocationSelect}
                  />
                ))}
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
