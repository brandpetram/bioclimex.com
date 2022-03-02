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
            <h2 className="leading-6 text-innovat-blue font-semibold tracking-wide uppercase">
              Innovat
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl">
              La información de lo que sucede en tu escuela a un clic de
              distancia
            </h3>
            <p className="mt-8  text-gray-500">
              Somos una empresa mexicana con más de 25 años de experiencia que
              impulsa el desempeño en los equipos administrativos de escuelas
              por medio de la aplicación de software especialmente diseñado para
              este propósito.
            </p>
            <div className="mt-5 prose prose-indigo text-gray-500">
              <p>
                La eficacia de nuestro software queda patente no solo por los
                testimonios de miles de usuarios satisfechos en cientos de
                colegios mexicanos sino por su versátil arquitectura modular
                para simplificar diferentes actividades según las necesidades
                particulares de cada colegio.
              </p>
              <p>
                Tanto empleados, como padres de familia y alumnos en cientos de
                escuelas y colegios en todo México, utilizan nuestro software
                desde hace años, reduciendo la complejidad de todas las
                actividades alrededor del colegio y mejorando notablemente la
                comunicación. Comenzamos hace más de 25 años atendiendo colegios
                en Monterrey y hoy somos el software mas utilizado en el valle
                de México así como en la frontera norte y la península de
                Yucatán. Además de por su supuesto, Nuevo León, Coahuila y
                Tamaulipas.
              </p>
              <p>Nuestro software se caracteriza por:</p>
              <ul>
                <li>Ser sencillo de utilizar</li>
                <li>No requerir instalación.</li>
                <li>Ser mejorado en forma continua.</li>
              </ul>
              <p>
                Además, nuestro equipo ofrecer la mejor atención personalizada
                en el mercado, atendiendo y resolviendo puntualmente cualquier
                duda que nuestros clientes tienen de forma paciente, clara y
                puntual.
              </p>
              <h3 className={"text-gray-700"}>
                Comienza hoy a simplificar la administración de tu escuela en
                cualquier parte de México
              </h3>
              <p>
                Si te interesa comenzar a generar importantes ahorros en tiempo
                y dinero en tu colegio contáctanos para hacer una prueba y
                resolver las dudas y preguntas que puedas tener
              </p>
                <button onClick = {(e) => HanddleContactoSlide()} className="bg-blue-600 py-2 px-4 text-white">
                  Comienza aquí
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
