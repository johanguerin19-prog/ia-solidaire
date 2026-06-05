import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { InfoCard } from "@/components/info-card";
import { NewsletterSection } from "@/components/newsletter-section";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { benefits, fieldExamples, services } from "@/lib/site-data";

export default function Home() {
  const homepageServices = services.map((service) => {
    const objectives: Record<string, string> = {
      "Formation collective d'initiation à l'IA":
        "Pour découvrir les usages de l'IA et sensibiliser les équipes.",
      "Accompagnement individualisé":
        "Pour intégrer l'IA dans les pratiques de la structure.",
      "Académie IA Solidaire": "Pour maintenir les équipes à jour toute l'année."
    };

    return {
      ...service,
      objective: objectives[service.title] ?? service.objective
    };
  });

  return (
    <>
      <section className="slide-surface relative overflow-hidden">
        <div aria-hidden="true" className="accent-frame absolute -right-10 top-12 hidden h-28 w-28 rotate-12 lg:block" />
        <div aria-hidden="true" className="accent-frame absolute -bottom-10 left-8 hidden h-24 w-24 -rotate-12 lg:block" />
        <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-4 inline-flex rounded-md bg-white px-3 py-2 text-sm font-bold text-secondary shadow-card">
              IA responsable pour l'ESS et l'IAE
            </p>
            <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Faites gagner du temps à vos équipes grâce à une IA adaptée aux réalités de l'ESS et de l'insertion
            </h1>
            <span aria-hidden="true" className="accent-underline" />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/78">
              Associations, structures d'insertion et acteurs de l'ESS :
              découvrez des usages simples, utiles et responsables de
              l'intelligence artificielle pour réduire la charge administrative,
              améliorer la communication et renforcer l'accompagnement des
              publics.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild href="/services">
                Découvrir nos services
                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild href="/contact" variant="secondary">
                Nous contacter
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="slide-panel rounded-lg p-6">
              <div className="flex items-start gap-4 border-b border-ink/10 pb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-violet text-white shadow-card">
                  <ShieldCheck aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-ink">
                    Une IA au service des missions sociales
                  </p>
                  <p className="mt-2 leading-7 text-ink/72">
                    Pas de jargon, pas de promesses irréalistes. Nous aidons les
                    structures ESS à identifier les usages réellement utiles et
                    à les intégrer progressivement dans leurs pratiques.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid gap-4">
                {[
                  "Réduire le temps passé sur l'administratif",
                  "Répondre plus efficacement aux appels à projets",
                  "Produire des contenus plus rapidement",
                  "Préserver l'humain au cœur des accompagnements"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-semibold text-ink/80">
                    <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Pourquoi l'IA pour l'ESS ?"
            title="Où l'IA peut réellement vous faire gagner du temps"
            description="L'IA n'a pas vocation à remplacer les professionnels du secteur social. Elle peut en revanche automatiser certaines tâches répétitives et aider les équipes à se concentrer sur ce qui compte vraiment : l'accompagnement humain."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <InfoCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </Container>
      </section>

      <section className="slide-surface py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Cas concrets terrain"
            title="Des exemples d'usages immédiatement applicables"
            description="L'IA devient plus simple à comprendre lorsqu'elle répond à des situations concrètes déjà vécues par les équipes de terrain."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {fieldExamples.map((example) => (
              <InfoCard key={example.title} {...example} />
            ))}
          </div>
        </Container>
      </section>

      <section className="slide-surface py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Nos offres"
            title="Trois formats pour avancer au bon rythme"
            description="IA Solidaire accompagne autant la découverte collective que l'intégration progressive dans les processus métiers."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {homepageServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Pourquoi IA Solidaire ?"
            title="Une approche pensée pour le terrain social"
            description="L'accompagnement combine compréhension des contraintes ESS, pédagogie, expertise IA et vigilance éthique."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Connaissance des réalités ESS et IAE",
              "Approche terrain et pragmatique",
              "Formation accessible aux équipes",
              "Éthique, RGPD et supervision humaine",
              "Usages IA concrets, pas théoriques",
              "Accompagnement humain et progressif"
            ].map((item) => (
              <div key={item} className="premium-card rounded-lg p-5 pl-7">
                <CheckCircle2 aria-hidden="true" className="mb-3 h-6 w-6 text-secondary" />
                <p className="font-bold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Identifiez en 30 minutes les usages IA les plus pertinents pour votre structure"
        description="Lors d'un premier échange gratuit, nous faisons le point sur vos besoins, vos contraintes et les tâches qui pourraient être simplifiées grâce à l'IA."
        buttonLabel="Réserver un échange découverte"
      />
      <NewsletterSection
        title="Chaque mois, une veille IA spécialement conçue pour les associations et structures d'insertion"
        description="Recevez gratuitement des outils testés, des exemples concrets d'usages, des ressources pratiques et les évolutions importantes à suivre pour intégrer l'IA dans votre structure avec recul et responsabilité."
        secondaryText="Lecture en moins de 5 minutes."
        buttonLabel="Recevoir gratuitement la veille IA"
      />
    </>
  );
}
