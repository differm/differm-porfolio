"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationProps {
  threshold?: number;
  animationDuration?: number;
}

export const useScrollAnimation = ({
  threshold = 100,
  animationDuration = 0.3,
}: UseScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (elementRef.current) {
        if (scrollY > threshold) {
          // Si el scroll es mayor al threshold, ocultar la imagen
          elementRef.current.style.transform = `translateY(${
            scrollY - threshold
          }px)`;
          elementRef.current.style.opacity = `${Math.max(
            0,
            1 - (scrollY - threshold) / 200
          )}`;
        } else {
          // Si el scroll es menor al threshold, mostrar la imagen en su posición original
          elementRef.current.style.transform = "translateY(0px)";
          elementRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return elementRef;
};
