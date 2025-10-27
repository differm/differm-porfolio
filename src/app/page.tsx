"use client";

import Menu from "@/components/Menu/Menu";
import Hero from "@/components/sections/Hero";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { colors } = useTheme();

  return (
    <div
      className="relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: colors.background,
        backgroundImage: `
          radial-gradient(circle at 1px 1px, ${colors.granite} 1px, transparent 0),
          radial-gradient(circle at 3px 3px, ${colors.graniteOpacity} 1px, transparent 0),
          radial-gradient(circle at 5px 5px, ${colors.graniteOpacity} 1px, transparent 0),
          radial-gradient(circle at 7px 7px, ${colors.graniteOpacity} 1px, transparent 0),
          radial-gradient(circle at 9px 9px, ${colors.graniteOpacity} 1px, transparent 0)
        `,
        backgroundSize: "8px 8px, 12px 12px, 16px 16px, 20px 20px, 24px 24px",
        backgroundPosition: "0 0, 2px 2px, 4px 4px, 6px 6px, 8px 8px",
      }}
    >
      <ThemeSwitch />
      <div className="mx-auto flex flex-col w-[1280px] h-screen relative z-10">
        <Menu />
        <Hero />
      </div>
    </div>
  );
}
