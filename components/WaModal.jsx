'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useWa } from './WaProvider';
import { SITE, WA_PAKET_OPTIONS } from '@/data/site';

/** Tombol/link yang membuka form WhatsApp. */
export default function WaOpenButton({
  as = 'button',
  paket = '',
  pesan = '',
  className = '',
  children,
  onClick,
  ...rest
}) {
  const { openWa } = useWa();
  const isLink = as === 'a';

  function handleClick(e) {
    e.preventDefault();
    openWa({ paket, pesan });
    if (typeof onClick === 'function') onClick(e);
  }

  const Tag = isLink ? 'a' : 'button';

  return (
    <Tag
      type={isLink ? undefined : 'button'}
      href={isLink ? '#kontak' : undefined}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Ikon WhatsApp dipakai di tombol submit modal. */
export function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.46 0 .13 5.33.13 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.87 11.87 0 0 0 5.7 1.45h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.41-8.41ZM12.03 21.5a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.75.98 1-3.66-.23-.37a9.55 9.55 0 0 1-1.47-5.1c0-5.28 4.3-9.58 9.6-9.58 2.56 0 4.97 1 6.78 2.81a9.53 9.53 0 0 1 2.8 6.78c0 5.29-4.3 9.59-9.48 9.69Zm5.24-7.18c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.4a8.6 8.6 0 0 1-1.58-1.96c-.17-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36s-1 .98-1 2.38c0 1.4 1.02 2.76 1.16 2.95.14.19 2.01 3.07 4.88 4.3.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34Z" />
    </svg>
  );
}

/** Modal form WhatsApp — dialog aksesibel: Escape, klik luar, fokus awal. */
export function WaModal() {
  const { open, paket, pesan, closeWa } = useWa();
  const [nama, setNama] = useState('');
  const [paketValue, setPaketValue] = useState('');
  const [pesanValue, setPesanValue] = useState('');
  const [snk, setSnk] = useState(false);
  const dialogRef = useRef(null);
  const namaRef = useRef(null);

  // Sinkronkan isi form dengan data yang diminta saat modal dibuka
  useEffect(() => {
    if (open) {
      setPaketValue(paket || '');
      setPesanValue(pesan || '');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [open, paket, pesan]);

  // Fokus ke input pertama & pasang listener Escape
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => namaRef.current?.focus(), 50);

    function onKeyDown(e) {
      if (e.key === 'Escape') closeWa();
    }
    document.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, closeWa]);

  if (!open) return null;

  function submitWaForm(e) {
    e.preventDefault();
    if (!snk) return;

    let msg = `Halo ${SITE.name}, saya *${nama.trim()}*.`;
    if (paketValue) msg += `\nSaya tertarik dengan paket *${paketValue}*.`;
    if (pesanValue.trim())
      msg += `\n\nDetail kebutuhan saya:\n${pesanValue.trim()}`;
    msg += `\n\nMohon info lebih lanjut, terima kasih.`;

    window.open(
      `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );

    closeWa();
    setNama('');
    setPesanValue('');
    setPaketValue('');
    setSnk(false);
  }

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-secondary/70 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeWa();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waModalTitle"
        className="bg-[#FBFAF6] rounded-[20px] p-6 sm:p-10 max-w-[440px] w-full relative border border-[#D4CFBC] max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={closeWa}
          aria-label="Tutup"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 flex items-center justify-center rounded-full text-secondary/60 hover:text-secondary hover:bg-body transition-colors text-xl leading-none cursor-pointer"
        >
          ×
        </button>

        <div className="font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-accent flex items-center gap-[10px] mb-3 before:content-[''] before:w-[16px] before:h-[1px] before:bg-primary before:inline-block">
          Chat Otomatis
        </div>
        <h3
          id="waModalTitle"
          className="font-['Space_Grotesk',sans-serif] font-semibold text-[22px] sm:text-[24px] mb-1 pr-8"
        >
          Diskusikan Proyek Anda
        </h3>
        <p className="text-secondary text-[14px] mb-6">
          Isi form berikut, pesan akan otomatis terisi dan langsung terbuka di
          WhatsApp.
        </p>

        <form className="space-y-6" onSubmit={submitWaForm}>
          <div>
            <label
              htmlFor="waNama"
              className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.05em] text-secondary/70"
            >
              Nama
            </label>
            <input
              type="text"
              id="waNama"
              ref={namaRef}
              required
              placeholder="Nama Anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full mt-[6px] px-4 py-[11px] bg-body/40 border border-[#D4CFBC] rounded-[10px] text-[14px] text-primary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition cursor-text"
            />
          </div>

          <div>
            <label
              htmlFor="waPaket"
              className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.05em] text-secondary/70"
            >
              Jenis Paket / Layanan
            </label>
            <select
              id="waPaket"
              value={paketValue}
              onChange={(e) => setPaketValue(e.target.value)}
              className="w-full mt-[6px] px-4 py-[11px] bg-body/40 border border-[#D4CFBC] rounded-[10px] text-[14px] text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition cursor-pointer"
            >
              {WA_PAKET_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="waPesan"
              className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.05em] text-secondary/70"
            >
              Pesan
            </label>
            <textarea
              id="waPesan"
              rows="3"
              placeholder="Ceritakan kebutuhan website Anda..."
              value={pesanValue}
              onChange={(e) => setPesanValue(e.target.value)}
              className="w-full mt-[6px] px-4 py-[11px] bg-body/40 border border-[#D4CFBC] rounded-[10px] text-[14px] text-primary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition resize-none cursor-text"
            />
          </div>

          <div className="flex gap-4 mt-2 items-start">
            <input
              type="checkbox"
              id="SnK"
              checked={snk}
              onChange={(e) => setSnk(e.target.checked)}
              aria-describedby="snkDesc"
              className="mt-1 w-4 h-4 shrink-0 accent-primary cursor-pointer"
            />
            <label
              htmlFor="SnK"
              id="snkDesc"
              className="hover:text-primary transition-colors text-sm cursor-pointer"
            >
              Dengan mengeklik tombol berikut, Anda sudah dianggap telah
              membaca, memahami, menyetujui, dan mematuhi seluruh{' '}
              <Link
                href="/snk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                Syarat dan Ketentuan yang berlaku.
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={!snk}
            className={`w-full font-['JetBrains_Mono',monospace] text-[13px] px-[26px] py-[14px] rounded-full tracking-[0.03em] inline-flex items-center justify-center gap-2 transition-all duration-200 mt-2 ${
              snk
                ? 'bg-primary text-body cursor-pointer hover:-translate-y-[2px]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-70'
            }`}
          >
            Kirim ke WhatsApp
            <WhatsAppIcon />
          </button>
          <p className="text-secondary/50 text-[11.5px] text-center pt-1">
            Anda akan diarahkan ke WhatsApp untuk mengirim pesan.
          </p>
        </form>
      </div>
    </div>
  );
}
