import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div id="AllInOne" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">
          Plataforma multifuncional
        </h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Nuestros sistemas tecnológicos están adaptados para que puedas usarlos
          desde el dispositivo que desees, con el objetivo de facilitar las
          operaciones que tengas que hacer, todo al alcance de tu mano.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Consultas</h3>
              <p className="text-lg pt-2 pb-4">
                No hay necesidad de que te acerques a nuestra sucursal, solicita
                tus consultas desde la facilidad de nuestra web y app.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Recibos</h3>
              <p className="text-lg pt-2 pb-4">
                ¿Tenes alguna duda sobre si adeudas algun pago o simplemente
                queres tener tus recibos a mano? Reclamalos desde{" "}
                <a href="">
                  <span className="font-bold text-indigo-500">acá</span>
                </a>
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Asociados</h3>
              <p className="text-lg pt-2 pb-4">
                Podes actualizar tus datos de la manera más facil y rápida desde
                nuestra web. Solo tenes que seguir algunos pasos. No te
                preocupes, nuestra web/app te va a guiar para que el proceso te
                resulte práctico y sencillo.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Prestadores</h3>
              <p className="text-lg pt-2 pb-4">
                Todos aquellos profesionales de la salud que deseen ser
                prestadores de nuestra mutual, deberan rellenar un formulario
                con datos personales. El Staff de nuestra empresa revisará sus
                datos y se pondrá en contacto con todos aquellos que sean
                seleccionados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
