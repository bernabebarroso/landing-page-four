import React from "react";

import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div id="Pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Planes</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            Elegí el plan que se adapte a tus necesidades.
          </h3>
          <p className="text-3xl">
            Te ofrecemos alternativas para que tengas la posibilidad de elegir
            aquella que sea funcional a lo que buscas.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Plan Estándar
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $5000{" "}
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mensual
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Plan con funcionalidades básicas y un gran porcentaje de
              cobertura.
            </p>
            <div className="text-2xl relative">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />1 consulta
                gratuita mensual
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                50% cobertura farmacéutica
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Recetas solo de manera presencial (no web/app)
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Cobertura a todo el país y en cualquier plataforma
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />2 meses de
                acceso a funcionalidades de la App totalmente gratis
              </p>
              <button className="w-full py-4 my-4 transition-colors">
                Seleccionar
              </button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Plan Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $9000{" "}
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mensual
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Plan especial para aquellos que quieran contar con todos nuestros
              beneficios.
            </p>
            <div className="text-2xl relative">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />3 consultas
                gratuitas mensuales
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                90% cobertura farmacéutica
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Recetas presenciales y desde nuestra web/app
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Cobertura a todo el país y en cualquier plataforma
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Acceso total a todas las funcionalidades de la web/app.
              </p>
              <button className="w-full py-4 my-4 transition-colors">
                Seleccionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
