import React from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/supportImg.jpg";

const Support = () => {
  return (
    <div id="Support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt=""
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Soporte
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Comunicate con nosotros
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Te facilitamos la posibilidad de contactarnos mediante nuestra web,
            con el objetivo de que todo tramite que debas realizar sea ameno,
            veloz e intuitivo para todos nuestros afiliados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Ventas</h3>
              <p className="text-gray-600 text-xl">
                Los empleados de nuestra farmacia están disponibles las 24 horas
                del día para todos los asociados que deseen realizar compras ya
                sea de manera virtual o presencial.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <a href="#" className="flex items-center text-indigo-600">
                Contactanos <ArrowSmRightIcon className="w-5 ml-2" />
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Soporte Técnico</h3>
              <p className="text-gray-600 text-xl">
                ¿Detectas alguna falla en nuestra web o aplicación? ¿Debes
                realizar un tramite y no podes hacerlo? Nuestro soporte técnico
                te va a ayudar a solucionar todas tus inquietudes con estos
                problemas.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <a href="#" className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
