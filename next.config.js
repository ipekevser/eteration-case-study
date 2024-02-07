/*global module*/
/*eslint no-undef: "error"*/
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        pathname: '/640/**',
      },
    ],
  },
};
