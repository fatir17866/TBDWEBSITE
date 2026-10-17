import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";

export const metadata: Metadata = {
  title: "Page not found | TOBEDEPLOYED",
};

export default function NotFound() {
  return (
    <PageShell dataPage="404">
      <section className="section_hero is-news">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component">
              <div className="heading-appear">
                <h1 className="text-align-center">
                  Page not
                  <br />
                  found
                </h1>
              </div>
              <div className="_404_hero_visual is-third simple-appear" />
              <div className="_404_hero_visual is-second simple-appear" />
              <div className="_404_hero_visual is-first simple-appear" />
              <div className="hero_bottom">
                <div className="show-mobile-landscape">
                  <div className="hero_bottom_wrapper">
                    <a data-cursor-hover="Homepage" href="/" className="small-link align-center w-inline-block">
                      <div className="text-mono_wrapper">
                        <div className="text-mono">Back to home</div>
                      </div>
                      <div className="small-link_arrow w-embed">
                        <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
