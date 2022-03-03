import Imgix, { Picture, Source } from "react-imgix";


const DivideTitle = () => {
  return (
    <div id="btu">
      <Picture>
          <Source
            width={1500}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-24.jpg"
            htmlAttributes={{ media: "(min-width: 1280px)" , alt: "Equipo de ventilacion Breezair"}}
            imgixParams={{
              ar: "1:1",
              fit: "clamp",
              crop: "focalpoint",
            }}
          />
          <Source
            width={400}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-24.jpg"
            htmlAttributes={{ media: "(min-width: 320px)" , alt: "Equipo de ventilacion Breezair" }}
            imgixParams={{
              ar: "1:1.1",
              fit: "crop",
              crop: "focalpoint",
            }}
          />
          <Imgix
             htmlAttributes={{ alt: "Equipo de ventilacion Breezair" }}
            src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-24.jpg"
            ix-sizes="auto"
          />
        </Picture>
      <div className="px-10 2xl:px-0 mt-20 lg:max-w-screen-lg  xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto">
        <h1
          id="tubos"
          className="font-bold text-8xl lg:text-12 xl:text-16xl 2xl:text-18xl 3xl:text-20xl leading-none"
        >
          Da un salto al siguiente nivel. Climatiza hasta
          <span className="text-bioclimex-blue">200m²</span> de tus espacios
          industriales y comerciales con solo
          <span className="text-bioclimex-blue">1kW</span>
        </h1>
        <hr className="my-10" />
        <div className="text-gray-500 font-light text-xl md:text-2xl lg:text-2xl 3xl:text-4xl leading-relaxed ">
          <p>
            Los climatizadores evaporativos pueden parecer iguales por fuera sin
            embargo tienen grandes diferencias. En Bioclimex, preferimos
            utilizar equipos Breezair siempre que es posible porque son los
            enfriadores más eficientes del mercado. Uno de los equipos que
            usamos con frecuencia, el modelo SuperStealth TBSI 580, puede
            generar hasta un 80% de ahorro energético. Está fabricado con
            polímero de alta resitencia por lo que cuenta con 25 años de
            garantía en su estructura. Percibimos las grandes diferencias tanto
            en diseño como en calidad de compontes de los equipos Breezair. Por
            ejemplo la tecnología Mini-Cell / Chill Cell® ofrece una mayor
            densidad de poros y superficie de los paneles lo cual se traduce en
            un mejor desempeño. Los equipos Breezair también cuentan con un
            sistema administrador del agua que ayuda a que el equipo opere con
            mayor eficiencia y a extender su vida útil.
          </p>
          <br />
          <p>
            La bomba Tornado® es la única diseñada, fabricada y probada
            concienzudamente por Seely International. Con materiales de última
            generación, acero inoxidable y cojinetes protegidos por agua
            personifica confiabilidad.
            <a
              href="#nosotros"
            >
              <svg
                className="relative inline ml-4 mb-1"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 13H34V17H0V13Z" fill="black" />
                <path
                  d="M25.1125 30L22 26.8644L33.7792 15L22 3.13557L25.1125 0L40 15.0001L25.1125 30Z"
                  fill="black"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DivideTitle;
