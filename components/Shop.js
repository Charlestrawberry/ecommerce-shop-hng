"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import slide1 from "/public/image8.jpg";
import slide2 from "/public/image13.jpg";
import slide3 from "/public/image14.jpg";
import Image from "next/image";


const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Shop = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(200)]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="max-sm:w-full justify-center 
     max-[320px]:w-2/4 max-sm:ml-10 sm:w-full embla  overflow-hidden"  ref={emblaRef}>
      <div slides={SLIDES} options={OPTIONS} className="embla__container flex justify-center">
        {/* <div className="embla__slide"><Image src={slide1} alt="slider1" /> </div>
        <div className="embla__slide"><Image src={slide2} alt="slider2" /> </div>
        <div className="embla__slide"><Image src={slide3} alt="slider3" /> </div> */}
        <div className="embla__slide min-w-0 ">
          <Image src={slide2} alt="slider2" />{" "}
        </div>
        <div className="embla__slide min-w-0">
          <Image src={slide3} alt="slider3" />{" "}
        </div>
        <div className="embla__slide min-w-0">
          <Image src={slide1} alt="slider1" />{" "}
        </div>
      </div>
    </div>
  );
};
export default Shop;
