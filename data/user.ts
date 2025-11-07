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

export const SkillsItems = [
  {
    name: "HTML",
    img: "/img/icons/skills/html.svg",
    description: "Langage de balisage pour la création de pages web.",
    categorie: "Frontend",
    color: "#E44D26",
  },
  {
    name: "CSS",
    img: "/img/icons/skills/css.svg",
    description: "Langage de style pour la mise en forme des pages web.",
    categorie: "Frontend",
    color: "#264DE4",
  },
  {
    name: "JavaScript",
    img: "/img/icons/skills/javascript.svg",
    description: "Langage de programmation pour le développement web.",
    categorie: "Frontend",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    img: "/img/icons/skills/typescript.svg",
    description: "Langage de programmation pour le développement web.",
    categorie: "Frontend",
    color: "#3178C6",
  },
  {
    name: "React",
    img: "/img/icons/skills/react.svg",
    description:
      "Bibliothèque JavaScript pour la création d'interfaces utilisateur.",
    categorie: "Frontend",
    color: "#00D8FF",
  },
  {
    name: "Vue.js",
    img: "/img/icons/skills/vue.svg",
    description:
      "Framework JavaScript pour la création d'interfaces utilisateur.",
    categorie: "Frontend",
    color: "#41B883",
  },
  {
    name: "Tailwind CSS",
    img: "/img/icons/skills/tailwindcss.svg",
    description: "Framework CSS pour la création d'interfaces utilisateur.",
    categorie: "Frontend",
    color: "#2298BD",
  },
  {
    name: "Next.js",
    img: "/img/icons/skills/nextjs.svg",
    description: "Framework React pour la création d'applications web.",
    categorie: "Frontend",
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    img: "/img/icons/skills/nodejs.svg",
    description: "Environnement d'exécution JavaScript côté serveur.",
    categorie: "Backend",
    color: "#539E43",
  },
  {
    name: "Git",
    img: "/img/icons/skills/git.svg",
    description: "Système de contrôle de version pour le dev collaboratif.",
    categorie: "DevOps",
    color: "#DE4C36",
  },
  {
    name: "MySQL",
    img: "/img/icons/skills/mysql.svg",
    description: "Système de gestion de base de données relationnelle.",
    categorie: "Backend",
    color: "#00546B",
  },
  {
    name: "Lua",
    img: "/img/icons/skills/lua.svg",
    description: "Langage de programmation léger et polyvalent.",
    categorie: "Backend",
    color: "#00007D",
  },
];
