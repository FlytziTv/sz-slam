"use client";

import { useRef, useState } from "react";

export default function TiltWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / 15) * -1;
    const rotateY = (x - rect.width / 2) / 15;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  function resetTransform() {
    setTransform("rotateX(0deg) rotateY(0deg)");
  }

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={resetTransform}
        style={{
          transform,
          transformStyle: "preserve-3d",
          transition: "transform 0.2s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
