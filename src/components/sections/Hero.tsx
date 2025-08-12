"use client";

import { poppins, roboto } from "@/fonts";
import { useAnimateDimensions } from "@/hook/useAnimateDimensions";
import { useAnimateFromSide } from "@/hook/useAnimateFromSide";
import { useRef } from "react";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  useAnimateFromSide(textRef, "left");
  const boxRef = useAnimateDimensions({
    initialDimensions: {
      width: "2.4rem",
      height: "2.4rem",
      borderRadius: "9999px",
    },
    finalDimensions: {
      width: "12rem",
      height: "2.4rem",
      borderRadius: "9999px",
    },
    duration: 1,
    ease: "power2.inOut",
  });

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="flex flex-col">
        <h1 className={`${poppins.className} text-[5rem] leading-[7rem] ml-[-6px]`}>
          Diego Marcillo
        </h1>
        <h2 className={`${poppins.className} font-extralight text-[1.6rem]`}>
          Ingeniero de Software
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4">
          <div className="border-1 border-white rounded-full w-[2.4rem] h-[2.4rem]" />
          <div className="border-1 border-white rounded-full px-8 py-1 w-fit h-[2.4rem]">
            <h3 className={`${roboto.className} font-bold text-[1.3rem]`}>
              2025
            </h3>
          </div>
        </div>
        <div ref={textRef}>
          <p
            className={`${roboto.className} font-bold text-[18rem] text-[#FFDCC0] leading-[16rem]`}
          >
            Portafolio
          </p>
        </div>
        <div className="flex gap-4 self-end">
          <div className="rounded-full w-[2.4rem] h-[2.4rem] bg-[#FFDCC0]" />
          <div
            ref={boxRef}
            className="rounded-full py-1 w-[2.4rem] h-[2.4rem] bg-[#FFDCC0]"
          />
        </div>
      </div>
      <div className="border-1 border-white mt-20" />
    </div>
  );
};

export default Hero;
