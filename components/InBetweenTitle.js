import React from "react";
import Link from "next/link";

const InBetweenTitle = () => {
  return (
    <div className={"overflow-hidden"}>
      <div className={"mx-5 lg:mx-10"}>
        <h2
          className={
            " text-gray-700 md:max-w-xl xl:max-w-5xl 4xl:max-w-4xl text-3xl md:text-8xl lg:text-4xl xl:text-10xl 3xl:text-11xl 4xl:text-16xl 5xl:text-20xl md:ml-20 lg:ml-40 2xl:ml-72 3xl:ml-80 4xl:mx-auto 5xl:mx-auto tracking-wider md:leading-normal lg:font-light"
          }
        >
         Contamos con más de 15 años climatizando la industria y comercios mexicanos de manera <span class="text-blue-600">eficiente, efectiva y con bajo consumo eléctrico. </span>
          <Link href={"/#nosotros"}>
            <svg
              className="inline ml-4 mb-1 w-7 text-gray-900 cursor-pointer"
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
