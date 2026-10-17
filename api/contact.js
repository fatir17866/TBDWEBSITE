const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'tobedeployedd@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'TBD <onboarding@resend.dev>';

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const { name, Email, Phone, Interest, Message } = req.body || {};

  if (!Email || !Message) {
    res.status(400).json({ ok: false, error: 'Missing required fields' });
    return;
  }

  try {
    // Notify the business inbox
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: Email,
      subject: `New contact form submission from ${name || 'Website visitor'}`,
      text: [
        `Name: ${name || '-'}`,
        `Email: ${Email}`,
        `Phone: ${Phone || '-'}`,
        `Interest: ${Interest || '-'}`,
        '',
        'Message:',
        Message,
      ].join('\n'),
    });

    // Auto-reply to the person who submitted the form
    await resend.emails.send({
      from: FROM_EMAIL,
      to: Email,
      subject: 'We received your message — TBD',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 16px">Thanks for reaching out${name ? `, ${escapeHtml(name)}` : ''}!</h2>
          <p>We've received your message and someone from our team will get back to you shortly.</p>
          <p style="color:#666;font-size:14px;margin-top:24px">— The TBD team</p>
        </div>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact form error', err);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
};
