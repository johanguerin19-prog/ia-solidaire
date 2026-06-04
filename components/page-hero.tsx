import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="slide-surface relative overflow-hidden">
      <div aria-hidden="true" className="accent-frame absolute -right-12 top-12 hidden h-24 w-24 rotate-12 lg:block" />
      <Container className="relative py-16 sm:py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-secondary">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-bold text-ink sm:text-5xl">
          {title}
        </h1>
        <span aria-hidden="true" className="accent-underline" />
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{description}</p>
      </Container>
    </section>
  );
}
