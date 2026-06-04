import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les offres IA Solidaire : formation collective, accompagnement individualisé et Académie IA Solidaire."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services"
        description="Chaque format vise une montée en compétence progressive, adaptée aux ressources et aux enjeux des structures ESS et IAE."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>
      <section className="slide-surface py-16 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            "Diagnostic des usages prioritaires",
            "Formation par la pratique",
            "Cadre éthique et RGPD"
          ].map((item) => (
            <div key={item} className="premium-card rounded-lg p-6 text-center">
              <p className="font-display text-xl font-bold text-ink">{item}</p>
            </div>
          ))}
        </Container>
      </section>
      <CTASection
        title="Choisissons le bon format d'accompagnement"
        description="Un premier échange permet de comprendre votre contexte et de recommander le format le plus adapté."
      />
    </>
  );
}
