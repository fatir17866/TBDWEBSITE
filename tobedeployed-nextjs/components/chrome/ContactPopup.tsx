import { ContactForm } from "./ContactForm";

export function ContactPopup() {
  return (
    <>
      <section className="section_contact">
        <div className="contact_background" />
        <div className="padding-global z-index-1">
          <div className="container-large">
            <div className="contact_component">
              <div className="contact_top">
                <div id="closeForm" data-w-id="42d6a044-483f-1c95-edb3-9c14495f3d48" className="link">
                  <div className="link_first">
                    <div className="text-mono">Close</div>
                  </div>
                  <div className="link_second">
                    <div className="text-mono">Close</div>
                  </div>
                </div>
              </div>
              <div className="contact_form-block w-form">
                <ContactForm />
              </div>
              <div className="contact_success">
                <div className="contact_success_wrapper">
                  <div className="w-embed">
                    <div className="heading-style-h2">
                      Thank<span className="success_visual" />you!
                    </div>
                  </div>
                </div>
                <div className="contact_success_mono_wrapper">
                  <div id="closeForm2" data-w-id="54cc5533-80d4-6f3b-f81d-a80b84e18c2c" className="link">
                    <div className="link_first">
                      <div className="text-mono">Continue browsing</div>
                    </div>
                    <div className="link_second">
                      <div className="text-mono">Continue browsing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact_overlay" />
    </>
  );
}
