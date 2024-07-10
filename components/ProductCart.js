import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";

const ProductCart = ({ img, title, desc, rating, price }) => {
  const ratingIcon = () => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="px-0 border border-gray-300 rounded-2xl ">
      <div className="">
        {/* <Link
          href="#"
          className="absolute font-bold text-lg rounded-full z-[999]  hover:text-gray-500 mx-56 py-3 px-2"
        >
          <CiHeart />
        </Link> */}
        <Link href="/cart" className="hover:opacity-[2]">
        <Image
          className="w-full h-full object-cover relative rounded-t-2xl"
          src={img}
          width={304}
          height={400}
          alt={title}
        />
        </Link>
      </div>

      <div
        className="py-1
       px-4"
      >
        <h2 className="text-accent-foreground font-semibold ">{title}</h2>
        <p className="text-accent-foreground ">{desc}</p>
        <div>{ratingIcon(rating)}</div>
        <p>{price}</p>
      </div>
      
    </div>
  );
};

export default ProductCart;
// animate the cards