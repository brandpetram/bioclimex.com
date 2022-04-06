/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { XIcon } from "@heroicons/react/outline";

const MenuFull = (props) => {
  useEffect(() => {
    document.getElementById("link0").href = "#linkscroll"
    document.getElementById("link1").href = "#linkscroll"
    document.getElementById("link2").href = "#linkscroll"
    document.getElementById("link3").href = "#linkscroll"
    document.getElementById("link4").href = "#linkscroll"
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
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {" "}
                          <img
                            className="h-8 w-auto"
                            src="/logo.svg"
                            alt="Workflow"
                          />
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="rounded-md text-gray-800 hover:text-gray-900 focus:outline-none"
                            onClick={() => props.ChangeState(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full" aria-hidden="true">
                          
                          <nav
                            className="grid gap-y-8 divide-y-2"
                            id="estatico"
                          >
                            <Link
                              to={"inicio"}
                              spy={true}
                              id={"link0"}
                              smooth={true}
                              offset={50}
                              duration={1000}
                              className="-m-3 p-3 flex items-center hover:bg-gray-50"
                              onClick={() => props.ChangeState(false)}
                            >
                              <span className="ml-3 text-base font-medium text-gray-800">
                                Inicio
                              </span>
                            </Link>

                            <Link
                              to={"nosotros"}
                              spy={true}
                              id={"link1"}
                              smooth={true}
                              offset={200}
                              duration={1000}
                              className="-m-3 p-3 flex items-center hover:bg-gray-50"
                              onClick={() => props.ChangeState(false)}
                            >
                              <span className="ml-3 text-base font-medium text-gray-800">
                                Nosotros
                              </span>
                            </Link>

                            <Link
                              to={"ventajas"}
                              spy={true}
                              id={"link2"}
                              smooth={true}
                              offset={-30}
                              duration={1000}
                              className="-m-3 p-3 flex items-center hover:bg-gray-50"
                              onClick={() => props.ChangeState(false)}
                            >
                              <span className="ml-3 text-base font-medium text-gray-800">
                                Ventajas
                              </span>
                            </Link>

                            <Link
                              to={"manufactura"}
                              spy={true}
                              id={"link3"}
                              smooth={true}
                              offset={200}
                              duration={1000}
                              className="-m-3 p-3 flex items-center hover:bg-gray-50"
                              onClick={() => props.ChangeState(false)}
                            >
                              <span className="ml-3 text-base font-medium text-gray-800">
                                Manufactura
                              </span>
                            </Link>
                            <Link
                              to={"preguntas"}
                              spy={true}
                              id={"link4"}
                              smooth={true}
                              offset={-30}
                              duration={1000}
                              className="-m-3 p-3 flex items-center hover:bg-gray-50"
                              onClick={() => props.ChangeState(false)}
                            >
                              <span className="ml-3 text-base font-medium text-gray-800">
                                Preguntas
                              </span>
                            </Link>
                            <a
                              href="/climatizacion-industrial"
                              className="-m-3 p-3 flex items-center hover:bg-gray-50 "
                            >
                              <span className="ml-3 text-base font-medium text-gray-800 ">
                                Industrial
                              </span>
                            </a>
                          </nav>

                          <div className={"py-6 space-y-6"}>
                            <a
                              href="/contacto"
                              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
                            >
                              Contacto
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
