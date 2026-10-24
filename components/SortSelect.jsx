'use client';

/** Select urutan — punya label tersembunyi untuk pembaca layar. */
export default function SortSelect({ value, onChange }) {
  return (
    <>
      <label htmlFor="sort" className="sr-only">
        Urutkan daftar
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-primary focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
      >
        <option value="new">Terbaru</option>
        <option value="old">Terlama</option>
        <option value="low">Harga termurah</option>
        <option value="high">Harga termahal</option>
      </select>
    </>
  );
}
