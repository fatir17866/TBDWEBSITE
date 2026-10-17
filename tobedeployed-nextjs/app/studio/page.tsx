import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";

export const metadata: Metadata = {
  title: "Creative Lab for Ambitious Brands | TOBEDEPLOYED",
  description:
    "TOBEDEPLOYED, founded in 2021, brings together designers and developers across Paris, Barcelona, and Los Angeles. Our mission: we craft iconic web experiences.",
  openGraph: {
    title: "Creative Lab for Ambitious Brands | TOBEDEPLOYED",
    description:
      "TOBEDEPLOYED, founded in 2021, brings together designers and developers across Paris, Barcelona, and Los Angeles. Our mission: we craft iconic web experiences.",
    images: ["https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68da400a3efdcd28f242769d_opengrapheV2%20(1).webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Lab for Ambitious Brands | TOBEDEPLOYED",
    description:
      "TOBEDEPLOYED, founded in 2021, brings together designers and developers across Paris, Barcelona, and Los Angeles. Our mission: we craft iconic web experiences.",
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

const CDN = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985";

// The Webflow hero renders 17 scattered decorative thumbnails (no meaningful alt text in the source).
const HERO_VISUALS: { src: string; srcSet?: string }[] = [
  { src: `${CDN}/68d14af05e0d62345efe539e_1.webp` },
  {
    src: `${CDN}/68d14af0ad06d6cb6a11f0dc_2.webp`,
    srcSet: `${CDN}/68d14af0ad06d6cb6a11f0dc_2-p-500.webp 500w, ${CDN}/68d14af0ad06d6cb6a11f0dc_2.webp 800w`,
  },
  {
    src: `${CDN}/68d14af0d28853d645efac55_3.webp`,
    srcSet: `${CDN}/68d14af0d28853d645efac55_3-p-500.webp 500w, ${CDN}/68d14af0d28853d645efac55_3-p-800.webp 800w, ${CDN}/68d14af0d28853d645efac55_3-p-1080.webp 1080w, ${CDN}/68d14af0d28853d645efac55_3.webp 1800w`,
  },
  {
    src: `${CDN}/68d14af0e4de88224bccf8ef_4.webp`,
    srcSet: `${CDN}/68d14af0e4de88224bccf8ef_4-p-500.webp 500w, ${CDN}/68d14af0e4de88224bccf8ef_4.webp 675w`,
  },
  {
    src: `${CDN}/68d14af01a3fa852ba2a7072_5.webp`,
    srcSet: `${CDN}/68d14af01a3fa852ba2a7072_5-p-500.webp 500w, ${CDN}/68d14af01a3fa852ba2a7072_5.webp 800w`,
  },
  {
    src: `${CDN}/68d14af09756369410ed98e4_6.webp`,
    srcSet: `${CDN}/68d14af09756369410ed98e4_6-p-500.webp 500w, ${CDN}/68d14af09756369410ed98e4_6.webp 960w`,
  },
  {
    src: `${CDN}/68d14af0e32d9020185d375c_7.webp`,
    srcSet: `${CDN}/68d14af0e32d9020185d375c_7-p-500.webp 500w, ${CDN}/68d14af0e32d9020185d375c_7.webp 800w`,
  },
  {
    src: `${CDN}/68d14af03318c8d4c2c72efd_8.webp`,
    srcSet: `${CDN}/68d14af03318c8d4c2c72efd_8-p-500.webp 500w, ${CDN}/68d14af03318c8d4c2c72efd_8.webp 925w`,
  },
  {
    src: `${CDN}/68d14af0f6e2255e9bdcec98_9.webp`,
    srcSet: `${CDN}/68d14af0f6e2255e9bdcec98_9-p-500.webp 500w, ${CDN}/68d14af0f6e2255e9bdcec98_9.webp 800w`,
  },
  {
    src: `${CDN}/68d14af0c932cd819bc78a58_10.webp`,
    srcSet: `${CDN}/68d14af0c932cd819bc78a58_10-p-500.webp 500w, ${CDN}/68d14af0c932cd819bc78a58_10.webp 800w`,
  },
  { src: `${CDN}/68d14af01d4e65bdb3fd6819_11.webp` },
  {
    src: `${CDN}/68d14b19faca9f664068f531_12.webp`,
    srcSet: `${CDN}/68d14b19faca9f664068f531_12-p-500.webp 500w, ${CDN}/68d14b19faca9f664068f531_12.webp 750w`,
  },
  {
    src: `${CDN}/68d14b226acaaf0b497117be_13.webp`,
    srcSet: `${CDN}/68d14b226acaaf0b497117be_13-p-500.webp 500w, ${CDN}/68d14b226acaaf0b497117be_13.webp 800w`,
  },
  {
    src: `${CDN}/68d14b29ea0da1a26a3927a7_14.webp`,
    srcSet: `${CDN}/68d14b29ea0da1a26a3927a7_14-p-500.webp 500w, ${CDN}/68d14b29ea0da1a26a3927a7_14.webp 900w`,
  },
  {
    src: `${CDN}/68d14b362961da02c8f079f1_15.webp`,
    srcSet: `${CDN}/68d14b362961da02c8f079f1_15-p-500.webp 500w, ${CDN}/68d14b362961da02c8f079f1_15.webp 800w`,
  },
  {
    src: `${CDN}/68d14b3ce4e3aa1f748a9546_16.webp`,
    srcSet: `${CDN}/68d14b3ce4e3aa1f748a9546_16-p-500.webp 500w, ${CDN}/68d14b3ce4e3aa1f748a9546_16.webp 956w`,
  },
  {
    src: `${CDN}/68d14b4288c7c082f7eb977b_17.webp`,
    srcSet: `${CDN}/68d14b4288c7c082f7eb977b_17-p-500.webp 500w, ${CDN}/68d14b4288c7c082f7eb977b_17-p-800.webp 800w, ${CDN}/68d14b4288c7c082f7eb977b_17.webp 1057w`,
  },
];

const CEOS = [
  {
    href: "https://www.linkedin.com/in/fatir-irfan-788777399/",
    img: "/images/team/fatir-malik.png",
    name: "Fatir Malik",
    role: "Fatir Malik, Co-CEO & AI Strategist",
    extraClass: "is-gabriel",
  },
  {
    href: "https://www.linkedin.com/in/hasnain-imran-086853340/",
    img: "/images/team/hasnain-imran.jpeg",
    name: "Hasnain Imran",
    role: "Hasnain Imran, Co-CEO & Business Growth Lead",
    extraClass: "",
  },
];

const TEAM = [
  {
    href: "https://www.linkedin.com/in/amna-imran-4385052a7/",
    img: "/images/team/amna-imran.webp",
    name: "Amna Imran",
    role: "Amna Imran, Head of Engineering",
  },
  {
    href: "https://www.linkedin.com/in/ahlam-amjad-775883370/",
    img: "/images/team/ahlam-amjad.webp",
    name: "Ahlam Amjad",
    role: "Ahlam Amjad, AI & Automation Engineer",
  },
  {
    href: "https://www.linkedin.com/in/manahil-ali-5aa248407/",
    img: "/images/team/manahil-ali.jpeg",
    name: "Manahil Ali",
    role: "Manahil Ali, SEO & Content Strategist",
  },
  {
    href: "https://www.linkedin.com/in/zoyaumar1109/",
    img: "/images/team/zoya-umar.webp",
    name: "Zoya Umar",
    role: "Zoya Umar, UI/UX & Product Designer",
  },
];

const VALUES = [
  {
    label: "Craft",
    heading: (
      <>
        The art <br />
        of precision
      </>
    ),
    body: "Building functional software is easy. Engineering systems that scale effortlessly is another story. Every line of code, pipeline, and model we deploy serves a singular purpose: to run efficiently, eliminate friction, and drive measurable performance. It’s that balance between raw speed and architectural precision that makes platforms load instantly, scale flawlessly, and outshine the competition. Nothing’s left to chance except maybe where we set our coffee on the desk.",
    wide: false,
  },
  {
    label: "Engineering & Beyond",
    heading: (
      <>
        Faster. <br />
        Sharper. <br />
        Zero friction.
      </>
    ),
    body: "Digital is our proving ground. We master the best technologies—from Webflow, Next.js, and modern AI frameworks to custom API architectures and autonomous workflow integrations. But beyond the tech stack itself, what truly drives us is how it accelerates your bottom line. If it doesn’t scale or perform under pressure, congrats—you’ve built a digital placeholder.",
    wide: true,
  },
  {
    label: "Execution",
    heading: (
      <>
        High velocity,
        <br />
        zero chaos
      </>
    ),
    body: (
      <>
        We thrive on complex technical projects, the kind that challenge us to build smarter. We aim for massive
        scale and hit hard deadlines, but we don’t lose our cool in the process. Stress doesn’t fix broken
        infrastructure. Logic, clean architecture, and sharp engineering do. There’s always a more efficient way
        forward, sometimes even an elegant one. We don’t burn out on brute force. We automate the friction, adapt
        fast, and keep systems moving.
        <br />
        <strong>And yes, we sleep just fine at night. (Our servers handle the rest.)</strong>
      </>
    ),
    wide: false,
  },
  {
    label: "Agility",
    heading: (
      <>
        Speed is <br />
        in our code
      </>
    ),
    body: "The tech landscape moves at exponential speed—and so do we. We don’t just adapt to breakthroughs, we build on top of them before the ink dries. Constantly iterating, we stress-test new frameworks, deploy emerging AI paradigms, and dismantle yesterday’s bottlenecks. Because in digital infrastructure, static systems don't just age—they decay. Stay fast, or get left behind.",
    wide: false,
  },
  {
    label: "transparency",
    heading: "No bullshit",
    body: "We don’t speak in jargon. We don’t bury information under messy processes or endless slide decks. Everything’s laid out — what’s happening, who’s doing it, how, and why. Because transparency isn’t a principle. It’s how we operate. And the only thing blurry around here might be the Google Meet background.",
    wide: false,
  },
];

// Inline CSS for the studio-only people grids and hero visual pool. Ported verbatim from the
// <style> block embedded in studio.html's <head>.
const STUDIO_CSS = `
  .people_link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .people_ceos {
    grid-column-gap: 4.6875rem;
    grid-row-gap: 4.6875rem;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: flex-start;
    display: grid;
    margin-bottom: 4.6875rem;
    position: relative;
  }

  .people_team {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: flex-start;
    display: grid;
    position: relative;
  }

  @media (max-width: 991px) {
    .people_team {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 767px) {
    .people_ceos {
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;
      margin-bottom: 2rem;
    }

    .people_team {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: .75rem;
      grid-row-gap: .75rem;
    }
  }

  .section_hero img {
    width: 12.5rem;
    height: 12.5rem;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    transform: none;
  }

  .section_hero .studio_hero_visuals img {
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    border-radius: 0.25rem !important;
    object-fit: cover;
  }
`;

export default function StudioPage() {
  return (
    <PageShell dataPage="studio">
      <style dangerouslySetInnerHTML={{ __html: STUDIO_CSS }} />
      <div className="overflow-hidden">
        <section className="section_hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="hero_component">
                <div className="heading-appear">
                  <h1 className="text-align-center">
                    Behind
                    <br />
                    the Pixels
                  </h1>
                </div>
                <div className="studio_hero_visuals">
                  {HERO_VISUALS.map((visual) => (
                    <img
                      key={visual.src}
                      src={visual.src}
                      loading="lazy"
                      sizes={visual.srcSet ? "100vw" : undefined}
                      srcSet={visual.srcSet}
                      alt=""
                      className="studio_hero_visual"
                    />
                  ))}
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
                  <h2 className="text-mono">About</h2>
                </div>
                <div>
                  <div className="text-appear">
                    <p className="intro_description">
                      TBD was born out of a collective of senior engineers, AI researchers, and digital strategists
                      who came together with a singular goal: to build smarter. We shared the same relentless
                      standards, commitment to speed, and drive to move beyond generic, off-the-shelf
                      implementations. That vision turned into TBD—an agile tech and growth studio operating globally
                      at the intersection of AI, automated systems, and high-performance digital engineering. An
                      innovation lab where every system is architected to scale, perform, and dominate. Our
                      obsession? High-impact technology demands flawless execution. We deliver enterprise-grade
                      performance. End of story.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section_people">
        <div className="padding-global">
          <div className="container-large">
            {/* Top row: 2 CEO photos */}
            <div className="people_ceos">
              {CEOS.map((person) => (
                <a
                  key={person.name}
                  href={person.href}
                  target="_blank"
                  rel="noopener"
                  className="people_picture_wrapper simple-appear people_link"
                >
                  <div className="visual-appear">
                    <img
                      src={person.img}
                      loading="eager"
                      alt={person.name}
                      className={`people_picture${person.extraClass ? ` ${person.extraClass}` : ""}`}
                    />
                  </div>
                  <div className="people_infos">
                    <div className="text-mono">{person.role}</div>
                  </div>
                </a>
              ))}
            </div>
            {/* Bottom row: 4 team photos */}
            <div className="people_team">
              {TEAM.map((person) => (
                <a key={person.name} href={person.href} target="_blank" rel="noopener" className="people_picture_wrapper simple-appear people_link">
                  <div className="visual-appear">
                    <img src={person.img} loading="lazy" alt={person.name} className="people_picture" />
                  </div>
                  <div className="people_infos">
                    <div className="text-mono">{person.role}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section_values">
        <div className="padding-global">
          <div className="container-large">
            <div className="values_component">
              <div className="w-embed">
                <h2 className="line-appear">
                  The fuel
                  <br />
                  <span className="cta_visual is-studio" />
                  behind
                  <br />
                  the craft
                </h2>
              </div>
              <div className="values_list">
                {VALUES.map((value) => (
                  <div className="values_item" key={value.label}>
                    <div className="text-mono_wrapper">
                      <h3 className="text-mono">{value.label}</h3>
                    </div>
                    {value.wide ? (
                      <div className="max-width-xxmedium">
                        <div className="line-appear">
                          <div className="heading-style-h3">{value.heading}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="line-appear">
                        <div className="heading-style-h3">{value.heading}</div>
                      </div>
                    )}
                    <div className="text-appear">
                      <p>{value.body}</p>
                    </div>
                  </div>
                ))}
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
