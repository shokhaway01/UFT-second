import React from 'react'
import Slider from 'react-slick'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const CreditCarousel = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          autoplay: true,
          autoplaySpeed: 200
        }
      },
      {
        breakpoint: 480,
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
                <div key={index} className='bg-[#EFEFEF] px-20 py-20 my-3 '>
                    <h1>{item.value}</h1>
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