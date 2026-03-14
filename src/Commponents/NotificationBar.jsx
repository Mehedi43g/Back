import React from 'react'
import { LuTicketPercent } from 'react-icons/lu'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NotificationBar = () => {
  return (

    <section>
         <div className="bg-[#F3F5F7] text-white text-center text-sm py-2">
          <div className="items-center flex gap-2 justify-center font-semibold text-[15px] text-[#343839]">
             <LuTicketPercent className='text-[22px]'/> 30% off storewide — Limited time! <Link to="./shop" className='flex items-center gap-1 text-[#377DFF]'>Shop Now <MdOutlineArrowRightAlt className='text-[22px]' /></Link>
          </div>
           </div>
    </section>
  )
}

export default NotificationBar