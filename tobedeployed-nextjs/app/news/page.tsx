import { PageShell } from "@/components/chrome/PageShell";
import { ArticleCta } from "@/components/news/ArticleCta";
import { newsArticles } from "@/content/news";

// Ported from news.html: hero ("99 ways to be inspired") + the 8-article grid, each card a
// background-image div driven by a GIF, linking to /news/<slug>. Closed by the shared CTA section.
export default function NewsPage() {
  return (
    <PageShell dataPage="news">
      <section className="section_hero is-news">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component">
              <div className="heading-appear">
                <h1 className="text-align-center">
                  99 ways
                  <br />
                  to be
                  <br />
                  inspired
                </h1>
              </div>
              <div className="news_hero_visual is-third simple-appear" />
              <div className="news_hero_visual is-second simple-appear" />
              <div className="news_hero_visual is-first simple-appear" />
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

      <section className="section_news">
        <div className="padding-global">
          <div className="container-large">
            <div className="news_component">
              <div className="w-dyn-list">
                <div role="list" className="news_list w-dyn-items">
                  {newsArticles.map((article) => (
                    <div role="listitem" className="w-dyn-item" key={article.slug}>
                      <a data-cursor-hover="Read article" href={`/news/${article.slug}`} className="news_item w-inline-block">
                        <div className="text-mono_wrapper">
                          <div className="text-mono">{article.category}</div>
                        </div>
                        <div className="news_heading_wrapper">
                          <div className="line-appear">
                            <h2 className="news_heading">{article.title}</h2>
                          </div>
                        </div>
                        <div style={{ backgroundImage: `url(${article.listingGif})` }} className="news_visual simple-appear-no-delay" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArticleCta />
    </PageShell>
  );
}
