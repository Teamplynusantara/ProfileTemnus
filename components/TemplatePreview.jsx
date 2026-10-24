'use client';

import Image from 'next/image';
import { useState } from 'react';

function prettyUrl(url) {
  return url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : '';
}

export default function TemplatePreview({ images = [], demoUrl = null, slug = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback jika array kosong
  if (!images.length) return null;

  // Pastikan activeIndex selalu valid jika list gambar berubah
  const safeIndex = activeIndex < images.length ? activeIndex : 0;
  const currentImage = images[safeIndex];

  return (
    <div>
      {/* Bingkai Browser Besar (Preview Utama) */}
      <div className="overflow-hidden rounded-[20px] border-2 border-[#D4CFBC] bg-[#FBFAF6] shadow-[0_24px_60px_-30px_rgba(38,35,122,0.35)] transition-all">
        {/* Bar atas browser */}
        <div className="flex items-center gap-3 p-3 border-b-2 border-[#D4CFBC] bg-[#FBFAF6]">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-300"></span>
          </div>

          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 min-w-0 flex-1 h-8 px-3 rounded-md border border-[#D4CFBC] bg-white text-xs text-black/60 hover:text-primary transition-colors cursor-pointer"
            >
              <i className="ri-lock-line shrink-0 text-accent"></i>
              <span className="truncate">{prettyUrl(demoUrl)}</span>
              <i className="ri-external-link-line ml-auto shrink-0"></i>
            </a>
          ) : (
            <span className="flex-1 h-8 px-3 rounded-md border border-[#D4CFBC] bg-white text-xs text-black/40 flex items-center truncate">
              preview — {slug} {currentImage.label ? `· ${currentImage.label}` : ''}
            </span>
          )}
        </div>

        {/* Gambar Preview Terpilih */}
        <div className="relative w-full bg-[#FBFAF6]">
          <Image
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt || `Preview template ${slug}`}
            width={1600}
            height={1000}
            priority
            className="w-full h-auto object-cover object-top transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Thumbnail Selector (tetap grid-cols-3 agar ukuran kartu tetap kecil dan tidak melebar) */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-5">
          {images.map((item, idx) => {
            const isActive = idx === safeIndex;
            return (
              <button
                key={item.src + idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group text-left overflow-hidden rounded-xl border-2 transition-all cursor-pointer focus:outline-none ${
                  isActive
                    ? 'border-primary ring-2 ring-primary/25 shadow-sm'
                    : 'border-[#D4CFBC] bg-[#FBFAF6] hover:border-primary/60 opacity-80 hover:opacity-100'
                }`}
                aria-label={`Pilih preview: ${item.label}`}
                aria-pressed={isActive}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FBFAF6]">
                  <Image
                    src={item.src}
                    alt={item.alt || item.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p
                  className={`p-2 text-center font-['JetBrains_Mono',monospace] text-[10.5px] truncate border-t border-[#D4CFBC] transition-colors ${
                    isActive
                      ? 'bg-primary text-body font-semibold'
                      : 'bg-[#FBFAF6] text-secondary/70 group-hover:text-primary'
                  }`}
                >
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
