/**
 * ============================================================
 *  PROJECT TEAMPLY — tampil di beranda bagian "Pengerjaan Kami"
 *  (membuka modal detail). Tambah project cukup tambah object.
 * ============================================================
 */

export const projects = [
  {
    key: 'hanif',
    no: '01',
    title: 'Portofolio Hanif',
    category: 'Personal Portfolio',
    type: 'Portfolio Personal',
    work: 'UI/UX Design, Web Design & Development',
    image: '/asset/hanifportofolio.png',
    imageAlt: 'Website portfolio Hanif Imam',
    imageWidth: 1600,
    imageHeight: 764,
    imageBg: '#08091A',
    badge: 'Personal Portfolio',
    description:
      'Website portfolio personal yang dirancang untuk menampilkan identitas Hanif Imam sebagai Graphic Designer & Digital Illustrator. Konsep visual dibuat modern dan berfokus pada karya sebagai bagian utama dari personal branding.',
    features: [
      'Personal Branding',
      'Portfolio Showcase',
      'Responsive Design',
      'Modern UI',
      'Call To Action',
    ],
    tags: ['UI/UX Design', 'Web Design', 'Development'],
    link: 'https://www.hanifportfolio.com',
    delay: '0s',
  },
  {
    key: 'zulfran',
    no: '02',
    title: 'Portofolio Zulfran',
    category: '3D Designer Portfolio',
    type: 'Portfolio Personal',
    work: 'UI/UX Design, Web Design & Development',
    image: '/asset/portofoliozulfran.png',
    imageAlt: 'Website portfolio Zulfran',
    imageWidth: 1600,
    imageHeight: 765,
    imageBg: '#10251F',
    badge: '3D Designer Portfolio',
    description:
      'Website portfolio personal yang dirancang untuk memperkenalkan Zulfran sebagai 3D Designer. Konsep visual dibuat minimalis dengan identitas yang kuat dan CTA yang jelas.',
    features: [
      'Personal Branding',
      '3D Designer Showcase',
      'Responsive Design',
      'Minimalist UI',
      'Call To Action',
    ],
    tags: ['UI/UX Design', 'Web Design', 'Development'],
    link: 'https://zulfran.art',
    delay: '0.12s',
  },
  // {
  //   key: 'ikanbakarciomas',
  //   no: '03',
  //   title: 'Ikan Bakar Segar Ciomas',
  //   category: 'UMKM Website',
  //   type: 'UMKM',
  //   work: 'UI/UX Design, Web Design & Development',
  //   image: '/asset/ikanbakarsegar.png',
  //   imageAlt: 'Website UMKM Ikan Bakar Segar Ciomas',
  //   imageWidth: 1600,
  //   imageHeight: 765,
  //   imageBg: '#10251F',
  //   badge: 'UMKM',
  //   description:
  //     'Website UMKM yang dirancang untuk memperkenalkan Ikan Bakar Segar Ciomas sebagai UMKM. Konsep visual dibuat minimalis dengan identitas yang kuat dan CTA yang jelas.',
  //   features: [
  //     'Personal Branding',
  //     'UMKM Showcase',
  //     'Responsive Design',
  //     'Minimalist UI',
  //     'Call To Action',
  //   ],
  //   tags: ['UI/UX Design', 'Web Design', 'Development'],
  //   link: 'https://www.ikanbakarsegarciomas.com',
  //   delay: '0.12s',
  // },
];

export function getProjectByKey(key) {
  return projects.find((p) => p.key === key) || null;
}
