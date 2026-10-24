import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import WaOpenButton from '@/components/WaModal';
import { SITE } from '@/data/site';
import { getGalleryBySlug, galleries } from '@/data/galleries';

/** Daftar slug untuk prerender statis (wajib untuk output export). */
export function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);
  if (!gallery) return { title: 'Proyek Tidak Ditemukan' };

  const title = `${gallery.title} — Galeri Proyek`;
  return {
    title,
    description: gallery.description,
    alternates: { canonical: `/gallery/${gallery.slug}/` },
    openGraph: {
      title: `${title} — ${SITE.name}`,
      description: gallery.description,
      url: `/gallery/${gallery.slug}/`,
      images: [{ url: gallery.image, alt: gallery.imageAlt || gallery.title }],
    },
  };
}

/** Tampilkan URL tanpa "https://www." di address-bar palsu. */
function prettyUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

const kickerClass =
  "font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.14em] uppercase text-accent flex items-center gap-[10px] before:content-[''] before:w-[16px] before:h-[1px] before:bg-primary before:inline-block";

const headingClass =
  'font-[\'Space_Grotesk\',sans-serif] font-semibold text-[26px] sm:text-[34px] leading-[1.16]';

export default async function GalleryDetailPage({ params }) {
  const { slug } = await params;
  const gallery = getGalleryBySlug(slug);
  if (!gallery) notFound();

  const others = galleries.filter((g) => g.slug !== gallery.slug).slice(0, 3);
  const year = gallery.addedAt ? gallery.addedAt.slice(0, 4) : '—';
  const overview = gallery.overview?.length
    ? gallery.overview
    : [gallery.description];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: gallery.title,
        image: `${SITE.url}${gallery.image}`,
        description: gallery.description,
        creator: { '@type': 'Organization', name: SITE.name },
        dateCreated: gallery.addedAt,
        ...(gallery.url ? { sameAs: gallery.url } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Galeri Proyek', item: `${SITE.url}/gallery/` },
          { '@type': 'ListItem', position: 3, name: gallery.title },
        ],
      },
    ],
  };

  return (
    <>
      <section className="pt-[116px] lg:pt-[150px] pb-16 sm:pb-20">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px]">
          {/* ===== BREADCRUMB ===== */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.08em] text-secondary/60 list-none">
              <li>
                <Link href="/" className="hover:text-primary cursor-pointer">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/gallery/" className="hover:text-primary cursor-pointer">
                  Galeri Proyek
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">{gallery.title}</li>
            </ol>
          </nav>

          {/* ===== HERO ===== */}
          <Reveal>
            <div className={`${kickerClass} mb-4`}>
              {gallery.category}
              <span className="text-secondary/40 normal-case tracking-normal">
                · Selesai {year}
              </span>
            </div>

            <h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.06] tracking-[-0.01em] text-primary max-w-[820px]">
              {gallery.title}
            </h1>

            <p className="text-secondary text-[15px] sm:text-[16.5px] leading-7 mt-5 max-w-[640px]">
              {gallery.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {gallery.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/[0.06] text-primary/70 rounded-full border border-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {gallery.url && (
                <a
                  href={gallery.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono',monospace] text-[13px] bg-primary text-body px-[26px] py-[14px] rounded-full tracking-[0.03em] inline-flex items-center gap-2 hover:-translate-y-[2px] transition-transform duration-200 cursor-pointer"
                >
                  Kunjungi Website <i className="ri-external-link-line"></i>
                </a>
              )}
              <WaOpenButton
                as="a"
                pesan={`Halo ${SITE.name}, saya lihat project *${gallery.title}* di galeri (${SITE.url}/gallery/${gallery.slug}/) dan ingin membuat website serupa. Bisa didiskusikan?`}
                className="font-['JetBrains_Mono',monospace] text-[13px] text-primary px-[26px] py-[14px] rounded-full tracking-[0.03em] border border-primary hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer inline-flex items-center gap-2"
              >
                Pesan Website Serupa →
              </WaOpenButton>
            </div>
          </Reveal>

          {/* ===== PREVIEW BESAR (bingkai browser) ===== */}
          <Reveal delay="0.1s" className="mt-12">
            <div className="overflow-hidden rounded-[20px] border-2 border-[#D4CFBC] bg-[#FBFAF6] shadow-[0_24px_60px_-30px_rgba(38,35,122,0.35)]">
              <div className="flex items-center gap-3 p-3 border-b-2 border-[#D4CFBC] bg-[#FBFAF6]">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-300"></span>
                </div>
                {gallery.url ? (
                  <a
                    href={gallery.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka ${prettyUrl(gallery.url)}`}
                    className="flex items-center gap-2 min-w-0 flex-1 h-8 px-3 rounded-md border border-[#D4CFBC] bg-white text-xs text-black/60 hover:text-primary transition-colors cursor-pointer"
                  >
                    <i className="ri-lock-line shrink-0"></i>
                    <span className="truncate">{prettyUrl(gallery.url)}</span>
                    <i className="ri-external-link-line ml-auto shrink-0"></i>
                  </a>
                ) : (
                  <span className="flex-1 h-8 px-3 rounded-md border border-[#D4CFBC] bg-white text-xs text-black/40 flex items-center truncate">
                    preview — {gallery.slug}
                  </span>
                )}
              </div>
              <Image
                src={gallery.image}
                alt={gallery.imageAlt || gallery.title}
                width={1600}
                height={765}
                priority
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </Reveal>

          {/* ===== STRIP INFORMASI ===== */}
          <Reveal delay="0.15s" className="mt-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D4CFBC] border border-[#D4CFBC] rounded-[16px] overflow-hidden">
              <div className="bg-[#FBFAF6] p-5">
                <dt className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.1em] text-secondary/60">
                  Kategori
                </dt>
                <dd className="font-semibold text-primary text-[14.5px] mt-1.5 list-none">
                  {gallery.category}
                </dd>
              </div>
              <div className="bg-[#FBFAF6] p-5">
                <dt className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.1em] text-secondary/60">
                  Tahun
                </dt>
                <dd className="font-semibold text-primary text-[14.5px] mt-1.5 list-none">
                  {year}
                </dd>
              </div>
              <div className="bg-[#FBFAF6] p-5">
                <dt className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.1em] text-secondary/60">
                  Layanan
                </dt>
                <dd className="font-semibold text-primary text-[14.5px] mt-1.5 list-none">
                  {gallery.tags?.join(', ') || '—'}
                </dd>
              </div>
              <div className="bg-[#FBFAF6] p-5">
                <dt className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.1em] text-secondary/60">
                  Live Website
                </dt>
                <dd className="mt-1.5 list-none">
                  {gallery.url ? (
                    <a
                      href={gallery.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent text-[14.5px] underline underline-offset-4 hover:text-primary cursor-pointer break-all"
                    >
                      {prettyUrl(gallery.url)}
                    </a>
                  ) : (
                    <span className="font-semibold text-primary text-[14.5px]">
                      —
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* ===== SOROTAN PROYEK ===== */}
          {gallery.highlights?.length > 0 && (
            <Reveal className="mt-14">
              <div className={`${kickerClass} mb-6`}>Sorotan Proyek</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gallery.highlights.map((highlight, i) => (
                  <div
                    key={highlight}
                    className="group flex gap-4 items-start bg-[#FBFAF6] border border-[#D4CFBC] rounded-[16px] p-5 hover:border-primary transition-colors duration-300"
                  >
                    <span className="font-['JetBrains_Mono',monospace] text-[13px] text-accent shrink-0 pt-0.5 group-hover:text-primary transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-secondary text-[14.5px] leading-6">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* ===== CTA BAND ===== */}
          <Reveal className="mt-16">
            <div className="bg-primary text-body rounded-[24px] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-body/60 mb-3">
                  Punya ide serupa?
                </p>
                <h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-[24px] sm:text-[30px] leading-tight max-w-[520px]">
                  Kami bisa buatkan website dengan hasil seperti ini untuk
                  bisnismu.
                </h2>
              </div>
              <WaOpenButton
                as="a"
                pesan={`Halo ${SITE.name}, saya suka hasil project *${gallery.title}* dan ingin membuat website serupa untuk kebutuhan saya.`}
                className="font-['JetBrains_Mono',monospace] text-[13px] bg-body text-primary px-[26px] py-[14px] rounded-full tracking-[0.03em] inline-flex items-center gap-2 hover:-translate-y-[2px] transition-transform duration-200 shrink-0 cursor-pointer"
              >
                Pesan Website Serupa →
              </WaOpenButton>
            </div>
          </Reveal>

          {/* ===== PROYEK LAINNYA ===== */}
          {others.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#D4CFBC]">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div>
                  <div className={`${kickerClass} mb-3`}>Proyek Lainnya</div>
                  <h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-[22px] sm:text-[28px]">
                    Jelajahi hasil kerja kami yang lain
                  </h2>
                </div>
                <Link
                  href="/gallery/"
                  className="font-['JetBrains_Mono',monospace] text-[12px] border border-primary px-5 py-2.5 rounded-full text-primary hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer"
                >
                  Lihat Semua Galeri
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/gallery/${g.slug}/`}
                    className="group overflow-hidden rounded-2xl border border-[#D4CFBC] bg-[#FBFAF6] hover:border-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={g.image}
                        alt={g.imageAlt || g.title}
                        width={1600}
                        height={765}
                        loading="lazy"
                        className="w-full h-auto object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-primary truncate">
                          {g.title}
                        </p>
                        <span className="text-[11px] font-['JetBrains_Mono',monospace] text-secondary/50 shrink-0">
                          {g.addedAt?.slice(0, 4)}
                        </span>
                      </div>
                      <p className="text-xs text-primary/60 mt-1">
                        {g.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
