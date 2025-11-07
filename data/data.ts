import {
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  Home,
  LifeBuoy,
  Search,
  Send,
  User,
} from "lucide-react";

export const dataNavbar = {
  navMain: [
    {
      title: "Accueil",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "A Propos",
      url: "/A-Propos",
      icon: User,
      isActive: true,
    },
    {
      title: "BTS SIO",
      url: "/Bts",
      icon: GraduationCap,
      isActive: true,
      items: [
        {
          title: "Option SLAM",
          url: "/Bts/Slam",
        },
        {
          title: "Option SISR",
          url: "/Bts/Sisr",
        },
      ],
    },
    {
      title: "Formations",
      url: "/Formations",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Ecole",
          url: "#",
        },
        {
          title: "Entreprise",
          url: "#",
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
      isActive: true,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Contacts",
      url: "/Contacts",
      icon: Send,
    },
  ],
};
