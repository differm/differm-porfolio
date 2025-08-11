import { montserrat } from "@/fonts";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <div className="flex gap-4 pt-12 pb-12">
        <button
          className={`${montserrat.className} font-extralight text-[1.2rem] leading-[1.2rem]`}
        >
          Inicio
        </button>
        <button
          className={`${montserrat.className} font-extralight text-[1.2rem] leading-[1.2rem]`}
        >
          Sobre mi
        </button>
        <button
          className={`${montserrat.className} font-extralight text-[1.2rem] leading-[1.2rem]`}
        >
          Proyectos
        </button>
        <button
          className={`${montserrat.className} font-extralight text-[1.2rem] leading-[1.2rem]`}
        >
          Contacto
        </button>
      </div>
    </div>
  );
};

export default Menu;
