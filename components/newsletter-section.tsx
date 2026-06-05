"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSection({
  title = "L'IA évolue vite. L'ESS ne doit pas rester à l'écart.",
  description = "Recevez gratuitement notre veille mensuelle dédiée aux associations, structures d'insertion et acteurs de l'économie sociale et solidaire.",
  secondaryText = "En moins de 5 minutes de lecture, découvrez les outils, usages et opportunités qui peuvent faire gagner du temps à vos équipes tout en respectant vos valeurs.",
  buttonLabel = "Recevoir la veille IA Solidaire"
}: {
  title?: string;
  description?: string;
  secondaryText?: string;
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Indiquez une adresse email valide.");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "L'inscription n'a pas pu aboutir.");
      }

      setEmail("");
      setStatus("success");
      setMessage(result.message ?? "Votre inscription est bien prise en compte.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Merci de réessayer."
      );
    }
  }

  return (
    <section className="slide-surface py-16 sm:py-20">
      <Container>
        <div className="slide-panel grid gap-8 rounded-lg p-7 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-secondary">
              Newsletter
            </p>
            <h2 className="max-w-3xl font-display text-3xl font-bold text-ink sm:text-4xl">
              {title}
            </h2>
            <span aria-hidden="true" className="accent-underline" />
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
              {description}
            </p>
            {secondaryText ? (
              <p className="mt-4 max-w-3xl leading-7 text-ink/72">
                {secondaryText}
              </p>
            ) : null}
          </div>

          <form className="premium-card rounded-lg p-6 pl-8" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="newsletter-email">
              Votre adresse email
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              required
              autoComplete="email"
              className="mt-2 w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-ink shadow-sm transition placeholder:text-ink/45 focus:border-secondary"
              placeholder="vous@structure.fr"
              aria-describedby={message ? "newsletter-message" : undefined}
              aria-invalid={status === "error"}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status !== "idle") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
            />
            <Button className="mt-5 w-full" type="submit" disabled={status === "loading"}>
              {status === "loading"
                ? "Inscription en cours..."
                : buttonLabel}
            </Button>
            {message ? (
              <p
                id="newsletter-message"
                className={`mt-4 rounded-md p-4 text-sm font-semibold ${
                  status === "success"
                    ? "bg-secondary/10 text-ink"
                    : "bg-red-50 text-red-700"
                }`}
                role="status"
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
