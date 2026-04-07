import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email: body.email,
      attributes: {
        FIRSTNAME: body.name,
        SMS: body.phone,
        CITY: body.city,
        INTEREST: body.interest,
      },
      listIds: [4],
      updateEnabled: true,
    }),
  });

  return NextResponse.json({ success: true });
}
