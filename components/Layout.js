import React from "react";
import Header from "./Header";
import FooterSocialLinksOnly from "./FooterSocialLinksOnly";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="hidden absolute lg:block w-full mx-auto z-99" style={{zIndex:999}}>
        <Header  />
      </div>
    
      <div className="">
      {children}
      </div>
      <FooterSocialLinksOnly />
    </div>
  );
};

export default Layout;
