import React from "react";
import Imgix, { Picture, Source } from "react-imgix";
import { useState } from "react";

const BigWorld = () => {
  const [ContactoSlideStatus, SetContactoSlide] = useState(false);
  const HanddleContactoSlide = () => {
    SetContactoSlide(!ContactoSlideStatus);
  };
  return (
    <div className="relative flex flex-col flex-col-reverse lg:grid-cols-none lg:flex lg:flex-row mt-32" id="manufactura">
      <div className="z-0 -mt-0 md:-mt-0 lg:-mt-0 md:inset-y-0 md:left-0 md:w-full flex-none lg:ml-20 3xl:ml-40 lg:pt-40 lg:max-w-3xl 3xl:max-w-4xl">
        <h1 className="text-gray-700 w-10/12 md:w-full md:mt-0 top-0 mx-5 xs:mx-10 lg:mx-0 text-6xl lg:text-12 xl:text-16xl 2xl:text-18xl 3xl:text-20xl leading-none font-bold xl:max-w-2xl 2xl:max-w-3xl">
          Fabricados en Australia, aclamados en el mundo y ahora presentes en
          México.
        </h1>
        <div>
          <div className="max-w-screen-xl mx-auto py-16 px-0 sm:px-6 lg:py-33 lg:px-0 lg:grid lg:grid-cols-5 lg:gap-x-9">
            <div className="col-span-2 mx-5 xs:mx-10 lg:mx-0 text-gray-700">
              <p className="w-10/12 md:w-2/3 lg:w-3/4 xl:w-full text-xl leading-9 font-semibold">
                <p className="text-base text-gray-400">
                  Más de 45 años de experiencia
                </p>
                El mayor fabricante de aire acondicionado en Australia.
              </p>
              <p className="w-full md:w-2/3 lg:w-3/4 xl:w-full mt-7 text-md leading-7 text-gray-600">
                Proveemos equipos fabricados por Seeley International, líder
                mundial en el desarrollo de sistemas de refrigeración que son
                energéticamente eficientes.
              </p>
              <h4 className="mt-10 font-bold text-xl">Ventajas de Seely:</h4>
              <ul className="mt-5 list-disc	ml-10">
                <li>Calidad e inovación</li>
                <li className="my-5">Energeticamente eficientes</li>
                <li>Experiencia y confiabilidad</li>
              </ul>
            </div>
            <div className=" mt-12 lg:mt-0 lg:col-span-3 lg:ml-16 mx-10 lg:mx-0">
              <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-y-10">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium text-gray-700">
                      Energéticamente eficientes
                    </div>
                    <div className="flex lg:py-0 lg:pb-4">
                      <span className="flex-1 mr-10 text-base leading-6 text-gray-600">
                        Los ventiladores más eficientes, silenciosos y
                        enfríadores del mercado.
                      </span>
                      <div className="flex-0">
                        <a href="/contacto">
                          <button className="w-32 bg-blue-600 hover:bg-blue-600-light p-2 text-white rounded-md">
                            Contacto
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 border-b border-t py-5">
                    <div className="text-lg leading-6 font-medium text-gray-700">
                      Experiencia que da confianza
                    </div>
                    <div className="flex lg:py-0 lg:pb-4">
                      <span className="flex-1 mr-10 text-base leading-6 text-gray-600">
                        Mánufactura de más de un millón y medio de componentes
                        al año para ensamblar más de 80,000 equipos
                      </span>
                      <div className="flex-0">
                        <a href="/contacto">
                          <button className="w-32 bg-blue-600 hover:bg-blue-600-light p-2 text-white rounded-md">
                            Contacto
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-3">
                    <div className="text-lg leading-6 font-medium text-gray-700">
                      Calidad e inovación
                    </div>
                    <div className="flex lg:py-0 lg:pb-4">
                      <span className="flex-1 mr-10 text-base leading-6 text-gray-600">
                        Los primeros en todo el mundo en fabricar una docena de
                        equipos relacionados con la climatización industrial y
                        comercial .
                      </span>
                      <div className="flex-0">
                        <a href="/contacto">
                          <button className="w-32 bg-blue-600 hover:bg-blue-600-light p-2 text-white rounded-md">
                            Contacto
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-right flex-grow">
        <Picture>
          <Source
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-02.jpg"
            width={1500}
            height={1500}
            htmlAttributes={{ media: "(min-width: 2560px)", alt: "Planeta tierra azul" }}
            imgixParams={{
              h: "1500",
              "fp-x": "0",
              "fp-y": ".5",
              ar: "1:1.5",
              fit: "crop",
              auto: "format",
              crop: "focalpoint",
            }}
          />
          <Source
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-02.jpg"
            width={1100}
            height={1100}
            htmlAttributes={{ media: "(min-width: 1920px)", alt: "Planeta tierra azul" }}
            imgixParams={{
              h: "1100",
              "fp-x": "0",
              "fp-y": ".5",
              ar: "1:1.5",
              fit: "crop",
              auto: "format",
              crop: "focalpoint",
            }}
          />
          <Source
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-02.jpg"
            width={800}
            height={750}
            htmlAttributes={{ media: "(min-width: 1280px)" , alt: "Planeta tierra azul"}}
            imgixParams={{
              h: "750",
              "fp-x": "0",
              "fp-y": ".5",
              ar: "1:1.5",
              fit: "crop",
              auto: "format",
              crop: "focalpoint",
            }}
          />
          <Source
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-02.jpg"
            width={750}
            htmlAttributes={{ media: "(min-width: 375px)" , alt: "Planeta tierra azul"}}
            imgixParams={{
              h: "1500",
              "fp-x": "0",
              "fp-y": "0",
              ar: "1:1.5",
              fit: "crop",
              auto: "format",
              crop: "focalpoint",
            }}
          />

          <Imgix
            className={" float-right 4xl:-mt-20 7xl:-mt-40"}
            htmlAttributes={{alt: "Planeta tierra azul"}}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-02.jpg"
            imgixParams={{
              h: "1500",
              w: "1000",
              "fp-x": "0",
              "fp-y": "0",
              ar: "1:1.5",
              fit: "crop",
              auto: "format",
              crop: "focalpoint",
            }}
          />
        </Picture>
      </div>
    </div>
  );
};

export default BigWorld;
