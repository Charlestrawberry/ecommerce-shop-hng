import React from "react";
import cartPic from "/public/image13.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <div className="flex max-sm:flex-col ">
        <div className="flex ">
          <h3 className="font-semibold  px-8 py-3 max-sm:text-sm "> MY CART</h3>
          {/* <hr className="py-4 " /> */}
        </div>
        <div className="flex ">
          <div className="mt-6 ml-10 max-sm:mt-3">
            <Image src={cartPic} width={200} height={104} alt="cart" />
          </div>
          <div className="max-sm:text-sm mt-3 w-full">
            <div className="flex flex-col mt-6 gap-x-10 ml-11">
              <h3>Round Neck Cape Dress</h3>
              <div className="flex flex-row gap-4">
                <h4>Color: </h4>
                <div className=" w-8 h-8 bg-black cursor-pointer"></div>{" "}
              </div>

              <div className="mt-4 gap-6 flex flex-row ">
                <h4>Size: </h4>
                <div className="leading-3 text-center text-sm border-4 w-8 h-8 hover:text-[#f0a3ba] cursor-pointer">
                  M
                </div>{" "}
              </div>

              <div className=" gap-4 mt-4 flex flex-row">
                <h4>Price: </h4>
                <div>$1200</div>{" "}
              </div>
              <div></div>
            </div>
          </div>

          <div
            className="border-b-2 mt-6 flex flex-col gap-20 space-y-14 ml-11 cursor-pointer max-sm:text-sm max-sm:gap-10 max-sm:mr-8
           "
          >
            <div className="hover:overline underline">
              <h4>Remove</h4>
            </div>
            <div className="hover:overline underline ">
              <h4 className="pr-8">Add to wishlist</h4>
            </div>
          </div>
        </div>

        <div className="mt-6 gap-5 mb-3 max-sm:text-sm max-sm:justify-center max-sm:ml-10">
          <h2 className="font-medium ">Cart Summary</h2>
          <hr></hr>

          <div className="mt-4 font-light gap-20 flex flex-row">
            <h3>Evadore</h3>
            <span>$1200</span>
          </div>
          <hr />
          <div className="mt-7 font-light gap-20 flex flex-row mb-6">
            <h3>Subtotal</h3>
            <span>$1200</span>
          </div>

          <Link href="/checkout">
            <Button
              className="bg-black text-white rounded-none py-3 px-20 hover:bg-slate-800 transition-all duration-75"
              variant="primary"
            >
              Check Out
            </Button>
          </Link>

          <div className="cart-card container ">
            <div className="bg-[#f4f5f8] shadow-sm">
              <div className="w-40 mt-8 m-14 h-40  py-5 mb-1  text-xl border-b-2">
                <h3 className="font-semibold text-sm leading-3">Evadore</h3>
                <h3 className="leading-3 mt-3">RETURNS</h3>
                <p className="text-xs font-light py-4">
                  {" "}
                  Returns are are accwpted within 28 days for full refund or
                  exchange. We have refund depots in NIgeria, London and
                  Johanesburg. T&Cs apply
                </p>
                <Link href="/">
                  <p className="text-xs underline hover:overline ">
                    Click here for more info!
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
