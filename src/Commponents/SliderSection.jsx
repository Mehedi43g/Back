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
        <button className="button text-[28px] bg-white rounded-full p-2 absolute top-[40%] left-5" onClick={previous}>
          <GoArrowLeft />
        </button>
        <button className="button text-[28px] bg-white rounded-full p-2 absolute top-[40%] right-5" onClick={next}>
          <GoArrowRight />
        </button>
      </div>
      <div className="flex items-center pt-4">
        <div className="w-6/12">
        <h3 className='text-[62px] font-Inter font-semibold'>Simply Unique <span className='text-[#6C7275]'> / </span>  Simply Better <span className='text-[#6C7275]'>.</span></h3>
        </div>
        <div className="w-4/12">
          <p className='font-Inter text-[#6C7275]'><span className='font-bold text-black'>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
        </div>
      </div>

      </Container>


    </section>
      
    
  )
}

export default SliderSection