import Menu from "@/components/Menu/Menu";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className=" bg-gradient-to-tl bg-gradient-to-b from-[#00202C] to-[#2B2B2B]">
      <div className="mx-auto flex flex-col w-[1280px] h-screen ">
        <Menu />
        <Hero />
      </div>
    </div>
  );
}
