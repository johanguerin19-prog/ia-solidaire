import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site IA Solidaire."
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      description="Informations relatives à l'éditeur, à l'hébergement, à la propriété intellectuelle et aux responsabilités du site IA Solidaire."
    >
      <LegalSection title="Éditeur du site">
        <p>Le présent site est édité par :</p>
        <p>
          IA Solidaire
          <br />
          [Johan Guérin]
          <br />
          [Adresse professionnelle]
          <br />
          [Code postal] [Ville]
          <br />
          France
        </p>
        <p>Email : [adresse@email.fr]</p>
        <p>SIRET : [à compléter]</p>
        <p>Directeur de la publication : Johan Guérin</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>Le site est hébergé par :</p>
        <p>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723
          <br />
          États-Unis
        </p>
        <p>
          Site web :{" "}
          <a href="https://vercel.com" rel="noreferrer" target="_blank">
            https://vercel.com
          </a>
        </p>
        <p>Le code source du site est hébergé sur GitHub :</p>
        <p>
          GitHub Inc.
          <br />
          88 Colin P Kelly Jr St
          <br />
          San Francisco, CA 94107
          <br />
          États-Unis
        </p>
        <p>
          Site web :{" "}
          <a href="https://github.com" rel="noreferrer" target="_blank">
            https://github.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L'ensemble du contenu présent sur ce site (textes, images, logos,
          graphismes, documents, vidéos, éléments visuels et structure du site)
          est protégé par le droit de la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification ou exploitation,
          totale ou partielle, sans autorisation préalable écrite d'IA Solidaire
          est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          Les informations diffusées sur ce site sont fournies à titre
          informatif.
        </p>
        <p>
          IA Solidaire s'efforce d'assurer l'exactitude des informations
          publiées mais ne saurait garantir l'absence d'erreurs ou d'omissions.
        </p>
        <p>
          L'utilisateur reste seul responsable de l'utilisation des informations
          présentes sur le site.
        </p>
      </LegalSection>

      <LegalSection title="Liens externes">
        <p>Le site peut contenir des liens vers des sites tiers.</p>
        <p>
          IA Solidaire ne peut être tenue responsable du contenu ou du
          fonctionnement de ces sites externes.
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>Le présent site est soumis au droit français.</p>
        <p>
          En cas de litige, les juridictions françaises seront seules
          compétentes.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
