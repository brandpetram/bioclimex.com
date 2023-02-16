import Head from "next/head";
import Cover from "../components/Cover";
import InBetweenTitle from "../components/InBetweenTitle";
import ContentSplitWithImage from "../components/ContentSplitWithImage";
import EmblaCarousel from "../components/EmblaCarousel";
import Advantages from "../components/Advantages";
import WhyUs from "../components/WhyUs";
import BigWorld from "../components/BigWorld";
import MosaicOne from "../components/MosaicOne";
import SixSquares from "../components/SixSquares";
import BeforeFooter from "../components/BeforeFooter";
import TextImage from "../components/TextImage";
import TitleImage from "../components/TitleImage";
import Faqs from "../components/Faqs";
import DivideTitle from "../components/DivideTitle";
import CtaBio from "../components/CtaBio";
import CardCta from "../components/CardCta";
const Home = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>
          Bioclimex | Climatización y ventilación industrial de Espacios
          Industriales en Todo México
        </title>
        <meta
          name="description"
          content="Los expertos en climatización de espacios industriales y comerciales en México"
        />
      </Head>
      <div className={"lg:space-y-24 d:space-y-40"}>
        <div className={"mt-20 md:mt-0 "} id="inicio">
          <Cover />
        </div>
        <InBetweenTitle />
        <SixSquares />{" "}
      </div>
      <div
        className={
          " h-screen bg-cover bg-fixed bg-[url('https://brandpetram.imgix.net/bioclimex.com/images/climatizacion-evaporativa-mexico-bioclimex.jpg')]"
        }
      ></div>
      <div className={"mt-20 lg:mt-32 space-y-24 d:space-y-40 pb-44"}>
        <EmblaCarousel />
        <DivideTitle />

        <div
          className={"lg:mb-52 w-9/12 4xl:w-full mx-auto pt-20"}
          id="nosotros"
        >
          <ContentSplitWithImage />
        </div>
        <BigWorld />

        <Advantages />
        <WhyUs />
        <CardCta />
      </div>
      <div className="mt-24">
        <Faqs />
        <BeforeFooter />
      </div>
    </div>
  );
};

Home.layout = "L1";
{
  /* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
*/
}
export default Home;
