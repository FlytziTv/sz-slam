import * as React from "react";

import { sidebar_data } from "@/data/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Switcher } from "./switcher";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-folder";
import { NavSecondary } from "./nav-secondary";
import { SidebarOptInForm } from "./nav-infos";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <Switcher />
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
  );
}
