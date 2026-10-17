import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";

const TITLE = "Branding, Design & Webflow Development | TOBEDEPLOYED";
const DESCRIPTION =
  "At TOBEDEPLOYED, we think, craft, and design bold websites for ambitious brands. We’re experts in branding, creative design, and Webflow development.";
const OG_IMAGE =
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68da400a3efdcd28f242769d_opengrapheV2 (1).webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// Inline CSS for the home-only client-logo marquee and the (inert) hover-preview image pool used by
// section_home-intro. Ported verbatim from the <style> blocks embedded in index.html's w-embed elements.
const HOME_INTRO_IMAGE_CSS = `
  .home_intro_image {
    width: 1px;
    height: 1px;
    top: 0;
    left: 0;
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    border-radius: 0.3rem !important;
  }

  .home_intro_component > img {
    pointer-events: none;
    width: 20vw;
    height: 20vw;
    display: block;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.3rem !important;
  }
`;

const HOME_SERVICES_VISUALS_CSS = `
  .home_services_visuals_container {
    width: max-content;
    white-space: nowrap;
    user-select: none;
    cursor: grab;
  }

  .home_services_visual_card img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    pointer-events: none;
  }
`;

const HOME_CLIENTS_MARQUEE_CSS = `
  /* Base Container Styles */
  .marquee_container {
    display: flex;
    overflow: hidden;
    width: 100%;
  }

  .marquee_track {
    display: flex;
    width: max-content;
    /* Adjust time to make it smooth, maybe 20s for one set */
    animation: scroll-marquee 15s linear infinite;
  }

  .marquee_container:hover .marquee_track {
    animation-play-state: paused;
  }

  @keyframes scroll-marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-25%);
    }
  }

  .client_logo_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 80px;
    margin: 0 2rem;
    flex-shrink: 0;
  }

  .client_logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: filter 0.3s ease;
  }

  /* Theme Responsiveness for Logos */
  html.is-dark .client_logo:not(.invantros-logo) {
    /* Converts black to white while maintaining brand colors (like orange and green) */
    filter: invert(1) hue-rotate(180deg);
  }

  html.is-dark .invantros-logo {
    filter: brightness(0) invert(1);
  }

  /* Responsive Adjustments */
  @media screen and (max-width: 991px) {
    .client_logo_wrapper {
      width: 160px;
      height: 64px;
      margin: 0 1.5rem;
    }
  }

  @media screen and (max-width: 767px) {
    .client_logo_wrapper {
      width: 130px;
      height: 52px;
      margin: 0 1rem;
    }
  }

  @media screen and (max-width: 479px) {
    .client_logo_wrapper {
      width: 110px;
      height: 44px;
      margin: 0 0.8rem;
    }
  }
`;

const CLIENT_LOGOS = [
  { src: "/clients/Antrosys%20Logo.webp", alt: "Antrosys", extraClass: "" },
  { src: "/clients/Invantros%20logo.webp", alt: "Invantros", extraClass: " invantros-logo" },
  { src: "/clients/nvidia-logo.webp", alt: "Nvidia", extraClass: "" },
  { src: "/clients/DEVMACH.png", alt: "Devmach", extraClass: "" },
  { src: "/clients/BRICKLIX.png", alt: "Bricklix", extraClass: "" },
];

const PORTFOLIO_ITEMS = [
  {
    name: "Hyperion",
    href: "/work/matera",
    idPath: "33fb34a1-54f2-7d8b-f776-a9f4757f077c_instance-0",
    cmsContext:
      "%5B%7B%22collectionId%22%3A%2267aca0c8b46d94d622b75723%22%2C%22itemId%22%3A%2267bdc0cbfa934996bbc346f1%22%7D%5D",
    bgSrc: "/images/hyperion-1.jpg",
    bgAlt: "Hyperion poster",
    bgStyle: undefined as React.CSSProperties | undefined,
    videoSrc: "/images/hyperion-2.jpg",
    videoStyle: { width: "100%", height: "100%", objectFit: "cover" } as React.CSSProperties,
  },
  {
    name: "Nexus",
    href: "/work/chance",
    idPath: "33fb34a1-54f2-7d8b-f776-a9f4757f077c_instance-1",
    cmsContext:
      "%5B%7B%22collectionId%22%3A%2267aca0c8b46d94d622b75723%22%2C%22itemId%22%3A%2267bdc1755fd418dad8c1a7e1%22%7D%5D",
    bgSrc: "/images/nexus-1.jpg",
    bgAlt: "Nexus poster",
    bgStyle: { objectFit: "contain", background: "#000" } as React.CSSProperties,
    videoSrc: "/images/nexus-2.jpg",
    videoStyle: { width: "100%", height: "100%", objectFit: "contain", background: "#000" } as React.CSSProperties,
  },
  {
    name: "Sorapay",
    href: "/work/silvr",
    idPath: "33fb34a1-54f2-7d8b-f776-a9f4757f077c_instance-2",
    cmsContext:
      "%5B%7B%22collectionId%22%3A%2267aca0c8b46d94d622b75723%22%2C%22itemId%22%3A%2267aca14dce0bb83dc0b582e5%22%7D%5D",
    bgSrc: "/images/sorapay-1-sq.jpg",
    bgAlt: "Sorapay poster",
    bgStyle: { objectFit: "cover", objectPosition: "center top" } as React.CSSProperties,
    videoSrc: "/images/sorapay-2.jpg",
    videoStyle: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" } as React.CSSProperties,
  },
  {
    name: "Zephyr",
    href: "/work/intramuros-magazine",
    idPath: "33fb34a1-54f2-7d8b-f776-a9f4757f077c_instance-3",
    cmsContext:
      "%5B%7B%22collectionId%22%3A%2267aca0c8b46d94d622b75723%22%2C%22itemId%22%3A%2267aca17e06da98b61d333085%22%7D%5D",
    bgSrc: "/images/zephyr-1-sq.jpg",
    bgAlt: "Zephyr poster",
    bgStyle: { objectFit: "cover", objectPosition: "center top" } as React.CSSProperties,
    videoSrc: "/images/zephyr-2.jpg",
    videoStyle: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" } as React.CSSProperties,
  },
];

const SERVICES = [
  {
    title: "AI Agents",
    sub: "Storytelling",
    wId: "b4e43049-dfbc-5a93-99f7-9f34cd11630b",
    hide: false,
    poster:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68bef694221ab31dc7a0898e_Home-artdirection-poster-00001.jpg",
    src:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-transcode.webm",
  },
  {
    title: "Automation",
    sub: "Identity",
    hide: false,
    poster:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68bef76a17912168bc67811f_Home-branding-poster-00001.jpg",
    src:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-transcode.webm",
  },
  {
    title: "Web Development ",
    sub: "Integration",
    hide: false,
    poster:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68bef7ea54539b4433a39276_Webflow-home-poster-00001.jpg",
    src:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-transcode.webm",
  },
  {
    title: "UI/UX Design",
    sub: "Wireframes",
    hide: false,
    poster:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68bef86a1717db6af24e06f2_UI-UX-Home-poster-00001.jpg",
    src:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-transcode.webm",
  },
  {
    title: "App Development",
    sub: "Transitions",
    hide: false,
    // Source markup for this one item was corrupted by the HTTrack mirror (a stray quote broke the
    // background-image url and pointed at a relative path). Reconstructed the CDN URL following the
    // same naming convention as its sibling transcode file below.
    poster:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/69f31d237bb976aa6e0bc834_Scene-1_poster.0000000.jpg",
    src:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_webm.webm",
  },
  {
    title: "3D & Motion",
    sub: "Immersive",
    hide: true,
    poster:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68befb5c906395bf405011f5_Motion%20Design%20-%20Home-poster-00001.jpg",
    src:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68befb5c906395bf405011f5_Motion Design - Home-transcode.webm",
  },
  {
    title: "advertising",
    sub: "Creative Ads",
    hide: false,
    poster:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68df9e1b94554da67438cec0_Ads-service-homeV3-poster-00001.jpg",
    src:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-transcode.mp4",
  },
  {
    title: "SEO & Content",
    sub: "Ranking",
    hide: false,
    poster:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68befca9c05567e63bc4d4a0_seo%20content%20home-poster-00001.jpg",
    src:
      "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68befca9c05567e63bc4d4a0_seo content home-transcode.webm",
  },
];

const ARROW_SVG = (
  <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z"
      fill="currentColor"
    />
  </svg>
);

export default function HomePage() {
  return (
    <PageShell isHome dataPage="home">
      <section id="hero-section" className="section_hero overflow-hidden no-cursor">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component is-home">
              <div className="h1-french">
                <div className="heading-appear">
                  <h1 className="text-align-center french-home-hero">
                    Studi<span className="is-salt">o</span> cr<span className="is-wide-4">é</span>atif
                    <br />
                    pour marqu<span className="is-wide-4">e</span>s
                    <br />
                    ambiti<span className="is-wide-4">e</span>uses.
                  </h1>
                </div>
              </div>
              <div className="h1-english">
                <div className="heading-appear">
                  <h1 className="text-align-center">
                    We think
                    <br />
                    craft and
                    <br />
                    design
                  </h1>
                </div>
              </div>
              <div className="moving-visual_wrapper">
                <div className="w-embed">
                  <div
                    className="moving-visual is-light w-background-video w-background-video-atom"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(40px, 40px) scale(1.2, 1.2)",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      style={{
                        backgroundImage:
                          "url(https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68dfa4ffe42ad829f9d5bd31_Home-Hero-lightV5-poster-00001.jpg)",
                      }}
                      muted
                      playsInline
                      data-wf-ignore="true"
                      data-object-fit="cover"
                    >
                      <source
                        src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa4ffe42ad829f9d5bd31_Home-Hero-lightV5-transcode.mp4"
                        data-wf-ignore="true"
                      />
                    </video>
                  </div>
                </div>
                <div className="w-embed">
                  <div
                    className="moving-visual is-dark w-background-video w-background-video-atom"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(40px, 40px) scale(1.2, 1.2)",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      style={{
                        backgroundImage:
                          "url(https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68dfa5030619737bde7460e5_Home-Hero-DK%20ModeV4-poster-00001.jpg)",
                      }}
                      muted
                      playsInline
                      data-wf-ignore="true"
                      data-object-fit="cover"
                    >
                      <source
                        src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa5030619737bde7460e5_Home-Hero-DK ModeV4-transcode.mp4"
                        data-wf-ignore="true"
                      />
                    </video>
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
          </div>
        </div>
      </section>

      <section id="video-container-section" className="section_home-video">
        <div className="padding-global">
          <div className="container-large">
            <div className="element-appear">
              <div className="visuals_component">
                <div className="visual_wrapper grow-appear is-home-video">
                  <div className="home-video light w-embed w-iframe w-script">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/videos/home-hero-combined-poster.jpg"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      data-object-fit="cover"
                    >
                      <source src="/videos/home-hero-combined.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="visual_overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_home-intro">
        <div className="padding-global">
          <div className="container-large">
            <div className="home_intro_component">
              <div className="home_intro_mono_wrapper">
                <div className="text-mono_wrapper">
                  <h2 className="text-mono">Creative studio building premium Brands</h2>
                </div>
              </div>
              <div className="simple-appear hide-mobile-landscape">
                <p className="home_intro_content">
                  {"It’s never “just a website.”"}
                  <br />
                  Every <span className="home_intro_hover is-first">detail</span> matters.
                  <br />
                  We craft digital experiences.
                  <br />
                  Your design. Our obsession.
                  <br />
                  Your brand. Our <span className="home_intro_hover is-second">playground</span>.
                </p>
              </div>
              <div className="text-appear show-mobile-landscape">
                <p className="home_intro_content">
                  {"It’s never"}
                  <br />
                  {"“just a website”"}
                  <br />
                  Every detail
                  <br />
                  matters. We craft
                  <br />
                  digital experiences.
                  <br />
                  Your design.
                  <br />
                  Our obsession.
                  <br />
                  Your brand.
                  <br />
                  Our playground.
                </p>
              </div>
              <div className="w-embed">
                <div className="home_intro_visuals" aria-hidden="true">
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d143844e199c5fe25893c6_Details 1.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384921ac39670293bad_Details2.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384e95f535d6ce77d4f_Details3.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384e6539b091e5c0c8b_Details4.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384b8a083b5d518278d_Details5.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a128c7643746e47f9_Playground1.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a83ac058871c1ccfc_Playground2.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a3ce130a222671480_Playground3.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a796dfc08d400d6ea_Playground4.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a8736b633433d00f9_Playground5.webp"
                    alt=""
                    loading="lazy"
                    className="home_intro_image"
                  />
                </div>
                <style dangerouslySetInnerHTML={{ __html: HOME_INTRO_IMAGE_CSS }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_latest">
        <div className="padding-global">
          <div className="container-large">
            <div className="latest_component">
              <div className="home_latest_heading_wrapper">
                <div className="home_latest_heading_absolute">
                  <div className="text-mono_wrapper">
                    <h2 className="text-mono">Selected projects</h2>
                  </div>
                </div>
                <a
                  data-cursor-hover="Portfolio"
                  data-wf-native-id-path="8610c7bf-4b00-f233-3bdf-106645d9efee"
                  data-wf-ao-click-engagement-tracking="true"
                  data-wf-element-id="8610c7bf-4b00-f233-3bdf-106645d9efee"
                  href="/work"
                  className="w-inline-block"
                >
                  <div className="heading-appear">
                    <p className="playground-heading">Playground</p>
                  </div>
                </a>
              </div>
              <div className="latest_clw w-dyn-list">
                <div role="list" className="latest_content w-dyn-items">
                  {PORTFOLIO_ITEMS.map((item, i) => (
                    <div role="listitem" className="latest_content_item w-dyn-item" key={item.name}>
                      <a
                        data-cursor-hover={item.name}
                        data-wf-native-id-path={item.idPath}
                        data-wf-ao-click-engagement-tracking="true"
                        data-wf-element-id="33fb34a1-54f2-7d8b-f776-a9f4757f077c"
                        data-wf-cms-context={item.cmsContext}
                        href={item.href}
                        className="latest_visual w-inline-block"
                      >
                        <img
                          src={item.bgSrc}
                          loading="lazy"
                          alt={item.bgAlt}
                          className="latest_visual_background"
                          style={item.bgStyle}
                        />
                        <div className="latest_visual_overlay" />
                        <div className="latest_visual_video_wrapper">
                          <div className="visual_scale w-embed">
                            <img className="main-video" src={item.videoSrc} alt={item.bgAlt} style={item.videoStyle} />
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_home-services">
        <div className="padding-global">
          <div className="container-large">
            <div className="home_services_component">
              <div className="text-mono_wrapper">
                <h2 className="text-mono">Services</h2>
              </div>
              <div className="home_services_list">
                {SERVICES.map((service) => (
                  <div
                    key={service.title}
                    data-w-id={service.wId}
                    className={
                      "home_services_list-item_wrapper" + (service.hide ? " hide" : "")
                    }
                  >
                    <div className="home_services_list-item_container">
                      <div className="home_services_list-item line-appear">{service.title}</div>
                      <div className="home_services_list-item_absolute">
                        <div className="text-mono">{service.sub}</div>
                      </div>
                    </div>
                    <div className="home_services_embed w-embed">
                      <div
                        className="home_services_visual_wrapper w-background-video w-background-video-atom"
                        style={{ opacity: 0, width: "384px", height: "0px" }}
                      >
                        <video
                          autoPlay
                          loop
                          style={{ backgroundImage: `url(${service.poster})` }}
                          muted
                          playsInline
                          data-wf-ignore="true"
                          data-object-fit="cover"
                          draggable
                        >
                          <source src={service.src} data-wf-ignore="true" />
                        </video>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                data-cursor-hover="Services"
                data-w-id="fe56df01-7416-2145-e56e-d47a174f716d"
                data-wf-native-id-path="fe56df01-7416-2145-e56e-d47a174f716d"
                data-wf-ao-click-engagement-tracking="true"
                data-wf-element-id="fe56df01-7416-2145-e56e-d47a174f716d"
                href="/services"
                className="small-link align-center w-inline-block"
              >
                <div className="text-mono_wrapper">
                  <div className="text-mono">See all</div>
                </div>
                <div data-w-id="fe56df01-7416-2145-e56e-d47a174f7170" className="small-link_arrow w-embed">
                  {ARROW_SVG}
                </div>
              </a>
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{ __html: HOME_SERVICES_VISUALS_CSS }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_home-clients">
        <div className="padding-global">
          <div className="container-large">
            <div className="home_clients_component">
              <style dangerouslySetInnerHTML={{ __html: HOME_CLIENTS_MARQUEE_CSS }} />
              <div className="home_clients_list marquee_container">
                <div className="marquee_track">
                  {[0, 1, 2, 3].map((set) =>
                    CLIENT_LOGOS.map((logo) => (
                      <div className="client_logo_wrapper" key={`${set}-${logo.alt}`}>
                        <img className={"client_logo" + logo.extraClass} src={logo.src} alt={logo.alt} />
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="client_logo is-matera" />
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
                  {"Let's work"}
                  <br />
                  <span className="cta_visual" />
                  together
                </h2>
              </div>
              <div className="cta_content">
                <div className="text-appear">
                  <p>
                    {"Work with us if average isn’t your thing."}
                    <br />
                    {"Drop it, we'll build it!"}
                  </p>
                  <div className="spacer-small show-mobile-portrait" />
                </div>
                <div
                  data-cursor-hover="Let's talk"
                  data-w-id="55522ec2-d97d-45d1-bad7-8eeb95090a98"
                  className="small-link"
                >
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
    </PageShell>
  );
}
