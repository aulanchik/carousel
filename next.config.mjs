/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.inyourarea.co.uk",
      },
    ],
  },
};

export default nextConfig;
