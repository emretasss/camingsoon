/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Derleme sırasında ESLint hatalarını yoksay
    ignoreDuringBuilds: true,
  },
  // Diğer Next.js ayarları (örneğin, statik site için output)
  output: 'standalone',

};

export default nextConfig;