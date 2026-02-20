import React from 'react'
import phone from "../../../assets/iphone-100.png"
import { RiCheckboxCircleFill } from "react-icons/ri";


const FirstStep = () => {
  return (
    <div className=' md:relative md:flex p-10 bg-[#FCD0BA] md:justify-center md:items-center md:gap-20 md:rounded-2xl' >
      <img src={phone} alt="phone" className='md:w-sm md:bottom-0 md:block hidden md:translate-y-10' />
      <div className="">
        <div className='flex flex-col md: gap-5 text-lg font-bold'>
          <h2 className='md:text-xl md:uppercase text-center md:text-left'>Get started with</h2>
          <h1 className='md:text-5xl text-center md:text-left'>Empower Cash Advance*</h1>
        </div>
          
      <div className=" md:flex md:flex-col md:justify-between md:gap-5 md:mt-5 md:text-xl">

        <div className="flex md:items-center gap-3">
          <RiCheckboxCircleFill className='text-[25px] text-white'/>
          <h3>Recieve up to $250 today</h3>
        </div>
        <div className="flex md:items-center gap-3">
          <RiCheckboxCircleFill className='text-[25px] text-white'/>
          <h3>No interest, no late <span className='hidden md:block'>fees, no credit checks</span></h3>
        </div>
        <div className="flex md:items-center gap-3">
          <RiCheckboxCircleFill className='text-[25px] text-white'/>
          <h3>Instant delivery^</h3>
        </div>        

        </div>
      </div>
    </div>
  )
}

export default FirstStep