import Menu from "@/components/Menu/Menu";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col   w-[1280px] h-screen">
      <Menu />
      <Hero />
    </div>
  );
}
