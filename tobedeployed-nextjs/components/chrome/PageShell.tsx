import { ReactNode } from "react";
import { Ribbon } from "./Ribbon";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";
import { ContactPopup } from "./ContactPopup";
import { CookieBanner } from "./CookieBanner";
import { VendorScripts } from "./VendorScripts";

// Every real page on the site wraps its own content with this shell. `isHome` is only true for
// app/page.tsx — it swaps the preloader intro and the vendor animation-engine variant (the site's own
// pages split the same way: only index.html has the SVG intro + home-only script chunk, every other
// page — including work/news/services details and the 404 — uses the plain video preloader).
export function PageShell({ isHome = false, dataPage, children }: { isHome?: boolean; dataPage: string; children: ReactNode }) {
  return (
    <div data-page={dataPage}>
      <Ribbon />
      <TopNav />
      <div id="swup" className="page-wrapper">
        <main id="smooth-wrapper" className="page-main">
          <main id="smooth-content" className="main-wrapper">
            {children}
            <Footer />
          </main>
        </main>
      </div>
      <ContactPopup />
      <Preloader isHome={isHome} />
      <div className="transition">
        <div className="transition_overlay" />
      </div>
      <CookieBanner />
      <VendorScripts isHome={isHome} />
    </div>
  );
}
