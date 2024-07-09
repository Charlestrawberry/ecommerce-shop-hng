import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import HeaderSection from "./HeaderSection";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <main className="w-[100%] top-0 left-0 z-[999] relative">
      <h3
        className="bg-slate-950 text-white text-center
    py-2 font-mono shadow-lg hover:text-[#feeafd]"
      >
        Sales Now!!! Save up to 50%
      </h3>
      <div>
      <div
        className="flex w-full justify-between container mt-4 ml-9
        "
      >
        <div className="hidden lg:flex gap-1">
        <h6 className="">Shipping</h6>
        {/* <h1 className="montserrat font-medium leading-10">JANORE</h1> */}

        <div className="flex flex-row gap-4 mr-8 "> 
          <div>
          <Link href="#" className="hover:text-green-950 ">
            <FiUser className="font-bold" />
          </Link>
          </div>
          <div>
            <Link href="/cart" className="hover:text-green-950 ">
              <HiOutlineShoppingBag className="relative" />
              <span className="absolute z-[999] bg-red-500 h-[20px] w-[18px] rounded-full place-items-center text-white grid  ">
                {" "}
                0
              </span>
            </Link>
          </div>
          <div>
          <Link href="#" className="hover:text-green-950 ">
            <CiHeart className="font-bold " />
          </Link>
          </div>
        </div>

        {/* <MobileNav /> */}
        </div>
        </div>
      </div>
      <HeaderSection />
    </main>
  );
};

export default Header;
