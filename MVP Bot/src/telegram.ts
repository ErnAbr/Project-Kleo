import "dotenv/config";

export async function sendTelegramAlert(message: string) {
  const telegram_bot_token = process.env.TELEGRAM_BOT_TOKEN;
  const telegram_chat_id = process.env.TELEGRAM_CHAT_ID;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${telegram_bot_token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: telegram_chat_id, text: message }),
      },
    );

    if (!response.ok) {
      console.error("Telegram rejected the message:", await response.text());
    }
  } catch (error) {
    console.error("Failed to reach Telegram:", error);
  }
}
