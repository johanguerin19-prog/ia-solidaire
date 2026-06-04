import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function CTASection({
  title = "Prêt à identifier les premiers usages utiles pour votre structure ?",
  description = "Échangeons sur vos besoins, vos contraintes et les usages IA qui peuvent réellement soutenir votre mission sociale."
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="slide-surface">
      <Container className="py-14">
        <div className="slide-panel grid gap-8 rounded-lg p-7 text-ink md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold">{title}</h2>
          <span aria-hidden="true" className="accent-underline" />
          <p className="mt-4 max-w-3xl leading-7 text-ink/75">{description}</p>
        </div>
        <Button asChild href="/contact">
          Nous contacter
          <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
        </Button>
        </div>
      </Container>
    </section>
  );
}
