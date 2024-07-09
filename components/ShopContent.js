import React from "react";
import { AccordionAnimate } from "./AccordionAnimate";

const ShopContent = () => {
  return (
    <div className="max-sm:text-xs py-8 w-full max-sm:gap-12 flex justify-center gap-64">
      <div className="flex px-7 ">
        <AccordionAnimate />
      </div>
      <div className="font-bold py-4 gap-20">
        <h3>Evadore</h3>
        <p className="pb-4">$1200</p>
        <h4>Colors</h4>
        <div className="flex w-full h-auto gap-4">
        <div className="w-8 h-8 bg-black cursor-pointer"></div>
        <div className="w-8 h-8 bg-white border-4 cursor-pointer"></div>
        </div>

        <div>
        <h3 className="font-bold mt-2">Sizes</h3>
        <div className="font-bold space-y-4 flex w-full h-auto gap-4">
        
        <div className="mt-4 leading-3 text-center text-sm border-4 w-8 h-8 hover:text-[#f0a3ba] cursor-pointer ">xl</div>
        <div className="mt-8 leading-3 text-center text-sm border-4 w-8 h-8 hover:text-[#f0a3ba] cursor-pointer ">m</div>
        <div className="leading-3 text-center text-sm border-4 w-8 h-8 hover:text-[#f0a3ba] cursor-pointer ">lg</div>
        <div className="leading-3 text-center text-sm border-4 w-8 h-8 hover:text-[#f0a3ba] cursor-pointer ">xs</div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default ShopContent;
