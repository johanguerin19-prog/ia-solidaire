import {
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  ClipboardList,
  FileText,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  LockKeyhole,
  MessageSquareText,
  PenLine,
  Recycle,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/mission", label: "Mission" },
  { href: "/consultant", label: "Consultant / formateur" },
  { href: "/cas-usages", label: "Cas d'usage" },
  { href: "/services", label: "Services" }
];

export const mobileNavItems = [
  ...navItems,
  { href: "/contact", label: "Contact" }
];

export const benefits = [
  {
    title: "Gagner du temps administratif",
    description: "Comptes rendus, procédures, synthèses et courriers.",
    icon: ClipboardList
  },
  {
    title: "Répondre aux appels à projets",
    description:
      "Structurer plus rapidement les réponses et valoriser les actions de la structure.",
    icon: FileText
  },
  {
    title: "Accompagner les salariés",
    description:
      "Créer des supports personnalisés pour la formation, l'insertion et la montée en compétences.",
    icon: GraduationCap
  },
  {
    title: "Développer la communication",
    description: "Newsletters, réseaux sociaux, contenus et présentations.",
    icon: MessageSquareText
  },
  {
    title: "Professionnaliser les équipes",
    description: "Veille, formation, documentation et partage de pratiques.",
    icon: BriefcaseBusiness
  },
  {
    title: "Optimiser les ressources disponibles",
    description:
      "Automatiser certaines tâches sans augmenter les effectifs ni dégrader la qualité de service.",
    icon: Sparkles
  }
];

export const fieldExamples = [
  {
    title: "Association",
    description:
      "Générer rapidement un compte rendu clair à partir de notes de réunion, puis préparer une synthèse partageable avec les équipes ou les partenaires.",
    icon: ClipboardList
  },
  {
    title: "Structure d'insertion",
    description:
      "Créer des exercices FLE adaptés au niveau des salariés, préparer des supports pédagogiques et reformuler des consignes de manière plus accessible.",
    icon: GraduationCap
  },
  {
    title: "Direction ou coordination",
    description:
      "Préparer une réponse à un appel à projets, structurer les arguments clés et valoriser l'impact social des actions menées.",
    icon: Sprout
  }
];

export const services = [
  {
    title: "Formation collective d'initiation à l'IA",
    objective: "Sensibiliser et former les équipes.",
    description:
      "Une formation concrète pour comprendre les usages, les limites et les bons réflexes de l'IA dans les métiers de l'ESS.",
    items: ["Acculturation IA", "Ateliers pratiques", "Cas d'usage ESS"],
    icon: BookOpenCheck
  },
  {
    title: "Accompagnement individualisé",
    objective: "Intégrer l'IA dans les processus de la structure.",
    description:
      "Un accompagnement terrain pour identifier les priorités, cadrer les usages et sécuriser les pratiques.",
    items: ["Diagnostic", "Feuille de route", "Mise en pratique"],
    icon: Handshake
  },
  {
    title: "Académie IA Solidaire",
    objective:
      "Permettre une montée en compétence continue via un abonnement annuel.",
    description:
      "Un espace de ressources et de progression pour garder les équipes à jour, sans créer de plateforme technique en V1.",
    items: ["Vidéos", "Ressources", "FAQ", "Communauté"],
    icon: BrainCircuit
  }
];

export const values = [
  {
    title: "Inclusion",
    description: "Des usages pensés pour les publics, les équipes et les réalités de terrain.",
    icon: HeartHandshake
  },
  {
    title: "Éthique",
    description: "Une IA utilisée avec discernement, transparence et supervision humaine.",
    icon: ShieldCheck
  },
  {
    title: "Accessibilité",
    description: "Des outils rendus compréhensibles, utiles et actionnables.",
    icon: UsersRound
  },
  {
    title: "Innovation utile",
    description: "Pas de gadget : chaque usage doit servir une mission sociale identifiable.",
    icon: Lightbulb
  },
  {
    title: "Transmission",
    description: "Faire monter les équipes en autonomie plutôt que créer une dépendance.",
    icon: PenLine
  }
];

export const ethicalCommitments = [
  {
    title: "RGPD",
    description: "Limiter les données sensibles, choisir les bons outils et documenter les pratiques.",
    icon: LockKeyhole
  },
  {
    title: "Confidentialité",
    description: "Protéger les situations individuelles, les données sociales et les informations internes.",
    icon: ShieldCheck
  },
  {
    title: "IA Act",
    description: "Anticiper les obligations de transparence, de vigilance et de responsabilité.",
    icon: FileText
  },
  {
    title: "Supervision humaine",
    description: "Garder l'humain responsable des décisions et des arbitrages sensibles.",
    icon: UsersRound
  }
];

export const useCases = [
  {
    title: "Direction et gestion",
    description:
      "Soulager la charge administrative des directions, coordinateurs et responsables de service grâce à des supports plus rapides à produire et plus faciles à partager.",
    items: [
      "Accélérer la rédaction des rapports d'activité",
      "Automatiser la production de notes de synthèse",
      "Préparer plus rapidement les réunions et comptes rendus",
      "Faciliter la création de bilans et reporting financeurs"
    ],
    icon: ClipboardList
  },
  {
    title: "Insertion professionnelle",
    description:
      "Appuyer les professionnels de l'accompagnement dans la création de supports adaptés aux parcours des bénéficiaires.",
    items: [
      "Créer des CV et lettres de motivation personnalisés",
      "Préparer des simulations d'entretien",
      "Générer des exercices FLE adaptés aux niveaux",
      "Concevoir des ateliers numériques plus facilement"
    ],
    icon: UsersRound
  },
  {
    title: "Encadrement technique",
    description:
      "Aider les encadrants à formaliser leurs savoir-faire et à transmettre plus efficacement les gestes métiers.",
    items: [
      "Formaliser les procédures de travail",
      "Rédiger des fiches de poste claires",
      "Simplifier les consignes techniques",
      "Créer des supports de formation métier"
    ],
    icon: BriefcaseBusiness
  },
  {
    title: "Communication et partenariats",
    description:
      "Structurer une communication régulière, claire et professionnelle auprès des financeurs, partenaires, bénévoles et publics accompagnés.",
    items: [
      "Rédiger des newsletters plus rapidement",
      "Préparer des publications pour les réseaux sociaux",
      "Valoriser les actions de la structure",
      "Concevoir des présentations partenaires"
    ],
    icon: MessageSquareText
  },
  {
    title: "Éthique et vigilance",
    description:
      "Installer des réflexes simples pour utiliser l'IA sans exposer les données sensibles, les situations individuelles ou la qualité des décisions.",
    items: [
      "Sensibiliser les équipes aux risques liés à l'IA",
      "Sécuriser les données personnelles",
      "Mettre en place des règles d'usage simples",
      "Préserver la supervision humaine"
    ],
    icon: Recycle
  }
];

export const contact = {
  email: "contact@iasolidaire.fr",
  phone: "",
  linkedin: "https://www.linkedin.com/company/ia-solidaire"
};
