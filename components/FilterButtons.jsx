'use client';

/**
 * Tombol filter kategori — kategori dibuat otomatis dari data,
 * tombol selalu punya indikator aktif (aria-pressed).
 */
export default function FilterButtons({ categories, active, onChange }) {
  return (
    <div
      className="flex flex-wrap gap-3 items-center"
      role="group"
      aria-label="Filter kategori"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          aria-pressed={active === cat}
          onClick={() => onChange(cat)}
          className={
            active === cat
              ? 'px-6 py-2 bg-primary text-[#D4CFBC] rounded-full text-sm font-medium cursor-pointer'
              : 'px-6 py-2 border border-primary rounded-full text-sm hover:bg-primary hover:text-[#D4CFBC] transition-colors duration-300 cursor-pointer'
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
