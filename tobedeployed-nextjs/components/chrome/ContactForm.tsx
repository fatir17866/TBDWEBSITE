"use client";

import { FormEvent, useRef, useState } from "react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "fail">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setStatus("sending");

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "",
      Email: (form.elements.namedItem("Email") as HTMLInputElement)?.value ?? "",
      Phone: (form.elements.namedItem("Phone") as HTMLInputElement)?.value ?? "",
      Interest: (form.querySelector('input[name="Interest"]:checked') as HTMLInputElement)?.value ?? "",
      Message: (form.elements.namedItem("Message") as HTMLTextAreaElement)?.value ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) {
        setStatus("done");
      } else {
        setStatus("fail");
      }
    } catch {
      setStatus("fail");
    }
  }

  if (status === "done") {
    return (
      <div className="w-form-done" style={{ display: "block" }}>
        <div>Thank you! Your submission has been received!</div>
      </div>
    );
  }

  return (
    <>
      <form
        ref={formRef}
        id="wf-form-Contact-Form"
        name="wf-form-Contact-Form"
        className="contact_form"
        onSubmit={handleSubmit}
      >
        <div className="w-embed">
          <h1 className="heading-style-h2">
            Let&apos;s work<br />
            <span className="contact_visual" />
            together
          </h1>
        </div>
        <div className="contact_rows">
          <div className="contact_row">
            <label htmlFor="name" className="text-mono is-smaller">Name</label>
            <input className="contact_field w-input" maxLength={256} name="name" placeholder="Chuck Norris" type="text" id="name" />
          </div>
          <div className="contact_row">
            <label htmlFor="Email" className="text-mono is-smaller">Email</label>
            <input className="contact_field w-input" maxLength={256} name="Email" placeholder="walker@texas-rangers.com" type="email" id="Email" required />
          </div>
          <div className="contact_row">
            <label htmlFor="Phone" className="text-mono is-smaller">Phone</label>
            <input className="contact_field w-input" autoComplete="tel" maxLength={256} name="Phone" inputMode="tel" pattern="^\+?[0-9 ()-]{6,}$" placeholder="XX XX XX XX XX" type="tel" id="Phone" />
          </div>
          <div className="contact_row">
            <label className="text-mono is-smaller">Interest</label>
            <div className="contact_radio_wrapper">
              <label className="contact_radio w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact_radio_button w-radio-input" />
                <input type="radio" id="AIAgents" name="Interest" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="AI Agents" />
                <span className="contact_radio_label w-form-label">AI Agents</span>
              </label>
              <label className="contact_radio w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact_radio_button w-radio-input" />
                <input type="radio" id="Automation" name="Interest" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="Automation" />
                <span className="contact_radio_label w-form-label">Automation</span>
              </label>
              <label className="contact_radio w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact_radio_button w-radio-input" />
                <input type="radio" id="WebDev" name="Interest" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="Web Development" />
                <span className="contact_radio_label w-form-label">Web Development</span>
              </label>
              <label className="contact_radio w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact_radio_button w-radio-input" />
                <input type="radio" id="SeoContent" name="Interest" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="SEO & Content" />
                <span className="contact_radio_label w-form-label">SEO &amp; Content</span>
              </label>
              <label className="contact_radio w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact_radio_button w-radio-input" />
                <input type="radio" id="Advertising" name="Interest" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="Advertising" />
                <span className="contact_radio_label w-form-label">Advertising</span>
              </label>
              <label className="contact_radio w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact_radio_button w-radio-input" />
                <input type="radio" id="UiUxDesign" name="Interest" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="UI/UX Design" />
                <span className="contact_radio_label w-form-label">UI/UX Design</span>
              </label>
              <label className="contact_radio w-radio">
                <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact_radio_button w-radio-input" />
                <input type="radio" id="All" name="Interest" style={{ opacity: 0, position: "absolute", zIndex: -1 }} value="Full package" />
                <span className="contact_radio_label w-form-label">Full package</span>
              </label>
            </div>
          </div>
          <div className="contact_row">
            <label htmlFor="Message" className="text-mono is-smaller">Message</label>
            <textarea required placeholder="Give us a short project brief, deadline, budget, etc." maxLength={5000} id="Message" name="Message" className="contact_area w-input" />
          </div>
          <div className="div-block-2">
            <div className="text-mono is-smaller even-smaller">By clicking on &quot;Send&quot;, you accept our policy.</div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="contact_submit w-button"
              value={status === "sending" ? "Please wait..." : "Send"}
              disabled={status === "sending"}
            />
            <div className="hide-tablet" />
          </div>
        </div>
      </form>
      {status === "fail" && (
        <div className="w-form-fail" style={{ display: "block" }}>
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      )}
    </>
  );
}
