"use client";

import * as React from "react";
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

import { NavMain } from "@/components/sidebar/nav-main";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  // SidebarHeader,
  // SidebarMenu,
  // SidebarMenuButton,
  // SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
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
          url: "/Bts/SISR",
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      {/* <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-sm"></div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Alexis De Jesus</span>
                  <span className="truncate text-xs">Flytzi</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader> */}
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
