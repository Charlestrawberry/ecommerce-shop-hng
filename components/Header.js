import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import HeaderSection from "./HeaderSection";

const Header = () => {
  return (
    <main className="w-[100%] top-0 left-0 z-[999] relative">
        <h3 className="bg-slate-950 text-white text-center
    py-2 font-mono shadow-lg">Sales Now!!! Save up to 50%</h3>
        <div className="flex w-full justify-between container mt-4 ml-9
        ">
            
            <h6 className=''>Shipping</h6>
            <h1 className="montserrat font-medium leading-10" >JANORE</h1>
            <div className="flex flex-row gap-4
              mr-8 ">
            <a href="#" className="hover:text-green-950 ">
            <FiUser />
            </a>
            <a href="#" className="hover:text-green-950 ">
            <HiOutlineShoppingBag />
            </a>
            <a href="#" className="hover:text-green-950 ">
            <CiHeart />
            </a>
            </div>
        </div>
        <HeaderSection />
    </main>
  )
}

export default Header