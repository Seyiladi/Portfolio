/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Export static HTML files
  basePath: "/your-repo-name", // Change this to match your GitHub repository name
  images: {
    unoptimized: true, // Prevent Next.js from optimizing images
  },
};

module.exports = nextConfig;
