import Footertems from "./Footertems";

import {
  PRODUCTS,
  JANORE,
  MORE_INFO,
  CORPORATE,
  FOLLOW_US,
} from "./FooterMenu";
import { FaFacebook } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const FooterItems = () => {
  return (
    <div>
      <div className="bg-[#feeafd] w-[100%] right-0 left-0  text-slate-900 grid gap-6 sm:grid-cols-3 lg:grid-cols-5  sm:px-12 px-4 py-8">
        <Footertems Links={PRODUCTS} title=" HELP" />
        <Footertems Links={JANORE} title="JANORE" />
        <Footertems Links={MORE_INFO} title="MORE INFO" />
        <Footertems Links={CORPORATE} title=" CORPORATE" />
        
        <div className="flex flex-col gap-2 ">
          <div>
            <h1 className="font-bold">FOLLOW US</h1>
          </div>
          <div className="grid flex-col justify-start space-y-2 cursor-pointer ">
            <FaXTwitter className='hover:text-teal-700 '/>
            <BiLogoTiktok className='hover:text-teal-700 '/>
            <FaFacebook className='hover:text-teal-700 '/>
            <IoLogoInstagram className='hover:text-teal-700 '/>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:px-12 bg-[#feeafd] sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center  text-slate-900 text-sm pb-4 ml-8">
        <span>Terms and Conditions </span>
        <span> &copy; 2024 Hng TAsk2. All rights reserved. </span>
      </div>
    </div>
  );
};

export default FooterItems;

// md:flex md:justify-between sm:px-12 px-4  md:items-center
