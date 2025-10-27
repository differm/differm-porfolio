"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

interface UseAnimateFromBottomProps {
  duration?: number;
  ease?: string;
  delay?: number;
  distance?: number;
  blurEffect?: boolean;
  blurDuration?: number;
  blurDelay?: number;
}

export const useAnimateFromBottom = ({
  duration = 1,
  ease = "power2.out",
  delay = 0,
  distance = 200,
  blurEffect = false,
  blurDuration = 0.5,
  blurDelay = 0,
}: UseAnimateFromBottomProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const tl = gsap.timeline();

    // Animación principal desde abajo
    tl.fromTo(
      elementRef.current,
      { 
        y: distance, 
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

    // Efecto de blur si está habilitado
    if (blurEffect) {
      tl.fromTo(
        elementRef.current,
        { filter: "blur(0px)" },
        { 
          filter: "blur(10px)", 
          duration: blurDuration / 2, 
          ease: "power2.inOut",
          delay: blurDelay 
        },
        "-=0.1" // Comienza un poco antes de que termine la animación principal
      )
      .to(
        elementRef.current,
        { 
          filter: "blur(0px)", 
          duration: blurDuration / 2, 
          ease: "power2.inOut" 
        }
      );
    }
  }, [duration, ease, delay, distance, blurEffect, blurDuration, blurDelay]);

  return elementRef;
};
