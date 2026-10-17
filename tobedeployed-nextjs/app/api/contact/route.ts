import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "tobedeployedd@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "TBD <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  const { name, Email, Phone, Interest, Message } = await req.json();

  if (!Email || !Message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Notify the business inbox
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: Email,
      subject: `New contact form submission from ${name || "Website visitor"}`,
      text: [
        `Name: ${name || "-"}`,
        `Email: ${Email}`,
        `Phone: ${Phone || "-"}`,
        `Interest: ${Interest || "-"}`,
        "",
        "Message:",
        Message,
      ].join("\n"),
    });

    // Auto-reply to the person who submitted the form
    await resend.emails.send({
      from: FROM_EMAIL,
      to: Email,
      subject: "We received your message — TBD",
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 16px">Thanks for reaching out${name ? `, ${escapeHtml(name)}` : ""}!</h2>
          <p>We've received your message and someone from our team will get back to you shortly.</p>
          <p style="color:#666;font-size:14px;margin-top:24px">— The TBD team</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact form error", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
