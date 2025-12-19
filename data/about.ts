import { Code2, Network, Terminal } from "lucide-react";

export const personal_data = {
  firstname: "Alexis",
  lastname: "De Jesus",

  stats: [
    {
      id: 1,
      link_page: "/dashboard/about/formation",
      label: "Expérience",
      val: "2",
      unit: "ANS",
      sub: "En formation",
    },
    {
      id: 2,
      link_page: "/dashboard/missions",
      label: "Projets",
      val: "15",
      unit: "+",
      sub: "En cours et terminés",
    },
    {
      id: 3,
      link_page: "/dashboard/about/certifications",
      label: "Certifications",
      val: "3",
      unit: "",
      sub: "Obtenues",
    },
    {
      id: 4,
      link_page: "/dashboard/about/bts",
      label: "Formation",
      val: "BTS SIO ",
      unit: "SLAM",
      sub: "Promo 2025 - 2027",
    },
  ],
  location: {
    label: "Localisation",
    link_page: "",
    val: "Paris",
    unit: "FR",
    sub: "Nanterre Campus",
  },
  stack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
};

export const bts_data = [
  {
    id: 1,
    title: "BTS SIO",
    bts_name: "Services Informatiques aux Organisations",
    color: "green",
    icons: Terminal,
    Description:
      "Ce cursus d'excellence en deux ans forme des techniciens supérieurs capables de gérer les enjeux de la transformation numérique. Il combine expertise technique, cybersécurité et gestion de projets au service des entreprises.",
  },
];

export const bts_option_data = [
  {
    id: 1,
    title: "SLAM",
    option_name: "Solutions Logicielles et Applications Métiers",
    color: "blue",
    icons: Code2,
    Description:
      "Spécialisation dans la conception et la maintenance de solutions applicatives. Focus sur l'architecture logicielle et le développement web & mobile.",
    jobs: [
      "Développeur Fullstack",
      "Analyste d'applications",
      "Développeur Mobile",
      "Webmaster technique",
    ],
  },
  {
    id: 2,
    title: "SISR",
    option_name: "Solutions d'Infrastructure, Systèmes et Réseaux",
    color: "purple",
    icons: Network,
    Description:
      "Spécialisation dans la gestion et la maintenance des infrastructures réseaux et systèmes. Accent sur la sécurité, la virtualisation et l'administration des serveurs.",
    jobs: [
      "Admin Systèmes & Réseaux",
      "Technicien Support",
      "Gestionnaire de parc",
      "Expert Cybersécurité",
    ],
  },
];

export const certif_data = [
  {
    id: 1,
    categorie: "Autodidacte",
    titre: "Html",
    img: "/img/certif/html.png",
    pdf: "/files/certif/codédex_html.pdf",
    description:
      "Certification Codedex en HTML5 : maîtrise de la structure sémantique, création de pages web accessibles, formulaires complets et bonnes pratiques de balisage.",
    link: "https://www.codedex.io/html",
    date: "2025",
  },
  {
    id: 2,
    categorie: "Autodidacte",
    titre: "Css",
    img: "/img/certif/css.png",
    pdf: "/files/certif/codédex_css.pdf",
    description:
      "Certification Codedex en CSS3 : compétences en mise en forme, layout responsif, gestion avancée des flexbox/grid et application des bonnes pratiques de design.",
    link: "https://www.codedex.io/css",
    date: "2025",
  },
  {
    id: 3,
    categorie: "Scolaire",
    titre: "Pix",
    img: "/img/certif/pix.png",
    pdf: "/files/certif/pix.pdf",
    description:
      "Certification PIX : validation des compétences numériques clés, sécurité informatique, gestion de l’information, résolution de problèmes et maîtrise des outils digitaux.",
    link: "https://pix.fr/",
    date: "2025",
  },
];

export const tools_data = [
  // =====================
  // Langages
  // =====================
  {
    id: 1,
    name: "HTML",
    img: "/img/icons/skills/html.svg",
    categorie: "Langages",
    link: "https://developer.mozilla.org/fr/docs/Web/HTML",
  },
  {
    id: 2,
    name: "CSS",
    img: "/img/icons/skills/css.svg",
    categorie: "Langages",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "/img/icons/skills/javascript.svg",
    categorie: "Langages",
    link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    id: 4,
    name: "TypeScript",
    img: "/img/icons/skills/typescript.svg",
    categorie: "Langages",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 5,
    name: "Lua",
    img: "/img/icons/skills/lua.svg",
    categorie: "Langages",
    link: "https://www.lua.org/",
  },

  // =====================
  // Frameworks & Tech
  // =====================
  {
    id: 6,
    name: "React",
    img: "/img/icons/skills/react.svg",
    categorie: "Frameworks & Tech",
    link: "https://reactjs.org/",
  },
  {
    id: 7,
    name: "Vue.js",
    img: "/img/icons/skills/vue.svg",
    categorie: "Frameworks & Tech",
    link: "https://vuejs.org/",
  },
  {
    id: 8,
    name: "Next.js",
    img: "/img/icons/skills/nextjs.svg",
    categorie: "Frameworks & Tech",
    link: "https://nextjs.org/",
  },
  {
    id: 9,
    name: "Tailwind CSS",
    img: "/img/icons/skills/tailwindcss.svg",
    categorie: "Frameworks & Tech",
    link: "https://tailwindcss.com/",
  },
  {
    id: 10,
    name: "Node.js",
    img: "/img/icons/skills/nodejs.svg",
    categorie: "Frameworks & Tech",
    link: "https://nodejs.org/",
  },
  {
    id: 11,
    name: "MySQL",
    img: "/img/icons/skills/mysql.svg",
    categorie: "Frameworks & Tech",
    link: "https://www.mysql.com/",
  },
  {
    id: 12,
    name: "Git",
    img: "/img/icons/logiciel/git.svg",
    categorie: "Frameworks & Tech",
    link: "https://git-scm.com/",
  },

  // =====================
  // Outils & Logiciels
  // =====================
  {
    id: 13,
    name: "Visual Studio Code",
    img: "/img/icons/logiciel/vscode.svg",
    categorie: "Outils & Logiciels",
    link: "https://code.visualstudio.com/",
  },
  {
    id: 14,
    name: "Figma",
    img: "/img/icons/logiciel/figma.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.figma.com/fr-fr/",
  },
  {
    id: 15,
    name: "SolidWorks",
    img: "/img/icons/logiciel/solidworks.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.solidworks.com/fr",
  },
  {
    id: 16,
    name: "AutoCAD",
    img: "/img/icons/logiciel/autocad.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.autodesk.com/fr/products/autocad/overview",
  },
  {
    id: 17,
    name: "Fusion 360",
    img: "/img/icons/logiciel/fusion360.svg",
    categorie: "Outils & Logiciels",
    link: "https://www.autodesk.com/fr/products/fusion-360/overview",
  },
  {
    id: 18,
    name: "Blender",
    img: "/img/icons/logiciel/blender.svg",
    categorie: "Outils & Logiciels",
    link: "https://studio.blender.org/welcome/",
  },

  // =====================
  // Extensions
  // =====================
  {
    id: 19,
    name: "Auto Rename Tag",
    img: "/img/icons/extension/Auto_Rename_Tag.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
  },
  {
    id: 20,
    name: "Color Highlighter",
    img: "/img/icons/extension/Color_Highlighter.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight",
  },
  {
    id: 21,
    name: "EditorConfig",
    img: "/img/icons/extension/EditorConfig.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",
  },
  {
    id: 22,
    name: "Error Lens",
    img: "/img/icons/extension/Error_Lens.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
  },
  {
    id: 23,
    name: "ESLint",
    img: "/img/icons/extension/ESLint.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
  },
  {
    id: 24,
    name: "GitHub Copilot",
    img: "/img/icons/extension/GitHub_Copilot.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",
  },
  {
    id: 25,
    name: "Prettier",
    img: "/img/icons/extension/Prettier_Code_formatter.png",
    categorie: "Extensions",
    link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
  },
];
