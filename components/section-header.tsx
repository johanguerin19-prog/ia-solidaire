export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      <span aria-hidden="true" className={align === "center" ? "accent-underline mx-auto" : "accent-underline"} />
      {description ? (
        <p className="mt-4 text-lg leading-8 text-ink/75">{description}</p>
      ) : null}
    </div>
  );
}
