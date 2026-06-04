# IA Solidaire

Site vitrine V1 pour IA Solidaire, cabinet de conseil IA pour les structures de l'ESS et de l'IAE.

## Pages

- Accueil
- Notre mission
- Cas d'usage ESS
- Votre consultant
- Nos services
- Contact

## Lancement local

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Vérifications

```bash
npm run typecheck
npm run build
```

## Hébergement prévu

La stratégie cible est GitHub + Vercel :

1. Créer un dépôt GitHub pour le projet.
2. Pousser la branche principale.
3. Importer le dépôt dans Vercel.
4. Garder les réglages par défaut Next.js.
5. Ajouter le domaine personnalisé plus tard depuis Vercel.

## Newsletter Brevo

La page d'accueil contient un formulaire d'inscription à la veille IA Solidaire.

Pour activer l'envoi vers Brevo, définir ces variables d'environnement dans Vercel :

```bash
BREVO_API_KEY=clé_api_brevo
BREVO_NEWSLETTER_LIST_ID=identifiant_numérique_de_la_liste
```

La route interne `/api/newsletter` ajoute le contact dans Brevo via l'API Contacts.
La clé API reste côté serveur et n'est pas exposée dans le navigateur.

## Limites V1

- Le formulaire valide les champs et affiche une confirmation côté site.
- Aucun email n'est envoyé automatiquement.
- La photo professionnelle du consultant est un placeholder.
- Les coordonnées définitives restent à confirmer avant publication.

## Pistes V2

- Brancher le formulaire à un service d'envoi email.
- Ajouter une vraie photo professionnelle.
- Ajouter des preuves sociales ou témoignages.
- Créer des pages d'atterrissage par public : ACI, EI, EA, ETTI, collectivités.
- Ajouter une section ressources si un blog est validé plus tard.
