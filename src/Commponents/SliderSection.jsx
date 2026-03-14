import React, { useRef } from 'react'
import logo from "../assets/sites.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../Commponents/Container';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
const SliderSection = () => {
    let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container className=' relative'>
       <Slider  ref={slider => {
          sliderRef = slider;
        }} {...settings}>
      <div>
        <img className='w-full' src={logo} alt="" />
      </div>
      <div>
        <img className='w-full' src={logo} alt="" />
      </div>
      <div>
       <img className='w-full' src={logo} alt="" />
      </div>
      <div>
       <img className='w-full' src={logo} alt="" />
      </div>
      <div>
        <img className='w-full' src={logo} alt="" />
      </div>
      <div>
        <img className='w-full' src={logo} alt="" />
      </div>
    </Slider>
    <div style={{ textAlign: "center" }}>
        <button className="button text-[28px] bg-white rounded-full p-2 absolute top-[50%] left-5" onClick={previous}>
          <GoArrowLeft />
        </button>
        <button className="button text-[28px] bg-white rounded-full p-2 absolute top-[50%] right-5" onClick={next}>
          <GoArrowRight />
        </button>
      </div>

      </Container>


    </section>
      
    
  )
}

export default SliderSection