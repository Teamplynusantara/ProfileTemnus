import GalleryCatalog from '@/components/GalleryCatalog';
import WaOpenButton from '@/components/WaModal';
import { SITE } from '@/data/site';
import { galleries } from '@/data/galleries';

export const metadata = {
  title: 'Galeri Proyek Website',
  description:
    'Lihat proyek website yang sudah kami bangun untuk portofolio personal, UMKM, hingga bisnis di seluruh Indonesia — lengkap dengan detail dan link live websitenya.',
  alternates: { canonical: '/gallery/' },
  openGraph: {
    title: 'Galeri Proyek Website — Teamply Nusantara',
    url: '/gallery/',
  },
};

/** Structured data: daftar proyek. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Galeri Proyek Teamply Nusantara',
  numberOfItems: galleries.length,
  itemListElement: galleries.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: g.title,
      url: `${SITE.url}/gallery/${g.slug}/`,
      image: `${SITE.url}${g.image}`,
      description: g.description,
      creator: { '@type': 'Organization', name: SITE.name },
      ...(g.url ? { sameAs: g.url } : {}),
    },
  })),
};

export default function GalleryPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-[116px] lg:pt-[150px] pb-10 border-b border-[#D4CFBC]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] justify-between items-end gap-6">
          <h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-[38px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] mb-[26px]">
            Portofolio Terbaik dari{' '}
            <span className="text-accent">Teamply Nusantara</span>
          </h1>

          <div className="mb-[34px]">
            <p className="text-sm text-secondary max-w-[480px] mb-5">
              Website yang sudah kami bangun, dari Portofolio Sederhana sampai
              UMKM. Klik untuk lihat detail atau langsung buka webnya.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#galeri"
                className="font-['JetBrains_Mono',monospace] text-[12.5px] bg-primary text-body px-5 py-[11px] rounded-full tracking-[0.03em] inline-flex items-center gap-2 hover:-translate-y-[2px] transition-transform duration-200 cursor-pointer"
              >
                Lihat Galeri →
              </a>
              <WaOpenButton
                as="a"
                className="font-['JetBrains_Mono',monospace] text-[12.5px] border border-primary px-5 py-[11px] rounded-full tracking-[0.03em] hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer"
              >
                Pesan Website
              </WaOpenButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KATALOG GALERI ===== */}
      <section className="py-16 sm:py-20 lg:py-16 scroll-mt-[90px]" id="galeri">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
          <GalleryCatalog />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
