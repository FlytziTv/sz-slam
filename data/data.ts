import { Briefcase, Code2, Home, Search, Send, User } from "lucide-react";
import { MissionsItems, ProjetsItems } from "./projets";

export const dataNavbar = {
  navMain: [
    {
      title: "Accueil",
      url: "/",
      icon: Home,
    },
    {
      title: "A Propos",
      url: "/A-Propos",
      icon: User,
      isActive: true,
      items: [
        { title: "Mon Bts", url: "/A-Propos/Bts" },
        { title: "Ma Formation", url: "/A-Propos/Formations" },
        { title: "Mes Certifications", url: "/A-Propos/Certifications" },
        { title: "Mes Compétences", url: "/A-Propos/Skills" },
        { title: "Mon Écosystème", url: "/A-Propos/Ecosysteme" },
      ],
    },
  ],

  navProjects: [
    {
      title: "Missions E5",
      url: "/Missions",
      icon: Briefcase,
      isActive: false,
      items: MissionsItems.filter((p) => p.page).map((p) => ({
        title: p.titre,
        url: `/Missions/${p.id}`,
      })),
    },
    {
      title: "Projets E6",
      url: "/Projets",
      icon: Code2,
      isActive: false,
      items: ProjetsItems.filter((p) => p.page).map((p) => ({
        title: p.titre,
        url: `/Projets/${p.id}`,
      })),
    },
    {
      title: "Veilles",
      url: "/Veilles",
      icon: Search,
    },
  ],

  navSecondary: [
    {
      title: "Contacts",
      url: "/Contacts",
      icon: Send,
    },
  ],
};
