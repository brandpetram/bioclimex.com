import { useState } from "react";
import Imgix, { Picture, Source } from "react-imgix";
import NextLink from "next/link";
import { Link } from "react-scroll";

const Cover = () => {
  const [ContactoSlideStatus, SetContactoSlide] = useState(false);
  const HanddleContactoSlide = () => {
    SetContactoSlide(!ContactoSlideStatus);
  };
  return (
    <div className={"overflow-hidden"} id="inicio">
      <div className={"relative"}>
        <svg
          className=" hidden lg:block lg:overflow-hidden absolute left-full transform -translate-x-full -translate-y-7 opacity-50"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
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
                className="text-gray-300"
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
      </div>
      <div className={"flex flex-col md:grid grid-cols-12 gap-4"}>
        <div className={"md:col-span-9 xl:pl-16 relative"}>
          <Picture>
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-05.jpg"
              sizes="70vw"
              htmlAttributes={{
                media: "(min-width: 1920px)",
                alt: "Familia feliz en supermercado climatizado",
              }}
              imgixParams={{
                ar: "1.35:1",
                fit: "crop",
                crop: "focalpoint",
                auto: "compress",
                q: "45",
                "fp-y": ".5",
                "fp-z": "1",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-05.jpg"
              sizes="70vw"
              htmlAttributes={{
                media: "(min-width: 1280px)",
                alt: "Familia feliz en supermercado climatizado",
              }}
              imgixParams={{
                ar: "1.2:1",
                fit: "crop",
                crop: "focalpoint",
                auto: "compress",
                q: "45",
                "fp-y": ".5",
                "fp-z": "1",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-05.jpg"
              sizes="70vw"
              htmlAttributes={{
                media: "(min-width: 1024px)",
                alt: "Familia feliz en supermercado climatizado",
              }}
              imgixParams={{
                ar: "1:1.05",
                fit: "crop",
                crop: "focalpoint",
                auto: "compress",
                q: "45",
                "fp-y": ".5",
                "fp-z": "1",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-05.jpg"
              sizes="70vw"
              htmlAttributes={{
                media: "(min-width: 768px)",
                alt: "Familia feliz en supermercado climatizado",
              }}
              imgixParams={{
                ar: "1.735:1",
                fit: "crop",
                crop: "focalpoint",
                auto: "compress",
                q: "10",
                "fp-y": ".5",
                "fp-z": "1",
              }}
            />
            <Source
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-05.jpg"
              sizes="100vw"
              htmlAttributes={{
                media: "(min-width: 320px)",
                alt: "Familia feliz en supermercado climatizado",
              }}
              imgixParams={{
                ar: "1:1",
                fit: "crop",
                auto: "compress",
                crop: "focalpoint",
                q: "10",
                "fp-y": ".5",
                "fp-x": ".4",
                "fp-z": "1",
              }}
            />
            <Imgix
              sizes="100vw"
              htmlAttributes={{
                alt: "Familia feliz en supermercado climatizado",
              }}
              src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-05.jpg"
              imgixParams={{
                ar: "2:2",
                h: "280",
                fit: "crop",
                auto: "compress",
                q: "20",
              }}
            />
          </Picture>

          <div
            className={
              "transform leading-tight bg-white bg-opacity-80 md:w-9/12 3xl:w-8/12 right-0 md:-mt-20 lg:-mt-80 float-right font-bold text-[1.75rem] md:text-7xl lg:text-10xl 3xl:text-16xl  "
            }
          >
            <div className={"p-6 md:p-10 "}>
              <h1 className={"text-gray-700 md:w-11/12 3xl:w-10/12 2xl:pr-8 3xl:pr-5 leading-[1.3]"}>
                Climatización y Ventilación Industrial y Comercial en Todo
                México
              </h1>
              <div className="flex flex-col md:flex-row gap-5 mt-8 text-center text-xl lg:text-3xl">
                <NextLink
                  href="/contacto"
                  className="py-4 bg-bioclimex-blue text-white px-8  my-auto"
                >
                  Cotizar ahora
                </NextLink>
                <Link
                  to="vermas"
                  smooth={true}
                  duration={500}
                  href="#vermas"
                  className="py-4 bg-bioclimex-black text-white px-8 my-auto"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={"md:col-span-3 xl:pl-10 md:pr-0 md:relative"}>
          <div
            className={
              "hidden md:block -mt-36 md:mt-40 lg:mt-24 xl:mt-20 2xl:mt-36 4xl:mt-48 7xl:mt-56  md:w-full"
            }
          >
            <Picture>
              <Source
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-06.jpg"
                sizes="30vw"
                htmlAttributes={{
                  media: "(min-width: 768px)",
                  alt: "Nave industrial de procesos en méxico",
                }}
                imgixParams={{
                  ar: "1:1.39",
                  fit: "crop",
                  auto: "compress",
                  q: "30",
                }}
              />
              <Source
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-06.jpg"
                sizes="50vw"
                htmlAttributes={{
                  media: "(min-width: 320px)",
                  alt: "Nave industrial de procesos en méxico",
                }}
                imgixParams={{
                  ar: "1:2",
                  fit: "crop",
                  auto: "compress",
                  q: "45",
                }}
              />
              <Imgix
                sizes="50vw"
                className={"-mt-20 lg:mt-48 3xl:mt-72"}
                htmlAttributes={{
                  alt: "Nave industrial de procesos en méxico",
                }}
                src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-06.jpg"
                imgixParams={{
                  ar: "2:2",
                  fit: "crop",
                  auto: "compress",
                  q: "45",
                }}
              />
            </Picture>
          </div>
        </div>
        
      </div>

      <svg
        className="hidden lg:block absolute right-full transform translate-x-1/2 -translate-y-44 opacity-50"
        width="404"
        height="1400"
        fill="none"
        viewBox="0 0 404 200"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
              className="text-gray-300"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>
    </div>
  );
};

export default Cover;
