import { SITE } from '@/data/site';
import { galleries } from '@/data/galleries';
import { templates } from '@/data/templates';

export const dynamic = 'force-static';

/** Sitemap otomatis — ikut bertambah saat data galeri/template ditambah. */
export default function sitemap() {
  const lastModified = new Date();

  const staticPages = ['/', '/gallery/', '/template-web/', '/snk/'].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.8,
    })
  );

  const galleryPages = galleries.map((g) => ({
    url: `${SITE.url}/gallery/${g.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const templatePages = templates.map((t) => ({
    url: `${SITE.url}/template-web/${t.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...galleryPages, ...templatePages];
}
