const CtaTwo = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">¿Tienes preguntas?</span>
                <span className="block">Contáctanos y convéncete.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                15 años siendo expertos en desarrollo de ingenierías,
                proveeduría de refacciones, instalación y mantenimiento de
                equipos para ventilación y climatización industrial y comercial.
              </p>
              <a
                href="/contacto"
                className="mt-8 bg-blue-500 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-red-700"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://brandpetram.imgix.net/bioclimex.com/climatizacion-industrial-mexico-3.jpeg?auto=compress&ar=2%3A1&fit=crop"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaTwo