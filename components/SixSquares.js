import React from "react";

const MyComponent = () => {
  return (
    <div  className={"overflow-hidden"}>
      <section className="bg-blue-600 sm:h-7xl md:h-7xl lg:h-6xl">
        <h1
          className={
            "hidden lg:block lg:absolute leading-[20rem] 3xl:leading-[27rem] pt-10 text-[21rem] 2xl:text-[28rem] 4xl:text-[32rem] text-blue-200 font-bold opacity-10 "
          }
        >
          Servicio
          <br />
          Integral
        </h1>
        <div className="container text-gray-100 max-w-2xl 7xl:max-w-4xl mx-auto px-20 md:px-0 pt-48 5xl:pt-120">
          <h1 className="text-4xl md:text-6xl 7xl:text-16xl leading-relaxed tracking-wide font-light">
            En Bioclimex obtienes un servicio Intergral 360. Nos encargamos la
            ingeniería, instalación y proveduría de refacciones
          </h1>
          <h2 className="mt-10 text-4xl md:text-2xl font-bold">
            Sabemos que lo más importante para ti es que tus equipos se
            encuentren al 100%
          </h2>
        </div>
        <h1
          className={
            " leading-none lg:hidden text-44xl text-white font-extrabold tracking-tighter overflow-hidden opacity-20 md:-mt-48"
          }
        >
          Servicio <br /> Intergral
        </h1>
        <div
          className={
            "flex lg:mt-44 flex-col md:divide-y md:w-full lg:w-10/12 7xl:w-1/2 mx-auto pb-96 text-gray-50 7xl:text-xl text-center leading-relaxed tracking-wide"
          }
        >
          <div className="grid grid cols-1 md:grid-cols-3 md:divide-x divide-green-500">
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>Mantenimiento</h1>
              Te ayudamos con el mantenimiento de tus unidades Breezair cuando
              lo requieras.
            </div>
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>Refacciones </h1>
              Proveeduría segura y a tiempo de cualquier refacción que necesites
            </div>
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>Instalación</h1>
              Realizamos la ingenería e instalación de los equipos si así lo
              requieres.
            </div>
          </div>
          <div className="mx-auto grid grid cols-1 md:grid-cols-3 md:divide-x divide-green-500">
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>Garantías </h1>
              Nos encargamos con gusto del reclamo de garantías de tus equipos
              Breezair.
            </div>
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>Asistencia</h1>
              Te proveemos de asistencia con manuales, especificaciones y guías
              técnica.
            </div>
            <div className={"py-16 px-20 font-extralight"}>
              <h1 className={"text-center my-10 font-bold"}>Rapidez</h1>
              Sabemos que el tiempo es oro, por eso somos rápidos en entregas e
              instalación.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
