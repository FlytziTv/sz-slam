"use client";

import { AppSidebar } from "@/components/sz/nav/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  // SidebarTrigger,
} from "@/components/ui/sidebar";

export default function LayoutDash({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        {/* <header className="flex py-2 shrink-0 items-center gap-2">
          <SidebarTrigger className="-ml-1" />
        </header> */}

        <div className="flex flex-1 flex-col gap-4 ">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
