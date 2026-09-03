import { Resend } from "resend";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "dantathedentalcompany@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Danta Website <onboarding@resend.dev>";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, phone, problem } = req.body || {};

  if (!name || !phone || !problem) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const { RESEND_API_KEY } = process.env;

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured on the server.");
    res.status(500).json({ error: "Email is not configured on the server yet." });
    return;
  }

  const clean = (value) => String(value).trim().slice(0, 1000);
  const safeName = clean(name);
  const safePhone = clean(phone);
  const safeProblem = clean(problem);

  const escapeHtml = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = `
    <div style="font-family:Georgia,'Times New Roman',serif;background:#faf5ef;padding:32px 16px;">
      <div style="max-width:520px;margin:0 auto;background:#fdfaf6;border:1px solid #e5d9cf;border-radius:16px;overflow:hidden;">
        <div style="background:#2a1f1a;padding:24px 28px;">
          <p style="margin:0;color:#c4975a;font-size:11px;letter-spacing:2px;text-transform:uppercase;">New Booking Request</p>
          <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;">Danta &ndash; The Dental Company</h1>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#8a7060;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:120px;vertical-align:top;">Name</td>
              <td style="padding:10px 0;color:#2a1f1a;font-size:15px;">${escapeHtml(safeName)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#8a7060;font-size:12px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;border-top:1px solid #e5d9cf;">Phone</td>
              <td style="padding:10px 0;color:#2a1f1a;font-size:15px;border-top:1px solid #e5d9cf;">${escapeHtml(safePhone)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#8a7060;font-size:12px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;border-top:1px solid #e5d9cf;">Concern</td>
              <td style="padding:10px 0;color:#2a1f1a;font-size:15px;border-top:1px solid #e5d9cf;white-space:pre-wrap;">${escapeHtml(safeProblem)}</td>
            </tr>
          </table>
          <p style="margin:22px 0 0;color:#b5a090;font-size:11px;">Submitted ${escapeHtml(submittedAt)} IST via the Danta website booking form.</p>
        </div>
      </div>
    </div>
  `;

  const text = [
    "New booking request from the Danta website",
    "",
    `Name: ${safeName}`,
    `Phone: ${safePhone}`,
    `Concern: ${safeProblem}`,
    "",
    `Submitted ${submittedAt} IST`,
  ].join("\n");

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      subject: `New Appointment Request — ${safeName}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend API error:", error);
      res.status(502).json({ error: "Failed to send email notification." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Email send failed:", err);
    res.status(500).json({ error: "Something went wrong sending the notification." });
  }
}
