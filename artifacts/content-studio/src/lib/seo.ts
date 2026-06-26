const SITE = "GTA6Guide.in";
const BASE_URL = "https://gta6guide.in";

interface SeoMeta {
  title: string;
  description: string;
  path: string;
  type?: string;
}

export function setPageMeta({ title, description, path, type = "website" }: SeoMeta) {
  const fullTitle = `${title} — ${SITE}`;
  const url = `${BASE_URL}${path}`;

  document.title = fullTitle;

  const setMeta = (selector: string, content: string) => {
    const el = document.querySelector(selector) as HTMLMetaElement | null;
    if (el) el.content = content;
  };

  const setLink = (selector: string, href: string) => {
    const el = document.querySelector(selector) as HTMLLinkElement | null;
    if (el) el.href = href;
  };

  setMeta('meta[name="description"]', description);
  setLink('link[rel="canonical"]', url);

  setMeta('meta[property="og:title"]', fullTitle);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:url"]', url);
  setMeta('meta[property="og:type"]', type);

  setMeta('meta[name="twitter:title"]', fullTitle);
  setMeta('meta[name="twitter:description"]', description);

  const existing = document.querySelector('script[data-page-jsonld]');
  if (existing) existing.remove();

  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.setAttribute("data-page-jsonld", "true");
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "name": fullTitle,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": SITE,
      "url": BASE_URL,
    },
  });
  document.head.appendChild(ld);
}
