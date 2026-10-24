'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import Reveal from './Reveal';

/**
 * Section "Project Pengerjaan Teamply Nusantara" + modal detail.
 * Data project diambil dari data/projects.js — tambah project
 * cukup dengan menambah object di sana.
 */
export default function ProjectsSection() {
  const [activeKey, setActiveKey] = useState(null);
  const active = projects.find((p) => p.key === activeKey) || null;

  // Kunci scroll & tutup dengan Escape selama modal terbuka
  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = 'hidden';
    function onKeyDown(e) {
      if (e.key === 'Escape') setActiveKey(null);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [active]);

  return (
    <>
      <section
        className="py-[64px] sm:py-[80px] lg:py-[100px] border-b border-[#D4CFBC] scroll-mt-[90px]"
        id="project-teamply"
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px]">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-[24px] lg:gap-[40px] mb-[40px] sm:mb-[56px]">
            <div className="font-['JetBrains_Mono',monospace] text-[12px] tracking-[0.14em] uppercase text-accent flex items-center gap-[10px] before:content-[''] before:w-[16px] before:h-[1px] before:bg-primary before:inline-block">
              pengerjaan kami
            </div>
            <div>
              <h2 className="font-['Space_Grotesk',sans-serif] font-semibold text-[26px] sm:text-[36px] lg:text-[42px] leading-[1.16] sm:leading-[1.12]">
                Project yang telah dikerjakan Teamply Nusantara.
              </h2>
              <p className="text-secondary text-[14.5px] sm:text-[15px] mt-4 leading-7 max-w-[720px]">
                Selain menampilkan portofolio tim, berikut beberapa project
                website yang telah kami rancang dan kembangkan untuk kebutuhan
                personal branding dan profesional.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[24px]">
            {projects.map((p) => (
              <Reveal
                key={p.key}
                as="article"
                variant="reveal reveal-stagger"
                delay={p.delay}
                className="group bg-[#FBFAF6] rounded-[20px] overflow-hidden border border-[#D4CFBC] hover:border-primary transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div
                  className="relative overflow-hidden aspect-[16/10]"
                  style={{ backgroundColor: p.imageBg }}
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt || p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.08em]">
                    {p.badge}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveKey(p.key)}
                    className="absolute bottom-4 right-4 px-4 py-2.5 rounded-full bg-white text-black text-[12px] font-semibold translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  >
                    Lihat Detail →
                  </button>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                        Project {p.no}
                      </span>
                      <h3 className="font-display text-[21px] sm:text-[24px] font-semibold mt-2">
                        {p.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 shrink-0 rounded-full border border-[#D4CFBC] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      ↗
                    </div>
                  </div>

                  <p className="text-secondary text-[14px] sm:text-[15px] mt-3 leading-7">
                    {p.description}
                  </p>

                  <div className="flex gap-2 mt-5 flex-wrap">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-body text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#D4CFBC] flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] sm:text-[11px] text-secondary uppercase tracking-[0.06em]">
                      Teamply Nusantara
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveKey(p.key)}
                      className="inline-flex items-center gap-2 text-primary font-medium text-[13px] hover:gap-3 transition-all cursor-pointer"
                    >
                      Lihat Project →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-secondary text-[13px] sm:text-[14px]">
              Punya kebutuhan website sendiri? Kami siap membantu
              mengembangkannya.
            </p>
            <Link
              href="/#kontak"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary text-primary text-[13px] font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
            >
              Mulai Project →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MODAL DETAIL PROJECT ===== */}
      {active && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveKey(null);
          }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setActiveKey(null)}
          ></div>

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="projectModalTitle"
            className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto bg-[#FBFAF6] rounded-[22px] border border-[#D4CFBC] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveKey(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:scale-105 transition-transform text-xl cursor-pointer"
              aria-label="Tutup modal"
            >
              ×
            </button>

            <div className="bg-black overflow-hidden">
              <Image
                src={active.image}
                alt={active.imageAlt || active.title}
                width={active.imageWidth}
                height={active.imageHeight}
                className="w-full h-auto max-h-[55vh] object-cover object-top"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                {active.category}
              </span>
              <h3
                id="projectModalTitle"
                className="font-display text-[28px] sm:text-[36px] font-semibold mt-2"
              >
                {active.title}
              </h3>
              <p className="text-secondary text-[14px] sm:text-[15px] leading-7 mt-4">
                {active.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
                <div className="p-5 rounded-[16px] border border-[#D4CFBC] bg-white/40">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-secondary mb-2">
                    Pengerjaan
                  </p>
                  <p className="font-semibold text-[14px]">{active.work}</p>
                </div>
                <div className="p-5 rounded-[16px] border border-[#D4CFBC] bg-white/40">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-secondary mb-2">
                    Kategori
                  </p>
                  <p className="font-semibold text-[14px]">{active.type}</p>
                </div>
              </div>

              <div className="mt-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-secondary mb-3">
                  Fokus Pengerjaan
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-2 rounded-full bg-body border border-[#D4CFBC] text-[11px] text-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#D4CFBC] flex flex-col sm:flex-row gap-3">
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white text-[13px] font-semibold hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Kunjungi Website →
                </a>
                <button
                  type="button"
                  onClick={() => setActiveKey(null)}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#D4CFBC] text-[13px] font-semibold hover:border-primary transition-all cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
