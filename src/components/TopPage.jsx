import React from 'react'
import { BsFillTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'

const TopPage = () => {



  return (
    <header className="bg-[#242A36] text-white p-4 mb-5">

      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col  mb-4 md:mb-0">
          <a href="hello@jayantbhatt.in" className='hover:scale-105 duration-200 hover:text-yellow-400'>@ hello@jayantbhatt.in</a>
        </div>
        <div className="flex flex-col  mb-4 md:mb-0">
          <BsFillTelephoneFill size={12} /> <a href="tel:+18002162020" className='hover:scale-105 duration-200 hover:text-yellow-400'> 011-41324533 |  +91 8447185912</a>

        </div>
        <div className="flex flex-col  mb-4 md:mb-0">
          <p className='hover:scale-105 duration-200 hover:text-yellow-400'> <BsFillClockFill size={12} />Mon - Sat: 10.00 am - 8.00 pm</p>
        </div>
        <div className="flex flex-col ">
          <p className='hover:scale-105 duration-200 hover:text-yellow-400'><IoLocationSharp size={12} />A71, New Friends Colony, New Delhi – 110025</p>
        </div>
      </div>
    </header>
  )
}

export default TopPage