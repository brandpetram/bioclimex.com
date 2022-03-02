const TitleImage = () => {
  return (
    <div className="px-0 2xl:px-0 mt-20 lg:max-w-screen-lg  xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto">
      <h1 className="font-bold text-8xl lg:text-12 xl:text-16xl 2xl:text-18xl 3xl:text-20xl text-center leading-none">
        Bioclimatiza tu restaurante <br className="4xl:hidden" />
        de comida rápida
      </h1>

      <p className="text-gray-500 font-light text-xl md:text-2xl lg:text-2xl 3xl:text-4xl leading-relaxed text-center mt-10 w-11/12 mx-auto">
        El top 75% de las cadenas de comida rápida de clase mundial usa Breezair
        en muchas de sus sucursales para ventilar y bioclimatizar sus
        restaurantes y ahorrar entre 20 y 80% en energía eléctrica. Pregunta por
        una demostración. Nuestros equipos son increiblemente silenciosos y
        eficientes.
      </p>
      <div className="relative">
        <img
          className="hidden md:block mt-24 mx-auto"
          src="https://bioclimex.com/_nuxt/img/restaurante-de-comida-rapida-ventilado-por-breezair-estado-de-mexico-bioclimex.127e5b1.jpg"
          alt=""
        />
        <img
          className="md:hidden mt-20"
          src="https://bioclimex.com/_nuxt/img/restaurante-de-comida-rapida-ventilado-por-breezair-estado-de-mexico-bioclimex.127e5b1.jpg"
          alt=""
        />
        <h1 className="absolute bottom-0 right-0 mb-20 xl:mb-20 4xl:mr-20  text-white font-semibold text-4xl md:text-2xl xl:text-3xl max-w-sm xl:max-w-lg"></h1>
      </div>
    </div>
  );
};

export default TitleImage;
