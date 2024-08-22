/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensure this line is present if you are exporting static files
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
