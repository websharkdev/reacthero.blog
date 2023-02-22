/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,

  images: {
    domains: ['images.unsplash.com', 'cdn.svgporn.com', 'via.placeholder.com', 'media.graphassets.com'],
  },
}

module.exports = nextConfig
