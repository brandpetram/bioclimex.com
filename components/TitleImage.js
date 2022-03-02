import Imgix, { Picture, Source } from "react-imgix";

const TitleImage = () => {
  return (
    <div className="px-0 2xl:px-0 mt-20 lg:max-w-screen-lg  xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto">
      <h1 className="font-bold text-8xl lg:text-12 xl:text-16xl 2xl:text-18xl 3xl:text-20xl text-center leading-none">
        Bioclimatiza tu restaurante <br className="4xl:hidden" />
        de comida rápida
      </h1>

      <p className="text-gray-500 font-light text-xl md:text-2xl lg:text-2xl 3xl:text-4xl leading-relaxed text-center mt-10 w-11/12 mx-auto">
        El top 75% de las cadenas de comida rápida de clase mundial usa Breezair
        en muchas de sus sucursales para ventilar y bioclimatizar sus
        restaurantes y ahorrar entre 20 y 80% en energía eléctrica. Pregunta por
        una demostración. Nuestros equipos son increiblemente silenciosos y
        eficientes.
      </p>
      <div className="relative mt-24">
      <Picture>
          <Source
            width={2000}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-08.jpg"
            htmlAttributes={{ media: "(min-width: 1280px)" }}
            imgixParams={{
              ar: "1:1",
              fit: "clamp",
              crop: "focalpoint",
            }}
          />
          <Source
            width={400}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-08.jpg"
            htmlAttributes={{ media: "(min-width: 320px)" }}
            imgixParams={{
              ar: "1:1.1",
              fit: "clamp",
              crop: "focalpoint",
            }}
          />
          <Imgix
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-09.jpg"
            ix-sizes="auto"
          />
        </Picture>
        <h1 className="absolute bottom-0 right-0 mb-20 xl:mb-20 4xl:mr-20  text-white font-semibold text-4xl md:text-2xl xl:text-3xl max-w-sm xl:max-w-lg"></h1>
      </div>
    </div>
  );
};

export default TitleImage;
