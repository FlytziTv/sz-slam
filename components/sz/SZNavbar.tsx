"use client";

import { useState } from "react";
import { LucideIcon, Share, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../icons/logo";

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

function SZNav({
  top,
  pages,
  isCategory,
  category,
}: {
  top: boolean;
  pages: SZNavPagesProps[];
  isCategory: boolean;
  category?: SZNavCategoryProps[];
}) {
  return (
    <nav
      data-slot="SZNav"
      className={`p-3 bg-[#0A0A0A] border border-[#242424] rounded-full w-fit z-900 fixed flex flex-row items-center justify-center gap-3 left-1/2 -translate-x-1/2 ${top ? "top-4" : "bottom-4"}`}
    >
      <NavLogo />
      <NavSeparator />
      <NavContainer gap="4px">
        {pages.map((item) => (
          <NavItem key={item.id} Icon={item.styles.icon} link={item.url} />
        ))}
      </NavContainer>
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
        {/* <NavMenu /> */}
      </NavContainer>
    </nav>
  );
}

function NavContainer({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap: string;
}) {
  return (
    <div
      data-slot="NavContainer"
      className="flex flex-row items-center justify-center"
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

function NavSeparator() {
  return (
    <div
      data-slot="NavSeparator"
      className="w-px h-5 bg-[#2D2D2D] rounded-2xl"
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

function NavMenu() {
  const [Open, setOpen] = useState(false);

  return (
    <button
      data-slot="NavMenu"
      onClick={() => setOpen((prev) => !prev)}
      className="aspect-square h-7 flex items-center justify-center text-[#A1A1A1] hover:text-[#eeeef0] transition-colors duration-300 cursor-pointer"
    >
      {Open ? <X size={16} /> : <Menu size={16} />}
    </button>
  );
}

function NavShare() {
  return (
    <button
      data-slot="NavShare"
      className="aspect-square h-7 flex items-center justify-center text-[#A1A1A1] hover:text-[#eeeef0] transition-colors duration-300 cursor-pointer"
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
