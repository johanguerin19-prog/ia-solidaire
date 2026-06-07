import { NextResponse } from "next/server";
import { contact } from "@/lib/site-data";

const brevoEmailEndpoint = "https://api.brevo.com/v3/smtp/email";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequest = {
  name?: unknown;
  organization?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildTextContent({
  name,
  organization,
  email,
  phone,
  message
}: {
  name: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}) {
  return [
    "Nouveau message depuis le formulaire IA Solidaire",
    "",
    `Nom: ${name}`,
    `Structure: ${organization}`,
    `Email: ${email}`,
    phone ? `Téléphone: ${phone}` : "Téléphone: non renseigné",
    "",
    "Message:",
    message
  ].join("\n");
}

function buildHtmlContent({
  name,
  organization,
  email,
  phone,
  message
}: {
  name: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}) {
  return `
    <h2>Nouveau message depuis le formulaire IA Solidaire</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Structure :</strong> ${escapeHtml(organization)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Téléphone :</strong> ${phone ? escapeHtml(phone) : "non renseigné"}</p>
    <h3>Message</h3>
    <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
  `;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactRequest | null;

  const name = asTrimmedString(body?.name);
  const organization = asTrimmedString(body?.organization);
  const email = asTrimmedString(body?.email).toLowerCase();
  const phone = asTrimmedString(body?.phone);
  const message = asTrimmedString(body?.message);

  if (!name || !organization || !emailPattern.test(email) || message.length < 12) {
    return NextResponse.json(
      { message: "Merci de compléter les champs obligatoires." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const recipientEmail = process.env.BREVO_CONTACT_RECIPIENT_EMAIL ?? contact.email;
  const senderEmail = process.env.BREVO_SENDER_EMAIL ?? contact.email;
  const senderName = process.env.BREVO_SENDER_NAME ?? "IA Solidaire";

  if (!apiKey || !emailPattern.test(recipientEmail) || !emailPattern.test(senderEmail)) {
    return NextResponse.json(
      {
        message:
          "L'envoi du message n'est pas encore configuré. Merci de réessayer plus tard."
      },
      { status: 503 }
    );
  }

  const response = await fetch(brevoEmailEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify({
      sender: {
        email: senderEmail,
        name: senderName
      },
      to: [
        {
          email: recipientEmail,
          name: "IA Solidaire"
        }
      ],
      replyTo: {
        email,
        name
      },
      subject: `Nouveau message IA Solidaire - ${organization}`,
      textContent: buildTextContent({ name, organization, email, phone, message }),
      htmlContent: buildHtmlContent({ name, organization, email, phone, message })
    })
  }).catch(() => null);

  if (!response?.ok) {
    return NextResponse.json(
      {
        message:
          "Le message n'a pas pu être envoyé. Merci de réessayer ou d'écrire directement à contact@iasolidaire.fr."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Merci, votre message a bien été envoyé."
  });
}
