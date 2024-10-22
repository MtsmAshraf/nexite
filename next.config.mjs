/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BREVO_API_KEY: process.env.BREVO_API_KEY,
      }
};

export default nextConfig;
