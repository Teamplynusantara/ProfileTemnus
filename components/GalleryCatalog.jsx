'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { galleries, getGalleryCategories } from '@/data/galleries';
import FilterButtons from './FilterButtons';

/**
 * Katalog galeri — filter kategori + jumlah item bekerja otomatis,
 * tombol "Lihat Detail" mengarah ke halaman detail /gallery/[slug].
 */
export default function GalleryCatalog() {
  const categories = useMemo(() => getGalleryCategories(), []);
  const [category, setCategory] = useState('Semua');

  const items = useMemo(
    () =>
      galleries.filter((g) => category === 'Semua' || g.category === category),
    [category]
  );

  return (
    <>
      {/* Filter */}
      <div className="border-y-2 border-[#D4CFBC] py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
        <FilterButtons
          categories={categories}
          active={category}
          onChange={setCategory}
        />

        <p className="text-sm text-primary/70 shrink-0" aria-live="polite">
          Menampilkan{' '}
          <span className="font-semibold text-primary">{items.length}</span>{' '}
          website
        </p>
      </div>

      {items.length === 0 ? (
        <p className="mt-10 text-center text-sm text-secondary py-14 border border-dashed border-[#D4CFBC] rounded-2xl">
          Belum ada proyek dengan kategori “{category}”. Coba pilih kategori
          lain.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-10">
          {items.map((g) => (
            <article key={g.slug} className="group min-w-0">
              <div className="overflow-hidden rounded-2xl border-2 border-[#D4CFBC] bg-[#FBFAF6] transition-all duration-300 group-hover:border-primary group-hover:-translate-y-1">
                <div className="flex items-center gap-3 p-3 border-b-2 border-[#D4CFBC] bg-[#FBFAF6]">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-300"></span>
                  </div>

                  {g.url && (
                    <a
                      href={g.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buka ${g.url.replace(/^https?:\/\//, '')}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 min-w-0 flex-1 h-7 px-3 rounded-md border border-[#D4CFBC] bg-white text-xs text-black/60 hover:text-primary transition-colors cursor-pointer"
                    >
                      <i className="ri-lock-line shrink-0"></i>
                      <span className="truncate">
                        {g.url.replace(/^https?:\/\//, '')}
                      </span>
                      <i className="ri-external-link-line ml-auto shrink-0"></i>
                    </a>
                  )}
                </div>

                <Image
                  src={g.image}
                  alt={g.imageAlt || g.title}
                  width={1600}
                  height={765}
                  loading="lazy"
                  className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col gap-4 pt-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium border border-primary/30 text-primary rounded-full">
                    {g.category}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                    {g.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-primary/70 max-w-lg">
                    {g.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href={`/gallery/${g.slug}/`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-[#D4CFBC] text-sm font-medium hover:bg-primary/85 transition-colors duration-300 cursor-pointer"
                  >
                    Lihat Detail
                    <i className="ri-arrow-right-up-line"></i>
                  </Link>

                  {g.url && (
                    <a
                      href={g.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/30 text-primary text-sm hover:bg-primary/5 transition-colors duration-300 cursor-pointer"
                    >
                      Lihat Website
                      <i className="ri-external-link-line"></i>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
