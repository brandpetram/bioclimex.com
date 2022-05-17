import React from "react";

const MiniTitle = ({ regresar, contactar }) => (
  <p className={"text-sm tracking-widest text-gray-700"}>
    <a href={"/"}>{regresar}</a> | <a href={"/contacto.html"}>{contactar}</a>{" "}
  </p>
);

export default MiniTitle;
