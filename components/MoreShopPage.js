import React from "react";
import ProductCart from "./ProductCart";
import livee from "/public/image6.jpg"
import Prod2 from "/public/image1.jpg";
import Prod3 from "/public/image2.jpg";
import Prod4 from "/public/image5.jpg";

const moreProducts = [
    {
        id: 1,
        img: livee,
        alt: "product1",
        title: "Imani",
        desc: "Nude Maxi Bodycon dress",
        rating: 3,
        price: "$550",
      },
      {
        id: 2,
        img: Prod2,
        alt: "product2",
        title: "Evadore",
        desc: "Short chiffon black dress",
        rating: 5,
        price: "$1200",
      },
      {
        id: 3,
        img: Prod3,
        alt: "product3",
        title: "Olessia",
        desc: "Midi lenght crepe dress",
        rating: 4,
        price: "$550",
      },
      {
        id: 4,
        img: Prod4,
        alt: "product4",
        title: "Olive",
        desc: "2 piece sweatshirt and skirt",
        rating: 4,
        price: "$200",
      },
];

const MoreShopPage = () => {
  return (
    <div>
      <h3 className=" ml-10 font-medium text-2xl pb-4 max-sm:text-base max-sm:px-16">
        WE THINK YOU&apos;LL LIKE THIS{" "}
      </h3>
      <div className="ml-10 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-x-8 xl:gap-y-10 ">
        {moreProducts.map((item, i) => (
          <ProductCart
            className="text-center justify-center"
            key={i}
            img={item.img}
            title={item.title}
            desc={`${item.desc}`}
            price={item.price}
            />
        ))}
        
      </div>
    </div>
  );
};

export default MoreShopPage;
