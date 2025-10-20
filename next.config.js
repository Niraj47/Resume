/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.appDir as it's no longer needed in Next.js 15
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
