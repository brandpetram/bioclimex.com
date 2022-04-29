import React from "react";
import soluciones from "../../data/soluciones.json";
import menulateral from "../../data/menulateral.json";
import TopImage from "../../components/id/TopImage";
import ImageText from "../../components/id/ImageText";
import MiniTitle from "../../components/id/MiniTitle";
import GoHomeVsContact from "../../components/id/GoHomeVsContact";
import Title15Xl from "../../components/id/Title15xl";
import Textos from "../../components/id/Textos";
import MenuLateral from "../../components/id/MenuLateral";
import Head from "next/head";
import Banner from "../../components/id/Banner";
import GridImages from "../../components/id/GridImages";
import CtaTwo from "../../components/CtaTwo";

export const getStaticProps = async ({ params }) => {
  const List = soluciones.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      product: List[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = soluciones.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

const Modulo = ({ product }) => {
  return (
    <div className="pt-8">
      <Head>
        <title>{product.name} | BSE</title>
        <meta name="description" content={product.description} />
      </Head>
      <div>
        <TopImage imagenSrc={product.src} imagenAlt={product.alt} />
      </div>
      <div
        className={
          "bg-white bg-opacity-80 -translate-y-20 xl:-translate-y-48 w-9/12 xl:10/12 mx-auto"
        }
      >
        <div className={"w-10/12 mx-auto space-y-7"}>
          <MiniTitle miniTitle={"Bariatric Surgery Experts"} />
          <GoHomeVsContact
            regresar={"Regresar al inicio"}
            contactar={"Contactar ahora"}
          />
          <Title15Xl title={product.longName} />
          <ImageText
            image={product.icon}
            title={product.description}
            text={product.longDescription}
            cta={"Clic aquí para solicitar más información "}
          />
        </div>
        <div
          className={
            "mt-20 grid grid-cols-12 md:gap-10 w-full xl:w-10/12 mx-auto "
          }
        >
          <div className={"col-span-0 md:hidden lg:block lg:col-span-2 "}>
            <MenuLateral soluciones={menulateral} />
          </div>
          <div className={"col-span-12 md:col-span-10  xl:mx-10"}>
            <Textos data={product.texts} />
          </div>
        </div>
      </div>
      {product.Banner ? (
        <Banner Banner={product.Banner} title={product.name} />
      ) : (
        <div></div>
      )}

      {product.images ? <GridImages Product={product} /> : console.log("hola")}

      <CtaTwo />
    </div>
  );
};
Modulo.layout = "L1";
{
  /* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente.
*/
}

export default Modulo;
