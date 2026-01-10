"use client";
import { motion } from "framer-motion";

import * as React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronsLeft, LucideIcon, Search } from "lucide-react";
import { SZLogo } from "./logo";

// Context pour gérer l'état de la sidebar
type SidebarContextType = {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextType | null>(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
}

// Provider principal
export function SidebarProvider({
  children,
  defaultCollapsed = false,
}: {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const toggleSidebar = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  // Persistance de l'état dans le localStorage (si la sidebar est fermée ou ouverte):
  React.useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved) setIsCollapsed(JSON.parse(saved));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, setIsCollapsed, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// Composant Sidebar principal
export function Sidebar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        "h-screen bg-[#fafafa] border-r border-gray-300 p-3 transition-all duration-300 fixed inset-y-0 z-10",
        isCollapsed ? "p-3" : "w-[256px]",
        className
      )}
      {...props}
    >
      <div className={cn("flex flex-col h-full", isCollapsed && "w-10")}>
        {children}
      </div>
    </div>
  );
}

// Header de la sidebar
export function SidebarHeader({
  className,
  href,
  titre,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  href?: string;
  titre?: string;
}) {
  const { isCollapsed } = useSidebar();
  return (
    <div
      className={cn(
        "flex flex-row gap-2 items-center top-0 sticky",
        isCollapsed && "justify-center",
        className
      )}
      {...props}
    >
      <Link href={href || "/"} className="flex items-center gap-2">
        <SZLogo size={40} />
        {!isCollapsed && (
          <h1 className="text-lg font-semibold text-gray-800">{titre}</h1>
        )}
      </Link>
    </div>
  );
}

// Container pour le contenu
export function SidebarContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-4 my-4", className)} {...props}>
      {children}
    </div>
  );
}

// Bouton de recherche
export function SidebarStatusButton({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {}) {
  const { isCollapsed } = useSidebar();

  return (
    <a
      href="#"
      className={cn(
        "flex flex-row items-center justify-between text-sm h-10 px-3 rounded-full border border-gray-400 bg-white group transition-all duration-200 hover:bg-gray-100",
        isCollapsed && "justify-center aspect-square",
        className
      )}
      {...props}
    >
      <div className="flex flex-row items-center gap-3">
        <motion.div
          className="h-2 w-2 bg-green-500 rounded-full"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {!isCollapsed && (
          // <p className="text-gray-600 group-hover:text-gray-800 c">
          //   En recherche d&apos;alternance
          // </p>
          <p className="text-sm font-medium transition-colors duration-200">
            En recherche d&apos;alternance
          </p>
        )}
      </div>
    </a>
  );
}

// Groupe de boutons dans la sidebar
export function SidebarButtonGroup({
  className,
  children,
  text,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { text?: string }) {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        "flex flex-col gap-1.5",
        isCollapsed && "items-center",
        className
      )}
      {...props}
    >
      {!isCollapsed && text && (
        <p className="text-xs text-gray-600 font-medium ms-1">{text}</p>
      )}
      {children}
    </div>
  );
}

// Bouton standard de la sidebar
export function SidebarButton({
  className,
  shortcut,
  href,
  isActive,
  text,
  icon: Icon,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  shortcut?: string;
  href?: string;
  isActive?: boolean;
  text?: string;
  icon?: LucideIcon;
}) {
  const { isCollapsed } = useSidebar();
  const pathname = usePathname();

  // Détection automatique si isActive n'est pas fourni
  const active = isActive ?? (href ? pathname === href : false);

  return (
    <a
      href={href || "#"}
      className={cn(
        "flex flex-row items-center justify-between text-sm px-3 py-2 rounded-lg group mx-0.5 transition-colors duration-200 hover:bg-gray-200 h-9 text-gray-700",
        active && "bg-gray-300 text-gray-900 font-medium",
        isCollapsed && "justify-center px-2 aspect-square",
        className
      )}
      {...props}
    >
      <div className="flex flex-row items-center gap-2">
        {Icon ? <Icon size={16} /> : null}
        {!isCollapsed && <p className="font-medium">{text}</p>}
      </div>
      {!isCollapsed && shortcut && (
        <span className="hidden group-hover:block text-xs text-gray-500 font-medium ms-1">
          {shortcut}
        </span>
      )}
    </a>
  );
}

// Separator de la sidebar
export function SidebarSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={cn(
        "border-t border-gray-300 my-1 mx-auto w-[70%] transition-all duration-100",
        className
      )}
      {...props}
    />
  );
}

// Footer de la sidebar
export function SidebarFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        "bottom-0 sticky mt-auto flex flex-row justify-between items-center",
        isCollapsed && "flex-col gap-1.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Avatar utilisateur
export function SidebarUserAvatar({
  className,
  lettre,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { lettre?: string }) {
  return (
    <a
      href=""
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center rounded-full bg-pink-500 w-7 h-7 text-xs font-medium text-white">
        {lettre}
      </span>
    </a>
  );
}

// Bouton de toggle
export function SidebarToggle({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggleSidebar, isCollapsed } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-450 text-gray-700",
        isCollapsed && "rotate-180",
        className
      )}
      {...props}
    >
      <ChevronsLeft size={16} />
    </button>
  );
}
