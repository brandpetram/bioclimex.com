import Imgix, { Picture, Source } from "react-imgix";

const TextImage = () => {
  return (
    <div className="px-0 2xl:px-0 mt-20 lg:max-w-screen-lg  xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto">
      <h1 className="font-bold text-8xl lg:text-12 xl:text-16xl 2xl:text-18xl 3xl:text-21xl text-center leading-none">
        Ventilamos y climatizamos supermercados, tiendas de conveniencia,
        abarrotes y más
      </h1>

      <p className="text-gray-500 font-light text-xl md:text-2xl lg:text-2xl 3xl:text-3xl leading-relaxed text-center mt-10 w-11/12 mx-auto">
        En Bioclimex tenemos gran experiencia enfríando locales comerciales en
        como tiendas de conveniencia, tiendas de abarrotes y supermercados.
        Aplicamos la tecnología de enfriamiento por evaporación para llevar aire
        limpio y fresco a diferentes tipos de negocios. A diferencia del aire
        acondicionado refrigerado, la tecnología que utilizamos en Bioclimex no
        reseca la piel, la nariz ni los ojos.
      </p>
      <div className="relative">
        <Picture>
          <Source
            src="https://bioclimex.com/_nuxt/img/bioclimatizacion-ventilacion-y-climatizacion-en-supermercados-mexicanos.092ab5b.jpg"
            width={2560}
            height={1600}
            htmlAttributes={{
              media: "(min-width: 2560px)",
              alt: "Familia feliz en centro comercial climatizado",
            }}
            imgixParams={{
              ar: "1:1",
              fit: "crop",
              crop: "clamp",
            }}
          />
          <Source
            src="https://bioclimex.com/_nuxt/img/bioclimatizacion-ventilacion-y-climatizacion-en-supermercados-mexicanos.092ab5b.jpg"
            width={1920}
            height={1200}
            htmlAttributes={{
              media: "(min-width: 1920px)",
              alt: "Familia feliz en centro comercial climatizado",
            }}
            imgixParams={{
              ar: "1:1",
              fit: "crop",
              crop: "clamp",
            }}
          />
          <Source
            src="https://bioclimex.com/_nuxt/img/bioclimatizacion-ventilacion-y-climatizacion-en-supermercados-mexicanos.092ab5b.jpg"
            width={1280}
            height={750}
            htmlAttributes={{
              media: "(min-width: 1280px)",
              alt: "Familia feliz en centro comercial climatizado",
            }}
            imgixParams={{
              ar: "1:1",
              fit: "crop",
              crop: "clamp",
            }}
          />
          <Source
            src="https://bioclimex.com/_nuxt/img/bioclimatizacion-ventilacion-y-climatizacion-en-supermercados-mexicanos.092ab5b.jpg"
            width={750}
            htmlAttributes={{
              media: "(min-width: 375px)",
              alt: "Familia feliz en centro comercial climatizado",
            }}
            imgixParams={{
              ar: "1:1",
              fit: "crop",
              crop: "clamp",
            }}
          />

          <Imgix
            className={" mt-24"}
            htmlAttributes={{
              alt: "Familia feliz en centro comercial climatizado",
            }}
            src="https://bioclimex.com/_nuxt/img/bioclimatizacion-ventilacion-y-climatizacion-en-supermercados-mexicanos.092ab5b.jpg"
            imgixParams={{
              ar: "1:1",
              fit: "crop",
              crop: "clamp",
            }}
          />
        </Picture>

        <h1 className="hidden md:block absolute top-0 lg:mt-12 ml-12 xl:mt-12 xl:ml-12 p-10 text-bioclimex-black opacity-100 font-semibold text-4xl md:text-xl xl:text-2xl max-w-sm xl:max-w-md">
          Creamos ventilación y confort en supermercados y tiendas de
          conveniencia mexicanas de manera eficiente.
        </h1>
      </div>
    </div>
  );
};

export default TextImage;
