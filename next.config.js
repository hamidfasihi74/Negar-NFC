/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['fa', 'ps', 'en'],
    defaultLocale: 'fa',
  },
}

module.exports = nextConfig
