/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co'], // 👈 esto habilita imágenes externas de ese dominio
  },
};

module.exports = nextConfig;
