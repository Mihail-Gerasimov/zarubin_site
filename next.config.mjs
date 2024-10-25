/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://thebrightbyte.com/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'thebrightbyte.com',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
