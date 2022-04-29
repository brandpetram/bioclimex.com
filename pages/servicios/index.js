import React from "react";
import modulos from "../../data/soluciones.json";
import CtaTwo from "../../components/CtaTwo";

export const getStaticProps = async () => {
  return {
    props: {
      modulos: modulos,
    },
  };
};

const Modulos = ({ modulos }) => {
  return (
    <div>
      <ul>
        {modulos.map((modulo) => (
          <li key={modulo.id}>
            <a href={"soluciones/" + modulo.id}>{modulo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modulos;
