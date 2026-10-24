import Image from 'next/image';
import Link from 'next/link';
import ProjectsSection from '@/components/ProjectsSection';
import Reveal from '@/components/Reveal';
import WaOpenButton from '@/components/WaModal';
import { packages } from '@/data/packages';
import { SITE } from '@/data/site';
import { team } from '@/data/team';
import { testimonials } from '@/data/testimonials';

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

const kickerClass =
  "font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.14em] uppercase text-accent flex items-center gap-[10px] before:content-[''] before:w-[16px] before:h-[1px] before:bg-primary before:inline-block";

const headingClass =
  'font-[\'Space_Grotesk\',sans-serif] font-semibold text-[26px] sm:text-[36px] lg:text-[42px] leading-[1.16] sm:leading-[1.12]';

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:text-[#B8B4E0] transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-[116px] pb-16 lg:pt-[150px] lg:pb-[96px] border-b border-[#D4CFBC]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div>
            <div className={`${kickerClass} mb-[22px]`}>
              Jasa Pembuatan website
            </div>
            <h1 className="font-['Space_Grotesk',sans-serif] font-semibold text-[38px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] mb-[26px]">
              Membuat website <br /> tampil{' '}
              <em className="not-italic text-accent">lebih profesional</em>
              <br />
              di mata dunia
            </h1>
            <p className="text-[17px] text-secondary max-w-[480px] mb-[34px]">
              {SITE.name} menghadirkan layanan pembuatan website profesional,
              pengembangan aplikasi web, dan solusi digital untuk bisnis, UMKM,
              hingga perusahaan di seluruh Indonesia.
            </p>
            <div className="flex gap-[14px] items-center mb-[44px]">
              <a
                href="#layanan"
                className="font-['JetBrains_Mono',monospace] text-[13px] bg-primary text-body px-[26px] py-[14px] rounded-full tracking-[0.03em] inline-flex items-center gap-2 hover:-translate-y-[2px] transition-transform duration-200 cursor-pointer"
              >
                Lihat Paket Jasa →
              </a>
              <Link
                href="/snk"
                className="font-['JetBrains_Mono',monospace] text-[13px] text-primary px-[6px] py-[14px] tracking-[0.03em] border-b border-primary cursor-pointer"
              >
                Syarat &amp; Ketentuan
              </Link>
            </div>
          </div>

          <div
            id="temnusLogo"
            className="relative aspect-square max-w-[340px] lg:max-w-none mx-auto w-full flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-dashed border-[#C3BDA4] animate-[spin_60s_linear_infinite] motion-reduce:animate-none"></div>
            <div className="absolute inset-[14%] rounded-full border border-dashed border-[#C3BDA4] animate-[spin_44s_linear_infinite_reverse] motion-reduce:animate-none"></div>
            <Image
              src={SITE.logo}
              alt={`${SITE.name} Logo`}
              width={500}
              height={500}
              priority
              className="relative z-10"
            />
            <span className="absolute font-['JetBrains_Mono',monospace] text-[10.5px] text-accent tracking-[0.05em] bg-body px-[6px] py-[2px] top-[6%] left-[2%]">
              return view(/teamplynusantara);
            </span>
            <span className="absolute font-['JetBrains_Mono',monospace] text-[10.5px] text-accent tracking-[0.05em] bg-body px-[6px] py-[2px] bottom-[8%] right-[0%] text-right">
              class=&quot;text-body&quot;
            </span>
            <span className="absolute font-['JetBrains_Mono',monospace] text-[10.5px] text-accent tracking-[0.05em] bg-body px-[6px] py-[2px] top-[46%] -right-[2%]">
              const TN = true
            </span>
          </div>
        </div>
      </section>

      {/* ===== TENTANG ===== */}
      <section
        className="py-[64px] sm:py-[80px] lg:py-[100px] border-b border-[#D4CFBC] scroll-mt-[90px]"
        id="tentang"
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px]">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-[24px] lg:gap-[40px] mb-[40px] sm:mb-[56px]">
            <div className={kickerClass}>Tentang Kami</div>
            <h2 className={headingClass}>
              Tim yang akan membangun website sesuai dengan cerita yang
              disampaikan
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-[64px] items-start">
            <Reveal variant="reveal-left">
              <p className="text-secondary text-[15px] sm:text-[16px] mb-[18px]">
                Teamply Nusantara berdiri dari kegemaran sederhana: merancang
                landing page, membuat website, serta mendesain UI/UX. Kami tumbuh
                menjadi tim profesional dan bersertifikat yang teruji di dunia
                industri. Kami melayani berbagai keinginan klien, mulai dari
                portofolio pribadi hingga website UMKM.
              </p>
              <p className="text-secondary text-[15px] sm:text-[16px] mb-[18px]">
                Setiap pembuatan website akan dibuat sesuai dengan keinginan dan
                kebutuhan klien, untuk membantu klien membangun website yang
                sesuai dengan cerita mereka.
              </p>
              <ul className="list-none mt-[26px] text-right">
                <li className="font-['JetBrains_Mono',monospace] text-[12px] sm:text-[12.5px] flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 py-[14px] border-t border-[#D4CFBC] text-secondary text-left sm:text-right">
                  <b className="font-['Inter',sans-serif] font-semibold text-primary text-[14px] flex items-center">
                    Framework
                  </b>
                  <span>Tailwind CSS, Laravel, dll</span>
                </li>
                <li className="font-['JetBrains_Mono',monospace] text-[12px] sm:text-[12.5px] flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 py-[14px] border-t border-[#D4CFBC] text-secondary text-left sm:text-right">
                  <b className="font-['Inter',sans-serif] font-semibold text-primary text-[14px] flex items-center">
                    Cakupan
                  </b>
                  <span>Indonesia</span>
                </li>
                <li className="font-['JetBrains_Mono',monospace] text-[12px] sm:text-[12.5px] flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 py-[14px] border-t border-b border-[#D4CFBC] text-secondary text-left sm:text-right">
                  <b className="font-['Inter',sans-serif] font-semibold text-primary text-[14px] flex items-center">
                    Kualifikasi
                  </b>
                  <span>
                    Sertifikat Profesional
                    <br /> (Ditandatangani oleh perusahaan)
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal
              variant="reveal-right"
              className="bg-[#FBFAF6] border border-[#D4CFBC] rounded-[16px] p-6 sm:p-8"
            >
              <div className="grid grid-cols-2 gap-[18px] sm:gap-[24px]">
                <div className="pb-[20px] sm:pb-[24px] mb-[20px] sm:mb-[24px] border-b border-[#D4CFBC]">
                  <b className="font-['Space_Grotesk',sans-serif] text-[26px] sm:text-[32px] block mb-1">
                    2025
                  </b>
                  <span className="font-['JetBrains_Mono',monospace] text-[10px] sm:text-[11px] uppercase tracking-[0.07em] text-accent">
                    Tahun Berdiri
                  </span>
                </div>
                <div className="pb-[20px] sm:pb-[24px] mb-[20px] sm:mb-[24px] border-b border-[#D4CFBC]">
                  <b className="font-['Space_Grotesk',sans-serif] text-[26px] sm:text-[32px] block mb-1">
                    98%
                  </b>
                  <span className="font-['JetBrains_Mono',monospace] text-[10px] sm:text-[11px] uppercase tracking-[0.07em] text-accent">
                    Klien Puas
                  </span>
                </div>
                <div>
                  <b className="font-['Space_Grotesk',sans-serif] text-[26px] sm:text-[32px] block mb-1">
                    5+
                  </b>
                  <span className="font-['JetBrains_Mono',monospace] text-[10px] sm:text-[11px] uppercase tracking-[0.07em] text-accent">
                    Proyek yang dikerjakan
                  </span>
                </div>
                <div>
                  <b className="font-['Space_Grotesk',sans-serif] text-[26px] sm:text-[32px] block mb-1">
                    10 jam
                  </b>
                  <span className="font-['JetBrains_Mono',monospace] text-[10px] sm:text-[11px] uppercase tracking-[0.07em] text-accent">
                    Waktu Operasional
                  </span>{' '}
                  <br />
                  <span className="font-['JetBrains_Mono',monospace] text-[8px] sm:text-[9px] uppercase tracking-[0.07em] text-accent">
                    09.00 s/d 19.00 WIB weekday
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== PAKET JASA ===== */}
      <section
        className="py-[64px] sm:py-[80px] lg:py-[100px] border-b border-[#D4CFBC] scroll-mt-[90px]"
        id="layanan"
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px]">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-[24px] lg:gap-[40px] mb-[40px] sm:mb-[56px]">
            <div className={kickerClass}>Website Price List</div>
            <div>
              <h2 className={headingClass}>
                Empat paket, satu website yang tepat.
              </h2>
              <p className="text-secondary text-[14.5px] sm:text-[15.5px] mt-2 max-w-[440px]">
                Pilih paket sesuai kebutuhan website Anda — dari landing page
                ringan hingga solusi custom.
              </p>
            </div>
          </Reveal>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#D4CFBC] border border-[#D4CFBC] rounded-[16px] overflow-hidden shadow-sm">
            {packages.map((p) => (
              <Reveal
                key={p.no}
                variant="reveal reveal-stagger"
                delay={p.delay}
                className="group relative bg-[#FBFAF6] p-[26px_22px] sm:p-[34px_26px] flex flex-col transition-all duration-300 ease-out hover:bg-[#403B84] hover:z-10 hover:shadow-xl"
              >
                {p.featured && (
                  <span className="absolute top-4 right-4 bg-[#403B84] text-white group-hover:bg-white group-hover:text-[#403B84] font-['JetBrains_Mono',monospace] text-[9.5px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium transition-colors duration-300">
                    Populer
                  </span>
                )}

                <div className="font-['JetBrains_Mono',monospace] text-[11px] text-accent mb-[18px] sm:mb-[22px] tracking-[0.06em] group-hover:text-[#B8B4E0] transition-colors duration-300">
                  PAKET {p.no}
                </div>
                <h3 className="font-['Space_Grotesk',sans-serif] font-semibold text-[19px] sm:text-[20px] mb-2 group-hover:text-white transition-colors duration-300">
                  {p.name}
                </h3>
                <div className="font-['JetBrains_Mono',monospace] text-[11px] sm:text-[11.5px] text-accent mb-[16px] sm:mb-[18px] uppercase tracking-[0.04em] group-hover:text-[#B8B4E0] transition-colors duration-300">
                  {p.tagline}
                </div>
                <p className="text-[13.5px] text-secondary mb-[20px] sm:mb-[22px] flex-grow group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                  {p.description}
                </p>

                <ul className="list-none mb-[22px] sm:mb-[26px] space-y-[10px]">
                  {p.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-[13px] text-secondary flex items-start gap-2.5 group-hover:text-white/90 transition-colors duration-300"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Maintenance Opsional */}
                <div className="mt-auto mb-[18px] p-[12px_14px] rounded-[10px] border border-[#D4CFBC] bg-body/30 group-hover:bg-white/10 group-hover:border-[#5A54A0] transition-colors duration-300">
                  <div className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.04em] text-accent group-hover:text-[#B8B4E0]">
                    Maintenance Opsional
                  </div>
                  <div className="text-[12px] text-secondary mt-1 group-hover:text-white/90">
                    Mulai{' '}
                    <b className="font-semibold text-primary group-hover:text-white">
                      {p.maintenance.price}
                    </b>
                  </div>
                  <div className="text-[11px] text-secondary/70 mt-1 group-hover:text-white/60">
                    {p.maintenance.note}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="font-['JetBrains_Mono',monospace] text-[12px] text-accent pt-[18px] border-t border-[#D4CFBC] mb-5 group-hover:text-[#B8B4E0] group-hover:border-[#5A54A0] transition-colors duration-300">
                  Mulai dari
                  <b className="block font-['Space_Grotesk',sans-serif] text-[22px] text-primary font-semibold mt-[2px] group-hover:text-white transition-colors duration-300">
                    {p.priceLabel}
                  </b>
                </div>
                <WaOpenButton
                  paket={p.waPaket}
                  className="font-['JetBrains_Mono',monospace] text-[12px] text-center py-[12px] px-4 border border-primary text-primary rounded-full transition-all duration-300 ease-out group-hover:border-white group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-[#403B84] hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  Pesan Paket
                </WaOpenButton>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTOFOLIO TIM ===== */}
      <section
        className="py-[64px] sm:py-[80px] lg:py-[100px] border-b border-[#D4CFBC] scroll-mt-[90px]"
        id="portofolio"
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px]">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-[24px] lg:gap-[40px] mb-[40px] sm:mb-[56px]">
            <div className={kickerClass}>portofolio</div>
            <h2 className={headingClass}>
              Website Portofolio Tim IT kami.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {team.map((member) => (
              <Reveal
                key={member.name}
                variant="reveal reveal-scale reveal-stagger"
                delay={member.delay}
                className={`group bg-[#FBFAF6] rounded-[18px] overflow-hidden border border-[#D4CFBC] hover:border-primary transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                  member.wideOnTablet ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.imageAlt || member.name}
                    width={member.imageWidth}
                    height={member.imageHeight}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                      {member.role}
                    </span>
                    <h3 className="font-display text-[20px] sm:text-[22px] font-semibold mt-2">
                      {member.name}
                    </h3>
                    <p className="text-secondary text-[14.5px] sm:text-[15px] mt-3 leading-7">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <p className="text-secondary text-[16px] sm:text-[17px] mt-6 leading-7 font-semibold">
                      Job Desc :
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {member.jobDesc.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-body text-[12px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:gap-3 transition-all cursor-pointer"
                    >
                      Lihat Portofolio Mereka →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECT PENGERJAAN TEAMPLY (modal detail) ===== */}
      <ProjectsSection />

      {/* ===== TESTIMONIAL ===== */}
      <section
        className="py-[64px] sm:py-[80px] lg:py-[100px] border-b border-[#D4CFBC] scroll-mt-[90px]"
        id="testimoni"
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px]">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-[24px] lg:gap-[40px] mb-[40px] sm:mb-[56px]">
            <div className={kickerClass}>testimoni</div>
            <h2 className={headingClass}>
              Beberapa testimoni yang telah klien kami sampaikan.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] items-stretch">
            {testimonials.map((t) => (
              <Reveal
                key={t.name}
                variant="reveal reveal-scale reveal-stagger"
                delay={t.delay}
                className="group h-full flex flex-col border-2 border-[#D4CFBC] rounded-[16px] hover:border-primary transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex gap-4 items-center rounded-t-[16px] border-b-2 border-[#D4CFBC] overflow-hidden bg-[#FBFAF6]/50 p-3">
                  <div className="flex gap-2">
                    <div className="bg-red-300 w-2 h-2 rounded-full"></div>
                    <div className="bg-yellow-300 w-2 h-2 rounded-full"></div>
                    <div className="bg-green-300 w-2 h-2 rounded-full"></div>
                  </div>
                  {t.siteUrl ? (
                    <a
                      href={t.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center bg-white border border-[#D4CFBC] rounded-md px-3 py-1 h-6 w-full text-[12px] text-black/70 cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out duration-500"
                    >
                      <i className="ri-lock-line"></i>
                      <p className="truncate">{t.siteLabel}</p>
                    </a>
                  ) : (
                    <div className="flex gap-2 items-center bg-white border border-[#D4CFBC] rounded-md px-3 py-1 h-6 w-full text-[12px] text-black/70 min-w-0">
                      <i className="ri-lock-line"></i>
                      <p className="truncate">{t.siteLabel}</p>
                    </div>
                  )}
                </div>

                <div className="flex-1 rounded-b-[16px] overflow-hidden bg-[#FBFAF6] p-6 flex flex-col gap-4">
                  <p className="flex-1 text-[14px] sm:text-[15px] leading-7 font-medium text-secondary flex items-center whitespace-pre-line">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="border border-dashed border-[#D4CFBC]"></div>
                  <div className="flex gap-3">
                    <div
                      className={`${t.color} rounded-xl h-10 w-10 flex justify-center items-center shrink-0`}
                    >
                      <p className="text-white font-semibold">{t.initial}</p>
                    </div>
                    <div className="text-[12px]">
                      <p className="font-medium text-secondary">{t.name}</p>
                      <p className="text-[#11102e]/70">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="py-[50px] sm:py-[70px]">
        <Reveal className="max-w-[1180px] mx-auto px-5 sm:px-[40px] flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-6">
          <h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-[22px] sm:text-[30px] lg:text-[34px] max-w-[520px]">
            Siap membawa cerita bisnis Anda ke internet?
          </h2>
          <WaOpenButton
            as="a"
            className="font-['JetBrains_Mono',monospace] text-[13px] bg-primary text-body px-[26px] py-[14px] rounded-full tracking-[0.03em] inline-flex items-center gap-2 hover:-translate-y-[2px] transition-transform duration-200 w-full sm:w-auto justify-center cursor-pointer"
          >
            Diskusikan Proyek Anda →
          </WaOpenButton>
        </Reveal>
      </section>
    </>
  );
}
