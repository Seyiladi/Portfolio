// next.config.js 
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    distDir: "out", // Output directory
    basePath: "/your-repo-name", // Change this to your GitHub repo name
    images: {
      unoptimized: true, // Required for static export if using next/image
    },
  };
  
  module.exports = nextConfig;
  
