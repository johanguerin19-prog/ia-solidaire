import { NextResponse } from "next/server";

const brevoContactsEndpoint = "https://api.brevo.com/v3/contacts";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: unknown;
  } | null;

  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Indiquez une adresse email valide." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);

  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    return NextResponse.json(
      {
        message:
          "L'inscription newsletter n'est pas encore configurée. Merci de réessayer plus tard."
      },
      { status: 503 }
    );
  }

  const response = await fetch(brevoContactsEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
      attributes: {
        SOURCE: "Site IA Solidaire"
      }
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        message:
          "L'inscription n'a pas pu être enregistrée. Merci de réessayer."
      },
      { status: response.status === 400 ? 400 : 502 }
    );
  }

  return NextResponse.json({
    message: "Merci, votre inscription à la veille IA Solidaire est confirmée."
  });
}
