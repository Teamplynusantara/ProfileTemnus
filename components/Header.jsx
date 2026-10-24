'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import WaOpenButton from './WaModal';
import { SITE } from '@/data/site';

/** Item navigasi — dipakai di menu desktop DAN mobile supaya selalu sama. */
const NAV_ITEMS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/#tentang' },
  { label: 'Paket', href: '/#layanan' },
  { label: 'Testimoni', href: '/#testimoni' },
];

const GALLERY_MENU = [
  {
    href: '/gallery/',
    icon: 'ri-folder-image-line',
    title: 'Galeri Proyek',
    desc: 'Lihat dokumentasi, koleksi, dan hasil proyek yang telah kami kerjakan.',
    cta: 'LIHAT GALERI',
  },
  {
    href: '/template-web/',
    icon: 'ri-image-ai-line',
    title: 'Template Website',
    desc: 'Pilih template website yang sesuai dengan kebutuhan bisnis atau proyek Anda.',
    cta: 'LIHAT TEMPLATE',
  },
];

const linkClass =
  'text-[14px] text-secondary font-medium hover:text-primary relative py-1 after:content-[\'\'] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 cursor-pointer';

const mobileLinkClass =
  'text-[15px] text-secondary font-medium py-3 border-b border-[#D4CFBC]/70 cursor-pointer';

export default function Header() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);

  const galleryRef = useRef(null);
  const galleryBtnRef = useRef(null);
  const pathname = usePathname();

  function closeAll() {
    setGalleryOpen(false);
    setMobileOpen(false);
    setMobileGalleryOpen(false);
  }

  // Tutup semua menu saat pindah halaman
  useEffect(() => {
    closeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Tutup dropdown galeri saat klik di luar menu
  useEffect(() => {
    function onDocumentClick(e) {
      if (
        galleryRef.current &&
        galleryBtnRef.current &&
        !galleryRef.current.contains(e.target) &&
        !galleryBtnRef.current.contains(e.target)
      ) {
        setGalleryOpen(false);
      }
    }
    document.addEventListener('click', onDocumentClick);
    return () => document.removeEventListener('click', onDocumentClick);
  }, []);

  // Escape menutup semua menu
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') closeAll();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Tutup menu mobile saat layar melebar ke desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-body/88 backdrop-blur-[100px] border-b border-[#D4CFBC]">
      <nav className="max-w-[1180px] mx-auto px-5 sm:px-[40px] h-[72px] sm:h-[82px] flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 min-w-0"
          aria-label={`${SITE.name} - Beranda`}
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="#26237a"
                strokeWidth="2.4"
                fill="none"
                strokeDasharray="230 60"
              />
            </svg>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE.logo}
              alt=""
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain relative z-10"
            />
          </div>
          <span className="font-['Space_Grotesk',sans-serif] font-bold text-[13px] sm:text-[15px] tracking-[0.02em] truncate">
            TEAMPLYNUSANTARA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-9">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}

          {/* Gallery Dropdown */}
          <div className="relative">
            <button
              ref={galleryBtnRef}
              type="button"
              aria-expanded={galleryOpen}
              aria-controls="galleryDropdown"
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setGalleryOpen((v) => !v);
              }}
              className="flex items-center gap-1.5 text-[14px] text-secondary font-medium hover:text-primary py-2 cursor-pointer"
            >
              Galeri
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  galleryOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mega Menu Panel */}
            <div
              id="galleryDropdown"
              ref={galleryRef}
              aria-hidden={!galleryOpen}
              className={`fixed top-[72px] sm:top-[82px] left-0 right-0 z-50 transition-all duration-300 ease-out transform ${
                galleryOpen
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 -translate-y-6 invisible pointer-events-none'
              }`}
            >
              <div className="bg-body border-y border-[#D4CFBC] shadow-[0_18px_40px_rgba(38,35,122,0.12)]">
                <div className="max-w-[1180px] mx-auto px-5 sm:px-[40px] py-8 lg:py-10">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.5fr] gap-8 lg:gap-14">
                    {/* Intro Column */}
                    <div className="flex flex-col justify-center">
                      <span className="font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-primary mb-3">
                        Jelajahi
                      </span>
                      <h3 className="font-['Space_Grotesk',sans-serif] text-2xl sm:text-3xl font-bold text-primary leading-tight">
                        Galeri &amp; Template
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-secondary max-w-sm">
                        Temukan dokumentasi proyek dan template website yang
                        telah dikembangkan dari TEAMPLYNUSANTARA.
                      </p>
                    </div>

                    {/* Menu Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {GALLERY_MENU.map((menu) => (
                        <Link
                          key={menu.href}
                          href={menu.href}
                          onClick={() => setGalleryOpen(false)}
                          className="group flex flex-col p-5 sm:p-6 rounded-xl border border-[#D4CFBC] hover:border-primary/50 hover:bg-primary/[0.035] transition-all duration-200 justify-between cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-5">
                            <div className="w-11 h-11 rounded-lg border border-[#D4CFBC] bg-primary/[0.04] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-body transition-colors duration-200">
                              <i
                                className={`${menu.icon} text-xl text-primary group-hover:text-body`}
                              ></i>
                            </div>
                            <svg
                              className="w-4 h-4 text-secondary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              aria-hidden="true"
                            >
                              <path
                                d="M5 12h14m-6-6 6 6-6 6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <div>
                            <h4 className="font-['Space_Grotesk',sans-serif] text-base font-bold text-primary">
                              {menu.title}
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-secondary">
                              {menu.desc}
                            </p>
                          </div>

                          <span className="mt-5 pt-4 border-t border-[#D4CFBC]/70 text-[11px] font-['JetBrains_Mono',monospace] tracking-wide text-secondary group-hover:text-primary transition-colors">
                            {menu.cta}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="mt-7 pt-5 border-t border-[#D4CFBC]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <p className="text-xs text-secondary">
                      TEAMPLYNUSANTARA — Galeri &amp; Template Website.
                    </p>
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-wider text-secondary/70">
                      EXPLORE OUR WORK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <WaOpenButton
            className="hidden sm:inline-flex font-['JetBrains_Mono',monospace] text-[12.5px] border border-primary px-5 py-[10px] rounded-full tracking-[0.03em] hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer"
            onClick={() => setMobileOpen(false)}
          >
            Hubungi Kami
          </WaOpenButton>

          <button
            type="button"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-controls="mobileMenu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] shrink-0"
          >
            <span
              className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${
                mobileOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-primary transition-opacity duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${
                mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobileMenu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-body ${
          mobileOpen
            ? 'max-h-[500px] opacity-100 visible border-t border-[#D4CFBC]'
            : 'max-h-0 opacity-0 invisible border-t border-transparent'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-5 py-4 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={mobileLinkClass}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Gallery Dropdown */}
          <div className="border-b border-[#D4CFBC]/70">
            <button
              type="button"
              aria-expanded={mobileGalleryOpen}
              aria-controls="mobileGalleryDropdown"
              onClick={() => setMobileGalleryOpen((v) => !v)}
              className="w-full flex items-center justify-between py-3 text-[15px] text-secondary font-medium cursor-pointer"
            >
              Galeri
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileGalleryOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              id="mobileGalleryDropdown"
              className={`grid transition-all duration-300 ease-in-out ${
                mobileGalleryOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0 pointer-events-none'
              }`}
            >
              <div className="overflow-hidden pl-3">
                {GALLERY_MENU.map((menu) => (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center py-2.5 text-sm text-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    {menu.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <WaOpenButton
            className="mt-4 text-center font-['JetBrains_Mono',monospace] text-[12.5px] border border-primary px-5 py-[12px] rounded-full tracking-[0.03em] hover:bg-primary hover:text-body transition-colors duration-200 cursor-pointer"
            onClick={() => setMobileOpen(false)}
          >
            Hubungi Kami
          </WaOpenButton>
        </div>
      </div>
    </header>
  );
}
