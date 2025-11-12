import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { AppSidebar } from "@/components/sidebar/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { AppHeader } from "@/components/sidebar/app-header";

export const metadata: Metadata = {
  title: "Folio - Alexis De Jesus",
  description: "Portfolio d'Alexis De Jesus, étudiant en BTS SIO option SLAM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <AppHeader />
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
              </div>
              <Toaster />
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
