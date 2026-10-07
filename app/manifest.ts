import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Digni Digital',
    short_name: 'Digni',
    description: 'AI systems for African organisations. Built in Kinshasa.',
    start_url: '/us-en',
    display: 'standalone',
    background_color: '#f7f5f0',
    theme_color: '#0b181d',
    icons: [
      { src: '/brand/v2/shield-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/brand/v2/shield-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/brand/v2/android-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/brand/v2/android-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
