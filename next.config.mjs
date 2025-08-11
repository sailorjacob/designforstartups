/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Avoid 404s from browsers requesting /favicon.ico by redirecting to an existing SVG
      {
        source: '/favicon.ico',
        destination: '/placeholder-logo.svg',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
