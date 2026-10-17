import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";

export const metadata: Metadata = {
  title: "From Sprints to Premium Subscriptions | TOBEDEPLOYED",
  description:
    "Our offers: a 1-day creative sprint, a complete website, or a premium subscription. Three different paths, one single goal: bold digital experiences.",
  openGraph: {
    title: "From Sprints to Premium Subscriptions | TOBEDEPLOYED",
    description:
      "Our offers: a 1-day creative sprint, a complete website, or a premium subscription. Three different paths, one single goal: bold digital experiences.",
    images: ["https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68da400a3efdcd28f242769d_opengrapheV2%20(1).webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "From Sprints to Premium Subscriptions | TOBEDEPLOYED",
    description:
      "Our offers: a 1-day creative sprint, a complete website, or a premium subscription. Three different paths, one single goal: bold digital experiences.",
    images: ["https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68da400a3efdcd28f242769d_opengrapheV2%20(1).webp"],
  },
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z"
        fill="currentColor"
      />
    </svg>
  );
}

const PACKS = [
  {
    className: "is-first",
    heading: "All-in-one",
    description:
      "The all-in-one formula for a business built to scale. From strategy to deployment, we handle it all. AI agents, automation, web and app development: take it all, or just what you need. From intelligent workflows to full-stack builds, we deliver with precision. The result? An unfair advantage, engineered by TBD.",
    skills: ["AI Agents", "Automation", "Web Development", "SEO & Content", "Advertising", "UI/UX Design", "App Development"],
  },
  {
    className: "is-second",
    heading: "Daily pass",
    description:
      "A clear brief, a tight deadline? Our daily rate puts all our energy into your priorities. Web design or Webflow integration— you decide. Think of it as a creative sprint: book a day, or as many as you need. Fast, flexible, no strings attached.",
    skills: ["UI/UX design", "Webflow Development", "landing page", "Figma prototype", "SEO content"],
  },
  {
    className: "is-third",
    heading: "Premium subscription",
    description:
      "Your team, fully extended. A premium subscription unlocking access to all our expertise: design, development, content. Unlimited requests, handled with priority and maximum responsiveness. The ideal formula for scaleups and fast-growing companies that need continuous support and a partner always by their side.",
    skills: ["long-term support", "Fast turnaround", "Unlimited projects", "Unlimited revisions", "Dedicated client manager"],
  },
];

const SMART_ITEMS = [
  {
    heading: "Expand your team",
    body: "Fill the talent gaps in your team with our specialists in AI agents, automation, web development, content and SEO, paid advertising, UI/UX design, and app development. We bring the missing expertise you need to keep projects moving faster, looking sharper, and performing at a higher level.",
  },
  {
    heading: "Total flexibility",
    body: "No two projects move the same way. That’s why our offers adapt: one day, one month, or more—depending on what you need. We scale our resources to your priorities, always with the same level of precision and care.",
  },
  {
    heading: "Respected deadlines",
    body: "A project well managed is a project delivered on time. We structure every step to move fast without sacrificing quality. The result: deliverables ready when promised, meeting your standards. Without stress. Without delays.",
  },
  {
    heading: "Tailor-made training",
    body: "We close every project with clear, structured training. The goal: to ensure a smooth, confident transition and give you full autonomy to manage Webflow and your CMS with ease.",
  },
];

export default function PlansPage() {
  return (
    <PageShell dataPage="plans">
      <section className="section_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component">
              <div className="max-width-xxxlarge">
                <div className="heading-appear">
                  <h1 className="text-align-center">
                    <strong>
                      The Perfect
                      <br />
                      Plan
                    </strong>
                  </h1>
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
          </div>
        </div>
      </section>

      <section className="section_intro">
        <div className="padding-global">
          <div className="container-large">
            <div className="intro_component">
              <div className="text-mono_wrapper">
                <h2 className="text-mono">Sharp. Flexible. Effective.</h2>
              </div>
              <div className="text-appear">
                <p className="intro_description">
                  Our offers? Like a Lego set for serious adults: precise, modular, and free of useless instructions.
                  From fast-turnaround projects to full-scale redesigns, we adapt to your real needs, not the other
                  way around. We don’t sell packages. We solve problems. Flexible, agile, and attentive, we deliver
                  effective solutions that actually work. As simple as that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_packs">
        <div className="padding-global">
          <div className="container-large">
            <div className="packs_component">
              <div className="w-embed">
                <h2 className="line-appear">
                  Masterpiece
                  <br />
                  <span className="cta_visual is-pack" />
                  Sprint
                  <br />
                  unlimited
                </h2>
              </div>
              <div className="text-mono_wrapper">
                <h3 className="text-mono">services packed (3)</h3>
              </div>
              <div id="servicesContent" className="services_content">
                <div data-scroll-target="servicesContent" data-scroll-sticky="" data-scroll="" className="text-mono_sticky is-half">
                  <div className="packs_words">
                    <div className="text-mono_wrapper">
                      <div className="text-mono">Masterpiece</div>
                    </div>
                    <div className="text-mono">Sprint</div>
                    <div className="text-mono">Unlimited</div>
                  </div>
                </div>
                <div className="packs_list">
                  {PACKS.map((pack) => (
                    <div className={`packs_item ${pack.className}`} key={pack.heading}>
                      <div className="line-appear">
                        <h3 className="heading-style-h3">{pack.heading}</h3>
                      </div>
                      <div className="packs_description_wrapper">
                        <div className="text-appear">
                          <div className="max-width-plan">
                            <p>{pack.description}</p>
                          </div>
                        </div>
                        <div className="skills_list">
                          {pack.skills.map((skill) => (
                            <div className="text-mono_wrapper" key={skill}>
                              <div className="text-mono">{skill}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div data-cursor-hover="Let's talk" className="small-link">
                        <div className="text-mono_wrapper">
                          <div className="text-mono">Let&apos;s talk</div>
                        </div>
                        <div className="small-link_arrow w-embed">
                          <ArrowIcon />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_side-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="side_cta_component">
              <div className="side_cta_content">
                <div className="text-mono_wrapper">
                  <h2 className="text-mono">Need something custom?</h2>
                </div>
                <div className="text-appear">
                  <p className="text-mono">
                    Our packs are just the starting point. If you’ve got a specific need or a bold challenge, we’ll
                    craft a tailor-made offer that fits your project perfectly.
                  </p>
                </div>
                <div data-cursor-hover="Let's talk" className="small-link">
                  <div className="text-mono_wrapper">
                    <div className="text-mono">Contact us</div>
                  </div>
                  <div className="small-link_arrow w-embed">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_smart">
        <div className="padding-global">
          <div className="container-large">
            <div className="smart_component">
              <div className="w-embed">
                <h2 className="line-appear">
                  <span className="cta_visual is-pack2" />
                  We build
                  <br />
                  you launch
                </h2>
              </div>
              <div className="smart_content">
                <div className="text-mono_sticky">
                  <div className="text-mono_wrapper">
                    <div className="text-mono no-shrink">smart pack</div>
                  </div>
                </div>
                <div className="smart_list">
                  {SMART_ITEMS.map((item) => (
                    <div className="smart_item" key={item.heading}>
                      <div className="line-appear">
                        <h3 className="heading-style-h3">{item.heading}</h3>
                      </div>
                      <div className="text-appear">
                        <p>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                    Work with us if average isn’t your thing.
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
                    <ArrowIcon />
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
