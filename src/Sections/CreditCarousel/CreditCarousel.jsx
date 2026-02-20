import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const CreditCarousel = () => {

    const [refresh, setRefresh] = useState(false);

    useEffect( () => {
        setRefresh(true);
        setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 100);
    }, [] )


    const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplaySpeed: 300
      }
    }
  ]
}
//   };

    const data = [
        {
            value:'"Empower Thrive has been amazing since day one."',
            person:'Roberto V.'
        },
        {
            value:'"Empower Thrive got me through a tough spot."',
            person:'Karimov Sh.'
        },
        {
            value:'"Empower Thrive has been amazing since day one."',
            person:'Yaroslav Z.'
        },
        {
            value:'"Empower Thrive has been amazing since day one."',
            person:'Cristiano R.'
        },
        
    ]

  return (
    <div className='py-15  text-center'>

        <div className="text-4xl">
            <h1>Giving credit where credit's due</h1>
        </div>

        <div className="slider-container w-full  p-10" align='center'>
      <Slider key={refresh ? "loaded" : "loading"} {...settings} className='slider'>
        {
            data.map( (item, index) => (
                <div key={index} className='bg-[#EFEFEF]  py-20 my-10 rounded-3xl md:px-30 md:py-30 md:'>
                    <h1 className='text-2xl md:text-3xl md:mb-3'>{item.value}</h1>
                    <p className='text-sm md:text-2xl'>{item.person}</p>
                </div>
            ) )
        }
      </Slider>
    </div>

    </div>
  )
}

export default CreditCarousel