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

const Home = () => {
  return (
    <div>
      <div className={"space-y-24 d:space-y-40 w-11/12 mx-auto"}>
        <Head>
          <title>Bioclimex | Climatización y ventilación industrial</title>
          <meta
            name="description"
            content="Simplifica la administración de tu escuela en México. Más de 25 años como proveedores de software para escuelas y colegios Mexicanos."
          />
        </Head>
        <div className={"mt-20 md:mt-0"} >
          <Cover />
        </div>
        <InBetweenTitle />
      </div>
      <div className={"mt-72 space-y-24 d:space-y-40 pb-44"}>
        <ContentSplitWithImage />
        <EmblaCarousel />
        <Advantages />
        <WhyUs />
        <DivideTitle />
        <BigWorld />
        <TextImage />
        <MosaicOne />
        <TitleImage />
      </div>
      <SixSquares />{" "}
      <div
        className={
          "h-screen bg-cover bg-fixed bg-[url('https://brandpetram.imgix.net/bioclimex.com/images/climatizacion-evaporativa-mexico-bioclimex.jpg')]"
        }
      ></div>
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
