import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";

// Ported from tobedeployed.com/services.html — the services LISTING/overview page. This is
// visually and structurally distinct from the 4 detail pages (see app/services/[slug]/page.tsx
// + content/services.ts), so it is not modeled through ServiceTemplate.
//
// Note on hrefs: in the source markup, several "Learn more" links on this page point to a
// DIFFERENT service than the card's own title (e.g. the "AI Agents" card links to
// services/design.html, "Web Development" links to services/webflow.html). That mismatch is
// preserved here exactly as authored in the source — not a transcription error.

const CDN = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985";

const TOOLS = [
  { src: `${CDN}/68875740f7c110ecadd4b094_Webflow logo.avif`, alt: "3D Webflow logo", className: "tools_logo is-webflow", width: 200 },
  {
    src: `${CDN}/688758570a911fd133df93d7_ssfigma logo 1.avif`,
    alt: "3D Figma logo",
    className: "tools_logo is-figma",
    srcSet: `${CDN}/688758570a911fd133df93d7_ssfigma logo 1-p-500.avif 500w, ${CDN}/688758570a911fd133df93d7_ssfigma logo 1-p-800.avif 800w, ${CDN}/688758570a911fd133df93d7_ssfigma logo 1.avif 1212w`,
  },
  {
    src: `${CDN}/688764d4993489953bd52f1b_aaChatGPT Image 28 juil. 2025%2C 13_48_56 1.avif`,
    alt: "3D Finsweet logo",
    className: "tools_logo is-finsweet",
    srcSet: `${CDN}/688764d4993489953bd52f1b_aaChatGPT Image 28 juil. 2025%2C 13_48_56 1-p-500.avif 500w, ${CDN}/688764d4993489953bd52f1b_aaChatGPT Image 28 juil. 2025%2C 13_48_56 1.avif 1007w`,
  },
  {
    src: `${CDN}/68875b93baab84f03c840632_gsap logoo.avif`,
    alt: "3D Gsap logo",
    className: "tools_logo is-zapier",
    srcSet: `${CDN}/68875b93baab84f03c840632_gsap logoo-p-500.avif 500w, ${CDN}/68875b93baab84f03c840632_gsap logoo.avif 1084w`,
  },
];

type ServiceCard = {
  title: string;
  description: string;
  learnMoreHref?: string;
  poster?: string;
  mp4: string;
  webm?: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "AI Agents",
    description:
      "Scope: Autonomous workflow integration, intelligent decision-making systems, custom LLM fine-tuning, natural language processing (NLP), and multi-agent coordination.\n\nWhat We Offer: We design and deploy custom AI agents engineered to execute complex tasks autonomously, reduce operational overhead, and enhance overall business intelligence. From intelligent conversational interfaces to multi-step reasoning frameworks, our AI solutions seamlessly integrate into your existing tech stack to drive continuous innovation.",
    learnMoreHref: "/services/design",
    poster: `${CDN}/68bf0118d76552b4a60629e6_Service-design-poster-00001.jpg`,
    mp4: "/videos/service-ai-agents.mp4",
  },
  {
    title: "Automation",
    description:
      "Scope: Business Process Automation (BPA), Robotic Process Automation (RPA), system integration, API pipeline development, and workflow optimization.\n\nWhat We Offer: We streamline your day-to-day operations by replacing repetitive, manual tasks with high-speed, reliable automated workflows. By connecting your disparate software systems and setting up intelligent triggers, we maximize efficiency, minimize human error, and free up your team to focus on strategic growth.",
    mp4: "/videos/service-automation.mp4",
  },
  {
    title: "Web Development",
    description:
      "Scope: Full-stack web development, custom CMS architecture, high-performance web applications, e-commerce platforms, and API integration.\n\nWhat We Offer: We build robust, scalable, and secure web solutions tailored to your brand’s needs. Leveraging modern web technologies, our development team ensures fast load times, rock-solid security, and responsive designs that deliver an exceptional user experience across all devices.",
    learnMoreHref: "/services/webflow",
    poster: `${CDN}/68bf01b223dd39dc1c5d874d_Service-Dev-poster-00001.jpg`,
    mp4: `${CDN}%2F68bf01b223dd39dc1c5d874d_Service-Dev-transcode.mp4`,
    webm: `${CDN}%2F68bf01b223dd39dc1c5d874d_Service-Dev-transcode.webm`,
  },
  {
    title: "SEO & Content",
    description:
      "Scope: On-page & off-page SEO, technical SEO audits, keyword strategy, content creation, copywriting, and search performance analytics.\n\nWhat We Offer: We boost your online visibility and build brand authority through comprehensive search engine optimization and compelling content strategies. By producing optimized, value-driven articles, copy, and technical site structures, we help your business capture organic search traffic and convert casual readers into loyal customers.",
    learnMoreHref: "/services/content",
    poster: `${CDN}/68bf0208f197a123cdd76932_service-content-poster-00001.jpg`,
    mp4: `${CDN}%2F68bf0208f197a123cdd76932_service-content-transcode.mp4`,
    webm: `${CDN}%2F68bf0208f197a123cdd76932_service-content-transcode.webm`,
  },
  {
    title: "Advertising",
    description:
      "Scope: Pay-Per-Click (PPC) campaigns, social media marketing, target audience analytics, ad creative strategy, and retargeting campaigns.\n\nWhat We Offer: We craft targeted, data-backed advertising strategies that connect your brand with high-intent audiences. Through continuous campaign testing, precise audience segmentation, and budget optimization, we drive immediate traffic and generate measurable, high-return digital conversions.",
    learnMoreHref: "/services/advertising",
    poster: `${CDN}/68bf02a0fdbc0fb64b7c22a2_services-ads-poster-00001.jpg`,
    mp4: `${CDN}%2F68bf02a0fdbc0fb64b7c22a2_services-ads-transcode.mp4`,
    webm: `${CDN}%2F68bf02a0fdbc0fb64b7c22a2_services-ads-transcode.webm`,
  },
  {
    title: "UI/UX Design",
    description:
      "Scope: User research, wireframing, interactive prototyping, UI kit/design system creation, and usability testing.\n\nWhat We Offer: We transform complex digital ideas into intuitive, visually stunning interfaces designed with your users at the center. By combining data-driven user experience principles with sleek graphic aesthetic standards, we craft compelling digital journeys that boost engagement and maximize conversion rates.",
    mp4: "/videos/service-uiux-design.mp4",
  },
  {
    title: "App Development",
    description:
      "Scope: Native iOS and Android development, cross-platform solutions (Flutter/React Native), mobile UX architecture, and app store deployment.\n\nWhat We Offer: We turn concepts into feature-rich, high-performing mobile applications that users love. Whether building native from the ground up or leveraging efficient cross-platform frameworks, we deliver seamless, secure, and responsive apps engineered to scale alongside your expanding user base.",
    mp4: "/videos/service-app-development.mp4",
  },
];

export const metadata: Metadata = {
  title: "Branding, Visual Identity, Webflow Development, SEO Content | TOBEDEPLOYED",
  description:
    "Explore TOBEDEPLOYED’s expertises: brand strategy, visual identity, Webflow development, SEO, social media ads, and ongoing maintenance services.",
  openGraph: {
    title: "Branding, Visual Identity, Webflow Development, SEO Content | TOBEDEPLOYED",
    description:
      "Explore TOBEDEPLOYED’s expertises: brand strategy, visual identity, Webflow development, SEO, social media ads, and ongoing maintenance services.",
    images: [`${CDN}/68da400a3efdcd28f242769d_opengrapheV2 (1).webp`],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding, Visual Identity, Webflow Development, SEO Content | TOBEDEPLOYED",
    description:
      "Explore TOBEDEPLOYED’s expertises: brand strategy, visual identity, Webflow development, SEO, social media ads, and ongoing maintenance services.",
    images: [`${CDN}/68da400a3efdcd28f242769d_opengrapheV2 (1).webp`],
  },
};

function ServiceCardRow({ card }: { card: ServiceCard }) {
  const paragraphs = card.description.split("\n\n");
  return (
    <div className="services_item">
      <div className="packs_item">
        <div className="line-appear">
          <div className="heading-style-h3">{card.title}</div>
        </div>
        <div className="text-appear">
          <p>
            {paragraphs.map((para, i) => (
              <span key={i}>
                {i > 0 ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null}
                {para}
              </span>
            ))}
          </p>
        </div>
        {card.learnMoreHref ? (
          <a href={card.learnMoreHref} className="small-link w-inline-block" style={{ display: "none" }}>
            <div className="text-mono_wrapper">
              <div className="text-mono">Learn more</div>
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
        ) : null}
      </div>
      <div className="services_visual_wrapper">
        <div className="element-appear">
          <div className="services_visual w-background-video w-background-video-atom">
            <video
              autoPlay
              loop
              muted
              playsInline
              style={card.poster ? { backgroundImage: `url(${card.poster})` } : undefined}
            >
              <source src={card.mp4} />
              {card.webm ? <source src={card.webm} /> : null}
            </video>
            <a href={card.learnMoreHref ?? "#"} className="services_visual_link w-inline-block" style={{ pointerEvents: "none" }} />
          </div>
          <div className="visual_overlay" />
        </div>
      </div>
    </div>
  );
}

export default function ServicesListingPage() {
  return (
    <PageShell dataPage="services">
      <section className="section_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component">
              <div className="heading-appear">
                <h1 className="text-align-center">
                  serious
                  <br />
                  skills only
                </h1>
                <div className="show-mobile-landscape">
                  <div className="spacer-22rem" />
                </div>
              </div>
              <div data-cursor-hover="Open" className="hero_capsule hide">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  data-cursor-hover="Play"
                  className="capsule_background w-background-video w-background-video-atom"
                  style={{ backgroundImage: `url(${CDN}/6891fd7ac19441d23ee37539_silvr_1-10-poster-00001.jpg)` }}
                >
                  <source src={`${CDN}%2F6891fd7ac19441d23ee37539_silvr_1-10-transcode.mp4`} />
                  <source src={`${CDN}%2F6891fd7ac19441d23ee37539_silvr_1-10-transcode.webm`} />
                </video>
                <div className="hero_capsule_overlay element-appear">
                  <div className="visual_overlay" />
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
                <h2 className="text-mono">Launch. Scale. Repeat.</h2>
              </div>
              <div className="text-appear">
                <p className="intro_description">
                  A vision is good. Unstoppable velocity is better. At TBD, we don’t just deploy technology — we architect
                  unfair advantages. AI Agents. Automation. Custom Engineering. Digital Growth. À la carte or as an
                  end-to-end ecosystem, every system is built for one objective: scale. Need a self-operating workflow?
                  An enterprise web application? An intelligent agent that outpaces the market? We step in where
                  complexity peaks. We rewrite the operational baseline. Engineed to scale. Built to lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_tools">
        <div className="padding-global">
          <div className="container-large">
            <div className="tools_component">
              {TOOLS.map((tool) => (
                <div className="tools_logo_wrapper" key={tool.alt}>
                  <img
                    src={tool.src}
                    loading="lazy"
                    width={tool.width}
                    sizes={tool.srcSet ? "100vw" : undefined}
                    srcSet={tool.srcSet}
                    alt={tool.alt}
                    className={tool.className}
                  />
                </div>
              ))}
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
                  Craft and
                  <br />
                  <span className="cta_visual is-arnold" />
                  no-code
                  <br />
                  oriented
                </h2>
              </div>
              <div className="services_content">
                <div className="text-mono_sticky">
                  <div className="text-mono_wrapper">
                    <h3 className="text-mono">Our services</h3>
                  </div>
                </div>
                <div className="services_list">
                  {SERVICE_CARDS.map((card) => (
                    <ServiceCardRow card={card} key={card.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_quote">
        <div className="padding-global">
          <div className="container-large">
            <div className="quote_component">
              <div className="text-mono_absolute not-absollute-on-landscape">
                <div className="text-mono_wrapper">
                  <h3 className="text-mono hide-mobile-landscape">Happy client</h3>
                </div>
              </div>
              <div className="quote_content">
                <div
                  className="quote_picture_wrapper is-sophie-meyer element-appear"
                  style={{ backgroundImage: "url(/images/quote-ahmad-aziz.png)" }}
                >
                  <div className="visual_overlay" />
                </div>
                <blockquote className="quote_text">
                  &quot;Great collaboration with TBD. They were available, attentive, and supported us across various
                  Webflow projects with valuable advice. I highly recommend them!&quot;
                </blockquote>
                <div className="quote_infos_wrapper">
                  <div className="text-mono_wrapper">
                    <div className="text-mono">Ahmad Aziz</div>
                  </div>
                  <div className="text-mono_wrapper">
                    <div className="text-mono">CEO - DEVMACH</div>
                  </div>
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
    </PageShell>
  );
}
