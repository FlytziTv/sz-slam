"use client";

import * as React from "react";

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

import { dataNavbar } from "@/data/data";

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
        <NavMain items={dataNavbar.navMain} />
        <NavSecondary items={dataNavbar.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
