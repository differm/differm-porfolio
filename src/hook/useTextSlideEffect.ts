"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface UseTextSlideEffectProps {
  delay?: number;
  duration?: number;
}

export const useTextSlideEffect = ({
  delay = 0,
  duration = 0.8,
}: UseTextSlideEffectProps) => {
  const atSymbolRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!atSymbolRef.current || !textRef.current) return;

    const tl = gsap.timeline({ delay });

    // Primero aparece el @
    tl.fromTo(
      atSymbolRef.current,
      { opacity: 0, scale: 0 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.3, 
        ease: "back.out(1.7)" 
      }
    );

    // Luego el texto se desliza desde la izquierda
    tl.fromTo(
      textRef.current,
      { 
        x: -100, 
        opacity: 0 
      },
      { 
        x: 0, 
        opacity: 1, 
        duration, 
        ease: "power2.out" 
      },
      "-=0.1" // Comienza un poco antes de que termine la animación del @
    );
  }, [delay, duration]);

  return { atSymbolRef, textRef };
};
