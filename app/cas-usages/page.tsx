import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { useCases } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Cas d'usage",
  description:
    "Découvrez des cas d'usage concrets de l'intelligence artificielle pour les structures ESS et IAE."
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cas d'usage"
        title="Des usages IA concrets pour les réalités de l'ESS et de l'insertion"
        description="L'objectif n'est pas d'intégrer l'intelligence artificielle à tout prix, mais d'identifier les tâches où l'IA peut réellement soulager les équipes : rédiger, synthétiser, préparer, former, communiquer et sécuriser les pratiques."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((useCase) => (
              <InfoCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </Container>
      </section>
      <section className="slide-surface py-16 sm:py-20">
        <Container>
          <SectionHeader
            title="Comment choisir les bons cas d'usage ?"
            description="Tous les usages IA ne se valent pas. IA Solidaire aide les structures à prioriser les cas les plus utiles, les moins risqués et les plus faciles à adopter par les équipes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Identifier les problématiques",
                description:
                  "Repérer les tâches répétitives, chronophages ou difficiles à formaliser dans le quotidien des équipes.",
                icon: useCases[0].icon
              },
              {
                title: "Tester sur un cas simple",
                description:
                  "Expérimenter avec un exemple réel avant de généraliser l'usage à l'ensemble d'un service ou d'une structure.",
                icon: useCases[1].icon
              },
              {
                title: "Sécuriser les pratiques",
                description:
                  "Définir les règles d'usage, les limites, les données à éviter et les situations nécessitant une supervision humaine.",
                icon: useCases[4].icon
              }
            ].map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Identifions ensemble vos premiers cas d'usage IA"
        description="À partir de vos documents, de vos processus et de vos problématiques quotidiennes, nous pouvons repérer les usages les plus utiles, les plus simples à tester et les plus adaptés à votre structure."
        buttonLabel="Planifier un échange"
      />
    </>
  );
}
