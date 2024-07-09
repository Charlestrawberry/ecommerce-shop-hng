import React from "react";

import Herosection from "./Herosection";
import HeroCarouse from "./HeroCarouse";
import NavigationBar from "./NavigationBar";
import MoreHerosection from "./MoreHerosection";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <HeroCarouse />
      <NavigationBar />
      
      <Herosection />
      <MoreHerosection />

    </div>
  );
};

export default Hero;
