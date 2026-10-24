'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const WaContext = createContext(null);

/**
 * Provider form WhatsApp.
 *   openWa()                          -> buka form kosong
 *   openWa('Landing Page')            -> buka + pilih paket
 *   openWa({ paket, pesan })          -> buka + isi paket & pesan awal
 *   closeWa()                         -> tutup form
 */
export function WaProvider({ children }) {
  const [state, setState] = useState({ open: false, paket: '', pesan: '' });

  const openWa = useCallback((options = {}) => {
    const { paket = '', pesan = '' } =
      typeof options === 'string' ? { paket: options } : options;
    setState({ open: true, paket, pesan });
  }, []);

  const closeWa = useCallback(() => {
    setState((prev) => ({ ...prev, open: false }));
  }, []);

  // Kunci scroll body selama modal terbuka
  useEffect(() => {
    document.body.style.overflow = state.open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [state.open]);

  return (
    <WaContext.Provider value={{ ...state, openWa, closeWa }}>
      {children}
    </WaContext.Provider>
  );
}

export function useWa() {
  const ctx = useContext(WaContext);
  if (!ctx) throw new Error('useWa harus dipakai di dalam <WaProvider>');
  return ctx;
}
