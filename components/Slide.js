import Image from "next/image";
import React from "react";

const Slide = ({ img, title,  price, desc, icon }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2  lg:space-y-4 bg-[#db6767] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none ">
        <h3 className='text-accent text-[24px] lg:text-[28px] text-gray-700' >{title}</h3>

        <h2 className="text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[2,3] ">{desc} </h2>
        <h3 className= "text-[24px] text-gray-500  "> Starting at{" "}
          <b className="text-[20px] md:text-[24px] lg:text-[30px]  "> {price}</b>.00
        </h3>

        <div className="bg-accent text-pink-950 p-2 px-4 rounded-lg inline-block cursor-pointer text-[14px] md:text-[16px] hover:bg-slate-300 ">
          SHOP NOW
        </div>
      </div>

      <Image className=""
      src={img}
      alt="banner"
      width={1200}
      height={8000}
      />
    </div>
  );
};

export default Slide;
