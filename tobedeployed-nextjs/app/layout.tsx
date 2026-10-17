import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // TODO: update once the production domain is known (e.g. after the Vercel deploy), so social
  // share images resolve to absolute URLs instead of falling back to localhost.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tobedeployed.com"),
  title: "TOBEDEPLOYED",
};

// Ported verbatim from the original site's <head> boilerplate: sets the `js`/touch feature-detection
// classes, applies the stored dark-mode preference before first paint (to avoid a flash of the wrong
// theme), and flags whether the preloader should show this load (skipped once per session after the
// first real page view). Must run as a blocking script, before anything else renders.
const THEME_INIT_SCRIPT = `
!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);
document.documentElement.classList.add('js');
(function () {
  try {
    var stored = localStorage.getItem('darkMode');
    var darkOn = stored ? (stored === 'enabled') : false;
    var root = document.documentElement;
    root.setAttribute('data-theme', darkOn ? 'dark' : 'light');
    root.classList.toggle('is-dark', !!darkOn);
    root.classList.add('no-theme-transitions');
    var meta = document.querySelector('meta[name="color-scheme"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'color-scheme';
      meta.content = 'light dark';
      document.head.appendChild(meta);
    }
  } catch (e) {}
})();
try { if (!document.referrer || new URL(document.referrer).origin !== location.origin) sessionStorage.removeItem('loaderHasBeenDisplayed'); } catch (e) {}
if (!sessionStorage.getItem('loaderHasBeenDisplayed')) {
  document.documentElement.classList.add('show-preloader');
}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        {/* The site's real stylesheets, served as static files from /public (see VendorScripts.tsx
            for why these stay local files rather than npm packages/CSS imports). */}
        <link rel="stylesheet" href="/vendor/webflow-css/webflow-shared.css" />
        <link rel="stylesheet" href="/vendor/lenis/lenis.css" />
        <link rel="stylesheet" href="/vendor/site-custom.css" />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
