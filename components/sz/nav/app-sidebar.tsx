import * as React from "react";

import { sidebar_data } from "@/data/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-folder";
import { NavSecondary } from "./nav-secondary";
import { SidebarOptInForm } from "./nav-infos";
import { UserRound } from "lucide-react";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();

  return (
    <>
      {!open && (
        <div className="fixed left-4 top-4 z-40 flex flex-col bg-sidebar p-1 border border-sidebar-border rounded-lg shadow-sm animate-in fade-in-0 zoom-in-95 slide-in-from-left-5 duration-200">
          <SidebarTrigger />
        </div>
      )}

      <Sidebar variant="floating" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex w-full justify-between overflow-hidden rounded-md p-2 text-sm">
                <a href="#" className="flex flex-row gap-2">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <UserRound className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-medium">Alexis De Jesus</span>
                    <span className="">Portfolio</span>
                  </div>
                </a>
                <SidebarTrigger />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={sidebar_data.navMain} />
          <NavProjects projects={sidebar_data.navProjects} />
        </SidebarContent>
        <SidebarFooter>
          <SidebarOptInForm />
          <NavSecondary items={sidebar_data.navSecondary} className="mt-auto" />
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
