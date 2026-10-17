// Content for the 6 case-study pages (/work/[slug]), ported verbatim from
// tobedeployed.com/work/{chance,heysimon,intramuros-magazine,malibou,matera,silvr}.html.
//
// NOTE on a genuine source quirk: each project's <head> title/description (a Webflow CMS field)
// does not always match the h1/body copy that was actually published for that slug (e.g. chance.html's
// <title> is about the "Chance" career-coaching client, but its h1 and all body copy describe a
// "Nexus" marketing-automation product; the "Next project" link text also sometimes names a different
// project than the href it points to). This is preserved exactly as in the source — not fixed — per
// the instruction to port real content faithfully rather than "correct" it.
//
// All 6 pages share one literal template, rendered by components/templates/WorkTemplate.tsx. The
// section order between the intro and the Credits/Scope block genuinely differs per project (quote
// before or after the 3 module rows, an extra "visual" showcase section in a different position, a
// quote after Credits/Scope on matera, etc.), so that stretch is modeled as an ordered `blocks` array
// of a small discriminated union rather than fixed fields.

export type ModuleRow = {
  video: string;
  label: string;
  title: string;
  description: string;
  reverse?: boolean;
};

export type FsRow = {
  number: string;
  name: string;
  desc: string;
};

export type QuoteBlock = {
  kind: "quote";
  text: string;
  author?: string;
  role?: string;
};

export type ModulesBlock = {
  kind: "modules";
  rows: ModuleRow[];
};

export type VisualBlock = {
  kind: "visual";
  video?: { srcs: string[]; style?: React.CSSProperties; wrapperStyle?: React.CSSProperties };
  image?: { src: string; alt?: string };
};

export type FsBlock = {
  kind: "fs";
  label: string;
  heading: string;
  media: { type: "video" | "image"; src: string; alt?: string };
  rows: [FsRow, FsRow, FsRow];
};

export type WorkBlock = QuoteBlock | ModulesBlock | VisualBlock | FsBlock;

export type WorkProject = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  year: string;
  websiteUrl?: string;
  intro: string;
  coverVideo: { src: string; poster?: string; logoMask?: boolean };
  blocks: WorkBlock[];
  postInfosBlocks?: WorkBlock[];
  credits: string[];
  scope: string[];
  nextSlug: string;
  nextLabel: string;
};

const KOTO_STUDIO_IMAGE =
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/679cef8274c9922b001fadc4_Work%20-%20Koto%20Studio%20(4).png";

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "chance",
    metaTitle: "Chance  | TOBEDEPLOYED",
    metaDescription:
      "Chance is a career coaching platform in France that empowers people to find work they truly love. Its personalized program blends one-on-one coaching with powerful digital tools to guide every career transition — from defining goals to landing the right role. Rooted in positive psychology and collective intelligence, Chance unlocks potential and creates new professional horizons.",
    h1: "Nexus",
    tagline: "The autonomous marketing ecosystem",
    year: "2025",
    websiteUrl: "https://www.chance.co/fr",
    intro:
      "Nexus is an advanced workflow automation tool built to eliminate manual bottlenecks in digital marketing. By analyzing live content performance, generating SEO-optimized social drafts, and executing cross-channel publishing autonomously, Nexus redefines how brands scale their paid and organic presence.",
    coverVideo: { src: "/videos/home-hero-combined.mp4", poster: "/videos/home-hero-combined-poster.jpg" },
    blocks: [
      {
        kind: "quote",
        text: "The TBD automation pipeline saved us countless hours. It's the ultimate partner for scaling campaigns without increasing headcount.",
        author: "Alex Rivera",
        role: "Head of Growth",
      },
      {
        kind: "modules",
        rows: [
          { video: "/videos/Nexus%2001.mp4", label: "Module 1", title: "Content Performance Analytics", description: "Real-time tracking of engagement data and conversion funnels." },
          { video: "/videos/Nexus%2003.mp4", label: "Module 2", title: "AI-Powered Draft Generation", description: "Automated SEO keyword integration and multi-format social copy creation.", reverse: true },
          { video: "/videos/Nexus%2002.mp4", label: "Module 3", title: "Autonomous Cross-Channel Scheduling", description: "Automated publishing pipelines distributing content seamlessly across digital channels." },
        ],
      },
      { kind: "quote", text: "A world where marketing runs on intelligence, not exhaustion." },
      {
        kind: "fs",
        label: "Platform Walkthrough",
        heading: "Deep-Dive Feature Showcase",
        media: { type: "video", src: "/videos/Nexus%2004.mp4" },
        rows: [
          { number: "01", name: "Smart Campaign Hub", desc: "Detailed view of automated trigger workflows." },
          { number: "02", name: "Audience Segmentation", desc: "Real-time behavior-driven tracking metrics." },
          { number: "03", name: "Multi-Channel Control Center", desc: "Centralized overview managing live ads, social feeds, and SEO metrics simultaneously." },
        ],
      },
      {
        kind: "visual",
        video: { srcs: ["https://studionamma.vercel.app/videos/chance/chance-e4.mp4"] },
        image: { src: KOTO_STUDIO_IMAGE },
      },
    ],
    credits: ["Lead Developer", "Creative Developer", "UI/UX Design", "Figma Mockups", "Webflow Development", "Custom Build"],
    scope: ["UI/UX Design", "Interaction Design", "Webflow Development", "Custom AI Integration", "Automation Architecture"],
    nextSlug: "silvr",
    nextLabel: "SoraPay",
  },
  {
    slug: "heysimon",
    metaTitle: "Simon | TOBEDEPLOYED",
    metaDescription:
      "Textra is a targeted SEO suite built to dominate local search visibility. By unifying local business listings, automating Google Business Profile updates, and tracking real-time localized map-pack rankings, Textra transforms fragmented geographical data into predictable store traffic.",
    h1: "Textra",
    tagline: "The unified local SEO & citation ecosystem",
    year: "2024",
    websiteUrl: "https://www.heysimon.fr/",
    intro:
      "Textra is a targeted SEO suite built to dominate local search visibility. By unifying local business listings, automating Google Business Profile updates, and tracking real-time localized map-pack rankings, Textra transforms fragmented geographical data into predictable store traffic.",
    coverVideo: { src: "/videos/home-hero-combined.mp4", poster: "/videos/home-hero-combined-poster.jpg" },
    blocks: [
      { kind: "quote", text: "A world where local visibility is controlled by precision data, not luck." },
      {
        kind: "modules",
        rows: [
          { video: "/videos/Textra%2001.mp4", label: "Module 1", title: "Directory & Citation Harmonizer", description: "Automated NAP (Name, Address, Phone) syncing across hundreds of global directories to eliminate trust gaps." },
          { video: "/videos/Textra%2003.mp4", label: "Module 2", title: "Google Business Profile Auto-Pilot", description: "Automated post scheduling, review response management, and attribute updates straight from a single hub.", reverse: true },
          { video: "/videos/Textra%2002.mp4", label: "Module 3", title: "Map-Pack Rank Tracker", description: "Hyper-local grid tracking monitoring exact geo-coordinates to see how rankings shift block-by-block." },
        ],
      },
      {
        kind: "visual",
        video: { srcs: ["https://studionamma.vercel.app/videos/heysimon/2.webm", "https://studionamma.vercel.app/videos/heysimon/2.webm"] },
      },
      {
        kind: "quote",
        text: "TBD doubled our multi-location foot traffic in months. The automated citation sync and grid tracking are unrivaled.",
        author: "Liam O'Connor",
        role: "Director of Local Growth",
      },
      {
        kind: "fs",
        label: "Platform Walkthrough",
        heading: "Deep-Dive Feature Showcase",
        media: { type: "video", src: "/videos/Textra%2004.mp4" },
        rows: [
          { number: "01", name: "Geospatial Analytics Suite", desc: "Interactive heatmaps displaying real-time ranking dominance across target zip codes." },
          { number: "02", name: "Review & Sentiment Hub", desc: "Centralized aggregation engine monitoring customer feedback and sentiment scores across maps profiles." },
          { number: "03", name: "Audit & Correction Tool", desc: "Automated error-detection system scanning for inconsistent NAP data and flagging instant fixes." },
        ],
      },
    ],
    credits: ["Lead SEO Architect", "UI/UX Designer", "Full-Stack Search Platform Engineer", "Local Data API Specialist"],
    scope: ["UI/UX Design", "Prototyping", "Local SEO Tool Architecture", "Frontend Development", "Map API Integration", "Geospatial Dashboard Design"],
    nextSlug: "matera",
    nextLabel: "Matera",
  },
  {
    slug: "intramuros-magazine",
    metaTitle: "Intramuros | TOBEDEPLOYED",
    metaDescription:
      "Zephyr is a full-scale social management solution built to scale modern brand presence. By streamlining content calendar planning, executing data-driven audience engagement campaigns, and tracking cross-platform growth metrics in real time, Zephyr transforms scattered social efforts into cohesive community growth.",
    h1: "Zephyr",
    tagline: "The end-to-end social brand ecosystem",
    year: "2022",
    websiteUrl: "https://www.intramuros.fr/",
    intro:
      "Zephyr is a full-scale social management solution built to scale modern brand presence. By streamlining content calendar planning, executing data-driven audience engagement campaigns, and tracking cross-platform growth metrics in real time, Zephyr transforms scattered social efforts into cohesive community growth.",
    coverVideo: {
      src: "https://studionamma.vercel.app/videos/intramuros/intramuros-main.mp4",
      logoMask: true,
    },
    blocks: [
      {
        kind: "visual",
        video: { srcs: ["https://studionamma.vercel.app/videos/intramuros/intramuros-1-1.mp4", "https://studionamma.vercel.app/videos/intramuros/intramuros-1-1.mp4"] },
      },
      { kind: "quote", text: "A WORLD WHERE SOCIAL PRESENCE IS DRIVEN BY STRATEGY, NOT GUESSWORK." },
      {
        kind: "modules",
        rows: [
          { video: "/videos/zypher%2002.mp4", label: "Module 1", title: "Content Calendar Planning", description: "Drag-and-drop scheduling architecture offering multi-platform previewing and asset management." },
          { video: "/videos/zypher%2001.mp4", label: "Module 2", title: "Audience Engagement Campaigns", description: "Centralized social inbox and automated interaction triggers designed to foster authentic community connection.", reverse: true },
          { video: "/videos/zypher%2003.mp4", label: "Module 3", title: "Platform Growth Metrics", description: "Comprehensive analytics suite measuring follower velocity, impression reach, and engagement rate optimization." },
        ],
      },
      {
        kind: "quote",
        text: "TBD COMPLETELY TRANSFORMED HOW OUR TEAM HANDLES SOCIAL STRATEGY. THE CALENDAR PLANNING AND GROWTH METRICS ARE GAME-CHANGING.",
        author: "Chloe Bennett",
        role: "VP of Marketing",
      },
      {
        kind: "fs",
        label: "Dashboard Walkthrough",
        heading: "Deep-Dive Feature Showcase",
        media: { type: "image", src: "/images/zypher%20pic.webp", alt: "Zypher" },
        rows: [
          { number: "01", name: "Campaign Command Center", desc: "High-level overview tracking active paid and organic campaigns simultaneously." },
          { number: "02", name: "Content Matrix", desc: "Visual asset repository mapping out posts, tags, and approvals across teams." },
          { number: "03", name: "ROI & Attribution Suite", desc: "Deep-dive reporting connecting social engagement directly to conversion metrics and revenue growth." },
        ],
      },
      { kind: "visual", image: { src: KOTO_STUDIO_IMAGE } },
    ],
    credits: ["Lead Brand Strategist", "UI/UX Designer", "Full-Stack Platform Engineer", "Social Media Systems Architect"],
    scope: ["UI/UX Design", "Prototyping", "Social Management Tool Architecture", "Frontend Development", "API Integrations", "Campaign Dashboard Design"],
    nextSlug: "silvr",
    nextLabel: "Sorapay",
  },
  {
    slug: "malibou",
    metaTitle: "Malibou | TOBEDEPLOYED",
    metaDescription:
      "Veloce is a revenue automation suite built to accelerate sales velocity. By qualifying inbound leads instantly, triggering hyper-personalized follow-up sequences, and updating sales pipelines autonomously based on live user activity, Veloce transforms raw traffic into closed deals without manual friction.",
    h1: "Veloce",
    tagline: "The predictive revenue & pipeline ecosystem",
    year: "2024",
    websiteUrl: "https://www.malibou.com/",
    intro:
      "Veloce is a revenue automation suite built to accelerate sales velocity. By qualifying inbound leads instantly, triggering hyper-personalized follow-up sequences, and updating sales pipelines autonomously based on live user activity, Veloce transforms raw traffic into closed deals without manual friction.",
    coverVideo: { src: "/videos/home-hero-combined.mp4", poster: "/videos/home-hero-combined-poster.jpg" },
    blocks: [
      {
        kind: "visual",
        video: { srcs: ["https://studionamma.vercel.app/videos/malibou/malibou-2-1.mp4", "https://studionamma.vercel.app/videos/malibou/malibou-2-1.mp4"] },
      },
      {
        kind: "quote",
        text: "TBD cut our lead response time to seconds and tripled our conversion rate. The automated pipeline sync is revolutionary.",
        author: "Darius Vance",
        role: "VP of Global Sales",
      },
      {
        kind: "visual",
        video: {
          srcs: ["https://studionamma.vercel.app/videos/malibou/malibou-5-1.webm", "https://studionamma.vercel.app/videos/malibou/malibou-5-1.webm"],
          wrapperStyle: { aspectRatio: "1080/1150", overflow: "hidden" },
          style: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" },
        },
      },
      {
        kind: "modules",
        rows: [
          { video: "/videos/veloce%2001.mp4", label: "Module 1", title: "Inbound Lead Qualifier", description: "Instant behavioral scoring engine evaluating visitor intent and segmenting high-value prospects on arrival." },
          { video: "/videos/Textra%2004.mp4", label: "Module 2", title: "Hyper-Personalized Nurturing Bot", description: "Automated multi-channel follow-up sequences tailored dynamically to user interactions and engagement milestones.", reverse: true },
          { video: "/videos/veloce%2002.mp4", label: "Module 3", title: "Autonomous Pipeline Synchronizer", description: "Real-time CRM state updater moving deals through stages automatically as prospects take action." },
        ],
      },
      { kind: "quote", text: "A world where sales pipelines move at the speed of intent, not manual entry." },
      {
        kind: "fs",
        label: "Platform Walkthrough",
        heading: "Deep-Dive Feature Showcase",
        media: { type: "video", src: "/videos/Textra%2001.mp4" },
        rows: [
          { number: "01", name: "Predictive Scoring Matrix", desc: "Live analytics view showing conversion probability breakdown per lead segment." },
          { number: "02", name: "Workflow Orchestration Canvas", desc: "Visual builder for multi-branch nurturing paths and conditional trigger logic." },
          { number: "03", name: "Revenue Attribution Suite", desc: "Comprehensive tracking connecting bot-nurtured touchpoints directly to closed-won revenue metrics." },
        ],
      },
    ],
    credits: ["Lead Automation Architect", "UI/UX Designer", "Full-Stack Revenue Platform Engineer", "Conversational AI Specialist"],
    scope: ["UI/UX Design", "Prototyping", "Revenue Automation Architecture", "Frontend Development", "CRM API Integrations", "Predictive Dashboard Design"],
    nextSlug: "heysimon",
    nextLabel: "Textra",
  },
  {
    slug: "matera",
    metaTitle: "Matera | TOBEDEPLOYED",
    metaDescription:
      "Hyperion is a high-density Web3 asset dashboard engineered for professional traders and institutions. By tracking real-time crypto transactions, streaming asset prices with zero latency, and visualizing complex portfolio risk metrics, Hyperion transforms overwhelming market data into actionable clarity.",
    h1: "Hyperion",
    tagline: "The high-frequency financial analytics engine",
    year: "2022-2025",
    websiteUrl: "https://matera.eu/fr",
    intro:
      "Hyperion is a high-density Web3 asset dashboard engineered for professional traders and institutions. By tracking real-time crypto transactions, streaming asset prices with zero latency, and visualizing complex portfolio risk metrics, Hyperion transforms overwhelming market data into actionable clarity.",
    coverVideo: { src: "/videos/home-hero-combined.mp4", poster: "/videos/home-hero-combined-poster.jpg" },
    blocks: [
      {
        kind: "modules",
        rows: [
          { video: "/videos/Spartan_warrior_thrusts_spear_20260920013325.mp4", label: "Module 1", title: "Real-Time Price Streaming", description: "Sub-second ticker updates paired with custom technical indicator overlays." },
          { video: "/videos/Sculpture_head_with_tech_visor_20260920022455.mp4", label: "Module 2", title: "Cross-Chain Transaction Ledger", description: "Unified tracking of decentralized finance (DeFi) activity, liquidity pools, and smart contract executions.", reverse: true },
          { video: "/videos/Samurai_draws_katana_20260920013917.mp4", label: "Module 3", title: "Advanced Portfolio Risk Metrics", description: "Live volatility modeling, value-at-risk (VaR) calculations, and automated asset allocation warnings." },
        ],
      },
      {
        kind: "quote",
        text: "TBD gives us institutional-grade visibility into rapidly shifting markets. The density and speed of the interface are unmatched",
        author: "Marcus Sterling",
        role: "Quantitative Fund Manager",
      },
      {
        kind: "fs",
        label: "Dashboard Walkthrough",
        heading: "Deep-Dive Feature Showcase",
        media: { type: "video", src: "/videos/Marble_bust_glowing_circuits_20260920022028.mp4" },
        rows: [
          { number: "01", name: "Custom Layout Engine", desc: "Modular workspace builder allowing traders to snap widgets, charts, and data feeds into place." },
          { number: "02", name: "Execution Gateway", desc: "Direct-to-dex routing parameters with minimal slippage tracking." },
          { number: "03", name: "Alert System", desc: "Real-time webhook notifications and threshold triggers for critical market shifts." },
        ],
      },
    ],
    postInfosBlocks: [
      { kind: "quote", text: "The clearest minds aren't the ones that know more. They're the ones that see through the noise." },
    ],
    credits: ["Lead UI/UX Architect & Design Systems Lead", "Full-Stack Web3 Developer", "Data Visualization Specialist"],
    scope: ["UI/UX Design & Prototyping", "High-Frequency Data UI Architecture", "Frontend Development & Web3 Integration", "Performance Optimization"],
    nextSlug: "chance",
    nextLabel: "Nexus",
  },
  {
    slug: "silvr",
    metaTitle: "Silvr | TOBEDEPLOYED",
    metaDescription:
      "SoraPay is a frictionless digital wallet engineered to redefine micro-transactions. By streamlining peer-to-peer contact transfers, introducing fluid haptic micro-interactions, and executing real-time expense categorization, SoraPay removes the friction from everyday financial management.",
    h1: "SoraPay",
    tagline: "The next-generation mobile finance ecosystem",
    year: "2020",
    websiteUrl: "https://www.silvr.co/",
    intro:
      "SoraPay is a frictionless digital wallet engineered to redefine micro-transactions. By streamlining peer-to-peer contact transfers, introducing fluid haptic micro-interactions, and executing real-time expense categorization, SoraPay removes the friction from everyday financial management.",
    coverVideo: { src: "/videos/home-hero-combined.mp4", poster: "/videos/home-hero-combined-poster.jpg" },
    blocks: [
      {
        kind: "quote",
        text: "TBD turned complex digital banking into an intuitive, beautiful experience. Our users adore the speed and design.",
        author: "Elena Vance",
        role: "Head Of Marketing",
      },
      {
        kind: "modules",
        rows: [
          { video: "/videos/SoraPay%2001.mp4", label: "Module 1", title: "Seamless Contact Transfers", description: "Quick-send interfaces mapped directly to frequent contacts and phone directories." },
          { video: "/videos/sorapay%2005.mp4", label: "Module 2", title: "Real-Time Expense Categorization", description: "Instant AI-driven tagging and visual budgeting breakdowns the moment a transaction clears.", reverse: true },
          { video: "/videos/SoraPay%2002.mp4", label: "Module 3", title: "Micro-Interaction Feedback", description: "Tactile, fluid UI responses designed to make every digital payment satisfying." },
        ],
      },
      { kind: "quote", text: "A world where sending money and managing wealth takes seconds, not minutes." },
      {
        kind: "fs",
        label: "Dashboard Walkthrough",
        heading: "Deep-Dive Feature Showcase",
        media: { type: "video", src: "/videos/Sorapay%2003.mp4" },
        rows: [
          { number: "01", name: "Security Hub", desc: "Overview of biometrics and instant fraud-prevention protocols." },
          { number: "02", name: "Analytics Suite", desc: "Live spending velocity charts and monthly trend indicators." },
          { number: "03", name: "Wallet Management", desc: "Centralized control for multi-currency cards and sub-accounts." },
        ],
      },
    ],
    credits: ["Lead Product Designer / UI/UX Architect", "Mobile App Developer (iOS/Android)", "Brand Identity", "Motion Design"],
    scope: ["UI/UX Design", "Prototyping", "Design System Creation", "Frontend App Development", "Micro-Interaction Animation"],
    nextSlug: "malibou",
    nextLabel: "Veloce",
  },
];

export function getWorkProject(slug: string): WorkProject | undefined {
  return WORK_PROJECTS.find((p) => p.slug === slug);
}
