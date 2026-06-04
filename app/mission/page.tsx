import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ethicalCommitments, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "La mission d'IA Solidaire : rendre l'intelligence artificielle accessible, responsable et utile aux structures ESS et IAE."
};

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission"
        title="Mission"
        description="IA Solidaire défend une intelligence artificielle utile, compréhensible et encadrée, au service des équipes et des publics accompagnés."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="premium-card rounded-lg p-7 pl-9">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-secondary">
              Vision
            </p>
            <h2 className="font-display text-3xl font-bold text-ink">
              L'IA comme levier d'impact social
            </h2>
            <p className="mt-4 leading-8 text-ink/75">
              Bien utilisée, l'IA peut libérer du temps, améliorer la qualité
              des supports, renforcer les équipes et faciliter la transmission
              des savoirs.
            </p>
          </article>
          <article className="premium-card rounded-lg p-7 pl-9">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-secondary">
              Mission
            </p>
            <h2 className="font-display text-3xl font-bold text-ink">
              Passer de la curiosité à l'usage responsable
            </h2>
            <p className="mt-4 leading-8 text-ink/75">
              IA Solidaire aide les structures à comprendre, prioriser,
              expérimenter et sécuriser les usages IA réellement utiles à leur
              mission sociale.
            </p>
          </article>
        </Container>
      </section>

      <section className="slide-surface py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Valeurs"
            title="Une innovation qui reste au service des personnes"
            description="Chaque accompagnement doit préserver la confiance, l'autonomie des équipes et la qualité de la relation humaine."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <InfoCard key={value.title} {...value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="IA responsable"
            title="Des engagements éthiques dès les premiers usages"
            description="L'adoption de l'IA doit intégrer les risques liés aux données, aux décisions, aux biais et à la confidentialité."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ethicalCommitments.map((commitment) => (
              <InfoCard key={commitment.title} {...commitment} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
