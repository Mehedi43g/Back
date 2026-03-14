import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Slider from "react-slick";

import st from "../../assets/st.png"
import st1 from "../../assets/st1.png"
import st2 from "../../assets/st2.png"
import st3 from "../../assets/st3.png"
import { GiSelfLove } from 'react-icons/gi';

const ProductCarousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center">
          <h3 className='w-[20px] text-[30px] font-Poppins text-black font-bold '>New Arrivals</h3>
          <Link className=''><p className='flex items-center gap-1 text-[14px] font-Poppins border-b'>More Products <MdOutlineArrowRightAlt /></p></Link>
        </div>
        <div className="">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className=" relative">

                <img src={st} alt="" />
                <div className="flex items-center absolute top-2 left-2">
                  <div className="flex flex-col gap-2 w-15 text-center font-Poppins font-bold">
                    <p className='text-[14px] p-1 bg-white text-black rounded-[10px]'>NEW</p>
                    <p className='text-[14px] p-1 bg-green-500 text-white rounded-[10px]'>-50%</p>
                  </div>
                </div>
                  <div className="absolute top-2 right-15 ">
                    <div className="p-2  rounded-full bg-white text-[18px] shadow-xl ">
                      <GiSelfLove  />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img src={st1} alt="" />
              </div>
              <div>
                <img src={st2} alt="" />
              </div>
              <div>
                <img src={st3} alt="" />
              </div>

            </Slider>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default ProductCarousel