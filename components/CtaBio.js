const CtaBio = () => {
  return (
    <div>
      <div className="bg-blue-800 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto w-10/12 md:w-11/12 mt-44">
        <div className="relative lg:flex lg:justify-between py-10 px-7 lg:py-10 lg:px-20">
          <img
            src="./mensaje-logo.svg"
            alt=""
            className="absolute w-16 -ml-4 lg:w-20 lg:-ml-5 2xl:w-24 2xl:-ml-6 -mt-7 top-0 left-0"
          />
          <div className="text-white 2xl:ml-12 3xl:ml-24">
            <h1 className="text-3xl xl:text-2xl 2xl:text-3xl font-bold">
              Mantente conectado
            </h1>
            <h2 className="xl:text-lg 2xl:text-xl">+52 (55) 5919 7533</h2>
          </div>
          <div className="my-auto space-x-2 mt-10 lg:mt-3 flex flex-col md:block lg:flex-row">
            <a href="#calentamos">
              <button className="bg-transparent hover:bg-cool-gray-900 text-white font-semibold hover:text-cool-gray-300 py-4 px-8 border border-white hover:border-transparent">
                Ver más ahora
              </button>
            </a>
            <a
              href="/contacto"
              className="mt-10 bg-transparent hover:bg-cool-gray-900 text-white font-semibold hover:text-cool-gray-300 py-4 px-8 border border-white hover:border-transparent"
            >
              Cotiza aquí
            </a>
          </div>
          <img
            src="./circle-blur.svg"
            alt=""
            className="absolute w-14 lg:mt-11 right-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CtaBio;
