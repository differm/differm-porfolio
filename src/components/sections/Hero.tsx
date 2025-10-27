"use client";

import Image from "next/image";
import { useAnimateDimensions } from "../../hook/useAnimateDimensions";
import { useAnimateFromBottom } from "../../hook/useAnimateFromBottom";
import { useFadeInEffect } from "../../hook/useFadeInEffect";
import { useTheme } from "@/context/ThemeContext";

const Hero = () => {
  const { colors } = useTheme();
  
  const circleRef = useAnimateDimensions({
    initialDimensions: {
      width: "20rem",
      height: "20rem",
      borderRadius: "50%",
    },
    finalDimensions: {
      width: "50rem",
      height: "50rem",
      borderRadius: "50%",
    },
    duration: 2,
    ease: "power2.out",
    delay: 0.5,
  });

  const imageRef = useAnimateFromBottom({
    duration: 1.5,
    ease: "power2.out",
    delay: 1,
    distance: 300,
  });

  const textRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.8,
  });

  return (
    <div className="h-screen flex flex-col relative">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center relative">
          <h1
            ref={textRef}
            className={`font-[mazurquica-vf] text-[26rem] leading-[10rem] font-bold relative z-10 transition-colors duration-500`}
            style={{ color: colors.textSecondary }}
          >
            PORTFOLIO
          </h1>
        </div>
      </div>

      <div className="h-1/3 flex items-end justify-center pb-8">
        <div ref={imageRef} className="relative z-20">
          <Image
            src="/differm.png"
            alt="Differm"
            width={700}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
