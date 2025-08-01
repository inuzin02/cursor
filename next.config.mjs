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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.docomo.ne.jp',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prtimes.jp',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
