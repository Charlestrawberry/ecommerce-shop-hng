"use client";

import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import NavigationDrop from "./NavigationDrop";

const HeaderSection = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const scrollPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollPos);
  });

  return (
//container max-auto
    // items-center mb-3
    //px-4  lg:flex  items-center  gap-x-6
    <header className={`${header}`}>
      <div>
        <div className="">
          <div className="flex justify-between py-6 ">
            <div className="flex pl-4 hover:text-green-600 cursor-pointer">
              <NavigationDrop
                
                title="Language EN"
                sectionOne="French"
                sectionTwo="Arabic"
                SectionThree="Espanyol"
              />
            </div>

        
            <div className="pl-11 flex items-center max-sm:hidden justify-between">
              <Navbar  
                containerStyles="items-center gap-4"
                linkStyles="relative hover:text-primary transition-all"
                underlineStyles="absolute left:0 top-full h-[2px] bg-primary w-full"
              />
            </div>
            <div className="flex">
              <span className=" mt-2">
                {" "}
                <CiSearch />
              </span>
              <p className="border-b-2 pl-2">search here</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
