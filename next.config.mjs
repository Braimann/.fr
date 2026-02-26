/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir par défaut (.next) pour compatibilité Windows et Cloudflare Workers/Pages
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
