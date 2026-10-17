// Ported verbatim from the site's nav-top / nav-bottom / nav-menu markup (present on every page).
// Uses plain <a> tags (not next/link) so every navigation is a real full page load — required because
// the animation engine (site-engine.js / detail-engine.js) assumes a fresh DOMContentLoaded per page.
export function TopNav() {
  return (
    <>
      <nav className="nav-top">
        <div className="padding-global">
          <div className="container-nav">
            <div className="nav-top_component">
              <div className="nav-top_left">
                <div className="nav-top_left_1">
                  <a href="/" className="link is-mono w-inline-block">
                    <div className="link_first">
                      <div className="text-mono difference">TOBEDEPLOYED</div>
                    </div>
                    <div className="link_second">
                      <div className="text-mono difference">TOBEDEPLOYED</div>
                    </div>
                  </a>
                </div>
                <div className="nav-top_left_3 hide-mobile-landscape">
                  <div id="modeSwitch" className="link is-mono">
                    <div className="link_first">
                      <div className="text-mono difference">Dark mode</div>
                    </div>
                    <div className="link_second">
                      <div className="text-mono difference">Dark mode</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-top_middle has-cart">
                <div id="menuToggle" className="link is-mono">
                  <div className="link_first">
                    <div className="text-mono difference">Menu</div>
                  </div>
                  <div className="link_second">
                    <div className="text-mono difference">Open</div>
                  </div>
                </div>
                <div id="modeSwitch2" className="show-mobile-landscape" />
              </div>
              <div className="nav-top_right hide-mobile-landscape">
                <div data-w-id="aec3b3b5-7411-c902-5605-0d159459a9a1" className="link is-mono">
                  <div className="link_first">
                    <div className="text-mono difference">Let&#x27;s talk!</div>
                  </div>
                  <div className="link_second">
                    <div className="text-mono difference">Contact us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav-bottom">
        <div className="padding-global is-nav">
          <div className="container-nav">
            <div className="nav-bottom_component">
              <div className="hide-tablet">
                <div className="text-mono difference">We craft bold design &amp; clean Webflow.</div>
              </div>
              <div className="nav-bottom_right">
                <div className="cities_list">
                  <div className="city_wrapper">
                    <div id="citySwitch1" className="text-mono difference">Paris, France</div>
                    <div id="timeSwitch1" className="text-mono difference">3:49 PM</div>
                  </div>
                  <div className="city_wrapper is-second">
                    <div id="citySwitch2" className="text-mono difference">Los Angeles, CA</div>
                    <div id="timeSwitch2" className="text-mono difference">3:49 PM</div>
                  </div>
                  <div className="city_wrapper is-third">
                    <div id="citySwitch3" className="text-mono difference">Barcelona, Spain</div>
                    <div id="timeSwitch3" className="text-mono difference">3:49 PM</div>
                  </div>
                  <div className="city_wrapper is-fourth">
                    <div id="citySwitch4" className="text-mono difference">Hong Kong, China</div>
                    <div id="timeSwitch4" className="text-mono difference">3:49 PM</div>
                  </div>
                  <div className="city_wrapper is-fifth">
                    <div id="citySwitch5" className="text-mono difference">Paris, France</div>
                    <div id="timeSwitch5" className="text-mono difference">3:49 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="nav-menu">
        <div className="padding-global">
          <div className="container-nav">
            <div className="nav-menu_component">
              <div className="nav-menu_col">
                <a href="/" className="nav-menu_link_wrapper w-inline-block">
                  <div className="nav-menu_visual is-home" />
                  <div className="nav-menu_link">Home</div>
                </a>
                <a href="/work" className="nav-menu_link_wrapper w-inline-block">
                  <div className="nav-menu_visual is-work" />
                  <div className="nav-menu_link">Work</div>
                </a>
                <a href="/services" className="nav-menu_link_wrapper w-inline-block">
                  <div className="nav-menu_visual is-services" />
                  <div className="nav-menu_link">Services</div>
                </a>
                <a href="/approach" className="nav-menu_link_wrapper w-inline-block">
                  <div className="nav-menu_visual is-approach" />
                  <div className="nav-menu_link">Approach</div>
                </a>
              </div>
              <div className="nav-menu_col">
                <a href="/studio" className="nav-menu_link_wrapper w-inline-block">
                  <div className="nav-menu_visual is-studio" />
                  <div className="nav-menu_link">Studio</div>
                </a>
                <a href="/plans" className="nav-menu_link_wrapper w-inline-block">
                  <div className="nav-menu_visual is-pack" />
                  <div className="nav-menu_link">Plans</div>
                </a>
                <a href="/news" className="nav-menu_link_wrapper w-inline-block">
                  <div className="nav-menu_visual is-resources" />
                  <div className="nav-menu_link">News</div>
                </a>
                <div id="openForm" data-w-id="d1d3a282-31ff-4a02-5a3f-0c1380aa9755" className="nav-menu_link_wrapper show-mobile-landscape">
                  <div className="nav-menu_link">Let&#x27;s talk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
