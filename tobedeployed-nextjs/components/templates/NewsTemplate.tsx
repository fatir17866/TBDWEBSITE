import { ReactNode } from "react";
import { NewsArticleMeta } from "@/content/news";
import { RelatedArticles } from "@/components/news/RelatedArticles";
import { ArticleCta } from "@/components/news/ArticleCta";

// Shared layout for every /news/[slug] article page: hero (category + title + cover), the
// article_side sidebar (author/date/share links), the article body (passed as children — the
// per-article rich-text component), related articles, and the closing CTA. Ported verbatim from the
// `section_article-hero` / `section_article` / `section_related-articles` markup shared by every
// source news/*.html file.
export function NewsTemplate({ meta, children }: { meta: NewsArticleMeta; children: ReactNode }) {
  const { cover } = meta;

  return (
    <>
      <section className="section_article-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="article_hero_component">
              <div className="text-mono_wrapper">
                <div className="text-mono">{meta.category}</div>
              </div>
              <div className="article_heading_wrapper">
                <div className="heading-appear">
                  <h1 className="article_title">{meta.title}</h1>
                </div>
              </div>
              <div className="scaling-element_small-box hide-mobile-landscape">
                <div className="scaling-video_before" />
                <div data-flip-element="wrapper" className="article_cover_container">
                  <div data-flip-element="target" className="article_cover_wrapper element-appear">
                    <img
                      src={cover.src}
                      loading="eager"
                      alt={cover.alt}
                      sizes={cover.sizes}
                      srcSet={cover.srcSet}
                      className="article_cover"
                    />
                    <div className="visual_overlay" />
                  </div>
                </div>
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
            <div className="article_cover_component">
              <div className="scaling-element_big-box">
                <div className="scaling-video_before" />
                <div data-flip-element="wrapper" className="article_cover_container hide-mobile-landscape" />
                <div
                  data-flip-element="wrapper"
                  style={{ backgroundImage: `url(${cover.src})` }}
                  className="article_cover_container simple-appear-no-delay show-mobile-landscape"
                />
              </div>
              <div className="article_cover_caption">
                <div className="text-mono_wrapper">
                  <div className="text-mono">{cover.caption}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_article">
        <div className="padding-global">
          <div className="container-large">
            <div className="article_component">
              <div className="article_side">
                <div className="w-dyn-list">
                  {meta.tag ? (
                    <div role="list" className="article_tags_list w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="text-mono_wrapper">
                          <div className="text-mono">{meta.tag}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hide w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  )}
                </div>
                <div className="spacer-xsmall hide-tablet" />
                <div className="nav-top_left_1">
                  <div className="text-mono_wrapper">
                    <div className="text-mono">written by</div>
                  </div>
                  <div className="text-mono_wrapper">
                    <div className="text-mono">{meta.author}</div>
                  </div>
                </div>
                <div className="spacer-xsmall hide-tablet" />
                <div className="nav-top_left_2">
                  <div className="text-mono_wrapper">
                    <div className="text-mono">Published on</div>
                  </div>
                  <div className="text-mono_wrapper">
                    <div className="text-mono">{meta.publishedDate}</div>
                  </div>
                </div>
                <div className="spacer-xsmall hide-tablet" />
                <div className="share_wrapper">
                  <div className="text-mono_wrapper">
                    <div className="text-mono">Share this article</div>
                  </div>
                  <div id="shareLinkedIn" className="link">
                    <div className="link_first">
                      <div className="text-mono_wrapper">
                        <div className="text-mono">LinkedIn</div>
                      </div>
                    </div>
                    <div className="link_second">
                      <div className="text-mono">LinkedIn</div>
                    </div>
                  </div>
                  <div id="shareX" className="link">
                    <div className="link_first">
                      <div className="text-mono_wrapper">
                        <div className="text-mono">Twitter/X</div>
                      </div>
                    </div>
                    <div className="link_second">
                      <div className="text-mono">Twitter/X</div>
                    </div>
                  </div>
                  <div id="shareFacebook" className="link">
                    <div className="link_first">
                      <div className="text-mono_wrapper">
                        <div className="text-mono">Facebook</div>
                      </div>
                    </div>
                    <div className="link_second">
                      <div className="text-mono">Facebook</div>
                    </div>
                  </div>
                  <div id="copyLink" className="link">
                    <div className="link_first">
                      <div className="text-mono_wrapper">
                        <div className="text-mono">Copy link</div>
                      </div>
                    </div>
                    <div className="link_second">
                      <div className="text-mono">Copy link</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="simple-appear-no-delay">{children}</div>
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles slugs={meta.relatedSlugs} />
      <ArticleCta />
    </>
  );
}
