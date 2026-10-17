// Content for the 4 service detail pages (/services/[slug]), ported verbatim from
// tobedeployed.com/services/{advertising,content,design,webflow}.html. The listing page
// (/services) has its own distinct markup and is NOT modeled here — see app/services/page.tsx.
//
// The 4 pages share one structural skeleton (hero, intro, services/skills grid, optional
// client quote, shared CTA) but differ in exact content, and `content.html` has NO quote
// section at all — hence `quote` is optional. `ServiceTemplate` renders this shape.

const CDN = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985";

export type ServiceVideo = {
  poster?: string;
  mp4: string;
  webm?: string;
  /** The "Showcase website" item in webflow.html wraps its video in an extra
   * `.services_visual` div not present on any other item — a genuine quirk in the
   * source markup, preserved here for fidelity. */
  extraWrapper?: boolean;
};

export type ServiceSkillItem = {
  title: string;
  description: string;
  video: ServiceVideo;
};

export type ServiceQuote = {
  /** Matches a `.quote_picture_wrapper.is-*` class already defined in the shared
   * vendor CSS (public/vendor/webflow-css/webflow-shared.css) with its background-image. */
  photoClass: string;
  quote: string;
  author: string;
  role: string;
};

export type ServiceEntry = {
  slug: "advertising" | "content" | "design" | "webflow";
  dataPage: string;
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  hero: {
    className?: string;
    lines: [string, string];
  };
  intro: {
    heading: string;
    description: string;
  };
  services: {
    /** Three lines; a decorative `.cta_visual` accent span is rendered before the 2nd line. */
    headingLines: [string, string, string];
    accentClass: string;
    skillsLabel: string;
    items: ServiceSkillItem[];
    tagColumns: [string[], string[]];
  };
  quote?: ServiceQuote;
};

export const services: ServiceEntry[] = [
  {
    slug: "webflow",
    dataPage: "webflow",
    meta: {
      title: "Webflow Development & Professional Website Design | TOBEDEPLOYED",
      description:
        "TOBEDEPLOYED develops unique Webflow websites with custom design, SEO, and tailored features. High-performing sites built for startups and scaleups.",
      ogImage: `${CDN}/68da400a3efdcd28f242769d_opengrapheV2 (1).webp`,
    },
    hero: {
      className: "webflow-heading",
      lines: ["Your website", "reimagined"],
    },
    intro: {
      heading: "Plan. Craft. Launch.",
      description:
        "In a world where every pixel matters, our Webflow agency is redefining the standards. At Namma, every web project is crafted with the ambition to create something truly exceptional. Our team delivers fast, high-performing websites designed for seamless user experience. From mockups to the final launch, we handle everything in-house, blending technical expertise with creative thinking.",
    },
    services: {
      headingLines: ["Clean", "Fast", "Custom"],
      accentClass: "is-webflow",
      skillsLabel: "Core skills",
      items: [
        {
          title: "From scratch",
          description:
            "We turn websites into experiences. Everything to build? That’s when we shine. We drive every phase — plan, design, build, deliver. Start to finish. No shortcuts. We create websites that blend creativity and precision — built by experts, made to stand out. Starting from scratch? Nice to meet you. We’re in.",
          video: {
            poster: `${CDN}/68bf3abc777611f1c78c67df_Webflow-from%20scratch-poster-00001.jpg`,
            mp4: `${CDN}%2F68bf3abc777611f1c78c67df_Webflow-from scratch-transcode.mp4`,
            webm: `${CDN}%2F68bf3abc777611f1c78c67df_Webflow-from scratch-transcode.webm`,
          },
        },
        {
          title: "Website redesign",
          description:
            "Reimagining your website means repositioning your brand. We rethink everything to give you a modern design, refined UX, and art direction that reflects your ambition. Every page is crafted to guide, engage, and convert. It’s more than a redesign, it’s a new beginning.",
          video: {
            poster: `${CDN}/68bf3be4b108ac6cd8acbfb9_Webflow%20-%20Website%20Redesign-poster-00001.jpg`,
            mp4: `${CDN}%2F68bf3be4b108ac6cd8acbfb9_Webflow - Website Redesign-transcode.mp4`,
            webm: `${CDN}%2F68bf3be4b108ac6cd8acbfb9_Webflow - Website Redesign-transcode.webm`,
          },
        },
        {
          title: "Website migration",
          description:
            "Seamlessly migrate your website to Webflow with a smooth and secure transition. Whether you're coming from WordPress, Framer, or any other platform, we've got it covered. By planning effective 301 redirects, we preserve your SEO while providing you with a more powerful platform tailored to your growth, performance, and long-term ambitions.",
          video: {
            poster: `${CDN}/68bf3c7d361e8fd74587f330_Webflow-Website%20Migration-poster-00001.jpg`,
            mp4: `${CDN}%2F68bf3c7d361e8fd74587f330_Webflow-Website Migration-transcode.mp4`,
            webm: `${CDN}%2F68bf3c7d361e8fd74587f330_Webflow-Website Migration-transcode.webm`,
          },
        },
        {
          title: "Landing page",
          description:
            "Our landing pages are built to convert. No fluff, no distractions. Eye-catching design, optimized interface, and compelling copy — nothing is left to chance. Designed specifically for startups, scale-ups, and SaaS companies, they combine performance, clarity, and focus to deliver one thing above all: qualified leads.",
          video: {
            poster: `${CDN}/68bf41f8bf1bd0b44de46a4e_Webflow-LP-poster-00001.jpg`,
            mp4: `${CDN}%2F68bf41f8bf1bd0b44de46a4e_Webflow-LP-transcode.mp4`,
            webm: `${CDN}%2F68bf41f8bf1bd0b44de46a4e_Webflow-LP-transcode.webm`,
          },
        },
        {
          title: "Showcase website",
          description:
            "We present your brand in a unique way with a showcase website designed to truly captivate. Balancing aesthetics and clarity, each page is crafted to reflect the essence of your business while strengthening your online presence. It's not just a showcase website, it's how your brand gets noticed.",
          video: {
            poster: `${CDN}/68bf3de146064670293e0c2e_Service_Webflow_Showcase-White-poster-00001.jpg`,
            mp4: `${CDN}%2F68bf3de146064670293e0c2e_Service_Webflow_Showcase-White-transcode.mp4`,
            webm: `${CDN}%2F68bf3de146064670293e0c2e_Service_Webflow_Showcase-White-transcode.webm`,
            extraWrapper: true,
          },
        },
      ],
      tagColumns: [
        ["No-code", "Development", "client first", "pixel perfect", "Custom code", "gsap", "animations", "responsive design"],
        ["Dynamic CMS", "Reusable Components", "Interactive simulator", "Advanced forms", "Automation", "API integration", "Multilingual", "E-commerce"],
      ],
    },
    quote: {
      photoClass: "is-matera",
      quote:
        "Superb experience with Namma who supports us on Webflow in our various projects. Responsive, professional and efficient.",
      author: "CLARA.M",
      role: "traffic manager - matera",
    },
  },
  {
    slug: "design",
    dataPage: "design",
    meta: {
      title: "Crafting Bold Brands & Distinctive Visual Identities | TOBEDEPLOYED",
      description:
        "TOBEDEPLOYED is a premium design studio. We master branding, visual identity, and Figma design to craft bold and consistent brand systems.",
      ogImage: `${CDN}/68da400a3efdcd28f242769d_opengrapheV2 (1).webp`,
    },
    hero: {
      className: "design-heading",
      lines: ["Build brands ", "that last"],
    },
    intro: {
      heading: "Define. Shape. Stand out.",
      description:
        "People don't read. They feel. A strong brand hits in 3 seconds. No words needed. No scrolling required. At Namma, we design sharp identities that speak instantly. No fluff. No guesswork. Positioning, art direction, typography, tone, design system — every piece is built to deliver the right message, at the right time, with the right energy. Have a brand? We make it unforgettable.",
    },
    services: {
      headingLines: ["Strategic", "bold", "Timeless"],
      accentClass: "is-design",
      skillsLabel: "Core skills",
      items: [
        {
          title: "Web design",
          description:
            "At Namma, web design is a precise choreography of aesthetics and strategy. We craft custom Figma mockups that turn your ideas into smooth, striking digital experiences. Every detail matters — information architecture, UI systems, components, responsive design, micro-interactions… Everything is tuned to pixel perfection, ready to live on Webflow. Not just a site. A vision, brought to life.",
          video: {
            poster: `${CDN}/68bff34d2fbd82a25bfda170_Web%20design%20-%20Service-poster-00001.jpg`,
            mp4: `${CDN}%2F68bff34d2fbd82a25bfda170_Web design - Service-transcode.mp4`,
            webm: `${CDN}%2F68bff34d2fbd82a25bfda170_Web design - Service-transcode.webm`,
          },
        },
        {
          title: "Art direction",
          description:
            "Art direction is the craft of aligning visuals, meaning, and emotion. We define a strong visual language — color palettes, typography, iconography, and visual balance to lay the aesthetic foundation of your site. We explore, refine, and tweak until everything clicks. And once it does? We roll out a creative playground that feels cohesive, immersive, and unmistakably yours. You've got a message. We make it iconic.",
          video: {
            poster: `${CDN}/68bfeeb066b1194a1c300ab8_Design%20-%20Art%20Direction-poster-00001.jpg`,
            mp4: `${CDN}%2F68bfeeb066b1194a1c300ab8_Design - Art Direction-transcode.mp4`,
            webm: `${CDN}%2F68bfeeb066b1194a1c300ab8_Design - Art Direction-transcode.webm`,
          },
        },
        {
          title: "Branding",
          description:
            "Iconic brands don't appear. They're engineered. At Namma, we don't “do branding” — we build bold identities that stick, evolve, and leave a mark. We sharpen your positioning, refine your tone of voice, and design a scalable visual system that grows with you. From brand strategy to brand book, every element is built to align your team, attract your audience, and amplify what makes you different. We align the stars. And your brand.",
          video: {
            poster: `${CDN}/68bff21d6fba2a4061125fb2_Service-%20Branding-poster-00001.jpg`,
            mp4: `${CDN}%2F68bff21d6fba2a4061125fb2_Service- Branding-transcode.mp4`,
            webm: `${CDN}%2F68bff21d6fba2a4061125fb2_Service- Branding-transcode.webm`,
          },
        },
        {
          title: "Visual design",
          description:
            "Visual design is what gives your brand shape, style, and soul. We create motion design, 2D/3D illustrations, animations, and custom assets to elevate your storytelling and enrich every touchpoint. Nothing is decorative — everything serves a purpose to clarify your narrative, amplify your identity, and enhance the user experience. If a picture's worth a thousand words, great motion is worth a thousand more.",
          video: {
            poster: `${CDN}/68bff27dbca510ffe2e13ed7_Design%20-Visual%20design-poster-00001.jpg`,
            mp4: `${CDN}%2F68bff27dbca510ffe2e13ed7_Design -Visual design-transcode.mp4`,
            webm: `${CDN}%2F68bff27dbca510ffe2e13ed7_Design -Visual design-transcode.webm`,
          },
        },
      ],
      tagColumns: [
        [
          "Brand Strategy",
          "Art Direction",
          "Visual Identity",
          "Brand Storytelling",
          "Brand Book & Guidelines",
          "Verbal Identity & Naming",
          "Purpose, Mission, Vision",
          "Logotype, Typography & Colour",
        ],
        ["website design", "UI / UX design", "Mobile UI", "Animations", "Prototype", "Design Systems", "visuals asset", "3D & motion"],
      ],
    },
    quote: {
      photoClass: "is-chance",
      quote:
        "Great collaboration with Namma. Always available and attentive, they supported us on several Webflow projects with valuable insights. I highly recommend them!",
      author: "Philippine de Saint-Exupéry",
      role: "Head of New Business - CHANCE",
    },
  },
  {
    slug: "content",
    dataPage: "content",
    meta: {
      title: "Tone of Voice, Copywriting SEO & Motion Production | TOBEDEPLOYED",
      description:
        "TOBEDEPLOYED delivers impactful content: tone of voice, copywriting, SEO, and premium production across photo, video, and motion.",
      ogImage: `${CDN}/68da400a3efdcd28f242769d_opengrapheV2 (1).webp`,
    },
    hero: {
      lines: ["Each Word", "Matters"],
    },
    intro: {
      heading: "Talk smart. Sell fast.",
      description:
        "What do we create? Digital experiences that stand the test of time — not trends. Distinctive branding. Creative design. Rigorous development. Engaging content.Four core expertises. One integrated vision. Executional excellence as a standard. What we deliver isn't an addition — it's a direction. And that's what makes the difference.",
    },
    services: {
      headingLines: ["Attract,", "engage", "and convert"],
      accentClass: "is-content",
      skillsLabel: "Core skills",
      items: [
        {
          title: "Copywriting",
          description:
            "Anyone can write. Few can persuade. Our approach? A sharp blend of strategic thinking and high-value content. From your headline to your final CTA, every line is written with precision, consistency, and intent. We turn your ideas into clear, compelling messages with precise positioning, thoughtful storytelling and strong structure. Clarity wins. Always.",
          video: {
            poster: `${CDN}/68c0123885a9e8e973e352ef_Service-Content-Video1-poster-00001.jpg`,
            mp4: `${CDN}%2F68c0123885a9e8e973e352ef_Service-Content-Video1-transcode.mp4`,
            webm: `${CDN}%2F68c0123885a9e8e973e352ef_Service-Content-Video1-transcode.webm`,
          },
        },
        {
          title: "Tone of voice",
          description:
            "What you say matters. But how you say it changes everything. Tone of voice isn't a detail — it's your identity, speaking out. We start with who you are and who you're speaking to, then shape a voice that's clear and unforgettable. A voice that grabs attention, reflects your positioning, and resonates across every touchpoint: website, campaigns, social media, pitch decks. Every word earns its place. Every line has a purpose.",
          video: {
            poster: `${CDN}/68c012325f129ad1fd8025c0_Service%20Ton%20of%20voice-poster-00001.jpg`,
            mp4: `${CDN}%2F68c012325f129ad1fd8025c0_Service Ton of voice-transcode.mp4`,
            webm: `${CDN}%2F68c012325f129ad1fd8025c0_Service Ton of voice-transcode.webm`,
          },
        },
        {
          title: "Seo content",
          description:
            "Good SEO is more than just keywords. We structure your content to rank — but above all, to make people click, read, and stay. From keyword mapping to internal linking, every element is designed to help Google understand your site and guide users to what matters. Each page is built following SEO best practices: clean hierarchy, clear headings, optimized metadata. Being seen is one thing. Being choosen is another.",
          video: {
            poster: `${CDN}/68c0122c508483264014555e_Service%20-%20Seo%20content-poster-00001.jpg`,
            mp4: `${CDN}%2F68c0122c508483264014555e_Service - Seo content-transcode.mp4`,
            webm: `${CDN}%2F68c0122c508483264014555e_Service - Seo content-transcode.webm`,
          },
        },
        {
          title: "Visual production",
          description:
            "People scroll fast. You've got one shot. That's why we produce unique visual content for your websites, campaigns, social media, and editorial contents. Photo or video, each format is designed to tell a story, attract attention, and bring your brand to life. Strong art direction. Flawless execution. Every asset is creative, refined, and aligned. Because a brand should be seen as much as it's read.",
          video: {
            poster: `${CDN}/68c0131e4aedef985f5fc4ec_Service%20visuel%20prod%20namma-poster-00001.jpg`,
            mp4: `${CDN}%2F68c0131e4aedef985f5fc4ec_Service visuel prod namma-transcode.mp4`,
            webm: `${CDN}%2F68c0131e4aedef985f5fc4ec_Service visuel prod namma-transcode.webm`,
          },
        },
      ],
      tagColumns: [
        ["tone of voice", "Research & Insights", "keyword research", "naming & tagline", "On-page optimization", "SEO content writing"],
        ["website copywriting", "storyboard design", "blog post creation", "Multilingual SEO", "Video Production", "shooting photo"],
      ],
    },
    // content.html has no client quote section, unlike the other 3 service pages.
  },
  {
    slug: "advertising",
    dataPage: "advertising",
    meta: {
      title: "Advertising, Brand Platforms & Meta Ads | TOBEDEPLOYED",
      description:
        "From brand platforms to Meta ads, TOBEDEPLOYED designs creative campaigns and concepts that drive influence, visibility, and growth.",
      ogImage: `${CDN}/68da400a3efdcd28f242769d_opengrapheV2 (1).webp`,
    },
    hero: {
      lines: ["Big ideas.", "Bigger reach."],
    },
    intro: {
      heading: "Ideas. Ads. Results.",
      description:
        "It's not about more. It's about meaning. Our playground: creative strategy. Brand platforms, advertising concepts, social ads, influencer campaigns—every idea connects to a global, coherent vision. The result? Attention turns into business. Visibility turns into value.",
    },
    services: {
      headingLines: ["Beyond", "the", "scroll"],
      accentClass: "is-advertising",
      skillsLabel: "Core skills",
      items: [
        {
          title: "Brand platforms",
          description:
            "Successful digital campaigns are built on clear strategy. We shape brand platforms and creative visions that guide your campaigns and keep them aligned. Our goal: transforming bold ideas into seamless campaigns that support your growth and turn your brand into a statement.",
          video: {
            poster: `${CDN}/68c01e11794db36d483f4122_Brand-platform-service-poster-00001.jpg`,
            mp4: `${CDN}%2F68c01e11794db36d483f4122_Brand-platform-service-transcode.mp4`,
            webm: `${CDN}%2F68c01e11794db36d483f4122_Brand-platform-service-transcode.webm`,
          },
        },
        {
          title: "Creative campaigns",
          description:
            "Great campaigns start with bold ideas. We create advertising campaigns with messaging that resonates and creative strategies designed to scale. Each concept is shaped to stand out and capture attention. At Namma, boldness drives our approach. Impact shapes our results.",
          video: {
            poster: `${CDN}/68c01c454dfdb1279ecfebd8_Service%20Ads%20-%20Creative%20campaign-poster-00001.jpg`,
            mp4: `${CDN}%2F68c01c454dfdb1279ecfebd8_Service Ads - Creative campaign-transcode.mp4`,
            webm: `${CDN}%2F68c01c454dfdb1279ecfebd8_Service Ads - Creative campaign-transcode.webm`,
          },
        },
        {
          title: "Social media advertising",
          description:
            "Turn your social media ads into leverage. From static to motion design, we produce impactful advertising, optimized for Facebook and Instagram and crafted for every format. With former Meta specialists on our team, every campaign is designed for your audience. Two rules: grab attention, perform where it counts.",
          video: {
            poster: `${CDN}/68c01c4c6f1394276675a785_meta%20service%20ads-poster-00001.jpg`,
            mp4: `${CDN}%2F68c01c4c6f1394276675a785_meta service ads-transcode.mp4`,
            webm: `${CDN}%2F68c01c4c6f1394276675a785_meta service ads-transcode.webm`,
          },
        },
        {
          title: "Influencer partnerships",
          description:
            "Whether you like it or not, influencers are here to stay. We connect your brand with top-tier content creators. We manage campaigns with YouTubers, UGC producers, and social storytellers who share your values and engage their communities. Our motto: trust is the ultimate KPI.",
          video: {
            poster: `${CDN}/68c01c532ca2fee61c664637_Ads%20service%202-poster-00001.jpg`,
            mp4: `${CDN}%2F68c01c532ca2fee61c664637_Ads service 2-transcode.mp4`,
            webm: `${CDN}%2F68c01c532ca2fee61c664637_Ads service 2-transcode.webm`,
          },
        },
      ],
      tagColumns: [
        [
          "Creative strategy",
          "Brand platform",
          "ADVERTISING STRATEGY",
          "DIGITAL STRATEGY",
          "Advertising campaigns",
          "Impactful messaging",
          "Brand storytelling",
          "Creative concepts",
        ],
        ["Social media ads", "Meta advertising", "facebook ads", "Creative ads", "Sponsored content", "Brand partnerships", "Influencer strategy", "UGC production"],
      ],
    },
    quote: {
      photoClass: "is-malibou",
      quote:
        "Namma understood our vision and translated it flawlessly into our website. Experts, clear communicators, and highly responsive, they make Webflow simple and accessible.",
      author: "Louise André",
      role: "Growth & Marketing Lead - Veloce",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return services.find((service) => service.slug === slug);
}
