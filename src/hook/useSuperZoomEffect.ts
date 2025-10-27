"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface UseSuperZoomEffectProps {
  initialScale?: number;
  finalScale?: number;
  duration?: number;
  delay?: number;
  ease?: string;
}

export const useSuperZoomEffect = ({
  initialScale = 3,
  finalScale = 1,
  duration = 2,
  delay = 0,
  ease = "power2.out",
}: UseSuperZoomEffectProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { 
        scale: initialScale,
        opacity: 0
      },
      { 
        scale: finalScale,
        opacity: 1,
        duration,
        ease,
        delay
      }
    );
  }, [initialScale, finalScale, duration, ease, delay]);

  return elementRef;
};
