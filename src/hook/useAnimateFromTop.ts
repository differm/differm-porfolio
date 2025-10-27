"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface UseAnimateFromTopProps {
  duration?: number;
  ease?: string;
  delay?: number;
  distance?: number;
}

export const useAnimateFromTop = ({
  duration = 1,
  ease = "power2.out",
  delay = 0,
  distance = 200,
}: UseAnimateFromTopProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { 
        y: -distance, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration, 
        ease, 
        delay 
      }
    );
  }, [duration, ease, delay, distance]);

  return elementRef;
};
