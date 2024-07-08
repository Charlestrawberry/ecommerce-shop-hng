"use client"
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";
import Slide from "./Slide";
import Pic from '/public/contact.jpg'
import Pic3 from '/public/3.jpg'
import Pic2 from "/public/About.jpg"
import Pic4 from "/public/Home.jpg"

const HeroCarouse = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 1,
      img: Pic,
      title: "Trending Item",
      desc: "WOMEN'S LATEST FASHION SALE",
      icon: <CiHeart className="icon-love" />,
      price: "$150",
    },
    {
      id: 2,
      img: Pic3,
      title: "Sale Offer",
      desc: "NEW FASHION FOR SUMMER SALE",
      icon: <CiHeart className="icon-love" />,
      price: "$150",
    },
    {
      id: 3,
      img: Pic2,
      title: "Get Ready",
      desc: "LATEST FASHION TREND FOR YOU",
      icon: <CiHeart className="icon-love" />,
      price: "$150",
    },
    {
      id: 4,
      img: Pic4,
      title: "Imani",
      desc: "Long gown light coffee dress",
      icon: <CiHeart className="icon-love" />,
      price: "$150",
    },
    {
      id: 5,
      img: Pic,
      title: "Imani",
      desc: "Long gown light coffee dress",
      icon: <CiHeart className="icon-love" />,
      price: "$150",
    },
   
  ];
  return (
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            desc={item.desc}
            title={item.title}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarouse;
