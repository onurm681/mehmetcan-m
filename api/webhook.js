import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const webhookURL = "DISCORD_WEBHOOK_URLUNUZU_BURAYA_YAZIN";

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (response.ok) {
      res.status(200).json({ message: "Bildirim gönderildi." });
    } else {
      res.status(500).json({ error: "Webhook gönderilemedi." });
    }
  } catch (error) {
    res.status(500).json({ error: "Sunucu hatası." });
  }
}
