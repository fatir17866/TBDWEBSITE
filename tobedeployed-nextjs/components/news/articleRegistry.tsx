import { ComponentType } from "react";
import { WordpressVsWebflow } from "./articles/WordpressVsWebflow";
import { WebflowUxAndSeo } from "./articles/WebflowUxAndSeo";
import { WebDesignVsDevelopment } from "./articles/WebDesignVsDevelopment";
import { YourRebrandStartsWithWords } from "./articles/YourRebrandStartsWithWords";
import { WhyResearchIsOurObsession } from "./articles/WhyResearchIsOurObsession";
import { IconoclasticDesignAbecedary } from "./articles/IconoclasticDesignAbecedary";
import { YourTypographySucks } from "./articles/YourTypographySucks";
import { WebflowUltimateGuide } from "./articles/WebflowUltimateGuide";

// Maps each article slug to the component that renders its `article_content w-richtext` body.
// Kept separate from content/news.ts so that file can stay plain data (metadata only).
export const articleRegistry: Record<string, ComponentType> = {
  "wordpress-vs-webflow-old-guard-vs-new-blood": WordpressVsWebflow,
  "webflow-ux-and-seo-the-winning-trio-for-2025": WebflowUxAndSeo,
  "web-design-vs-development-stop-confusing-them": WebDesignVsDevelopment,
  "your-rebrand-starts-with-words": YourRebrandStartsWithWords,
  "why-research-is-our-obsession": WhyResearchIsOurObsession,
  "the-iconoclastic-design-abecedary-from-a-to-z-unfiltered": IconoclasticDesignAbecedary,
  "your-typography-sucks-stop-pretending-it-doesnt-matter": YourTypographySucks,
  "webflow-the-ultimate-guide-to-building-websites-in-2025": WebflowUltimateGuide,
};
