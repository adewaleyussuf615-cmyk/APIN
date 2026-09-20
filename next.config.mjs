/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apin.org.ng",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.apin.org.ng",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;