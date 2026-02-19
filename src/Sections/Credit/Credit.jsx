import React from 'react'
 
import happyPerson from "../../assets/happyPerson.jpg"

const Credit = () => {
  return (
    <div className='bg-[#FCD0BA] text-black md:p-0 md:flex-row md:p-15 flex flex-col gap-5 text-5xl  md:p-30 md:text-7xl md:flex justify-center md:justify-around md:items-start md:gap-50'>
            
            <div className='p-3 text-center md:text-left relative mb-5 mt-10 '>
                <h1>We believe <br />credit should <br /> be more <br /> fair</h1>
            </div>
            <div className='px-15  mb-15 md:px-0 md:mb-0'>
                <img src={happyPerson} alt="dollar" className='md:w-md md:rounded-none rounded-full p-5' />
            </div>
    </div>
  )
}

export default Credit