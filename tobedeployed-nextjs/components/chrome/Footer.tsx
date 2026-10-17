import { TbdWordmark } from "./TbdWordmark";

const FOOTER_VIDEOS = [
  { poster: "68dfa249c8ad1d2624abf3d5_Footer-Service-designV2-poster-00001.jpg", clip: "68dfa249c8ad1d2624abf3d5_Footer-Service-designV2-transcode.mp4", extraClass: "" },
  { poster: "68dfa1926bb2adbd4315d488_Zefir%20footerV2-poster-00001.jpg", clip: "68dfa1926bb2adbd4315d488_Zefir footerV2-transcode.mp4", extraClass: "" },
  { poster: "68dfa2440a49684a10b9e055_FOOTER%20-%20BRANDINGV2-poster-00001.jpg", clip: "68dfa2440a49684a10b9e055_FOOTER - BRANDINGV2-transcode.mp4", extraClass: "" },
  { poster: "68dfa20fc54b7796aaa5edf6_SILVR-Video%201%20footersV3-poster-00001.jpg", clip: "68dfa20fc54b7796aaa5edf6_SILVR-Video 1 footersV3-transcode.mp4", extraClass: "hide-mobile-landscape" },
  { poster: "68dfa0feb2681e0616dc3b3a_Footer-supercomics-poster-00001.jpg", clip: "68dfa0feb2681e0616dc3b3a_Footer-supercomics-transcode.mp4", extraClass: "hide-mobile-landscape" },
  { poster: "68dfa22f852959114b6c7b56_OSOL-COVER-footer-V2-poster-00001.jpg", clip: "68dfa22f852959114b6c7b56_OSOL-COVER-footer-V2-transcode.mp4", extraClass: "hide-tablet" },
];

const CDN = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985";

export function Footer() {
  return (
    <footer className="footer">
      <div className="padding-global">
        <div className="container-large">
          <div className="footer_component">
            <div className="footer_top">
              {FOOTER_VIDEOS.map((v) => (
                <div className={`grow-appear ${v.extraClass}`} key={v.clip}>
                  <div className="footer_top_video w-embed">
                    <video
                      style={{ width: "100%", height: "100%", objectFit: "cover", backgroundImage: `url(${CDN}/${v.poster})` }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={`${CDN}/${encodeURIComponent(v.clip).replace(/%2F/g, "%2F")}`} />
                    </video>
                  </div>
                </div>
              ))}
            </div>
            <div className="footer_content">
              <div className="footer_main">
                <div className="footer_menu _2col-mobile">
                  <div className="footer_menu_col">
                    <a href="/" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">Home</div></div></div>
                      <div className="link_second"><div className="text-mono">Home</div></div>
                    </a>
                    <a href="/work" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">Work</div></div></div>
                      <div className="link_second"><div className="text-mono">Work</div></div>
                    </a>
                    <a href="/services" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">Services</div></div></div>
                      <div className="link_second"><div className="text-mono">Services</div></div>
                    </a>
                    <a href="/studio" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">Studio</div></div></div>
                      <div className="link_second"><div className="text-mono">Studio</div></div>
                    </a>
                    <a href="/plans" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">Plans</div></div></div>
                      <div className="link_second"><div className="text-mono">Plans</div></div>
                    </a>
                    <a href="/approach" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">Approach</div></div></div>
                      <div className="link_second"><div className="text-mono">Approach</div></div>
                    </a>
                    <a href="/news" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">News</div></div></div>
                      <div className="link_second"><div className="text-mono">News</div></div>
                    </a>
                  </div>
                  <div className="footer_menu_col">
                    <a href="https://www.linkedin.com/company/tobedeployed/about/?viewAsMember=true" target="_blank" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">LinkedIn</div></div></div>
                      <div className="link_second"><div className="text-mono">LinkedIn</div></div>
                    </a>
                    <a href="https://www.instagram.com/tobedeployedd?stkn=cG9nb2t4bHgxbmdr&utm_source=qr" target="_blank" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="mono-appear"><div className="text-mono">Instagram</div></div></div>
                      <div className="link_second"><div className="text-mono">Instagram</div></div>
                    </a>
                  </div>
                  <div id="webflowTrigger" className="hide" />
                </div>
                <div className="footer_menu">
                  <div className="footer_menu_col">
                    <div className="text-appear"><div className="text-mono">We are a creative studio based in Paris, Barcelona &amp; London.</div></div>
                  </div>
                  <div className="footer_menu_col">
                    <div className="text-appear"><div className="text-mono">Big project? Crazy thought? Or just feel like chatting?</div></div>
                  </div>
                  <div className="footer_menu_col">
                    <div className="text-appear"><div className="text-mono">Let&#x27;s talk!</div></div>
                  </div>
                  <div className="footer_menu_col">
                    <a data-cursor-hover="Send love" href="mailto:tobedeployedd@gmail.com" className="link is-mono-footer w-inline-block">
                      <div className="link_first"><div className="text-appear"><div className="text-mono">tobedeployedd@gmail.com</div></div></div>
                      <div className="link_second"><div className="text-mono">tobedeployedd@gmail.com</div></div>
                    </a>
                  </div>
                  <div className="footer_menu_col">
                    <div className="text-appear"><div className="text-mono">Copyright 2025</div></div>
                    <div className="text-appear"><div className="text-mono">TOBEDEPLOYED</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_logo_wrapper">
              <div className="footer_logo_fill w-embed">
                <div className="logo-instance">
                  <TbdWordmark variant="footer" className="footer_logo" />
                </div>
              </div>
              <div className="footer_logo_stretch w-embed">
                <div className="logo-instance">
                  <TbdWordmark variant="footer" className="footer_logo_stretch" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
