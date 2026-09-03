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

  const {
    WHATSAPP_TOKEN,
    WHATSAPP_PHONE_NUMBER_ID,
    WHATSAPP_NOTIFY_TO,
    WHATSAPP_TEMPLATE_NAME,
  } = process.env;

  if (
    !WHATSAPP_TOKEN ||
    !WHATSAPP_PHONE_NUMBER_ID ||
    !WHATSAPP_NOTIFY_TO ||
    !WHATSAPP_TEMPLATE_NAME
  ) {
    console.error("WhatsApp env vars are not configured on the server.");
    res.status(500).json({ error: "WhatsApp is not configured on the server yet." });
    return;
  }

  const clean = (value) => String(value).replace(/\s+/g, " ").trim().slice(0, 300);

  try {
    const metaRes = await fetch(
      `https://graph.facebook.com/v20.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: WHATSAPP_NOTIFY_TO,
          type: "template",
          template: {
            name: WHATSAPP_TEMPLATE_NAME,
            language: { code: "en" },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: clean(name) },
                  { type: "text", text: clean(phone) },
                  { type: "text", text: clean(problem) },
                ],
              },
            ],
          },
        }),
      }
    );

    const data = await metaRes.json();

    if (!metaRes.ok) {
      console.error("WhatsApp API error:", data);
      res.status(502).json({ error: "Failed to send WhatsApp notification." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("WhatsApp send failed:", err);
    res.status(500).json({ error: "Something went wrong sending the notification." });
  }
}
