import { CvIcon } from "@/components/Icons/cv";
import { GithubIcon } from "@/components/Icons/github";
import { LinkedInIcon } from "@/components/Icons/linkedin";
import { MailIcon } from "@/components/Icons/mail";

export const UserItems = {
  name: "Alexis De Jesus",
  role: "Développeur Full Stack Junior",
  location: "Triel sur Seine, France",
  image: "/img/test/me.jpg",
  description: `Je suis un étudiant alternant en développement logiciel et administration systèmes et réseaux. Passionné d’informatique depuis mon plus jeune âge, j’ai rapidement commencé à apprendre le développement par curiosité et envie de créer. Au fil du temps, j’ai exploré plusieurs langages tels que HTML, CSS, JavaScript, Python et Java, ce dernier étant l’un de mes préférés. Bien que j’aie réalisé de nombreux projets orientés web, je souhaite aujourd’hui me spécialiser dans le développement logiciel ou embarqué, des domaines où je peux allier logique, performance et innovation.`,
};

export const SocialItems = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/flytzitv",
    icon: GithubIcon,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alexis-dejesus/",
    icon: LinkedInIcon,
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:alexis.dejesus019@gmail.com",
    icon: MailIcon,
  },
  {
    id: 4,
    name: "Mon CV",
    url: "/files/CV_Alexis_De_Jesus.pdf",
    icon: CvIcon,
  },
];

export const ToolItems = [
  {
    name: "HTML",
    img: "/img/icons/skills/html.svg",
    description: "Langage de balisage pour la création de pages web.",
    categorie: "Frontend",
    color: "#E44D26",
    link: "https://developer.mozilla.org/fr/docs/Web/HTML",
  },
  {
    name: "CSS",
    img: "/img/icons/skills/css.svg",
    description: "Langage de style pour la mise en forme des pages web.",
    categorie: "Frontend",
    color: "#264DE4",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    img: "/img/icons/skills/javascript.svg",
    description: "Langage de programmation pour le développement web.",
    categorie: "Frontend",
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    img: "/img/icons/skills/typescript.svg",
    description: "Langage de programmation pour le développement web.",
    categorie: "Frontend",
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    img: "/img/icons/skills/react.svg",
    description:
      "Bibliothèque JavaScript pour la création d'interfaces utilisateur.",
    categorie: "Frontend",
    color: "#00D8FF",
    link: "https://reactjs.org/",
  },
  {
    name: "Vue.js",
    img: "/img/icons/skills/vue.svg",
    description:
      "Framework JavaScript pour la création d'interfaces utilisateur.",
    categorie: "Frontend",
    color: "#41B883",
    link: "https://vuejs.org/",
  },
  {
    name: "Tailwind CSS",
    img: "/img/icons/skills/tailwindcss.svg",
    description: "Framework CSS pour la création d'interfaces utilisateur.",
    categorie: "Frontend",
    color: "#2298BD",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Next.js",
    img: "/img/icons/skills/nextjs.svg",
    description: "Framework React pour la création d'applications web.",
    categorie: "Frontend",
    color: "#FFFFFF",
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    img: "/img/icons/skills/nodejs.svg",
    description: "Environnement d'exécution JavaScript côté serveur.",
    categorie: "Backend",
    color: "#539E43",
    link: "https://nodejs.org/",
  },
  // {
  //   name: "Git",
  //   img: "/img/icons/skills/git.svg",
  //   description: "Système de contrôle de version pour le dev collaboratif.",
  //   categorie: "DevOps",
  //   color: "#DE4C36",
  // },
  {
    name: "MySQL",
    img: "/img/icons/skills/mysql.svg",
    description: "Système de gestion de base de données relationnelle.",
    categorie: "Backend",
    color: "#00546B",
    link: "https://www.mysql.com/",
  },
  {
    name: "Lua",
    img: "/img/icons/skills/lua.svg",
    description: "Langage de programmation léger et polyvalent.",
    categorie: "Backend",
    color: "#00007D",
    link: "https://www.lua.org/",
  },

  {
    name: "Visual Studio Code",
    img: "/img/icons/logiciel/vscode.svg",
    categorie: "Éditeur de code",
    link: "https://code.visualstudio.com/",
    color: "#3C99D4",
  },
  {
    name: "Figma",
    img: "/img/icons/logiciel/figma.svg",
    categorie: "Outil de design (UI/UX)",
    link: "https://www.figma.com/fr-fr/",
    color: "#0ACF83",
  },
  {
    name: "SolidWorks",
    img: "/img/icons/logiciel/solidworks.svg",
    categorie: "Conception assistée par ordinateur (CAO)",
    link: "https://www.solidworks.com/fr",
    color: "#EE2722",
  },
  {
    name: "AutoCad",
    img: "/img/icons/logiciel/autocad.svg",
    categorie: "Conception assistée par ordinateur (CAO)",
    link: "https://www.autodesk.com/fr/products/autocad/overview",
    color: "#E51050",
  },
  {
    name: "Fusion 360",
    img: "/img/icons/logiciel/fusion360.svg",
    categorie: "Conception assistée par ordinateur (CAO)",
    link: "https://www.autodesk.com/fr/products/fusion-360/overview",
    color: "#FE6B00",
  },
  {
    name: "Blender",
    img: "/img/icons/logiciel/blender.svg",
    categorie: "Modélisation 3D / Animation",
    link: "https://studio.blender.org/welcome/",
    color: "#FF7021",
  },
  {
    name: "Git",
    img: "/img/icons/logiciel/git.svg",
    categorie: "Contrôle de version",
    link: "https://git-scm.com/",
    color: "#F05032",
  },
  {
    name: "Git Extension",
    img: "/img/icons/logiciel/gitextension.svg",
    categorie: "Client Git (interface graphique)",
    link: "https://gitextensions.github.io/",
    color: "#4FB850",
  },

  {
    name: "Auto Rename Tag",
    img: "/img/icons/extension/Auto_Rename_Tag.png",
    description: "Renommer automatiquement les balises",
    categorie: "Extension",
    color: "#9EA7B3",
    link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
  },
  {
    name: "Color Highlighter",
    img: "/img/icons/extension/Color_Highlighter.png",
    description: "Surligner la syntaxe",
    categorie: "Extension",
    color: "#845259",
    link: "https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight",
  },
  {
    name: "EditorConfig",
    img: "/img/icons/extension/EditorConfig.png",
    description: "Gestion des configurations de code",
    categorie: "Extension",
    color: "#E3F0F0",
    link: "https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",
  },
  {
    name: "Error Lens",
    img: "/img/icons/extension/Error_Lens.png",
    description: "Met en surbrillance les erreurs et avertissements",
    categorie: "Extension",
    color: "#F4DE20",
    link: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
  },
  {
    name: "ESLint",
    img: "/img/icons/extension/ESLint.png",
    description: "Linter pour JavaScript",
    categorie: "Extension",
    color: "#F66526",
    link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
  },
  {
    name: "GitHub Copilot",
    img: "/img/icons/extension/GitHub_Copilot.png",
    description: "Assistant de code AI",
    categorie: "Extension",
    color: "#FEFEFF",
    link: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",
  },
  {
    name: "GitHub Theme",
    img: "/img/icons/extension/GitHub_Theme.png",
    description: "Thème pour GitHub",
    categorie: "Extension",
    color: "#0F2B55",
    link: "https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme",
  },
  {
    name: "gitignore",
    img: "/img/icons/extension/gitignore.png",
    description: "Fichier d'ignore pour Git",
    categorie: "Extension",
    color: "#E44D26",
    link: "https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore",
  },
  {
    name: "Live Server",
    img: "/img/icons/extension/Live_Server.png",
    description: "Serveur de développement local",
    categorie: "Extension",
    color: "#801CB6",
    link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
  },
  {
    name: "Prettier",
    img: "/img/icons/extension/Prettier_Code_formatter.png",
    description: "Formateur de code",
    categorie: "Extension",
    color: "#172D38",
    link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
  },
  {
    name: "Material Icon",
    img: "/img/icons/extension/Material_Icon_Theme.png",
    description: "Thème d'icônes pour le code",
    categorie: "Extension",
    color: "#00579B",
    link: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
  },
];

export const btsSioItems = {
  titre: "BTS SIO",
  description: `Le BTS SIO (Services Informatiques aux Organisations) est un diplôme national de l'enseignement supérieur français. Il forme des informaticiens qui seront capables de gérer des parcs informatiques, d'administrer des réseaux, de développer des applications, de concevoir des bases de données, de sécuriser des systèmes d'information, de mettre en place des solutions de virtualisation et de cloud computing.`,
};

export const BtsItems = [
  {
    id: 1,
    titre: "Option Slam",
    option: "BTS SIO OPTION SLAM",
    my_option: true,
    img: "/img/background/slam.jpg",
    description: `SLAM (Solutions Logicielles et Applications Métiers) est une option qui consiste à apprendre les bases de la programmation logicielle et web.`,
    debouchés: [
      "Développeur informatique",
      "Programmeur",
      "Analyste programmeur",
      "Technicien informatique",
      "Responsable des services applicatifs",
      "Informaticien d’études",
      "Développeur d’applications informatiques",
    ],
    link: "https://www.ynov.com/formations/informatique/bts-sio-slam",
  },

  {
    id: 2,
    titre: "Option Sisr",
    option: "BTS SIO OPTION SISR",
    my_option: false,
    img: "/img/background/cyber.jpg",
    description: `SISR (Solutions d'Intrastructure Systèmes et Réseaux) est une option qui consiste de se spécialiser dans la mise en place et la maintenance des réseaux informatiques.`,
    debouchés: [
      "Pilote d’exploitation",
      "Administrateur systèmes et réseaux",
      "Gestionnaire du parc informatique de l’entreprise",
      "Analyste d’exploitation informatique",
      "Technicien des réseaux de télécommunications",
      "Technicien d’infrastructure",
      "Technicien systèmes et réseaux",
    ],
    link: "https://www.ynov.com/formations/informatique/bts-sio-sisr",
  },
];

export const SetupItems = [
  {
    categorie: "Écran",
    title: "AOC gamer",
    link: "https://amzn.eu/d/gndgVm2",
  },
  {
    categorie: "Écran",
    title: "ASUS VP228DE",
    link: "https://amzn.eu/d/88zeysk",
  },
  {
    categorie: "Clavier",
    title: "Apex 3 TKL",
    link: "https://amzn.eu/d/0ZbqliC",
  },
  {
    categorie: "Souris",
    title: "Logitech G PRO",
    link: "https://amzn.eu/d/9mYxvH8",
  },
  {
    categorie: "Tapis de souris",
    title: "TITANWOLF XXL",
    link: "https://amzn.eu/d/cdbR1UB",
  },
  {
    categorie: "Écouteurs",
    title: "Hidizs MS1 Galaxy",
    link: "https://amzn.eu/d/9PuDO2L",
  },
  {
    categorie: "Disque dur",
    title: "WD 2 To",
    link: "https://amzn.eu/d/8ClqgPr",
  },
  {
    categorie: "Disque dur",
    title: "LaCie Rugged Mini 1To",
    link: "https://amzn.eu/d/bCx0zFE",
  },
];

export const PcItems = [
  {
    categorie: "Processeur",
    title: "Intel® Core™ i5 14400F",
    link: "https://amzn.eu/d/gSrqm7t",
  },
  {
    categorie: "Carte Graphique",
    title: "RTX® 4070 SUPER",
    link: "https://www.ldlc.com/fiche/PB00588184.html",
  },
  {
    categorie: "RAM",
    title: "FURY Beast DDR5 (2 x 16 Go)",
    link: "https://amzn.eu/d/gOfghSy",
  },
  {
    categorie: "Carte Mère",
    title: "MSI B760 GAMING",
    link: "https://amzn.eu/d/8yWrjd3",
  },
  {
    categorie: "Refroidissement",
    title: "CORSAIR H100 RGB",
    link: "https://amzn.eu/d/4HHO7R1",
  },
  {
    categorie: "Alimentation",
    title: "MWE Gold 750",
    link: "https://amzn.eu/d/4TdHaqq",
  },
  {
    categorie: "SSD",
    title: "Crucial P310 SSD 1 To",
    link: "https://amzn.eu/d/dV1fQIa",
  },
];
