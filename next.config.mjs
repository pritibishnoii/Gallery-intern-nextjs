// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'emcgtdx36wv.exactdn.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  