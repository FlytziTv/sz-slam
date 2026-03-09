import {
  Award,
  BriefcaseBusiness,
  Building,
  CircleUserRound,
  Contact,
  Eye,
  FileText,
  Folder,
  Globe,
  GraduationCap,
  Home,
  Info,
} from "lucide-react";

export const pages = [
  {
    id: 1,
    name: "Accueil",
    url: "/",
    styles: {
      icon: Home,
    },
  },
  {
    id: 2,
    name: "A Propos",
    url: "/about",
    styles: {
      icon: CircleUserRound,
    },
  },
  {
    id: 3,
    name: "Mon Bts",
    url: "/bts",
    styles: {
      icon: GraduationCap,
    },
  },
  {
    id: 4,
    name: "École & Entreprise",
    url: "/works",
    styles: {
      icon: Building,
    },
  },
  {
    id: 5,
    name: "Certifications",
    url: "/certifs",
    styles: {
      icon: Award,
    },
  },
  {
    id: 6,
    name: "Écosystème",
    url: "/ecosystem",
    styles: {
      icon: Globe,
    },
  },
  {
    id: 7,
    name: "Mission E5",
    url: "/e5",
    styles: {
      icon: BriefcaseBusiness,
    },
  },
  {
    id: 8,
    name: "Projets E6",
    url: "/e6",
    styles: {
      icon: Folder,
    },
  },
  {
    id: 9,
    name: "Veilles",
    url: "/veilles",
    styles: {
      icon: Eye,
    },
  },
  {
    id: 10,
    name: "Contact",
    url: "/contact",
    styles: {
      icon: Contact,
    },
  },
];
