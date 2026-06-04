import type { LucideIcon } from "lucide-react";

export function InfoCard({
  title,
  description,
  icon: Icon,
  items
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  items?: string[];
}) {
  return (
    <article className="premium-card h-full rounded-lg p-6 pl-8 transition hover:-translate-y-1 hover:shadow-raised">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-md bg-secondary text-white shadow-card">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-ink/75">{description}</p>
      {items ? (
        <ul className="mt-5 space-y-2 text-sm font-medium text-ink/80">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-4 rounded-full bg-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
