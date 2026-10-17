"use client";

import { useEffect } from "react";

// Loaded in the exact same order as the original static site's bottom-of-body <script> tags.
// Kept as local static vendor files (not npm packages) because several GSAP plugins in use
// (ScrollSmoother, SplitText, InertiaPlugin) are Club GreenSock paid plugins not installable via a
// plain `npm install gsap`, and the currently-loaded Lenis version may not match a newer npm major's
// API. Serving the exact same files the site already runs on guarantees identical behavior.
//
// These are injected client-side, after mount (i.e. after React has hydrated the server-rendered
// HTML), instead of being rendered directly into the JSX. Rendering them as plain <script> tags in
// the tree meant the browser executed them (Webflow's runtime adding `w--current` classes, GSAP's
// `gsap.set()` calls writing inline transform/opacity styles) *before* React's hydration pass reached
// that DOM, so hydration saw a server/client attribute mismatch and discarded + rebuilt the subtree —
// wiping out the classes/styles those scripts had just set (React error #418), which is what broke
// nav state and made pages feel like they hadn't loaded correctly. Injecting after mount avoids that
// race entirely. Scripts are loaded strictly one at a time (await each one's load/error event before
// starting the next) rather than relying on `async = false` ordering: that trick only orders scripts
// with a `src` — the inline registerPlugin call below executes immediately on insertion, so it must
// only be appended once gsap and its plugins have actually finished loading, not just been queued.
type ScriptDef = { src: string } | { inline: string };

function buildScriptList(isHome: boolean): ScriptDef[] {
  const list: ScriptDef[] = [
    { src: "/vendor/jquery/jquery-3.5.1.min.js" },
    { src: "/vendor/webflow/webflow.schunk.1a807f015b216e46.js" },
    { src: "/vendor/webflow/webflow.schunk.63023746c2a25dd1.js" },
    { src: "/vendor/webflow/webflow.69315665.e75843f306330f1b.js" },
    { src: "/vendor/gsap/gsap.min.js" },
    { src: "/vendor/gsap/ScrollTrigger.min.js" },
    { src: "/vendor/gsap/ScrollSmoother.min.js" },
    { src: "/vendor/gsap/SplitText.min.js" },
    { src: "/vendor/gsap/TextPlugin.min.js" },
    { src: "/vendor/gsap/CustomEase.min.js" },
    { src: "/vendor/gsap/InertiaPlugin.min.js" },
    { src: "/vendor/gsap/Draggable.min.js" },
    { src: "/vendor/gsap/EasePack.min.js" },
    { src: "/vendor/gsap/Observer.min.js" },
    {
      inline:
        "gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, TextPlugin, CustomEase, InertiaPlugin, Draggable, EasePack, Observer);",
    },
    { src: "/vendor/lenis/lenis.min.js" },
    { src: "/vendor/lottie/lottie.min.js" },
    { src: "https://cdn.jsdelivr.net/npm/hls.js@1.6.11" },
    { src: "/vendor/vimeo/player.js" },
    isHome ? { src: "/vendor/site-engine.js" } : { src: "/vendor/detail-engine.js" },
  ];
  if (isHome) list.push({ src: "/vendor/home-engine.js" });
  return list;
}

export function VendorScripts({ isHome }: { isHome: boolean }) {
  useEffect(() => {
    let cancelled = false;
    const elements: HTMLScriptElement[] = [];

    async function run() {
      const list = buildScriptList(isHome);
      for (const def of list) {
        if (cancelled) return;
        const el = document.createElement("script");
        if ("src" in def) {
          await new Promise<void>((resolve) => {
            el.onload = () => resolve();
            el.onerror = () => resolve();
            el.src = def.src;
            document.body.appendChild(el);
          });
        } else {
          el.text = def.inline;
          document.body.appendChild(el);
        }
        elements.push(el);
      }
    }

    run();

    return () => {
      cancelled = true;
      elements.forEach((el) => el.remove());
    };
  }, [isHome]);

  return null;
}
