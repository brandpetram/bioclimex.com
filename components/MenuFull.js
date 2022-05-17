/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { MenuIcon } from "@heroicons/react/outline";
import { Popover } from "@headlessui/react";

const navigation = [
  {
    name: "INICIO",
    link: "inicio",
    hidden: 1,
    offset: -500,
    mobileOffset: 420,
  },
  {
    name: "NOSOTROS",
    link: "nosotros",
    hidden: 1,
    offset: 20,
    mobileOffset: 70,
  },
  {
    name: "VENTAJAS",
    link: "ventajas",
    hidden: 1,
    offset: -20,
    mobileOffset: -20,
  },
  {
    name: "MANUFACTURA",
    link: "manufactura",
    offset: 250,
    mobileOffset: -10,
  },
  {
    name: "SERVICIOS ",
    link: "servicios",
    offset: 10,
    mobileOffset: -10,
  },

  {
    name: "PREGUNTAS",
    link: "preguntas",
    offset: -20,
    mobileOffset: -10,
  },
];

const MenuFull = (props) => {
  const [state, setstate] = useState(false);

  useEffect(() => {
    if (window.location.pathname == "/") {
      setstate(true);
    }
  }, []);

  return (
    <>
      <Transition.Root show={props.state} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={props.ChangeState}
        >
          <div className=" inset-0 overflow-hidden ">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="opacity-0 -translate-y-full translate-x-full"
                enterTo="opacity-100 translate-y-0 translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="w-screen ">
                  <div className="h-full flex flex-col py-6 bg-blue-900 shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {" "}
                          <a href="/">
                            <img
                              className="h-auto w-auto"
                              src="/logo.svg"
                              alt="Logo bse"
                            />
                          </a>
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className=" text-white "
                            onClick={() => props.ChangeState(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <MenuIcon
                              className="h-10 w-10"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full" aria-hidden="true">
                          <nav className="grid gap-y-5 text-white text-lg pt-6">
                            {navigation.map((item, index) =>
                              state ? (
                                <Link
                                  to={item.link}
                                  id={"link" + index}
                                  spy={true}
                                  smooth={true}
                                  offset={item.offset}
                                  duration={1000}
                                  key={item.name}
                                  onClick={() => props.ChangeState(false)}
                                  >
                                  {item.name}
                                </Link>
                              ) : (
                                <a
                                  href={"/#" + item.link}
                                  id={"link" + index}
                                  key={item.name}
                                >
                                  {item.name}
                                </a>
                              )
                            )}
                            <a
                              className="grid gap-y-5 text-white text-lg "
                              href="/climatizacion-industrial"
                            >
                              INDUSTRIAL
                            </a>
                            <a
                              className="grid gap-y-5 text-white text-lg"
                              href="/contacto.html"
                            >
                              CONTACTO
                            </a>
                          </nav>
                          <div className="w-full h-2 border-t border-dashed mt-8"></div>
                          <div className="pt-4  h-[30vh] text-white">
                            <h1 className="font-bold text-xl">Wellmedic</h1>
                            <div className="mt-4 font-extralight text-lg space-y-3 flex flex-col">
                              <a href="tel:8116467617"> (81) 1646 7617</a>
                              <a href="tel:8117682209">(81) 1768 2209</a>
                              <a href="tel:8117682210">(81) 1768 2210</a>
                            </div>
                            <a
                              target="_blank"
                              href="http://wa.me/5218121086523?text=Hola%20estoy%20en%20bse.mx%20y%20me%20interesa%20conocer%20más%20sobre%20los%20procedimientos%20bariátricos"
                            >
                              <button className="w-full p-3 bg-green-600 my-10">
                                Enviar WhatsApp
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MenuFull;
