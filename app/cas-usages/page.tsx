import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
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
        title="Cas d'usage"
        description="L'objectif n'est pas de tout automatiser, mais d'identifier les tâches où l'IA peut aider les équipes à mieux préparer, rédiger, transmettre et accompagner."
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
      <CTASection
        title="Un cas d'usage vous parle ?"
        description="Nous pouvons partir de vos documents, de vos processus et de vos irritants quotidiens pour prioriser les premiers usages."
      />
    </>
  );
}
