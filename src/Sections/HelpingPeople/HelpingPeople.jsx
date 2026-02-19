import React from 'react'
import dollar from "../../assets/dollar.jpg"
import circleFrame from "../../assets/circleFrame.png"
import "./HelpingPeople.css"


const HelpingPeople = () => {
  return (
    <div className='bg-[#000] text-white text-center p-15 md:flex md:justify-center md:items-center md:gap-50'>
        <div className='px-15 mb-15 md:px-0 md:mb-0'>
            <img src={dollar} alt="dollar" className='w-md' />
        </div>
        <div className='p-3 relative'>
            <div className='mb-4 md:mb-5 md:text-sm'><h1>HELPING PEOPLE OUT WITH</h1></div>
            <div className='md:w-md md:p-0 relative'>
                <h1 className='text-xl   md:text-3xl  px-5 py-13 md:p-18 circleFrameContainer'>over $500 million <br /> advanced</h1>
            </div>
        </div>
    </div>
  )
}

export default HelpingPeople