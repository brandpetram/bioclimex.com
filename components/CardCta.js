import Imgix from "react-imgix";
import NextLink from "next/link";

const CardCta = () => {
  return (
    <div className="mt-10 lg:mt-0 lg:max-w-screen-lg  xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto">
      <span className="absolute transform 4xl:translate-x-40 -translate-y-20 mt-56 opacity-50">
        <svg
          className="hidden lg:block"
          width="404"
          height="484"
          fill="none"
          viewBox="0 0 404 484"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>
      </span>
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center mt-10 md:mt-0 ml-0 lg:ml-20 xl:ml-40">
        <div className="max-w-xs md:max-w-xl lg:max-w-sm xl:max-w-md bg-white shadow-2xl z-20">
          <div className="text-center" style={{ padding: "70px 40px 60px" }}>
            <h2 className="font-extrabold text-6xl lg:text-7xl xl:text-9xl text-gray-900 leading-tight mt-5">
              Galardonada Eficiencia en Equipos
            </h2>
            <p className="text-gray-600 py-10 text-md leading-relaxed">
              Breezair refuerza su reputación de innovación, calidad y servicio
              como uno de los mejores equipos de refrigeración de bajo consumo a
              través de sus numerosas nominaciones y premios obtenidos
            </p>
            <NextLink
              href="/contacto.html"
              className="border border-bioclimex-blue px-12 py-4 hover:bg-bioclimex-blue hover:text-white"
            >
              Conocer más
            </NextLink>
          </div>
        </div>
        <div className="max-w-3xl min-w-40 lg:-ml-24 xl:-ml-32 z-10">
          <Imgix
            sizes="50vw"
            className="mt-10 md:w-10/12 lg:w-11/12 mx-auto"
            htmlAttributes={{
              alt: "Familia feliz en supermercado climatizado",
            }}
            src="https://brandpetram.imgix.net/bioclimex.com/recibiendo-premio-breezair-eficiencia-mexico.jpg"
            imgixParams={{
              ar: "1:0.6",
              fit: "crop",
              auto: "compress",
              q: "20",
            }}
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="mt-24 md:pt-20 lg:pt-20 w-3/4 2xl:w-1/2 mx-auto "
          src="./ema.svg"
          alt="Premio EMA emblema"
        />
        <p className="text-gray-500 font-light text-xl md:text-2xl lg:text-2xl 3xl:text-4xl leading-relaxed text-center w-11/12 mx-auto mt-20">
          Nuestro equipo Breezair TBSI 580 recibió un importante galardón de la
          industria después de que se anunciara como ganador del premio en la
          categoría Energy Reduction Product 2018 en los Energy Management
          Awards 2018. Estos premios tienen como objetivo dar prominencia a
          aquellos que lideran la industria de la gestión de la energía e
          inspirar a otros a seguir los mismos pasos. El aire acondicionado
          evaporativo es una alternativa más ecológica que otras formas de
          enfriamiento porque proporciona aire exterior fresco, filtrado y tiene
          muy bajas emisiones de CO2.
        </p>
      </div>
    </div>
  );
};

export default CardCta;
