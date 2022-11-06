/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["cdn4.telegram-cdn.org", "cdn1.telegram-cdn.org"],
  },
};
