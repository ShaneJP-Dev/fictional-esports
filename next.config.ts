import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    // Remove this if you're not using Emotion
    emotion: true,
  },
  // Enable SWC instead of Babel
  experimental: {
    forceSwcTransforms: true,
  },
}

export default nextConfig