import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site IA Solidaire et informations relatives au RGPD."
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Données personnelles"
      title="Politique de confidentialité"
      description="Cette politique décrit la manière dont IA Solidaire collecte, utilise et protège les données personnelles des utilisateurs du site."
    >
      <LegalSection title="1. Préambule">
        <p>
          La présente politique de confidentialité décrit la manière dont IA
          Solidaire collecte, utilise et protège les données personnelles des
          utilisateurs du site.
        </p>
        <p>
          IA Solidaire attache une importance particulière à la protection des
          données personnelles et s'engage à respecter le Règlement Général sur
          la Protection des Données (RGPD).
        </p>
      </LegalSection>

      <LegalSection title="2. Responsable du traitement">
        <p>Le responsable du traitement des données est :</p>
        <p>
          IA Solidaire
          <br />
          Johan Guérin
          <br />
          [Adresse professionnelle]
          <br />
          Email : [adresse@email.fr]
        </p>
      </LegalSection>

      <LegalSection title="3. Données collectées">
        <p>Les données susceptibles d'être collectées via le site sont :</p>
        <h3>Formulaire de contact</h3>
        <ul>
          <li>Nom</li>
          <li>Adresse email</li>
          <li>Téléphone (si renseigné)</li>
          <li>Nom de la structure</li>
          <li>Message</li>
        </ul>
        <h3>Inscription à la newsletter</h3>
        <ul>
          <li>Nom (si demandé)</li>
          <li>Adresse email</li>
        </ul>
        <h3>Données techniques</h3>
        <ul>
          <li>Adresse IP</li>
          <li>Type de navigateur</li>
          <li>Informations de connexion</li>
          <li>Données de navigation anonymisées</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Finalités du traitement">
        <p>Les données sont collectées afin de :</p>
        <ul>
          <li>répondre aux demandes de contact ;</li>
          <li>fournir des informations sur les services proposés ;</li>
          <li>
            envoyer la newsletter lorsque l'utilisateur y consent ;
          </li>
          <li>améliorer le fonctionnement du site ;</li>
          <li>assurer la sécurité du site.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Base légale">
        <p>Les traitements sont fondés sur :</p>
        <ul>
          <li>le consentement de l'utilisateur ;</li>
          <li>
            l'exécution de mesures précontractuelles à la demande de
            l'utilisateur ;
          </li>
          <li>
            l'intérêt légitime d'IA Solidaire pour assurer la sécurité et
            l'amélioration du site.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Newsletter">
        <p>L'inscription à la newsletter est facultative.</p>
        <p>Les emails sont gérés via la plateforme Brevo.</p>
        <p>
          L'utilisateur peut se désinscrire à tout moment grâce au lien présent
          dans chaque email.
        </p>
      </LegalSection>

      <LegalSection title="7. Destinataires des données">
        <p>
          Les données peuvent être accessibles aux prestataires techniques
          suivants :
        </p>
        <ul>
          <li>Vercel (hébergement)</li>
          <li>GitHub (hébergement du code)</li>
          <li>Brevo (gestion de la newsletter)</li>
        </ul>
        <p>
          Ces prestataires sont susceptibles d'effectuer certains traitements
          conformément à leurs propres engagements de conformité RGPD.
        </p>
      </LegalSection>

      <LegalSection title="8. Durée de conservation">
        <p>Demandes de contact : 3 ans maximum après le dernier échange.</p>
        <p>
          Abonnés à la newsletter : jusqu'au retrait du consentement ou à la
          désinscription.
        </p>
        <p>Données techniques : 13 mois maximum.</p>
      </LegalSection>

      <LegalSection title="9. Droits des utilisateurs">
        <p>
          Conformément au RGPD, chaque utilisateur dispose des droits suivants :
        </p>
        <ul>
          <li>droit d'accès ;</li>
          <li>droit de rectification ;</li>
          <li>droit d'effacement ;</li>
          <li>droit de limitation ;</li>
          <li>droit d'opposition ;</li>
          <li>droit à la portabilité ;</li>
          <li>droit de retirer son consentement à tout moment.</li>
        </ul>
        <p>Toute demande peut être adressée à : [adresse@email.fr]</p>
      </LegalSection>

      <LegalSection title="10. Réclamation">
        <p>
          En cas de difficulté relative à la gestion des données personnelles,
          l'utilisateur peut déposer une réclamation auprès de :
        </p>
        <p>
          CNIL
          <br />
          3 Place de Fontenoy
          <br />
          75007 Paris
        </p>
        <p>
          Site :{" "}
          <a href="https://www.cnil.fr" rel="noreferrer" target="_blank">
            www.cnil.fr
          </a>
        </p>
      </LegalSection>

      <LegalSection title="11. Mise à jour">
        <p>
          La présente politique peut être modifiée à tout moment afin de tenir
          compte des évolutions légales ou techniques.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
