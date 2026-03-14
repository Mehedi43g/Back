import React from 'react'
import dd from '../../assets/dd.png'
import sofa from "../../assets/sofa.png"
import toster from "../../assets/toster.png"
import Container from '../Container'
import { Link } from 'react-router-dom'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
const BannerGrid = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center gap-6 ">
          <div className="w-6/12">
            <div className=" relative">
              <img className='w-full' src={sofa} alt="" />
              <div className=" absolute top-15 left-10">
                <h3 className=' text-[#141718] font-semibold font-Poppins text-[34px]'>Living Room </h3>
                <Link className='flex items-center gap-1 text-[18px] border-b w-32.5 font-Poppins text-[#141718]'>Shop Now <MdOutlineArrowRightAlt /></Link>
              </div>
            </div>
          </div>
          <div className="w-6/12 flex flex-col gap-6">
            <div className="">
              <div className=" relative">
                <img className='w-full' src={dd} alt="" />
                <div className=" absolute top-15 left-10">
                  <h3 className=' text-[#141718] font-semibold font-Poppins text-[34px]'>Bedroom </h3>
                  <Link className='flex items-center gap-1 text-[18px] border-b w-32.5 font-Poppins text-[#141718]'>Shop Now <MdOutlineArrowRightAlt /></Link>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" relative">
                <img className='w-full' src={toster} alt="" />
                <div className=" absolute top-15 left-10">
                  <h3 className=' text-[#141718] font-semibold font-Poppins text-[34px]'>Kitchen </h3>
                  <Link className='flex items-center gap-1 text-[18px] border-b w-32.5 font-Poppins text-[#141718]'>Shop Now <MdOutlineArrowRightAlt /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BannerGrid