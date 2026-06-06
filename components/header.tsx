"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mobileNavItems, navItems } from "@/lib/site-data";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="relative h-12 w-12 overflow-hidden rounded-md bg-white shadow-card">
            <Image
              src="/logo-ia-solidaire.png"
              alt=""
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-lg font-bold leading-5 text-ink">
              IA Solidaire
            </span>
            <span className="block text-[0.68rem] font-semibold leading-4 text-secondary sm:text-xs">
              L'IA au cœur de l'utilité sociale
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-white text-primary shadow-sm" : "text-ink/75 hover:bg-white hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild href="/contact">
            Nous contacter
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/10 bg-white text-ink shadow-sm lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <Container className="py-4">
            <nav className="grid gap-2" aria-label="Navigation mobile">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 font-semibold text-ink/80 hover:bg-white hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
