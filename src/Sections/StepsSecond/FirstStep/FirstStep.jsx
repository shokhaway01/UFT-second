import React from 'react'
import star from "../../../assets/star.png"
import { RiCheckboxCircleFill } from "react-icons/ri";


const FirstStep = () => {
  return (
    <div className=' md:relative md:flex p-10 bg-[#CCD3E7] md:justify-center md:items-center md:gap-20 md:rounded-2xl' >
      <img src={star} alt="phone" className='md:w-sm md:bottom-0 md:block hidden md:translate-y-10' />
      <div className="">
        <div className='flex flex-col md: gap-5 text-lg font-bold'>
          <h1 className='md:text-5xl text-center md:text-left md:w-3/4'>External Checking Account</h1>
        </div>
          
      <div className=" md:flex md:flex-col md:justify-between md:gap-5 md:mt-5 md:text-xl">

        <div className="flex md:items-center gap-3 md:w-3/4">
          <h3>Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.</h3>
        </div>
               

        </div>
      </div>
    </div>
  )
}

export default FirstStep