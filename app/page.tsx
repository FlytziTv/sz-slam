"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);

  const texts = ["Bienvenue sur mon portfolio", "Bienvenue dans mon univers"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex(1);
    }, 5000); // 10 secondes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen w-full p-5 items-center justify-center font-sans bg-black select-none">
      <main className="relative flex flex-col items-center justify-center w-full h-full">
        <Image
          className="object-cover rounded-2xl pointer-events-none select-none"
          src="/img/background/bg.png"
          alt="Background"
          fill
        />

        <div className="absolute flex flex-col justify-center items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={texts[textIndex]}
              className="text-5xl font-bold text-white z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.5 }}
            >
              {texts[textIndex]}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            className="text-lg text-white z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Découvrez mes projets et compétences en développement web.
          </motion.p>

          <Link href="/dashboard/about" className="z-10">
            <Button size="lg" variant="secondary">
              Ouvrir mon portfolio
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-4 right-6 z-10">
          <p className="font-normal text-sm text-background">Alexis De Jesus</p>
        </div>
      </main>
    </div>
  );
}
