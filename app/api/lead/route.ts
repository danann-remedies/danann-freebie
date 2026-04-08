import { NextResponse } from "next/server";

function formatPhone(phone: string) {
  if (!phone) return "";

  // Remove spaces, dashes, brackets
  let cleaned = phone.replace(/[\s\-()]/g, "");

  // If starts with 0 → remove it
  if (cleaned.startsWith("0")) {
    cleaned = cleaned.substring(1);
  }

  // If already starts with + → keep it
  if (cleaned.startsWith("+")) {
    return cleaned;
  }

  // If starts with 91 (without +)
  if (cleaned.startsWith("91")) {
    return `+${cleaned}`;
  }

  // Otherwise assume Indian number
  return `+91${cleaned}`;
}

export async function POST(req: Request) {
  const body = await req.json();

  const formattedPhone = formatPhone(body.phone);

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email: body.email,
        attributes: {
          FIRSTNAME: body.name,
          SMS: formattedPhone,
          CITY: body.city,
          INTEREST: body.interest,
        },
        listIds: [4],
        updateEnabled: true,
      }),
    });

    const data = await res.json();

    return NextResponse.json({ success: true, data });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Brevo API error" },
      { status: 500 },
    );
  }
}
