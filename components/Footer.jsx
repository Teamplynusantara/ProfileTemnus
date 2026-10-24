import Link from 'next/link';
import { SITE } from '@/data/site';

/** Footer utama — link anchor selalu mengacu ke /#... supaya benar dari halaman mana pun. */
export default function Footer() {
  const navLinks = [
    { label: 'Tentang Kami', href: '/#tentang' },
    { label: 'Paket Jasa', href: '/#layanan' },
    { label: 'Portofolio', href: '/#portofolio' },
    { label: 'Testimoni', href: '/#testimoni' },
  ];

  return (
    <footer className="bg-primary text-body pt-[56px] sm:pt-[70px]" id="kontak">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[32px] sm:gap-[40px] pb-[44px] sm:pb-[60px] border-b border-body/16">
          <div>
            <div className="flex items-center gap-3 mb-[18px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SITE.logoSquare}
                alt={`${SITE.name} Logo`}
                width={50}
                height={50}
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
              <span className="font-['Space_Grotesk',sans-serif] font-bold text-[15px]">
                TEAMPLYNUSANTARA
              </span>
            </div>
            <p className="text-body/60 text-[14px] max-w-[280px]">
              Jasa pembuatan website profesional yang melayani pembuatan
              website, landing page, dan portofolio hingga UMKM.
            </p>
          </div>

          <div>
            <h2 className="font-['JetBrains_Mono',monospace] text-[11.5px] uppercase tracking-[0.08em] text-body/50 mb-[18px]">
              Navigasi
            </h2>
            <ul className="list-none space-y-[12px]">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-body/85 hover:text-body hover:underline cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-['JetBrains_Mono',monospace] text-[11.5px] uppercase tracking-[0.08em] text-body/50 mb-[18px]">
              Kontak
            </h2>
            <ul className="list-none space-y-[12px]">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[14px] text-body/85 hover:text-body hover:underline break-all cursor-pointer"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="text-[14px] text-body/85 hover:text-body hover:underline cursor-pointer"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-body/85 hover:text-body hover:underline cursor-pointer"
                >
                  {SITE.location}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-['JetBrains_Mono',monospace] text-[11.5px] uppercase tracking-[0.08em] text-body/50 mb-[18px]">
              Ikuti Kami
            </h2>
            <ul className="list-none space-y-[12px]">
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-body/85 hover:text-body hover:underline cursor-pointer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-body/85 hover:text-body hover:underline cursor-pointer"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 py-[22px] sm:py-[26px] font-['JetBrains_Mono',monospace] text-[11px] sm:text-[11.5px] text-body/45">
          <span>
            © {SITE.copyrightYear} {SITE.name}. Seluruh hak cipta dilindungi.
          </span>
          <span>ESTABLISHED SINCE {SITE.establishedSince}</span>
        </div>
      </div>
    </footer>
  );
}
