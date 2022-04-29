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
          document.getElementById("wrap").style.marginTop = "3.5rem";
        } else {
          document.getElementById("navbar").style.top = "-200px";
        }
        window.onscroll = function () {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos < 100) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("wrap").style.marginTop = "3.5rem";
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
              <a href="https://www.facebook.com/bsemex/" target="_blank">
                <svg fill="#ffffff" className="w-6" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/bsemex" target="_blank">
                {" "}
                <svg fill="#ffffff" viewBox="0 0 24 24" className="w-6">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/drsebastianarana/"
                target="_blank"
              >
                <svg fill="#ffffff" viewBox="0 0 24 24" className="w-6">
                  <path
                    fillRule="#FD1D1D"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://www.youtube.com/user/drsarana" target="_blank">
                <svg
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  className="w-6"
                >
                  {" "}
                  <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z" />
                </svg>
              </a>
              <a href={"contacto"}>
                <h1 className={"hidden lg:block -mt-0.5"}>
                  Reservar una cita aquí
                </h1>
              </a>
            </div>

            <h1 className={"hidden lg:flex"}>
              <a
                target="_blank"
                href="http://wa.me/5218121086523?text=Hola%20estoy%20en%20bse.mx%20y%20me%20interesa%20conocer%20más%20sobre%20los%20procedimientos%20bariátricos"
                className={"flex"}
              >
                <img
                  src="/whatsapp.svg"
                  className="w-6 mt-0.5"
                  loading="lazy"
                />
                &nbsp;(81) 2108 6523{" "}
              </a>
              &nbsp;<a href="tel:8116467617">- Wellmedic (81) 1646 7617</a>,
              &nbsp;<a href="tel:8117682209">(81) 1768 2209</a> &nbsp;y &nbsp;
              <a href="tel:8117682210">(81) 1768 2210</a>
            </h1>
          </div>
        </div>

        <div>
          <div
            className={
              "w-11/12 mt-14 mx-auto justify-between hidden inset-0 lg:flex transition-all duration-500"
            }
            id="wrap"
          >
            {" "}
            <a href={"/"}>
              <img
                className="w-[18rem] xl:w-[23rem] 2xl:w-[25rem] 3xl:w-[30rem] 4xl:w-[32rem] 7xl:w-[40rem] "
                src="/logo.svg"
                alt=""
              />
            </a>
            <div className="w-7/12 2xl:w-6/12 3xl:w-4/12 4xl:w-full text-right">
              <Popover.Group as="nav" className="space-x-5 relative lg:mt-2">
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
                  href="/contacto"
                >
                  CONTACTO
                </a>
              </Popover.Group>
            </div>
          </div>
        </div>
      </header>
      <div className={"lg:hidden z-50 "}>
        <MobilNavBar />
      </div>
    </>
  );
}
