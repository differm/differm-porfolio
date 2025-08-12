"use client";

import gsap from "gsap";
import { useEffect } from "react";

export function useAnimateFromSide(
  ref: React.RefObject<HTMLDivElement | null>,
  side: "left" | "right" = "left"
) {
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { x: side === "left" ? -200 : 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, [ref, side]);
}
