import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const Footer = () => {
  return (
    <footer >
      <div className="md:flex md:justify-between sm:px-12 px-4 bg-[#ececec] md:items-center py-7">
        {/* width issue */}
        <div className="w-96">
          <h1 className="lg:text-2xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            {" "}
            SIGN UP FOR JANORE UPDATES
          </h1>
          <p className="font-normal text-left py-3 mt-3">
            Be in the know about the latest events, new collections and exciting
            special programs from Janore
          </p>
        </div>
        <div className=''>
          {/* flex issue */}
          <h3 className='font-medium'>Gender</h3>
          <div className="inline-flex items-center flex-row">
            <RadioGroup defaultValue="option-one">
              <div className="flex   gap-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Male</Label>
              </div>
              <div className="flex gap-2 ">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Female</Label>
              </div>
              <div className="flex gap-2 ">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-two">Fluid</Label>
              </div>
            </RadioGroup>
          </div>

          <div className='mt-2 '>
            <Label htmlFor="email" className="mt-3 pb-2">Email Sign-up</Label>
            <div className=" flex w-full max-w-sm items-center gap-1.5">
              <Input type="email" id="email" placeholder="Enter email" className='sm:w-72'/>
              <Button type="submit" className='duration-300 py-2.5 px-5 md:w-auto w-full'>SUBSCRIBE</Button>
            </div>
            
          </div>
        </div>
       
      </div>
      
    </footer>
  );
};

export default Footer;
