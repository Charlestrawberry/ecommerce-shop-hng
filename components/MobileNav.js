"use client";

import React from "react";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Navbar from "./Navbar";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <div className= "relative z-[500] flex flex-col items-center justify-between h-full py-8">
            <div className="flex flex-col items-center gap-y-22">
              <Navbar containerStyles='flex flex-col items-center gap-y-3 ' 
              linkStyles="mt-10 text-sm"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
