"use client";

import { useState } from "react";
import { LucideIcon, Share, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../icons/logo";
import { cn } from "@/lib/utils";

interface SZNavPagesProps {
  id: number;
  name: string;
  url: string;
  styles: {
    icon: LucideIcon;
  };
}
interface SZNavCategoryProps {
  id: number;
  name: string;
  url: string;
  styles: {
    color: string;
    icon: LucideIcon;
  };
}

interface SZNavProps {
  top: boolean;
  pages: SZNavPagesProps[];
  isCategory: boolean;
  category?: SZNavCategoryProps[];
}

function SZNav({ top, pages, isCategory, category }: SZNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && (
        <div
          className={`fixed left-4 right-4 z-899 sm:hidden 
            bg-[#0A0A0A] border border-[#242424] rounded-2xl p-2 flex flex-col gap-1
            ${top ? "top-21" : "bottom-21"}`}
        >
          {pages.map((item) => (
            <NavItemMobile
              key={item.id}
              Icon={item.styles.icon}
              label={item.name}
              link={item.url}
              onClose={() => setMenuOpen(false)}
            />
          ))}
          {isCategory && category && (
            <>
              <div className="w-full h-px bg-[#2D2D2D] my-1" />
              {category.map((item) => (
                <NavItemMobile
                  key={item.id}
                  Icon={item.styles.icon}
                  label={item.name}
                  link={item.url}
                  color={item.styles.color}
                  onClose={() => setMenuOpen(false)}
                />
              ))}
            </>
          )}
        </div>
      )}

      <nav
        className={`p-3 bg-[#0A0A0A] border border-[#242424] rounded-full w-fit z-900 fixed flex flex-row items-center justify-center gap-3 left-1/2 -translate-x-1/2 ${top ? "top-4" : "bottom-4"}`}
      >
        <NavLogo />
        <NavSeparator className="hidden sm:flex" />
        <NavMenuContainer gap="4px">
          {pages.map((item) => (
            <NavItem key={item.id} Icon={item.styles.icon} link={item.url} />
          ))}
        </NavMenuContainer>
        <NavSeparator />
        {isCategory && (
          <>
            <NavContainer gap="8px">
              {category?.map((item) => (
                <NavCategory
                  key={item.id}
                  Icon={item.styles.icon}
                  color={item.styles.color}
                  link={item.url}
                />
              ))}
            </NavContainer>
            <NavSeparator />
          </>
        )}
        <NavContainer gap="4px">
          <NavShare />
          <NavMenu open={menuOpen} setOpen={setMenuOpen} />
        </NavContainer>
      </nav>
    </>
  );
}

function NavMenuContainer({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap: string;
}) {
  return (
    <div
      data-slot="NavContainer"
      className="hidden sm:flex flex-row items-center justify-center"
      style={{ gap: gap }}
    >
      {children}
    </div>
  );
}

function NavContainer({
  children,
  className,
  gap,
}: {
  children: React.ReactNode;
  className?: string;
  gap: string;
}) {
  return (
    <div
      data-slot="NavContainer"
      className={cn(`flex flex-row items-center justify-center`, className)}
      style={{ gap: gap }}
    >
      {children}
    </div>
  );
}

function NavLogo() {
  return (
    <Link
      data-slot="NavLogo"
      href="/"
      className="aspect-square h-7 flex items-center justify-center hover:opacity-60 transition-opacity duration-300 cursor-pointer"
    >
      <Logo size={16} />
    </Link>
  );
}

function NavSeparator({ className }: { className?: string }) {
  return (
    <div
      data-slot="NavSeparator"
      className={cn(`w-px h-5 bg-[#2D2D2D] rounded-2xl`, className)}
    />
  );
}

function NavItem({ Icon, link }: { Icon: LucideIcon; link: string }) {
  const pathname = usePathname();

  return (
    <Link
      data-slot="NavItem"
      href={link}
      className={`aspect-square h-7 flex items-center justify-center transition-colors duration-300 cursor-pointer ${
        pathname === link
          ? "text-[#eeeef0]"
          : "text-[#A1A1A1] hover:text-[#eeeef0]"
      }`}
    >
      <Icon size={16} />
    </Link>
  );
}

function NavItemMobile({
  Icon,
  label,
  link,
  color,
  onClose,
}: {
  Icon: LucideIcon;
  label: string;
  link: string;
  color?: string;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      onClick={onClose}
      className="flex flex-row items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-[#1A1A1A]"
      style={{
        color: color ?? (isActive ? "#eeeef0" : "#A1A1A1"),
        backgroundColor: color ?? (isActive ? "#1A1A1A" : "transparent"),
      }}
    >
      <Icon size={16} />
      <span className="text-sm font-medium whitespace-nowrap">{label}</span>
    </Link>
  );
}

function NavMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <button
      data-slot="NavMenu"
      onClick={() => setOpen(!open)}
      className="aspect-square h-7 flex sm:hidden items-center justify-center text-[#A1A1A1] hover:text-[#eeeef0] transition-colors duration-300 cursor-pointer"
    >
      {open ? <X size={16} /> : <Menu size={16} />}
    </button>
  );
}

function NavShare() {
  return (
    <button
      data-slot="NavShare"
      className="hidden sm:flex aspect-square h-7 items-center justify-center text-[#A1A1A1] hover:text-[#eeeef0] transition-colors duration-300 cursor-pointer"
    >
      <Share size={16} />
    </button>
  );
}

function NavCategory({
  Icon,
  color,
  link,
}: {
  Icon: LucideIcon;
  color: string;
  link: string;
}) {
  return (
    <Link
      data-slot="NavCategory"
      href={link}
      className="aspect-square h-7 border rounded-2xl flex items-center justify-center cursor-pointer transition-transform duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: `${color}40`,
        borderColor: color,
        color: color,
      }}
    >
      <Icon size={16} />
    </Link>
  );
}

export {
  SZNav,
  NavContainer,
  NavLogo,
  NavSeparator,
  NavItem,
  NavMenu,
  NavShare,
  NavCategory,
};
