import Imgix, { Picture, Source } from "react-imgix";

const BeforeFooter = () => {
  return (
    <>
      <div className="mt-0 md:mt-10 3xl:mt-48 ">
        <div className="2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto ">
          <Picture>
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-04.jpg"
              width={4000}
              height={4000}
              htmlAttributes={{ media: "(min-width: 2550px)", alt: "Angel de la indpendencia ciudad de méxico" }}
              imgixParams={{
                ar: "15:9",
                fit: "crop",
                auto: "compress",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-04.jpg"
              width={2000}
              htmlAttributes={{ media: "(min-width: 1920px)", alt: "Angel de la indpendencia ciudad de méxico"  }}
              imgixParams={{
                ar: "15:9",
                fit: "crop",
                h: "900",
                auto: "compress",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-04.jpg"
              width={1735}
              htmlAttributes={{ media: "(min-width: 1280px)", alt: "Angel de la indpendencia ciudad de méxico"  }}
              imgixParams={{
                ar: "15:9",
                fit: "crop",
                h: "700",
                auto: "compress",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-04.jpg"
              width={1735}
              htmlAttributes={{ media: "(min-width: 1024px)", alt: "Angel de la indpendencia ciudad de méxico"  }}
              imgixParams={{
                ar: "1:1.05",
                fit: "crop",
                h: "700",
                auto: "compress",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-04.jpg"
              width={760}
              htmlAttributes={{ media: "(min-width: 768px)" , alt: "Angel de la indpendencia ciudad de méxico" }}
              imgixParams={{
                ar: "1:0.9",
                fit: "crop",
                h: "500",
                auto: "compress",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-04.jpg"
              width={100}
              htmlAttributes={{ media: "(min-width: 320px)", alt:"Angel de la indpendencia ciudad de méxico" }}
              imgixParams={{
                ar: "1:0.58",
                h: "105",
                fit: "crop",
                auto: "compress",
              }}
            />
            <Imgix
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-04.jpg"
              width={4000}
              htmlAttributes={{ alt:"Angel de la indpendencia ciudad de méxico" }}
              className="ml-8 md:ml-20 w-10/12 h-44 md:h-96 lg:h-120 lg:w-3/5 inline text-center relative"
              height={4000}
              imgixParams={{
                ar: "2:7",
                h: "480",
                fit: "crop",
                w: 100,
                auto: "compress",
              }}
            />
          </Picture>
        </div>
        <div className="experiencias -mt-48 md:-mt-64 text-gray-100 bg-blue-700">
          <div className="n-bg-text-wrapper py-16 mt-20">
            <div className="2xl:max-w-screen-2xl 3xl:max-w-screen-3xl mx-auto">
              <div className="ml-8 lg:ml-20">
                <h1
                  id="necesitas"
                  className=" lg:mt-48 text-white font-bold text-xl md:text-4xl lg:text-7xl mt-20 md:mt-40 lg:w-10/12 xl:w-2/3 3xl:w-1/2 lg:leading-none"
                >
                  Los Expertos Climatización y Ventilación Industrial y
                  comercial en todo México
                </h1>{" "}
                <p className="text-md text-gray-100 md:text-xl my-10 w-3/4 md:w-3/4 lg:w-3/5 font-normal">
                  Si buscas climatizar tus espacios comerciales y residenciales
                  en cualquier parte de México comunicate con nosotros para
                  verificar disponibilidad y factibilidad en tu proyecto. Genera
                  importantes ahorros para tu bolsillo y evita contaminación con
                  la mejor tecnología climatizadora en el mercado.
                </p>{" "}
                <div className="inline-flex mt-0">
                  <a href="/climatizacion-industrial" className="border px-12 py-4 ">
                    Conocer más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeFooter;
