import Footer from '@/components/Footer';
import Header from '@/components/Header';

/** Layout halaman utama: header + footer utama (modal WhatsApp ada di root layout). */
export default function MainLayout({ children }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:text-body focus:px-4 focus:py-2 focus:rounded-full focus:text-sm cursor-pointer"
      >
        Lewati ke konten utama
      </a>

      <Header />

      <main id="main-content" className="min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}
