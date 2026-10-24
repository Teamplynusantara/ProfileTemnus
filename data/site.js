/**
 * ============================================================
 *  PENGATURAN SITUS — ubah semua di sini saja.
 * ============================================================
 */

export const SITE = {
  name: 'Teamply Nusantara',
  shortName: 'Teamply',
  // Ganti dengan domain asli setelah website di-hosting.
  url: 'https://teamplynusantara.com',

  title: 'Teamply Nusantara — Jasa Pembuatan Website',
  description:
    'Jasa pembuatan website profesional, landing page, dan solusi digital untuk bisnis, UMKM, hingga perusahaan di seluruh Indonesia.',

  // Nomor WhatsApp bisnis, format internasional tanpa "+" dan tanpa "0" di depan.
  waNumber: '6285212350700',

  email: 'teamplynusantara@gmail.com',
  phoneDisplay: '+62 852-1235-0700',
  phoneHref: '+6285212350700',
  location: 'Bogor, Indonesia',
  locationUrl: 'https://maps.google.com/?q=Bogor,Indonesia',

  instagram: 'https://www.instagram.com/teamplynusantara',
  tiktok: 'https://www.tiktok.com/@teamplynusantara',

  // Google Analytics 4
  gaId: 'G-RSPM6ZD5BV',
  // Google AdSense
  adsClient: 'ca-pub-2331730193188100',

  establishedSince: '2025',
  copyrightYear: 2026,

  logo: '/asset/Black_and_White_Minimalist_RT_Initial_Logo__2_-removebg-preview.png',
  logoSquare: '/asset/Black and White Minimalist RT Initial Logo (2).png',
};

/** Daftar opsi paket untuk select di modal WhatsApp (selaras dengan data/packages.js) */
export const WA_PAKET_OPTIONS = [
  { value: '', label: 'Belum tahu / lainnya' },
  { value: 'Landing Page', label: 'Landing Page — Rp 750.000' },
  { value: 'Website', label: 'Website — Rp 3.000.000' },
  { value: 'Website Admin', label: 'Website Admin — Rp 7.000.000' },
  { value: 'Custom', label: 'Custom — Rp 500.000' },
];

/** Format rupiah: 149000 -> "Rp 149.000,00" */
export function formatRupiah(value) {
  return 'Rp ' + Number(value).toLocaleString('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
