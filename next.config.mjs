/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.turkiyegazetesi.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'static.euronews.com',
      },
      {
        protocol: 'https',
        hostname: 'www.haksozhaber.net',
      },
      {
        protocol: 'https',
        hostname: 'www.uzumbaba.com',
      },
      {
        protocol: 'https',
        hostname: 'static.daktilo.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gokcekoleksiyon.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn03.ciceksepeti.com',
      },
      {
        protocol: 'https',
        hostname: 'k2haber.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'static.nadirkitap.com',
      },
      {
        protocol: 'https',
        hostname: 'bolununsesi.com',
      },
      {
        protocol: 'https',
        hostname: 'tosyahaber37.com',
      },
      {
        protocol: 'https',
        hostname: 'www.kelkitgazetesi.com',
      },
      {
        protocol: 'https',
        hostname: 'www.malumatfurus.org',
      },
    ],
  },
};

export default nextConfig;
