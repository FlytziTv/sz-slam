import { Briefcase, Code2, Home, Search, Send, User } from "lucide-react";

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
        {
          title: "Mon Bts",
          url: "/Bts",
        },
        {
          title: "Ma Formation",
          url: "/Formations",
        },
        {
          title: "Mon Écosystème",
          url: "/Ecosysteme",
        },
      ],
    },
    {
      title: "Missions E5",
      url: "/Missions",
      icon: Briefcase,
      isActive: true,
      items: [
        {
          title: "Projet 1",
          url: "#",
        },
        {
          title: "Projet 2",
          url: "#",
        },
        {
          title: "Projet 3",
          url: "#",
        },
      ],
    },
    {
      title: "Projets E6",
      url: "/Projets",
      icon: Code2,
      isActive: true,
      items: [
        {
          title: "Projet 1",
          url: "#",
        },
        {
          title: "Projet 2",
          url: "#",
        },
      ],
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
