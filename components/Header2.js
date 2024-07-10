import React from "react";
import Logo from "/public/JANORE.svg";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import HeaderSection from "./HeaderSection";
import MobileNav from "./MobileNav";

const Header2 = () => {
  return (
    //container py-4 flex justify-between
    //flex items-center justify-between

    <div className="">
      <div
        className="bg-slate-950 text-white text-center
    py-2 font-mono shadow-lg hover:text-[#feeafd]"
      >
        <h3>Sales Now!!! Save up to 50%</h3>
      </div>
      
      <div className="/">
        <div className="//">
          <div className="flex lg:flex gap-1 w-full justify-around container mt-4 ml-9 max-sm:hidden">
            <div>
              <h6 className="text-gray-900 text-[]">Shipping</h6>
            </div>

            <div className="flex">
              <Link href="/shop"> <Image src={Logo} alt="logo" /></Link>
            </div>

            <div className="flex flex-row gap-4 mr-8 ">
              <div className="header_top_icon">
                <Link href="#" className="hover:text-green-950 ">
                  <FiUser className="font-bold" />
                </Link>
              </div>
              <div className="header_top_icon">
                <Link href="/cart" className="hover:text-green-950 ">
                  <HiOutlineShoppingBag className="relative" />
                  <span className="absolute bg-red-400 h-[20px] w-[18px] rounded-full  place-items-center text-white grid translate-x-1 translate-y-1 ">
                    {" "}
                    0
                  </span>
                </Link>
              </div>
              <div className="header_top_icon">
                <Link href="#" className="hover:text-green-950 ">
                  <CiHeart className="font-bold " />
                </Link>
              </div>
            </div>

          </div>
            <div className="relative max-sm:visible sm:hidden float-right">
              
              <MobileNav />
            </div>
        </div>
      </div>
      {/*  */}
      
    </div>
  );
};

export default Header2;
