/**
 * ============================================================
 *  KATALOG TEMPLATE WEBSITE
 * ------------------------------------------------------------
 *  Mau nambah template? Cukup salin satu blok object di bawah,
 *  lalu ubah isinya. Tidak perlu sentuh HTML sama sekali —
 *  halaman /template-web, filter, urutan, jumlah, dan halaman
 *  detail (/template-web/[slug]) otomatis ikut berubah.
 *
 *  Field yang tersedia:
 *    slug        -> alamat detail, mis. "portofolio-zulfran"
 *                   jadi /template-web/portofolio-zulfran
 *    title       -> nama template
 *    category    -> kategori filter (Portofolio, UMKM, Sistem, ...)
 *                  -> tombol filter dibuat OTOMATIS dari kategori ini
 *    price       -> harga dalam Rupiah (angka, tanpa "Rp")
 *    tech        -> daftar teknologi, mis. ['HTML', 'CSS', 'Tailwind']
 *    image       -> path gambar di folder public/
 *    imageAlt    -> teks alternatif gambar
 *    description -> deskripsi singkat
 *    features    -> daftar fitur (ditampilkan di halaman detail)
 *    demoUrl     -> link live demo (opsional, null kalau belum ada)
 *    addedAt     -> tanggal rilis 'YYYY-MM-DD' (untuk urutan Terbaru/Terlama)
 * ============================================================
 */

export const templates = [
  {
    slug: "fallout-themes",
    title: "Fallout Themes",
    category: "Frontend",
    price: 149000,
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/asset/template/fallout1.png",
    imageAlt: "Tampilan website tema Fallout",
    textImg: "Bagian Hero",
    image2: "/asset/template/fallout2.png",
    imageAlt2: "Tampilan website tema Fallout",
    textImg2: "Bagian Kontak",
    image3: null,
    imageAlt3: null,
    textImg3: null,
    description:
      "Template website portofolio siap pakai untuk menampilkan karya, pengalaman, dan identitas profesional. Beli, unduh, lalu ganti isinya sesuai kebutuhanmu.",
    features: [
      "Desain halaman responsif (mobile-friendly)",
      "Struktur HTML & CSS yang rapi dan mudah diedit",
      "Section hero, karya, tentang, dan kontak",
      "Loading cepat tanpa framework berat",
      "Siap dihubungkan ke domain sendiri",
    ],
    demoUrl: null,
    addedAt: "2026-10-17",

    /* ---- Data untuk halaman detail (/template-web/[slug]) ---- */
    detailFeatures: [
      {
        title: "Hero sekaligus Tentang",
        desc: "Bagian hero dan tentang digabung menjadi satu, sehingga pengunjung langsung bisa mengetahui siapa kamu dan apa yang kamu tawarkan.",
      },
      {
        title: "Galeri dalam bentuk list",
        desc: "Bagian galeri ditampilkan dalam bentuk list yang modern, estetik dan informatif.",
      },
      {
        title: "Penghargaan dan pencapaian",
        desc: "Bagian penghargaan dan pencapaian ditampilkan dalam bentuk list yang modern, estetik dan informatif.",
      },
      {
        title: "Form serta Link media sosial",
        desc: "Bagian form serta link media sosial ditampilkan dalam bentuk list yang modern, estetik dan informatif.",
      },
    ],
    specs: {
      Format: "HTML, CSS, JavaScript",
      Framework: "Tanpa framework",
      Halaman: "1 halaman",
    },
    included: [
      "File HTML, CSS, dan JavaScript",
      "Responsif di semua layar",
      "Panduan mengganti isi",
      "Dipakai untuk 1 proyek",
    ],
    faq: [
      {
        q: "Bagaimana cara menerima filenya?",
        a: "Setelah pembayaran dikonfirmasi, file dikirim lewat tautan unduhan ke WhatsApp atau email kamu.",
      },
      {
        q: "Boleh dipakai untuk proyek klien?",
        a: "Satu pembelian berlaku untuk satu proyek. Untuk proyek lain, beli lisensi tambahan.",
      },
      {
        q: "Bisa minta diubah desainnya?",
        a: "Bisa, hubungi kami lewat WhatsApp untuk tanya jasa kustomisasi.",
      },
    ],
  },
  // ==== TAMBAHKAN TEMPLATE BARU DI BAWAH INI ====
];

/** Kategori unik, dibuat otomatis dari data (tombol filter mengikuti). */
export function getTemplateCategories() {
  return ["Semua", ...new Set(templates.map((t) => t.category))];
}

export function getTemplateBySlug(slug) {
  return templates.find((t) => t.slug === slug) || null;
}
