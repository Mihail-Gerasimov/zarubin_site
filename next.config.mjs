/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/blog', permanent: true },
      {
        source: 'https://blog.zarubin.co.uk/',
        destination: 'https://blog.zarubin.co.uk/blog',
        permanent: true,
      },
    ];
  },
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
};

export default nextConfig;
