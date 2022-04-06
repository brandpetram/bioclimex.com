import React from "react";
import Header from "./Header";
import FooterSocialLinksOnly from "./FooterSocialLinksOnly";
import HeroSplitWithNavBar from "./HeroSplitWithNavBar"
const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <div className="hidden absolute lg:block w-full mx-auto z-99" style={{zIndex:999}}>
        <Header  />
      </div>
      <div className="lg:hidden">
        <HeroSplitWithNavBar/>
      </div>
      <div className="">
      {children}
      </div>
      <div>
        <a href="https://api.whatsapp.com/send/?phone=525520838489&text=Hola%2C+estoy+en+bioclimex.mx+y+me+interesa+cotizar">
          <img
            className="w-12 h-12 md:w-16 md:h-16 mb-3 mr-3 z-50 bottom-0 right-0 fixed"
            src="/whatsapp.svg"
            alt=""
          />
        </a>
      </div>
      <FooterSocialLinksOnly />
    </div>
  );
};

export default Layout;
