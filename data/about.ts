import { link } from "fs";

const birthDate = new Date("2006-11-10");
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (
  monthDiff < 0 ||
  (monthDiff === 0 && today.getDate() < birthDate.getDate())
) {
  age--;
}

export const personal_data = {
  name: "Alexis DE JESUS",
  age: age + " ans",
  location: "Île-de-France, France",
  nationalite: "Française, Portugaise (en cours)",
  disponibilite: "Immédiate",

  link: [
    {
      id: 1,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/alexis-dejesus",
    },
    {
      id: 2,
      title: "GitHub",
      value: "https://www.github.com/FlytziTv",
    },
    {
      id: 3,
      title: "Mail Scolaire",
      value: "mailto:alexis.dejesus@example.com",
    },
  ],

  cv: {
    title: "Mon cv",
    value: "/files/cv_alexis_dejesus.pdf",
  },

  presentation:
    "Passionné par le développement web et mobile, je suis un jeune développeur de {age} ans basé en Île-de-France. Actuellement en formation en BTS SIO (Services Informatiques aux Organisations) à Paris Ynov Campus, je me spécialise dans le développement full-stack et mobile. J'ai acquis des compétences solides en JavaScript, TypeScript, React, Next.js, et Flutter à travers mes projets personnels et académiques. Curieux et motivé, je suis constamment à la recherche de nouvelles technologies et de défis pour améliorer mes compétences. Je suis ouvert à des opportunités de stage ou d'alternance pour mettre en pratique mes connaissances et contribuer à des projets innovants.",
};

export const certif_data = [
  {
    id: 1,
    status: "Autodidacte",
    categorie: "Web Development",
    name: "Html",
    image: "/img/certif/codedex.gif",
    pdf: "/files/certif/codédex_html.pdf",
    description:
      "Maîtrise de la structure sémantique, création de pages web accessibles, formulaires complets et bonnes pratiques de balisage.",
    link: "https://www.codedex.io/html",
    date: 2025,
  },
  {
    id: 2,
    status: "Autodidacte",
    categorie: "Web Development",
    name: "Css",
    image: "/img/certif/codedex.gif",
    pdf: "/files/certif/codédex_css.pdf",
    description:
      "Compétences en mise en forme, layout responsif, gestion avancée des flexbox/grid et application des bonnes pratiques de design.",
    link: "https://www.codedex.io/css",
    date: 2025,
  },
  {
    id: 3,
    status: "Formation [Bac Pro]",
    categorie: "Numérique",
    name: "Pix",
    image: "/img/certif/pix.png",
    pdf: "/files/certif/pix.pdf",
    description:
      "Validation des compétences numériques clés, sécurité informatique, gestion de l’information, résolution de problèmes et maîtrise des outils digitaux.",
    link: "https://www.pix.fr",
    date: 2024,
  },
];

export const tools_data = [
  // =====================
  // Langages
  // =====================
  {
    id: 1,
    name: "HTML",
    image: "/img/icons/skills/html.svg",
    categorie: "Langages",
    link: "https://developer.mozilla.org/docs/HTML",
    color: "#E44D26",
    status: "Autodidacte",
  },
  {
    id: 2,
    name: "CSS",
    image: "/img/icons/skills/css.svg",
    categorie: "Langages",
    link: "https://developer.mozilla.org/Web/CSS",
    color: "#264DE4",
    status: "Autodidacte",
  },
  {
    id: 3,
    name: "JavaScript",
    image: "/img/icons/skills/javascript.svg",
    categorie: "Langages",
    link: "https://developer.mozilla.org/docs/JavaScript",
    color: "#F7DF1E",
    status: "Autodidacte",
  },
  {
    id: 4,
    name: "TypeScript",
    image: "/img/icons/skills/typescript.svg",
    categorie: "Langages",
    link: "https://www.typescriptlang.org",
    color: "#3178C6",
    status: "Autodidacte",
  },
  {
    id: 5,
    name: "Lua",
    image: "/img/icons/skills/lua.svg",
    categorie: "Langages",
    link: "https://www.lua.org",
    color: "#00007D",
    status: "Autodidacte",
  },

  // =====================
  // Frameworks & Tech
  // =====================
  {
    id: 6,
    name: "React",
    image: "/img/icons/skills/react.svg",
    categorie: "Frameworks & Tech",
    link: "https://www.reactjs.org",
    color: "#00D8FF",
    status: "Autodidacte",
  },
  {
    id: 7,
    name: "Vue.js",
    image: "/img/icons/skills/vue.svg",
    categorie: "Frameworks & Tech",
    link: "https://www.vuejs.org",
    color: "#41B883",
    status: "Autodidacte",
  },
  {
    id: 8,
    name: "Next.js",
    image: "/img/icons/skills/nextjs.svg",
    categorie: "Frameworks & Tech",
    link: "https://www.nextjs.org",
    color: "#FFFFFF",
    status: "Autodidacte",
  },
  {
    id: 9,
    name: "Tailwind CSS",
    image: "/img/icons/skills/tailwindcss.svg",
    categorie: "Frameworks & Tech",
    link: "https://www.tailwindcss.com",
    color: "#2298BD",
    status: "Autodidacte",
  },
  {
    id: 10,
    name: "Node.js",
    image: "/img/icons/skills/nodejs.svg",
    categorie: "Frameworks & Tech",
    link: "https://www.nodejs.org",
    color: "#539E43",
    status: "Autodidacte",
  },
  {
    id: 11,
    name: "MySQL",
    image: "/img/icons/skills/mysql.svg",
    categorie: "Frameworks & Tech",
    link: "https://www.mysql.com",
    color: "#00546B",
    status: "Autodidacte",
  },
  {
    id: 12,
    name: "Git",
    image: "/img/icons/logiciel/git.svg",
    categorie: "Frameworks & Tech",
    link: "https://www.git-scm.com",
    color: "#DE4C36",
    status: "Autodidacte",
  },

  // =====================
  // Outils & Logiciels
  // =====================
  {
    id: 13,
    name: "Visual Studio Code",
    image: "/img/icons/logiciel/vscode.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.code.visualstudio.com",
    color: "#3C99D4",
    status: "Autodidacte",
  },
  {
    id: 14,
    name: "Figma",
    image: "/img/icons/logiciel/figma.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.figma.com/fr-fr",
    color: "#0ACF83",
    status: "Autodidacte",
  },
  {
    id: 15,
    name: "SolidWorks",
    image: "/img/icons/logiciel/solidworks.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.solidworks.com/fr",
    color: "#EE2722",
    status: "Frormation [Bac Pro]",
  },
  {
    id: 16,
    name: "AutoCAD",
    image: "/img/icons/logiciel/autocad.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.autodesk.com/autocad",
    color: "#E51050",
    status: "Frormation [Bac Pro]",
  },
  {
    id: 17,
    name: "Fusion 360",
    image: "/img/icons/logiciel/fusion360.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.autodesk.com/fusion-360",
    color: "#FE6B00",
    status: "Autodidacte",
  },
  {
    id: 18,
    name: "Blender",
    image: "/img/icons/logiciel/blender.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.studio.blender.org/welcome",
    color: "#FF7021",
    status: "Autodidacte",
  },
];

export const additional_tools = [
  // =====================
  // Extensions
  // =====================
  {
    id: 19,
    name: "Auto Rename Tag",
    image: "/img/icons/extension/Auto_Rename_Tag.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
    color: "#9EA7B3",
  },
  {
    id: 20,
    name: "Color Highlighter",
    image: "/img/icons/extension/Color_Highlighter.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight",
    color: "#845259",
  },
  {
    id: 21,
    name: "EditorConfig",
    image: "/img/icons/extension/EditorConfig.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",
    color: "#E3F0F0",
  },
  {
    id: 22,
    name: "Error Lens",
    image: "/img/icons/extension/Error_Lens.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
    color: "#F4DE20",
  },
  {
    id: 23,
    name: "ESLint",
    image: "/img/icons/extension/ESLint.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
    color: "#F66526",
  },
  {
    id: 24,
    name: "GitHub Copilot",
    image: "/img/icons/extension/GitHub_Copilot.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",
    color: "#FEFEFF",
  },
  {
    id: 25,
    name: "Prettier",
    image: "/img/icons/extension/Prettier_Code_formatter.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
    color: "#172D38",
  },
];

export const formation_data = {
  name: "Paris Ynov Campus",
  type: "École supérieure des métiers du digital",
  loc: "Paris Nanterre (Campus Ouest)",
  slogan: "Le digital s'apprend par la pratique.",
  desc: "Paris Ynov Campus est une institution dédiée à la formation aux métiers de demain. L'école se distingue par une pédagogie active centrée sur la réalisation de projets réels, favorisant l'interdisciplinarité (YDAYS) et l'insertion professionnelle immédiate grâce à l'alternance.",
  formation: [
    "Informatique & Développement (Full Stack, Mobile, Cloud)",
    "Cybersécurité & Réseaux",
    "Intelligence Artificielle & Data Science",
    "Création & Digital Design (UX/UI, Direction Artistique)",
    "3D, Animation & Jeux Vidéo",
    "Marketing & Communication Digitale",
    "Audiovisuel & Son",
    "Architecture d’Intérieur & Bâtiment Numérique",
  ],
  tel: "01 48 07 07 02",
  email: "contact-paris@ynov.com",
  url: "https://www.ynov.com/campus/paris",
  image: "/img/icons/ynov.svg",
};

export const work_data = {
  name: "inconnu",
  type: "Stage ou Alternance",
  loc: "inconnu",
  slogan: "inconnu",
  desc: "inconnu",
  url: "https://www.######.com",
  image: "/img/icons/ynov.svg",
};

export const search_data = [
  {
    id: 1,
    title: "Recherche d'alternance",
    rythme: "3 jours en entreprise / 2 jours à l'école",
    disponibilite: "Dès maintenant / Septembre 2026",
    durée: "12 à 24 mois",
    objectif:
      "Intégrer une équipe technique pour participer au cycle de vie des applications (analyse, développement, tests).",
  },
  {
    id: 2,
    title: "Recherche de stage",
    periode: "Juillet 2026",
    durée: "5 semaines",
    mission: [
      "Développement Front-end (HTML/CSS, JavaScript).",
      "Maintenance évolutive d'applications existantes.",
      "Gestion de bases de données (SQL).",
      "Participation à la rédaction de documentations techniques.",
    ],
  },
];

export const about_study = [
  {
    id: 1,
    image: "/img/icons/studs/eiffage.png",
    title: "Chargé d'études",
    entreprise: "Eiffage · Stage",
    date: "mars 2022 - mars 2022 · 1 mois",
    link: "https://www.eiffage.com",
  },
  {
    id: 2,
    image: "/img/icons/studs/eiffage.png",
    title: "Chargé d'études",
    entreprise: "Eiffage · Stage",
    date: "juin 2022 - juin 2022 · 1 mois",
    link: "https://www.eiffage.com",
  },
  {
    id: 3,
    image: "/img/icons/studs/eiffage.png",
    title: "Chargé d'études",
    entreprise: "Eiffage · Stage",
    date: "mars 2023 - mars 2023 · 1 mois",
    link: "https://www.eiffage.com",
  },
  {
    id: 4,
    image: "/img/icons/studs/eiffage.png",
    title: "Chargé d'études",
    entreprise: "Eiffage · Stage",
    date: "juin 2023 - juin 2023 · 1 mois",
    link: "https://www.eiffage.com",
  },
  {
    id: 5,
    image: "/img/icons/studs/new-mat.png",
    title: "Concepteur industriel",
    entreprise: "New Mat Mécatronic · Stage",
    date: "novembre 2023 - décembre 2023 · 2 mois",
    link: "https://www.newmat.fr",
  },
];
