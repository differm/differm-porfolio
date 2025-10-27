"use client";

import { useEffect, useRef } from "react";

interface UseInteractiveGraniteProps {
  intensity?: number;
  radius?: number;
}

export const useInteractiveGranite = ({
  intensity = 0.3,
  radius = 100,
}: UseInteractiveGraniteProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Crear un elemento que "borre" el granito
      const eraser = document.createElement('div');
      eraser.style.position = 'absolute';
      eraser.style.left = `${x - radius/2}px`;
      eraser.style.top = `${y - radius/2}px`;
      eraser.style.width = `${radius}px`;
      eraser.style.height = `${radius}px`;
      eraser.style.borderRadius = '50%';
      eraser.style.background = '#f9f4e1';
      eraser.style.pointerEvents = 'none';
      eraser.style.zIndex = '2';
      eraser.style.opacity = '0.9';
      eraser.style.transition = 'opacity 0.3s ease-out';

      container.appendChild(eraser);

      // Remover después de un tiempo
      setTimeout(() => {
        eraser.style.opacity = '0';
        setTimeout(() => {
          if (eraser.parentNode) {
            eraser.parentNode.removeChild(eraser);
          }
        }, 300);
      }, 100);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [radius]);

  return containerRef;
};
