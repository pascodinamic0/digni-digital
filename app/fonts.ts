import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, IBM_Plex_Serif } from 'next/font/google'

export const plex = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
})

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
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
