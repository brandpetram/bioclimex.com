/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ]
  }
  ```
*/
import Imgix, { Picture, Source } from "react-imgix";
import { useState } from "react";

export default function ContentSplitWithImage() {
  return (
    <div className="relative bg-white" id="nosotros">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Picture>
            <Source
              width={2000}
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-03.jpg"
              htmlAttributes={{ media: "(min-width: 1280px)", alt: "Ingenieros planificando la ventilacion industrial adecuada" }}
              imgixParams={{
                ar: "1:1",
                fit: "clamp",
                crop: "focalpoint",
              }}
            />
            <Source
              width={400}
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-03.jpg"
              htmlAttributes={{ media: "(min-width: 320px)", alt: "Ingenieros planificando la ventilacion industrial adecuada" }}
              imgixParams={{
                ar: "1:1.1",
                fit: "clamp",
                crop: "focalpoint",
              }}
            />
            <Imgix
              className="h-92 w-full object-cover lg:absolute lg:h-full "
              htmlAttributes={{alt: "Ingenieros planificando la ventilacion industrial adecuada" }}
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-03.jpg"
              ix-sizes="auto"
            />
          </Picture>
        </div>
      </div>
      <div className="relative pt-10 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-lg max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-innovat-blue font-bold tracking-wide uppercase text-gray-400">
              LOS EXPERTOS EN VENTILACI??N / CLIMATIZACI??N
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
              Una marca global llega a M??xico
            </h3>
            <p className="mt-8  text-gray-500 text-xl">
              15 a??os siendo expertos en desarrollo de ingenier??as, proveedur??a
              de refacciones, instalaci??n y mantenimiento de equipos para
              ventilaci??n y climatizaci??n industrial y comercial
            </p>
            <div className="mt-5 prose prose-indigo text-gray-500">
              <p>
                Tenemos la experiencia para optimizar de forma eficiente, la
                ventilaci??n y climatizaci??n de tus espacios, asegur??ndonos que
                obtengas aire limpio, saludable a un bajo costo energ??tico.
              </p>
              <p>
                Con un centro de distribuci??n en el centro de M??xico y otras
                ciudades de la rep??blica, en Bioclimex llevamos tu proyecto
                desde la etapa inicial y te acompa??amos en todo el proceso hasta
                su instalaci??n. Estar??s obteniendo:
              </p>
              <ul>
                <li>Espacios m??s saludables, agradables y ventilados.</li>
                <li>
                  Ventilaci??n eficiente, ??ptima y de bajo consumo energ??tico.
                </li>
                <li>Servicio integral 360 y la mejor garant??a del mercado.</li>
              </ul>
              <p>
                Si lo necesitas nos encargamos de la ingenier??a para planificar
                as?? como la ejecuci??n profesional de los proyectos relativos a
                ventilaci??n y climatizaci??n industrial en que participamos.
                Tambi??n podemos proveerte con la documentaci??n para que tu
                equipo lo haga.
              </p>
              <h3 className={"text-gray-900 text-2xl font-bold"}>??Por qu?? escoger Bioclimex?</h3>
              <p>
                Lo que nos diferenc??a de otros competidores es el importante
                ahorro energ??tico, el uso de equipos de ultima generaci??n en
                armon??a con la norma ISO 14000, as?? como el uso de tecnolog??as
                patentadas en Australia y de uso comprobado en un gran n??mero de
                industrias en el mundo.
              </p>
              <div className="space-x-5 pb-14">
                <a href={"/contacto.html"}>
                  <button className="bg-blue-600 py-2 px-4 text-white font-bold">
                    Comenzar
                  </button>
                </a>

                <a href={"/climatizacion-industrial"}>
                  <button className="bg-gray-900 py-2 px-4 text-white font-bold">
                    Conoce m??s
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
