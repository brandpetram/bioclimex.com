import React from "react";
import Header from "./HeaderInterno";
import FooterSocialLinksOnly from "./FooterSocialLinksOnly";
import HeroSplitWithNavBar from "./HeroSplitWithNavBarInterno"

const Layout = ({ children }) => {
  return (
    <div>
      <div className="hidden absolute lg:block w-full mx-auto z-99" style={{zIndex:999}}>
        <Header  />
      </div>
      <div className="lg:hidden mb-16">
        <HeroSplitWithNavBar/>
      </div>
      <div className="">
      {children}
      </div>
      <FooterSocialLinksOnly />
    </div>
  );
};

export default Layout;
