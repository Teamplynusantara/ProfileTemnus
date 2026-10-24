/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output statis: `npm run build` menghasilkan folder `out/`
  // yang bisa di-upload ke hosting apa pun (sama seperti website HTML lama).
  output: 'export',

  // Akar project (mengatasi warning path pada Git/Windows).
  turbopack: {
    root: process.cwd(),
  },

  // Bolehkan buka dev server lewat IP LAN (mis. dari HP di jaringan
  // yang sama) — tanpa ini Next.js memblokir JS di origin IP.
  allowedDevOrigins: ['192.168.1.3'],

  // Gambar disajikan apa adanya dari folder public/ (cocok untuk hosting statis).
  images: {
    unoptimized: true,
  },

  // URL tanpa trailing slash diarahkan ke versi "/" — konsisten
  // dengan hosting shared (Apache) dan menghindari konflik
  // antara file `gallery.html` dengan folder `gallery/`.
  trailingSlash: true,
};

export default nextConfig;
