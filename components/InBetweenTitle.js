import React from "react";
import Link from "next/link";

const InBetweenTitle = () => {
  return (
    <div className={"overflow-hidden"}>
      <div className={"relative"}></div>
      <div className={"mx-10"}>
        <h2
          className={
            "subtitulo text-gray-700 md:max-w-xl xl:max-w-3xl 2xl:max-w-3xl 4xl:max-w-4xl 5xl:max-w-5xl text-3xl md:text-8xl lg:text-4xl xl:text-9xl 3xl:text-11xl 4xl:text-13xl 5xl:text-20xl md:ml-20 lg:ml-56 2xl:ml-72 3xl:ml-80 4xl:ml-96 5xl:mx-auto tracking-wider md:leading-normal lg:font-light"
          }
        >
          Más de 25 años ayudando a colegios y escuelas mexicanas a simplificar
          administración, cobranza y gestión educativa
          <Link href={"/nosotros"}>
            <svg
              className="inline ml-4 mb-1 w-7 text-blue-600 cursor-pointer"
              viewBox="0 0 40 30"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M0 13H34V17H0V13Z" />
              <path d="M25.1125 30L22 26.8644L33.7792 15L22 3.13557L25.1125 0L40 15.0001L25.1125 30Z" />
            </svg>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default InBetweenTitle;
