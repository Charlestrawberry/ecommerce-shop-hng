import { AiFillStar } from "react-icons/ai";

import pic1 from "/public/images/image.png";
import Image from "next/image";
import { data } from "./Herodata"
import Link from "next/link";


const Herosection = () => {

    

  return (
    <section className="card-container">
        {
            data.map((item, i) => {
                <div>
                    <Link href='/' key={i} >
                    <Image src= {item.img} alt='pic1' />
                    </Link>
                </div>
            })
           
        }
    </section>
  )
}

export default Herosection

// <CiHeart />
//<Image src={pic1} alt="pic1" width={200} height={200}/>