import { montserrat } from "@/fonts";

const Menu = () => {
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

  return (
    <div className="flex justify-end h-[8rem]">
      <div className="flex gap-6 pt-12 pb-12">
        {menuOptions.map((option) => (
          <button
            key={option.id}
            className={`${montserrat.className} relative 
              font-extralight text-[1.2rem] leading-[1.2rem]
              cursor-pointer pb-2
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:w-full after:h-[3px] after:bg-white
              after:scale-x-0 after:origin-center
              after:transition-transform after:duration-300
              hover:after:scale-x-100`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
