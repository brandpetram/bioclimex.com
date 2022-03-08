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
      <FooterSocialLinksOnly />
    </div>
  );
};

export default Layout;
