"use client";
import { pages } from "@/lib/nav-config";
import { SZNav } from "./SZNavbar";

export function NavWrapper() {
  return <SZNav top={false} isCategory={false} pages={pages} />;
}
