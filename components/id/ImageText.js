import React from "react";
import Imgix from "react-imgix";

const ImageText = ({ image, title, text, cta }) => (
  <div className={"flex md:grid grid-cols-12 xl:flex gap-16"}>
    <div className={"hidden md:flex flex-0 col-span-2"}>
      <div>
        <img
          className={""}
          width={200}
          height={200}
          src={image}
          alt={"Emblema"}
          loading="lazy"
        />
      </div>
    </div>
    <div className={"flex-1 space-y-5 text-2xl col-span-10 text-gray-800"}>
      <h1 className={"font-bold tracking-wide"}>{title}</h1>
      <p className={"tracking-wider font-light text-gray-700"}>{text}</p>
      <h1 className={"font-bold tracking-wider text-blue-600"}>
        <a href={"/contacto.html"}>{cta}</a>
      </h1>
    </div>
  </div>
);

export default ImageText;
