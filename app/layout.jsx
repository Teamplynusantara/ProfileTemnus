import './globals.css';
import ScrollBehavior from '@/components/ScrollBehavior';
import { WaModal } from '@/components/WaModal';
import { WaProvider } from '@/components/WaProvider';
import { SITE } from '@/data/site';

/** SEO default — halaman lain menimpa lewat `export const metadata`. */
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: '%s — Teamply Nusantara',
  },
  description: SITE.description,
  applicationName: SITE.name,
  icons: {
    icon: [{ url: SITE.logo, type: 'image/png' }],
    apple: [{ url: SITE.logo }],
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    url: '/',
    images: [{ url: SITE.logo, width: 500, height: 500, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [SITE.logo],
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport = {
  themeColor: '#e9e8fc',
};

/** Structured data global (WebSite + Organization). */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.name,
      alternateName: SITE.shortName,
      inLanguage: 'id-ID',
    },
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: `${SITE.url}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}${SITE.logo}`,
      },
      sameAs: [SITE.instagram, SITE.tiktok],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Google Fonts — dimuat sekali (dulu dobel) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />

        {/* Ikon Remixicon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* Konten tetap tampil walau JavaScript mati */}
        <noscript>
          <style>{`.reveal,.reveal-left,.reveal-right,.reveal-scale{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      {/* suppressHydrationWarning: extension browser (mis. ColorZilla)
          menyuntik atribut ke <body> sebelum React hydrate. */}
      <body
        suppressHydrationWarning
        className="bg-body text-primary font-['Inter',sans-serif] leading-relaxed antialiased"
      >
        <WaProvider>
          {children}
          <WaModal />
        </WaProvider>
        <ScrollBehavior />
      </body>
    </html>
  );
}
