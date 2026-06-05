import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { consultantPortraitSrc } from "@/lib/consultant-portrait";

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
        title="Un accompagnement IA conçu par un professionnel du terrain ESS"
        description={
          <>
            IA Solidaire est né d'un constat simple : les structures de
            l'économie sociale et solidaire ont besoin d'un accompagnement qui
            comprend leurs réalités, leurs contraintes et leurs missions.
            <span className="mt-3 block">
              L'objectif n'est pas d'ajouter une technologie de plus, mais
              d'identifier les usages qui apportent une valeur concrète aux
              équipes et aux publics accompagnés.
            </span>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="slide-panel rounded-lg p-6">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-secondary/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={consultantPortraitSrc}
                alt="Portrait illustré de Johan Guérin, fondateur d'IA Solidaire"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Profil"
              title="Un profil hybride entre ESS, terrain et intelligence artificielle"
              description="Chef de projet dans l'économie sociale et solidaire depuis 2019, Johan Guérin accompagne les structures dans leurs projets, leurs transformations et leurs enjeux de terrain. Cette expérience est aujourd'hui mise au service d'une intégration pragmatique et responsable de l'intelligence artificielle au sein des associations, structures d'insertion et acteurs de l'ESS."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Chef de projet ESS",
                "Spécialiste ESS & insertion",
                "Formateur IA",
                "IA & automatisation des processus",
                "Consultant innovation sociale",
                "Responsable d'établissement ESS"
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

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Expertise ESS"
            title="Pourquoi travailler avec un consultant spécialisé ESS ?"
            description="L'intelligence artificielle peut apporter beaucoup aux structures de l'économie sociale et solidaire, mais son intégration nécessite une compréhension fine des réalités de terrain, des contraintes opérationnelles et des missions sociales."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Compréhension immédiate du terrain",
                text: "Je connais les réalités des associations, SIAE, ACI, accompagnements socio-professionnels, financements et obligations opérationnelles."
              },
              {
                title: "Des usages IA adaptés aux missions sociales",
                text: "L'objectif n'est pas d'ajouter de la technologie mais d'améliorer l'efficacité des équipes tout en préservant la qualité de l'accompagnement humain."
              },
              {
                title: "Une approche pédagogique",
                text: "Former les équipes, sécuriser les pratiques et construire progressivement l'autonomie dans les usages de l'IA."
              }
            ].map((item) => (
              <article key={item.title} className="premium-card rounded-lg p-6 pl-8">
                <h2 className="font-display text-2xl font-bold text-ink">{item.title}</h2>
                <p className="mt-4 leading-8 text-ink/75">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="slide-surface py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Parcours",
              text: "Plusieurs années d'expérience dans la gestion de projets, l'accompagnement de structures et la coordination d'actions à forte utilité sociale."
            },
            {
              title: "Expérience ESS",
              text: "Une connaissance approfondie des réalités associatives, de l'insertion par l'activité économique, des financements, des partenariats et des obligations de terrain."
            },
            {
              title: "Méthode",
              text: "Partir des besoins réels, expérimenter sur des cas concrets, sécuriser les usages et transmettre progressivement les compétences aux équipes."
            }
          ].map((item) => (
            <article key={item.title} className="premium-card rounded-lg p-6 pl-8">
              <h2 className="font-display text-2xl font-bold text-ink">{item.title}</h2>
              <p className="mt-4 leading-8 text-ink/75">{item.text}</p>
            </article>
          ))}
        </Container>
      </section>

      <CTASection
        title="Échangeons sur les enjeux de votre structure"
        description="Discutons de vos besoins, de vos contraintes et des opportunités que l'intelligence artificielle peut réellement apporter à vos équipes."
        buttonLabel="Prendre rendez-vous"
      />
    </>
  );
}
