import React from 'react'
import Container from './Container'
import logo from "../assets/Logo.png"
import { CiSearch } from 'react-icons/ci'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
const NavigationBar = () => {
  return (
    <section>

    <Container>

      <div className=''>
        <div className="flex gap-4 items-center justify-between">
          <img className='w-35' src={logo} alt="logo" />
          <div className="">
          <ul className='flex gap-4 font-Inter text-[#6C7275]  '>
            <li className='hover:text-[#141718] duration-300 ease-in-out'>Home</li>
            <li className='hover:text-[#141718] duration-300 ease-in-out'>Shop</li>
            <li className='hover:text-[#141718] duration-300 ease-in-out'>Product</li>
            <li className='hover:text-[#141718] duration-300 ease-in-out'>Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-4 font-Inter">
          <CiSearch  className='hover:scale-105 duration-300 ease-in-out'/>
          <VscAccount  className='hover:scale-105 duration-300 ease-in-out'/>
          <MdOutlineShoppingBag  className='hover:scale-105 duration-300 ease-in-out'/>
        </div>
        </div>
      </div>
    </Container>

    </section>
  )
}

export default NavigationBar