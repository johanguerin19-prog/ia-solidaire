"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const storageKey = "ia-solidaire-cookie-banner-dismissed";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem(storageKey) !== "true"
  );

  function dismiss() {
    window.localStorage.setItem(storageKey, "true");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6">
      <div className="slide-panel mx-auto flex max-w-5xl flex-col gap-5 rounded-lg p-5 text-ink sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl">
          <p className="font-display text-lg font-bold">
            🍪 Informations sur les cookies
          </p>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            Ce site utilise uniquement des cookies strictement nécessaires à son
            fonctionnement et à votre sécurité. Aucun cookie publicitaire, de
            suivi marketing ou de mesure d'audience n'est utilisé.
          </p>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            En poursuivant votre navigation, vous acceptez l'utilisation de ces
            cookies indispensables.
          </p>
          <Link
            className="mt-3 inline-flex text-sm font-bold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-ink"
            href="/gestion-cookies"
          >
            En savoir plus
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button type="button" onClick={dismiss}>
            J'ai compris
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/10 bg-white text-ink shadow-sm transition hover:bg-cream"
            aria-label="Fermer le bandeau cookies"
            onClick={dismiss}
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
