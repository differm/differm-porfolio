"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface Dimensions {
  width: string;
  height: string;
  borderRadius?: string;
}

interface UseAnimateDimensionsProps {
  initialDimensions: Dimensions;
  finalDimensions: Dimensions;
  duration?: number;
  ease?: string;
  delay?: number;
}

export const useAnimateDimensions = ({
  initialDimensions,
  finalDimensions,
  duration = 1,
  ease = "power2.inOut",
  delay = 0,
}: UseAnimateDimensionsProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const tl = gsap.timeline({ delay });

    // Animación inicial (opcional, para transiciones más suaves)
    tl.fromTo(
      elementRef.current,
      { 
        width: initialDimensions.width, 
        height: initialDimensions.height, 
        borderRadius: initialDimensions.borderRadius || "9999px" 
      },
      { duration: 0.2, ease: "power2.out" }
    );

    // Animación a las dimensiones finales
    tl.to(elementRef.current, {
      width: finalDimensions.width,
      height: finalDimensions.height,
      borderRadius: finalDimensions.borderRadius || "1rem",
      duration,
      ease,
    });
  }, [initialDimensions, finalDimensions, duration, ease, delay]);

  return elementRef;
};
