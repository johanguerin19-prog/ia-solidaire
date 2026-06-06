import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, BrainCircuit, CheckCircle2, Handshake } from "lucide-react";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les offres IA Solidaire : formation collective, accompagnement individualisé et Académie IA Solidaire."
};

const offers: {
  title: string;
  subtitle: string;
  id: string;
  audience: string;
  objectives: string[];
  learningTitle: string;
  learningItems: string[];
  extraTitle?: string;
  extraItems?: string[];
  format: string[];
  result: string;
  idealFor: string;
  icon: LucideIcon;
  accent: "secondary" | "violet" | "orange";
}[] = [
  {
    title: "Formation collective d'initiation à l'IA",
    subtitle: "Découvrir les usages utiles de l'IA et acquérir les bons réflexes.",
    id: "formation-collective",
    audience:
      "Associations, SIAE et structures ESS qui souhaitent sensibiliser leurs équipes et découvrir les usages de l'intelligence artificielle.",
    objectives: [
      "Comprendre ce qu'est réellement l'IA",
      "Découvrir les opportunités et limites",
      "Identifier les premiers cas d'usage utiles",
      "Adopter les bonnes pratiques"
    ],
    learningTitle: "Ce que les participants apprennent",
    learningItems: [
      "Les fondamentaux de l'IA générative",
      "Les outils accessibles aux équipes",
      "Les usages adaptés à l'ESS",
      "Les risques et points de vigilance"
    ],
    format: [
      "Formation collective",
      "Ateliers pratiques",
      "Cas concrets ESS",
      "Questions / réponses"
    ],
    result:
      "Les équipes repartent avec une vision claire, réaliste et opérationnelle de l'intelligence artificielle.",
    idealFor:
      "Associations et structures souhaitant sensibiliser leurs équipes avant de lancer une démarche IA.",
    icon: BookOpenCheck,
    accent: "secondary"
  },
  {
    title: "Accompagnement individualisé",
    subtitle: "Identifier les usages prioritaires et passer à l'action.",
    id: "accompagnement-individualise",
    audience: "Structures souhaitant passer de la découverte à la mise en œuvre.",
    objectives: [
      "Identifier les usages prioritaires",
      "Sécuriser les pratiques",
      "Construire une feuille de route",
      "Accompagner le changement"
    ],
    learningTitle: "Ce que comprend l'accompagnement",
    learningItems: [
      "Diagnostic des besoins",
      "Analyse des processus existants",
      "Sélection des cas d'usage",
      "Mise en œuvre progressive",
      "Accompagnement des équipes"
    ],
    format: [
      "Accompagnement sur mesure",
      "Réunions de travail",
      "Tests sur cas réels",
      "Suivi opérationnel"
    ],
    result:
      "La structure dispose d'usages IA concrets, adaptés à son fonctionnement et réellement utilisés par les équipes.",
    idealFor:
      "Structures souhaitant intégrer l'IA dans leurs pratiques professionnelles.",
    icon: Handshake,
    accent: "violet"
  },
  {
    title: "Académie IA Solidaire",
    subtitle: "Plateforme de formation continue à l'IA pour les équipes ESS",
    id: "academie-ia-solidaire",
    audience:
      "Associations, structures d'insertion et acteurs de l'ESS souhaitant former durablement leurs équipes à l'intelligence artificielle sans mobiliser continuellement du temps de formation en présentiel.",
    objectives: [
      "Développer les compétences IA des collaborateurs",
      "Maintenir les équipes à jour malgré l'évolution rapide des outils",
      "Favoriser l'autonomie dans les usages professionnels",
      "Diffuser les bonnes pratiques au sein de la structure"
    ],
    learningTitle: "Ce que comprend la plateforme",
    learningItems: [
      "Parcours de formation accessibles en ligne",
      "Modules courts et progressifs",
      "Cas pratiques adaptés aux métiers de l'ESS",
      "Tutoriels vidéo et démonstrations",
      "Ressources téléchargeables",
      "FAQ et guides pratiques",
      "Veille sur les nouveaux outils et usages"
    ],
    extraTitle: "Les avantages pour votre structure",
    extraItems: [
      "Former plusieurs collaborateurs avec une seule solution",
      "Accès disponible 24h/24 et 7j/7",
      "Apprentissage au rythme de chacun",
      "Réduction des besoins de formation répétitive",
      "Mise à jour continue des contenus",
      "Déploiement simple sans compétence technique particulière"
    ],
    format: [
      "Plateforme accessible en ligne",
      "Accès individuel sécurisé",
      "Utilisation sur ordinateur, tablette ou smartphone",
      "Abonnement annuel pour la structure"
    ],
    result:
      "Les collaborateurs développent progressivement leur autonomie dans l'utilisation de l'intelligence artificielle et la structure bénéficie d'une montée en compétences continue sans dépendre uniquement des formations ponctuelles.",
    idealFor:
      "Organisations souhaitant maintenir les compétences IA de leurs équipes dans la durée.",
    icon: BrainCircuit,
    accent: "orange"
  }
];

const academyPlatformAdvantages = [
  "Accessible 24h/24 et 7j/7",
  "Formation au rythme de chacun",
  "Accès pour plusieurs collaborateurs",
  "Compatible ordinateur, tablette et smartphone",
  "Contenus mis à jour régulièrement",
  "Ressources accessibles à tout moment"
];

function OfferList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm font-medium text-ink/80">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OfferTextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-ink/75">{text}</p>
    </div>
  );
}

function OfferSection({
  offer,
  index
}: {
  offer: (typeof offers)[number];
  index: number;
}) {
  const Icon = offer.icon;
  const iconClass =
    offer.accent === "orange"
      ? "bg-orange"
      : offer.accent === "violet"
        ? "bg-violet"
        : "bg-secondary";

  return (
    <section id={offer.id} className="slide-panel scroll-mt-28 rounded-lg p-6 text-ink shadow-sm sm:p-8 lg:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <div className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md ${iconClass} text-white shadow-card`}>
              <Icon aria-hidden="true" className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-secondary">
              Offre {index + 1}
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {offer.title}
          </h2>
          <span aria-hidden="true" className="accent-underline" />
          <p className="mt-5 text-lg font-bold leading-8 text-primary">
            {offer.subtitle}
          </p>
        </div>

        <div className="mt-9 grid gap-6">
          <OfferTextBlock title="Pour qui ?" text={offer.audience} />

          <div className="rounded-lg border border-secondary/25 bg-cream p-7 shadow-card sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-secondary">
              Résultat attendu
            </p>
            <p className="mt-4 text-lg font-semibold leading-8 text-ink">
              {offer.result}
            </p>
          </div>

          {offer.title === "Académie IA Solidaire" ? (
            <div className="rounded-lg border border-secondary/25 bg-white p-6 shadow-sm sm:p-7">
              <h3 className="font-display text-2xl font-bold text-ink">
                Les avantages de la plateforme
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {academyPlatformAdvantages.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md bg-cream p-4 font-semibold text-ink/85">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <OfferList title="Objectifs" items={offer.objectives} />
          <OfferList title={offer.learningTitle} items={offer.learningItems} />
          {offer.extraItems && offer.extraTitle ? (
            <OfferList title={offer.extraTitle} items={offer.extraItems} />
          ) : null}
          {offer.title === "Académie IA Solidaire" ? (
            <OfferList
              title="Les avantages pour les collaborateurs"
              items={[
                "Se former quand ils le souhaitent",
                "Revenir sur les contenus autant de fois que nécessaire",
                "Progresser étape par étape",
                "Découvrir des usages directement applicables dans leur quotidien professionnel"
              ]}
            />
          ) : null}
          <OfferList title="Format" items={offer.format} />
          <OfferTextBlock title="Idéal pour" text={offer.idealFor} />

          <div className="mt-2 border-t border-primary/10 pt-7">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-secondary hover:bg-cream"
            >
              Découvrir cette offre
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Trois façons d'intégrer l'IA dans votre structure"
        description="Que vous souhaitiez découvrir l'intelligence artificielle, structurer vos premiers usages ou accompagner durablement vos équipes, IA Solidaire propose un format adapté à votre niveau de maturité et à vos ressources."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8">
            {offers.map((offer, index) => (
              <OfferSection key={offer.title} offer={offer} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Quel accompagnement est le plus adapté à votre structure ?"
        description="Lors d'un premier échange, nous analysons vos besoins, vos contraintes et votre niveau de maturité afin d'identifier le format le plus pertinent pour vos équipes."
        buttonLabel="Planifier un échange"
      />
    </>
  );
}
