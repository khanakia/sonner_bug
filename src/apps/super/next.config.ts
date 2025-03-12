import { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {},

  // `next lint` does not lint any direcotry outside src so added this config option to allow packages dir
  eslint: {
    dirs: ['src', 'packages'],
  },
}
// import withMDX from "@next/mdx"

// export default withMDX(nextConfig)
export default nextConfig
