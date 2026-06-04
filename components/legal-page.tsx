import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export function LegalPage({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="slide-panel mx-auto max-w-4xl rounded-lg p-6 sm:p-8">
            <div className="prose-legal">{children}</div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function LegalSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="not-last:mb-9">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
