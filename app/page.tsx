import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { InfoCard } from "@/components/info-card";
import { NewsletterSection } from "@/components/newsletter-section";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { benefits, services } from "@/lib/site-data";

export default function Home() {
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
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              L'intelligence artificielle au service de l'impact social
            </h1>
            <span aria-hidden="true" className="accent-underline" />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/78">
              Accompagnez votre structure ESS ou IAE dans l'adoption concrète,
              éthique et responsable de l'IA.
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
                    Une IA utile, encadrée et humaine
                  </p>
                  <p className="mt-2 leading-7 text-ink/72">
                    Des usages adaptés aux réalités des associations, SIAE,
                    collectivités et réseaux ESS.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid gap-4">
                {[
                  "Identifier les gains de temps réalistes",
                  "Former les équipes avec des cas pratiques",
                  "Sécuriser les usages sensibles",
                  "Préserver la place de l'humain"
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
            title="Des bénéfices concrets pour des équipes souvent sous contrainte"
            description="L'IA devient utile quand elle répond à des irritants réels : temps administratif, rédaction, formation, communication et capitalisation des savoirs."
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
            eyebrow="Nos offres"
            title="Trois formats pour avancer au bon rythme"
            description="IA Solidaire accompagne autant la découverte collective que l'intégration progressive dans les processus métiers."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
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
              "Expertise ESS et insertion",
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

      <CTASection />
      <NewsletterSection />
    </>
  );
}
