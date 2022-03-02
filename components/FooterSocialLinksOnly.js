/* This example requires Tailwind CSS v2.0+ */
import { PhoneIcon } from "@heroicons/react/solid";
import NextLink from "next/link";


const Footer = (props) => {
  return (
    <div className="bg-white  text-gray-500 hover:text-gray-900 ">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <NextLink href="/" className="text-base leading-6       ">
              Inicio
            </NextLink>
          </div>{" "}
          <div className="px-5 py-2">
            <NextLink href="/nosotros" className="text-base leading-6       ">
              Ventajas
            </NextLink>
          </div>{" "}
          <div className="px-5 py-2">
            <NextLink href="/productos" className="text-base leading-6       ">
              Preguntas Frecuentes
            </NextLink>
          </div>{" "}
          <div className="px-5 py-2">
            <NextLink href="/productos" className="text-base leading-6       ">
              Contacto
            </NextLink>
          </div>{" "}
          <div className="px-5 py-2">
            <a
              href="https://wa.me/5218111839133?text=Hola,%20necesito%20ayuda%20en%20Serviclinicos.com"
              className="text-base leading-6       "
            >
              WhatsApp
            </a>
          </div>{" "}
          <div className="px-5 py-2">
            <NextLink href="/#ventajas" className="text-base leading-6       ">
              Privacidad
            </NextLink>
          </div>{" "}
          <div className="px-5 py-2">
            <NextLink href="/privacidad" className="text-base leading-6       ">
              Terminos de uso
            </NextLink>
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
