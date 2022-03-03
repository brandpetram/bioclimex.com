import React from "react";
import Imgix, { Picture, Source } from "react-imgix";

const Advantages = () => {
  return (
    <div>
      <div className="lg:max-w-5xl xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-full 4xl:w-10/12 mx-auto">
        <h1 className="text-cool-gray-900 px-7 font-light text-3xl lg:text-4xl xl:text-9xl mb-20 md:mb-32 leading-relaxed">
          Hemos aplicado nuestros servicios de ventilación y climatización en
          espacios de manufactura y naves industriales donde se concentran altas
          temperaturas. Gracias a nuestro expertise y la calidad de nuestros
          equipos basados en climatización evaporativa generamos confort, ahorro
          y un ambiente saludable alineado con las exigencias de la norma ISO
          14000.
        </h1>
        <div className="mt-6 md:mt-20 xl:mt-16 3xl:mt-20 5xl:mt-32 absolute ml-20 lg:ml-24 xl:ml-20">
          <h3 className="text-gray-100 text-md uppercase font-extrabold">
            Bioclimex México
          </h3>
          <h2 className="mt-3 lg:mt-8 xl:mt-12 3xl:mt-20 lg:mt-0 text-gray-100 text-4xl md:text-11xl xl:text-17xl 2xl:text-18xl 3xl:text-22xl 4xl:text-25xl 5xl:text-29xl max-w-xs w-2/3 md:max-w-xl 3xl:max-w-4xl font-medium md:font-bold leading-none">
            Somos la brisa de aire que genera ahorro y sonrisas.
          </h2>
        </div>
      </div>
      <div className="block lg:max-w-4xl xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-full 4xl:w-10/12 mx-auto">
        <Picture>
          <Source
            width={2000}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-09.jpg"
            htmlAttributes={{
              media: "(min-width: 1280px)",
              alt: "Trabajadora con equipo de protección feliz por clima en el trabajo",
            }}
            imgixParams={{
              ar: "1:1",
              fit: "clamp",
              crop: "focalpoint",
            }}
          />
          <Source
            width={400}
            height={250}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-09.jpg"
            htmlAttributes={{
              media: "(min-width: 320px)",
              alt: "Trabajadora con equipo de protección feliz por clima en el trabajo",
            }}
            imgixParams={{
              ar: "1:1",
              fit: "clamp",
            }}
          />
          <Imgix
            htmlAttributes={{
              alt: "Trabajadora con equipo de protección feliz por clima en el trabajo",
            }}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-09.jpg"
            ix-sizes="auto"
          />
        </Picture>
      </div>
    </div>
  );
};

export default Advantages;
