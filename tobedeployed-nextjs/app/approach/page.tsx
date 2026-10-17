import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";

export const metadata: Metadata = {
  title: "Sharp Process, Iconic Moves | TOBEDEPLOYED",
  description:
    "Driven by detail and creativity, our approach moves from analysis to design, Webflow, and training. Each step builds unique digital experiences.",
  openGraph: {
    title: "Sharp Process, Iconic Moves | TOBEDEPLOYED",
    description:
      "Driven by detail and creativity, our approach moves from analysis to design, Webflow, and training. Each step builds unique digital experiences.",
    images: ["https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68da400a3efdcd28f242769d_opengrapheV2%20(1).webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharp Process, Iconic Moves | TOBEDEPLOYED",
    description:
      "Driven by detail and creativity, our approach moves from analysis to design, Webflow, and training. Each step builds unique digital experiences.",
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

const PROCESS_ITEMS = [
  {
    label: "Start",
    heading: "Architect your advantage",
    body: "No one scales on ordinary systems. Or second-rate code. We audit your digital architecture with surgical precision, hunting for the operational drag and hidden bottlenecks that hold you back. Our mission? To unearth your highest-leverage growth drivers. To engineer intelligent systems around them. And to turn technology into your definitive unfair advantage.",
  },
  {
    label: "Idea",
    heading: "Challenge the baseline",
    body: "Breakthroughs don’t come from status quo software. They come from rethinking the limits. We question existing architectures. Relentlessly. Methodically. Legacy tech? Standard playbooks? Industry limits? All of them are friction. All of them are dismantled. Line of code by line of code. So we can build outcomes no one else can touch.",
  },
  {
    label: "Design",
    heading: "Beyond aesthetics",
    body: (
      <>
        It’s not just about clean interfaces. It’s about seamless conversions.<br />
        Our design is built to convert, to scale, to drive performance.<br />
        Every pixel is tested. Every layout calculated. Every interaction optimized. The result? A user experience that
        performs as exceptionally as it looks.
      </>
    ),
  },
  {
    label: "Coding",
    heading: "Performance mindset",
    body: (
      <>
        User patience? A myth. Their tolerance for slow systems? Zero.<br />
        We build engineering that moves fast and scales faster. Code base, pushed to the limit. Execution refined.
        Latency cut. Verified performance. Speed isn’t a luxury, it’s the baseline. Every millisecond counts.
      </>
    ),
  },
  {
    label: "Optimisation",
    heading: (
      <>
        Never satisfied, <br />
        never done
      </>
    ),
    body: "The launch is just the first chapter, not the final one. We stay by your side long after launch day. We monitor the numbers. Listen to the feedback. Continuously refine and improve. A site that doesn’t evolve is a site that falls behind. We refuse to stagnate, for you and for us.",
  },
];

const STEPS = [
  {
    description: "Let’s set the tone. We align visions, define goals, and a sharp roadmap.",
    heading: "Kick-off",
  },
  {
    description: "Question more. Create more. We dive into your brand and audience to uncover insights that matter.",
    heading: "Research",
  },
  {
    description: "We craft a bold, custom visual identity that reflects your brand and grabs attention.",
    heading: "DESIGN",
  },
  {
    description: "From mockup to masterpiece. We bring your design to life with clean and pixel-perfect Webflow development.",
    heading: "Webflow",
  },
  {
    description: "You’re in control.  Once the site is live, we train your team to update content and manage the CMS.",
    heading: "DELIVERY",
  },
];

export default function ApproachPage() {
  return (
    <PageShell dataPage="approach">
      <section className="section_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component">
              <div className="heading-appear">
                <h1 className="text-align-center">
                  Sharp Minds
                  <br />
                  Iconic moves
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
              <h2 className="text-mono">Our approach</h2>
              <div className="text-appear">
                <p className="intro_description">
                  We don’t enforce a fixed playbook. We engineer yours. We start by mapping your architecture,
                  identifying operational bottlenecks, and pinpointing your highest-leverage opportunities. We dig
                  deep into your workflows, analyze every data point, and build custom systems that accelerate your
                  core competitive edge. We don’t just consult for engineering teams — we integrate directly into
                  them. Every pipeline is deliberate. Every deployment calibrated. Our approach? Modular, ruthless,
                  and built around your trajectory. Because real breakthroughs don’t come from off-the-shelf
                  software, they come from tailored digital infrastructure designed to perform, adapt, and scale
                  effortlessly as you grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_process">
        <div className="padding-global">
          <div className="container-large">
            <div className="process_component">
              <div className="w-embed">
                <h2 className="line-appear">
                  Make it as <br />
                  simple as <br />
                  <span className="cta_visual is-possible" />
                  possible
                </h2>
              </div>
              <div className="process_list">
                {PROCESS_ITEMS.map((item) => (
                  <div className="process_item" key={item.label}>
                    <div className="text-mono_wrapper">
                      <h3 className="text-mono">{item.label}</h3>
                    </div>
                    <div className="process_main-content">
                      <div className="max-width-xmedium">
                        <div className="line-appear">
                          <div className="heading-style-h3">{item.heading}</div>
                        </div>
                      </div>
                      <div className="text-appear">
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_steps">
        <div className="steps_pin">
          <div className="steps_component">
            <div className="steps_wrapper">
              {STEPS.map((step) => (
                <div className="step_wrapper" key={step.heading?.toString()}>
                  <div className="step_card">
                    <p className="step_description">{step.description}</p>
                    <h3 className="step_heading">{step.heading}</h3>
                  </div>
                </div>
              ))}
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
