import React from "react";
import HeaderSimpleBranded from "./HeaderSimpleBranded";
import FooterSocialLinksOnly from "./FooterSocialLinksOnly";
const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <div className="z-50 overflow-hidden">
        <HeaderSimpleBranded />
      </div>
      <div className="z-0 relative ">{children}</div>
      <div>
        <a href="https://api.whatsapp.com/send/?phone=525544815125&text=Hola%2C+estoy+en+bioclimex.mx+y+me+interesa+cotizar">
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
