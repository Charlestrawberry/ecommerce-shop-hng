import React from 'react'
import Success from '/public/success.svg'
import Image from 'next/image'

const page = () => {
  return (
    <div className="justify-center items-center place-content-center ml-32">
        <h1>SUCCESSFUL PAYMENT PAGE</h1>
        <Image src={Success} alt="success" />

    </div>
  )
}

export default page