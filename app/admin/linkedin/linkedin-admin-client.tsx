"use client";

import { Clipboard, Filter } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type PostStatus = "brouillon" | "valide" | "publie";

export type LinkedinPost = {
  id: string;
  date_prevue: string;
  titre: string;
  categorie: string;
  objectif: string;
  accroches: {
    impact_fort: string;
    impact_moyen: string;
    impact_doux: string;
  };
  texte: string;
  cta: Partial<Record<"prise_de_contact" | "commentaire" | "partage" | "newsletter" | "academie", string>>;
  visuel: {
    concept: string;
    texte_image: string;
    disposition: string;
  };
  image?: {
    src: string;
    alt: string;
    statut: "generee";
    date_generation: string;
  };
  hashtags: string[];
  prompt_image: string;
  statut: PostStatus;
};

const statusLabels: Record<PostStatus, string> = {
  brouillon: "Brouillon",
  valide: "Validé",
  publie: "Publié"
};

const statusClasses: Record<PostStatus, string> = {
  brouillon: "border-orange/25 bg-orange/10 text-ink",
  valide: "border-secondary/25 bg-secondary/10 text-ink",
  publie: "border-violet/25 bg-violet/10 text-ink"
};

const categoryLabels: Record<string, string> = {
  pedagogie: "Pédagogie",
  terrain: "Terrain",
  conformite: "Conformité",
  promotion: "Promotion"
};

function formatDate(date: string) {
  if (!date) return "Date à définir";

  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Paris"
  }).format(new Date(date));
}

function getPrimaryCta(post: LinkedinPost) {
  return Object.values(post.cta).find(Boolean) ?? "";
}

function formatPostForCopy(post: LinkedinPost) {
  return [
    post.accroches.impact_fort,
    post.texte,
    getPrimaryCta(post),
    post.hashtags.join(" ")
  ]
    .filter(Boolean)
    .join("\n\n");
}

export function LinkedinAdminClient({ posts }: { posts: LinkedinPost[] }) {
  const [statusFilter, setStatusFilter] = useState("brouillon");
  const [categoryFilter, setCategoryFilter] = useState("tous");
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(posts.map((post) => post.categorie).filter(Boolean))).sort(),
    [posts]
  );

  const filteredPosts = posts.filter((post) => {
    const matchesStatus = statusFilter === "tous" || post.statut === statusFilter;
    const matchesCategory = categoryFilter === "tous" || post.categorie === categoryFilter;
    return matchesStatus && matchesCategory;
  });

  async function copyPost(post: LinkedinPost) {
    await navigator.clipboard.writeText(formatPostForCopy(post));
    setCopiedPostId(post.id);
    window.setTimeout(() => setCopiedPostId(null), 2200);
  }

  return (
    <div className="grid gap-8">
      <div className="slide-panel rounded-lg p-5 text-ink sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-secondary">
              <Filter aria-hidden="true" className="h-4 w-4" />
              Filtres
            </div>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Affinez la liste par statut ou par catégorie pour préparer vos prochaines publications.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[28rem]">
            <label className="grid gap-2 text-sm font-bold text-ink" htmlFor="linkedin-status">
              Statut
              <select
                id="linkedin-status"
                className="rounded-md border border-ink/15 bg-white px-4 py-3 font-semibold text-ink shadow-sm focus:border-secondary"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="tous">Tous les statuts</option>
                <option value="brouillon">Brouillon</option>
                <option value="valide">Validé</option>
                <option value="publie">Publié</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink" htmlFor="linkedin-category">
              Catégorie
              <select
                id="linkedin-category"
                className="rounded-md border border-ink/15 bg-white px-4 py-3 font-semibold text-ink shadow-sm focus:border-secondary"
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
              >
                <option value="tous">Toutes les catégories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {categoryLabels[category] ?? category}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <article key={post.id} className="premium-card rounded-lg p-6 pl-8 text-ink sm:p-7 sm:pl-9">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-secondary">
                    {formatDate(post.date_prevue)}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                    {post.titre || "Titre interne à définir"}
                  </h2>
                </div>
                <span className={`inline-flex w-fit rounded-full border px-3 py-1 text-sm font-bold ${statusClasses[post.statut]}`}>
                  {statusLabels[post.statut]}
                </span>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-cream p-4">
                  <dt className="text-sm font-bold text-ink">Catégorie</dt>
                  <dd className="mt-1 text-ink/75">{categoryLabels[post.categorie] ?? post.categorie}</dd>
                </div>
                <div className="rounded-md bg-cream p-4">
                  <dt className="text-sm font-bold text-ink">Objectif</dt>
                  <dd className="mt-1 text-ink/75">{post.objectif || "À définir"}</dd>
                </div>
              </dl>

              <div className="mt-6 grid gap-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">Accroche principale</h3>
                  <p className="mt-3 rounded-md border border-ink/10 bg-white p-4 font-semibold leading-7 text-ink/80">
                    {post.accroches.impact_fort}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">Texte complet</h3>
                  <p className="mt-3 whitespace-pre-wrap rounded-md border border-ink/10 bg-white p-4 leading-7 text-ink/75">
                    {post.texte || "Texte à rédiger."}
                  </p>
                </div>
                {post.image ? (
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">Visuel généré</h3>
                    <div className="mt-3 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        width={1080}
                        height={1080}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-ink/60">
                      Image générée le {post.image.date_generation} ·{" "}
                      <a className="font-semibold text-secondary hover:text-primary" href={post.image.src} target="_blank" rel="noreferrer">
                        Ouvrir le fichier
                      </a>
                    </p>
                  </div>
                ) : null}
                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">CTA principal</h3>
                    <p className="mt-2 rounded-md bg-cream p-4 text-ink/75">
                      {getPrimaryCta(post) || "À définir"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">Hashtags</h3>
                    <p className="mt-2 rounded-md bg-cream p-4 text-ink/75">
                      {post.hashtags.length > 0 ? post.hashtags.join(" ") : "À définir"}
                    </p>
                  </div>
                </div>
                <details className="rounded-md border border-ink/10 bg-white p-4">
                  <summary className="cursor-pointer font-display text-lg font-bold text-ink">
                    Variantes et préparation du visuel
                  </summary>
                  <div className="mt-4 grid gap-4 text-ink/75">
                    <p><strong>Accroche moyenne :</strong> {post.accroches.impact_moyen}</p>
                    <p><strong>Accroche douce :</strong> {post.accroches.impact_doux}</p>
                    <p><strong>Concept :</strong> {post.visuel.concept}</p>
                    <p><strong>Texte de l'image :</strong> {post.visuel.texte_image}</p>
                    <p><strong>Disposition :</strong> {post.visuel.disposition}</p>
                    <p><strong>Prompt image :</strong> {post.prompt_image}</p>
                  </div>
                </details>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-primary focus-visible:outline-ess"
                onClick={() => copyPost(post)}
              >
                <Clipboard aria-hidden="true" className="h-4 w-4" />
                {copiedPostId === post.id ? "Post copié" : "Copier le post"}
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="premium-card rounded-lg p-7 pl-9 text-ink">
          <h2 className="font-display text-2xl font-bold">Aucune publication à afficher</h2>
          <p className="mt-3 max-w-2xl leading-7 text-ink/75">
            Aucun contenu ne correspond aux filtres sélectionnés.
          </p>
        </div>
      )}
    </div>
  );
}
