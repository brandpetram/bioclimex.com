import AboutOne from "../components/AboutOne";
import PictureGrid from "../components/PictureGrid";
import CtaTwo from "../components/CtaTwo";
import BPFooterOne from "../components/BPFooterOne";
import TextoIndustrial from "../components/TextoIndustrial";

const Climatizacion = () => {
  return (
    <div>
      <img
        className="h-md lg:h-[38rem] w-full object-cover"
        src="https://brandpetram.imgix.net/bioclimex.com/climatizacion-industrial-mexico-0.jpeg"
      />
      <AboutOne />
      <PictureGrid />
      <TextoIndustrial />
      <CtaTwo />
    </div>
  );
};
Climatizacion.layout = "L2"
export default Climatizacion