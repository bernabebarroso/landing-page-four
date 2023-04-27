import React from "react";

export const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Digital</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Comercio</li>
            <li className="py-1">Datos</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Soporte</h6>
          <ul>
            <li className="py-1">Precio</li>
            <li className="py-1">Documentacion</li>
            <li className="py-1">Guias</li>
            <li className="py-1">API</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Compania</h6>
          <ul>
            <li className="py-1">Quienes somos</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Trabajos</li>
            <li className="py-1">Patrocinadores</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Privacidad</li>
            <li className="py-1">Términos</li>
            <li className="py-1">Políticas</li>
            <li className="py-1">Condiciones</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">
            Suscribite a nuestro boletín informativo
          </p>
          <p className="py-4">
            Las últimas noticias, artículos e información, en tu email.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Ingresa tu email"
            />
            <button className="p-2 mb-4">Suscribirse</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          2023 Lorem Medical, LLC. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
