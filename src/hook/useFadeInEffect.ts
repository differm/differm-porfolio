"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface UseFadeInEffectProps {
  duration?: number;
  ease?: string;
  delay?: number;
}

export const useFadeInEffect = ({
  duration = 1,
  ease = "power2.out",
  delay = 0,
}: UseFadeInEffectProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { 
        opacity: 0 
      },
      { 
        opacity: 1, 
        duration, 
        ease, 
        delay 
      }
    );
  }, [duration, ease, delay]);

  return elementRef;
};
