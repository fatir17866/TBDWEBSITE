import type { Metadata } from "next";
import { PageShell } from "@/components/chrome/PageShell";

// Ported from tobedeployed.com/work.html (the work LISTING page — the 6 individual case
// studies live at /work/[slug], see content/work.ts + WorkTemplate). Sections: hero, "Latest"
// poster strip, the 6-project grid with hover-preview background videos, a large "Archives"
// gallery of past client work, and the shared CTA (PageShell renders the footer after this).

const TITLE = "Portfolio & Success Stories | TOBEDEPLOYED";
const DESCRIPTION =
  "Our portfolio showcases Webflow development, web design, and branding projects. Clients include Matera, Silvr, Qonto, and ambitious brands.";
const OG_IMAGE =
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68da400a3efdcd28f242769d_opengrapheV2 (1).webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, images: [OG_IMAGE], type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

const ARROW_SVG = (
  <svg width="14" height="14" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z"
      fill="currentColor"
    />
  </svg>
);

const LATEST_ITEMS = [
  {
    name: "Hyperion",
    href: "/work/matera",
    bgSrc: "/images/hyperion-1.jpg",
    bgAlt: "Hyperion poster",
    bgStyle: undefined as React.CSSProperties | undefined,
    videoSrc: "/images/hyperion-2.jpg",
  },
  {
    name: "Nexus",
    href: "/work/chance",
    bgSrc: "/images/nexus-1.jpg",
    bgAlt: "Nexus poster",
    bgStyle: { objectFit: "contain", background: "#000" } as React.CSSProperties,
    videoSrc: "/images/nexus-2.jpg",
  },
  {
    name: "Sorapay",
    href: "/work/silvr",
    bgSrc: "/images/sorapay-1-sq.jpg",
    bgAlt: "Sorapay poster",
    bgStyle: { objectFit: "cover", objectPosition: "center top" } as React.CSSProperties,
    videoSrc: "/images/sorapay-2.jpg",
  },
  {
    name: "Zephyr",
    href: "/work/intramuros-magazine",
    bgSrc: "/images/zephyr-1-sq.jpg",
    bgAlt: "Zephyr poster",
    bgStyle: { objectFit: "cover", objectPosition: "center top" } as React.CSSProperties,
    videoSrc: "/images/zephyr-2.jpg",
  },
];

const PROJECTS = [
  {
    name: "Veloce",
    href: "/work/malibou",
    tagline: "The predictive revenue & pipeline ecosystem",
    cover: "https://cdn.prod.website-files.com/67aca0c732855fc2a1f2c4fc/68baf9fff4022e35bdbd13fe_cover%20malibou%20mobile.webp",
    posterUrl: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68c349e844f77d523b18b8d9_MALIBOU-video-cover-work-poster-00001.jpg",
    mp4: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c349e844f77d523b18b8d9_MALIBOU-video-cover-work-transcode.mp4",
    webm: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c349e844f77d523b18b8d9_MALIBOU-video-cover-work-transcode.webm",
  },
  {
    name: "Textra",
    href: "/work/heysimon",
    tagline: "The unified local SEO & citation ecosystem",
    cover: "https://cdn.prod.website-files.com/67aca0c732855fc2a1f2c4fc/68a47cdf9d4ba7922b54d6a0_Group%201171274850.webp",
    posterUrl: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68c34c1b6d0149efa3e3ee74_hey-simon-cover-work-poster-00001.jpg",
    mp4: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34c1b6d0149efa3e3ee74_hey-simon-cover-work-transcode.mp4",
    webm: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34c1b6d0149efa3e3ee74_hey-simon-cover-work-transcode.webm",
  },
  {
    name: "Sorapay",
    href: "/work/silvr",
    tagline: "Supercharged Business Loans",
    cover: "https://cdn.prod.website-files.com/67aca0c732855fc2a1f2c4fc/68beb67f7d588e74090c6d9d_silvr%20mobile%20cover%20%281.gif).webp",
    posterUrl: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68c34dcde68d97df2b61f466_SILVR-Reel-03-video-2-version-ciel-work-poster-00001.jpg",
    mp4: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34dcde68d97df2b61f466_SILVR-Reel-03-video-2-version-ciel-work-transcode.mp4",
    webm: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34dcde68d97df2b61f466_SILVR-Reel-03-video-2-version-ciel-work-transcode.webm",
  },
  {
    name: "Hyperion",
    href: "/work/matera",
    tagline: "The 21st-century property manager",
    cover: "https://cdn.prod.website-files.com/67aca0c732855fc2a1f2c4fc/68bb0bedd1f36235b951c814_mobile%20cover%20matera%20%281.gif).webp",
    posterUrl: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68c34e6731bcfb58b939fdae_matera-cover-work-poster-00001.jpg",
    mp4: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34e6731bcfb58b939fdae_matera-cover-work-transcode.mp4",
    webm: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34e6731bcfb58b939fdae_matera-cover-work-transcode.webm",
  },
  {
    name: "Nexus",
    href: "/work/chance",
    tagline: "Find your professional match",
    cover: "https://cdn.prod.website-files.com/67aca0c732855fc2a1f2c4fc/68bae562fb0397050d43f769_chance-mobile-cover.webp",
    posterUrl: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14f4d581e91da74de2f9f_chance-cover-poster-00001.jpg",
    mp4: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68d14f4d581e91da74de2f9f_chance-cover-transcode.mp4",
    webm: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68d14f4d581e91da74de2f9f_chance-cover-transcode.webm",
  },
  {
    name: "Zephyr",
    href: "/work/intramuros-magazine",
    tagline: "Design is everywhere.",
    cover: "https://cdn.prod.website-files.com/67aca0c732855fc2a1f2c4fc/68bb1c2b41e09a9cba291ea5_intramuros-mobile-cover%20%281.gif).webp",
    posterUrl: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68c34fa408140526badcb49a_intra-cover-work-poster-00001.jpg",
    mp4: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34fa408140526badcb49a_intra-cover-work-transcode.mp4",
    webm: "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68c34fa408140526badcb49a_intra-cover-work-transcode.webm",
  },
];

type ArchiveVisual = { src: string; srcSet?: string; alt: string };
type ArchiveRow = {
  side: "left" | "right";
  visualsClass: string;
  visuals: [ArchiveVisual, ArchiveVisual, ArchiveVisual];
  leftLabel: string;
  rightLabel: string;
};

const CDN2 = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985";

const ARCHIVES: ArchiveRow[] = [
  {
    side: "left",
    visualsClass: "is-first",
    leftLabel: "Qonto, scale-up. 2023.",
    rightLabel: "Qonto, scale-up. 2023.",
    visuals: [
      {
        src: `${CDN2}/68cd2a544d83b2e8ad7f5b24_qonto_ad.webp`,
        srcSet: `${CDN2}/68cd2a544d83b2e8ad7f5b24_qonto_ad-p-500.webp 500w, ${CDN2}/68cd2a544d83b2e8ad7f5b24_qonto_ad-p-800.webp 800w, ${CDN2}/68cd2a544d83b2e8ad7f5b24_qonto_ad.webp 960w`,
        alt: "",
      },
      {
        src: `${CDN2}/688273958d98b7f2dbbf06b8_imgi_165_lg_original-88b4fd103662a10ecda931aba3917b5f.avif`,
        srcSet: `${CDN2}/688273958d98b7f2dbbf06b8_imgi_165_lg_original-88b4fd103662a10ecda931aba3917b5f-p-500.avif 500w, ${CDN2}/688273958d98b7f2dbbf06b8_imgi_165_lg_original-88b4fd103662a10ecda931aba3917b5f.avif 1408w`,
        alt: "A person holding a smart phone and a Qonto credit card.",
      },
      { src: `${CDN2}/688272c11d835f9c411cfc61_Qonto_footer-ezgif.com-video-to-gif-converter.gif`, alt: "Qonto logo gif" },
    ],
  },
  {
    side: "right",
    visualsClass: "is-second",
    leftLabel: "Alan, scale-up. 2022.",
    rightLabel: "Alan, scale-up. 2022.",
    visuals: [
      {
        src: `${CDN2}/6883a19d66af560b826a2638_650ae41a29e0a1ecff8f3ea2_03_Alan_DesignStudio_OOH.webp`,
        srcSet: `${CDN2}/6883a19d66af560b826a2638_650ae41a29e0a1ecff8f3ea2_03_Alan_DesignStudio_OOH-p-500.webp 500w, ${CDN2}/6883a19d66af560b826a2638_650ae41a29e0a1ecff8f3ea2_03_Alan_DesignStudio_OOH-p-800.webp 800w, ${CDN2}/6883a19d66af560b826a2638_650ae41a29e0a1ecff8f3ea2_03_Alan_DesignStudio_OOH-p-1080.webp 1080w, ${CDN2}/6883a19d66af560b826a2638_650ae41a29e0a1ecff8f3ea2_03_Alan_DesignStudio_OOH-p-1600.webp 1600w, ${CDN2}/6883a19d66af560b826a2638_650ae41a29e0a1ecff8f3ea2_03_Alan_DesignStudio_OOH-p-2000.webp 2000w, ${CDN2}/6883a19d66af560b826a2638_650ae41a29e0a1ecff8f3ea2_03_Alan_DesignStudio_OOH-p-2600.webp 2600w, ${CDN2}/6883a19d66af560b826a2638_650ae41a29e0a1ecff8f3ea2_03_Alan_DesignStudio_OOH.webp 2784w`,
        alt: "Visuals of https://alan.com/",
      },
      {
        src: `${CDN2}/6883a19173780480f0f4512f_650af3adee52648ea362656b_13%2614_Alan_DesignStudio_Apps.webp`,
        srcSet: `${CDN2}/6883a19173780480f0f4512f_650af3adee52648ea362656b_13%2614_Alan_DesignStudio_Apps-p-500.webp 500w, ${CDN2}/6883a19173780480f0f4512f_650af3adee52648ea362656b_13%2614_Alan_DesignStudio_Apps-p-800.webp 800w, ${CDN2}/6883a19173780480f0f4512f_650af3adee52648ea362656b_13%2614_Alan_DesignStudio_Apps-p-1080.webp 1080w, ${CDN2}/6883a19173780480f0f4512f_650af3adee52648ea362656b_13%2614_Alan_DesignStudio_Apps.webp 1372w`,
        alt: "Visual of Alan chat",
      },
      { src: `${CDN2}/688275c0edda5062943e40af_Alan_Footer-ezgif.com-resize.gif`, alt: "Alan logo gif" },
    ],
  },
  {
    side: "left",
    visualsClass: "is-third",
    leftLabel: "Jump, agency creative. 2023.",
    rightLabel: "Jump, Scale-up. 2023.",
    visuals: [
      {
        src: `${CDN2}/6882b200c6fc8052f7c12068_imgi_223_Z_z_9-vxEdbNPA11_HP-freelance-salon-POV.avif`,
        srcSet: `${CDN2}/6882b200c6fc8052f7c12068_imgi_223_Z_z_9-vxEdbNPA11_HP-freelance-salon-POV-p-500.avif 500w, ${CDN2}/6882b200c6fc8052f7c12068_imgi_223_Z_z_9-vxEdbNPA11_HP-freelance-salon-POV-p-800.avif 800w, ${CDN2}/6882b200c6fc8052f7c12068_imgi_223_Z_z_9-vxEdbNPA11_HP-freelance-salon-POV-p-1080.avif 1080w, ${CDN2}/6882b200c6fc8052f7c12068_imgi_223_Z_z_9-vxEdbNPA11_HP-freelance-salon-POV-p-1600.avif 1600w, ${CDN2}/6882b200c6fc8052f7c12068_imgi_223_Z_z_9-vxEdbNPA11_HP-freelance-salon-POV.avif 2840w`,
        alt: "A man sitting on a couch using a laptop.",
      },
      { src: `${CDN2}/6882b1d104dd62c1a9021ce9_video-output-0373D790-F751-4275-9243-7275E059EDA3-1-ezgif.com-video-to-gif-converter.gif`, alt: "Video screenshot with playful animations of jump landing page" },
      {
        src: `${CDN2}/6882b3a78f083243482fab0a_Focused Professional Woman 1.webp`,
        srcSet: `${CDN2}/6882b3a78f083243482fab0a_Focused Professional Woman 1-p-500.webp 500w, ${CDN2}/6882b3a78f083243482fab0a_Focused Professional Woman 1-p-800.webp 800w, ${CDN2}/6882b3a78f083243482fab0a_Focused Professional Woman 1-p-1080.webp 1080w, ${CDN2}/6882b3a78f083243482fab0a_Focused Professional Woman 1.webp 1200w`,
        alt: "A woman wearing glasses , focused  looking at a laptop.",
      },
    ],
  },
  {
    side: "right",
    visualsClass: "is-fourth",
    leftLabel: "Posos, Startup. 2023.",
    rightLabel: "Posos, agency creative. 2023.",
    visuals: [
      {
        src: `${CDN2}/6882b6d4931361689b54418d_Healthcare Professionals in Discussion.avif`,
        srcSet: `${CDN2}/6882b6d4931361689b54418d_Healthcare Professionals in Discussion-p-500.avif 500w, ${CDN2}/6882b6d4931361689b54418d_Healthcare Professionals in Discussion.avif 1200w`,
        alt: "Photo of Healthcare Professionals in Discussion",
      },
      { src: `${CDN2}/6882b843108cc88db373151b_video-output-8D57C837-AD47-4D73-ADFE-19678DA8696B-1-ezgif.com-optimize.gif`, alt: "Gif of https://www.posos.co/. AI-Powered Prescription" },
      {
        src: `${CDN2}/6882b9371ca76f7188fd3cb8_zzPortrait of a Healthcare Professional 1.webp`,
        srcSet: `${CDN2}/6882b9371ca76f7188fd3cb8_zzPortrait of a Healthcare Professional 1-p-500.webp 500w, ${CDN2}/6882b9371ca76f7188fd3cb8_zzPortrait of a Healthcare Professional 1.webp 673w`,
        alt: "A woman working in healthicare with a stethoscope on her neck.",
      },
    ],
  },
  {
    side: "left",
    visualsClass: "is-fifth",
    leftLabel: "Tropee, agency creative. 2023.",
    rightLabel: "BSTLL, architecture firm. 2023.",
    visuals: [
      {
        src: `${CDN2}/687785235571d30752f88b22_4-archi.webp`,
        srcSet: `${CDN2}/687785235571d30752f88b22_4-archi-p-500.webp 500w, ${CDN2}/687785235571d30752f88b22_4-archi-p-800.webp 800w, ${CDN2}/687785235571d30752f88b22_4-archi.webp 1050w`,
        alt: "two wooden beautifully architectured structures in the desert",
      },
      {
        src: `${CDN2}/68c298b4c71bd00c1fdbb12f_imgi_11_64d0fb72882681299a415944_HSM-10.webp`,
        srcSet: `${CDN2}/68c298b4c71bd00c1fdbb12f_imgi_11_64d0fb72882681299a415944_HSM-10-p-500.webp 500w, ${CDN2}/68c298b4c71bd00c1fdbb12f_imgi_11_64d0fb72882681299a415944_HSM-10.webp 1050w`,
        alt: "A large building with lots of windows and a clock on the wall.",
      },
      {
        src: `${CDN2}/68c298cca8b262f7cad62212_imgi_9_64d0fb72e450b80e0826587e_HSM-08.webp`,
        srcSet: `${CDN2}/68c298cca8b262f7cad62212_imgi_9_64d0fb72e450b80e0826587e_HSM-08-p-500.webp 500w, ${CDN2}/68c298cca8b262f7cad62212_imgi_9_64d0fb72e450b80e0826587e_HSM-08-p-800.webp 800w, ${CDN2}/68c298cca8b262f7cad62212_imgi_9_64d0fb72e450b80e0826587e_HSM-08.webp 1050w`,
        alt: "The lobby of a modern building with a marble floor.",
      },
    ],
  },
  {
    side: "right",
    visualsClass: "is-sixth",
    leftLabel: "CO2 AI, scale-up. 2023.",
    rightLabel: "CO2 AI, agency creative. 2023.",
    visuals: [
      {
        src: `${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File.webp`,
        srcSet: `${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File-p-500.webp 500w, ${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File-p-800.webp 800w, ${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File-p-1080.webp 1080w, ${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File-p-1600.webp 1600w, ${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File-p-2000.webp 2000w, ${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File-p-2600.webp 2600w, ${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File-p-3200.webp 3200w, ${CDN2}/688fa034c3a40ec8b9234226_673f3c9cb58f05d2e9b865ec_Figma File.webp 3840w`,
        alt: "Screenshots of CO2AI landing pages",
      },
      { src: `${CDN2}/688fa807e11564cdcf123168_video-output-AA0A84C6-ACBE-438A-B98C-147E68646077-1-ezgif.com-optimize.gif`, alt: "Colored legos tumbling down the stairs" },
      {
        src: `${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123.webp`,
        srcSet: `${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123-p-500.webp 500w, ${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123-p-800.webp 800w, ${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123-p-1080.webp 1080w, ${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123-p-1600.webp 1600w, ${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123-p-2000.webp 2000w, ${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123-p-2600.webp 2600w, ${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123-p-3200.webp 3200w, ${CDN2}/688fa83ed965015d4e713025_673f3c9cb58f05d2e9b865f0_Group 123.webp 9601w`,
        alt: "Banner of CO2 AI with painted cans with flowers in them.",
      },
    ],
  },
  {
    side: "left",
    visualsClass: "is-seventh",
    leftLabel: "Ensemble/renaissance, agency creative. 2023.",
    rightLabel: "elevate, sport. 2025.",
    visuals: [
      {
        src: `${CDN2}/68ece02e87a6c159abded56c_dsd.webp`,
        srcSet: `${CDN2}/68ece02e87a6c159abded56c_dsd-p-500.webp 500w, ${CDN2}/68ece02e87a6c159abded56c_dsd-p-800.webp 800w, ${CDN2}/68ece02e87a6c159abded56c_dsd.webp 1249w`,
        alt: "",
      },
      {
        src: `${CDN2}/68ece01e346fe64d836f8398_dsFrame 427319746.webp`,
        srcSet: `${CDN2}/68ece01e346fe64d836f8398_dsFrame 427319746-p-500.webp 500w, ${CDN2}/68ece01e346fe64d836f8398_dsFrame 427319746-p-800.webp 800w, ${CDN2}/68ece01e346fe64d836f8398_dsFrame 427319746-p-1080.webp 1080w, ${CDN2}/68ece01e346fe64d836f8398_dsFrame 427319746.webp 1440w`,
        alt: "",
      },
      {
        src: `${CDN2}/68ece00c7d472c75bfc1d27c_imgi_52_67900dd1c7d2d761284686c3_PREMIERS PAS À LA SALLE.webp`,
        srcSet: `${CDN2}/68ece00c7d472c75bfc1d27c_imgi_52_67900dd1c7d2d761284686c3_PREMIERS PAS À LA SALLE-p-500.webp 500w, ${CDN2}/68ece00c7d472c75bfc1d27c_imgi_52_67900dd1c7d2d761284686c3_PREMIERS PAS À LA SALLE-p-800.webp 800w, ${CDN2}/68ece00c7d472c75bfc1d27c_imgi_52_67900dd1c7d2d761284686c3_PREMIERS PAS À LA SALLE.webp 1100w`,
        alt: "",
      },
    ],
  },
  {
    side: "right",
    visualsClass: "is-eighth",
    leftLabel: "Antartic, Agency. 2023.",
    rightLabel: "antartic, agency creative. 2023.",
    visuals: [
      {
        src: `${CDN2}/688276a7edcdf6a45f024565_antartik mini.webp`,
        srcSet: `${CDN2}/688276a7edcdf6a45f024565_antartik mini-p-500.webp 500w, ${CDN2}/688276a7edcdf6a45f024565_antartik mini-p-800.webp 800w, ${CDN2}/688276a7edcdf6a45f024565_antartik mini-p-1080.webp 1080w, ${CDN2}/688276a7edcdf6a45f024565_antartik mini.webp 1441w`,
        alt: "A stack of books sitting on top of a table, with Antartik written on it",
      },
      {
        src: `${CDN2}/68c29abbd175327ff1e11f6c_Bookshelf with Nature-Themed Items.webp`,
        srcSet: `${CDN2}/68c29abbd175327ff1e11f6c_Bookshelf with Nature-Themed Items-p-500.webp 500w, ${CDN2}/68c29abbd175327ff1e11f6c_Bookshelf with Nature-Themed Items.webp 911w`,
        alt: "Bookshelf with Nature-Themed Items",
      },
      {
        src: `${CDN2}/68c29ac9167b3147057611d8_Retro Magazine Spread.webp`,
        srcSet: `${CDN2}/68c29ac9167b3147057611d8_Retro Magazine Spread-p-500.webp 500w, ${CDN2}/68c29ac9167b3147057611d8_Retro Magazine Spread-p-800.webp 800w, ${CDN2}/68c29ac9167b3147057611d8_Retro Magazine Spread.webp 1200w`,
        alt: "Retro Magazine with a picture of two women wearing necklaces.",
      },
    ],
  },
  {
    side: "left",
    visualsClass: "is-ninth",
    leftLabel: "Qonto, scale-up. 2023.",
    rightLabel: "Go To Sell, services. 2024.",
    visuals: [
      {
        src: `${CDN2}/68c29bc90c3ffd10bc0597a7_eeStreet Wall Billboard 5 1.webp`,
        srcSet: `${CDN2}/68c29bc90c3ffd10bc0597a7_eeStreet Wall Billboard 5 1-p-500.webp 500w, ${CDN2}/68c29bc90c3ffd10bc0597a7_eeStreet Wall Billboard 5 1-p-800.webp 800w, ${CDN2}/68c29bc90c3ffd10bc0597a7_eeStreet Wall Billboard 5 1.webp 1921w`,
        alt: "GotoSell billboard with a man and woman sitting at a table ",
      },
      {
        src: `${CDN2}/68c29be3f7be71802d0a81f8_imgi_4_66996fedff2570b6b9972518_gotosell-home-hero.webp`,
        srcSet: `${CDN2}/68c29be3f7be71802d0a81f8_imgi_4_66996fedff2570b6b9972518_gotosell-home-hero-p-500.webp 500w, ${CDN2}/68c29be3f7be71802d0a81f8_imgi_4_66996fedff2570b6b9972518_gotosell-home-hero.webp 1395w`,
        alt: "A group of people sitting around a wooden table.",
      },
      {
        src: `${CDN2}/68c29bd6c2bf97e4e353dd81_sdsfsdf1 MAIN FILE 2.webp`,
        srcSet: `${CDN2}/68c29bd6c2bf97e4e353dd81_sdsfsdf1 MAIN FILE 2-p-500.webp 500w, ${CDN2}/68c29bd6c2bf97e4e353dd81_sdsfsdf1 MAIN FILE 2-p-800.webp 800w, ${CDN2}/68c29bd6c2bf97e4e353dd81_sdsfsdf1 MAIN FILE 2.webp 1921w`,
        alt: "A laptop computer sitting on the ground",
      },
    ],
  },
  {
    side: "right",
    visualsClass: "is-tenth",
    leftLabel: "Yield Studio, Agency. 2022.",
    rightLabel: "Alan, scale-up. 2022.",
    visuals: [
      {
        src: `${CDN2}/68c29d72182d50268911dc04_Modern Office Collaboration.webp`,
        srcSet: `${CDN2}/68c29d72182d50268911dc04_Modern Office Collaboration-p-500.webp 500w, ${CDN2}/68c29d72182d50268911dc04_Modern Office Collaboration-p-800.webp 800w, ${CDN2}/68c29d72182d50268911dc04_Modern Office Collaboration-p-1080.webp 1080w, ${CDN2}/68c29d72182d50268911dc04_Modern Office Collaboration.webp 1200w`,
        alt: "A group of people sitting at a table in an office.",
      },
      {
        src: `${CDN2}/68c29ccf92d99cb15eed9a83_YieldCover 1 (1).webp`,
        srcSet: `${CDN2}/68c29ccf92d99cb15eed9a83_YieldCover 1 (1)-p-500.webp 500w, ${CDN2}/68c29ccf92d99cb15eed9a83_YieldCover 1 (1)-p-800.webp 800w, ${CDN2}/68c29ccf92d99cb15eed9a83_YieldCover 1 (1).webp 1512w`,
        alt: "Yield Studio logo",
      },
      {
        src: `${CDN2}/68c29cdccc8c7a2346bd5436_yield mini 1 (1).webp`,
        srcSet: `${CDN2}/68c29cdccc8c7a2346bd5436_yield mini 1 (1)-p-500.webp 500w, ${CDN2}/68c29cdccc8c7a2346bd5436_yield mini 1 (1).webp 1440w`,
        alt: "A coffee cup with Yield logo sitting on the ground.",
      },
    ],
  },
];

export default function WorkListingPage() {
  return (
    <PageShell dataPage="work">
      <section className="section_hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_component">
              <div className="heading-appear">
                <h1 className="text-align-center">
                  Our
                  <br />
                  game
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

      <section className="section_latest">
        <div className="padding-global">
          <div className="container-large">
            <div className="latest_component">
              <div className="latest_clw w-dyn-list">
                <div role="list" className="latest_content w-dyn-items">
                  {LATEST_ITEMS.map((item) => (
                    <div role="listitem" className="latest_content_item w-dyn-item" key={item.name}>
                      <a data-cursor-hover={item.name} href={item.href} className="latest_visual w-inline-block">
                        <img src={item.bgSrc} loading="lazy" alt={item.bgAlt} className="latest_visual_background" style={item.bgStyle} />
                        <div className="latest_visual_overlay" />
                        <div className="latest_visual_video_wrapper">
                          <div className="visual_scale w-embed">
                            <img className="main-video" src={item.videoSrc} alt={item.bgAlt} style={{ width: "100%", height: "100%", objectFit: item.bgStyle?.objectFit ?? "cover", objectPosition: item.bgStyle?.objectPosition, background: item.bgStyle?.background }} />
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

      <section className="section_projects">
        <div className="padding-global">
          <div className="container-large">
            <div className="projects_component">
              <div>
                <div className="text-mono_wrapper">
                  <h2 className="text-mono">Recent projects (6)</h2>
                </div>
              </div>
              <div className="projects_content">
                <div className="projects_list_wrapper w-dyn-list">
                  <div role="list" className="projects_list w-dyn-items">
                    {PROJECTS.map((p) => (
                      <div role="listitem" className="projects_item w-dyn-item" key={p.name}>
                        <div className="hide-mobile-landscape is-project">
                          <a data-cursor-hover="Open project" href={p.href} className="link is-project w-inline-block">
                            <div className="link_first">
                              <div className="line-appear">
                                <div className="projects_name">{p.name}</div>
                              </div>
                            </div>
                            <div className="link_second">
                              <div className="projects_name">{p.name}</div>
                            </div>
                          </a>
                        </div>
                        <div className="show-mobile-landscape">
                          <a href={p.href} className="project_link w-inline-block">
                            <div className="project_infos">
                              <h3 className="project_name text-appear">{p.name}</h3>
                              <div className="project_infos_tagline text-appear">{p.tagline}</div>
                            </div>
                            <div style={{ backgroundImage: `url(${p.cover})` }} className="project_visual" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="projects_visual_wrapper">
                  <div className="projects_visuals_wrapper">
                    <div className="projects_visual_container" />
                    <div className="projects_visuals_overlay element-appear">
                      <div className="visual_overlay" />
                    </div>
                    <div className="projects_images_preload">
                      {PROJECTS.map((p) => (
                        <div
                          key={p.name}
                          data-poster-url={p.posterUrl}
                          data-video-urls={`${p.mp4},${p.webm}`}
                          data-autoplay="true"
                          data-loop="true"
                          data-wf-ignore="true"
                          className="projects_visual w-background-video w-background-video-atom"
                        >
                          <video autoPlay loop style={{ backgroundImage: `url(${p.posterUrl})` }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                            <source src={p.mp4} data-wf-ignore="true" />
                            <source src={p.webm} data-wf-ignore="true" />
                          </video>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_archives">
        <div className="padding-global">
          <div className="container-large">
            <div className="archives_component">
              <div className="text-mono_wrapper">
                <div className="text-mono_wrapper">
                  <h2 className="text-mono">Archives (6)</h2>
                </div>
              </div>
              <div className="archives_list">
                {ARCHIVES.map((row, i) => (
                  <div className={`archives_row${row.side === "right" ? " is-right" : ""}`} key={i}>
                    <div className={`archives_visuals ${row.visualsClass}`}>
                      {row.visuals.map((v, vi) => (
                        <div className={`archives_visual_wrapper _${i + 1}-${vi + 1}`} key={vi}>
                          <img src={v.src} loading="lazy" sizes={v.srcSet ? "100vw" : undefined} srcSet={v.srcSet} alt={v.alt} className="archives_visual" />
                          <div className="archives_visual_overlay_wrapper element-appear">
                            <div className="visual_overlay" />
                          </div>
                        </div>
                      ))}
                    </div>
                    {row.side === "left" ? (
                      <>
                        <div className="hide-mobile-landscape">
                          <div className="archives_description is-left is-hide">
                            <div className="text-mono">{row.leftLabel}</div>
                          </div>
                        </div>
                        <div className="archives_description is-right">
                          <div className="text-mono_wrapper">
                            <div className="text-mono">{row.rightLabel}</div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="archives_description is-left">
                          <div className="text-mono_wrapper">
                            <div className="text-mono">{row.leftLabel}</div>
                          </div>
                        </div>
                        <div className="hide-mobile-landscape">
                          <div className="archives_description is-right is-hide">
                            <div className="text-mono">{row.rightLabel}</div>
                          </div>
                        </div>
                      </>
                    )}
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
