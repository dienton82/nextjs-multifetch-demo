/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://placehold.co/300x200'], // 👈 esto habilita imágenes externas de ese dominio
  },
};

module.exports = nextConfig;
