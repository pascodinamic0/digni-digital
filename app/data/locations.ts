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
}

export const officeLocations: OfficeLocation[] = [
  {
    id: 'usa',
    name: 'United States',
    country: 'United States',
    city: 'New York',
    region: 'North America',
    address: {
      street: '350 Fifth Avenue',
      city: 'New York',
      state: 'NY',
      postalCode: '10118',
      country: 'United States'
    },
    coordinates: {
      lat: 40.7484,
      lng: -73.9857
    },
    mapPosition: {
      x: 22,
      y: 35
    },
    email: 'usa@dignidigital.com',
    phone: '+1 (212) 555-0100',
    timezone: 'EST (UTC-5)',
    isPrimary: true
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    country: 'South Africa',
    city: 'Cape Town',
    region: 'Africa',
    address: {
      street: '1 Waterfront Drive, V&A Waterfront',
      city: 'Cape Town',
      state: 'Western Cape',
      postalCode: '8001',
      country: 'South Africa'
    },
    coordinates: {
      lat: -33.9249,
      lng: 18.4241
    },
    mapPosition: {
      x: 53,
      y: 75
    },
    email: 'southafrica@dignidigital.com',
    phone: '+27 21 555 0100',
    timezone: 'SAST (UTC+2)'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    city: 'Singapore',
    region: 'Asia-Pacific',
    address: {
      street: '1 Raffles Place, #20-01',
      city: 'Singapore',
      postalCode: '048616',
      country: 'Singapore'
    },
    coordinates: {
      lat: 1.2840,
      lng: 103.8515
    },
    mapPosition: {
      x: 78,
      y: 52
    },
    email: 'singapore@dignidigital.com',
    phone: '+65 6555 0100',
    timezone: 'SGT (UTC+8)'
  },
  {
    id: 'uae',
    name: 'Dubai',
    country: 'United Arab Emirates',
    city: 'Dubai',
    region: 'Middle East',
    address: {
      street: 'Dubai International Financial Centre, Gate Village',
      city: 'Dubai',
      postalCode: '506538',
      country: 'United Arab Emirates'
    },
    coordinates: {
      lat: 25.2048,
      lng: 55.2708
    },
    mapPosition: {
      x: 62,
      y: 42
    },
    email: 'dubai@dignidigital.com',
    phone: '+971 4 555 0100',
    timezone: 'GST (UTC+4)'
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
    email: 'kenya@dignidigital.com',
    phone: '+254 20 555 0100',
    timezone: 'EAT (UTC+3)'
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
    email: 'drc@dignidigital.com',
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
  const { lat, lng } = location.coordinates
  return `https://www.google.com/maps?q=${lat},${lng}`
}
