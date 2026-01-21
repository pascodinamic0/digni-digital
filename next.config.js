/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable modern JavaScript features
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Redirect all traffic to main domain
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://digni-digital-llc.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
