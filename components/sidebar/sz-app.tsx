"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContainer,
  SidebarStatusButton,
  SidebarButton,
  SidebarFooter,
  SidebarToggle,
  SidebarButtonGroup,
  SidebarSeparator,
} from "@/components/sidebar/sz-sidebar";
import { data_sidebar } from "@/data/sidebar";

import React from "react";

export function SZAppSidebar() {
  const sections = Object.entries(data_sidebar);

  return (
    <Sidebar>
      <SidebarHeader href="/dashboard/about" titre="Dashboard" />

      {/* Contenu principal */}
      <SidebarContainer>
        {/* Bouton de recherche */}
        <SidebarStatusButton />

        {sections.map(([sectionName, sectionData], index) => (
          <React.Fragment key={sectionName}>
            <SidebarButtonGroup text="">
              {sectionData[0].group.map((item) => (
                <SidebarButton
                  key={item.title}
                  href={item.url}
                  text={item.title}
                  icon={item.icon}
                />
              ))}
            </SidebarButtonGroup>
            {index < sections.length - 1 && <SidebarSeparator />}
          </React.Fragment>
        ))}
      </SidebarContainer>

      {/* Footer avec avatar et toggle */}
      <SidebarFooter>
        <SidebarToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
