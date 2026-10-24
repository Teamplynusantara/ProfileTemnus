import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/data/site';

/**
 * Layout halaman legal (Syarat & Ketentuan).
 * Memakai header/footer sederhana khusus legal — bukan header
 * mega-menu utama — sesuai desain halaman SnK lama.
 */
export default function LegalLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== HEADER LEGAL ===== */}
      <header className="sticky top-0 z-50 bg-body/90 backdrop-blur-md border-b border-[#d4d0e6]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="h-[72px] flex items-center justify-between">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label={`Kembali ke ${SITE.name}`}
            >
              <Image
                src={SITE.logo}
                alt={`Logo ${SITE.name}`}
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />

              <div className="hidden sm:block">
                <div className="font-['Space_Grotesk',sans-serif] font-semibold text-[15px] text-primary leading-none">
                  {SITE.name}
                </div>

                <div className="font-['JetBrains_Mono',monospace] text-[9px] uppercase tracking-[0.12em] text-secondary/50 mt-1">
                  Digital Solutions
                </div>
              </div>
            </Link>

            {/* Back Button */}
            <Link
              href="/"
              className="font-['JetBrains_Mono',monospace] text-[11px] sm:text-[12px] uppercase tracking-[0.05em] text-secondary/70 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <span className="text-base leading-none">←</span>
              Kembali ke Website
            </Link>
          </div>
        </div>
      </header>

      {children}

      {/* ===== FOOTER LEGAL ===== */}
      <footer className="border-t border-[#d4d0e6] mt-auto">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.08em] text-secondary/40 text-center sm:text-left">
              © {SITE.copyrightYear} {SITE.name}. All rights reserved.
            </p>

            <Link
              href="/"
              className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.08em] text-secondary/50 hover:text-primary transition-colors"
            >
              Kembali ke Beranda ↑
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
