"use client";

import * as React from "react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { SocialItems } from "@/data/user";

import { dataNavbar } from "@/data/data";
import { NavProjects } from "./nav-projects";
import { SZIcon } from "../Icons/SZIcon";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a
                href={SocialItems[1].url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <div className="bg-none text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-sm">
                  <SZIcon size_w={40} size_h={"auto"} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Alexis De Jesus</span>
                  <span className="truncate text-muted-foreground text-xs">
                    Etudiant
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={dataNavbar.navMain} />
        <NavProjects projects={dataNavbar.navProjects} />
        <NavSecondary items={dataNavbar.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
