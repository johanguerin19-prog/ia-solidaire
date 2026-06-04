import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/container";
import { contact, navItems } from "@/lib/site-data";

export function Footer() {
  const legalLinks = [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
    { href: "/gestion-cookies", label: "Gestion des cookies" }
  ];

  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-md bg-white">
              <Image
                src="/logo-ia-solidaire.png"
                alt=""
                fill
                className="object-contain"
                sizes="56px"
              />
            </span>
            <p className="font-display text-2xl font-bold">IA Solidaire</p>
          </div>
          <span aria-hidden="true" className="mt-4 block h-2 w-20 rounded-full bg-gradient-to-r from-violet via-secondary to-orange" />
          <p className="mt-4 max-w-md leading-7 text-white/78">
            Conseil, formation et accompagnement IA pour les structures de
            l'Économie Sociale et Solidaire et de l'Insertion par l'Activité
            Économique.
          </p>
        </div>
        <div>
          <p className="font-display font-bold">Navigation</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-white/78 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display font-bold">Informations légales</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link className="text-white/78 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display font-bold">Contact</p>
          <ul className="mt-4 grid gap-3 text-sm text-white/78">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" className="h-4 w-4" />
                {contact.email}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-white" href={contact.linkedin}>
                <Linkedin aria-hidden="true" className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/15">
        <Container className="py-5 text-sm text-white/65">
          © {new Date().getFullYear()} IA Solidaire. Site vitrine V1.
        </Container>
      </div>
    </footer>
  );
}
