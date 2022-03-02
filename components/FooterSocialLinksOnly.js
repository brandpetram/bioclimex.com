import { Link } from "react-scroll";
const navigation = [
  {
    name: "INICIO",
    link: "inicio",
    offset: -500,
    mobileOffset: 420,
  },
  {
    name: "NOSOTROS",
    link: "nosotros",
    offset: 20,
    mobileOffset: 70,
  },
  {
    name: "VENTAJAS",
    link: "ventajas",
    offset: -20,
    mobileOffset: -20,
  },
  {
    name: "MANUFACTURA",
    link: "manufactura",
    offset: -50,
    mobileOffset: -10,
  },

  {
    name: "PREGUNTAS",
    link: "preguntas",
    offset: -20,
    mobileOffset: -10,
  },
];

const Footer = (props) => {
  return (
    <div className="bg-white  text-gray-500 hover:text-gray-900 ">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center ">
          
        {navigation.map((item) => (
           <div className="px-5 py-2">
                    <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={1000}
                      key={item.name}
                      className="cursor-pointer"
                    >
                      {item.name}
                    </Link>
                    </div>
                  ))}
          
          <div className="px-5 py-2">
            <a
              href="https://api.whatsapp.com/send/?phone=525520838489&text=Hola%2C+estoy+en+bioclimex.mx+y+me+interesa+cotizar"
              className="text-base leading-6       "
            >
              WHATSAPP
            </a>
          </div>{" "}
          <div className="px-5 py-2">
            <Link href="/climatizacion-industrial" className="text-base leading-6       ">
              CLIMATIZACIÓN INDUSTRIAL
            </Link>
          </div>{" "}
          <div className="px-5 py-2">
            <Link href="/privacidad" className="text-base leading-6       ">
              PRIVACIDAD
            </Link>
          </div>{" "}
          <div className="px-5 py-2">
            <Link href="/terminos-de-uso" className="text-base leading-6       ">
              TERMINOS DE USO
            </Link>
          </div>{" "}
        
        </nav>{" "}
        <div className="my-20 mx-auto flex justify-center">
          <img
            src="./logo.svg"
            alt=""
            className="h-10 m
lg:h-16"
          />
        </div>{" "}
        <div className="mt-8">
          <p className="text-center text-base leading-6 text-gray-400">
            © 2020 Bioclimex SA de CV. Derechos Reservados
            <br />
            <a>Aviso de privacidad</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
