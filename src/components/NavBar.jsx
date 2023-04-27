import React from "react";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Lorem Med.</h1>
          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-zinc-200 text-black border-none px-2 cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#About"
              className="bg-zinc-200 text-black border-none px-2 cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
            >
              Quienes Somos
            </a>
            <a
              href="#Support"
              className="bg-zinc-200 text-black border-none px-2 cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
            >
              Soporte
            </a>
            <a
              href="#AllInOne"
              className="bg-zinc-200 text-black border-none px-2 cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
            >
              Plataformas
            </a>
            <a
              href="#Pricing"
              className="bg-zinc-200 text-black border-none px-2 cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
            >
              Planes
            </a>
          </div>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4 transition-colors">
            Iniciar Sesion
          </button>
          <button className="px-8 py-3 transition-colors">Registrate</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="list-none border-zinc-300 w-full">
          <a
            href="#"
            className="cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
          >
            Inicio
          </a>
        </li>
        <li className="list-none border-zinc-300 w-full">
          <a
            href="#About"
            className="cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
          >
            Quienes Somos
          </a>
        </li>
        <li className="list-none border-zinc-300 w-full">
          <a
            href="#Support"
            className="cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
          >
            Soporte
          </a>
        </li>
        <li className="list-none border-zinc-300 w-full">
          <a
            href="#AllInOne"
            className="cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
          >
            Plataformas
          </a>
        </li>
        <li className="list-none border-zinc-300 w-full">
          <a
            href="#Pricing"
            className="cursor-pointer animation-hover hover:text-indigo-400 transition-colors"
          >
            Planes
          </a>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Inicia Sesion
          </button>
          <button className="px-8 py-3 transition-colors">Registrate</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
