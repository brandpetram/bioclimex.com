import MobilNavBar from "./MobilNavBar";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
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

export default function HeaderSimpleBranded() {
  const [state, setstate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (1) {
        var prevScrollpos = window.pageYOffset;
        if (prevScrollpos < 100) {
          document.getElementById("navbar").style.top = "0";
          document.getElementById("wrap").style.marginTop = "1.5rem";
        } else {
          document.getElementById("navbar").style.top = "-200px";
        }
        window.onscroll = function () {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos < 100) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("wrap").style.marginTop = "1.5rem";
          } else if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("wrap").style.marginTop = "1rem";
          } else {
            document.getElementById("navbar").style.top = "-200px";
          }
          prevScrollpos = currentScrollPos;
        };
      }
    }, 100);
    if (window.location.pathname == "/") {
      setstate(true);
    }
  }, []);
  return (
    <>
      <header
        className={
          "fixed z-50 top-0 bg-white w-full transition-all duration-500 "
        }
        id="navbar"
      >
        <div className={"bg-blue-500 "}>
          <div className="w-10/12 mx-auto text-white flex justify-between font-light py-1 lg:py-3 7xl:py-4 text-xs xl:text-sm 2xl:text-md 3xl:text-lg 4xl:text-lg 7xl:text-xl">
            <div className="gap-x-5 hidden md:flex">
              <a href={"contacto"}>
                <h1 className={"hidden lg:block -mt-0.5"}>
                  Solicita una cotización aquí
                </h1>
              </a>
            </div>

            <h1 className={"hidden lg:flex"}>
              <a
                target="_blank"
                href="https://wa.me/5215544815125?text=Hola,%20estoy%20en%20bioclimex.mx%20y%20me%20interesa%20cotizar."
                className={"flex items-center"}
              >
                {" "}
                Whatsapp
                <img
                  src="/whatsapp.svg"
                  className="mx-3 w-6 mt-0.5"
                  loading="lazy"
                />
              </a>
              &nbsp;
              <a className={"underline"} href="tel:(55) 5919 7533">
                Llámanos al (55) 5919 7533
              </a>
            </h1>
          </div>
        </div>

        <div
          className={
            "w-11/12 my-10 mx-auto justify-between hidden inset-0 lg:flex transition-all duration-500"
          }
          id="wrap"
        >
          {" "}
          <a href={"/"}>
            <img
              className="w-[18rem] xl:w-[23rem] 2xl:w-[25rem] 3xl:w-[28rem] 7xl:w-[32rem] "
              src="/logo.svg"
              alt=""
            />
          </a>
          <div className="w-full text-right grid content-center">
            <Popover.Group as="nav" className="space-x-5 relative">
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
                    className={
                      item.hidden
                        ? "hidden xl:inline-flex font-bold text-gray-900 text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                        : "font-bold text-gray-900 text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                    }
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={"/#" + item.link}
                    id={"link" + index}
                    key={item.name}
                    className={
                      item.hidden
                        ? "hidden xl:inline-flex font-bold text-gray-900 text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                        : "font-bold text-gray-900 text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                    }
                  >
                    {item.name}
                  </a>
                )
              )}
              <a
                className="font-bold text-gray-900 text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                href="/climatizacion-industrial"
              >
                INDUSTRIAL
              </a>
              <a
                className="font-bold text-gray-900 text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                href="/contacto.html"
              >
                CONTACTO
              </a>
            </Popover.Group>
          </div>
        </div>
      </header>
      <div className={"lg:hidden z-50 "}>
        <MobilNavBar />
      </div>
    </>
  );
}
