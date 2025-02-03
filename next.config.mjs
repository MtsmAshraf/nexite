/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      BREVO_API_KEY: process.env.BREVO_API_KEY,
    },
    images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'flagcdn.com',
              port: '',
              pathname: '/**',
              search: '',
          },
      ],
  },

};

export default nextConfig;
