"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ZoomImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Image miniature */}
      <motion.div
        whileHover={{ scale: 1 }}
        className="cursor-pointer w-full h-full relative"
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          {...(fill ? { fill: true } : { width, height })}
          className={`object-cover ${className}`}
        />
      </motion.div>

      {/* Image plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={900}
                className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
