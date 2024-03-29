const WhyUs = () => {
  return (
    <div id="ventajas" className="lg:mt-10 xl:mt-16 w-11/12 mx-auto">
      <div className="bg-white">
        <div className="px-10 lg:max-w-screen-lg  xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto py-16 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base leading-6 font-semibold text-cool-gray-900 uppercase tracking-wide">
              ¿Por qué conviene?
            </h2>
            <p className="mt-2 text-3xl leading-9 font-extrabold text-cool-gray-900">
              ¿Por qué las empresas <br />
              prefieren Bioclimex?
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-500">
              En Bioclimex el capital humano es esencial. Nuestra experiencia
              técnica sumada a la gran calidad de nuestros equipos y a la
              tecnología de última generación, hacen que nuestras soluciones
              para ventilar y climatizar espacios sean superiores a las de la
              competencia.
            </p>
            <div className="inline-flex mt-10">
              <a href="/contacto.html">
                <button className="bg-bioclimex-blue hover:bg-indigo-600 text-white font-bold py-2 px-4">
                  Comenzar
                </button>
              </a>
              <a
                href="#tubos"
                v-scroll-to="{
                el: '#tubos',
                duration: 500,
                lazy: false,
                easing: 'linear',
                offset: -100
              }"
              >
                {" "}
                <a href="/climatizacion-industrial">
                  <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold ml-5 py-2 px-4">
                    Conocer más
                  </button>
                </a>
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              <div className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="space-y-2">
                  <div className=" text-xl xl:text-2xl leading-6 font-medium text-cool-gray-900">
                    Ahorro de energía
                  </div>
                  <div className="flex space-x-3 lg:py-0 lg:pb-4">
                    <span className="lg:text-md  leading-6 3xl:leading-8 text-gray-500">
                      Con capacidad para climatizar un espacio de de 200 m2 con
                      1kw/h, el uso energético es de una 5ta parte del que
                      requiere un sistema de climatización tradicional.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="space-y-2">
                  <div className=" text-xl xl:text-2xl leading-6 font-medium text-cool-gray-900">
                    Inyección de aire fresco
                  </div>
                  <div className="flex space-x-3">
                    <span className="lg:text-md  leading-6 3xl:leading-8 text-gray-500">
                      La calidad del aire es cada vez más importante, mantén una
                      ventilación adecuada para tus espacios teniendo un sistema
                      bioclimatizador más eficiente
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="space-y-2">
                  <div className=" text-xl xl:text-2xl leading-6 font-medium text-cool-gray-900">
                    Presión positiva
                  </div>
                  <div className="flex space-x-3">
                    <span className="lg:text-md  leading-6 3xl:leading-8 text-gray-500">
                      Generación de una presión positiva evita la entrada de
                      polvo a los espacios comerciales e industriales, mejorando
                      la calidad del aire, contribuyendo a tener superficies más
                      limpias.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="space-y-2">
                  <div className=" text-xl xl:text-2xl leading-6 font-medium text-cool-gray-900">
                    Confort y eficiencia con microclimas
                  </div>
                  <div className="flex space-x-3">
                    <span className="lg:text-md  leading-6 3xl:leading-8 text-gray-500">
                      La tecnología de Bioclimex tiene la capacidad de generar,
                      microclimas ahí donde la gente está laborando, en lugar de
                      circular aire desde partes lejanas.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="space-y-2">
                  <div className=" text-xl xl:text-2xl leading-6 font-medium text-cool-gray-900">
                    Durabilidad
                  </div>
                  <div className="flex space-x-3">
                    <span className="lg:text-md  leading-6 3xl:leading-8 text-gray-500">
                      Componentes de bajo mantenimiento y una manufactura de
                      alta calidad aseguran un ciclo de vida largo.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="space-y-2">
                  <div className=" text-xl xl:text-2xl leading-6 font-medium text-cool-gray-900">
                    Bajo nivel de emisiones
                  </div>
                  <div className="flex space-x-3 lg:border-t-0 lg:py-0 lg:pb-4">
                    <span className="lg:text-md  leading-6 3xl:leading-8 text-gray-500">
                      Tecnología 100% alineada con la tendencia en reducción de
                      emisión de gases invernadero porque reduce el consumo
                      eléctrico de la empresa (ISO 14000)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 2xl:px-0 mt-20 lg:max-w-screen-lg  xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto">
        <h2
          id="tubos"
          className="font-bold text-8xl lg:text-12 xl:text-16xl 2xl:text-18xl 3xl:text-20xl leading-none"
        >
          Da un salto al siguiente nivel. Climatiza hasta{" "}
          <span className="text-bioclimex-blue">200m²</span> de tus espacios
          industriales y comerciales con solo
          <span className="text-bioclimex-blue">1kW</span>
        </h2>
        <hr className="my-10" />
        <div className="text-gray-500 font-light text-xl md:text-2xl lg:text-3xl 3xl:text-4xl leading-relaxed ">
          <p>
            Los climatizadores evaporativos pueden parecer iguales por fuera sin
            embargo tienen grandes diferencias. En Bioclimex, preferimos
            utilizar equipos Breezair siempre que es posible porque son los
            enfriadores más eficientes del mercado. Uno de los equipos que
            usamos con frecuencia, el modelo SuperStealth TBSI 580, puede
            generar hasta un 80% de ahorro energético. Está fabricado con
            polímero de alta resitencia por lo que cuenta con 25 años de
            garantía en su estructura. Percibimos las grandes diferencias tanto
            en diseño como en calidad de compontes de los equipos Breezair. Por
            ejemplo la tecnología Mini-Cell / Chill Cell® ofrece una mayor
            densidad de poros y superficie de los paneles lo cual se traduce en
            un mejor desempeño. Los equipos Breezair también cuentan con un
            sistema administrador del agua que ayuda a que el equipo opere con
            mayor eficiencia y a extender su vida útil.
          </p>
          <br />
          <p>
            La bomba Tornado® es la única diseñada, fabricada y probada
            concienzudamente por Seely International. Con materiales de última
            generación, acero inoxidable y cojinetes protegidos por agua
            personifica confiabilidad.
            <a href="#nosotros">
              <svg
                className="relative inline ml-4 mb-1"
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 13H34V17H0V13Z" fill="black" />
                <path
                  d="M25.1125 30L22 26.8644L33.7792 15L22 3.13557L25.1125 0L40 15.0001L25.1125 30Z"
                  fill="black"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
