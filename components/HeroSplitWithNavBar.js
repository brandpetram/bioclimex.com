/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import SliderFull from "./SliderFull";

import MenuFull from "./MenuFull";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const HeroSplitWithNavBar = (props) => {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const ChangeState = (value) => {
    setState(value);
  };
  useEffect(() => {
    //script para esconder la navbar

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-mobile").style.top = "0";
      } else {
        document.getElementById("navbar-mobile").style.top = "-100px";
      }

      prevScrollpos = currentScrollPos;
    };
  }, []);

  useEffect(() => {
    var htmlElement = document.getElementsByTagName("html")[0];
    if (open && !state) {
      htmlElement.style.overflow = "hidden";
    } else {
      htmlElement.style = "";
    }
  }, [open]);

  const putStyle = () => {
    var htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.style.overflow = "hidden";
  };

  return (
    <div
      className={"top-0 z-30 bg-white w-full fixed transition-all duration-500"}
      id="navbar-mobile"
    >
      <SliderFull setOpen={setOpen} open={open} />
      <MenuFull
        state={state}
        ChangeState={ChangeState}
        setOpen={setOpen}
        putStyle={putStyle}
      />
      <div className="relative">
        <Popover className="relative bg-white shadow ">
          <div className="mx-auto px-4 sm:px-6 ">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10 ">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">Logo Carolco</span>
                  <img className="" src="/logo.svg" alt="" id="logo-mobile" />
                </a>
              </div>
              <div className="-mr-2 -my-2 lg:hidden grid justify-items-stretch w-full ">
                <div className="justify-self-end">
                  <Popover.Button className="bg-white  overflow-hidden rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-900 hover:bg-gray-100">
                    <span className="sr-only">Abrir menu</span>
                    <MenuIcon
                      onClick={(e) => ChangeState(true)}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};
export default HeroSplitWithNavBar;
