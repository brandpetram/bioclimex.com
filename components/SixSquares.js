import React from "react";

const MyComponent = () => {
  return (
    <div id={"distThird"} className={"overflow-hidden"}>
      <section className="bg-blue-600 sm:h-7xl md:h-7xl lg:h-6xl">
        <div className="container text-gray-100 max-w-2xl 7xl:max-w-4xl mx-auto px-20 md:px-0 pt-96 7xl:pt-120">
          <h1 className="text-4xl md:text-6xl 7xl:text-16xl leading-relaxed tracking-wide font-light">
            Gracias a al software de{" "}
            <span className={"font-bold"}>Innovat</span>, en nuestro colegio
            hemos podido reducir a la mitad el tiempo que nos tomaba hacer el
            pre-cierre de facturación, este módulo de cobros es simplemente una
            maravilla, todo es más simple y ordenado.
          </h1>
          <h2 className="mt-10 text-4xl md:text-2xl font-bold">
            J. Hernández, Colegio Juan Pablo II
          </h2>
        </div>
        <h1
          className={
            "text-44xl text-white font-extrabold tracking-tighter overflow-hidden opacity-20 md:-mt-48"
          }
        >
          Innovat
        </h1>
        <div
          className={
            "flex flex-col md:divide-y md:w-full lg:w-10/12 7xl:w-1/2 mx-auto pb-96 text-gray-50 7xl:text-xl text-center leading-relaxed tracking-wide"
          }
        >
          <div className="grid grid cols-1 md:grid-cols-3 md:divide-x divide-green-500">
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>
                La cobranza simple
              </h1>
              Conoce con exactitud lo que sucede a nivel financiero. Innovat es
              la mejor herramienta a nivel nacional para resolver el problema de
              la administración del dinero en las escuelas.
            </div>
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>
                Facilidad de uso
              </h1>
              Nuestro lema es: Entre más sencillo, mejor. Usamos la creatividad
              y tecnología para que nuestro software sea el más sencillo de usar
              en el mercado y trabajamos duro para que así sea.
            </div>
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>
                Actualización y mejora continua
              </h1>
              Integraciones con otras herramientas como YouTube, generar boletas
              individuales en PDF, todo esto y muchas otras mejoras hacemos
              constantemente sin costo alguno.
            </div>
          </div>
          <div className="mx-auto grid grid cols-1 md:grid-cols-3 md:divide-x divide-green-500">
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>
                Solución integral 360
              </h1>
              Uno de nuestros sellos distintivos es ofrecer una solución
              completa integral. Nuestra arquitectura modular te permite escoger
              solo lo que necesitas para tu escuela.
            </div>
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>Experiencia</h1>
              Contar con más de 25 años de experiencia comprendiendo los
              engranajes internos de la administración escolar nos ayuda a
              ofrecer un mejor servicio que la competencia.
            </div>
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>Soporte técnico</h1>
              Nos enorgullece proveer un servicio post venta y soporte técnico
              de clase mundial con atención solícita, personalizada y relevante
              para nuestros usuarios con preguntas o dudas.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
