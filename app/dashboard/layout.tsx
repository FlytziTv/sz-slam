"use client";

import { SidebarProvider, useSidebar } from "@/components/sidebar/sz-sidebar";
import { SZAppSidebar } from "@/components/sidebar/sz-app";
import { cn } from "@/lib/utils";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex w-full min-h-screen">
      <SZAppSidebar />

      <main
        className={cn(
          "flex-1 flex flex-col gap-4 p-4 bg-[#ffffff] transition-all duration-100",
          isCollapsed ? "ml-16" : "ml-64"
        )}
      >
        {children}
      </main>
    </div>
  );
}

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}
