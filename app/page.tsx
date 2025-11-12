"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <section className="relative flex min-h-full flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background via-background to-muted/20" />

      <motion.h1
        className="font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Bienvenue sur mon portfolio{" "}
        <motion.span
          style={{ display: "inline-block", transformOrigin: "70% 70%" }}
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
        >
          👋
        </motion.span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-3xl text-muted-foreground text-base sm:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Je suis{" "}
        <span className="text-foreground font-medium">Alexis De Jesus</span>,
        étudiant en développement web, passionné par la conception
        d’applications modernes alliant performance, design épuré et expérience
        utilisateur soignée.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link href="/Projets">
          <Button variant={"outline"} size={"lg"}>
            Voir mes projets
          </Button>
        </Link>

        <Link href="/Contacts">
          <Button
            variant={"default"}
            size={"lg"}
            className="text-background bg-foreground"
          >
            Me contacter
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
