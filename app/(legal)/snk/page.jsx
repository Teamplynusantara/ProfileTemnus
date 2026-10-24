import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Syarat & Ketentuan',
  description:
    'Syarat dan Ketentuan layanan Teamply Nusantara — mengatur proses diskusi, pemesanan, pengerjaan, pembayaran, hingga penyelesaian proyek.',
  alternates: { canonical: '/snk/' },
  openGraph: {
    title: 'Syarat & Ketentuan — Teamply Nusantara',
    url: '/snk/',
  },
};

/** Daftar isi — label harus selaras dengan id section di bawah. */
const TOC = [
  { id: 'definisi', label: '01. Definisi' },
  { id: 'penerima', label: '02. Penerima S&K' },
  { id: 'pengguna', label: '03. Pengguna Jasa' },
  { id: 'pemesanan', label: '04. Pemesanan' },
  { id: 'harga', label: '05. Harga & Pembayaran' },
  { id: 'pengerjaan', label: '06. Pengerjaan' },
  { id: 'revisi', label: '07. Revisi' },
  { id: 'materi', label: '08. Materi & Konten' },
  { id: 'pihak-ketiga', label: '09. Pihak Ketiga' },
  { id: 'domain', label: '10. Domain' },
  { id: 'tanggung-jawab', label: '11. Tanggung Jawab' },
  { id: 'serah-terima', label: '12. Serah Terima' },
  { id: 'pembatalan', label: '13. Pembatalan' },
  { id: 'refund', label: '14. Pengembalian Dana' },
  { id: 'privasi', label: '15. Privasi' },
  { id: 'pelanggaran', label: '16. Pelanggaran' },
  { id: 'darurat', label: '17. Keadaan Darurat' },
  { id: 'perubahan', label: '18. Perubahan S&K' },
  { id: 'hukum', label: '19. Hukum' },
  { id: 'pemisahan', label: '20. Pemisahan' },
  { id: 'hubungi', label: '21. Hubungi Kami' },
];

export default function SnkPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <Reveal className="max-w-[780px]">
            <div className="font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-accent flex items-center gap-[10px] mb-4">
              <span className="w-[16px] h-[1px] bg-primary inline-block"></span>
              Legal &amp; Informasi
            </div>

            <h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-[38px] sm:text-[52px] leading-[1.08] tracking-[-0.025em] text-primary">
              Syarat &amp; Ketentuan
            </h1>

            <p className="mt-5 text-secondary/65 text-[14px] sm:text-[15px] leading-relaxed max-w-[680px]">
              Ketentuan yang mengatur proses diskusi, pemesanan, pengerjaan,
              pembayaran, hingga penyelesaian proyek bersama Teamply Nusantara.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 font-['JetBrains_Mono',monospace] text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-secondary/50">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Terakhir diperbarui: 11 Agustus 2026, 16:20 WIB
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CONTENT AREA ===== */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16">
            {/* ===== TABLE OF CONTENTS ===== */}
            <aside className="lg:block toc-sidebar">
              <div className="toc-wrapper">
                <div className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.12em] text-secondary/50 mb-4 ">
                  Daftar Isi
                </div>

                <nav className="space-y-0.5">
                  {TOC.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="toc-link">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ===== DOCUMENT ===== */}
            <article className="bg-[#FBFAF6] border border-[#d4cfbc] rounded-[20px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-sm">
              <div className="snk-content">
                {/* INTRO */}
                <Reveal>
                  <p>
                    Selamat datang di <strong>Teamply Nusantara</strong>.
                  </p>

                  <p>
                    Syarat dan Ketentuan ini dibuat untuk mengatur seluruh
                    proses diskusi, pelayanan, pengembangan (
                    <em>development</em>), hingga penyelesaian proyek. Dengan
                    mengakses, menggunakan, atau membeli layanan kami, Anda
                    dianggap telah membaca, memahami, menyetujui, dan bersedia
                    mematuhi seluruh Syarat dan Ketentuan yang berlaku.
                  </p>

                  <p>
                    Apabila terdapat ketentuan yang masih kurang jelas, Anda
                    dapat mendiskusikannya lebih lanjut dengan tim{' '}
                    <strong>Teamply Nusantara</strong> sebelum menggunakan
                    layanan kami.
                  </p>
                </Reveal>

                {/* 01 */}
                <Reveal as="section" id="definisi">
                  <h2>1. Definisi</h2>

                  <p>
                    Dalam Syarat dan Ketentuan ini, beberapa istilah berikut
                    digunakan dengan pengertian sebagai berikut:
                  </p>

                  <ol>
                    <li>
                      <strong>“Teamply Nusantara”</strong>,{' '}
                      <strong>“Kami”</strong>, <strong>“Penyedia”</strong>, atau{' '}
                      <strong>“Tim”</strong> adalah pihak yang menyediakan dan
                      mengelola layanan pembuatan website serta layanan digital
                      lainnya yang ditawarkan oleh Teamply Nusantara.
                    </li>

                    <li>
                      <strong>“Pelanggan”</strong>, <strong>“Anda”</strong>,{' '}
                      <strong>“Pengguna”</strong>, atau{' '}
                      <strong>“Klien”</strong> adalah pihak yang mengakses,
                      menggunakan, atau membeli layanan Teamply Nusantara.
                    </li>
                  </ol>
                </Reveal>

                {/* 02 */}
                <Reveal as="section" id="penerima">
                  <h2>2. Penerimaan Syarat &amp; Ketentuan</h2>

                  <p>
                    Dengan menggunakan layanan yang disediakan oleh Teamply
                    Nusantara, Anda dinyatakan telah:
                  </p>

                  <ol>
                    <li>
                      Membaca dan memahami seluruh Syarat dan Ketentuan yang
                      berlaku.
                    </li>

                    <li>
                      Menyetujui seluruh Syarat dan Ketentuan yang tercantum di
                      dalamnya.
                    </li>

                    <li>
                      Memberikan informasi yang benar dan dapat
                      dipertanggungjawabkan.
                    </li>
                  </ol>

                  <p>
                    Dengan menggunakan jasa kami, Anda wajib mengikuti seluruh
                    Syarat dan Ketentuan yang telah ditetapkan.
                  </p>
                </Reveal>

                {/* 03 */}
                <Reveal as="section" id="pengguna">
                  <h2>3. Pengguna Jasa</h2>

                  <p>
                    Pengguna diperbolehkan mengajukan ide, konsep, dan kebutuhan
                    proyek selama permintaan tersebut sah serta tidak
                    bertentangan dengan hukum dan norma yang berlaku.
                  </p>

                  <p>Pengguna dilarang mengajukan proyek:</p>

                  <ol>
                    <li>
                      Yang bertujuan atau berpotensi melanggar hukum yang
                      berlaku di Indonesia.
                    </li>

                    <li>
                      Yang bertujuan melakukan penipuan atau aktivitas ilegal,
                      termasuk namun tidak terbatas pada phishing, hacking,
                      malware, carding, perjudian, pelanggaran kesusilaan,
                      ujaran kebencian/SARA, pencemaran nama baik, dan
                      penyebaran berita bohong.
                    </li>

                    <li>
                      Yang menggunakan aset atau materi yang tidak memiliki izin
                      penggunaan atau berpotensi melanggar Hak Cipta pihak lain.
                    </li>
                  </ol>

                  <p>Pengguna juga diperkenankan untuk:</p>

                  <ol>
                    <li>
                      Memberikan testimoni yang jujur dan membangun selama
                      proses diskusi hingga penyerahan hasil.
                    </li>

                    <li>
                      Memberikan izin atau menolak izin kepada Teamply
                      Nusantara untuk menampilkan website yang telah dibuat
                      sebagai portofolio di website maupun media sosial kami.
                    </li>
                  </ol>
                </Reveal>

                {/* 04 */}
                <Reveal as="section" id="pemesanan">
                  <h2>4. Pemesanan Layanan</h2>

                  <p>
                    Pengguna wajib memberikan informasi yang jelas dan relevan
                    mengenai proyek yang dibutuhkan agar proses pengerjaan dapat
                    berjalan dengan baik.
                  </p>

                  <p>
                    Selama proses diskusi, pengguna diharapkan memberikan
                    informasi berikut:
                  </p>

                  <ol>
                    <li>Konsep, tujuan, dan ide proyek.</li>
                    <li>Nama proyek.</li>
                    <li>Informasi atau deskripsi singkat mengenai proyek.</li>
                    <li>Kebutuhan atau fitur yang ingin ditambahkan.</li>
                    <li>Referensi desain, apabila tersedia.</li>
                    <li>
                      Preferensi warna yang digunakan, minimal mencakup Primary,
                      Secondary, dan Accent apabila diperlukan.
                    </li>
                  </ol>

                  <p>
                    Pengguna diharapkan memberikan informasi yang lengkap, jelas,
                    dan tidak menyesatkan serta tidak bertentangan dengan
                    ketentuan yang berlaku.
                  </p>
                </Reveal>

                {/* 05 */}
                <Reveal as="section" id="harga">
                  <h2>5. Harga dan Pembayaran</h2>

                  <p>
                    Harga layanan ditampilkan dan diinformasikan melalui website
                    resmi Teamply Nusantara. Harga yang tercantum dapat berubah
                    atau tidak berlaku apabila terdapat kondisi berikut:
                  </p>

                  <ol>
                    <li>
                      Pembelian domain selain domain <strong>my.id</strong> dan{' '}
                      <strong>sch.id</strong>.
                    </li>

                    <li>
                      Penambahan halaman atau <em>page</em> di luar cakupan
                      paket.
                    </li>

                    <li>Terdapat proses negosiasi harga.</li>

                    <li>
                      Terdapat permintaan fitur, layanan, atau pekerjaan di luar
                      paket yang dipilih.
                    </li>
                  </ol>

                  <p>
                    Apabila terdapat biaya tambahan dari pihak ketiga atau
                    kebutuhan di luar paket, kami akan menginformasikannya
                    terlebih dahulu kepada pengguna sebelum transaksi atau
                    pengerjaan tambahan dilakukan.
                  </p>

                  <p>
                    Pengguna dapat melakukan pembayaran secara penuh maupun
                    mencicil sesuai dengan metode dan jadwal pembayaran yang
                    telah disepakati oleh kedua belah pihak.
                  </p>

                  <p>
                    Pengguna wajib melakukan pembayaran sesuai dengan metode,
                    nominal, dan waktu yang telah disepakati.
                  </p>
                </Reveal>

                {/* 06 */}
                <Reveal as="section" id="pengerjaan">
                  <h2>6. Ketentuan Pengerjaan</h2>

                  <p>
                    Waktu pengerjaan ditentukan berdasarkan kesepakatan kedua
                    belah pihak. Estimasi waktu dapat berubah apabila terjadi
                    kondisi berikut:
                  </p>

                  <ol>
                    <li>
                      Pengguna terlambat memberikan aset, materi, atau
                      informasi yang diperlukan.
                    </li>

                    <li>
                      Terjadi perubahan kebutuhan atau permintaan secara
                      signifikan saat proyek sedang dikerjakan.
                    </li>

                    <li>
                      Terdapat permintaan tambahan dari Klien di luar kesepakatan
                      awal.
                    </li>

                    <li>
                      Terdapat kendala pada layanan atau pihak ketiga yang
                      digunakan dalam proyek.
                    </li>

                    <li>
                      Terjadi keadaan darurat atau keadaan lain yang berada di
                      luar kendali kami.
                    </li>
                  </ol>

                  <p>
                    Apabila tidak terdapat kendala yang berasal dari pengguna,
                    pihak ketiga, atau keadaan di luar kendali kami, dan proyek
                    melewati tenggat waktu yang telah disepakati karena kelalaian
                    dari pihak kami, pengguna berhak memperoleh kompensasi berupa
                    tambahan maintenance gratis selama{' '}
                    <strong>1 bulan</strong> atau tambahan kesempatan revisi
                    sesuai dengan kesepakatan.
                  </p>

                  <p>
                    Apabila keterlambatan disebabkan oleh pengguna sehingga
                    proses pengerjaan menjadi lebih lama, kami berhak mengenakan{' '}
                    <em>Holding Fee</em> atau Biaya Keterlambatan berdasarkan
                    kesepakatan kedua belah pihak.
                  </p>

                  <p>
                    Apabila keterlambatan tersebut menyebabkan proyek tidak dapat
                    dilanjutkan atau pengguna tidak memenuhi kewajiban yang telah
                    disepakati, kami berhak menghentikan proyek sesuai dengan
                    ketentuan pembatalan yang berlaku.
                  </p>
                </Reveal>

                {/* 07 */}
                <Reveal as="section" id="revisi">
                  <h2>7. Revisi dan Perubahan</h2>

                  <p>
                    Pengguna dapat mengajukan revisi selama proses pengerjaan
                    berlangsung selama revisi tersebut masih berada dalam ruang
                    lingkup proyek dan tidak melewati waktu pengerjaan yang telah
                    disepakati.
                  </p>

                  <p>
                    Setelah waktu pengerjaan selesai, pengguna masih dapat
                    mengajukan maksimal <strong>2 kali revisi</strong> terhadap
                    hasil proyek yang telah diserahkan.
                  </p>

                  <p>
                    Revisi yang dimaksud adalah koreksi terhadap desain,
                    informasi, maupun bagian lain yang masih termasuk dalam
                    kesepakatan awal.
                  </p>

                  <p>
                    Permintaan yang mengubah konsep, struktur, fitur, ruang
                    lingkup, atau hal lain di luar kesepakatan awal akan dianggap
                    sebagai <strong>Pekerjaan Tambahan</strong>.
                  </p>

                  <p>
                    Pekerjaan Tambahan dapat dikenakan biaya tambahan berdasarkan
                    tingkat pekerjaan dan kesepakatan kedua belah pihak.
                  </p>

                  <p>
                    Klien tidak diperkenankan meminta pekerjaan di luar{' '}
                    <strong>SOW (Scope of Work)</strong> atau paket yang dipilih
                    tanpa adanya kesepakatan tambahan.
                  </p>
                </Reveal>

                {/* 08 */}
                <Reveal as="section" id="materi">
                  <h2>8. Materi dan Konten</h2>

                  <p>
                    Pengguna bertanggung jawab atas seluruh materi dan konten
                    yang diberikan kepada kami untuk digunakan dalam proyek.
                  </p>

                  <p>
                    Pengguna wajib memastikan bahwa materi yang diberikan
                    memiliki hak atau izin penggunaan yang diperlukan serta tidak
                    melanggar Hak Cipta maupun hak pihak lain.
                  </p>

                  <p>Materi dan konten yang dimaksud dapat meliputi:</p>

                  <ol>
                    <li>Foto.</li>
                    <li>Logo.</li>
                    <li>Video.</li>
                    <li>Teks.</li>
                    <li>Ilustrasi.</li>
                    <li>Data atau statistik.</li>
                    <li>Dokumen.</li>
                    <li>Materi sejenis lainnya.</li>
                  </ol>

                  <p>
                    Dengan memberikan materi kepada kami untuk digunakan dalam
                    proyek, pengguna menyatakan bahwa pengguna memiliki hak atau
                    izin yang diperlukan untuk menggunakan dan menyerahkan materi
                    tersebut kepada kami.
                  </p>

                  <p>
                    Kami tidak bertanggung jawab atas tuntutan pihak lain yang
                    timbul akibat pelanggaran Hak Cipta atau hak lainnya yang
                    berasal dari materi yang diberikan oleh pengguna.
                  </p>

                  <p>
                    Apabila terdapat tuntutan dari pihak luar akibat materi yang
                    diberikan pengguna, pengguna bertanggung jawab atas biaya
                    atau kewajiban yang timbul dari tuntutan tersebut, termasuk{' '}
                    <em>License Fee</em> apabila diperlukan.
                  </p>

                  <p>
                    Apabila pengguna tidak dapat dihubungi dalam kondisi yang
                    menyebabkan risiko hukum atau keamanan terhadap proyek, kami
                    berhak mengambil tindakan yang diperlukan, termasuk
                    menonaktifkan website untuk sementara hingga masalah
                    tersebut diselesaikan.
                  </p>
                </Reveal>

                {/* 09 */}
                <Reveal as="section" id="pihak-ketiga">
                  <h2>9. Layanan Pihak Ketiga</h2>

                  <p>
                    Dalam menyediakan layanan kepada pengguna, kami dapat
                    menggunakan layanan atau teknologi dari pihak ketiga,
                    termasuk namun tidak terbatas pada:
                  </p>

                  <ol>
                    <li>Penyedia hosting.</li>
                    <li>Penyedia domain.</li>
                    <li>Layanan analitik.</li>
                    <li>API.</li>
                    <li>Layanan penyimpanan atau database.</li>
                    <li>Layanan perangkat lunak lainnya.</li>
                  </ol>

                  <p>
                    Apabila terdapat biaya tambahan dari penyedia layanan pihak
                    ketiga, biaya tersebut dapat dibebankan kepada pengguna setelah
                    diinformasikan dan disepakati terlebih dahulu.
                  </p>

                  <p>
                    Gangguan, perubahan kebijakan, penghentian layanan, atau
                    masalah lain yang secara langsung disebabkan oleh pihak
                    ketiga berada di luar kendali kami.
                  </p>
                </Reveal>

                {/* 10 */}
                <Reveal as="section" id="domain">
                  <h2>10. Domain</h2>

                  <p>
                    Selama proses pembuatan website, kami menyediakan biaya
                    domain secara gratis untuk <strong>tahun pertama</strong>{' '}
                    sesuai dengan ketentuan paket yang dipilih.
                  </p>

                  <p>
                    Biaya perpanjangan domain mulai dari{' '}
                    <strong>tahun kedua dan seterusnya</strong> menjadi tanggung
                    jawab Klien.
                  </p>

                  <p>Ketentuan domain yang berlaku:</p>

                  <ol>
                    <li>
                      Hak kepemilikan dan penggunaan domain sepenuhnya berada pada
                      Klien.
                    </li>

                    <li>
                      Pembelian domain akan diupayakan menggunakan email milik
                      Klien agar pengelolaan dan perpanjangan domain dapat
                      dilakukan secara mandiri oleh Klien.
                    </li>

                    <li>
                      Setelah proses pembelian dan konfigurasi selesai, apabila
                      email Klien digunakan pada perangkat Tim Teamply Nusantara,
                      akses tersebut akan dihapus dari perangkat Tim.
                    </li>

                    <li>
                      Klien juga dapat memilih untuk melakukan proses pembelian
                      domain melalui perangkat milik Klien, dengan kami membantu
                      proses pendaftaran dan konfigurasi.
                    </li>

                    <li>
                      Apabila domain kedaluwarsa karena Klien tidak melakukan
                      perpanjangan setelah masa berlaku berakhir, hal tersebut
                      bukan merupakan tanggung jawab Teamply Nusantara.
                    </li>

                    <li>
                      Kami akan berusaha memberikan pengingat mengenai
                      perpanjangan domain sekitar{' '}
                      <strong>1 bulan sebelum masa berlaku berakhir</strong>.
                    </li>
                  </ol>
                </Reveal>

                {/* 11 */}
                <Reveal as="section" id="tanggung-jawab">
                  <h2>11. Batasan Tanggung Jawab</h2>

                  <p>
                    Kami berusaha memberikan layanan yang memuaskan dan sesuai
                    dengan standar yang wajar berdasarkan ketentuan yang telah
                    disepakati.
                  </p>

                  <p>
                    Namun, kami tidak bertanggung jawab atas kerugian atau
                    masalah yang timbul akibat hal-hal di luar kesepakatan,
                    termasuk:
                  </p>

                  <ol>
                    <li>Kesalahan atau kelalaian pengguna.</li>
                    <li>Penggunaan layanan yang tidak sesuai.</li>
                    <li>Gangguan layanan pihak ketiga.</li>
                    <li>
                      Perubahan yang dilakukan oleh pihak selain Tim Teamply
                      Nusantara.
                    </li>
                    <li>
                      Keadaan darurat atau keadaan lain yang berada di luar
                      kendali kami.
                    </li>
                  </ol>

                  <p>
                    Apabila suatu masalah terbukti disebabkan oleh kelalaian kami,
                    pengguna dapat memperoleh kompensasi berupa tambahan
                    maintenance gratis selama <strong>1 bulan</strong> atau
                    tambahan revisi sesuai dengan kesepakatan.
                  </p>
                </Reveal>

                {/* 12 */}
                <Reveal as="section" id="serah-terima">
                  <h2>12. Serah Terima Proyek</h2>

                  <p>
                    Proyek akan dianggap siap untuk proses serah terima setelah
                    pekerjaan yang telah disepakati selesai dan kami telah
                    menghubungi Klien untuk melakukan proses tersebut.
                  </p>

                  <p>
                    Apabila pembayaran belum sepenuhnya dilunasi atau masih dalam
                    proses cicilan, akses penuh terhadap proyek dapat ditahan
                    sampai kewajiban pembayaran sesuai kesepakatan telah
                    dipenuhi.
                  </p>

                  <p>
                    Setelah proses serah terima selesai, kami akan membantu Klien
                    dalam proses pembelian dan/atau konfigurasi domain sesuai
                    dengan ketentuan yang berlaku.
                  </p>
                </Reveal>

                {/* 13 */}
                <Reveal as="section" id="pembatalan">
                  <h2>13. Pembatalan Pesanan</h2>

                  <p>
                    Permintaan pembatalan pesanan dapat dilakukan dengan
                    menghubungi kami melalui saluran komunikasi resmi.
                  </p>

                  <p>
                    Apabila pengguna membatalkan pesanan ketika proyek sedang
                    dalam proses pengerjaan, kami berhak mengenakan{' '}
                    <em>Cancellation Fee</em> dari uang muka yang telah diberikan,
                    dengan besaran berdasarkan pekerjaan yang telah dilakukan dan
                    kesepakatan kedua belah pihak.
                  </p>

                  <p>
                    Apabila pengguna telah melakukan pelunasan dan kemudian
                    membatalkan pesanan, pengembalian dana akan mengikuti
                    ketentuan refund pada bagian berikutnya serta hasil
                    pemeriksaan terhadap kondisi proyek.
                  </p>
                </Reveal>

                {/* 14 */}
                <Reveal as="section" id="refund">
                  <h2>14. Pengembalian Dana</h2>

                  <p>
                    Pengembalian dana hanya dapat dilakukan apabila memenuhi
                    ketentuan yang berlaku untuk layanan terkait.
                  </p>

                  <p>
                    Permintaan <em>refund</em> harus disampaikan melalui saluran
                    komunikasi resmi Teamply Nusantara.
                  </p>

                  <p>
                    Setiap permintaan refund akan diperiksa terlebih dahulu
                    berdasarkan kondisi proyek, pembayaran yang telah dilakukan,
                    pekerjaan yang telah diselesaikan, serta kesepakatan kedua
                    belah pihak.
                  </p>

                  <p>
                    Pengembalian dana tidak secara otomatis diberikan sebesar
                    100%. Besaran pengembalian, apabila disetujui, akan
                    ditentukan berdasarkan hasil pemeriksaan dan ketentuan yang
                    berlaku.
                  </p>
                </Reveal>

                {/* 15 */}
                <Reveal as="section" id="privasi">
                  <h2>15. Privasi dan Perlindungan Data</h2>

                  <p>
                    Kami menghargai dan berupaya melindungi privasi pengguna.
                  </p>

                  <p>
                    Informasi pribadi Klien tidak akan diberikan kepada pihak
                    yang tidak memiliki kepentingan terhadap proses pengerjaan
                    atau penyediaan layanan, kecuali apabila diperlukan untuk
                    memenuhi kewajiban hukum atau ketentuan layanan pihak ketiga
                    yang digunakan.
                  </p>

                  <p>
                    Informasi pribadi yang diberikan melalui website atau selama
                    proses penggunaan layanan dapat digunakan untuk:
                  </p>

                  <ol>
                    <li>Proses pemesanan.</li>
                    <li>Berkomunikasi dengan Klien.</li>
                    <li>Memberikan layanan.</li>
                    <li>
                      Memenuhi kebijakan dan persyaratan dari pihak ketiga yang
                      digunakan dalam layanan.
                    </li>
                  </ol>

                  <p>
                    Apabila diperlukan informasi pribadi untuk memenuhi
                    persyaratan pihak ketiga, kami akan menginformasikan dan,
                    apabila relevan, mendiskusikannya dengan Klien terlebih
                    dahulu.
                  </p>
                </Reveal>

                {/* 16 */}
                <Reveal as="section" id="pelanggaran">
                  <h2>16. Pelanggaran Ketentuan</h2>

                  <p>
                    Apabila pengguna tidak mematuhi Syarat dan Ketentuan yang
                    berlaku, kami berhak mengambil tindakan yang sesuai dengan
                    tingkat dan dampak pelanggaran, termasuk:
                  </p>

                  <ol>
                    <li>Memberikan peringatan.</li>
                    <li>Membatasi atau menutup akses terhadap website.</li>
                    <li>Menangguhkan layanan.</li>
                    <li>
                      Membatalkan pesanan sesuai dengan ketentuan pembatalan dan
                      pengembalian dana yang berlaku.
                    </li>
                    <li>
                      Mengambil tindakan lain sesuai dengan hukum yang berlaku.
                    </li>
                  </ol>

                  <p>
                    Tindakan yang diambil akan mempertimbangkan tingkat, dampak,
                    dan kondisi pelanggaran yang terjadi.
                  </p>
                </Reveal>

                {/* 17 */}
                <Reveal as="section" id="darurat">
                  <h2>17. Keadaan Darurat</h2>

                  <p>
                    Apabila terjadi keadaan di luar kendali kami, Tim Teamply
                    Nusantara tidak bertanggung jawab penuh atas keterlambatan
                    atau kegagalan dalam menjalankan kewajiban yang secara langsung
                    disebabkan oleh keadaan tersebut.
                  </p>

                  <p>Keadaan darurat dapat mencakup:</p>

                  <ol>
                    <li>Bencana alam.</li>
                    <li>Gangguan jaringan berskala besar.</li>
                    <li>Gangguan infrastruktur.</li>
                    <li>Kebijakan atau tindakan pemerintah.</li>
                    <li>Kerusuhan.</li>
                    <li>Perang.</li>
                    <li>Gangguan layanan pihak ketiga.</li>
                    <li>Keadaan besar lainnya di luar kendali kami.</li>
                  </ol>

                  <p>
                    Kami akan berusaha memberikan pemberitahuan kepada pengguna
                    apabila keadaan tersebut berdampak pada layanan atau proses
                    pengerjaan proyek.
                  </p>
                </Reveal>

                {/* 18 */}
                <Reveal as="section" id="perubahan">
                  <h2>18. Perubahan Syarat &amp; Ketentuan</h2>

                  <p>
                    Kami dapat memperbarui Syarat dan Ketentuan apabila terdapat
                    perubahan layanan, teknologi, kebijakan, kebutuhan
                    operasional, atau perubahan hukum dan peraturan yang berlaku di
                    Indonesia.
                  </p>

                  <p>Perubahan dapat dilakukan untuk menyesuaikan dengan:</p>

                  <ol>
                    <li>Perubahan layanan.</li>
                    <li>Perubahan teknologi.</li>
                    <li>Perubahan kebijakan.</li>
                    <li>Kebutuhan operasional.</li>
                    <li>Perubahan hukum atau peraturan yang berlaku.</li>
                  </ol>

                  <p>
                    Versi terbaru dari Syarat dan Ketentuan akan menjadi acuan
                    untuk penggunaan layanan setelah perubahan tersebut
                    diberlakukan.
                  </p>
                </Reveal>

                {/* 19 */}
                <Reveal as="section" id="hukum">
                  <h2>19. Hukum yang Berlaku</h2>

                  <p>
                    Syarat dan Ketentuan ini ditafsirkan berdasarkan hukum yang
                    berlaku di Republik Indonesia.
                  </p>

                  <p>
                    Apabila terjadi perselisihan terkait penggunaan layanan,
                    para pihak akan terlebih dahulu berusaha menyelesaikannya
                    melalui komunikasi dan musyawarah dengan itikad baik.
                  </p>

                  <p>
                    Apabila penyelesaian melalui musyawarah tidak mencapai
                    kesepakatan, penyelesaian selanjutnya dilakukan sesuai dengan
                    ketentuan hukum yang berlaku di Republik Indonesia.
                  </p>
                </Reveal>

                {/* 20 */}
                <Reveal as="section" id="pemisahan">
                  <h2>20. Pemisahan Ketentuan</h2>

                  <p>
                    Apabila salah satu ketentuan dalam Syarat dan Ketentuan ini
                    dinyatakan tidak berlaku, tidak sah, atau tidak dapat
                    dilaksanakan berdasarkan hukum yang berlaku, ketentuan lainnya
                    tetap berlaku sepenuhnya.
                  </p>

                  <p>
                    Ketentuan yang tidak berlaku tersebut akan disesuaikan
                    sejauh diperlukan agar tetap dapat diterapkan secara sah,
                    tanpa memengaruhi keberlakuan ketentuan lainnya.
                  </p>
                </Reveal>

                {/* 21 */}
                <Reveal as="section" id="hubungi">
                  <h2>21. Hubungi Kami</h2>

                  <p>
                    Apabila Anda memiliki pertanyaan mengenai Syarat dan
                    Ketentuan ini, Anda dapat menghubungi Teamply Nusantara
                    melalui saluran berikut:
                  </p>

                  <div className="mt-5 p-5 sm:p-6 rounded-[14px] bg-body/60 border border-[#d4cfbc]">
                    <p className="!mb-2">
                      <strong>Teamply Nusantara</strong>
                    </p>

                    <p className="!mb-1">
                      Email:{' '}
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </p>

                    <p className="!mb-1">
                      WhatsApp:{' '}
                      <a
                        href={`https://wa.me/${SITE.waNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </p>

                    <p className="!mb-0">
                      Website:{' '}
                      <Link href="/">
                        {' '}
                        teamplynusantara.com{' '}
                      </Link>
                    </p>
                  </div>
                </Reveal>

                {/* FINAL NOTE */}
                <Reveal className="mt-12 pt-8 border-t border-[#d4cfbc]">
                  <p className="!mb-0 text-secondary/55 text-[13px] leading-relaxed">
                    Dengan menggunakan layanan Teamply Nusantara, Anda dianggap
                    telah membaca, memahami, dan menyetujui Syarat dan Ketentuan
                    yang berlaku.
                  </p>
                </Reveal>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
