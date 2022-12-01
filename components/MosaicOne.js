import React from "react";
import Imgix, { Picture, Source } from "react-imgix";
import Link from "next/link";
import { Input } from "postcss";

const MosaicOne = () => {
  return (
    <div className={"md:my-20 md:w-11/12 mx-auto overflow-hidden"}>
      <div className={"flex flex-col lg:flex-row"}>
        <div className={"lg:w-1/2 bg-gray-100 p-3 md:p-16"}>
          <div className={"w-3/5"}>
            <Picture>
              <Source
                width={1000}
                height={1000}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-12.jpg"
                htmlAttributes={{
                  alt: "Farmacia con medicamentos",
                  media: "(min-width:768px)",
                }}
                imgixParams={{
                  auto: "compress",
                  q: "45",
                }}
              />
              <Source
                width={450}
                height={450}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-12.jpg"
                htmlAttributes={{
                  alt: "Farmacia con medicamentos",
                  media: "(min-width:320px)",
                }}
                imgixParams={{
                  auto: "compress",
                  q: "45",
                }}
              />
              <Imgix
                width={1700}
                height={1700}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-12.jpg"
                htmlAttributes={{
                  alt: "Farmacia con medicamentos",
                }}
                imgixParams={{
                  auto: "compress",
                  q: "45",
                }}
              />
            </Picture>
          </div>
        </div>
        <div className={"lg:w-1/2 grid grid-cols-2"}>
          <div className={"relative"}>
            <div>
              <div
                className={
                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                }
              >
                <h1 className="text-center mt-0 lg:mt-0 xl:mt-0 uppercase tracking-widest leading-tight font-bold text-xs md:text-lg lg:text-sm 2xl:text-lg ">
                  Supers y<br className="hidden md:block" /> amacenes
                </h1>
                <p className="hidden md:block text-center text-gray-600 mt-5 font-normal md:font-light text-xs md:text-lg lg:text-sm 2xl:text-lg">
                  Confort y <br />
                  ventilación
                </p>
                <div className=" mt-6 w-5/12  mx-auto">
                  <svg
                    className=""
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
                </div>
              </div>
            </div>
          </div>
          <div className={"bg-blue-600"}>
            <div className={"flex"}>
              <div className={"flex-1 bg-blue-600 w-1/3 relative"}>
                <div
                  className={
                    "top-0 left-0 overflow-hidden w-10  h-full bg-blue-600"
                  }
                >
                  <svg
                    className={"-mx-1 w-6 mt-8 md:mt-20"}
                    viewBox="0 0 78 163"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <polygon
                        id="Triangle"
                        fill="#FFFFFF"
                        transform="translate(39.000000, 81.500000) scale(-1, 1) rotate(-90.000000) translate(-39.000000, -81.500000) "
                        points="39 43 120 120 -42 120"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div
                className={
                  "relative bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90"
                }
              >
                <Picture>
                  <Source
                    sizes="15vw"
                    src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-01.jpg"
                    htmlAttributes={{
                      media: "(min-width:1024px)",
                      alt: "Familia feliz en supermercado climatizado",
                    }}
                    imgixParams={{
                      ar: "1:1",
                      fit: "crop",
                      auto: "compress",
                      q: "30",
                    }}
                  />
                  <Imgix
                    htmlAttributes={{
                      alt: "Familia feliz en supermercado climatizado",
                    }}
                    className={
                      "my-3 md:my-0 pt-3 pl-8 pr-8 pb-8 ml-5 md:p-10 xl:p-12 overflow-hidden"
                    }
                    src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-01.jpg"
                    sizes="35vw"
                    imgixParams={{
                      ar: "1:1",
                      fit: "crop",
                      auto: "compress",
                      q: "20",
                    }}
                  />
                </Picture>
                <h1
                  className={
                    "text-xs lg:text-sm md:text-lg absolute bottom-0 right-0 mb-3 mr-3 leading-none "
                  }
                >
                  Climatización
                </h1>
              </div>
            </div>
          </div>
          <div className={"relative bg-blue-600 text-white"}>
            <img
              className={
                "bg-gray-200 transition duration-300 h-full ease-in-out transform hover:scale-90"
              }
              alt="Rebder de mini super"
              src="../store.svg"
            />
          </div>
          <div className={"bg-blue-700"}>
            <Picture>
              <Source
                sizes="30vw"
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-13.jpg"
                htmlAttributes={{
                  media: "(min-width:1024px)",
                  alt: "Seccion de frutas y verduras en supermercado",
                }}
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                  auto: "compress",
                  q: "30"
                }}
              />
              <Imgix
                className={
                  "bg-blue-600 transition duration-300 ease-in-out transform hover:scale-90"
                }
                htmlAttributes={{
                  alt: "Seccion de frutas y verduras en supermercado",
                }}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-13.jpg"
                sizes="50vw"
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                  auto: "compress",
                  q: "10",
                }}
              />
            </Picture>
          </div>
        </div>
      </div>
      <div className={"flex flex-col lg:flex-row"}>
        <div className={"lg:w-1/2 grid grid-cols-2"}>
          <div>
            <Picture>
              <Source
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-14.jpg"
                htmlAttributes={{
                  media: "(min-width:1024px)",
                  alt: "Carrito de supermercado",
                }}
                sizes="30vw"
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                  auto: "compress",
                  q: "30"
                }}
              />
              <Imgix
                className={
                  "bg-blue-600 transition duration-300 ease-in-out transform hover:scale-90"
                }
                htmlAttributes={{ alt: "Carrito de supermercado" }}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-14.jpg"
                sizes="50vw"
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                  auto: "compress",
                  q: "30"
                }}
              />
            </Picture>
          </div>
          <div className={"relative "}>
            <div>
              <div
                className={
                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer w-full"
                }
              >
                <h1 className="text-center mt-0 lg:mt-0 xl:mt-0 uppercase tracking-widest leading-tight font-bold text-xs md:text-lg lg:text-sm 2xl:text-lg ">
                  Tiendas de conveniencia y<br className="hidden md:block" /> Y
                  farmacias
                </h1>
                <p className="hidden md:block text-center text-gray-600 mt-5 font-normal md:font-light text-xs md:text-lg lg:text-sm 2xl:text-lg">
                  Confort y <br />
                  ventilación
                </p>
                <div className=" mt-6 w-1/12  mx-auto">
                  <svg
                    className=""
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
                </div>
              </div>
            </div>
          </div>
          <div className={"relative "}>
            <a href={"/contacto.html"}>
              <div
                className={
                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer w-full"
                }
              >
                <h1 className="text-center mt-0 lg:mt-0 xl:mt-0 uppercase tracking-widest leading-tight font-bold text-xs md:text-lg lg:text-sm 2xl:text-lg ">
                  Climatización <br className="hidden md:block" /> Y Ventilación
                </h1>
                <p className="hidden md:block text-center text-gray-600 mt-5 font-normal md:font-light text-xs md:text-lg lg:text-sm 2xl:text-lg">
                  Cotiza ahora
                  <br />
                  dando clic aquí
                </p>
                <div className=" mt-6 w-1/12  mx-auto">
                  <svg
                    className=""
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
                </div>
              </div>
            </a>
          </div>
          <div>
            <Picture>
              <Source
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-10.jpg"
                htmlAttributes={{
                  media: "(min-width:1024px)",
                  alt: "Pasillo de supermercado",
                }}
                sizes="30vw"
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                  auto: "compress",
                  q: "30"
                }}
              />
              <Imgix
                className={
                  "bg-blue-600 transition duration-300 ease-in-out transform hover:scale-90"
                }
                htmlAttributes={{ alt: "Pasillo de supermercado" }}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-10.jpg"
                sizes="50vw"
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                  auto: "compress",
                  q: "30",
                }}
              />
            </Picture>
          </div>
        </div>
        <div className={"lg:w-1/2 bg-gray-200 p-3 md:p-16"}>
          <div>
            <Picture>
              <Source
                htmlAttributes={{
                  media: "(min-width:1024px)",
                  alt: "Dulces y sección fria en mini super climatizado",
                }}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-11.jpg"
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                  q: "30",
                  auto: "compress",
                  crop: "focalpoint",
                  "fp-z": 1,
                  "fp-x": 0.6,
                }}
              />
              <Imgix
                htmlAttributes={{
                  alt: "Dulces y sección fria en mini super climatizado",
                }}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-11.jpg"
                sizes="95vw"
                imgixParams={{
                  ar: "1:1",
                  fit: "crop",
                  auto: "compress",
                  q: "30",
                  "fp-z": 1,
                  "fp-x": 0.6,
                }}
              />
            </Picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicOne;
