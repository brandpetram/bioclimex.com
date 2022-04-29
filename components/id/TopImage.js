import Imgix, { Picture, Source } from "react-imgix";

const TopImage = ({ imagenSrc, imagenAlt }) => {
  return (
    <>
      <div>
        <Picture>
          <Source
            src={imagenSrc}
            width={2560}
            htmlAttributes={{ alt: imagenAlt, media: "(min-width:2560px)" }}
            imgixParams={{
              ar: "3.5:1",
              fit: "crop",
              crop: "focalpoint",
            }}
          />
          <Source
            src={imagenSrc}
            htmlAttributes={{ alt: imagenAlt, media: "(min-width:768px)" }}
            imgixParams={{
              ar: "2.5:1",
              fit: "crop",
              crop: "focalpoint",
            }}
          />
          <Source
            src={imagenSrc}
            width={420}
            htmlAttributes={{ alt: imagenAlt, media: "(min-width:320px)" }}
            imgixParams={{
              ar: "1:1",
              fit: "crop",
              crop: "focalpoint",
              q:"30"
            }}
          />
          <Imgix
            className={"mx-auto"}
            htmlAttributes={{ alt: "Cuerpo delgado después de cirugía bariatrica"}}
            width={3500}
            height={2000}
            src={imagenSrc}
           
            imgixParams={{
              ar: "1:1",
              fit: "crop",
              crop: "focalpoint",
            }}
          />
        </Picture>
      </div>
    </>
  );
};
export default TopImage;
