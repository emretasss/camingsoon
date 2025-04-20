/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Derleme sırasında ESLint hatalarını yoksay
    ignoreDuringBuilds: true,
  },
  // Diğer Next.js ayarları (örneğin, statik site için output)
  output: 'export', // Statik site için (eğer kullanıyorsanız)
};

export default nextConfig;