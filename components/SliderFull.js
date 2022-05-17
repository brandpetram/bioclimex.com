/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
const timeline = [
  {
    id: 1,
    content: "L1:",
    target: "421.66m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 2,
    content: "L2:",
    target: "547.38m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 3,
    content: "L3:",
    target: "553.26m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 4,
    content: "L4:",
    target: "588.17m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 5,
    content: "L5:",
    target: "507.50m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 6,
    content: "L6:",
    target: "639.57m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 7,
    content: "L7:",
    target: "1106.31m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 8,
    content: "L8:",
    target: "615.65m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 9,
    content: "L9:",
    target: "628.00m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 10,
    content: "L10:",
    target: "729.29m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 11,
    content: "L11:",
    target: "807.83m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 12,
    content: "L12:",
    target: "682.99m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 13,
    content: "L13:",
    target: "657.12m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 14,
    content: "L14:",
    target: "799.70m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 15,
    content: "L15:",
    target: "721.83m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 16,
    content: "L16:",
    target: "481.53m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 17,
    content: "L17:",
    target: "496.67m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 18,
    content: "L18:",
    target: "552.08m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 19,
    content: "L19:",
    target: "498.84m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 20,
    content: "L20:",
    target: "706.77m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 21,
    content: "L21:",
    target: "684.14m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 22,
    content: "L22:",
    target: "601.87m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 23,
    content: "L23:",
    target: "464.84m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 24,
    content: "L24:",
    target: "465.00m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 25,
    content: "L25:",
    target: "465.00m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 26,
    content: "L26:",
    target: "550.13m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 27,
    content: "L27:",
    target: "812.41m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 28,
    content: "L28:",
    target: "734.75m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 29,
    content: "L29:",
    target: "650.23m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 30,
    content: "L30:",
    target: "605.78m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 31,
    content: "L31:",
    target: "555.60m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 32,
    content: "L32:",
    target: "663.11m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 33,
    content: "L33:",
    target: "640.32m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 34,
    content: "L34:",
    target: "665.76m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 35,
    content: "L35:",
    target: "565.02m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 36,
    content: "L36:",
    target: "542.79m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 37,
    content: "L37:",
    target: "550.83m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 38,
    content: "L38:",
    target: "478.88m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 39,
    content: "L39:",
    target: "574.85m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 40,
    content: "L40:",
    target: "596.70m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 41,
    content: "L41:",
    target: "644.54m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 42,
    content: "L42:",
    target: "566.94m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 43,
    content: "L43:",
    target: "649.25m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 44,
    content: "L44:",
    target: "662.18m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 45,
    content: "L45:",
    target: "702.15m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 46,
    content: "L46:",
    target: "643.11m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 47,
    content: "L47:",
    target: "557.38m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 48,
    content: "L48:",
    target: "574.90m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 49,
    content: "L49:",
    target: "590.23m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 50,
    content: "L50:",
    target: "575.96m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 51,
    content: "L51:",
    target: "595.11m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 52,
    content: "L52:",
    target: "631.40m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 53,
    content: "L53:",
    target: "634.05m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 54,
    content: "L54:",
    target: "659.86m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 55,
    content: "L55:",
    target: "646.16m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 56,
    content: "L56:",
    target: "732.92m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 57,
    content: "L57:",
    target: "685.87m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 58,
    content: "L58:",
    target: "690.80m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 59,
    content: "L59:",
    target: "583.99m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 60,
    content: "L60:",
    target: "549.93m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 61,
    content: "L61:",
    target: "594.20m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 62,
    content: "L62:",
    target: "688.17m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 63,
    content: "L63:",
    target: "702.87m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 64,
    content: "L64:",
    target: "839.82m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 65,
    content: "L65:",
    target: "597.87m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 66,
    content: "L66:",
    target: "648.20m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 67,
    content: "L67:",
    target: "655.04m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 68,
    content: "L68:",
    target: "624.77m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 69,
    content: "L69:",
    target: "635.84m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 70,
    content: "L70:",
    target: "641.16m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 71,
    content: "L71:",
    target: "600.51m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 72,
    content: "L72:",
    target: "602.40m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 73,
    content: "L73:",
    target: "606.67m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 74,
    content: "L74:",
    target: "585.58m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 75,
    content: "L75:",
    target: "590.28m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 76,
    content: "L76:",
    target: "633.75m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 77,
    content: "L77:",
    target: "664.10m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 78,
    content: "L78:",
    target: "681.18m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 79,
    content: "L79:",
    target: "613.41m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 80,
    content: "L80:",
    target: "544.08m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 81,
    content: "L81:",
    target: "559.81m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 82,
    content: "L82:",
    target: "581.13m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 83,
    content: "L83:",
    target: "558.95m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 84,
    content: "L84:",
    target: "495.48m²",
    href: "/contacto.html",
    date: "Disponible",
    icon: ThumbUpIcon,
    iconBackground: "bg-sky-500",
  },
  {
    id: 85,
    content: "L85:",
    target: "491.47m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 86,
    content: "L86:",
    target: "525.11m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 87,
    content: "L87:",
    target: "664.75m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 88,
    content: "L88:",
    target: "787.44m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 89,
    content: "L89:",
    target: "804.53m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 90,
    content: "L90:",
    target: "539.52m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 91,
    content: "L91:",
    target: "526.50m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 92,
    content: "L92:",
    target: "728.36m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
  {
    id: 93,
    content: "L93:",
    target: "408.80m²",
    href: "/contacto.html",
    date: "Vendido",
    icon: CheckIcon,
    iconBackground: "bg-emerald-500",
  },
];
const SliderFull = (props) => {
  const [classtate, setclasstate] = useState("")
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

 useEffect(() => {
   if(props.open){
      setTimeout(() =>setclasstate("overflow-y-scroll"), 500)
     }
   
 }, [props.open])
 
 

  return (
    <Transition.Root
      show={props.open}
      as={Fragment}
      onClick={(e) => props.setOpen(false)}
    >
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-50 "
        onClose={props.setOpen}
      >
        <div className="absolute inset-0 overflow-hidden "         
>
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 left-0 flex lg:ml-[4.1rem]">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
              <div className="bg-white py-6 px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-500"> Lotes disponibles </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-white-900 text-gray-500 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => props.setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-gray-500">
                        Separa el tuyo porque vuelan como pan caliente
                      </p>
                    </div>
                  </div>
                <div className={"flex h-full flex-col bg-white py-6 shadow-xl " + classtate}>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="flow-root pb-32" >
                      <ul role="list" className="-mb-8">
                        {timeline.map((event, eventIdx) => (
                          <li key={event.id}>
                            <div className="relative pb-8">
                              {eventIdx !== timeline.length - 1 ? (
                                <span
                                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                  aria-hidden="true"
                                />
                              ) : null}
                              <div className="relative flex space-x-3">
                                <div>
                                  <span
                                    className={classNames(
                                      event.iconBackground,
                                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                    )}
                                  >
                                    <event.icon
                                      className="h-5 w-5 text-white"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                  <div>
                                    <p className="text-lg text-gray-500">
                                      <a
                                        href={event.href}
                                        className="font-bold text-gray-600"
                                      >
                                        <p className={'inline font-light mr-3 text-gray-400'}>{event.content}</p>

                                        {event.target}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="text-right text-md whitespace-nowrap text-gray-500">
                                    <time dateTime= {event.datetime}>
                                      {event.date}
                                    </time>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <a href="/contacto.html"><div className="py-2 bg-sky-400 mt-6 text-center text-white font-bold">
                        Contacto
                      </div></a>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default SliderFull;
