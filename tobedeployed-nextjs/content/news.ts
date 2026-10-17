// Metadata for every news/blog article. The actual rich-text body for each article lives in
// components/news/articles/*.tsx (registered in components/news/articleRegistry.tsx) — this file only
// holds the data needed to render the hero, cover image, sidebar, related-articles section and
// Next.js <head> metadata for each page, plus the listing data for /news.

export interface NewsArticleCover {
  /** Full (largest) image URL. */
  src: string;
  alt: string;
  /** Verbatim srcset string, e.g. "url-500.webp 500w, url-800.webp 800w". Omit for single-source images (gifs). */
  srcSet?: string;
  sizes?: string;
  /** Caption shown under the cover image (credit / description). */
  caption: string;
}

export interface NewsArticleMeta {
  slug: string;
  title: string;
  /** Category label shown above the title and in the listing card. */
  category: string;
  /** Meta description / OG description. Empty string if the source page had none. */
  description: string;
  author: string;
  publishedDate: string;
  /** Only the "Webflow : The Ultimate Guide" article shows a visible tag pill in the sidebar. */
  tag?: string;
  cover: NewsArticleCover;
  /** Local, re-cropped OG/Twitter image (see project notes — these replaced Namma-branded remote images). */
  ogImage: string;
  /** The 2 hardcoded related articles shown at the bottom of the article. */
  relatedSlugs: [string, string];
  /** Background GIF shown on the /news listing card. */
  listingGif: string;
}

export interface RelatedArticleImages {
  light: { src: string; srcSet: string };
  dark: { src: string; srcSet: string };
}

// Only 3 articles are ever used as "related article" targets across the site — their light/dark
// thumbnail variants (re-cropped locally, see public/images/og/).
export const relatedArticleImages: Record<string, RelatedArticleImages> = {
  "wordpress-vs-webflow-old-guard-vs-new-blood": {
    light: {
      src: "/images/og/wordpress-vs-webflow-light-us.webp",
      srcSet:
        "/images/og/wordpress-vs-webflow-light-us.webp 500w, /images/og/wordpress-vs-webflow-light-us.webp 800w, /images/og/wordpress-vs-webflow-light-us.webp 1080w, /images/og/wordpress-vs-webflow-light-us.webp 2000w",
    },
    dark: {
      src: "/images/og/wordpress-vs-webflow-dark-us.webp",
      srcSet:
        "/images/og/wordpress-vs-webflow-dark-us.webp 500w, /images/og/wordpress-vs-webflow-dark-us.webp 800w, /images/og/wordpress-vs-webflow-dark-us.webp 1080w, /images/og/wordpress-vs-webflow-dark-us.webp 2000w",
    },
  },
  "webflow-ux-and-seo-the-winning-trio-for-2025": {
    light: {
      src: "/images/og/webflow-ux-seo-lm.webp",
      srcSet:
        "/images/og/webflow-ux-seo-lm.webp 500w, /images/og/webflow-ux-seo-lm.webp 800w, /images/og/webflow-ux-seo-lm.webp 1080w, /images/og/webflow-ux-seo-lm.webp 1600w, /images/og/webflow-ux-seo-lm.webp 2000w",
    },
    dark: {
      src: "/images/og/webflow-ux-seo-fr-dk.webp",
      srcSet:
        "/images/og/webflow-ux-seo-fr-dk.webp 500w, /images/og/webflow-ux-seo-fr-dk.webp 800w, /images/og/webflow-ux-seo-fr-dk.webp 1080w, /images/og/webflow-ux-seo-fr-dk.webp 1600w, /images/og/webflow-ux-seo-fr-dk.webp 2000w",
    },
  },
  "web-design-vs-development-stop-confusing-them": {
    light: {
      src: "/images/og/web-design-vs-dev-light-us.webp",
      srcSet:
        "/images/og/web-design-vs-dev-light-us.webp 500w, /images/og/web-design-vs-dev-light-us.webp 800w, /images/og/web-design-vs-dev-light-us.webp 1080w, /images/og/web-design-vs-dev-light-us.webp 1600w, /images/og/web-design-vs-dev-light-us.webp 2000w",
    },
    dark: {
      src: "/images/og/web-design-vs-dev-dark-us.webp",
      srcSet:
        "/images/og/web-design-vs-dev-dark-us.webp 500w, /images/og/web-design-vs-dev-dark-us.webp 800w, /images/og/web-design-vs-dev-dark-us.webp 1080w, /images/og/web-design-vs-dev-dark-us.webp 1600w, /images/og/web-design-vs-dev-dark-us.webp 2000w",
    },
  },
};

const CDN = "https://cdn.prod.website-files.com/67aca0c732855fc2a1f2c4fc";

export const newsArticles: NewsArticleMeta[] = [
  {
    slug: "wordpress-vs-webflow-old-guard-vs-new-blood",
    title: "WordPress vs Webflow. Old guard vs new blood.",
    category: "Webflow",
    description:
      "Webflow vs WordPress: speed, design freedom, SEO, and security. Discover why Webflow outpaces WordPress for modern, scalable websites.",
    author: "Isaac",
    publishedDate: "Sep 18, 2025",
    cover: {
      src: `${CDN}/68d5b67879e4a6e2718638ba_webflowvswordpress.webp`,
      alt: "",
      srcSet: `${CDN}/68d5b67879e4a6e2718638ba_webflowvswordpress-p-500.webp 500w, ${CDN}/68d5b67879e4a6e2718638ba_webflowvswordpress-p-800.webp 800w, ${CDN}/68d5b67879e4a6e2718638ba_webflowvswordpress-p-1080.webp 1080w, ${CDN}/68d5b67879e4a6e2718638ba_webflowvswordpress-p-1600.webp 1600w, ${CDN}/68d5b67879e4a6e2718638ba_webflowvswordpress.webp 2134w`,
      sizes: "100vw",
      caption: "Webflow",
    },
    ogImage: "/images/og/wordpress-vs-webflow-light-us.webp",
    relatedSlugs: ["webflow-ux-and-seo-the-winning-trio-for-2025", "web-design-vs-development-stop-confusing-them"],
    listingGif: `${CDN}/68d5b51983245b981467e2a3_Comedy%20What%20GIF%20by%20Malcolm%20France.gif`,
  },
  {
    slug: "webflow-ux-and-seo-the-winning-trio-for-2025",
    title: "Webflow, UX, and SEO: The Winning Trio",
    category: "News",
    description:
      "Dominate Google in 2025 with the Webflow + UX + SEO trio. Faster sites, better experiences, stronger rankings—no fluff, just results.",
    author: "Isaac",
    publishedDate: "Sep 24, 2025",
    cover: {
      src: `${CDN}/68d4412f78535c667da7d7cb_webflow-interface.webp`,
      alt: "",
      srcSet: `${CDN}/68d4412f78535c667da7d7cb_webflow-interface-p-500.webp 500w, ${CDN}/68d4412f78535c667da7d7cb_webflow-interface-p-800.webp 800w, ${CDN}/68d4412f78535c667da7d7cb_webflow-interface-p-1080.webp 1080w, ${CDN}/68d4412f78535c667da7d7cb_webflow-interface-p-1600.webp 1600w, ${CDN}/68d4412f78535c667da7d7cb_webflow-interface-p-2000.webp 2000w, ${CDN}/68d4412f78535c667da7d7cb_webflow-interface.webp 2400w`,
      sizes: "100vw",
      caption: "Webflow interface",
    },
    ogImage: "/images/og/webflow-ux-seo-lm.webp",
    relatedSlugs: ["wordpress-vs-webflow-old-guard-vs-new-blood", "web-design-vs-development-stop-confusing-them"],
    listingGif: `${CDN}/68d4409c7225db024575cf58_shared-ezgif.com-optimize.gif`,
  },
  {
    slug: "web-design-vs-development-stop-confusing-them",
    title: "Web Design VS Development: Stop confusing them",
    category: "Design",
    description:
      "Finally, the real difference between web design and development. No jargon, no fluff—just sharp, clear, and unfiltered truth.",
    author: "Isaac",
    publishedDate: "Aug 20, 2025",
    cover: {
      src: `${CDN}/68c9224b22deb7712cda3193_imgi_9_652e6f4d3e3418cb07198398_651df5a00e471d05c6a8c39c_Spline.jpg`,
      alt: "Ux of webflow platform",
      srcSet: `${CDN}/68c9224b22deb7712cda3193_imgi_9_652e6f4d3e3418cb07198398_651df5a00e471d05c6a8c39c_Spline-p-500.jpg 500w, ${CDN}/68c9224b22deb7712cda3193_imgi_9_652e6f4d3e3418cb07198398_651df5a00e471d05c6a8c39c_Spline-p-800.jpg 800w, ${CDN}/68c9224b22deb7712cda3193_imgi_9_652e6f4d3e3418cb07198398_651df5a00e471d05c6a8c39c_Spline-p-1080.jpg 1080w, ${CDN}/68c9224b22deb7712cda3193_imgi_9_652e6f4d3e3418cb07198398_651df5a00e471d05c6a8c39c_Spline-p-1600.jpg 1600w, ${CDN}/68c9224b22deb7712cda3193_imgi_9_652e6f4d3e3418cb07198398_651df5a00e471d05c6a8c39c_Spline-p-2000.jpg 2000w, ${CDN}/68c9224b22deb7712cda3193_imgi_9_652e6f4d3e3418cb07198398_651df5a00e471d05c6a8c39c_Spline.jpg 2400w`,
      sizes: "100vw",
      caption: "Webflow",
    },
    ogImage: "/images/og/web-design-vs-dev-light-us.webp",
    relatedSlugs: ["wordpress-vs-webflow-old-guard-vs-new-blood", "webflow-ux-and-seo-the-winning-trio-for-2025"],
    listingGif: `${CDN}/68a8adf0407237e53dab8876_shared%20%2833%29.gif`,
  },
  {
    slug: "your-rebrand-starts-with-words",
    title: "Your Rebrand Starts With Words",
    category: "Tone of Voice",
    description:
      "Discover how strong brand messaging transforms a rebranding from a visual upgrade into a strategic shift that connects, inspires, and builds loyalty.",
    author: "Isaac",
    publishedDate: "Sep 26, 2025",
    cover: {
      src: `${CDN}/68c800907b66f7fc2718fc9f_ezgif.com-resize%20(1).gif`,
      alt: "Gif of a coffee shop branding with a cookie, a croissant, a coffee",
      caption: "CHILL-OUT Café © Sofiia Oswald",
    },
    ogImage: "/images/og/starts-with-words-light-us.webp",
    relatedSlugs: ["wordpress-vs-webflow-old-guard-vs-new-blood", "webflow-ux-and-seo-the-winning-trio-for-2025"],
    listingGif: `${CDN}/689a5a288c452ffb00dcc6a5_shared%20%2828%29.gif`,
  },
  {
    slug: "why-research-is-our-obsession",
    title: "Why Research is Our Obsession?",
    category: "News",
    description:
      "Forget guesswork. At TOBEDEPLOYED, research isn't a formality it's what separates pretty websites from high-performing ones. Here's why we dig deeper (and why it pays off).",
    author: "Isaac",
    publishedDate: "May 15, 2025",
    cover: {
      src: `${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash.webp`,
      alt: "Painting",
      srcSet: `${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash-p-500.webp 500w, ${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash-p-800.webp 800w, ${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash-p-1080.webp 1080w, ${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash-p-1600.webp 1600w, ${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash-p-2000.webp 2000w, ${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash-p-2600.webp 2600w, ${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash-p-3200.webp 3200w, ${CDN}/68271818458b62507016668a_ezsdfons-heijnsbroek-KbC2Nzp3bDA-unsplash.webp 6144w`,
      sizes: "100vw",
      caption: "Fons Heijnsbroek",
    },
    ogImage: "/images/og/why-research-is-our-obsession-light-us.webp",
    relatedSlugs: ["wordpress-vs-webflow-old-guard-vs-new-blood", "webflow-ux-and-seo-the-winning-trio-for-2025"],
    listingGif: `${CDN}/6874e0248f002a2e7e3d8c77_Penn%20Badgley%20Joe%20Goldberg%20GIF%20by%20YOU.gif`,
  },
  {
    slug: "the-iconoclastic-design-abecedary-from-a-to-z-unfiltered",
    title: "The Iconoclastic Design Abecedary: From A to Z, Unfiltered",
    category: "Design",
    description:
      "Forget sugarcoated design articles. This A to Z guide breaks down the fundamentals with wit and bite. Zero fluff, just bold takes on what really matters in design.",
    author: "Isaac",
    publishedDate: "Feb 17, 2025",
    cover: {
      src: `${CDN}/68272a841551b50fdfb70912_sdabecdedaire 1.webp`,
      alt: "Poster with letters",
      srcSet: `${CDN}/68272a841551b50fdfb70912_sdabecdedaire 1-p-500.webp 500w, ${CDN}/68272a841551b50fdfb70912_sdabecdedaire 1-p-800.webp 800w, ${CDN}/68272a841551b50fdfb70912_sdabecdedaire 1-p-1080.webp 1080w, ${CDN}/68272a841551b50fdfb70912_sdabecdedaire 1-p-1600.webp 1600w, ${CDN}/68272a841551b50fdfb70912_sdabecdedaire 1-p-2000.webp 2000w, ${CDN}/68272a841551b50fdfb70912_sdabecdedaire 1.webp 2400w`,
      sizes: "100vw",
      caption: "ABCs - Jesse Bowser",
    },
    ogImage: "/images/og/iconoclastic-design-ab-light-us.webp",
    relatedSlugs: ["wordpress-vs-webflow-old-guard-vs-new-blood", "webflow-ux-and-seo-the-winning-trio-for-2025"],
    listingGif: `${CDN}/68750a1d0c8addbffe233e73_Will%20Smith%20Book%20GIF.gif`,
  },
  {
    slug: "your-typography-sucks-stop-pretending-it-doesnt-matter",
    title: "Your Typography Sucks? Stop Pretending it doesn't Matter",
    category: "Design",
    description: "",
    author: "Isaac",
    publishedDate: "Feb 17, 2025",
    cover: {
      src: `${CDN}/68c5cfa9301759aa6249638b_fimgi_533_40a83b233859307.68b7e34a8fa57 1 (1).webp`,
      alt: "Screenshot of a beautiful website with original typography",
      srcSet: `${CDN}/68c5cfa9301759aa6249638b_fimgi_533_40a83b233859307.68b7e34a8fa57 1 (1)-p-500.webp 500w, ${CDN}/68c5cfa9301759aa6249638b_fimgi_533_40a83b233859307.68b7e34a8fa57 1 (1)-p-800.webp 800w, ${CDN}/68c5cfa9301759aa6249638b_fimgi_533_40a83b233859307.68b7e34a8fa57 1 (1)-p-1080.webp 1080w, ${CDN}/68c5cfa9301759aa6249638b_fimgi_533_40a83b233859307.68b7e34a8fa57 1 (1)-p-1600.webp 1600w, ${CDN}/68c5cfa9301759aa6249638b_fimgi_533_40a83b233859307.68b7e34a8fa57 1 (1)-p-2000.webp 2000w, ${CDN}/68c5cfa9301759aa6249638b_fimgi_533_40a83b233859307.68b7e34a8fa57 1 (1).webp 2400w`,
      sizes: "100vw",
      caption: "BigBang Font © Rajesh Rajput",
    },
    ogImage: "/images/og/your-typography-sucks-light-us.webp",
    relatedSlugs: ["wordpress-vs-webflow-old-guard-vs-new-blood", "webflow-ux-and-seo-the-winning-trio-for-2025"],
    listingGif: `${CDN}/687507d869070721dcc17f58_chuck%20norris%20punch%20GIF.gif`,
  },
  {
    slug: "webflow-the-ultimate-guide-to-building-websites-in-2025",
    title: "Webflow : The Ultimate Guide in 2025",
    category: "Guides",
    description:
      "Discover the ultimate 2025 Webflow guide: everything you need to create fast, powerful, and fully custom websites without writing a single line of code.",
    author: "Isaac",
    publishedDate: "Feb 17, 2025",
    tag: "Webflow",
    cover: {
      src: `${CDN}/6878c974981d5a5a2e2ae5a9_webflowguide.webp`,
      alt: "Visuals of webflow interface",
      srcSet: `${CDN}/6878c974981d5a5a2e2ae5a9_webflowguide-p-500.webp 500w, ${CDN}/6878c974981d5a5a2e2ae5a9_webflowguide-p-800.webp 800w, ${CDN}/6878c974981d5a5a2e2ae5a9_webflowguide-p-1080.webp 1080w, ${CDN}/6878c974981d5a5a2e2ae5a9_webflowguide-p-1600.webp 1600w, ${CDN}/6878c974981d5a5a2e2ae5a9_webflowguide-p-2000.webp 2000w, ${CDN}/6878c974981d5a5a2e2ae5a9_webflowguide-p-2600.webp 2600w, ${CDN}/6878c974981d5a5a2e2ae5a9_webflowguide.webp 2700w`,
      sizes: "100vw",
      caption: "Webflow",
    },
    ogImage: "/images/og/webflow-le-guide-ultime-light-us.webp",
    relatedSlugs: ["wordpress-vs-webflow-old-guard-vs-new-blood", "webflow-ux-and-seo-the-winning-trio-for-2025"],
    listingGif: `${CDN}/6875093e158e1baff35c3690_Excited%20Season%206%20GIF%20by%20The%20Office.gif`,
  },
];

export function getArticleBySlug(slug: string): NewsArticleMeta | undefined {
  return newsArticles.find((article) => article.slug === slug);
}
