"use client";

import { motion } from "framer-motion";

export function SidebarOptInForm() {
  return (
    <div className="mx-2 px-4 py-2 border border-border rounded-lg bg-secondary/50 flex items-center gap-2">
      <motion.div
        className="h-2 w-2 bg-green-500 rounded-full"
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <p className="text-sm font-medium">En recherche d&apos;alternance</p>
    </div>
  );
}
