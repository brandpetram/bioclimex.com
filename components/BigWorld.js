import React from "react";
import Imgix, { Picture, Source } from "react-imgix";
import { useState } from "react";

const BigWorld = () => {
  const [ContactoSlideStatus, SetContactoSlide] = useState(false);
  const HanddleContactoSlide = () => {
    SetContactoSlide(!ContactoSlideStatus);
  };
  return (
    <div className="relative flex flex-col flex-col-reverse lg:grid-cols-none lg:flex lg:flex-row mt-32">
     <div className="z-0 -mt-0 md:-mt-0 lg:-mt-0 md:inset-y-0 md:left-0 md:w-full flex-none lg:ml-20 3xl:ml-40 lg:pt-40 lg:max-w-3xl 3xl:max-w-4xl">
        <h1 className="text-gray-700 w-10/12 md:w-full md:mt-0 top-0 mx-5 xs:mx-10 lg:mx-0 text-6xl lg:text-12 xl:text-16xl 2xl:text-18xl 3xl:text-20xl leading-none font-bold xl:max-w-2xl 2xl:max-w-3xl">
          El equipo tecnológico en México que resuelve las necesidades de las
          escuelas
        </h1>
        <div>
          <div className="max-w-screen-xl mx-auto py-16 px-0 sm:px-6 lg:py-33 lg:px-0 lg:grid lg:grid-cols-5 lg:gap-x-9">
            <div className="col-span-2 mx-5 xs:mx-10 lg:mx-0 text-gray-700">
              <h2 className="-mt-10 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Innovat <br className="md:hidden" />
                Software para Escuelas
              </h2>
              <p className="w-10/12 md:w-2/3 lg:w-3/4 xl:w-full mt-5 text-xl leading-9 font-semibold">
                <br />
                Innovat es el software para escuelas más recomendado de boca en
                boca por colegios y escuelas en México
              </p>
              <p className="w-full md:w-2/3 lg:w-3/4 xl:w-full mt-7 text-md leading-7 text-gray-600">
                En Innovat hemos impulsado a cientos de equipos de
                administrativos en colegios a alcanzar mejores resultado y
                simplificar su trabajo. Lo hacemos a través de la aplicación
                eficiente de nuevas tecnologías de la información.
              </p>
              <h4 className="mt-10 font-bold text-xl">¿Por qué Innovat?</h4>
              <ul className="mt-5">
                <li>25 años trabajando con escuelas</li>
                <li className="my-5">
                  Soporte solícito vía telefónica y por email
                </li>
                <li>De fácil uso, sin necesidad de instalar nada</li>
              </ul>
            </div>
            <div className=" mt-12 lg:mt-0 lg:col-span-3 lg:ml-16 mx-10 lg:mx-0">
              <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-y-10">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-700">
                      Capacitación y soporte
                    </dt>
                    <dd className="flex lg:py-0 lg:pb-4">
                      <span className="flex-1 mr-10 text-base leading-6 text-gray-600">
                        Para una mejor experiencia nuestro software se encuentra
                        documentado, además contamos con soporte telefónico y
                        vía correo electrónico
                      </span>
                      <div className="flex-0">
                          <button  onClick = {(e) => HanddleContactoSlide()} className="w-32 bg-blue-600 hover:bg-blue-600-light p-2 text-white rounded-md">
                            Contacto
                          </button>
                      </div>
                    </dd>
                  </div>
                  <div className="space-y-2 border-b border-t py-5">
                    <dt className="text-lg leading-6 font-medium text-gray-700">
                      Permisos basados en perfiles
                    </dt>
                    <dd className="flex lg:py-0 lg:pb-4">
                      <span className="flex-1 mr-10 text-base leading-6 text-gray-600">
                        Nuestro software para escuelas funciona con permisos
                        basados en perfiles. Esto significa que obtienes un
                        mayor control y granularidad de quien puede ver que
                        cosas.
                      </span>
                      <div className="flex-0">
                          <button  onClick = {(e) => HanddleContactoSlide()} className="w-32 bg-blue-600 hover:bg-blue-600-light p-2 text-white rounded-md">
                            Contacto
                          </button>
                      </div>
                    </dd>
                  </div>
                  <div className="space-y-2 pt-3">
                    <dt className="text-lg leading-6 font-medium text-gray-700">
                      Respaldos 24/7 todo el año
                    </dt>
                    <dd className="flex lg:py-0 lg:pb-4">
                      <span className="flex-1 mr-10 text-base leading-6 text-gray-600">
                        Contamos con respaldos redundantes automatizados todos
                        los días los 365 días del año. Tu información está
                        segura.
                      </span>
                      <div className="flex-0">
                          <button  onClick = {(e) => HanddleContactoSlide()} className="w-32 bg-blue-600 hover:bg-blue-600-dark p-2 text-white rounded-md">
                            Contacto
                          </button>
                      </div>
                    </dd>
                  </div>
                </div>
              </dl>
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
            htmlAttributes={{ media: "(min-width: 2560px)" }}
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
            htmlAttributes={{ media: "(min-width: 1920px)" }}
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
            htmlAttributes={{ media: "(min-width: 1280px)" }}
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
            htmlAttributes={{ media: "(min-width: 375px)" }}
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
