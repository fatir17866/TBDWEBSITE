import { ServiceEntry, ServiceSkillItem } from "@/content/services";

// Renders one of the 4 service detail pages (/services/[slug]), ported from
// tobedeployed.com/services/{advertising,content,design,webflow}.html. All 4 source pages
// share this exact section skeleton (hero -> intro -> services/skills grid -> optional client
// quote -> shared CTA) — only `content.html` omits the quote section, hence it's optional here.
function ServiceVisual({ video }: { video: ServiceSkillItem["video"] }) {
  const videoEl = (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={video.poster ? { backgroundImage: `url(${video.poster})` } : undefined}
      className="services_visual w-background-video w-background-video-atom"
    >
      <source src={video.mp4} />
      {video.webm ? <source src={video.webm} /> : null}
    </video>
  );

  return (
    <div className="services_visual_wrapper">
      {video.extraWrapper ? (
        <div className="services_visual">
          <div className="element-appear">
            {videoEl}
            <div className="visual_overlay" />
          </div>
        </div>
      ) : (
        <div className="element-appear">
          {videoEl}
          <div className="visual_overlay" />
        </div>
      )}
    </div>
  );
}

export function ServiceTemplate({ service }: { service: ServiceEntry }) {
  const { hero, intro, services: servicesSection, quote } = service;

  return (
    <>
      <section className="section_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component">
              <div className="heading-appear">
                <h1 className={`text-align-center${hero.className ? ` ${hero.className}` : ""}`}>
                  {hero.lines[0]}
                  <br />
                  {hero.lines[1]}
                </h1>
              </div>
              <div className="hero_bottom">
                <div className="show-mobile-landscape">
                  <div className="hero_bottom_wrapper">
                    <div className="text-mono_wrapper">
                      <div className="text-mono">[ Scroll ]</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_intro">
        <div className="padding-global">
          <div className="container-large">
            <div className="intro_component">
              <div className="text-mono_wrapper">
                <h2 className="text-mono">{intro.heading}</h2>
              </div>
              <div className="text-appear">
                <p className="intro_description">{intro.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_services">
        <div className="padding-global">
          <div className="container-large">
            <div className="services_component">
              <div className="w-embed">
                <h2 className="line-appear">
                  {servicesSection.headingLines[0]}
                  <br />
                  <span className={`cta_visual ${servicesSection.accentClass}`} />
                  {servicesSection.headingLines[1]}
                  <br />
                  {servicesSection.headingLines[2]}
                </h2>
              </div>
              <div className="services_content">
                <div className="text-mono_sticky">
                  <div className="text-mono_wrapper">
                    <h3 className="text-mono">{servicesSection.skillsLabel}</h3>
                  </div>
                </div>
                <div className="services_list">
                  {servicesSection.items.map((item) => (
                    <div className="services_item" key={item.title}>
                      <div className="packs_item">
                        <div className="line-appear">
                          <div className="heading-style-h3">{item.title}</div>
                        </div>
                        <div className="text-appear">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <ServiceVisual video={item.video} />
                    </div>
                  ))}

                  <div className="skills_lists">
                    {servicesSection.tagColumns.map((column, i) => (
                      <div className="skills_list" key={i}>
                        {column.map((tag) => (
                          <div className="text-mono_wrapper" key={tag}>
                            <div className="text-mono">{tag}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {quote ? (
        <section className="section_quote">
          <div className="padding-global">
            <div className="container-large">
              <div className="quote_component">
                <div className="text-mono_absolute">
                  <div className="text-mono_wrapper">
                    <h2 className="text-mono hide-mobile-landscape">Happy client</h2>
                  </div>
                </div>
                <div className="quote_content">
                  <div className={`quote_picture_wrapper ${quote.photoClass} element-appear`}>
                    <div className="visual_overlay" />
                  </div>
                  <blockquote className="quote_text">&quot;{quote.quote}&quot;</blockquote>
                  <div className="quote_infos_wrapper">
                    <div className="text-mono_wrapper">
                      <div className="text-mono">{quote.author}</div>
                    </div>
                    <div className="text-mono_wrapper">
                      <div className="text-mono">{quote.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

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
                    Work with us if average isn&apos;t your thing.
                    <br />
                    Drop it, we&apos;ll build it!
                  </p>
                  <div className="spacer-small show-mobile-portrait" />
                </div>
                <div data-cursor-hover="Let's talk" className="small-link">
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
    </>
  );
}
