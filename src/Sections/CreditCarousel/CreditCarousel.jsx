import React from 'react'
import Slider from 'react-slick'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const CreditCarousel = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 200
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 200
        }
      }
    ]
  };

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

        <div className="slider-container overflow-hidden p-10 flex flex-col justify-center" align='center'>
      <Slider {...settings} className='slider  flex justify-center items-center'>
        {
            data.map( (item, index) => (
                <div key={index} className='bg-[#EFEFEF]  py-20 my-10 rounded-3xl'>
                    <h1 className='text-2xl'>{item.value}</h1>
                    <p className='text-sm'>{item.person}</p>
                </div>
            ) )
        }
      </Slider>
    </div>

    </div>
  )
}

export default CreditCarousel