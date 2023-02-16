import Imgix, { Picture, Source } from "react-imgix";

const DivideTitle = () => {
  return (
    <div id="btu">
      <Picture>
        <Source
          width={1500}
          src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-24.jpg"
          htmlAttributes={{
            media: "(min-width: 1280px)",
            alt: "Equipo de ventilacion Breezair",
          }}
          imgixParams={{
            ar: "1:1",
            fit: "clamp",
            crop: "focalpoint",
          }}
        />
        <Source
          width={400}
          src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-24.jpg"
          htmlAttributes={{
            media: "(min-width: 320px)",
            alt: "Equipo de ventilacion Breezair",
          }}
          imgixParams={{
            ar: "1:1.1",
            fit: "crop",
            crop: "focalpoint",
          }}
        />
        <Imgix
          htmlAttributes={{ alt: "Equipo de ventilacion Breezair" }}
          src="https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-24.jpg"
          ix-sizes="auto"
        />
      </Picture>
    </div>
  );
};

export default DivideTitle;
