/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RAPIDAPIKEY: process.env.RAPIDAPIKEY,
  },
}

module.exports = nextConfig
