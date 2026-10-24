/**
 * ============================================================
 *  PAKET JASA — tampil di beranda bagian "Paket Jasa"
 * ------------------------------------------------------------
 *  Ubah harga/fitur cukup di sini. Tombol "Pesan Paket"
 *  otomatis membuka form WhatsApp dengan paket terpilih.
 *
 *  waPaket  -> nilai yang dikirim ke form WhatsApp
 *              (harus cocok dengan WA_PAKET_OPTIONS di site.js)
 *  featured -> true untuk menampilkan badge "Populer"
 *  delay    -> jeda animasi scroll-reveal (detik)
 * ============================================================
 */

export const packages = [
  {
    no: '01',
    name: 'Landing Page',
    tagline: 'Cepat & Setup Mudah',
    description:
      'Penuhi kebutuhan desain inti Anda dengan cepat dan mudah dengan satu halaman yang ringan dan sederhana.',
    features: [
      '1 Desain Halaman Responsif',
      'Mobile-Friendly Layout',
      'Loading Website Cepat',
      'Integrasi WhatsApp / Form',
      'Free Domain & Hosting (1 thn)',
    ],
    maintenance: {
      price: 'Rp 50.000 / bulan',
      note: 'Update konten, produk, perubahan minor & maintenance ringan.',
    },
    priceLabel: 'Rp 750.000',
    waPaket: 'Landing Page',
    featured: false,
    delay: '0s',
  },
  {
    no: '02',
    name: 'Business Website',
    tagline: 'Professional & Ready to Use',
    description:
      'Website profesional untuk bisnis Anda dengan desain modern, responsif, dan struktur yang siap mendukung kebutuhan bisnis.',
    features: [
      'Hingga 5-10 halaman',
      'Premium & Custom Design',
      'Struktur SEO-Friendly',
      'Google Maps & Form Integration',
      'Mobile & Tablet Responsive',
    ],
    maintenance: {
      price: 'Rp 100.000 / bulan',
      note: 'Update konten, produk, perubahan minor & maintenance ringan.',
    },
    priceLabel: 'Rp 3.000.000',
    waPaket: 'Website',
    featured: true,
    delay: '0.1s',
  },
  {
    no: '03',
    name: 'Website Admin',
    tagline: 'Maintenance & Support',
    description:
      'Cepat dan mudah memenuhi kebutuhan pemeliharaan inti Anda, website Anda selalu up-to-date dan optimal.',
    features: [
      'Konten perbulan & Upload Product',
      'Technical Bug Fixes',
      'CMS Rutin & Update Plugin',
      'Motion Design',
      'Optimasi Gambar & Cepat',
    ],
    maintenance: {
      price: 'Rp 350.000 / bulan',
      note: 'Update konten, produk, perubahan minor & maintenance ringan.',
    },
    priceLabel: 'Rp 7.000.000',
    waPaket: 'Website Admin',
    featured: false,
    delay: '0.2s',
  },
  {
    no: '04',
    name: 'Custom',
    tagline: 'Tailored For You',
    description:
      'Build your website your way dengan fitur, desain, dan fungsionalitas yang disesuaikan kebutuhan Anda.',
    features: [
      'Hingga 3 halaman',
      'Fleksibel Desain Custom',
      'Custom Dashboard',
      'Konsultasi & Planning',
      'Free Domain & Hosting (1 thn)',
    ],
    maintenance: {
      price: 'Rp 70.000 / bulan',
      note: 'Update konten, produk, perubahan minor & maintenance ringan.',
    },
    priceLabel: 'Rp 500.000',
    waPaket: 'Custom',
    featured: false,
    delay: '0.3s',
  },
];
