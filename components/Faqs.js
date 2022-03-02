const Faqs = () => {
  return (
    <div className="bg-white" id="preguntas">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 text-center">
          Preguntas frecuentes
        </h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿Como se diferencían de la competencia?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Nos diferenciamos en dos cosas, una la especialización en
                ventilación y climatización en espacios 100% industriales y
                comerciales y dos, la tecnología patentada que usamos es de muy
                bajo consumo eléctrico, gran eficiencia, y en línea con el ISO
                14,000
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿En que parte de la república mexicana operan?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                La mayoría de nuestros clientes de ventilación y climatización
                se encuentra en el centro de la república mexicana, sin embargo
                contamos con clientes a nivel nacional.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿Me pueden ayudar a ahorrar dinero?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Dependiendo del sistema actual de ventilación y climatización
                que uses, así como las condiciones climaticas usuales de la
                región en que te encuentras es probable que podamos ayudarte a
                ahorrar entre 20% y 80% en consumo eléctrico relacionado con tu
                ventilación y climatización.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿Han climatizado pequeñas tiendas de conveniencia?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Hemos climatizado tiendas de conveniencia de grandes
                corporativos mexicanos, pasando todas las rigurosas inspecciones
                que dichas empresas hacen a los equipos.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿Como contribuyen a mejorar la calidad del aire?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Generamos una presión positiva en los espacios que climatizamos
                de manera que el aire solo entre mediante los filtros que
                colocamos, esto hace que el polvo entre menos en los espacios
                que ventilamos.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿Tienen refacciones?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Contamos con ágil proveeduría de refacciones e inventario de
                piezas en diferentes puntos de la república mexicana. También te
                ayudamos a reclamos de garantías e instalación y mano de obra si
                lo necesitas
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿Qué garantías ofrecen?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Una de las razon por la que nuestros clientes nos prefieren es
                porque contamos con las mejores garantías del mercado: 25 años
                en corrosión de la estructura, 10 años en componentes mecánicos,
                y 2 años en electrónicos.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿Se pueden usar en restaurantes?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Por lo menos media dozena de las principales cadenas de cafés y
                de comida rápida del mundo utilizan nuestra tecnología para
                climatizar y ventilar sus establecimientos comerciales.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                ¿También se puede usar en residencias?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Si es posible usarlo en residencias. Algunas personas sobre todo
                en climas que cumplen ciertos parámetros sustituyen con Breezair
                sus climatizadores tradicionales generando importantes ahorros
                económicos en su cuenta de luz de la CFE.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
