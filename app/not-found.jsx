import Link from 'next/link';
import WaOpenButton from '@/components/WaModal';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-[116px] pb-20">
      <div className="max-w-[560px] w-full text-center">
        <p className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.14em] uppercase text-accent mb-4">
          Error 404
        </p>
        <h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-[38px] sm:text-[48px] leading-[1.05] tracking-[-0.01em] text-primary mb-4">
          Halaman tidak ditemukan
        </h1>
        <p className="text-secondary text-[15px] leading-7 mb-8">
          Halaman yang kamu cari mungkin sudah dipindah, dihapus, atau alamatnya
          salah ketik. Coba mulai dari beranda atau lihat galeri proyek kami.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="font-['JetBrains_Mono',monospace] text-[13px] bg-primary text-body px-[26px] py-[14px] rounded-full tracking-[0.03em] inline-flex items-center gap-2 hover:-translate-y-[2px] transition-transform duration-200 cursor-pointer"
          >
            Kembali ke Beranda →
          </Link>
          <WaOpenButton
            as="a"
            className="font-['JetBrains_Mono',monospace] text-[13px] text-primary px-[26px] py-[14px] rounded-full tracking-[0.03em] border border-primary hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer"
          >
            Hubungi Kami
          </WaOpenButton>
        </div>
      </div>
    </section>
  );
}
