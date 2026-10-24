'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { templates, getTemplateCategories } from '@/data/templates';
import { formatRupiah } from '@/data/site';
import FilterButtons from './FilterButtons';
import SortSelect from './SortSelect';

/**
 * Katalog template — filter kategori + urutan benar-benar berfungsi,
 * jumlah "Menampilkan X" dihitung otomatis dari data.
 */
export default function TemplateCatalog() {
  const categories = useMemo(() => getTemplateCategories(), []);
  const [category, setCategory] = useState('Semua');
  const [sort, setSort] = useState('new');

  const items = useMemo(() => {
    let list = templates.filter(
      (t) => category === 'Semua' || t.category === category
    );

    const byNewest = (a, b) =>
      new Date(b.addedAt || 0) - new Date(a.addedAt || 0);

    switch (sort) {
      case 'old':
        list = [...list].sort(
          (a, b) => new Date(a.addedAt || 0) - new Date(b.addedAt || 0)
        );
        break;
      case 'low':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'high':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      default:
        list = [...list].sort(byNewest);
    }

    return list;
  }, [category, sort]);

  return (
    <>
      {/* Filter */}
      <div className="border-y-2 border-[#D4CFBC] py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
        <FilterButtons
          categories={categories}
          active={category}
          onChange={setCategory}
        />

        <div className="flex gap-4 items-center">
          <p
            className="text-sm text-primary/70 shrink-0"
            aria-live="polite"
          >
            Menampilkan{' '}
            <span className="font-semibold text-primary">{items.length}</span>{' '}
            template
          </p>
          <SortSelect value={sort} onChange={setSort} />
        </div>
      </div>

      {items.length === 0 ? (
        <p className="mt-10 text-center text-sm text-secondary py-14 border border-dashed border-[#D4CFBC] rounded-2xl">
          Belum ada template dengan kategori “{category}”. Coba pilih kategori
          lain.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-10">
          {items.map((t) => (
            <article key={t.slug} className="group min-w-0">
              <div className="overflow-hidden rounded-2xl border-2 border-[#D4CFBC] bg-[#FBFAF6] transition-all duration-300 group-hover:border-primary group-hover:-translate-y-1">
                <div className="flex items-center gap-3 p-3 border-b-2 border-[#D4CFBC] bg-[#FBFAF6]">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-300"></span>
                  </div>
                </div>

                <Image
                  src={t.image}
                  alt={t.imageAlt || t.title}
                  width={1600}
                  height={765}
                  loading="lazy"
                  className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col gap-4 pt-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium border border-primary/30 text-primary rounded-full">
                    {t.category}
                  </span>
                  {t.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/[0.06] text-primary/70 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col">
                  <h2 className="w-fit text-xl sm:text-2xl font-bold text-primary tracking-tight underline-offset-4 py-1.5 relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-1 after:h-[1px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    {t.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-primary/70 max-w-lg">
                    {t.tech?.join(', ')}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1 justify-between">
                  <p className="text-xl text-primary font-bold font-['Syne'] sm:text-2xl">
                    {formatRupiah(t.price)}
                  </p>
                  <Link
                    href={`/template-web/${t.slug}/`}
                    className="inline-flex items-center gap-2 px-2 py-1.5 rounded-full text-primary text-sm font-medium relative after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-1 after:h-[1px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 cursor-pointer"
                  >
                    Lihat Detail
                    <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
