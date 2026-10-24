'use client';

import { useEffect } from 'react';

/**
 * Smooth scroll untuk link anchor di halaman yang sama
 * tanpa mengubah URL (perilaku yang sama seperti website lama).
 * Link lintas halaman (mis. /#tentang) dibiarkan oleh Next.js.
 */
export default function ScrollBehavior() {
  useEffect(() => {
    function onClick(e) {
      // Biarkan link yang sudah ditangani komponen lain (mis. modal WhatsApp)
      if (e.defaultPrevented) return;

      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href').slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
