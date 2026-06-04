import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Consultant / formateur",
  description:
    "Présentation de Johan Guérin, consultant IA Solidaire, chef de projet ESS, formateur IA et expert terrain insertion."
};

export default function ConsultantPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultant / formateur"
        title="Consultant / formateur"
        description="L'approche d'IA Solidaire réunit expertise terrain, pédagogie et culture de l'innovation responsable."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="slide-panel rounded-lg p-6">
            <div className="flex aspect-[4/5] items-center justify-center rounded-lg border-2 border-dashed border-secondary/50 bg-white text-center">
              <div>
                <p className="font-display text-2xl font-bold text-ink">Johan Guérin</p>
                <p className="mt-2 text-ink/65">Photo professionnelle à ajouter</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Profil"
              title="Un profil hybride entre ESS, terrain et intelligence artificielle"
              description="Johan Guérin accompagne les structures dans des démarches concrètes, avec une attention forte portée à l'utilité, à l'autonomie et à la sécurité des usages."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Chef de projet ESS",
                "Expert terrain insertion",
                "Formateur IA",
                "Développeur no-code",
                "Consultant innovation sociale"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md bg-white p-4 font-semibold text-ink shadow-sm">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-secondary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="slide-surface py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Parcours",
              text: "Une expérience orientée projet, accompagnement de structures et transformation des pratiques dans des environnements à forte utilité sociale."
            },
            {
              title: "Expérience ESS",
              text: "Une compréhension des contraintes de terrain : temps limité, financements, reporting, accompagnement des publics et coordination partenariale."
            },
            {
              title: "Méthode",
              text: "Partir des besoins réels, tester sur des cas simples, sécuriser les pratiques et transmettre aux équipes pour construire l'autonomie."
            }
          ].map((item) => (
            <article key={item.title} className="premium-card rounded-lg p-6 pl-8">
              <h2 className="font-display text-2xl font-bold text-ink">{item.title}</h2>
              <p className="mt-4 leading-8 text-ink/75">{item.text}</p>
            </article>
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
