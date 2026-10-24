import TemplateCatalog from '@/components/TemplateCatalog';
import WaOpenButton from '@/components/WaModal';
import { SITE } from '@/data/site';
import { templates } from '@/data/templates';

export const metadata = {
  title: 'Katalog Template Website Siap Pakai',
  description:
    'Pilih template website siap pakai dari Teamply Nusantara — beli, unduh, lalu ganti isinya sesuai bisnismu. Harga transparan, kode rapi, siap dipakai.',
  alternates: { canonical: '/template-web/' },
  openGraph: {
    title: 'Katalog Template Website Siap Pakai — Teamply Nusantara',
    url: '/template-web/',
  },
};

/** Structured data: daftar produk + penawaran. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Katalog Template Website Teamply Nusantara',
  numberOfItems: templates.length,
  itemListElement: templates.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: t.title,
      url: `${SITE.url}/template-web/${t.slug}/`,
      image: `${SITE.url}${t.image}`,
      description: t.description,
      category: t.category,
      brand: { '@type': 'Organization', name: SITE.name },
      offers: {
        '@type': 'Offer',
        price: t.price,
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: `${SITE.url}/template-web/${t.slug}/`,
      },
    },
  })),
};

export default function TemplateWebPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-[116px] pb-10 lg:pt-[150px] border-b border-[#D4CFBC]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] justify-between items-end gap-6">
          <h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-[38px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] mb-[26px]">
            Katalog Produk Digital{' '}
            <span className="text-accent">Siap Pakai!</span>
          </h1>

          <div className="mb-[34px]">
            <p className="text-sm text-secondary max-w-[480px] mb-5">
              Template website siap pakai. Beli, unduh, lalu ganti isinya sesuai
              bisnismu.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#katalog"
                className="font-['JetBrains_Mono',monospace] text-[12.5px] bg-primary text-body px-5 py-[11px] rounded-full tracking-[0.03em] inline-flex items-center gap-2 hover:-translate-y-[2px] transition-transform duration-200 cursor-pointer"
              >
                Lihat Katalog →
              </a>
              <WaOpenButton
                as="a"
                className="font-['JetBrains_Mono',monospace] text-[12.5px] border border-primary px-5 py-[11px] rounded-full tracking-[0.03em] hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer"
              >
                Tanya Dulu
              </WaOpenButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KATALOG ===== */}
      <section
        className="py-16 sm:py-20 lg:py-16 scroll-mt-[90px]"
        id="katalog"
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
          <TemplateCatalog />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
