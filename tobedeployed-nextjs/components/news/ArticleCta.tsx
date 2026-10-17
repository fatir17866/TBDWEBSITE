// Shared "Let's work together" CTA section that closes every article and the news listing page.
// Identical markup across all pages (verified against every source news/*.html file).
export function ArticleCta() {
  return (
    <section className="section_cta">
      <div className="padding-global">
        <div className="container-large">
          <div className="cta_component">
            <div className="w-embed">
              <h2 className="line-appear">
                Let&apos;s work
                <br />
                <span className="cta_visual" />
                together
              </h2>
            </div>
            <div className="cta_content">
              <div className="text-appear">
                <p>
                  Work with us if average isn&#8217;t your thing.
                  <br />
                  Drop it, we&apos;ll build it!
                </p>
                <div className="spacer-small show-mobile-portrait" />
              </div>
              <div data-cursor-hover="Let&#x27;s talk" className="small-link">
                <div className="text-mono_wrapper">
                  <div className="text-mono">say hello</div>
                </div>
                <div className="small-link_arrow w-embed">
                  <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
