import React from "react";
import ProductCart from "./ProductCart";
import Prod1 from "/public/image22.jpg";
import Prod2 from "/public/image1.jpg";
import Prod3 from "/public/image2.jpg";
import Prod4 from "/public/image5.jpg";

const moreProducts = [
  {
    id: 1,
    img: Prod1,
    alt: "product1",
    title: "SUIT JACKET",
    desc: "SHOP NOW",
  },
  {
    id: 2,
    img: Prod2,
    alt: "product2",
    title: "JUMP SUIT",
    desc: "SHOP NOW",
  },
  {
    id: 3,
    img: Prod3,
    alt: "product3",
    title: "LOUNGE WEAR",
    desc: "SHOP NOW",
  },
  {
    id: 4,
    img: Prod4,
    alt: "product4",
    title: "SWEAT",
    desc: "SHOP NOW",
  },
];

const MoreHerosection = () => {
  return (
    <div>
      <h3 className="ml-10 font-medium text-2xl pb-4 max-sm:text-base max-sm:px-16">
        MORE CATEGORIES TO EXPLORE{" "}
      </h3>
      <div className="ml-10 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-x-8 xl:gap-y-10 ">
        {moreProducts.map((item, i) => (
          <ProductCart
            className="text-center justify-center"
            key={i}
            img={item.img}
            title={item.title}
            desc={`${item.desc}`}
            />
        ))}
        
      </div>
    </div>
  );
};

export default MoreHerosection;
