import React from 'react'
import Navbar from './Navbar/Navbar'

import image from "../../assets/Rectangle-1.png"
import image1 from "../../assets/Rectangle-2.png"
import mainBg from "../../assets/main-bg.jpg"

const Main = () => {
  return (
    <div>
        <Navbar />

        <div className='md:flex overflow-hidden md:px-30 md:items-center'>
        <div className="mainContent bg-[#fff] p-5 mt-10 pb-15 md:flex md:flex-col md:jcustify-center md:items-start md:w-[60%]">
            <div className=' mt-2 md:w-[80%]'>
                <h1 className='text-7xl font-["Roboto",sans-serif] font-normal md:text-8xl'>Your journey to better credit starts here</h1>
                <p className='md:w-[300px]'>Think the credit system is stacked against you? So do we. We'll help you get the credit you deserve.</p> 
            </div>
            <div className="mt-4">
                <div className='md:flex md:w-[100%] relative'>
                    <input type="text" className="w-full p-4 mb-3  border border-gray-300 rounded-md md:mb-0 md:w-[75%] md:rounded-l-full" placeholder="Enter your email to get started" />
                    <button className="w-full  bg-[#000000] font-['Roboto',sans-serif] p-3.5 text-white  rounded-md md:rounded-r-full md:w-[25%] md:text-[16px]">Get Started</button>
                </div>
                <div className='my-7 font-["Roboto",sans-serif] font-normal text-gray-600'>
                    <p className='md:w-3xs text-left md:translate-x-[50%] md:text-bold'>
                        Get up to a $250 advance* today, grow to a $1,000 line of credit* over time
                    </p>
                    <div className='flex justify-around mt-9 md:justify-start md:gap-5'>
                        <img src={image} alt="rectangle" />
                        <img src={image1} alt="rectangle-1" />
                        <img src={image} alt="rectangle-2" />
                    </div>
                </div>
                
            </div>
        </div>

        <div className='md:w-[4/2] md:py-15 md:flex md:jcustify-center md:items-center md:mt-10 hidden'>
            <img src={mainBg} alt="people" />
        </div>

        </div>
                
                <div className='md:w-[40%] md:pl-30 p-5'>
                    <p className='text-black-600'>Empower is a financial technology company, not a bank. Banking services provided by nbkc bank, Member FDIC. Empower Thrive provided by FinWise Bank, Member FDIC.</p>
                </div>

    </div>
  )
}

export default Main