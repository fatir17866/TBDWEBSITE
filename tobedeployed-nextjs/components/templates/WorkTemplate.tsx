import { WorkBlock, WorkProject } from "@/content/work";

// Renders one of the 6 case-study pages (/work/[slug]), ported from
// tobedeployed.com/work/{chance,heysimon,intramuros-magazine,malibou,matera,silvr}.html.
// All 6 pages share this literal skeleton: hero -> cover video -> tagline -> intro -> a
// variable-order stretch of quote/modules/visual/fs blocks (see content/work.ts for why that
// stretch isn't fixed) -> Credits/Scope -> optional post-infos block (matera only) -> next
// project link -> shared CTA. The footer itself is rendered by PageShell, not here.

const ARROW_SVG = (
  <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z"
      fill="currentColor"
    />
  </svg>
);

const IM_LOGO_MASK_CSS = `.im_logo_mask{position:absolute;background:#fefa79;z-index:2;pointer-events:none}.im_logo_mask.is-tl{top:0;left:0;width:16%;height:11%}.im_logo_mask.is-br{bottom:0;right:0;width:16%;height:11%}html.is-dark .im_logo_mask{background:#fefa79}`;

function QuoteSection({ block }: { block: Extract<WorkBlock, { kind: "quote" }> }) {
  return (
    <section className="section_quote less-quote">
      <div className="padding-global">
        <div className="container-large">
          <div className="quote_component">
            <div className="quote_content">
              <blockquote className="quote_text">&quot;{block.text}&quot;</blockquote>
              {block.author ? (
                <div className="quote_infos_wrapper">
                  <div className="text-mono_wrapper">
                    <div className="text-mono">{block.author}</div>
                  </div>
                  <div className="text-mono_wrapper">
                    <div className="text-mono">{block.role}</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulesSection({ block }: { block: Extract<WorkBlock, { kind: "modules" }> }) {
  return (
    <section className="section_project">
      <div className="padding-global">
        <div className="container-large">
          <div className="project_component">
            <div className="project_visuals_wrapper">
              <div className="simple-appear-no-delay" />
              <div className="mod_wrap">
                {block.rows.map((row) => (
                  <div className={`mod_row${row.reverse ? " is-rev" : ""}`} key={row.title}>
                    <div className="simple-appear-no-delay">
                      <video autoPlay loop muted playsInline>
                        <source src={row.video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="mod_text">
                      <div className="mod_label">{row.label}</div>
                      <h3 className="mod_title">{row.title}</h3>
                      <p>{row.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualSection({ block }: { block: Extract<WorkBlock, { kind: "visual" }> }) {
  return (
    <section className="section_project">
      <div className="padding-global">
        <div className="container-large">
          <div className="project_component">
            <div className="project_visuals_wrapper">
              {block.video ? (
                <div className="simple-appear-no-delay w-embed" style={block.video.wrapperStyle}>
                  <video
                    className="video_wrapper"
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-object-fit="cover"
                    draggable
                    style={block.video.style}
                  >
                    {block.video.srcs.map((src, i) => (
                      <source src={src} key={i} />
                    ))}
                  </video>
                </div>
              ) : null}
              {block.image ? (
                <div className="simple-appear-no-delay">
                  <div className="visual_wrapper-big no-max-height">
                    <img src={block.image.src} loading="eager" alt={block.image.alt ?? ""} className="visual no-scale" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FsSection({ block }: { block: Extract<WorkBlock, { kind: "fs" }> }) {
  return (
    <section className="section_project">
      <div className="padding-global">
        <div className="container-large">
          <div className="fs_wrap">
            <div className="text-mono_wrapper">
              <div className="text-mono">{block.label}</div>
            </div>
            <div className="project_tagline">{block.heading}</div>
            <div className="fs_media simple-appear-no-delay">
              {block.media.type === "video" ? (
                <video autoPlay loop muted playsInline>
                  <source src={block.media.src} type="video/mp4" />
                </video>
              ) : (
                <img src={block.media.src} alt={block.media.alt ?? ""} loading="eager" />
              )}
            </div>
            <div>
              {block.rows.map((row) => (
                <div key={row.number}>
                  <div className="fs_row">
                    <div className="text-mono_wrapper">
                      <div className="text-mono">{row.number}</div>
                    </div>
                    <div className="project_tagline fs_name">{row.name}</div>
                    <p className="fs_desc">{row.desc}</p>
                  </div>
                  <div className="spacer-medium" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ block }: { block: WorkBlock }) {
  switch (block.kind) {
    case "quote":
      return <QuoteSection block={block} />;
    case "modules":
      return <ModulesSection block={block} />;
    case "visual":
      return <VisualSection block={block} />;
    case "fs":
      return <FsSection block={block} />;
    default:
      return null;
  }
}

export function WorkTemplate({ project }: { project: WorkProject }) {
  return (
    <>
      <section className="section_hero is-project">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component">
              <div className="heading-appear">
                <h1 className="project_h1">{project.h1}</h1>
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

      <section className="section_project-cover">
        <div className="padding-global">
          <div className="container-large">
            <div className="visuals_component">
              <div className="simple-appear-no-delay">
                <div
                  className="visual_wrapper no-max-height"
                  style={project.coverVideo.logoMask ? { position: "relative", overflow: "hidden" } : undefined}
                >
                  {project.coverVideo.logoMask ? <style dangerouslySetInnerHTML={{ __html: IM_LOGO_MASK_CSS }} /> : null}
                  <div className="w-embed">
                    <video
                      className="video_wrapper"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={project.coverVideo.poster}
                      data-object-fit="cover"
                      draggable
                    >
                      <source src={project.coverVideo.src} />
                    </video>
                  </div>
                  {project.coverVideo.logoMask ? (
                    <>
                      <div className="im_logo_mask is-tl" />
                      <div className="im_logo_mask is-br" />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_tagline">
        <div className="padding-global">
          <div className="container-large">
            <div className="tagline_component">
              <div className="line-appear">
                <div className="project_tagline">{project.tagline}</div>
              </div>
              <div className="text-mono_wrapper hide-tablet">
                <div className="text-mono">{project.year}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_intro is-case">
        <div className="padding-global">
          <div className="container-large">
            <div className="intro_component is-project">
              <div className="text-mono_wrapper">
                <h2 className="text-mono">Project infos</h2>
              </div>
              <div>
                <div className="text-appear">
                  <p className="intro_description is-project">{project.intro}</p>
                </div>
                <div className="spacer-medium" />
                {project.websiteUrl ? (
                  <div className="nav-top_middle">
                    <a href={project.websiteUrl} target="_blank" rel="noreferrer" className="small-link w-inline-block">
                      <div className="text-mono_wrapper">
                        <div className="text-mono">Visit website</div>
                      </div>
                      <div className="small-link_arrow w-embed">{ARROW_SVG}</div>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.blocks.map((block, i) => (
        <Block block={block} key={i} />
      ))}

      <section className="section_projects-infos">
        <div className="padding-global">
          <div className="container-large">
            <div className="project_infos_component">
              <div className="project_infos_col">
                <div className="text-appear">
                  <h2 className="text-mono">Credits</h2>
                </div>
                <div className="project_infos_row">
                  <div className="text-appear">
                    <div className="project_info_content w-richtext">
                      {project.credits.map((c) => (
                        <p key={c}>{c}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_infos_col">
                <div className="text-appear">
                  <h2 className="text-mono">Scope</h2>
                </div>
                <div className="text-appear">
                  <div className="project_info_content w-richtext">
                    {project.scope.map((s) => (
                      <p key={s}>{s}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.postInfosBlocks?.map((block, i) => <Block block={block} key={i} />)}

      <section className="section_projects-next">
        <div className="padding-global">
          <div className="container-large">
            <a data-cursor-hover="Open project" href={`/work/${project.nextSlug}`} className="project_next_component w-inline-block">
              <div className="text-mono_wrapper">
                <div className="text-mono">Next project</div>
              </div>
              <div className="project_next_content">
                <div className="heading-appear">
                  <h2 className="project_next_name">{project.nextLabel}</h2>
                </div>
                <div className="project_next_visual_wrapper" />
              </div>
            </a>
          </div>
        </div>
      </section>

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
                  <div className="small-link_arrow w-embed">{ARROW_SVG}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
