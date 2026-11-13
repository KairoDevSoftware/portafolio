/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sitio estático en la carpeta `out/` (sirve para GitHub Pages o Cloudflare Pages).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
