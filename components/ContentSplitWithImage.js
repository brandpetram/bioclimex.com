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
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Picture>
            <Source
              width={2000}
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-03.jpg"
              htmlAttributes={{ media: "(min-width: 1280px)" }}
              imgixParams={{
                ar: "1:1",
                fit: "clamp",
                crop: "focalpoint",
              }}
            />
            <Source
              width={400}
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-03.jpg"
              htmlAttributes={{ media: "(min-width: 320px)" }}
              imgixParams={{
                ar: "1:1.1",
                fit: "clamp",
                crop: "focalpoint",
              }}
            />
            <Imgix
              className="h-92 w-full object-cover lg:absolute lg:h-full "
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-03.jpg"
              ix-sizes="auto"
            />
          </Picture>
        </div>
      </div>
      <div className="relative pt-12 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-innovat-blue font-semibold tracking-wide uppercase text-gray-400">
              LOS EXPERTOS EN VENTILACIÓN / CLIMATIZACIÓN
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
              Una marca global llega a México
            </h3>
            <p className="mt-8  text-gray-500 text-xl">
              15 años siendo expertos en desarrollo de ingenierías, proveeduría
              de refacciones, instalación y mantenimiento de equipos para
              ventilación y climatización industrial y comercial
            </p>
            <div className="mt-5 prose prose-indigo text-gray-500">
              <p>
                Tenemos la experiencia para optimizar de forma eficiente, la
                ventilación y climatización de tus espacios, asegurándonos que
                obtengas aire limpio, saludable a un bajo costo energético.
              </p>
              <p>
                Con un centro de distribución en el centro de México y otras
                ciudades de la república, en Bioclimex llevamos tu proyecto
                desde la etapa inicial y te acompañamos en todo el proceso hasta
                su instalación. Estarás obteniendo:
              </p>
              <ul>
                <li>Espacios más saludables, agradables y ventilados.</li>
                <li>
                  Ventilación eficiente, óptima y de bajo consumo energético.
                </li>
                <li>Servicio integral 360 y la mejor garantía del mercado.</li>
              </ul>
              <p>
                Si lo necesitas nos encargamos de la ingeniería para planificar
                así como la ejecución profesional de los proyectos relativos a
                ventilación y climatización industrial en que participamos.
                También podemos proveerte con la documentación para que tu
                equipo lo haga.
              </p>
              <h3 className={"text-gray-700"}>¿Por qué escoger Bioclimex?</h3>
              <p>
                Lo que nos diferencía de otros competidores es el importante
                ahorro energético, el uso de equipos de ultima generación en
                armonía con la norma ISO 14000, así como el uso de tecnologías
                patentadas en Australia y de uso comprobado en un gran número de
                industrias en el mundo.
              </p>
              <div className="space-x-5">
                <a className={"/contacto"}>
                  <button className="bg-blue-600 py-2 px-4 text-white">
                    Comienza aquí
                  </button>
                </a>

                <a className={"/industrial"}>
                  <button className="bg-gray-900 py-2 px-4 text-white">
                    Comienza aquí
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
