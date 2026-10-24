'use client';

import { useEffect, useRef } from 'react';

/**
 * Wrapper animasi scroll-reveal.
 *
 * Pakai:
 *   <Reveal className="grid grid-cols-2">...</Reveal>
 *   <Reveal variant="reveal-left" as="section" id="tentang">...</Reveal>
 *   <Reveal delay="0.12s" className="reveal-stagger ...">...</Reveal>
 *
 * Elemen baru "active" saat terlihat di layar (sekali saja),
 * dan langsung tampil jika pengguna mematikan animasi
 * (prefers-reduced-motion) atau JavaScript gagal berjalan.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'reveal',
  delay,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof IntersectionObserver === 'undefined') {
      el.classList.add('active');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${variant} ${className}`.trim()}
      style={delay ? { '--reveal-delay': delay } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
