import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, IBM_Plex_Serif } from 'next/font/google'

export const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
})

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  // 500 falls back to 400 and 700 to 600: halves the Arabic font payload on sa-ar.
  weight: ['400', '600'],
  variable: '--font-plex-ar',
  display: 'swap',
  preload: false,
})

export const plexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['500'],
  style: ['italic'],
  variable: '--font-plex-serif',
  display: 'swap',
})

export const fontVars = `${plex.variable} ${plexArabic.variable} ${plexSerif.variable}`
