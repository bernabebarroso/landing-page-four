import React from "react";

import medicineImg from "../assets/medicine.svg";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Tu salud, en buenas manos.</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Lorem Medical</h1>
          <p className="text-2xl">30 años asegurando tu bienestar.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4 transition-colors">
            ¡Unete ahora!
          </button>
        </div>
        <div>
          <img className="w-full hidden md:block" src={medicineImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
