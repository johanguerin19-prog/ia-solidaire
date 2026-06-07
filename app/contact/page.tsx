import type { Metadata } from "next";
import { Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { NewsletterSection } from "@/components/newsletter-section";
import { PageHero } from "@/components/page-hero";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez IA Solidaire pour échanger sur l'adoption de l'intelligence artificielle dans votre structure ESS ou IAE."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact"
        description="Le formulaire permet de préparer un premier échange qualifié autour de votre structure et des usages qui vous intéressent."
      />
      <section id="formulaire-contact" className="slide-surface scroll-mt-28 py-16 sm:py-20">
        <Container className="max-w-4xl">
          <ContactForm />
        </Container>
      </section>
      <NewsletterSection
        title="Chaque mois, une veille IA spécialement conçue pour les associations et structures d'insertion"
        description="Recevez gratuitement des outils testés, des exemples concrets d'usages, des ressources pratiques et les évolutions importantes à suivre pour intégrer l'IA dans votre structure avec recul et responsabilité."
        secondaryText="Lecture en moins de 5 minutes."
        buttonLabel="Recevoir gratuitement la veille IA"
      />
      <section className="bg-cream py-16 sm:py-20">
        <Container className="max-w-4xl">
          <aside className="premium-card rounded-lg p-6 pl-8">
            <h2 className="font-display text-2xl font-bold text-ink">Coordonnées</h2>
            <p className="mt-4 leading-7 text-ink/75">
              Vous pouvez aussi utiliser les coordonnées ci-dessous.
            </p>
            <ul className="mt-6 grid gap-4">
              <li>
                <a className="flex items-center gap-3 font-semibold text-ink hover:text-primary" href={`mailto:${contact.email}`}>
                  <Mail aria-hidden="true" className="h-5 w-5" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 font-semibold text-ink hover:text-primary" href={contact.linkedin}>
                  <Linkedin aria-hidden="true" className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
