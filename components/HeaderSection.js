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
    <header className={`${header}`}>
      <div>
        <div className="container max-auto">
          <div className="flex justify-between items-center">
            <div className="flex pl-4">
              <NavigationDrop />
            </div>
            <div className="flex items-center max-[540px]:hidden gap-x-6">
              <Navbar
              // PUT HIDDEN IN CONTAINER STYLES FOR MAX-SM: AND DO NECESSRAY ADJ
                containerStyles=" xl:flex gap-x-8 items-center max"
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
