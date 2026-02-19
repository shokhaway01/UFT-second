import React from 'react'
import apprating from "../../assets/apprating.jpg"
import appStore from "../../assets/appStore.jpg"
import googlePlay from "../../assets/googlePlay.jpg"


const AppRating = () => {
  return (
        <div className='bg-[#000] text-white text-center p-15 md:flex md:justify-center md:items-center md:gap-50'>
           
            <div className='px-15 mb-15 md:px-0 md:mb-0 hidden  md:block'>
               <img src={apprating} alt="apprating" className='w-md' />
           </div>

           <div className='md:p-15 md:relative flex flex-col'>
               <div className='m-15 flex flex-col md:gap-5 gap-15 md:text-Roboto '>

                    <div className='md:my-3 '>
                        <h1 className='md:text-sm'>APPLE</h1>
                        <p className='md:text-[10px]'>New Apps We Love</p>
                    </div>
                    <div className='md:my-3 '>
                        <h1 className='md:text-sm'>APPLE</h1>
                        <p className='md:text-[10px]'>New Apps We Love</p>
                    </div>
                    <div className='md:my-3 '>
                        <h1 className='md:text-sm'>APPLE</h1>
                        <p className='md:text-[10px]'>New Apps We Love</p>
                    </div>
                    

               </div>



              

                    <div className="flex md:flex-row justify-center items-center gap-5 md:gap-10">
                        <img src={appStore} alt="appStore" className='md:w-40 w-30'/>
                        <img src={googlePlay} alt="googlePlay" className='md:w-40 w-30' />
                    </div>

           </div>
           
       </div>
  )
}

export default AppRating