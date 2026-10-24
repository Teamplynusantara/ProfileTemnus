/**
 * ============================================================
 *  GALERI PROYEK (website yang sudah kami bangun)
 * ------------------------------------------------------------
 *  Mau nambah galeri? Salin satu blok object di bawah lalu
 *  ubah isinya — halaman /gallery, filter, jumlah, dan halaman
 *  detail (/gallery/[slug]) otomatis ikut berubah.
 *
 *  Field yang tersedia:
 *    slug        -> alamat detail, mis. "zulfran" jadi /gallery/zulfran
 *    title       -> nama proyek
 *    category    -> kategori filter (Portofolio, UMKM, Lainnya)
 *                  -> tombol filter dibuat OTOMATIS dari kategori ini
 *    url         -> link website asli (null kalau belum ada)
 *    image       -> path gambar di folder public/
 *    imageAlt    -> teks alternatif gambar
 *    description -> deskripsi singkat proyek
 *    tags        -> daftar tag/teknologi
 *    addedAt     -> tanggal rilis 'YYYY-MM-DD' (untuk urutan Terbaru/Terlama)
 * ============================================================
 */

export const galleries = [
  {
    slug: 'zulfran',
    title: 'Portofolio Zulfran',
    category: 'Portofolio',
    url: 'https://www.zulfran.art',
    image: '/asset/portofoliozulfran.png',
    imageAlt: 'Tampilan website portofolio Zulfran',
    description:
      'Website portofolio personal untuk memperkenalkan Zulfran sebagai 3D Designer dengan konsep visual minimalis dan identitas yang kuat.',
    tags: ['UI/UX Design', 'Web Design', 'Development'],
    addedAt: '2026-07-24',
  },
  {
    slug: 'anniversary',
    title: 'Anniversary Website',
    category: 'Lainnya',
    url: 'https://anniversary-alpha-five.vercel.app',
    image: '/asset/anniversaryweb.png',
    imageAlt: 'Website Anniversary',
    description:
      'Website Anniversary bersama pasangan dengan konsep visual minimalis dan identitas yang kuat.',
    tags: ['UI/UX Design', 'Web Design', 'Development'],
    addedAt: '2026-08-13',
  },
  {
    slug: 'hanif-imam',
    title: 'Hanif Imam',
    category: 'Portofolio',
    url: 'https://www.hanifportfolio.com',
    image: '/asset/hanifportofolio.png',
    imageAlt: 'Website portfolio Hanif Imam',
    description:
      'Website portfolio personal untuk menampilkan identitas, karya Graphic Design, dan Digital Illustration dengan visual yang kuat.',
    tags: ['UI/UX Design', 'Web Design', 'Development'],
    addedAt: '2026-08-14',
  },
  {
    slug: 'ikan-bakar-segar',
    title: 'Ikan Bakar Segar Ciomas',
    category: 'UMKM',
    url: 'https://www.ikanbakarsegarciomas.com',
    image: '/asset/ikanbakarsegar.png',
    imageAlt: 'Website UMKM Ikan Bakar Segar Ciomas',
    description:
      'Website UMKM Ikan Bakar Segar Ciomas dengan konsep visual minimalis dan identitas yang kuat.',
    tags: ['UI/UX Design', 'Web Design', 'Development'],
    addedAt: '2026-10-24',
  },
];

/** Kategori unik, dibuat otomatis dari data (tombol filter mengikuti). */
export function getGalleryCategories() {
  return ['Semua', ...new Set(galleries.map((g) => g.category))];
}

export function getGalleryBySlug(slug) {
  return galleries.find((g) => g.slug === slug) || null;
}
