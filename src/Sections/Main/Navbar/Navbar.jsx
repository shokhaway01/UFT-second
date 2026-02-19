import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navTopText bg-[#C1CBE7] text-center p-4 family-['Roboto', 'sans-serif'] weight-[800] md:flex md:justify-center md:gap-2.5">
            <p>Hear first hand how our product is</p>
            <p>helping those who need it the most</p>
        </div>
        <ul className='flex justify-around py-5 uppercase font-["Roboto",sans-serif] font-medium text-[12px] md:justify-center md:gap-10'>
            <li>About US</li>
            <li>Customer Stories</li>
            <li>Quiz</li>
            <li>Support</li>
        </ul>
    </div>
  )
}

export default Navbar