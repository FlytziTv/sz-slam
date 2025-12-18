"use client";

import { Spinner } from "@/components/ui/spinner";
import { motion } from "framer-motion";

export default function Projets() {
  return (
    <div className="h-full m-auto w-full px-8 gap-4 flex flex-col ">
      <div className="h-full flex flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-center justify-center h-full gap-4"
        >
          <Spinner className="size-6" />

          <div className="text-center space-y-1">
            <h2 className="text-lg font-medium">En construction</h2>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Cette section affichera prochainement mes projets réalisés dans le
              cadre de l’épreuve E6 du BTS SIO SLAM. Les fiches et documents
              seront ajoutés dès qu’ils seront finalisés.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
