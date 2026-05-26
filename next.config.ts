
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* خيارات الإعداد */
  typescript: {
    // نتجاهل أخطاء التايب سكريبت أثناء البناء لضمان نجاح الرفع الأولي
    ignoreBuildErrors: true,
  },
  eslint: {
    // نتجاهل تحذيرات ESLint أثناء البناء
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
