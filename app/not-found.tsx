import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="slide-surface">
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-start justify-center px-6 py-20">
        <p className="mb-3 font-semibold text-secondary">Page introuvable</p>
        <h1 className="font-display text-4xl font-bold text-ink">
          Cette page n'existe pas.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/75">
          Revenez à l'accueil pour retrouver les services, les cas d'usage et le
          formulaire de contact.
        </p>
        <Button asChild href="/" className="mt-8">
          Retour à l'accueil
        </Button>
      </div>
    </section>
  );
}
