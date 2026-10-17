import { getArticleBySlug, relatedArticleImages } from "@/content/news";

// The "Related articles" block at the bottom of every article page. Each related article renders
// three stacked <a> visuals (an invisible base link for the cursor-hover hit area, then a dark-mode
// and a light-mode image toggled purely via CSS) — this mirrors the original Webflow markup exactly,
// since the theme toggle and hover interactions depend on this structure.
export function RelatedArticles({ slugs }: { slugs: [string, string] }) {
  return (
    <section className="section_related-articles">
      <div className="padding-global">
        <div className="container-large">
          <div className="related-articles_component">
            <div className="text-mono_wrapper">
              <h2 className="text-mono">Related articles</h2>
            </div>
            <div className="latest_clw w-dyn-list">
              <div role="list" className="latest_content w-dyn-items">
                {slugs.map((slug) => {
                  const article = getArticleBySlug(slug);
                  const images = relatedArticleImages[slug];
                  if (!article || !images) return null;
                  const href = `/news/${slug}`;
                  return (
                    <div role="listitem" className="latest_content_item z-index-1 w-dyn-item" key={slug}>
                      <a data-cursor-hover="Read article" href={href} className="related-articles_visual is-invisible w-inline-block">
                        <img
                          src={images.light.src}
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet={images.light.srcSet}
                          className="latest_visual_background"
                        />
                      </a>
                      <div className="related-articles_visuel_wrapper simple-appear">
                        <a data-cursor-hover="Read article" href={href} className="related-articles_visual for-dark-mode w-inline-block">
                          <img
                            src={images.dark.src}
                            loading="lazy"
                            alt=""
                            sizes="100vw"
                            srcSet={images.dark.srcSet}
                            className="latest_visual_background"
                          />
                        </a>
                      </div>
                      <div className="related-articles_visuel_wrapper simple-appear">
                        <a data-cursor-hover="Read article" href={href} className="related-articles_visual for-light-mode w-inline-block">
                          <img
                            src={images.light.src}
                            loading="lazy"
                            alt=""
                            sizes="100vw"
                            srcSet={images.light.srcSet}
                            className="latest_visual_background"
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
