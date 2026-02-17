export interface OfficeLocation {
  id: string
  name: string
  country: string
  city: string
  region: string
  address: {
    street: string
    city: string
    state?: string
    postalCode: string
    country: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  // Percentage position on SVG map (0-100)
  mapPosition: {
    x: number
    y: number
  }
  email?: string
  phone?: string
  timezone: string
  isPrimary?: boolean
  /** Main office in its region (e.g. Africa); shown as badge on map and contact page */
  isPrimaryInRegion?: boolean
  /** Google Business Profile URL; when set, used instead of coordinates-based Maps link */
  googleBusinessUrl?: string
}

export const officeLocations: OfficeLocation[] = [
  {
    id: 'usa',
    name: 'United States',
    country: 'United States',
    city: 'Sheridan',
    region: 'North America',
    address: {
      street: '30 N Gould St Ste R',
      city: 'Sheridan',
      state: 'WY',
      postalCode: '82801',
      country: 'United States'
    },
    coordinates: {
      lat: 44.7972,
      lng: -106.9562
    },
    mapPosition: {
      x: 22,
      y: 35
    },
    email: 'hq@digni-digital-llc.com',
    phone: '+1 (307) 555-0100',
    timezone: 'MST (UTC-7)',
    isPrimary: true,
    googleBusinessUrl: 'https://share.google/esoeHJdqRK5C5hbTF'
  },
  {
    id: 'kenya',
    name: 'Kenya',
    country: 'Kenya',
    city: 'Nairobi',
    region: 'Africa',
    address: {
      street: 'Westlands Business Park, Waiyaki Way',
      city: 'Nairobi',
      postalCode: '00100',
      country: 'Kenya'
    },
    coordinates: {
      lat: -1.2921,
      lng: 36.8219
    },
    mapPosition: {
      x: 57,
      y: 52
    },
    email: 'growth@digni-digital-llc.com',
    phone: '+254702593518',
    timezone: 'EAT (UTC+3)',
    isPrimaryInRegion: true
  },
  {
    id: 'congo-drc',
    name: 'Congo DRC',
    country: 'Democratic Republic of the Congo',
    city: 'Kinshasa',
    region: 'Africa',
    address: {
      street: 'Boulevard du 30 Juin, Gombe',
      city: 'Kinshasa',
      postalCode: '',
      country: 'Democratic Republic of the Congo'
    },
    coordinates: {
      lat: -4.4419,
      lng: 15.2663
    },
    mapPosition: {
      x: 51,
      y: 55
    },
    email: 'growth@digni-digital-llc.com',
    phone: '+243 81 555 0100',
    timezone: 'WAT (UTC+1)'
  }
]

export const getLocationById = (id: string): OfficeLocation | undefined => {
  return officeLocations.find(location => location.id === id)
}

export const getPrimaryLocation = (): OfficeLocation | undefined => {
  return officeLocations.find(location => location.isPrimary)
}

export const getLocationsByRegion = (region: string): OfficeLocation[] => {
  return officeLocations.filter(location => location.region === region)
}

export const formatFullAddress = (location: OfficeLocation): string => {
  const { address } = location
  const parts = [
    address.street,
    address.city,
    address.state,
    address.postalCode,
    address.country
  ].filter(Boolean)
  return parts.join(', ')
}

export const getGoogleMapsUrl = (location: OfficeLocation): string => {
  if (location.googleBusinessUrl) return location.googleBusinessUrl
  const { lat, lng } = location.coordinates
  return `https://www.google.com/maps?q=${lat},${lng}`
}
