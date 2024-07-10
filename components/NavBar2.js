"use client";

import React from "react";
import NavigationDrop from "./NavigationDrop";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const NavBar2 = () => {
  return (
    <div className="w-full h-24 border-gray-500 text-black max-sm:hidden max-sm:w-2/4 ">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex justify-between items-center">
        <NavigationDrop
          title="Language EN"
          sectionOne="French"
          sectionTwo="Arabic"
          SectionThree="Espanyol"
        />

        <ul className="flex items-center gap-6 uppercase text-sm font-bold">
          <Link href="/sales">
            <li className="hover:text-gray-500 cursor-pointer duration-300 ">
              SALES
            </li>
          </Link>
          <Link href="/">
            <li className="active hover:text-gray-500 cursor-pointer duration-300 ">
              SHOP
            </li>
          </Link>
          <Link href="/collection">
            <li className="hover:text-gray-500 cursor-pointer duration-300 ">
              COLLECTION
            </li>
          </Link>
          <Link href="/descriptionpage">
            <li className="hover:text-gray-500 cursor-pointer duration-300 ">
              STORES
            </li>
          </Link>
          <Link href="/">
            <li className="hover:text-gray-500 cursor-pointer duration-300 ">
              BLOG
            </li>
          </Link>
        </ul>
        <div className="flex ml-4">
          <div className="mt-2">
            <CiSearch />
          </div>
          <p className="border-b-2">search here</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
