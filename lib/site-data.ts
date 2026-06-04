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
    description: "Rédaction, reformulation, structuration et relecture.",
    icon: FileText
  },
  {
    title: "Accompagner les salariés",
    description: "FLE, supports pédagogiques, exercices et ateliers.",
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
    title: "Faire plus avec moins",
    description: "Automatisation raisonnée, gain de temps et optimisation.",
    icon: Sparkles
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
      "Produire plus vite des rapports d'activité, notes de synthèse et supports de réunion.",
    items: ["Rapports d'activité", "Notes de synthèse", "Préparation de réunions"],
    icon: ClipboardList
  },
  {
    title: "Insertion professionnelle",
    description:
      "Appuyer les parcours avec des CV, simulations d'entretien, supports FLE et ateliers numériques.",
    items: ["CV", "Entretiens", "Français langue étrangère", "Ateliers numériques"],
    icon: UsersRound
  },
  {
    title: "Encadrement technique",
    description:
      "Formaliser les gestes métiers, les procédures, les fiches de poste et les supports de formation.",
    items: ["Procédures", "Fiches de poste", "Supports de formation"],
    icon: BriefcaseBusiness
  },
  {
    title: "Communication et partenariats",
    description:
      "Structurer une communication régulière et claire auprès des financeurs, partenaires et publics.",
    items: ["Newsletters", "Réseaux sociaux", "Présentations"],
    icon: MessageSquareText
  },
  {
    title: "Éthique et vigilance",
    description:
      "Installer des réflexes collectifs pour protéger les données, les personnes et la qualité des décisions.",
    items: ["RGPD", "Confidentialité", "IA Act", "Bonnes pratiques"],
    icon: Recycle
  }
];

export const contact = {
  email: "contact@ia-solidaire.fr",
  phone: "Téléphone à confirmer",
  linkedin: "https://www.linkedin.com/"
};
