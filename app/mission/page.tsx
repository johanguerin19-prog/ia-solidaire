import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ethicalCommitments, values } from "@/lib/site-data";

const missionValues = values.map((value) => {
  const descriptions: Record<string, string> = {
    Inclusion:
      "Des outils conçus pour les réalités du terrain, sans exclure les publics les plus éloignés du numérique.",
    Éthique: "Une IA utilisée avec discernement, transparence et responsabilité.",
    Accessibilité:
      "Des outils simples à comprendre, faciles à adopter et immédiatement utiles.",
    "Innovation utile":
      "Chaque usage doit produire un bénéfice concret pour les équipes ou les publics accompagnés.",
    Transmission:
      "Développer l'autonomie des équipes plutôt que créer une dépendance aux experts ou aux outils."
  };

  return {
    ...value,
    description: descriptions[value.title] ?? value.description
  };
});

const responsibleCommitments = ethicalCommitments.map((commitment) => {
  const descriptions: Record<string, string> = {
    RGPD:
      "Choisir les bons outils et limiter les risques liés aux données personnelles.",
    Confidentialité: "Préserver les informations internes, sociales et individuelles.",
    "IA Act":
      "Anticiper les nouvelles obligations européennes liées à l'usage de l'IA.",
    "Supervision humaine":
      "Conserver un contrôle humain sur les décisions importantes."
  };

  return {
    ...commitment,
    description: descriptions[commitment.title] ?? commitment.description
  };
});

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
        title="Mettre l'intelligence artificielle au service des missions sociales"
        description="L'IA peut faire gagner du temps, faciliter le travail des équipes et améliorer certains processus. À condition qu'elle reste compréhensible, maîtrisée et adaptée aux réalités du terrain social. Chez IA Solidaire, nous accompagnons les associations, structures d'insertion et acteurs de l'économie sociale et solidaire pour identifier des usages réellement utiles, sans perdre de vue l'humain, l'éthique et la finalité sociale."
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
            title="L'IA n'a de valeur que si elle renforce l'action humaine"
            description="La technologie n'est pas une finalité. Chaque usage doit répondre à un besoin concret, soutenir les professionnels et préserver la qualité de l'accompagnement."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {missionValues.map((value) => (
              <InfoCard key={value.title} {...value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="IA responsable"
            title="Une IA responsable, adaptée aux exigences du secteur social"
            description="Les structures de l'ESS manipulent souvent des données sensibles et accompagnent des publics vulnérables. L'intégration de l'IA doit donc s'appuyer sur des règles claires et une vigilance particulière."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {responsibleCommitments.map((commitment) => (
              <InfoCard key={commitment.title} {...commitment} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Échangeons sur votre vision d'une IA utile et responsable"
        description="Que vous soyez au stade de la découverte ou déjà engagé dans une démarche IA, nous pouvons réfléchir ensemble aux usages les plus adaptés à votre structure."
        buttonLabel="Prendre contact"
      />
    </>
  );
}
