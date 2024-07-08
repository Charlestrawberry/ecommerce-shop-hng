import React from 'react'
import Image from 'next/image'
import Pic from '/public/contact.jpg'
import Pic3 from '/public/image1.png'

//Image import HERE
const HeroCarousel = () => {
    const Slidat = [
     { src: Pic, alt: "first"}
    ]

  return (
    <div>
      <Image src='/public/contact.jpg' alt='pico' width={100} height={100} />
      <Image src={Pic} alt='pic'  />
      <Image src={Pic3} alt='pica'  />
      {Slidat.map((item, i) => (
        <Image key={i} src={item.src} alt={item.alt} />
      ))}      
      </div>
  )
}

export default HeroCarousel