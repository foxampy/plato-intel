/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['plato-intel.by'] },
  experimental: { serverActions: { bodySizeLimit: '2mb' } },
}
module.exports = nextConfig
