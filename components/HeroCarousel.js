"use client";
import Profile1 from "/public/contact.jpg";
import Image from "next/image";

const HeroCarousel = () => {
  const slides = [
    {
      url: "/public/contact.jpg",
    },
    {
      url: "/public/contact.jpg",
    },
  ];

  return <div>
    <Image
      src={Profile1} alt="pic"
      />
  </div>;
};

export default HeroCarousel;

{
  /*<div className="mt-3 max-sm:[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
       <div style={{backgroundImage:`url(${slides.[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'> */
}
