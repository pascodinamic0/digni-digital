import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'

export const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
})

/**
 * IBM Plex Sans Arabic (--font-plex-ar) is self-hosted in app/fonts-arabic.css so it can be preloaded on
 * /sa-ar only (see ARABIC_FONT_PRELOADS in app/[locale]/layout.tsx).
 */

export const plexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['500'],
  style: ['italic'],
  variable: '--font-plex-serif',
  display: 'swap',
})

export const fontVars = `${plex.variable} ${plexSerif.variable}`
