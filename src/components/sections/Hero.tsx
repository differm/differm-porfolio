import { poppins, roboto } from "@/fonts";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="flex flex-col">
        <h1 className={`${poppins.className} text-[5rem] leading-[7rem]`}>
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
        <div>
          <p
            className={`${roboto.className} font-bold text-[16rem] text-[#FFDCC0] leading-[16rem]`}
          >
            Portafolio
          </p>
        </div>
        <div className="flex gap-4 self-end">
          <div className="rounded-full w-[2.4rem] h-[2.4rem] bg-[#FFDCC0]" />
          <div className="rounded-full px-8 py-1 w-[9rem] h-[2.4rem] bg-[#FFDCC0]"></div>
        </div>
      </div>
      <div className="border-1 border-white mt-20"/>
    </div>
  );
};

export default Hero;
