"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface UseBlurEffectProps {
  duration?: number;
  delay?: number;
  blurIntensity?: number;
}

export const useBlurEffect = ({
  duration = 0.5,
  delay = 0,
  blurIntensity = 10,
}: UseBlurEffectProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const tl = gsap.timeline({ delay });

    // Aplicar blur gradualmente
    tl.to(elementRef.current, {
      filter: `blur(${blurIntensity}px)`,
      duration: duration / 2,
      ease: "power1.inOut",
    })
    // Quitar blur gradualmente
    .to(elementRef.current, {
      filter: "blur(0px)",
      duration: duration / 2,
      ease: "power1.inOut",
    });
  }, [duration, delay, blurIntensity]);

  return elementRef;
};
