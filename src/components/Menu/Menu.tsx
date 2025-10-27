"use client";

import { montserrat, poppins } from "@/fonts";
import { useTextSlideEffect } from "../../hook/useTextSlideEffect";
import { useTheme } from "@/context/ThemeContext";

const Menu = () => {
  const { colors } = useTheme();
  
  const menuOptions = [
    {
      id: 1,
      label: "Inicio",
      href: "#inicio",
    },
    {
      id: 2,
      label: "Sobre mi",
      href: "#sobre-mi",
    },
    {
      id: 3,
      label: "Proyectos",
      href: "#proyectos",
    },
    {
      id: 4,
      label: "Contacto",
      href: "#contacto",
    },
  ];

  const { textRef } = useTextSlideEffect({
    delay: 0.5,
    duration: 0.8,
  });

  return (
    <div className="flex items-center h-[8rem] px-8 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <p 
          className={`${poppins.className} text-[3rem] font-bold transition-colors duration-500`}
          style={{ color: colors.text }}
        >
          <span ref={textRef} className="inline-block">differmar</span>
        </p>
      </div>
      
      <div className="flex gap-6 ml-auto">
        {menuOptions.map((option) => (
          <button
            key={option.id}
            className={`${montserrat.className} relative 
              font-extralight text-[1.2rem] leading-[1.2rem]
              cursor-pointer pb-2 transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:w-full after:h-[3px] after:bg-white
              after:scale-x-0 after:origin-center
              after:transition-transform after:duration-300
              hover:after:scale-x-100`}
            style={{ color: colors.text }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
