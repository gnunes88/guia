/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'www.lopes.com.br',
      'ynkkkxhqzvqzzvikxteu.supabase.co'
    ]
  },
};

module.exports = nextConfig;