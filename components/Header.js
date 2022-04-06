/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
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
    offset: 250,
    mobileOffset: -10,
  },

  {
    name: "PREGUNTAS",
    link: "preguntas",
    offset: -20,
    mobileOffset: -10,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const color_navbar = "bg-white ";
const color_text = "text-gray-800";

const HeaderWithFullWidthLayouts = (props) => {
  const [state, setstate] = useState(false);
  useEffect(() => {
      document.getElementById("link0").href = "#linkscroll"
      document.getElementById("link1").href = "#linkscroll"
      document.getElementById("link2").href = "#linkscroll"
      document.getElementById("link3").href = "#linkscroll"
      document.getElementById("link4").href = "#linkscroll"
    setstate(true);
  }, []);

  if (state) {
    var prevScrollpos = window.pageYOffset;
    if (prevScrollpos < 100) {
      document.getElementById("navbar").style.height = "100px";
      document.getElementById("wrap").style.height = "100px";
      document.getElementById("logo").style.transform = "scale(1.5)";
    } else {
      document.getElementById("navbar").style.height = "60px";
      document.getElementById("wrap").style.height = "60px";
      document.getElementById("logo").style.transform = "scale(1.5)";
    }
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("logo").style.transform = "scale(1.5)";
      } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("logo").style.transform = "scale(0)";
      }
      if (prevScrollpos < 100) {
        document.getElementById("navbar").style.height = "7rem";
        document.getElementById("wrap").style.height = "7rem";
        document.getElementById("logo").style.transform = "scale(1.5)";
      } else {
        document.getElementById("navbar").style.height = "4.5rem";
        document.getElementById("wrap").style.height = "4.5rem";
        document.getElementById("logo").style.transform = "scale(1.5)";
      }

      prevScrollpos = currentScrollPos;
    };
  }
  return (
    <div
      id="navbar"
      className="fixed top-0 bg-white w-full transition-top duration-500 px-24"
    >
      <Popover className={"mx-auto relative" + color_navbar}>
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="flex " id="wrap">
          <div className="w-full self-center mx-auto">
            <div className="flex pl-10 pr-0 mx-auto">
              <div className="w-1/3 flex ">
                <img
                  src="../logo.svg"
                  className="h-8 2xl:h-8 hidden lg:block transition-all duration-700 "
                  id="logo"
                />
              </div>
              <div className="w-full text-right">
                <Popover.Group as="nav" className="space-x-5 relative lg:mt-2">
                  {navigation.map((item, index) => (
                    <Link
                      to={item.link}
                      id={"link" + index}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={1000}
                      key={item.name}
                      className="font-bold text-gray-900 lg:text-xs 2xl:text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    className="font-bold text-gray-900 lg:text-xs 2xl:text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                    href="/climatizacion-industrial"
                  >
                    INDUSTRIAL
                  </a>
                  <a
                    className="font-bold text-gray-900 lg:text-xs 2xl:text-sm 7xl:text-lg hover:text-sky-500 cursor-pointer"
                    href="/contacto"
                  >
                    CONTACTO
                  </a>
                </Popover.Group>
              </div>
              <img
                src="./mexico.svg"
                alt="bandera de méxico"
                className="w-8 3xl:w-10 ml-10"
              />
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default HeaderWithFullWidthLayouts;
