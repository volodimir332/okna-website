import { NextResponse } from "next/server";

async function sendTelegram(
  name: string,
  phone: string,
  email: string,
  preferredDate: string,
  preferredTime: string
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return;
  }

  const message = [
    "🔔 Nová poptávka z obklady-ostrava.cz!",
    "",
    `👤 Jméno: ${name}`,
    `📞 Telefon: ${phone}`,
    email ? `📧 Email: ${email}` : "",
    preferredDate && preferredTime
      ? `📅 Termín: ${preferredDate} v ${preferredTime}`
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    }
  );

  if (!res.ok) {
    console.error("Telegram error:", await res.text());
  }
}

async function createNotionEntry(
  name: string,
  phone: string,
  email: string,
  preferredDate: string,
  preferredTime: string
) {
  const notionKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionKey || !databaseId) {
    console.error("Missing NOTION env:", { hasKey: !!notionKey, hasDb: !!databaseId });
    return { error: "missing_env" };
  }

  const properties: Record<string, unknown> = {
    Jméno: {
      title: [{ text: { content: name } }],
    },
    Telefon: {
      phone_number: phone,
    },
    Status: {
      status: { name: "Nový" },
    },
    Zdroj: {
      select: { name: "Web" },
    },
  };

  if (email) {
    properties.Email = { email };
  }

  if (preferredDate) {
    properties.Datum = {
      date: { start: preferredDate },
    };
  }

  if (preferredTime) {
    properties["Poznámky"] = {
      rich_text: [
        {
          text: {
            content: `Preferovaný čas konzultace: ${preferredTime}`,
          },
        },
      ],
    };
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionKey}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Notion error:", errText);
    return { error: errText };
  }

  return { success: true };
}

export async function POST(request: Request) {
  try {
    const { name, phone, email, preferredDate, preferredTime } =
      await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Jméno a telefon jsou povinné." },
        { status: 400 }
      );
    }

    // Send Telegram + create Notion entry in parallel
    await Promise.all([
      sendTelegram(name, phone, email, preferredDate, preferredTime),
      createNotionEntry(name, phone, email, preferredDate, preferredTime),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Interní chyba serveru." },
      { status: 500 }
    );
  }
}
