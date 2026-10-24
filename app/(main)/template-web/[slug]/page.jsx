import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import TemplatePreview from "@/components/TemplatePreview";
import WaOpenButton from "@/components/WaModal";
import { SITE, formatRupiah } from "@/data/site";
import { templates, getTemplateBySlug } from "@/data/templates";

/* ──── Static params untuk static export Next.js ──── */
export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

/* ──── Metadata SEO per template ──── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return { title: "Template Tidak Ditemukan" };

  const title = `${template.title} — Template Website Siap Pakai`;
  return {
    title,
    description: template.description,
    alternates: { canonical: `/template-web/${template.slug}/` },
    openGraph: {
      title: `${title} — ${SITE.name}`,
      description: template.description,
      url: `/template-web/${template.slug}/`,
      images: [
        {
          url: template.image,
          alt: template.imageAlt || template.title,
        },
      ],
    },
  };
}

/* ──── Helper template berikutnya ──── */
function getNextTemplate(currentSlug) {
  const idx = templates.findIndex((t) => t.slug === currentSlug);
  if (idx === -1) return null;
  return templates[(idx + 1) % templates.length];
}

const kickerClass =
  "font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.14em] uppercase text-accent flex items-center gap-[10px] before:content-[''] before:w-[16px] before:h-[1px] before:bg-primary before:inline-block";

export default async function TemplateDetailPage({ params }) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const next = getNextTemplate(slug);
  const year = template.addedAt ? template.addedAt.slice(0, 4) : "2026";

  /* Daftar thumbnail dinamis (yang null otomatis hilang) */
  const previewShots = [
    template.image && {
      src: template.image,
      alt: template.imageAlt || `Preview template ${template.title}`,
      label: template.textImg || "Bagian Hero",
    },
    template.image2 && {
      src: template.image2,
      alt: template.imageAlt2 || `Preview template ${template.title} 2`,
      label: template.textImg2 || "Bagian Kontak",
    },
    template.image3 && {
      src: template.image3,
      alt: template.imageAlt3 || `Preview template ${template.title} 3`,
      label: template.textImg3 || "Tampilan HP",
    },
  ].filter(Boolean);

  const detailFeatures =
    template.detailFeatures ||
    template.features?.map((f) => ({ title: f, desc: "" })) ||
    [];

  const specs = template.specs || {
    Format: template.tech?.join(", ") || "HTML, CSS, JavaScript",
    Framework: "Tanpa framework",
    Halaman: "1 halaman",
  };

  const included = template.included || [
    "File HTML, CSS, dan JavaScript lengkap",
    "Responsif di semua layar (HP, tablet, desktop)",
    "Panduan mudah mengganti teks dan gambar",
    "Lisensi pemakaian untuk 1 proyek / domain",
  ];

  const faq = template.faq || [
    {
      q: "Bagaimana cara menerima filenya?",
      a: "Setelah pembayaran terkonfirmasi, file template (ZIP) langsung dikirimkan melalui tautan download ke WhatsApp atau email Anda.",
    },
    {
      q: "Boleh dipakai untuk proyek klien?",
      a: "Satu lisensi berlaku untuk satu proyek atau website. Untuk kebutuhan proyek klien berikutnya, Anda cukup membeli lisensi tambahan.",
    },
    {
      q: "Apakah bisa dibantu kustomisasi atau pasang ke hosting?",
      a: "Bisa! Kami menyediakan jasa kustomisasi desain, penyesuaian konten, hingga setup domain & hosting. Hubungi kami via WhatsApp untuk konsultasi.",
    },
  ];

  const waBuyMessage = `Halo ${SITE.name}, saya ingin membeli template *${template.title}* (${formatRupiah(template.price)}). Mohon info nomor rekening dan proses selanjutnya.`;
  const waBuyUrl = `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(waBuyMessage)}`;
  const priceDisplay = formatRupiah(template.price).replace(",00", "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: template.title,
        description: template.description,
        image: `${SITE.url}${template.image}`,
        category: template.category,
        brand: { "@type": "Organization", name: SITE.name },
        offers: {
          "@type": "Offer",
          price: template.price,
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          url: `${SITE.url}/template-web/${template.slug}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: `${SITE.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Katalog Template",
            item: `${SITE.url}/template-web/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: template.title,
          },
        ],
      },
    ],
  };

  return (
    <>
      <section className="pt-[116px] lg:pt-[150px] pb-16 sm:pb-24">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px]">
          {/* ===== BREADCRUMB ===== */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.08em] text-secondary/60 list-none">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/template-web/"
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Katalog Template
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-medium">{template.title}</li>
            </ol>
          </nav>

          {/* ===== LAYOUT UTAMA (KIRI: PREVIEW, KANAN: KARTU BELI) ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-14 items-start">
            {/* ---- KOLOM KIRI ---- */}
            <div>
              <Reveal>
                <div className={`${kickerClass} mb-3`}>
                  {template.category}
                  <span className="text-secondary/40 normal-case tracking-normal">
                    · Rilis {year}
                  </span>
                </div>

                <h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.08] tracking-[-0.01em] text-primary">
                  {template.title}
                </h1>

                <p className="text-secondary text-[15px] sm:text-[16.5px] leading-relaxed mt-4 max-w-[620px]">
                  {template.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-5 mb-8">
                  <span className="px-3 py-1 text-xs font-medium border border-primary/30 text-primary rounded-full bg-primary/[0.03]">
                    {template.category}
                  </span>
                  {template.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/[0.06] text-primary/70 rounded-full border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* Browser Preview Frame & Dynamic Thumbnails */}
              <Reveal delay="0.1s">
                <TemplatePreview
                  images={previewShots}
                  demoUrl={template.demoUrl}
                  slug={template.slug}
                />
              </Reveal>
            </div>

            {/* ---- KOLOM KANAN: KARTU BELI STICKY ---- */}
            <aside aria-label="Pembelian" className="lg:sticky lg:top-28">
              <Reveal delay="0.1s">
                <div className="bg-[#FBFAF6] border-2 border-[#D4CFBC] rounded-[24px] p-6 sm:p-8 shadow-[0_16px_40px_-20px_rgba(38,35,122,0.18)]">
                  <span className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.12em] text-secondary/60">
                    Harga Template
                  </span>

                  <div className="font-['Space_Grotesk',sans-serif] font-bold text-[34px] sm:text-[40px] text-primary leading-tight mt-1">
                    {priceDisplay}
                  </div>

                  <p className="text-xs text-secondary/60 mt-1 mb-6 flex items-center gap-1.5">
                    <i className="ri-checkbox-circle-fill text-accent text-sm"></i>
                    Bayar sekali, tanpa biaya langganan
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href={waBuyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full font-['JetBrains_Mono',monospace] text-[13px] bg-primary text-body py-[14px] px-6 rounded-full tracking-[0.03em] inline-flex items-center justify-center gap-2 hover:-translate-y-[2px] transition-transform duration-200 cursor-pointer shadow-sm text-center"
                    >
                      Beli Sekarang{" "}
                      <i className="ri-whatsapp-line text-[16px]"></i>
                    </a>

                    {template.demoUrl ? (
                      <a
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full font-['JetBrains_Mono',monospace] text-[13px] text-primary py-[13px] px-6 rounded-full tracking-[0.03em] border border-primary hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer inline-flex items-center justify-center gap-2 text-center"
                      >
                        Lihat Live Preview{" "}
                        <i className="ri-external-link-line"></i>
                      </a>
                    ) : (
                      <WaOpenButton
                        as="a"
                        pesan={`Halo ${SITE.name}, saya ingin tanya-tanya terlebih dahulu tentang template *${template.title}*.`}
                        className="w-full font-['JetBrains_Mono',monospace] text-[13px] text-primary py-[13px] px-6 rounded-full tracking-[0.03em] border border-primary hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer inline-flex items-center justify-center gap-2 text-center"
                      >
                        Tanya Dulu via WhatsApp
                      </WaOpenButton>
                    )}
                  </div>

                  {/* Yang Termasuk */}
                  <div className="mt-7 pt-6 border-t border-[#D4CFBC]">
                    <p className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.1em] text-secondary/60 mb-3">
                      Yang Anda Dapatkan:
                    </p>
                    <ul className="space-y-2.5">
                      {included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[13.5px] text-secondary/85 leading-snug"
                        >
                          <i className="ri-check-line text-accent font-bold mt-0.5 shrink-0"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pengiriman Note */}
                  <div className="mt-6 p-3.5 rounded-xl bg-primary/[0.04] border border-primary/10 flex items-center gap-3">
                    <i className="ri-shield-flash-line text-accent text-xl shrink-0"></i>
                    <p className="text-[12px] text-secondary/70 leading-relaxed">
                      Pengiriman file instan melalui WhatsApp & email setelah
                      bukti transfer dikonfirmasi.
                    </p>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          {/* ===== SECTION 1: ISI TEMPLATE ===== */}
          <section className="mt-20 pt-16 border-t border-[#D4CFBC]">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className={`${kickerClass} mb-3`}>Fitur Template</div>
                  <h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-[24px] sm:text-[32px] text-primary leading-tight">
                    Isi Template
                  </h2>
                  <p className="text-secondary/75 text-[14.5px] leading-relaxed mt-3">
                    Komponen siap pakai yang dirancang modular sehingga
                    memudahkan Anda menyesuaikan isi tanpa merusak tampilan.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {detailFeatures.map((f, i) => (
                      <div
                        key={f.title}
                        className="bg-[#FBFAF6] border border-[#D4CFBC] rounded-[16px] p-5 hover:border-primary transition-colors duration-300"
                      >
                        <span className="font-['JetBrains_Mono',monospace] text-[12px] text-accent block mb-2">
                          0{i + 1}.
                        </span>
                        <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-primary text-[16.5px]">
                          {f.title}
                        </h3>
                        {f.desc && (
                          <p className="text-secondary/75 text-[13.5px] mt-1.5 leading-relaxed">
                            {f.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ===== SECTION 2: SPESIFIKASI ===== */}
          <section className="mt-16 pt-16 border-t border-[#D4CFBC]">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-4">
                  <div className={`${kickerClass} mb-3`}>Detail Teknis</div>
                  <h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-[24px] sm:text-[32px] text-primary leading-tight">
                    Spesifikasi
                  </h2>
                  <p className="text-secondary/75 text-[14.5px] leading-relaxed mt-3">
                    Dibangun dengan standar web modern tanpa dependensi berat,
                    menjamin kecepatan muat dan kemudahan editing.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <dl className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#D4CFBC] border border-[#D4CFBC] rounded-[16px] overflow-hidden">
                    {Object.entries(specs).map(([key, val]) => (
                      <div
                        key={key}
                        className="bg-[#FBFAF6] p-4 sm:p-5 flex flex-col justify-center"
                      >
                        <dt className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.1em] text-secondary/60">
                          {key}
                        </dt>
                        <dd className="font-semibold text-primary text-[14px] sm:text-[14.5px] mt-1.5">
                          {val}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ===== SECTION 3: FAQ ===== */}
          <section className="mt-16 pt-16 border-t border-[#D4CFBC]">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className={`${kickerClass} mb-3`}>
                    Bantuan & Tanya Jawab
                  </div>
                  <h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-[24px] sm:text-[32px] text-primary leading-tight">
                    Pertanyaan Umum
                  </h2>
                  <p className="text-secondary/75 text-[14.5px] leading-relaxed mt-3">
                    Hal-hal yang sering ditanyakan seputar pembelian dan lisensi
                    template website kami.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="divide-y divide-[#D4CFBC]">
                    {faq.map((item) => (
                      <details
                        key={item.q}
                        className="group py-4 first:pt-0 last:pb-0"
                      >
                        <summary className="font-semibold text-primary text-[15px] sm:text-[16px] cursor-pointer hover:text-accent transition-colors flex items-center justify-between gap-4 list-none">
                          <span>{item.q}</span>
                          <i className="ri-arrow-down-s-line text-lg text-accent transition-transform duration-200 group-open:rotate-180 shrink-0"></i>
                        </summary>
                        <p className="text-secondary/75 text-[14px] leading-relaxed mt-3 pr-6">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ===== TEMPLATE BERIKUTNYA ===== */}
          {next && next.slug !== template.slug && (
            <Reveal className="mt-20">
              <Link
                href={`/template-web/${next.slug}/`}
                className="group block bg-primary text-body rounded-[24px] p-8 sm:p-12 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-body/60 block mb-2">
                      Template Berikutnya
                    </span>
                    <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[26px] sm:text-[38px] leading-tight">
                      {next.title}
                    </h3>
                  </div>

                  <span className="font-['JetBrains_Mono',monospace] text-[13px] bg-body text-primary px-5 py-2.5 rounded-full inline-flex items-center gap-2 self-start sm:self-auto group-hover:gap-3 transition-all duration-200">
                    Lihat Template <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* ===== TOMBOL KEMBALI KE KATALOG ===== */}
          <div className="mt-16 text-center">
            <Link
              href="/template-web/"
              className="font-['JetBrains_Mono',monospace] text-[13px] border border-primary text-primary px-7 py-3.5 rounded-full tracking-[0.03em] hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              ← Lihat Semua Template
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
