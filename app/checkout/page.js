import { AccordionAni } from '@/components/AccordionAni'
import { Input } from '@/components/ui/input'
import visapic from '/public/visa.jpg'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ButtonDemo } from '@/components/ButtonDemo'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-row gap-10 max-sm:text-sm max-sm:gap-10 max-sm:flex-col">
      <div className="w-2/4 ml-16 pb-8">
        <div className="font-light">
          <h3 className="font-semibold mt-4">Delivery Options</h3>
          <hr />
          <AccordionAni 
          item1="Internation Shipping"
          item2="Local delivery"
          item3="Terms $ Cnditions"
          item4="FAQs"
          
          />
        </div>

        <div className="mt-6">
          <h3 className="pb-3">Customer Address</h3>
          <div>
            <div className="flex gap-2">
              <form>
              <label for="fname">First name</label>
              <Input type="text" id="fname" name="fname" Placeholder="First Name" className="border-2"/>
              </form>

              <form>
              <label for="fname">Last name</label>
              <Input type="text" id="fname" name="fname" Placeholder="Last Name" className="border-2"/>
              </form>
            </div>

              <div className="flex">
              <div className="flex gap-2 mt-2">
              <form>
              <label for="fname">Country</label>
              <Input type="text" id="fname" name="fname" Placeholder="Country" className="border-2"/>
              </form>
              
              <form>
              <label for="fname">City</label>
              <Input type="text" id="fname" name="fname" Placeholder="City" className="border-2"/>
              </form>
              <form>
              <label for="fname">Zip Code</label>
              <Input type="text" id="fname" name="fname" Placeholder="Zip Code" className="border-2"/>
              </form>
            </div>
              </div>

              <div className="mt-2">
              <form>
              <label for="fname">Address 1</label>
              <Input type="text" id="fname" name="fname" Placeholder="Address 1" className="border-2"/>
              </form>
              <form className="mt-2">
              <label for="fname">Address 2</label>
              <Input type="text" id="fname" name="fname" Placeholder="Address 2" className="border-2"/>
              </form>
              </div>

            <div className="flex gap-2">
            <form className="mt-2">
              <label for="fname">Phone Number</label>
              <Input type="text" id="fname" name="fname" Placeholder="Phone Number" className="border-2"/>
              </form>

              <form className="mt-2 ">
              <label for="fname">Email Address</label>
              <Input type="text" id="fname" name="fname" Placeholder="Email Address" className="border-2"/>
              </form>
            </div>
<br />
            <hr />
          </div>
        </div>
          <div>
            <h3 className="pb-3">Payment Methods</h3>
          <form>
              <label for="fname"></label>
              <Input type="text" id="fname" name="fname" Placeholder="Debit/Credit Card" className="border-2"/>
            
              </form>

              <form className="mt-2">
              <label for="fname"></label>
              <Input type="text" id="fname" name="fname" Placeholder="Paypal" className="border-2"/>
              </form>
          </div>
          <div className="flex mt-3 gap-2">
          <form className="">
              <label for="fname">Card Number</label>
              <Input type="text" id="fname" name="fname" Placeholder="**********" className="border-2"/>
              </form>

              <form>
              <label for="fname">Card Holder</label>
              <Input type="text" id="fname" name="fname" Placeholder="Card Holder" className="border-2"/>
              </form>
          </div>

          <div className="flex mt-3 gap-2">
          <form>
              <label for="fname">Month</label>
              <Input type="text" id="fname" name="fname" Placeholder="Month" className="border-2"/>
              </form>
              
              <form>
              <label for="fname">Year</label>
              <Input type="text" id="fname" name="fname" Placeholder="Year" className="border-2"/>
              </form>
              <form>
              <label for="fname">CVC</label>
              <Input type="text" id="fname" name="fname" Placeholder="CVC" className="border-2"/>
              </form>
          </div>

      </div>

      {/* col right side */}
      <div className="font-bold py-4 gap-20 max-sm:text-sm max-sm:gap-10 max-sm:justify-center items-center place-content-center ml-16">
        <h3>Cart Summary</h3>
        <hr />

        <div className="flex flex-col">
        <div className="flex font-normal gap-16 pb-1"><p>Items(s) total</p> <span className="pb-1">$1200</span></div>
        <div className="flex font-normal gap-16 pb-1"><p>Shipping Fees</p> <span className="pb-1">$100</span></div>
        <div className="flex font-normal gap-16 pb-1"><p>Delivery Fees</p> <span className="pb-1">$100</span></div>
        <div className="flex font-normal gap-[134px] pb-1"><p>Tax</p> <span className="pb-4">$500</span></div>
        </div>
        <form  className="max-sm:w-1/2">
              <label for="fname" className="font-normal gap-16 pb-1">Enter Promotional Code</label>
              <Input type="text" id="fname" name="fname" Placeholder="Promotional Code" className="border-2"/>
         </form>  
         <Link href="/success">
            <Button
              className="bg-black text-white rounded-none py-3 px-20 hover:bg-slate-800 transition-all duration-75"
              variant="primary"
            >
              SUBMIT
            </Button>
          </Link> 
         <hr className="max-sm:w-1/2"/>
         <div className="font-light flex mt-4"><p>Estimated Total</p> <span className="pb-1">$1450</span></div>  
         <Link href="/success">
            <Button
              className="bg-black text-white rounded-none py-3 px-10 hover:bg-slate-800 transition-all duration-75"
              variant="primary"
            >
              Pay $1450
            </Button>
          </Link>
        </div>
      
    </div>
  )
}

export default page