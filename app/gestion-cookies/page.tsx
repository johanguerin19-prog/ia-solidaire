import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Gestion des cookies",
  description:
    "Politique de gestion des cookies du site IA Solidaire."
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Politique de gestion des cookies"
      description="Informations sur les cookies utilisés par le site IA Solidaire et leur durée de conservation."
    >
      <LegalSection title="Qu'est-ce qu'un cookie ?">
        <p>
          Un cookie est un petit fichier texte enregistré sur votre terminal
          lors de la consultation d'un site internet.
        </p>
        <p>
          Il permet notamment d'assurer le bon fonctionnement du site,
          d'améliorer l'expérience utilisateur et de mesurer l'audience.
        </p>
      </LegalSection>

      <LegalSection title="Cookies utilisés sur ce site">
        <h3>Cookies strictement nécessaires</h3>
        <p>
          Ces cookies sont indispensables au fonctionnement du site et ne
          peuvent pas être désactivés.
        </p>
        <p>Ils permettent notamment :</p>
        <ul>
          <li>la sécurité du site ;</li>
          <li>la gestion des préférences ;</li>
          <li>le bon affichage des pages.</li>
        </ul>
        <h3>Cookies de mesure d'audience</h3>
        <p>
          Le site peut utiliser des outils de mesure d'audience afin de
          comprendre la fréquentation du site et améliorer son contenu.
        </p>
        <p>
          Ces cookies ne sont déposés qu'après consentement de l'utilisateur.
        </p>
        <h3>Cookies liés à la newsletter</h3>
        <p>
          Lorsqu'un utilisateur s'inscrit à la newsletter, certaines
          informations peuvent être traitées par Brevo afin d'assurer l'envoi
          des communications et la gestion des abonnements.
        </p>
      </LegalSection>

      <LegalSection title="Consentement">
        <p>
          Le site utilise uniquement des cookies strictement nécessaires à son
          fonctionnement et à sa sécurité.
        </p>
        <p>
          Conformément aux recommandations de la CNIL, ces cookies ne
          nécessitent pas le recueil préalable du consentement de l'utilisateur.
        </p>
        <p>
          Aucun cookie publicitaire, de profilage ou de mesure d'audience n'est
          déposé lors de votre navigation.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les cookies sont conservés pour une durée maximale de 13 mois
          conformément aux recommandations de la CNIL.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Pour toute question concernant les cookies ou les données personnelles :
        </p>
        <p>[adresse@email.fr]</p>
      </LegalSection>
    </LegalPage>
  );
}
