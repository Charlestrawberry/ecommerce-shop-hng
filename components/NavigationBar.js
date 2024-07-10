"use client";

import React from "react";
import NavigationDrop from "./NavigationDrop";
import { PopoverHero } from "./PopoverHero";

const NavigationBar = () => {
  return (
    <div className="flex w-full gap-7 justify-between mx-4 py-10 max-sm:w-2/5 ">
      <div className="flex ">
        <NavigationDrop title="Color" sectionOne=" Red" sectionTwo="Blue" SectionThree="Brown" />
        <NavigationDrop title="Size" sectionOne="Small" sectionTwo="Medium" SectionThree="Large" />
        <NavigationDrop title="Length" sectionOne="20cm" sectionTwo="50cm" SectionThree="xl" />
        <NavigationDrop title="Price" sectionOne="$100 -$500" sectionTwo="$599- $1000" SectionThree="$$2000-$50000"  />
        <NavigationDrop title="Availability" sectionOne="Check Store"   />
      </div>
      <div className="mr-12">
        <PopoverHero />
      </div>
    </div>
  );
};

export default NavigationBar;
