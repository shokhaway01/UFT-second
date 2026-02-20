import React from 'react'
import phone1 from "../../../assets/iphone-105.png"
import { RiCheckboxCircleFill } from 'react-icons/ri'

const SecondStep = () => {
  return (
    <div className=' md:relative md:flex p-10 bg-[#FCD0BA] md:justify-center md:items-center md:gap-20 md:rounded-2xl' >
          <img src={phone1} alt="phone" className='md:w-sm md:bottom-0 md:block hidden' />
          <div className="">
            <div className='flex flex-col md: gap-5 text-lg font-bold'>
              <h2 className='md:text-xl md:uppercase text-center md:text-left'>Get started with</h2>
              <h1 className='md:text-5xl text-center md:text-left'>Empower Cash Advance*</h1>
            </div>
              
            <div className="bg-[#fff] text-black flex justify-center items-center w-40 h-7 rounded-full mt-5 md:mt-10 mx-auto md:mx-0 md:mb-3">
              <button>COMING SOON</button>
            </div>

          <div className=" md:flex md:flex-col md:justify-between md:gap-5 md:mt-5 md:text-xl">
    
            <div className="flex items-center gap-3">
              <RiCheckboxCircleFill className='text-[25px] text-white'/>
              <h3 className='text-sm'>Start with a $200 <span className='hidden md:block'>line of credit and grow to $1,000 with every on-time payment</span></h3>
            </div>
            <div className="flex items-center gap-3">
              <RiCheckboxCircleFill className='text-[25px] text-white'/>
              <div className="">
                <h3>Enjoy 0% APR†</h3>
                <h3 className='text-sm hidden md:block'>when you pay your balance on your<span className='hidden md:block'>next paycheck date, otherwise 35.99% APR</span></h3>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RiCheckboxCircleFill className='text-[25px] text-white'/>
              <h3>Build credit over time‡</h3>
            </div>        

            <div className="bg-[#000] text-white flex justify-center items-center w-40 h-12 rounded-full mt-5 md:mt-10 mx-auto md:mx-0">
              <button>READ MORE</button>
            </div>
    
            </div>
          </div>
        </div>
  )
}

export default SecondStep