/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/src/api/:path*',
        destination: `http://localhost:3000/api/:path*`,
      },
    ];
  },
};


export default nextConfig;
