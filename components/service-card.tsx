import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCard({
  title,
  objective,
  description,
  icon: Icon,
  items
}: {
  title: string;
  objective: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}) {
  return (
    <article className="premium-card flex h-full flex-col rounded-lg p-6 pl-8 transition hover:-translate-y-1 hover:shadow-raised">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-md bg-violet text-white shadow-card">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 font-bold text-primary">{objective}</p>
      <p className="mt-3 leading-7 text-ink/75">{description}</p>
      <ul className="mt-5 space-y-2 text-sm font-medium text-ink/80">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-4 rounded-full bg-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary/20 bg-white px-4 py-3 text-sm font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-secondary hover:bg-cream"
      >
        Découvrir cette offre
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </article>
  );
}
