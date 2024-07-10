import React from "react";
import Image from "next/image";
import ProductCart from "./ProductCart";
import Product1 from "/public/image6.jpg";
import Product2 from "/public/image8.jpg";
import Product3 from "/public/image7.jpg";
import Product4 from "/public/image5.jpg";
import Product5 from "/public/image10.jpg";
import Product6 from "/public/image12.jpg";
import NavigationDrop from "./NavigationDrop";
import HeroPagination from "./HeroPagination";

const newProducts = [
  {
    id: 1,
    img: Product1,
    alt: "product1",
    title: "Imani",
    desc: "Nude Maxi Bodycon dress",
    rating: 3,
    price: "$550",
  },
  {
    id: 2,
    img: Product2,
    alt: "product2",
    title: "Evadore",
    desc: "Short chiffon black dress",
    rating: 5,
    price: "$1200",
  },
  {
    id: 3,
    img: Product3,
    alt: "product3",
    title: "Olessia",
    desc: "Midi lenght crepe dress",
    rating: 4,
    price: "$550",
  },
  {
    id: 4,
    img: Product4,
    alt: "product4",
    title: "Olive",
    desc: "2 piece sweatshirt and skirt",
    rating: 4,
    price: "$200",
  },
  {
    id: 5,
    img: Product5,
    alt: "product5",
    title: "Cerato",
    desc: "Gen z Jean and crop top",
    rating: 3,
    price: "$230",
  },
  {
    id: 6,
    img: Product6,
    alt: "product6",
    title: "Senduce",
    desc: "Nude Maxi Bodycon dress",
    rating: 4,
    price: "$550",
  },
  {
    id: 7,
    img: Product2,
    alt: "product2",
    title: "Imani",
    desc: "Nude Maxi Bodycon dress",
    rating: 4,
    price: "$550",
  },
  {
    id: 8,
    img: Product3,
    alt: "product3",
    title: "Imani",
    desc: "Nude Maxi Bodycon dress",
    rating: 4,
    price: "$550",
  },
  {
    id: 9,
    img: Product4,
    alt: "product4",
    title: "Imani",
    desc: "Nude Maxi Bodycon dress",
    rating: 4,
    price: "$550",
  },
  {
    id: 10,
    img: Product5,
    alt: "product5",
    title: "Imani",
    desc: "Nude Maxi Bodycon dress",
    rating: 4,
    price: "$550",
  },
  {
    id: 11,
    img: Product6,
    alt: "product6",
    title: "Imani",
    desc: "Nude Maxi Bodycon dress",
    rating: 4,
    price: "$550",
  },
  {
    id: 12,
    img: Product1,
    alt: "product1",
    title: "Imani",
    desc: "Nude Maxi Bodycon dress",
    rating: 4,
    price: "$550",
  },
];

const Herosection = () => {
  return (
    <div className="container ">
      <div>
        <h2 className="font-medium text-2xl pb-4 ">New Products </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-x-8 xl:gap-y-10 ">
          {newProducts.map((item, i) => (
            <ProductCart
              key={i}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className=" flex py-8 justify-between mb-0">
        <div className="flex max-sm:hidden justify-center place-content-center items-center">
          <NavigationDrop
          
            title="5 rows per page"
            sectionOne="1"
            sectionTwo="2"
            SectionThree="3"
          />
        </div>
        <div className="max-sm:text-center max-sm:ml-16">
          <HeroPagination />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
