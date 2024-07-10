import React from "react";

import Herosection from "./Herosection";
import HeroCarouse from "./HeroCarouse";
import NavigationBar from "./NavigationBar";
import MoreHerosection from "./MoreHerosection";


const Hero = () => {
  return (
    <di>
      {/* navbar here */}
      
      <HeroCarouse />
      <NavigationBar />
      <Herosection />
      <MoreHerosection />
      

    </di>
  );
};

export default Hero;
